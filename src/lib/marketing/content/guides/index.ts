import type { Lang } from '../../lang'
import type { LandingSlug } from '../../pages'
import type { FeaturePageSlug } from '../featurePages'
import type { Guide, GuideSet } from './types'
import { YOGA_STUDIOS_GUIDE } from './yogaStudios'
import { SALONS_SPAS_GUIDE } from './salonsSpas'
import { CLINICS_GUIDE } from './clinics'
import { NO_SHOWS_GUIDE } from './noShows'
import { TAX_DATEV_GUIDE } from './taxDatev'
import { COMMISSION_FREE_GUIDE } from './commissionFree'
import { AI_RECEPTIONIST_GUIDE } from './aiReceptionist'
import { VOUCHERS_GUIDE } from './vouchers'

const GUIDES: Record<LandingSlug | FeaturePageSlug, GuideSet> = {
  'yoga-studios': YOGA_STUDIOS_GUIDE,
  'salons-spas': SALONS_SPAS_GUIDE,
  clinics: CLINICS_GUIDE,
  'no-shows': NO_SHOWS_GUIDE,
  'tax-datev': TAX_DATEV_GUIDE,
  'commission-free': COMMISSION_FREE_GUIDE,
  'ai-receptionist': AI_RECEPTIONIST_GUIDE,
  vouchers: VOUCHERS_GUIDE,
}

export function guideContent(slug: LandingSlug | FeaturePageSlug, lang: Lang): Guide {
  return GUIDES[slug][lang]
}

export type { Guide, GuideSection } from './types'
