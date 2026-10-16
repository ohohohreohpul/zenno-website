/**
 * This site's own canonical domain — used for metadataBase, sitemap.xml,
 * robots.txt, and JSON-LD. Single source of truth; zennohq.studio is retired
 * and should redirect here.
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://zennohq.com'

/** Help centre and support inbox, linked from the FAQ and the footer. */
export const HELP_URL = 'https://docs.zennohq.com'
export const SUPPORT_EMAIL = 'support@zennohq.com'

/**
 * Where every "Start free" button goes. The site does not link into the app
 * (no sign-in or sign-up on book.zennohq.com from here), so new shops write to
 * us and get set up. Point NEXT_PUBLIC_START_URL at a form or calendar later.
 */
export const START_URL =
  process.env.NEXT_PUBLIC_START_URL || `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent('Zenno – start')}`

/** The legacy domain, shown as "previously onbuuk" small print in the footer. */
export const LEGACY_BOOKING_DOMAIN = 'onbuuk.com'
