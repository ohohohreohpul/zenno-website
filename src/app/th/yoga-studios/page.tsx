import '@/styles/marketing.css'
import { LandingPage, landingMetadata } from '@/components/marketing/landing/LandingPage'

export const metadata = landingMetadata('th', 'yoga-studios')

export default function YogaStudiosPage() {
  return <LandingPage lang="th" slug="yoga-studios" />
}
