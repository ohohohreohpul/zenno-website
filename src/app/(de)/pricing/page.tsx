import '@/styles/marketing.css'
import { PricingPage, pricingMetadata } from '@/components/marketing/landing/PricingPage'

export const metadata = pricingMetadata('de')

export default function Pricing() {
  return <PricingPage lang="de" />
}
