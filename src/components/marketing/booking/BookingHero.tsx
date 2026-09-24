import type { Lang } from '@/lib/marketing/lang'
import { BOOKING_APP_URL, LEGACY_BOOKING_DOMAIN } from '@/lib/marketing/config'
import { BOOKING_PRICING_NOTE } from '@/lib/marketing/content/booking'
import { Magnetic } from '../primitives/Magnetic'
import { TwoDoorsDemo } from './TwoDoorsDemo'
import styles from './BookingHero.module.css'

const STRINGS: Record<
  Lang,
  { previously: string; line1: string; line2: string; lead: string; ctaPrimary: string; ctaSecondary: string }
> = {
  en: {
    previously: `previously ${LEGACY_BOOKING_DOMAIN}`,
    line1: 'Chat or click.',
    line2: 'Same calendar.',
    lead: 'Zenno Booking is the booking page, calendar and payments behind your business. Zenno is the AI receptionist that answers every chat. Whichever door a client walks through, the appointment lands in one place.',
    ctaPrimary: 'Start free',
    ctaSecondary: 'See it with the AI receptionist',
  },
  de: {
    previously: `vormals ${LEGACY_BOOKING_DOMAIN}`,
    line1: 'Chatten oder klicken.',
    line2: 'Ein Kalender.',
    lead: 'Zenno Booking ist Buchungsseite, Kalender und Bezahlung für Ihren Betrieb. Zenno ist der KI-Empfang, der jeden Chat beantwortet. Egal, welchen Weg Kund:innen nehmen — der Termin landet an einem Ort.',
    ctaPrimary: 'Kostenlos starten',
    ctaSecondary: 'Mit dem KI-Empfang ansehen',
  },
}

interface BookingHeroProps {
  lang?: Lang
}

/** Light, product-led hero — the demo is the image, so no photo is needed. */
export function BookingHero({ lang = 'en' }: BookingHeroProps) {
  const t = STRINGS[lang]
  return (
    <section id="top" className={styles.hero}>
      <div className={`wrap-wide ${styles.grid}`}>
        <div className={styles.copy}>
          <div data-reveal className={styles.lockup}>
            <span className={styles.name}>Zenno Booking</span>
            <span className={styles.previously}>{t.previously}</span>
          </div>

          <h1 data-reveal className={styles.headline}>
            {t.line1}
            <br />
            <span className="ghost-word">{t.line2}</span>
          </h1>

          <p data-reveal className={`lead ${styles.lead}`}>
            {t.lead}
          </p>

          <div data-reveal className={styles.ctas}>
            <Magnetic strength={0.3}>
              <a href={BOOKING_APP_URL} className="btn">
                {t.ctaPrimary} <span className="arrow">→</span>
              </a>
            </Magnetic>
            <a href="#together" className="btn ghost">
              {t.ctaSecondary}
            </a>
          </div>
          <p data-reveal className={styles.note}>
            {BOOKING_PRICING_NOTE[lang]}
          </p>
        </div>

        <div data-reveal className={styles.demo}>
          <TwoDoorsDemo lang={lang} />
        </div>
      </div>
    </section>
  )
}
