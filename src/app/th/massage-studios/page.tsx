import '@/styles/marketing.css'
import { LandingPage, landingMetadata } from '@/components/marketing/landing/LandingPage'

export const metadata = landingMetadata('th', 'massage-studios')

export default function MassageStudiosPage() {
  return <LandingPage lang="th" slug="massage-studios" />
}
