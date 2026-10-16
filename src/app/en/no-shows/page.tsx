import '@/styles/marketing.css'
import { LandingPage, landingMetadata } from '@/components/marketing/landing/LandingPage'

export const metadata = landingMetadata('en', 'no-shows')

export default function NoShowsPage() {
  return <LandingPage lang="en" slug="no-shows" />
}
