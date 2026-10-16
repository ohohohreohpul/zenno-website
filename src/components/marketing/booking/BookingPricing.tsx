import type { Lang } from '@/lib/marketing/lang'
import { START_URL } from '@/lib/marketing/config'
import { BOOKING_TIERS, BOOKING_PRICING_NOTE } from '@/lib/marketing/content/booking'
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
    addonBody: string
    addonCta: string
  }
> = {
  en: {
    kicker: 'Pricing',
    titlePre: 'Start free.',
    titleGhost: 'Grow into it.',
    badge: 'Popular',
    per: '/mo',
    addonKicker: 'AI receptionist',
    addonTitle: 'The receptionist is part of the same app.',
    addonBody: 'AI usage is unlimited for now. Write to us and we will set it up for your shop.',
    addonCta: 'Write to us',
  },
  de: {
    kicker: 'Preise',
    titlePre: 'Kostenlos starten.',
    titleGhost: 'Mitwachsen.',
    badge: 'Beliebt',
    per: '/Monat',
    addonKicker: 'KI-Rezeption',
    addonTitle: 'Die Rezeption ist Teil derselben App.',
    addonBody: 'Die KI-Nutzung ist derzeit unbegrenzt. Schreiben Sie uns, und wir richten sie für Ihren Laden ein.',
    addonCta: 'Schreiben Sie uns',
  },
  th: {
    kicker: 'ราคา',
    titlePre: 'เริ่มใช้ฟรี',
    titleGhost: 'โตไปด้วยกัน',
    badge: 'ยอดนิยม',
    per: '/เดือน',
    addonKicker: 'พนักงานต้อนรับ AI',
    addonTitle: 'พนักงานต้อนรับอยู่ในแอปเดียวกัน',
    addonBody: 'ตอนนี้ใช้งาน AI ได้ไม่จำกัด ส่งข้อความหาเรา แล้วเราจะตั้งค่าให้ร้านของคุณ',
    addonCta: 'ติดต่อเรา',
  },
}

interface BookingPricingProps {
  lang?: Lang
}

/**
 * The published plans (inherited from onbuuk), plus a note on the AI
 * receptionist: it lives in the same app and its usage is unlimited for now.
 */
export function BookingPricing({ lang = 'en' }: BookingPricingProps) {
  const t = STRINGS[lang]

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
                    <span className={`${pricing.tick} ${styles.tick}`}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Magnetic strength={0.25}>
                <a href={START_URL} className={`btn ${tier.popular ? '' : 'ghost'} ${pricing.btn}`}>
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
            <p className={styles.addonBody}>{t.addonBody}</p>
          </div>
          <a href={START_URL} className="btn">
            {t.addonCta} <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
