import type { Channel, GiftCards, LineKey, StudioType, TeamSize } from '@/lib/marketing/quiz/estimate'

export interface Option<V> {
  value: V
  label: string
}

export interface Question<V> {
  q: string
  hint?: string
  options: readonly Option<V>[]
}

export interface Source {
  label: string
  url: string
}

/**
 * Copy for the Studio-Check (/check). Strings with {placeholders} are filled
 * in by `fill()`. Numbers in option values feed the estimate directly.
 */
export interface CheckCopy {
  meta: { title: string; description: string }
  intro: {
    kicker: string
    title: string
    lede: string
    start: string
    promise: string
  }
  /** "Frage {n} von {total}" */
  stepOf: string
  back: string
  next: string
  questions: {
    studio: Question<StudioType>
    team: Question<TeamSize>
    bookings: Question<number>
    ticket: Question<number>
    channels: Question<Channel>
    marketplaceBookings: Question<number>
    commission: Question<number | null>
    noShows: Question<number>
    giftCards: Question<GiftCards>
    hours: Question<number>
  }
  result: {
    kicker: string
    /** "ca. {low}–{high} mehr im Monat" */
    total: string
    /** "und {low}–{high} Stunden weniger am Handy" */
    hours: string
    nothing: string
    lines: Record<LineKey, { label: string; how: string }>
    seasonNote: string
    cappedNote: string
    costLabel: string
    plans: {
      free: { name: string; line: string; cta: string }
      zenno: { name: string; line: string; cta: string }
    }
    /** "Zenno kostet 49 € im Monat, also etwa {times}× weniger als es bringt." */
    payback: string
    howTitle: string
    howIntro: string
    sources: readonly Source[]
    disclaimer: string
    restart: string
  }
}

export function fill(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => (key in values ? String(values[key]) : match))
}
