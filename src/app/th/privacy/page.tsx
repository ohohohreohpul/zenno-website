import { LegalPage, legalMetadata } from '@/components/marketing/legal/LegalPage'

export const metadata = legalMetadata('th', 'privacy')

export default function PrivacyPage() {
  return <LegalPage lang="th" slug="privacy" />
}
