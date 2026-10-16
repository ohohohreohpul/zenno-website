import '@/styles/marketing.css'
import { LandingPage, landingMetadata } from '@/components/marketing/landing/LandingPage'

export const metadata = landingMetadata('th', 'no-shows')

export default function NoShowsPage() {
  return <LandingPage lang="th" slug="no-shows" />
}
