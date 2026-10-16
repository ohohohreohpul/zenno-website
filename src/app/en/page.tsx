import '@/styles/marketing.css'
import { HomePage } from '@/components/marketing/HomePage'
import { JsonLd } from '@/components/marketing/JsonLd'
import { bookingApplicationSchema, faqPageSchema } from '@/lib/marketing/jsonld'
import { HOMEPAGE_FAQ } from '@/lib/marketing/content/faq'
import { pageMetadata } from '@/lib/marketing/seo'

export const metadata = pageMetadata({
  lang: 'en',
  path: '/',
  title: 'Booking software that books itself | Zenno',
  description:
    'Booking software for spas, massage shops and beauty salons: a POS calendar, online booking, vouchers and payments, and an AI receptionist that answers on WhatsApp, email and your website and books for you.',
})

export default function HomePageEn() {
  return (
    <>
      <JsonLd data={bookingApplicationSchema('en')} />
      <JsonLd data={faqPageSchema(HOMEPAGE_FAQ.en)} />
      <HomePage lang="en" />
    </>
  )
}
