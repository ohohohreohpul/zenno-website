import '@/styles/marketing.css'
import { BookingPage } from '@/components/marketing/booking/BookingPage'
import { pageMetadata } from '@/lib/marketing/seo'

export const metadata = pageMetadata({
  lang: 'en',
  path: '/booking',
  title: 'onbuuk is now Zenno – booking software for spas and studios',
  description:
    'onbuuk.com is now Zenno: booking page, calendar and payments, now with vouchers and the AI receptionist in one app. Your account, services and booking link carry over.',
})

export default function BookingPageEn() {
  return <BookingPage lang="en" />
}
