import '@/styles/marketing.css'
import { LandingPage, landingMetadata } from '@/components/marketing/landing/LandingPage'

export const metadata = landingMetadata('en', 'salons-spas')

export default function SalonsSpasPage() {
  return <LandingPage lang="en" slug="salons-spas" />
}
