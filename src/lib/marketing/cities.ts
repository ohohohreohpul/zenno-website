import type { Lang } from './lang'
import type { LandingSlug } from './pages'

/**
 * Location pages: one per industry × city, at /{industry}/{city}/. Germany is
 * the market, so they exist in German and English only (Thai owners in Germany
 * read the German or English page); hreflang lists just these two.
 */
export const CITY_SLUGS = [
  'berlin',
  'hamburg',
  'muenchen',
  'koeln',
  'frankfurt',
  'duesseldorf',
  'stuttgart',
  'leipzig',
] as const

export type CitySlug = (typeof CITY_SLUGS)[number]

export const CITY_INDUSTRIES = ['salons-spas', 'yoga-studios', 'clinics'] as const satisfies readonly LandingSlug[]
export type CityIndustry = (typeof CITY_INDUSTRIES)[number]

export type CityLang = Extract<Lang, 'de' | 'en'>
export const CITY_LANGS: readonly CityLang[] = ['de', 'en']

export function hasCityPages(lang: Lang): lang is CityLang {
  return (CITY_LANGS as readonly Lang[]).includes(lang)
}

export function isCityIndustry(slug: string): slug is CityIndustry {
  return (CITY_INDUSTRIES as readonly string[]).includes(slug)
}

/** City names as each language writes them. */
export const CITY_NAME: Record<CitySlug, Record<Lang, string>> = {
  berlin: { de: 'Berlin', en: 'Berlin', th: 'เบอร์ลิน' },
  hamburg: { de: 'Hamburg', en: 'Hamburg', th: 'ฮัมบวร์ก' },
  muenchen: { de: 'München', en: 'Munich', th: 'มิวนิก' },
  koeln: { de: 'Köln', en: 'Cologne', th: 'โคโลญ' },
  frankfurt: { de: 'Frankfurt', en: 'Frankfurt', th: 'แฟรงก์เฟิร์ต' },
  duesseldorf: { de: 'Düsseldorf', en: 'Düsseldorf', th: 'ดึสเซลดอร์ฟ' },
  stuttgart: { de: 'Stuttgart', en: 'Stuttgart', th: 'ชตุทท์การ์ท' },
  leipzig: { de: 'Leipzig', en: 'Leipzig', th: 'ไลพ์ซิก' },
}

/** Locale-free route path of a location page, e.g. '/yoga-studios/berlin'. */
export function cityPath(industry: CityIndustry, city: CitySlug): string {
  return `/${industry}/${city}`
}

/** Hero photo of an industry in a city. */
export function cityImage(industry: CityIndustry, city: CitySlug): string {
  return `/images/cities/${industry}-${city}.webp`
}

/** Small version of the hero photo for the city grid. */
export function cityThumb(industry: CityIndustry, city: CitySlug): string {
  return `/images/cities/${industry}-${city}-thumb.webp`
}

/** 1200×630 share image for a location page. */
export function cityOgImage(industry: CityIndustry, city: CitySlug): string {
  return `/images/cities/og/${industry}-${city}.jpg`
}
