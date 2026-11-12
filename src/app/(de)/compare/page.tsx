import '@/styles/marketing.css'
import { CompareHub, compareHubMetadata } from '@/components/marketing/compare/CompareHub'

export const metadata = compareHubMetadata('de')

export default function CompareHubPage() {
  return <CompareHub lang="de" />
}
