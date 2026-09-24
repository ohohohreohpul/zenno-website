/**
 * The marketing site is deployed independently of the product app (see
 * README for Vercel/Hostinger setup), so "Get started" / "Sign in" links
 * must point at the app's own domain instead of a relative path.
 * Set NEXT_PUBLIC_APP_URL at build time to override the default.
 */
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.zennohq.studio'

export function appHref(path: string = '/'): string {
  return `${APP_URL}${path}`
}

/**
 * This site's own canonical domain — used for metadataBase, sitemap.xml,
 * robots.txt, and JSON-LD. Single source of truth; update this one constant
 * before launch instead of hunting across files.
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://zen-agent.vercel.app'

/**
 * Zenno Booking (previously onbuuk.com) keeps its own accounts and billing, so
 * its sign-up / sign-in buttons point at its own app, not the Zenno dashboard.
 */
export const BOOKING_APP_URL = process.env.NEXT_PUBLIC_BOOKING_APP_URL || 'https://app.onbuuk.com'

/** The legacy domain, shown as "previously onbuuk" small print. */
export const LEGACY_BOOKING_DOMAIN = 'onbuuk.com'
