import '@/styles/marketing.css'
import { LandingPage, landingMetadata } from '@/components/marketing/landing/LandingPage'

export const metadata = landingMetadata('de', 'yoga-studios')

export default function YogaStudiosPage() {
  return <LandingPage lang="de" slug="yoga-studios" />
}
