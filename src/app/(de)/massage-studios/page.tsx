import '@/styles/marketing.css'
import { LandingPage, landingMetadata } from '@/components/marketing/landing/LandingPage'

export const metadata = landingMetadata('de', 'massage-studios')

export default function MassageStudiosPage() {
  return <LandingPage lang="de" slug="massage-studios" />
}
