import '@/styles/marketing.css'
import { LandingPage, landingMetadata } from '@/components/marketing/landing/LandingPage'

export const metadata = landingMetadata('de', 'commission-free')

export default function CommissionFreePage() {
  return <LandingPage lang="de" slug="commission-free" />
}
