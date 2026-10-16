import '@/styles/marketing.css'
import { BookingPage } from '@/components/marketing/booking/BookingPage'
import { pageMetadata } from '@/lib/marketing/seo'

export const metadata = pageMetadata({
  lang: 'de',
  path: '/booking',
  title: 'onbuuk ist jetzt Zenno – Buchungssoftware für Spas und Studios',
  description:
    'onbuuk.com ist jetzt Zenno: Buchungsseite, Kalender und Zahlungen, jetzt mit Gutscheinen und KI-Rezeption in einer App. Konto, Leistungen und Buchungslink bleiben erhalten.',
})

export default function BookingPageDe() {
  return <BookingPage lang="de" />
}
