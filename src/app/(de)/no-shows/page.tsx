import '@/styles/marketing.css'
import { LandingPage, landingMetadata } from '@/components/marketing/landing/LandingPage'

export const metadata = landingMetadata('de', 'no-shows')

export default function NoShowsPage() {
  return <LandingPage lang="de" slug="no-shows" />
}
