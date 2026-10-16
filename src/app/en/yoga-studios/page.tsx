import '@/styles/marketing.css'
import { LandingPage, landingMetadata } from '@/components/marketing/landing/LandingPage'

export const metadata = landingMetadata('en', 'yoga-studios')

export default function YogaStudiosPage() {
  return <LandingPage lang="en" slug="yoga-studios" />
}
