import '@/styles/marketing.css'
import { HomePage } from '@/components/marketing/HomePage'
import { JsonLd } from '@/components/marketing/JsonLd'
import { bookingApplicationSchema, faqPageSchema } from '@/lib/marketing/jsonld'
import { HOMEPAGE_FAQ } from '@/lib/marketing/content/faq'
import { pageMetadata } from '@/lib/marketing/seo'

export const metadata = pageMetadata({
  lang: 'de',
  path: '/',
  title: 'Die Buchungssoftware, die für Sie bucht | Zenno',
  description:
    'Buchungssoftware für Spas, Massage- und Kosmetikstudios: Kassenkalender, Online-Buchung, Gutscheine und Zahlungen, und eine KI-Rezeption, die auf WhatsApp, per E-Mail und auf Ihrer Website antwortet und für Sie bucht.',
})

export default function HomePageDe() {
  return (
    <>
      <JsonLd data={bookingApplicationSchema('de')} />
      <JsonLd data={faqPageSchema(HOMEPAGE_FAQ.de)} />
      <HomePage lang="de" />
    </>
  )
}
