'use client'

import { openConsentSettings } from './consent'

interface CookieSettingsLinkProps {
  label: string
  className?: string
}

/** Footer link that reopens the cookie banner so a visitor can change or withdraw consent. */
export function CookieSettingsLink({ label, className }: CookieSettingsLinkProps) {
  return (
    <button type="button" className={className} onClick={openConsentSettings}>
      {label}
    </button>
  )
}
