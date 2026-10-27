import type { CityIndustry, CityLang, CitySlug } from '../../cities'
import type { CityContent, CityContentSet, CityIndustryCopy } from './types'
import { BERLIN } from './berlin'
import { HAMBURG } from './hamburg'
import { MUENCHEN } from './muenchen'
import { KOELN } from './koeln'
import { FRANKFURT } from './frankfurt'
import { DUESSELDORF } from './duesseldorf'
import { STUTTGART } from './stuttgart'
import { LEIPZIG } from './leipzig'

const CITY_CONTENT: Record<CitySlug, CityContentSet> = {
  berlin: BERLIN,
  hamburg: HAMBURG,
  muenchen: MUENCHEN,
  koeln: KOELN,
  frankfurt: FRANKFURT,
  duesseldorf: DUESSELDORF,
  stuttgart: STUTTGART,
  leipzig: LEIPZIG,
}

export function cityContent(city: CitySlug, lang: CityLang): CityContent {
  return CITY_CONTENT[city][lang]
}

export function cityIndustryCopy(industry: CityIndustry, city: CitySlug, lang: CityLang): CityIndustryCopy {
  return CITY_CONTENT[city][lang].industries[industry]
}

export type { CityContent, CityIndustryCopy } from './types'
