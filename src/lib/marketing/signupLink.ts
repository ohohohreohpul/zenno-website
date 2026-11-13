/** Ad tags carried from a landing page into the app, so each account is attributed to its ad. */
const FORWARDED_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'utm_id', 'fbclid']

/**
 * The app's sign-up URL with the current page's ad tags plus `extra` (plan, source page…).
 * Only tags and answers go into the URL, never personal data.
 */
export function signupLink(startUrl: string, currentSearch: string, extra: Record<string, string> = {}): string {
  const url = new URL('signup', startUrl)
  const incoming = new URLSearchParams(currentSearch)
  for (const key of FORWARDED_PARAMS) {
    const value = incoming.get(key)
    if (value) url.searchParams.set(key, value)
  }
  if (!url.searchParams.has('utm_source')) url.searchParams.set('utm_source', 'zennohq')
  for (const [key, value] of Object.entries(extra)) url.searchParams.set(key, value)
  return url.toString()
}
