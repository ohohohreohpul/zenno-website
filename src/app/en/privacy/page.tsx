import { LegalPage, legalMetadata } from '@/components/marketing/legal/LegalPage'

export const metadata = legalMetadata('en', 'privacy')

export default function PrivacyPage() {
  return <LegalPage lang="en" slug="privacy" />
}
