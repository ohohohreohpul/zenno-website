import type { Lang } from '../../lang'
import type { LandingSlug } from '../../pages'
import type { LandingContent } from './types'
import { SALONS_SPAS } from './salonsSpas'
import { YOGA_STUDIOS } from './yogaStudios'
import { CLINICS } from './clinics'
import { NO_SHOWS } from './noShows'
import { TAX_DATEV } from './taxDatev'
import { COMMISSION_FREE } from './commissionFree'

const LANDING_CONTENT: Record<LandingSlug, Record<Lang, LandingContent>> = {
  'salons-spas': SALONS_SPAS,
  'yoga-studios': YOGA_STUDIOS,
  clinics: CLINICS,
  'no-shows': NO_SHOWS,
  'tax-datev': TAX_DATEV,
  'commission-free': COMMISSION_FREE,
}

export function landingContent(slug: LandingSlug, lang: Lang): LandingContent {
  return LANDING_CONTENT[slug][lang]
}

export type { LandingContent } from './types'
export { PRICING_PAGE, type PricingPageContent } from './pricingPage'
