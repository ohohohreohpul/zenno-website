import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/marketing/config'

export const dynamic = 'force-static'

// The dashboard, login, and API routes are excluded — they're app surfaces
// behind auth, not public marketing content search engines should index.
const HOME_LANGS = { en: `${SITE_URL}/`, de: `${SITE_URL}/de` }
const BOOKING_LANGS = { en: `${SITE_URL}/booking`, de: `${SITE_URL}/de/booking` }

/** hreflang pairs for routes that exist in both languages. */
const LOCALIZED: Record<string, Record<string, string>> = {
  '/': HOME_LANGS,
  '/de': HOME_LANGS,
  '/booking': BOOKING_LANGS,
  '/de/booking': BOOKING_LANGS,
}

export default function sitemap(): MetadataRoute.Sitemap {
  const marketingRoutes = [
    { path: '/', priority: 1 },
    { path: '/de', priority: 1 },
    { path: '/yoga-studios', priority: 0.8 },
    { path: '/salons-spas', priority: 0.8 },
    { path: '/clinics', priority: 0.8 },
    { path: '/booking', priority: 0.9 },
    { path: '/de/booking', priority: 0.9 },
    { path: '/pricing', priority: 0.7 },
    { path: '/comparison', priority: 0.7 },
  ]

  return marketingRoutes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    changeFrequency: 'weekly',
    priority: route.priority,
    ...(LOCALIZED[route.path] ? { alternates: { languages: LOCALIZED[route.path] } } : {}),
  }))
}
