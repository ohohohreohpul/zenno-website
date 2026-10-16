import '@/styles/marketing.css'
import { LandingPage, landingMetadata } from '@/components/marketing/landing/LandingPage'

export const metadata = landingMetadata('en', 'tax-datev')

export default function TaxDatevPage() {
  return <LandingPage lang="en" slug="tax-datev" />
}
