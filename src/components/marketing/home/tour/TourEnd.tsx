import type { Lang } from '@/lib/marketing/lang'
import { TAGLINE } from '@/lib/marketing/content/tagline'
import { APP_WORDS, STAFF } from '@/lib/marketing/content/home/demo'
import { AppWindow } from '../../app-ui/AppWindow'
import { DayCalendar } from '../../app-ui/DayCalendar'
import { fullDayBookings } from '../../app-ui/fullDay'
import styles from './Tour.module.css'

const CAL_LABEL: Record<Lang, string> = {
  en: 'A full Saturday in the calendar for Nok, Ploy and Anna.',
  de: 'Ein voller Samstag im Kalender für Nok, Ploy und Anna.',
  th: 'ปฏิทินวันเสาร์ที่คิวเต็มของนก พลอย และแอนนา',
}

interface TourEndProps {
  lang: Lang
}

/** The film's end card: the calendar full for the day, and the line. */
export function TourEnd({ lang }: TourEndProps) {
  return (
    <div className={styles.end}>
      <p className={styles.endLine}>{TAGLINE[lang]}</p>
      <AppWindow title={APP_WORDS[lang].saturday} nav="calendar">
        <DayCalendar
          staff={STAFF}
          bookings={fullDayBookings(lang)}
          from={10}
          to={16}
          label={CAL_LABEL[lang]}
          compact
        />
      </AppWindow>
    </div>
  )
}
