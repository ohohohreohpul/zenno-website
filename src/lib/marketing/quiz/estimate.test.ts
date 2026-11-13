import { test } from 'node:test'
import assert from 'node:assert/strict'
import { estimate, projection, type QuizAnswers } from './estimate.ts'

const NOVEMBER = new Date('2026-11-13T12:00:00Z')
const MARCH = new Date('2026-03-10T12:00:00Z')

const base: QuizAnswers = {
  studio: 'massage_spa',
  team: '2-3',
  bookingsPerWeek: 35,
  ticket: 60,
  channels: ['phone'],
  marketplaceBookings: 0,
  commissionRate: null,
  noShowsPerWeek: 0,
  giftCards: 'online',
  messageHoursPerWeek: 3.5,
}

const line = (e: ReturnType<typeof estimate>, key: string) => e.lines.find((l) => l.key === key)

test('commission line uses the owner’s own bookings, ticket and rate', () => {
  // Arrange
  const answers = { ...base, channels: ['marketplace'] as const, marketplaceBookings: 10, commissionRate: 0.35 }

  // Act
  const result = estimate(answers, MARCH)

  // Assert: 10 × €60 × 35 % = €210
  assert.deepEqual(line(result, 'commission')?.range, { low: 210, high: 210 })
})

test('unknown commission falls back to the cautious default', () => {
  const answers = { ...base, channels: ['marketplace'] as const, marketplaceBookings: 10 }
  // 10 × €60 × 20 % = €120
  assert.deepEqual(line(estimate(answers, MARCH), 'commission')?.range, { low: 120, high: 120 })
})

test('after-hours line only applies to phone/DM-only studios', () => {
  // 35 × 4.3 × 46 % × €60 = €4,153.8 → 5–10 % = €207.7–415.4 → rounded €210–420
  assert.deepEqual(line(estimate(base, MARCH), 'afterHours')?.range, { low: 210, high: 420 })
  const online = { ...base, channels: ['phone', 'own_tool'] as const }
  assert.equal(line(estimate(online, MARCH), 'afterHours'), undefined)
})

test('no-show line prevents 25–40 % of the owner’s no-shows', () => {
  const answers = { ...base, noShowsPerWeek: 4 }
  // 4 × 4.3 × €60 = €1,032 → €258–412.8 → €260–410
  assert.deepEqual(line(estimate(answers, MARCH), 'noShows')?.range, { low: 260, high: 410 })
})

test('gift-card line doubles in November and December, and is skipped when already online', () => {
  const answers = { ...base, giftCards: 'paper' as const }
  // 35 × 4.3 clients × €50 × 2–4 % = €150.5–301 → €150–300
  assert.deepEqual(line(estimate(answers, MARCH), 'giftCards')?.range, { low: 150, high: 300 })
  assert.deepEqual(line(estimate(answers, NOVEMBER), 'giftCards')?.range, { low: 300, high: 600 })
  assert.equal(line(estimate(base, NOVEMBER), 'giftCards'), undefined)
})

test('total is capped at 40 % of monthly revenue', () => {
  // Tiny studio, huge no-show and commission numbers: €40 × 12 × 4.3 = €2,064 revenue → cap €825.6
  const answers: QuizAnswers = {
    ...base,
    bookingsPerWeek: 12,
    ticket: 40,
    channels: ['marketplace'],
    marketplaceBookings: 40,
    commissionRate: 0.35,
    noShowsPerWeek: 7,
    giftCards: 'none',
  }
  const result = estimate(answers, NOVEMBER)
  assert.equal(result.isCapped, true)
  assert.equal(result.total.high, 830)
})

test('solo studio with a small estimate is pointed to the Free plan, teams to Zenno', () => {
  const solo = { ...base, team: 'solo' as const, bookingsPerWeek: 12, channels: ['own_tool'] as const }
  assert.equal(estimate(solo, MARCH).plan, 'free')
  assert.equal(estimate({ ...solo, team: '2-3' }, MARCH).plan, 'zenno')
})

test('hours saved are 40–60 % of the monthly message time', () => {
  // 3.5 × 4.3 = 15.05 h → 6.02–9.03 → 6–9
  assert.deepEqual(estimate(base, MARCH).hoursSaved, { low: 6, high: 9 })
})

test('projection ramps up over the first two months and peaks in the gift-card season', () => {
  // Arrange: paper gift cards only, no other gains, starting from mid-October
  const answers = { ...base, channels: ['own_tool'] as const, giftCards: 'paper' as const }
  const october = new Date(2026, 9, 15)

  // Act
  const points = projection(answers, october)

  // Assert: Nov (ramp 50 %) and Dec (ramp 80 %) are in season (€300–600), Jan onwards is €150–300 at 100 %
  assert.equal(points.length, 12)
  assert.equal(points[0].month.getMonth(), 10)
  assert.deepEqual(points[0].monthly, { low: 150, high: 300 })
  assert.deepEqual(points[1].monthly, { low: 240, high: 480 })
  assert.deepEqual(points[2].monthly, { low: 150, high: 300 })
  // Nov 2026 – Oct 2027: only the first two months are in season
  assert.deepEqual(points[11].cumulative, { low: 150 + 240 + 150 * 10, high: 300 + 480 + 300 * 10 })
})
