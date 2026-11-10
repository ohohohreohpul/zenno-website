import type { Lang } from '../lang'
import type { LegalDoc } from './types'
import { privacyDe } from './privacy-de'
import { privacyEn } from './privacy-en'
import { privacyTh } from './privacy-th'
import { imprintContent } from './imprint'

export type LegalSlug = 'privacy' | 'imprint'

export const LEGAL_SLUGS: readonly LegalSlug[] = ['privacy', 'imprint']

const PRIVACY: Record<Lang, () => LegalDoc> = { de: privacyDe, en: privacyEn, th: privacyTh }

export function legalContent(slug: LegalSlug, lang: Lang): LegalDoc {
  return slug === 'privacy' ? PRIVACY[lang]() : imprintContent(lang)
}

export { COMPANY, META_PIXEL_ID, isCompanyComplete } from './company'
