import { LegalPage, legalMetadata } from '@/components/marketing/legal/LegalPage'

export const metadata = legalMetadata('th', 'imprint')

export default function ImprintPage() {
  return <LegalPage lang="th" slug="imprint" />
}
