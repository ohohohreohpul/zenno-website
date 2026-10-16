import type { ChatScript } from '@/components/marketing/ChatAutoplay'
import type { FaqItem } from '../faq'

/** A two-part headline: solid text, then the dimmed "ghost" half. */
export type Headline = [string, string]

export interface TitledItem {
  title: string
  body: string
}

export interface LandingContent {
  meta: { title: string; description: string }
  /** Breadcrumb + related-link label. */
  label: string
  hero: {
    kicker: string
    title: Headline
    lead: string
    ctaPrimary: string
    ctaSecondary: string
    /** Photo hero with a chat card when set; text hero otherwise. */
    image?: string
    chat?: ChatScript
  }
  points: { kicker: string; title: Headline; items: TitledItem[] }
  steps?: { kicker: string; title: Headline; items: TitledItem[] }
  /** Shared homepage section to embed: a spotlight ledger or the AI-readiness table. */
  embed?: 'noShow' | 'tax' | 'readiness'
  faq: { kicker: string; title: Headline; items: FaqItem[] }
  /** Short Open Graph card copy. */
  og: { line1: string; line2: string; sub: string }
}
