import '@/styles/marketing.css'
import { LandingPage, landingMetadata } from '@/components/marketing/landing/LandingPage'

export const metadata = landingMetadata('en', 'clinics')

export default function ClinicsPage() {
  return <LandingPage lang="en" slug="clinics" />
}
