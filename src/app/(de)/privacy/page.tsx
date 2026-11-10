import { LegalPage, legalMetadata } from '@/components/marketing/legal/LegalPage'

export const metadata = legalMetadata('de', 'privacy')

export default function PrivacyPage() {
  return <LegalPage lang="de" slug="privacy" />
}
