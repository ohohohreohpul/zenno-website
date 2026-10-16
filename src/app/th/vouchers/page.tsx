import '@/styles/marketing.css'
import { FeaturePage, featurePageMetadata } from '@/components/marketing/feature/FeaturePage'

export const metadata = featurePageMetadata('th', 'vouchers')

export default function VouchersPage() {
  return <FeaturePage lang="th" slug="vouchers" />
}
