import '@/styles/marketing.css'
import { LandingPage, landingMetadata } from '@/components/marketing/landing/LandingPage'

export const metadata = landingMetadata('th', 'clinics')

export default function ClinicsPage() {
  return <LandingPage lang="th" slug="clinics" />
}
