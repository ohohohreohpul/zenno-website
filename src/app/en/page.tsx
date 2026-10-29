import '@/styles/marketing.css'
import { HomePage } from '@/components/marketing/HomePage'
import { JsonLd } from '@/components/marketing/JsonLd'
import { bookingApplicationSchema, faqPageSchema } from '@/lib/marketing/jsonld'
import { HOMEPAGE_FAQ } from '@/lib/marketing/content/faq'
import { pageMetadata } from '@/lib/marketing/seo'

export const metadata = pageMetadata({
  lang: 'en',
  path: '/',
  title: 'Booking software for more bookings, gift cards and regulars | Zenno',
  description:
    'Zenno fills your calendar, sells gift cards online around the clock and brings regulars back, with an AI receptionist for WhatsApp, email and your website, reminders and loyalty points. For spas, massage shops and beauty salons.',
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
