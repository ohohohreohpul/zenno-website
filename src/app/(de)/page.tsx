import '@/styles/marketing.css'
import { HomePage } from '@/components/marketing/HomePage'
import { JsonLd } from '@/components/marketing/JsonLd'
import { bookingApplicationSchema, faqPageSchema } from '@/lib/marketing/jsonld'
import { HOMEPAGE_FAQ } from '@/lib/marketing/content/faq'
import { pageMetadata } from '@/lib/marketing/seo'

export const metadata = pageMetadata({
  lang: 'de',
  path: '/',
  title: 'Buchungssoftware für mehr Buchungen, Gutscheine und Stammgäste | Zenno',
  description:
    'Zenno füllt Ihren Kalender, verkauft Gutscheine online rund um die Uhr und holt Stammgäste zurück: mit einer KI-Rezeption für WhatsApp, E-Mail und Website, Erinnerungen und Treuepunkten. Für Spas, Massage- und Kosmetikstudios.',
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
