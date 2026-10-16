import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/marketing/config'
import { LANGS, localizedAlternates, localePath, type Lang } from '@/lib/marketing/lang'
import { FEATURE_SLUGS, INDUSTRY_SLUGS } from '@/lib/marketing/pages'

export const dynamic = 'force-static'

/** Routes that exist in every locale; each gets the full hreflang set. */
const LOCALIZED_ROUTES = [
  { path: '/', priority: 1 },
  { path: '/ai-receptionist', priority: 0.9 },
  { path: '/vouchers', priority: 0.9 },
  { path: '/booking', priority: 0.7 },
  { path: '/pricing', priority: 0.9 },
  ...INDUSTRY_SLUGS.map((slug) => ({ path: `/${slug}`, priority: 0.8 })),
  ...FEATURE_SLUGS.map((slug) => ({ path: `/${slug}`, priority: 0.8 })),
]

const absolute = (path: string) => `${SITE_URL}${path}`

function localizedEntry(lang: Lang, path: string, priority: number): MetadataRoute.Sitemap[number] {
  const { languages } = localizedAlternates(lang, path)
  return {
    url: absolute(localePath(lang, path)),
    changeFrequency: 'weekly',
    // German is the primary market; other locales rank just below it.
    priority: lang === 'de' ? priority : Math.round(priority * 0.9 * 10) / 10,
    alternates: {
      languages: Object.fromEntries(Object.entries(languages).map(([l, p]) => [l, absolute(p)])),
    },
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const localized = LOCALIZED_ROUTES.flatMap(({ path, priority }) =>
    LANGS.map((lang) => localizedEntry(lang, path, priority)),
  )
  return localized
}
