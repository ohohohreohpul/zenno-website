import '@/styles/marketing.css'
import { FeaturePage, featurePageMetadata } from '@/components/marketing/feature/FeaturePage'

export const metadata = featurePageMetadata('de', 'vouchers')

export default function VouchersPage() {
  return <FeaturePage lang="de" slug="vouchers" />
}
