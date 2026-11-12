import '@/styles/marketing.css'
import { LandingPage, landingMetadata } from '@/components/marketing/landing/LandingPage'

export const metadata = landingMetadata('en', 'massage-studios')

export default function MassageStudiosPage() {
  return <LandingPage lang="en" slug="massage-studios" />
}
