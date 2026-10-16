import { Sparkles } from 'lucide-react'
import type { Lang } from '@/lib/marketing/lang'
import { START_URL, SUPPORT_EMAIL } from '@/lib/marketing/config'
import { BOOKING_PRICING_NOTE } from '@/lib/marketing/content/booking'
import { CREDIT_PACKS, PLANS } from '@/lib/marketing/content/plans'
import { SectionHeader } from '../primitives/SectionHeader'
import { Magnetic } from '../primitives/Magnetic'
import pricing from '../Pricing.module.css'
import styles from './BookingPricing.module.css'

interface PricingStrings {
  kicker: string
  titlePre: string
  titleGhost: string
  badge: string
  per: string
  creditsKicker: string
  creditsTitle: string
  creditsBody: string
  replies: string
  paused: string
  stripe: string
}

const STRINGS: Record<Lang, PricingStrings> = {
  en: {
    kicker: 'Pricing',
    titlePre: 'Start free.',
    titleGhost: 'Grow into it.',
    badge: 'Popular',
    per: '/mo',
    creditsKicker: 'AI credits',
    creditsTitle: 'Need more AI replies? Top up.',
    creditsBody: 'Zenno includes 1,000 AI replies a month. Add more any time.',
    replies: 'AI replies',
    paused: 'If credits run out, the AI pauses and new messages wait in your inbox. Nothing is lost.',
    stripe: 'Paid securely through Stripe.',
  },
  de: {
    kicker: 'Preise',
    titlePre: 'Kostenlos starten.',
    titleGhost: 'Mitwachsen.',
    badge: 'Beliebt',
    per: '/Monat',
    creditsKicker: 'KI-Credits',
    creditsTitle: 'Mehr KI-Antworten nötig? Einfach aufladen.',
    creditsBody: 'Zenno enthält 1.000 KI-Antworten im Monat. Mehr können Sie jederzeit dazukaufen.',
    replies: 'KI-Antworten',
    paused: 'Sind die Credits aufgebraucht, pausiert die KI und neue Nachrichten warten in Ihrem Posteingang. Nichts geht verloren.',
    stripe: 'Sicher bezahlt über Stripe.',
  },
  th: {
    kicker: 'ราคา',
    titlePre: 'เริ่มใช้ฟรี',
    titleGhost: 'โตไปด้วยกัน',
    badge: 'ยอดนิยม',
    per: '/เดือน',
    creditsKicker: 'เครดิต AI',
    creditsTitle: 'อยากได้การตอบด้วย AI เพิ่ม เติมได้เลย',
    creditsBody: 'แพ็กเกจ Zenno รวมการตอบด้วย AI 1,000 ข้อความต่อเดือน ซื้อเพิ่มได้ทุกเมื่อ',
    replies: 'ข้อความตอบด้วย AI',
    paused: 'ถ้าเครดิตหมด AI จะหยุดตอบชั่วคราว และข้อความใหม่จะรออยู่ในกล่องข้อความ ไม่มีข้อความหาย',
    stripe: 'ชำระเงินอย่างปลอดภัยผ่าน Stripe',
  },
}

interface BookingPricingProps {
  lang?: Lang
}

/** Free, Zenno and Custom, then the AI credit packs. */
export function BookingPricing({ lang = 'en' }: BookingPricingProps) {
  const t = STRINGS[lang]
  const talkHref = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent('Zenno Custom')}`

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
          {PLANS[lang].map((plan) => (
            <article key={plan.name} data-reveal className={`${pricing.tier} ${plan.isPopular ? pricing.popular : 'card'}`}>
              {plan.isPopular && <span className={`${pricing.badge} ${styles.badge}`}>{t.badge}</span>}
              <span className={pricing.name}>{plan.name}</span>
              <div className={pricing.price}>
                <span className={`${pricing.amount} ${plan.isCustom ? styles.customAmount : ''}`}>{plan.price}</span>
                {!plan.isCustom && <span className={pricing.per}>{t.per}</span>}
              </div>
              <span className={pricing.line}>{plan.line}</span>
              <ul className={pricing.features}>
                {plan.features.map((f) => (
                  <li key={f}>
                    <span className={`${pricing.tick} ${styles.tick}`}>✓</span>
                    {f}
                  </li>
                ))}
                {plan.limits?.map((l) => (
                  <li key={l} className={styles.limit}>
                    <span className={pricing.tick}>–</span>
                    {l}
                  </li>
                ))}
              </ul>
              <Magnetic strength={0.25}>
                <a href={plan.isCustom ? talkHref : START_URL} className={`btn ${plan.isPopular ? '' : 'ghost'} ${pricing.btn}`}>
                  {plan.cta} <span className="arrow">→</span>
                </a>
              </Magnetic>
            </article>
          ))}
        </div>

        <div data-reveal className={`card ${styles.credits}`}>
          <div className={styles.creditsCopy}>
            <span className={styles.creditsKicker}>
              <Sparkles size={14} aria-hidden /> {t.creditsKicker}
            </span>
            <p className={styles.creditsTitle}>{t.creditsTitle}</p>
            <p className={styles.creditsBody}>{t.creditsBody}</p>
            <p className={styles.paused}>{t.paused}</p>
          </div>
          <ul className={styles.packs}>
            {CREDIT_PACKS[lang].map((pack) => (
              <li key={pack.replies} className={styles.pack}>
                <b className="tabular">{pack.replies}</b>
                <span>{t.replies}</span>
                <span className={`tabular ${styles.packPrice}`}>{pack.price}</span>
              </li>
            ))}
          </ul>
          <span className={styles.stripe}>{t.stripe}</span>
        </div>
      </div>
    </section>
  )
}
