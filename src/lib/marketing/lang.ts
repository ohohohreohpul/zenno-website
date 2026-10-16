/**
 * Site locales. German is the primary market, so it lives at the root ("/");
 * English and Thai are prefixed ("/en", "/th"). Every locale-aware URL on the
 * site is built here, so the hreflang map, sitemap, nav and canonicals agree.
 */
export type Lang = 'de' | 'en' | 'th'

export const LANGS: readonly Lang[] = ['de', 'en', 'th']
export const DEFAULT_LANG: Lang = 'de'

const PREFIX: Record<Lang, string> = { de: '', en: '/en', th: '/th' }

/** Open Graph locale codes. */
export const OG_LOCALE: Record<Lang, string> = { de: 'de_DE', en: 'en_US', th: 'th_TH' }

/** Short label for the language switcher. */
export const LANG_LABEL: Record<Lang, string> = { de: 'DE', en: 'EN', th: 'TH' }

/** Full language name, written in that language (for aria-labels). */
export const LANG_NAME: Record<Lang, string> = { de: 'Deutsch', en: 'English', th: 'ไทย' }

/**
 * Site path for `path` in `lang`, with the trailing slash the static export
 * serves (`trailingSlash: true`), so links never hit a redirect.
 * localePath('en', '/booking') → '/en/booking/'; localePath('de') → '/'.
 */
export function localePath(lang: Lang, path: string = '/'): string {
  const clean = path === '/' ? '' : path.replace(/\/+$/, '')
  const full = `${PREFIX[lang]}${clean}`
  return full === '' ? '/' : `${full}/`
}

/** Homepage path for `lang`, optionally with an in-page anchor. */
export function homePath(lang: Lang, hash: string = ''): string {
  return `${localePath(lang)}${hash}`
}

/**
 * Next.js `alternates` for a route that exists in every locale: canonical for
 * `lang` plus the full hreflang set, with x-default on the German root.
 */
export function localizedAlternates(lang: Lang, path: string = '/') {
  return {
    canonical: localePath(lang, path),
    languages: {
      de: localePath('de', path),
      en: localePath('en', path),
      th: localePath('th', path),
      'x-default': localePath(DEFAULT_LANG, path),
    },
  }
}
