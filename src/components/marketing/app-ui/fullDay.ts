import type { Lang } from '@/lib/marketing/lang'
import { SERVICES } from '@/lib/marketing/content/home/demo'
import type { CalBooking } from './DayCalendar'

const NAMES = ['Lea S.', 'Lena M.', 'Julia K.', 'Tom B.', 'Sara P.', 'Max R.', 'Mrs. Lee', 'Kai W.', 'Jonas F.', 'Eva H.', 'Mia T.', 'Ben O.']
const BOOKINGS_PER_DAY = 12
const COLUMNS = 3
const SLOT_HOURS = 1.5

/** A Saturday full from 10:00 to 16:00 for all three therapists: the end card. */
export function fullDayBookings(lang: Lang): CalBooking[] {
  const services = [SERVICES.thai, SERVICES.aroma, SERVICES.facial, SERVICES.foot]
  return Array.from({ length: BOOKINGS_PER_DAY }, (_, i) => {
    const col = i % COLUMNS
    const row = Math.floor(i / COLUMNS)
    return {
      id: `full-${i}`,
      col,
      start: 10 + row * SLOT_HOURS + (col === 1 ? 0.5 : 0),
      dur: 1,
      name: NAMES[i],
      service: services[(i + col) % services.length][lang],
      isPaid: row < 2,
    }
  })
}
