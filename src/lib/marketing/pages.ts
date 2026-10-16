import type { Lang } from './lang'

/**
 * Every content page besides the homepage and /booking. Each exists in all
 * three locales at the same slug (German at the root, /en, /th). The footer,
 * related-links block and sitemap all read this list.
 */
export const LANDING_SLUGS = [
  'salons-spas',
  'yoga-studios',
  'clinics',
  'no-shows',
  'tax-datev',
  'commission-free',
] as const

export type LandingSlug = (typeof LANDING_SLUGS)[number]
export type PageSlug = LandingSlug | 'pricing'

export const INDUSTRY_SLUGS: readonly LandingSlug[] = ['salons-spas', 'yoga-studios', 'clinics']
export const FEATURE_SLUGS: readonly LandingSlug[] = ['no-shows', 'tax-datev', 'commission-free']

/** Link labels per page (also used as breadcrumb names). */
export const PAGE_LABEL: Record<PageSlug, Record<Lang, string>> = {
  'salons-spas': { de: 'Friseure, Kosmetik & Spas', en: 'Salons & spas', th: 'ซาลอนและสปา' },
  'yoga-studios': { de: 'Yoga- & Fitnessstudios', en: 'Yoga & fitness studios', th: 'สตูดิโอโยคะและฟิตเนส' },
  clinics: { de: 'Ästhetik- & Wellnesspraxen', en: 'Aesthetic & wellness clinics', th: 'คลินิกความงามและเวลเนส' },
  'no-shows': { de: 'No-Show-Schutz', en: 'No-show protection', th: 'ป้องกันลูกค้าไม่มาตามนัด' },
  'tax-datev': { de: 'Umsatzsteuer & DATEV', en: 'VAT & DATEV export', th: 'ภาษีและ DATEV' },
  'commission-free': { de: 'Buchen ohne Provision', en: 'Commission-free booking', th: 'จองโดยไม่มีค่าคอมมิชชั่น' },
  pricing: { de: 'Preise', en: 'Pricing', th: 'ราคา' },
}

/** Pages worth linking from a given page: the other pages in its group first. */
export function relatedSlugs(slug: PageSlug): PageSlug[] {
  const group = (INDUSTRY_SLUGS as readonly PageSlug[]).includes(slug) ? INDUSTRY_SLUGS : FEATURE_SLUGS
  const others = [...LANDING_SLUGS, 'pricing' as const].filter((s) => s !== slug)
  return [...others.filter((s) => group.includes(s as LandingSlug)), ...others.filter((s) => !group.includes(s as LandingSlug))].slice(0, 5)
}
