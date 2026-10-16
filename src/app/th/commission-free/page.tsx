import '@/styles/marketing.css'
import { LandingPage, landingMetadata } from '@/components/marketing/landing/LandingPage'

export const metadata = landingMetadata('th', 'commission-free')

export default function CommissionFreePage() {
  return <LandingPage lang="th" slug="commission-free" />
}
