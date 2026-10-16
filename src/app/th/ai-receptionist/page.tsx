import '@/styles/marketing.css'
import { FeaturePage, featurePageMetadata } from '@/components/marketing/feature/FeaturePage'

export const metadata = featurePageMetadata('th', 'ai-receptionist')

export default function AiReceptionistPage() {
  return <FeaturePage lang="th" slug="ai-receptionist" />
}
