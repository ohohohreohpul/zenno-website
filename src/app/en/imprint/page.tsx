import { LegalPage, legalMetadata } from '@/components/marketing/legal/LegalPage'

export const metadata = legalMetadata('en', 'imprint')

export default function ImprintPage() {
  return <LegalPage lang="en" slug="imprint" />
}
