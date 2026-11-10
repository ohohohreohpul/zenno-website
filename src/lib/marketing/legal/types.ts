import type { Lang } from '../lang'
import { COMPANY, type CompanyDetails } from './company'

/** One piece of a legal section: a paragraph, a bullet list, or an address-style block of lines. */
export type LegalBlock = { p: string } | { list: string[] } | { lines: string[] }

export interface LegalSection {
  h: string
  blocks: LegalBlock[]
}

export interface LegalDoc {
  meta: { title: string; description: string }
  label: string
  title: string
  /** "Last updated" line, already formatted for the locale. */
  updated?: string
  intro?: string
  sections: LegalSection[]
}

const MISSING: Record<Lang, string> = {
  de: '(wird ergänzt)',
  en: '(to be added)',
  th: '(รอเพิ่มข้อมูล)',
}

/** A company field, or the locale's "to be added" marker while it is still empty. */
export function field(value: string | null, lang: Lang): string {
  return value || MISSING[lang]
}

/** Multi-line company field (address, representatives), with the same fallback. */
export function fieldLines(value: string[] | null, lang: Lang): string[] {
  return value?.length ? value : [MISSING[lang]]
}

/** Registered name, English first, with the Thai name after it when both are known. */
export function companyName(lang: Lang, c: CompanyDetails = COMPANY): string {
  if (c.legalNameEn && c.legalNameTh) return lang === 'th' ? `${c.legalNameTh} (${c.legalNameEn})` : `${c.legalNameEn} (${c.legalNameTh})`
  return field(c.legalNameEn ?? c.legalNameTh, lang)
}

/** Controller / provider block: name, address, email, phone. */
export function companyBlock(lang: Lang, labels: { email: string; phone: string }, c: CompanyDetails = COMPANY): LegalBlock {
  return {
    lines: [
      companyName(lang, c),
      ...fieldLines(c.address, lang),
      `${labels.email}: ${c.email}`,
      ...(c.phone ? [`${labels.phone}: ${c.phone}`] : []),
    ],
  }
}

export function formatDate(iso: string, lang: Lang): string {
  const locale = { de: 'de-DE', en: 'en-GB', th: 'th-TH' }[lang]
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
}
