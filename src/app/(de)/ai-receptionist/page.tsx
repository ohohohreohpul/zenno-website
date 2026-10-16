import '@/styles/marketing.css'
import { FeaturePage, featurePageMetadata } from '@/components/marketing/feature/FeaturePage'

export const metadata = featurePageMetadata('de', 'ai-receptionist')

export default function AiReceptionistPage() {
  return <FeaturePage lang="de" slug="ai-receptionist" />
}
