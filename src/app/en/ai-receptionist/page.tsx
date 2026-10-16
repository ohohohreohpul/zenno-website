import '@/styles/marketing.css'
import { FeaturePage, featurePageMetadata } from '@/components/marketing/feature/FeaturePage'

export const metadata = featurePageMetadata('en', 'ai-receptionist')

export default function AiReceptionistPage() {
  return <FeaturePage lang="en" slug="ai-receptionist" />
}
