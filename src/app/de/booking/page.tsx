import '@/styles/marketing.css'
import type { Metadata } from 'next'
import { BookingPage } from '@/components/marketing/booking/BookingPage'

export const metadata: Metadata = {
  title: 'Zenno Booking (vormals onbuuk) — Online-Buchung für Salons, Spas & Studios',
  description:
    'Zenno Booking, vormals onbuuk.com: Buchungsseite, Kalender, Zahlungen, Erinnerungen, Gutscheine und Treueprogramm. Kostenloser Tarif, Standard 29 €, Pro 45 € pro Monat. Arbeitet mit dem Zenno KI-Empfang zusammen.',
  alternates: {
    canonical: '/de/booking',
    languages: { en: '/booking', de: '/de/booking', 'x-default': '/booking' },
  },
}

export default function BookingPageDe() {
  return <BookingPage lang="de" />
}
