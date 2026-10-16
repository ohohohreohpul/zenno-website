import type { Lang } from '@/lib/marketing/lang'
import type { StaffColor } from '../../app-ui/DayCalendar'

export type SlotKind = 'booked' | 'pending' | 'free' | 'blocked'

export interface StaffSlot {
  time: string
  kind: SlotKind
  /** Guest and service for bookings, the note for blocked time. */
  label?: string
}

export interface StaffMember {
  name: string
  photo: string
  color: StaffColor
  role: Record<Lang, string>
  hours: string
  /** Index of the day off in the week strip (0 = Monday). */
  dayOff: number
  slots: readonly StaffSlot[]
}

export const STAFF_TEAM: readonly StaffMember[] = [
  {
    name: 'Nok',
    photo: '/images/people/staff-nok.webp',
    color: 1,
    role: { en: 'Thai massage · Back & neck', de: 'Thai-Massage · Rücken & Nacken', th: 'นวดไทย · หลังและคอ' },
    hours: '10:00 – 18:00',
    dayOff: 0,
    slots: [
      { time: '10:00', kind: 'booked', label: 'Lea S.' },
      { time: '11:30', kind: 'free' },
      { time: '12:00', kind: 'booked', label: 'Tom B.' },
      { time: '13:00', kind: 'blocked' },
      { time: '14:00', kind: 'booked', label: 'Kai W.' },
      { time: '16:30', kind: 'booked', label: 'Jonas F.' },
    ],
  },
  {
    name: 'Ploy',
    photo: '/images/people/staff-ploy.webp',
    color: 2,
    role: { en: 'Aroma oil · Thai massage', de: 'Aromaöl · Thai-Massage', th: 'นวดน้ำมันอโรมา · นวดไทย' },
    hours: '10:00 – 18:00',
    dayOff: 1,
    slots: [
      { time: '10:00', kind: 'booked', label: 'Lena M.' },
      { time: '12:30', kind: 'booked', label: 'Sara P.' },
      { time: '13:30', kind: 'free' },
      { time: '14:30', kind: 'blocked' },
      { time: '15:30', kind: 'pending', label: 'Mia T.' },
      { time: '17:00', kind: 'free' },
    ],
  },
  {
    name: 'Anna',
    photo: '/images/people/staff-anna.webp',
    color: 3,
    role: { en: 'Facials · Foot massage', de: 'Gesicht · Fußmassage', th: 'ทรีตเมนต์หน้า · นวดเท้า' },
    hours: '11:00 – 19:00',
    dayOff: 6,
    slots: [
      { time: '11:00', kind: 'booked', label: 'Julia K.' },
      { time: '12:00', kind: 'free' },
      { time: '13:00', kind: 'booked', label: 'Max R.' },
      { time: '14:30', kind: 'booked', label: 'Eva H.' },
      { time: '16:00', kind: 'blocked' },
      { time: '17:30', kind: 'free' },
    ],
  },
]

export interface StaffCopy {
  title: string
  sub: string
  today: string
  works: string
  week: readonly string[]
  free: string
  freeHint: string
  blocked: string
  pending: string
  prev: string
  next: string
  carouselLabel: string
  summary: (booked: number, free: number) => string
}

export const STAFF_COPY: Record<Lang, StaffCopy> = {
  en: {
    title: 'Every therapist, their own day.',
    sub: 'Each therapist has their colour, their hours and their own column. See who is free, block time and fill the gaps.',
    today: 'Saturday',
    works: 'Works',
    week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
    free: 'Free',
    freeHint: 'Bookable online',
    blocked: 'Blocked · Lunch',
    pending: 'waiting',
    prev: 'Previous therapist',
    next: 'Next therapist',
    carouselLabel: 'Therapists',
    summary: (b, f) => `${b} bookings · ${f} free`,
  },
  de: {
    title: 'Jede Therapeutin, ihr eigener Tag.',
    sub: 'Jede Therapeutin hat ihre Farbe, ihre Zeiten und ihre eigene Spalte. Sehen, wer frei ist, Zeit blocken und Lücken füllen.',
    today: 'Samstag',
    works: 'Arbeitet',
    week: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'],
    free: 'Frei',
    freeHint: 'Online buchbar',
    blocked: 'Geblockt · Mittag',
    pending: 'offen',
    prev: 'Vorherige Therapeutin',
    next: 'Nächste Therapeutin',
    carouselLabel: 'Therapeutinnen',
    summary: (b, f) => `${b} Buchungen · ${f} frei`,
  },
  th: {
    title: 'พนักงานแต่ละคน มีตารางของตัวเอง',
    sub: 'พนักงานแต่ละคนมีสี เวลาทำงาน และช่องในปฏิทินของตัวเอง ดูได้ว่าใครว่าง บล็อกเวลา และเติมช่วงที่ว่าง',
    today: 'วันเสาร์',
    works: 'วันทำงาน',
    week: ['จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส', 'อา'],
    free: 'ว่าง',
    freeHint: 'จองออนไลน์ได้',
    blocked: 'บล็อกไว้ · พักกลางวัน',
    pending: 'รอยืนยัน',
    prev: 'พนักงานคนก่อนหน้า',
    next: 'พนักงานคนถัดไป',
    carouselLabel: 'พนักงาน',
    summary: (b, f) => `${b} คิว · ว่าง ${f}`,
  },
}
