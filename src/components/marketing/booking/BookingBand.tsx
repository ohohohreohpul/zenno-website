import type { Lang } from '@/lib/marketing/lang'
import { LEGACY_BOOKING_DOMAIN } from '@/lib/marketing/config'
import { bookingPath } from '@/lib/marketing/content/booking'
import styles from './BookingBand.module.css'

const STRINGS: Record<Lang, { kicker: string; title: string; ghost: string; body: string; cta: string; previously: string }> = {
  en: {
    kicker: 'New · Zenno Booking',
    title: 'Clients who’d rather click,',
    ghost: 'now book in the same calendar.',
    body: 'Zenno Booking adds a booking page, payments, reminders, gift cards and loyalty — and the AI receptionist books into it too.',
    cta: 'Meet Zenno Booking',
    previously: `previously ${LEGACY_BOOKING_DOMAIN}`,
  },
  de: {
    kicker: 'Neu · Zenno Booking',
    title: 'Wer lieber klickt,',
    ghost: 'bucht jetzt im selben Kalender.',
    body: 'Zenno Booking bringt Buchungsseite, Zahlungen, Erinnerungen, Gutscheine und Treueprogramm — und der KI-Empfang bucht direkt hinein.',
    cta: 'Zenno Booking entdecken',
    previously: `vormals ${LEGACY_BOOKING_DOMAIN}`,
  },
}

interface BookingBandProps {
  lang?: Lang
}

/** Homepage announcement band that routes to /booking. */
export function BookingBand({ lang = 'en' }: BookingBandProps) {
  const t = STRINGS[lang]
  return (
    <section className={styles.section} aria-label="Zenno Booking">
      <div className="wrap">
        <a href={bookingPath(lang)} data-reveal className={styles.band}>
          <div className={styles.copy}>
            <span className={styles.kicker}>{t.kicker}</span>
            <p className={styles.title}>
              {t.title} <span className={styles.ghost}>{t.ghost}</span>
            </p>
            <p className={styles.body}>{t.body}</p>
          </div>
          <div className={styles.side}>
            <span className={`btn on-dark ${styles.btn}`}>
              {t.cta} <span className="arrow">→</span>
            </span>
            <span className={styles.previously}>{t.previously}</span>
          </div>
        </a>
      </div>
    </section>
  )
}
