import type { ChatScript } from '@/components/marketing/ChatAutoplay'
import type { CityIndustry, CityLang } from '../../cities'
import type { FaqItem } from '../faq'
import type { Headline } from '../landing/types'

/** What is specific to one industry in one city. */
export interface CityIndustryCopy {
  /** Neighbourhoods where these businesses cluster; shown as chips and named in the copy. */
  districts: string[]
  hero: { title: Headline; lead: string }
  /** The local story: who books, when, and what that means for the business. */
  local: { title: Headline; paragraphs: string[] }
  /** Example AI-assistant conversation set in this city. */
  chat: ChatScript
  /** Questions an owner in this city asks; answered within what Zenno does today. */
  faq: FaqItem[]
}

export interface CityContent {
  /** One paragraph on the city's clientele, shared by its industry pages. */
  clientele: string
  industries: Record<CityIndustry, CityIndustryCopy>
}

export type CityContentSet = Record<CityLang, CityContent>
