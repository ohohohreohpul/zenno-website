import type { Lang } from '@/lib/marketing/lang'
import { appHref, BOOKING_APP_URL } from '@/lib/marketing/config'
import { PRICING_TIERS } from '@/lib/marketing/content/pricing'
import { SectionHeader } from '../primitives/SectionHeader'
import styles from './TwoProducts.module.css'

interface ProductCard {
  tone: 'bk' | 'zenno'
  label: string
  title: string
  body: string
  points: string[]
  price: string
  billing: string
  href: string
  cta: string
}

interface TwoProductsStrings {
  kicker: string
  titlePre: string
  titleGhost: string
  lead: string
  products: ProductCard[]
  alreadyPre: string
  alreadyLink: string
  alreadyPost: string
}

const zennoEntry = (lang: Lang): string => PRICING_TIERS[lang][0].price

const STRINGS: Record<Lang, TwoProductsStrings> = {
  en: {
    kicker: 'Two doors, one front desk',
    titlePre: 'Use one.',
    titleGhost: 'Or let them work together.',
    lead: 'Some clients want to tap a time. Others just send a message. Cover both, and never offer the same slot twice.',
    products: [
      {
        tone: 'bk',
        label: 'For clients who click',
        title: 'Zenno Booking',
        body: 'The booking page, calendar and payments. Put the link in your bio, on Google, on your website.',
        points: ['Booking page & calendar', 'Payments, reminders, gift cards', 'Loyalty & client portal'],
        price: 'from €0',
        billing: 'Its own plan & account',
        href: BOOKING_APP_URL,
        cta: 'Start free',
      },
      {
        tone: 'zenno',
        label: 'For clients who message',
        title: 'Zenno AI receptionist',
        body: 'Answers WhatsApp, Telegram, LINE and web chat 24/7 — and books the appointment in the conversation.',
        points: ['Replies in seconds, any hour', 'Books real open slots', 'Hands over to you anytime'],
        price: `from ${zennoEntry('en')}/mo`,
        billing: 'A Zenno plan, added when you want it',
        href: '/pricing',
        cta: 'See Zenno plans',
      },
    ],
    alreadyPre: 'Already use Zenno?',
    alreadyLink: 'Connect Zenno Booking from your dashboard',
    alreadyPost: '— one calendar, both doors.',
  },
  de: {
    kicker: 'Zwei Türen, ein Empfang',
    titlePre: 'Eins nutzen.',
    titleGhost: 'Oder beides zusammen.',
    lead: 'Manche Kund:innen tippen lieber auf eine Uhrzeit, andere schreiben einfach. Decken Sie beides ab — ohne je einen Termin doppelt zu vergeben.',
    products: [
      {
        tone: 'bk',
        label: 'Für alle, die klicken',
        title: 'Zenno Booking',
        body: 'Buchungsseite, Kalender und Bezahlung. Den Link in die Bio, auf Google, auf die Website.',
        points: ['Buchungsseite & Kalender', 'Zahlungen, Erinnerungen, Gutscheine', 'Treueprogramm & Kundenportal'],
        price: 'ab €0',
        billing: 'Eigener Tarif & eigenes Konto',
        href: BOOKING_APP_URL,
        cta: 'Kostenlos starten',
      },
      {
        tone: 'zenno',
        label: 'Für alle, die schreiben',
        title: 'Zenno KI-Empfang',
        body: 'Beantwortet WhatsApp, Telegram, LINE und Web-Chat rund um die Uhr — und bucht den Termin direkt im Gespräch.',
        points: ['Antwortet in Sekunden, jederzeit', 'Bucht echte freie Termine', 'Übergibt jederzeit an Sie'],
        price: `ab ${zennoEntry('de')}/Monat`,
        billing: 'Ein Zenno-Tarif, zubuchbar wann Sie möchten',
        href: '/pricing',
        cta: 'Zenno-Tarife ansehen',
      },
    ],
    alreadyPre: 'Sie nutzen Zenno schon?',
    alreadyLink: 'Verbinden Sie Zenno Booking im Dashboard',
    alreadyPost: '— ein Kalender, beide Türen.',
  },
}

interface TwoProductsProps {
  lang?: Lang
}

/**
 * Makes the product split — and the separate billing — explicit, so nobody
 * reads the page thinking Zenno Booking is a Zenno plan tier.
 */
export function TwoProducts({ lang = 'en' }: TwoProductsProps) {
  const t = STRINGS[lang]
  return (
    <section className="pad-y">
      <div className="wrap">
        <SectionHeader
          kicker={t.kicker}
          title={
            <>
              {t.titlePre} <span className="ghost-word">{t.titleGhost}</span>
            </>
          }
          lead={t.lead}
        />

        <div className={styles.grid}>
          {t.products.map((p) => (
            <article key={p.title} data-reveal className={`card ${styles.card} ${styles[p.tone]}`}>
              <span className={styles.label}>{p.label}</span>
              <h3 className="sub">{p.title}</h3>
              <p className={styles.body}>{p.body}</p>
              <ul className={styles.points}>
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <div className={styles.foot}>
                <div>
                  <strong className={styles.price}>{p.price}</strong>
                  <span className={styles.billing}>{p.billing}</span>
                </div>
                <a href={p.href} className="btn ghost">
                  {p.cta} <span className="arrow">→</span>
                </a>
              </div>
            </article>
          ))}
          <div className={styles.plus} aria-hidden>
            +
          </div>
        </div>

        <p data-reveal className={styles.already}>
          {t.alreadyPre} <a href={appHref()}>{t.alreadyLink}</a> {t.alreadyPost}
        </p>
      </div>
    </section>
  )
}
