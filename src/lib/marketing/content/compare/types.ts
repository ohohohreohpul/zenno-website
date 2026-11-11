import type { Lang } from '../../lang'
import type { FaqItem } from '../faq'
import type { Headline } from '../landing/types'

export const COMPETITOR_IDS = ['shore', 'treatwell', 'phorest', 'fresha'] as const
export type CompetitorId = (typeof COMPETITOR_IDS)[number]

/** An official page of the competitor that backs a fact in the table. */
export interface Source {
  label: string
  href: string
}

/** One topic, compared side by side in plain words. */
export interface CompareRow {
  topic: string
  zenno: string
  them: string
  /** Index into the page's sources for the competitor's cell. */
  source?: number
}

export interface FitColumn {
  title: string
  items: string[]
}

/** "Zenno vs X" page. Competitor facts must come from the competitor's own site. */
export interface ComparePageContent {
  meta: { title: string; description: string }
  /** Breadcrumb and link label, e.g. "Zenno vs Shore". */
  label: string
  hero: { kicker: string; title: Headline; lead: string }
  fit: { kicker: string; title: Headline; zenno: FitColumn; them: FitColumn }
  table: { kicker: string; title: Headline; rows: CompareRow[] }
  switching?: { kicker: string; title: Headline; paragraphs: string[] }
  faq: { kicker: string; title: Headline; items: FaqItem[] }
  sources: Source[]
}

export type ComparePageSet = Record<Lang, ComparePageContent>

/** One topic across every provider; source indexes point into the hub's sources. */
export interface MatrixRow {
  topic: string
  cells: Record<'zenno' | CompetitorId, string>
  sources?: Partial<Record<CompetitorId, number>>
}

/** /compare: all providers in one matrix, then a card per "Zenno vs X" page. */
export interface CompareHubContent {
  meta: { title: string; description: string }
  hero: { kicker: string; title: Headline; lead: string }
  matrix: { kicker: string; title: Headline; rows: MatrixRow[] }
  cards: { kicker: string; title: Headline; summaries: Record<CompetitorId, string> }
  faq: { kicker: string; title: Headline; items: FaqItem[] }
  sources: Source[]
}
