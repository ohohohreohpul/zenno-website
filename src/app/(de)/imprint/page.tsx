import { LegalPage, legalMetadata } from '@/components/marketing/legal/LegalPage'

export const metadata = legalMetadata('de', 'imprint')

export default function ImprintPage() {
  return <LegalPage lang="de" slug="imprint" />
}
