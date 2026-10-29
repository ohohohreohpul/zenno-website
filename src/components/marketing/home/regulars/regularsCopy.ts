import type { Lang } from '@/lib/marketing/lang'

export interface RegularsEvent {
  title: string
  line: string
  when: string
}

export interface RegularsDemoCopy {
  page: string
  name: string
  since: string
  points: string
  pointsValue: string
  pointsNote: string
  events: readonly [RegularsEvent, RegularsEvent, RegularsEvent]
  label: string
}

export const REGULARS_DEMO: Record<Lang, RegularsDemoCopy> = {
  en: {
    page: 'Customers',
    name: 'Eva H.',
    since: 'Regular since March 2025 · 9 visits',
    points: 'Loyalty points',
    pointsValue: '180',
    pointsNote: 'Collected on every visit',
    events: [
      { title: 'Reminder sent', line: 'Facial · Thu 15:00 · by SMS', when: 'Wed 15:00' },
      { title: 'Rebooked online', line: 'Facial · 60 min, without calling', when: 'Mon 21:12' },
      { title: 'Last visit', line: 'Aroma massage · 90 min', when: '3 weeks ago' },
    ],
    label: 'A regular’s profile: 9 visits, 180 loyalty points, rebooked online on Monday evening and reminded by SMS the day before.',
  },
  de: {
    page: 'Kunden',
    name: 'Eva H.',
    since: 'Stammkundin seit März 2025 · 9 Besuche',
    points: 'Treuepunkte',
    pointsValue: '180',
    pointsNote: 'Bei jedem Besuch gesammelt',
    events: [
      { title: 'Erinnerung verschickt', line: 'Gesicht · Do 15:00 · per SMS', when: 'Mi 15:00' },
      { title: 'Online neu gebucht', line: 'Gesicht · 60 Min., ohne Anruf', when: 'Mo 21:12' },
      { title: 'Letzter Besuch', line: 'Aromamassage · 90 Min.', when: 'vor 3 Wochen' },
    ],
    label: 'Profil einer Stammkundin: 9 Besuche, 180 Treuepunkte, am Montagabend online neu gebucht und am Vortag per SMS erinnert.',
  },
  th: {
    page: 'ลูกค้า',
    name: 'Eva H.',
    since: 'ลูกค้าประจำตั้งแต่มีนาคม 2025 · มาแล้ว 9 ครั้ง',
    points: 'แต้มสะสม',
    pointsValue: '180',
    pointsNote: 'สะสมทุกครั้งที่มาใช้บริการ',
    events: [
      { title: 'ส่งแจ้งเตือนแล้ว', line: 'ทรีตเมนต์หน้า · พฤ. 15:00 · ทาง SMS', when: 'พ. 15:00' },
      { title: 'จองซ้ำออนไลน์', line: 'ทรีตเมนต์หน้า · 60 นาที ไม่ต้องโทร', when: 'จ. 21:12' },
      { title: 'มาครั้งล่าสุด', line: 'นวดอโรมา · 90 นาที', when: '3 สัปดาห์ก่อน' },
    ],
    label: 'โปรไฟล์ลูกค้าประจำ: มาแล้ว 9 ครั้ง แต้มสะสม 180 จองซ้ำออนไลน์ตอนค่ำวันจันทร์ และได้รับแจ้งเตือนทาง SMS ก่อนหนึ่งวัน',
  },
}
