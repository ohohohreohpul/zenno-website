/**
 * This site's own canonical domain — used for metadataBase, sitemap.xml,
 * robots.txt, and JSON-LD. Single source of truth; zennohq.studio is retired
 * and should redirect here.
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://zennohq.com'

/** Help centre and support inbox, linked from the FAQ and the footer. */
export const HELP_URL = 'https://docs.zennohq.com'
export const SUPPORT_EMAIL = 'support@zennohq.com'

/** The Zenno app (booking, calendar, AI receptionist in one). Every "Start free" button opens it. */
export const START_URL = process.env.NEXT_PUBLIC_START_URL || 'https://book.zennohq.com/'

/** The legacy domain, shown as "previously onbuuk" small print in the footer. */
export const LEGACY_BOOKING_DOMAIN = 'onbuuk.com'
