import type { QuizAnswers } from '@/lib/marketing/quiz/estimate'

export type StepKey =
  | 'studio'
  | 'team'
  | 'bookings'
  | 'ticket'
  | 'channels'
  | 'marketplaceBookings'
  | 'commission'
  | 'noShows'
  | 'giftCards'
  | 'hours'

export type Draft = Partial<QuizAnswers>

const ORDER: readonly StepKey[] = [
  'studio',
  'team',
  'bookings',
  'ticket',
  'channels',
  'marketplaceBookings',
  'commission',
  'noShows',
  'giftCards',
  'hours',
]

/** Which answer field each question fills. */
export const FIELD: Record<StepKey, keyof QuizAnswers> = {
  studio: 'studio',
  team: 'team',
  bookings: 'bookingsPerWeek',
  ticket: 'ticket',
  channels: 'channels',
  marketplaceBookings: 'marketplaceBookings',
  commission: 'commissionRate',
  noShows: 'noShowsPerWeek',
  giftCards: 'giftCards',
  hours: 'messageHoursPerWeek',
}

export const isMultiSelect = (step: StepKey): boolean => step === 'channels'

/** The two marketplace questions only appear for studios that use one. */
export function visibleSteps(draft: Draft): readonly StepKey[] {
  const usesMarketplace = draft.channels?.includes('marketplace') ?? false
  return ORDER.filter((s) => usesMarketplace || (s !== 'marketplaceBookings' && s !== 'commission'))
}

/** A finished draft, with the marketplace fields zeroed when they were skipped. */
export function toAnswers(draft: Draft): QuizAnswers | null {
  const usesMarketplace = draft.channels?.includes('marketplace') ?? false
  const complete = {
    ...draft,
    marketplaceBookings: usesMarketplace ? draft.marketplaceBookings : 0,
    commissionRate: usesMarketplace ? (draft.commissionRate ?? null) : null,
  }
  const required: (keyof QuizAnswers)[] = [
    'studio',
    'team',
    'bookingsPerWeek',
    'ticket',
    'channels',
    'marketplaceBookings',
    'noShowsPerWeek',
    'giftCards',
    'messageHoursPerWeek',
  ]
  return required.every((k) => complete[k] !== undefined) ? (complete as QuizAnswers) : null
}
