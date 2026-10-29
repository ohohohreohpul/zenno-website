import '@/styles/zenno-ui.css'
import { TAGLINE } from '@/lib/marketing/content/tagline'
import { ArrowRight } from 'lucide-react'
import type { Lang } from '@/lib/marketing/lang'
import { START_URL, SUPPORT_EMAIL } from '@/lib/marketing/config'
import { APP_WORDS, STAFF } from '@/lib/marketing/content/home/demo'
import { DayCalendar } from './app-ui/DayCalendar'
import { fullDayBookings } from './app-ui/fullDay'
import styles from './ClosingCta.module.css'

interface ClosingCopy {
  title: string
  sub: string
  primary: string
  secondary: string
  note: string
  calLabel: string
}

const STRINGS: Record<Lang, ClosingCopy> = {
  en: {
    title: TAGLINE.en,
    sub: 'Every guest gets an answer, gift cards sell around the clock and regulars come back. You stay in charge.',
    primary: 'Start free',
    secondary: 'Write to us',
    note: 'Free plan · no credit card · German, English and Thai',
    calLabel: 'A full Saturday in the calendar for Nok, Ploy and Anna.',
  },
  de: {
    title: TAGLINE.de,
    sub: 'Jeder Gast bekommt eine Antwort, Gutscheine verkaufen sich rund um die Uhr, Stammgäste kommen wieder. Und Sie behalten die Kontrolle.',
    primary: 'Kostenlos starten',
    secondary: 'Schreiben Sie uns',
    note: 'Kostenloser Tarif · keine Kreditkarte · Deutsch, Englisch und Thai',
    calLabel: 'Ein voller Samstag im Kalender für Nok, Ploy und Anna.',
  },
  th: {
    title: TAGLINE.th,
    sub: 'ตอบลูกค้าทุกคน ขายบัตรของขวัญได้ตลอดวัน ลูกค้าประจำกลับมาอีก และคุณยังเป็นคนตัดสินใจ',
    primary: 'เริ่มใช้ฟรี',
    secondary: 'ส่งข้อความหาเรา',
    note: 'มีแพ็กเกจฟรี · ไม่ต้องใช้บัตรเครดิต · ภาษาเยอรมัน อังกฤษ และไทย',
    calLabel: 'ปฏิทินวันเสาร์ที่คิวเต็มของนก พลอย และแอนนา',
  },
}

interface ClosingCtaProps {
  lang?: Lang
}

/** The end card: the positioning line beside a calendar full for the day. */
export function ClosingCta({ lang = 'en' }: ClosingCtaProps) {
  const t = STRINGS[lang]

  return (
    <section id="start" className={styles.section} aria-labelledby="closing-heading">
      <div className={`wrap ${styles.card}`}>
        <div className={styles.copy}>
          <img src="/logo/mark-black.svg" alt="" width={36} height={36} className={styles.mark} />
          <h2 data-reveal id="closing-heading" className={styles.title}>
            {t.title}
          </h2>
          <p data-reveal className={styles.sub}>
            {t.sub}
          </p>
          <div data-reveal className={styles.actions}>
            <a href={START_URL} className="btn">
              {t.primary} <ArrowRight size={16} className="arrow" aria-hidden />
            </a>
            <a href={`mailto:${SUPPORT_EMAIL}`} className="btn ghost">
              {t.secondary}
            </a>
          </div>
          <span data-reveal className={styles.note}>
            {t.note}
          </span>
        </div>
        <div data-reveal className={`zn zn-surface zn-surface--solid ${styles.cal}`}>
          <span className={styles.calTitle}>{APP_WORDS[lang].saturday}</span>
          <DayCalendar staff={STAFF} bookings={fullDayBookings(lang)} from={10} to={16} label={t.calLabel} compact />
        </div>
      </div>
    </section>
  )
}
