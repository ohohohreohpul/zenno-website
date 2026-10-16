import '@/styles/marketing.css'
import { LandingPage, landingMetadata } from '@/components/marketing/landing/LandingPage'

export const metadata = landingMetadata('th', 'salons-spas')

export default function SalonsSpasPage() {
  return <LandingPage lang="th" slug="salons-spas" />
}
