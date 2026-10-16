import '@/styles/marketing.css'
import { PricingPage, pricingMetadata } from '@/components/marketing/landing/PricingPage'

export const metadata = pricingMetadata('en')

export default function Pricing() {
  return <PricingPage lang="en" />
}
