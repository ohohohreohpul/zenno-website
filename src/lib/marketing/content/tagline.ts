import type { Lang } from '@/lib/marketing/lang'

/**
 * The brand line: the three outcomes Zenno sells. Used by the tour's end
 * card, the closing CTA and the footer, and as the hero's static fallback.
 * Line breaks are set by hand: one outcome per line where the title
 * honours them (Thai has no word spaces to break on).
 */
export const TAGLINE: Record<Lang, string> = {
  en: 'More bookings.\nMore gift cards.\nMore regulars.',
  de: 'Mehr Buchungen.\nMehr Gutscheine.\nMehr Stammgäste.',
  th: 'คิวเต็มขึ้น ขายบัตรของขวัญได้มากขึ้น\nลูกค้าประจำกลับมาบ่อยขึ้น',
}

export interface HeroRotation {
  /** The fixed start of the line, shown before the cycling word. */
  prefix: string
  words: readonly string[]
  /** The whole line for screen readers, which skip the animation. */
  spoken: string
}

/** The hero headline as one line whose last word cycles through the outcomes. */
export const HERO_ROTATION: Record<Lang, HeroRotation> = {
  en: {
    prefix: 'More',
    words: ['bookings.', 'gift cards.', 'regulars.'],
    spoken: 'More bookings, more gift cards, more regulars.',
  },
  de: {
    prefix: 'Mehr',
    words: ['Buchungen.', 'Gutscheine.', 'Stammgäste.'],
    spoken: 'Mehr Buchungen, mehr Gutscheine, mehr Stammgäste.',
  },
  th: {
    prefix: '',
    words: ['คิวเต็มขึ้น', 'ขายบัตรของขวัญได้มากขึ้น', 'ลูกค้าประจำกลับมาบ่อยขึ้น'],
    spoken: 'คิวเต็มขึ้น ขายบัตรของขวัญได้มากขึ้น ลูกค้าประจำกลับมาบ่อยขึ้น',
  },
}
