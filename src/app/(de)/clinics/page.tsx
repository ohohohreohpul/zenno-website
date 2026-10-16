import '@/styles/marketing.css'
import { LandingPage, landingMetadata } from '@/components/marketing/landing/LandingPage'

export const metadata = landingMetadata('de', 'clinics')

export default function ClinicsPage() {
  return <LandingPage lang="de" slug="clinics" />
}
