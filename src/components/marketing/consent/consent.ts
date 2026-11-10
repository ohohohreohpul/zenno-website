/** The visitor's choice in the cookie banner, kept in local storage. */
export type Consent = 'granted' | 'denied'

const STORAGE_KEY = 'zenno-consent'
const CHANGE_EVENT = 'zenno:consent-change'

/** Fallback for this page only when local storage is blocked. */
let memoryConsent: Consent | null = null

/** Fired by the footer's "Cookie settings" link to reopen the banner. */
export const CONSENT_OPEN_EVENT = 'zenno:consent-open'

/** Stored choice, or null when there is none or storage is unavailable (private mode, blocked). */
export function readConsent(): Consent | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY)
    return value === 'granted' || value === 'denied' ? value : memoryConsent
  } catch {
    return memoryConsent
  }
}

/** Saves the choice. If storage is blocked the choice holds for this page only, and the banner returns next visit. */
export function writeConsent(consent: Consent): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, consent)
  } catch {
    // Storage blocked: keep the choice for this page; the banner asks again on the next one.
    memoryConsent = consent
  }
  window.dispatchEvent(new Event(CHANGE_EVENT))
}

/** Lets React re-read the choice when it changes here or in another tab. */
export function subscribeConsent(onChange: () => void): () => void {
  window.addEventListener(CHANGE_EVENT, onChange)
  window.addEventListener('storage', onChange)
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange)
    window.removeEventListener('storage', onChange)
  }
}

export function openConsentSettings(): void {
  window.dispatchEvent(new Event(CONSENT_OPEN_EVENT))
}
