import type { Lang } from '../../lang'
import type { CalStaff } from '@/components/marketing/app-ui/DayCalendar'

/**
 * The fictional shop every demo on the site shows: Sabai Spa, its three
 * therapists and its menu. Real-looking examples (the design system's rule),
 * never lorem ipsum, and never a real customer.
 */
export const SHOP_NAME = 'Sabai Spa'
export const RECEPTIONIST_NAME = 'Mali'

export const STAFF: readonly CalStaff[] = [
  { name: 'Nok', color: 1 },
  { name: 'Ploy', color: 2 },
  { name: 'Anna', color: 3 },
]

export type ServiceKey = 'thai' | 'aroma' | 'facial' | 'back' | 'foot'

export const SERVICES: Record<ServiceKey, Record<Lang, string>> = {
  thai: { en: 'Thai massage · 60 min', de: 'Thai-Massage · 60 Min.', th: 'นวดไทย · 60 นาที' },
  aroma: { en: 'Aroma oil · 90 min', de: 'Aromaöl · 90 Min.', th: 'นวดน้ำมันอโรมา · 90 นาที' },
  facial: { en: 'Facial · 60 min', de: 'Gesichtsbehandlung · 60 Min.', th: 'ทรีตเมนต์หน้า · 60 นาที' },
  back: { en: 'Back & neck · 30 min', de: 'Rücken & Nacken · 30 Min.', th: 'หลังและคอ · 30 นาที' },
  foot: { en: 'Foot massage · 45 min', de: 'Fußmassage · 45 Min.', th: 'นวดเท้า · 45 นาที' },
}

export const SERVICE_PRICE: Record<ServiceKey, string> = {
  thai: '70 €',
  aroma: '95 €',
  facial: '85 €',
  back: '39 €',
  foot: '49 €',
}

/** Words the app itself shows, shared by several demos. */
export const APP_WORDS: Record<
  Lang,
  {
    saturday: string
    satShort: string
    calendar: string
    inbox: string
    vouchers: string
    customers: string
    settings: string
    receptionistOn: string
  }
> = {
  en: {
    saturday: 'Saturday',
    satShort: 'Sat',
    calendar: 'Calendar',
    inbox: 'Inbox',
    vouchers: 'Vouchers',
    customers: 'Customers',
    settings: 'Settings',
    receptionistOn: 'On – the receptionist answers',
  },
  de: {
    saturday: 'Samstag',
    satShort: 'Sa',
    calendar: 'Kalender',
    inbox: 'Posteingang',
    vouchers: 'Gutscheine',
    customers: 'Kunden',
    settings: 'Einstellungen',
    receptionistOn: 'An – die Rezeption antwortet',
  },
  th: {
    saturday: 'วันเสาร์',
    satShort: 'ส.',
    calendar: 'ปฏิทิน',
    inbox: 'กล่องข้อความ',
    vouchers: 'บัตรของขวัญ',
    customers: 'ลูกค้า',
    settings: 'ตั้งค่า',
    receptionistOn: 'เปิด – พนักงานต้อนรับตอบให้',
  },
}

export function navLabels(lang: Lang) {
  const w = APP_WORDS[lang]
  return { calendar: w.calendar, inbox: w.inbox, vouchers: w.vouchers, customers: w.customers, settings: w.settings }
}
