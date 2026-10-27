import type { ChatScript } from '@/components/marketing/ChatAutoplay'
import type { FaqItem } from '../faq'

/** A two-part headline: solid text, then the dimmed "ghost" half. */
export type Headline = [string, string]

export interface TitledItem {
  title: string
  body: string
}

export interface PhotoNote {
  /** Small caption over the photo, e.g. "Booked by AI". */
  label: string
  value: string
}

export interface StoryBlock {
  kicker: string
  title: Headline
  paragraphs: string[]
  image: string
  imageAlt: string
  note?: PhotoNote
}

export interface Scene extends TitledItem {
  image: string
  imageAlt: string
  note: PhotoNote
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
    /** Describes the hero photo for screen readers and image search. */
    imageAlt?: string
    chat?: ChatScript
  }
  /** Editorial "a day in the business" block: photo beside a few paragraphs. */
  story?: StoryBlock
  /** Photo rows, each one moment of the day the product handles. */
  scenes?: { kicker: string; title: Headline; items: Scene[] }
  /** The kinds of business the page speaks to, shown as chips. */
  niches?: { kicker: string; title: Headline; lead: string; items: string[] }
  points: { kicker: string; title: Headline; items: TitledItem[] }
  steps?: { kicker: string; title: Headline; items: TitledItem[] }
  /** Shared homepage section to embed: a spotlight ledger or the AI-readiness table. */
  embed?: 'noShow' | 'tax' | 'readiness'
  faq: { kicker: string; title: Headline; items: FaqItem[] }
  /** Short Open Graph card copy. */
  og: { line1: string; line2: string; sub: string }
}
