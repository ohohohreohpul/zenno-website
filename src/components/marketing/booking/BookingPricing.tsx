import type { Lang } from '@/lib/marketing/lang'
import { BOOKING_APP_URL } from '@/lib/marketing/config'
import { BOOKING_TIERS, BOOKING_PRICING_NOTE } from '@/lib/marketing/content/booking'
import { PRICING_TIERS } from '@/lib/marketing/content/pricing'
import { SectionHeader } from '../primitives/SectionHeader'
import { Magnetic } from '../primitives/Magnetic'
import pricing from '../Pricing.module.css'
import styles from './BookingPricing.module.css'

const STRINGS: Record<
  Lang,
  {
    kicker: string
    titlePre: string
    titleGhost: string
    badge: string
    per: string
    addonKicker: string
    addonTitle: string
    addonBody: (price: string) => string
    addonCta: string
  }
> = {
  en: {
    kicker: 'Zenno Booking pricing',
    titlePre: 'Start free.',
    titleGhost: 'Grow into it.',
    badge: 'Popular',
    per: '/mo',
    addonKicker: 'Add-on · billed separately by Zenno',
    addonTitle: 'Want the chats answered and booked too?',
    addonBody: (price) =>
      `The Zenno AI receptionist starts at ${price}/mo and books straight into your Zenno Booking calendar.`,
    addonCta: 'See Zenno plans',
  },
  de: {
    kicker: 'Zenno Booking Preise',
    titlePre: 'Kostenlos starten.',
    titleGhost: 'Mitwachsen.',
    badge: 'Beliebt',
    per: '/Monat',
    addonKicker: 'Zusatz · separat abgerechnet von Zenno',
    addonTitle: 'Sollen Chats auch beantwortet und gebucht werden?',
    addonBody: (price) =>
      `Der Zenno KI-Empfang startet ab ${price}/Monat und bucht direkt in Ihren Zenno-Booking-Kalender.`,
    addonCta: 'Zenno-Tarife ansehen',
  },
}

interface BookingPricingProps {
  lang?: Lang
}

/**
 * Zenno Booking has its own plans and billing (inherited from onbuuk), so it
 * reuses the Zenno pricing-card look but links to its own app — and points to
 * the AI receptionist as a separately billed add-on rather than a tier.
 */
export function BookingPricing({ lang = 'en' }: BookingPricingProps) {
  const t = STRINGS[lang]
  const zennoEntryPrice = PRICING_TIERS[lang][0].price

  return (
    <section id="pricing" className="pad-y">
      <div className="wrap">
        <SectionHeader
          align="center"
          kicker={t.kicker}
          title={
            <>
              {t.titlePre} <span className="ghost-word">{t.titleGhost}</span>
            </>
          }
          lead={BOOKING_PRICING_NOTE[lang]}
        />

        <div className={pricing.grid}>
          {BOOKING_TIERS[lang].map((tier) => (
            <article
              key={tier.name}
              data-reveal
              className={`${pricing.tier} ${tier.popular ? pricing.popular : 'card'}`}
            >
              {tier.popular && <span className={`${pricing.badge} ${styles.badge}`}>{t.badge}</span>}
              <span className={pricing.name}>{tier.name}</span>
              <div className={pricing.price}>
                <span className={pricing.amount}>{tier.price}</span>
                <span className={pricing.per}>{t.per}</span>
              </div>
              <span className={pricing.line}>{tier.line}</span>
              <ul className={pricing.features}>
                {tier.features.map((f) => (
                  <li key={f}>
                    <span className={`${pricing.tick} ${tier.popular ? styles.tickOnDark : styles.tick}`}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Magnetic strength={0.25}>
                <a href={BOOKING_APP_URL} className={`btn ${tier.popular ? 'on-dark' : 'ghost'} ${pricing.btn}`}>
                  {tier.cta} <span className="arrow">→</span>
                </a>
              </Magnetic>
            </article>
          ))}
        </div>

        <div data-reveal className={`card ${styles.addon}`}>
          <div>
            <span className={styles.addonKicker}>{t.addonKicker}</span>
            <p className={styles.addonTitle}>{t.addonTitle}</p>
            <p className={styles.addonBody}>{t.addonBody(zennoEntryPrice)}</p>
          </div>
          <a href="/pricing" className="btn">
            {t.addonCta} <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
