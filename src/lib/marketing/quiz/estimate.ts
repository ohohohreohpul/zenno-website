/**
 * The Studio-Check estimate: what Zenno is worth to one studio per month,
 * from the owner's own answers plus a few labelled, conservative assumptions.
 * Pure functions, no imports, so it runs in the browser and under `node --test`.
 * Every assumption here is printed on the result screen with its source.
 */

export type StudioType = 'massage_spa' | 'beauty' | 'nails' | 'hair' | 'other'
export type TeamSize = 'solo' | '2-3' | '4-9' | '10+'
export type Channel = 'phone' | 'dm' | 'marketplace' | 'own_tool'
export type GiftCards = 'none' | 'paper' | 'online'

export interface QuizAnswers {
  studio: StudioType
  team: TeamSize
  bookingsPerWeek: number
  ticket: number
  channels: readonly Channel[]
  /** New bookings a month that arrive through a marketplace; 0 when none. */
  marketplaceBookings: number
  /** Commission the owner says they pay (0.25 = 25 %); null when they don't know. */
  commissionRate: number | null
  noShowsPerWeek: number
  giftCards: GiftCards
  messageHoursPerWeek: number
}

export interface Range {
  low: number
  high: number
}

export type LineKey = 'commission' | 'afterHours' | 'noShows' | 'giftCards'

export interface EstimateLine {
  key: LineKey
  range: Range
}

export interface Estimate {
  lines: readonly EstimateLine[]
  total: Range
  hoursSaved: Range
  /** True when the total hit the cap and was cut down to it. */
  isCapped: boolean
  plan: 'free' | 'zenno'
  isGiftSeason: boolean
}

export const WEEKS_PER_MONTH = 4.3
/** Share of salon bookings made while the studio is closed (Phorest, 5,000+ salons). */
export const AFTER_HOURS_SHARE = 0.46
/** Of those, the share a phone/DM-only studio loses today. Our own cautious guess. */
export const AFTER_HOURS_LOST: Range = { low: 0.05, high: 0.1 }
/** No-shows that automatic reminders prevent. Cautious: vendors claim 50 %+. */
export const NO_SHOWS_PREVENTED: Range = { low: 0.25, high: 0.4 }
/** Clients a month who buy a gift card once it can be bought online. */
export const GIFT_BUYER_SHARE: Range = { low: 0.02, high: 0.04 }
export const GIFT_CARD_VALUE = 50
/** November and December: gift-card demand roughly doubles. */
export const GIFT_SEASON_FACTOR = 2
/** Used when the owner doesn't know their marketplace commission. */
export const DEFAULT_COMMISSION = 0.2
/** Share of message/phone time the AI receptionist and online booking take over. */
export const TIME_SAVED_SHARE: Range = { low: 0.4, high: 0.6 }
/** The total never claims more than this share of the studio's monthly revenue. */
export const MAX_SHARE_OF_REVENUE = 0.4
/** Below this monthly midpoint a solo studio is told the Free plan is enough. */
export const FREE_PLAN_THRESHOLD = 200

const ROUND_TO = 10

const roundRange = (r: Range): Range => ({
  low: Math.round(r.low / ROUND_TO) * ROUND_TO,
  high: Math.round(r.high / ROUND_TO) * ROUND_TO,
})

const scale = (base: number, r: Range): Range => ({ low: base * r.low, high: base * r.high })

const sum = (ranges: readonly Range[]): Range =>
  ranges.reduce((acc, r) => ({ low: acc.low + r.low, high: acc.high + r.high }), { low: 0, high: 0 })

const midpoint = (r: Range): number => (r.low + r.high) / 2

/** Studios that already take bookings online don't lose the after-hours ones. */
function isOfflineOnly(channels: readonly Channel[]): boolean {
  return channels.length > 0 && channels.every((c) => c === 'phone' || c === 'dm')
}

export function isGiftSeason(date: Date): boolean {
  const month = date.getMonth()
  return month === 10 || month === 11
}

function commissionLine(a: QuizAnswers): EstimateLine | null {
  if (!a.channels.includes('marketplace') || a.marketplaceBookings <= 0) return null
  const saved = a.marketplaceBookings * a.ticket * (a.commissionRate ?? DEFAULT_COMMISSION)
  return { key: 'commission', range: { low: saved, high: saved } }
}

function afterHoursLine(a: QuizAnswers): EstimateLine | null {
  if (!isOfflineOnly(a.channels)) return null
  const afterHoursRevenue = a.bookingsPerWeek * WEEKS_PER_MONTH * AFTER_HOURS_SHARE * a.ticket
  return { key: 'afterHours', range: scale(afterHoursRevenue, AFTER_HOURS_LOST) }
}

function noShowLine(a: QuizAnswers): EstimateLine | null {
  if (a.noShowsPerWeek <= 0) return null
  const lost = a.noShowsPerWeek * WEEKS_PER_MONTH * a.ticket
  return { key: 'noShows', range: scale(lost, NO_SHOWS_PREVENTED) }
}

function giftCardLine(a: QuizAnswers, isSeason: boolean): EstimateLine | null {
  if (a.giftCards === 'online') return null
  const clientsPerMonth = a.bookingsPerWeek * WEEKS_PER_MONTH
  const season = isSeason ? GIFT_SEASON_FACTOR : 1
  return { key: 'giftCards', range: scale(clientsPerMonth * GIFT_CARD_VALUE * season, GIFT_BUYER_SHARE) }
}

function capTotal(total: Range, monthlyRevenue: number): { total: Range; isCapped: boolean } {
  const cap = monthlyRevenue * MAX_SHARE_OF_REVENUE
  if (total.high <= cap) return { total, isCapped: false }
  return { total: { low: Math.min(total.low, cap), high: cap }, isCapped: true }
}

export function estimate(a: QuizAnswers, today: Date = new Date()): Estimate {
  const isSeason = isGiftSeason(today)
  const lines = [commissionLine(a), afterHoursLine(a), noShowLine(a), giftCardLine(a, isSeason)]
    .filter((l): l is EstimateLine => l !== null)
    .map((l) => ({ ...l, range: roundRange(l.range) }))

  const monthlyRevenue = a.bookingsPerWeek * WEEKS_PER_MONTH * a.ticket
  const capped = capTotal(sum(lines.map((l) => l.range)), monthlyRevenue)
  const total = roundRange(capped.total)
  const hoursSaved = scale(a.messageHoursPerWeek * WEEKS_PER_MONTH, TIME_SAVED_SHARE)
  const plan = a.team === 'solo' && midpoint(total) < FREE_PLAN_THRESHOLD ? 'free' : 'zenno'

  return {
    lines,
    total,
    hoursSaved: { low: Math.round(hoursSaved.low), high: Math.round(hoursSaved.high) },
    isCapped: capped.isCapped,
    plan,
    isGiftSeason: isSeason,
  }
}

/** Studios need a few weeks to switch over, so the first months count only partly. */
export const RAMP_UP: readonly number[] = [0.5, 0.8]
export const PROJECTION_MONTHS = 12

export interface ProjectionPoint {
  /** First day of the month (local time). */
  month: Date
  monthly: Range
  cumulative: Range
}

/**
 * Month-by-month gain for the next year, starting next month: each month uses
 * that month's season (gift cards peak in Nov/Dec), the first months ramp up.
 */
export function projection(a: QuizAnswers, today: Date = new Date(), months: number = PROJECTION_MONTHS): ProjectionPoint[] {
  const points: ProjectionPoint[] = []
  let cumulative: Range = { low: 0, high: 0 }
  for (let i = 0; i < months; i++) {
    const month = new Date(today.getFullYear(), today.getMonth() + 1 + i, 1)
    const ramp = RAMP_UP[i] ?? 1
    const { total } = estimate(a, month)
    const monthly = { low: total.low * ramp, high: total.high * ramp }
    cumulative = { low: cumulative.low + monthly.low, high: cumulative.high + monthly.high }
    points.push({ month, monthly, cumulative })
  }
  return points
}
