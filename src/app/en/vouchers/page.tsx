import '@/styles/marketing.css'
import { FeaturePage, featurePageMetadata } from '@/components/marketing/feature/FeaturePage'

export const metadata = featurePageMetadata('en', 'vouchers')

export default function VouchersPage() {
  return <FeaturePage lang="en" slug="vouchers" />
}
