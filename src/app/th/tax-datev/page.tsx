import '@/styles/marketing.css'
import { LandingPage, landingMetadata } from '@/components/marketing/landing/LandingPage'

export const metadata = landingMetadata('th', 'tax-datev')

export default function TaxDatevPage() {
  return <LandingPage lang="th" slug="tax-datev" />
}
