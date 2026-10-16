import '@/styles/marketing.css'
import { LandingPage, landingMetadata } from '@/components/marketing/landing/LandingPage'

export const metadata = landingMetadata('de', 'tax-datev')

export default function TaxDatevPage() {
  return <LandingPage lang="de" slug="tax-datev" />
}
