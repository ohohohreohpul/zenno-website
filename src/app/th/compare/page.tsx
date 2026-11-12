import '@/styles/marketing.css'
import { CompareHub, compareHubMetadata } from '@/components/marketing/compare/CompareHub'

export const metadata = compareHubMetadata('th')

export default function CompareHubPage() {
  return <CompareHub lang="th" />
}
