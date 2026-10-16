import '@/styles/marketing.css'
import { LandingPage, landingMetadata } from '@/components/marketing/landing/LandingPage'

export const metadata = landingMetadata('de', 'salons-spas')

export default function SalonsSpasPage() {
  return <LandingPage lang="de" slug="salons-spas" />
}
