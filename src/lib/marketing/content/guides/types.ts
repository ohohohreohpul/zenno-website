import type { Lang } from '../../lang'
import type { Headline } from '../landing/types'

/** One chapter of a page's guide: an H3 with prose and an optional checklist. */
export interface GuideSection {
  /** Stable anchor for the table of contents, e.g. 'pricing-trials'. */
  id: string
  heading: string
  paragraphs: string[]
  bullets?: string[]
}

/** Long-form, practical guide at the end of a pillar or feature page. */
export interface Guide {
  kicker: string
  title: Headline
  intro: string
  /** Label above the table of contents. */
  tocLabel: string
  sections: GuideSection[]
}

export type GuideSet = Record<Lang, Guide>
