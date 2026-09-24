import type { Lang } from '@/lib/marketing/lang'
import { BOOKING_APP_URL, LEGACY_BOOKING_DOMAIN } from '@/lib/marketing/config'
import styles from './ExistingCustomers.module.css'

const STRINGS: Record<
  Lang,
  { kicker: string; titlePre: string; titleGhost: string; lead: string; cta: string; carried: string; items: string[] }
> = {
  en: {
    kicker: `Already on ${LEGACY_BOOKING_DOMAIN}?`,
    titlePre: 'New name.',
    titleGhost: 'Nothing else to do.',
    lead: 'onbuuk is now Zenno Booking. Everything you set up is still there — sign in the way you always have.',
    cta: 'Sign in to Zenno Booking',
    carried: 'carried over',
    items: ['Your account & login', 'Services & specialists', 'Your booking link', 'Client history', 'Your plan & billing'],
  },
  de: {
    kicker: `Schon bei ${LEGACY_BOOKING_DOMAIN}?`,
    titlePre: 'Neuer Name.',
    titleGhost: 'Sonst nichts zu tun.',
    lead: 'onbuuk heißt jetzt Zenno Booking. Alles, was Sie eingerichtet haben, ist noch da — melden Sie sich wie gewohnt an.',
    cta: 'Bei Zenno Booking anmelden',
    carried: 'übernommen',
    items: ['Konto & Login', 'Leistungen & Fachkräfte', 'Ihr Buchungslink', 'Kundenhistorie', 'Tarif & Abrechnung'],
  },
}

interface ExistingCustomersProps {
  lang?: Lang
}

/** Reassurance for the people who were already paying onbuuk. */
export function ExistingCustomers({ lang = 'en' }: ExistingCustomersProps) {
  const t = STRINGS[lang]
  return (
    <section className="pad-y">
      <div className={`wrap ${styles.wrap}`}>
        <div data-reveal className={styles.copy}>
          <span className="kicker">{t.kicker}</span>
          <h2 className="title">
            {t.titlePre} <span className="ghost-word">{t.titleGhost}</span>
          </h2>
          <p className="lead">{t.lead}</p>
          <a href={BOOKING_APP_URL} className="btn">
            {t.cta} <span className="arrow">→</span>
          </a>
        </div>

        <ul data-reveal className={`card ${styles.list}`}>
          {t.items.map((item) => (
            <li key={item}>
              <span className={styles.check}>✓</span>
              {item}
              <em>{t.carried}</em>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
