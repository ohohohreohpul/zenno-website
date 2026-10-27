import type { Metadata } from 'next'
import { SITE_URL } from './config'
import { LANGS, OG_LOCALE, localePath, localizedAlternates, type Lang } from './lang'

interface PageMetaInput {
  lang: Lang
  /** Locale-free route path, e.g. '/' or '/booking'. */
  path: string
  title: string
  description: string
  /**
   * True when the route exists in every locale (adds the hreflang set).
   * English-only legacy pages pass false and get a self-canonical only.
   */
  isLocalized?: boolean
  /** Locales the route exists in, when not all of them (location pages). */
  langs?: readonly Lang[]
  /** Share image path (1200×630) when the route has no opengraph-image file. */
  image?: string
}

/** One metadata shape for every page: canonical, hreflang, Open Graph, Twitter. */
export function pageMetadata({ lang, path, title, description, isLocalized = true, langs = LANGS, image }: PageMetaInput): Metadata {
  const url = localePath(lang, path)
  return {
    title,
    description,
    alternates: isLocalized ? localizedAlternates(lang, path, langs) : { canonical: url },
    openGraph: {
      type: 'website',
      siteName: 'Zenno',
      title,
      description,
      url,
      locale: OG_LOCALE[lang],
      ...(image ? { images: [{ url: image, width: 1200, height: 630, alt: title }] } : {}),
      ...(isLocalized
        ? { alternateLocale: langs.filter((l) => l !== lang).map((l) => OG_LOCALE[l]) }
        : {}),
    },
    twitter: { card: 'summary_large_image', title, description },
  }
}

/** Absolute URL for a locale path — for JSON-LD, which needs full URLs. */
export function absoluteUrl(lang: Lang, path: string = '/'): string {
  return `${SITE_URL}${localePath(lang, path)}`
}
