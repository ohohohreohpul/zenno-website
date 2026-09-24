import '@/styles/marketing.css'
import type { Metadata } from 'next'
import { BookingPage } from '@/components/marketing/booking/BookingPage'

export const metadata: Metadata = {
  title: 'Zenno Booking (previously onbuuk) — Online booking for salons, spas & studios',
  description:
    'Zenno Booking, previously onbuuk.com: booking page, calendar, payments, reminders, gift cards and loyalty. Free plan, Standard €29, Pro €45 per month. Works with the Zenno AI receptionist.',
  alternates: {
    canonical: '/booking',
    languages: { en: '/booking', de: '/de/booking', 'x-default': '/booking' },
  },
}

export default function BookingPageEn() {
  return <BookingPage lang="en" />
}
