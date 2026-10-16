import '@/styles/marketing.css'
import { LandingPage, landingMetadata } from '@/components/marketing/landing/LandingPage'

export const metadata = landingMetadata('en', 'commission-free')

export default function CommissionFreePage() {
  return <LandingPage lang="en" slug="commission-free" />
}
