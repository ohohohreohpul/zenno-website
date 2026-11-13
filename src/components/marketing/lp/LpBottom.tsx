import { ArrowRight, CircleDashed, TrendingUp } from 'lucide-react'
import { localePath, type Lang } from '@/lib/marketing/lang'
import type { LpCopy } from '@/lib/marketing/content/lp'
import { PLANS } from '@/lib/marketing/content/plans'
import { TalksDemo } from '../home/talks/TalksDemo'
import { InboxDemo } from '../home/books/InboxDemo'
import { CalendarDemo } from '../home/calendar/CalendarDemo'
import { SignupCta } from './SignupCta'
import styles from './Lp.module.css'

interface SectionProps {
  lang: Lang
  t: LpCopy
}

export function LpReception({ lang, t }: SectionProps) {
  const r = t.reception
  const demos = [<TalksDemo key="talks" lang={lang} />, <InboxDemo key="inbox" lang={lang} />, <CalendarDemo key="cal" lang={lang} compact />]
  return (
    <section className={styles.section}>
      <div className="wrap">
        <h2 className={`${styles.h2} ${styles.centerText}`}>{r.title}</h2>
        <p className={`${styles.lede} ${styles.centerText}`}>{r.subtitle}</p>
        <div className={styles.blocks}>
          {r.blocks.map((b, i) => (
            <article key={b.title} className={styles.block} data-reveal>
              <div className={styles.blockDemo}>{demos[i]}</div>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/** One photo per studio type, in the order of the copy's booking cards. */
const STUDIO_PHOTOS = [
  '/images/massage-call.webp',
  '/images/beauty-studio.webp',
  '/images/spa-dusk.webp',
  '/images/features/noshow-empty.webp',
  '/images/yoga-hero.webp',
  '/images/clinic-hero.webp',
]

export function LpStudios({ t }: SectionProps) {
  const s = t.studios
  const tiles = s.cards.map((card, i) => ({ ...card, photo: STUDIO_PHOTOS[i] }))
  return (
    <section className={styles.section}>
      <div className={`wrap ${styles.center}`}>
        <span className={styles.pill}>{s.pill}</span>
        <h2 className={styles.h2}>{s.title}</h2>
        <p className={styles.lede}>{s.lede}</p>
      </div>
      <div className={styles.marquee}>
        {/* Two copies of the row make the loop seamless; the second is hidden from screen readers. */}
        {[0, 1].map((copy) => (
          <div key={copy} className={styles.marqueeRow} aria-hidden={copy === 1}>
            {tiles.map((tile) => (
              <figure key={`${copy}-${tile.studio}`} className={styles.studioTile}>
                <img src={tile.photo} alt="" width={640} height={800} loading="lazy" decoding="async" />
                <figcaption className={styles.studioCard}>
                  <span className={styles.studioName}>{tile.studio}</span>
                  <b>{tile.service}</b>
                  <span>{tile.meta}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export function LpExamples({ lang, t }: SectionProps) {
  const e = t.examples
  const steps = [
    { key: 'before', label: e.before, icon: <CircleDashed size={16} /> },
    { key: 'zenno', label: e.zenno, icon: <img src="/logo/mark-black.svg" alt="" width={16} height={16} /> },
    { key: 'after', label: e.after, icon: <TrendingUp size={16} /> },
  ] as const
  return (
    <section className={styles.section}>
      <div className={`wrap ${styles.center}`}>
        <span className={styles.pill}>{e.pill}</span>
        <h2 className={styles.h2}>{e.title}</h2>
        <p className={styles.lede}>{e.lede}</p>
        <div className={styles.cases}>
          {e.cases.map((c) => (
            <div key={c.tag} className={styles.caseWrap} data-reveal>
              <span className={styles.caseTag}>{c.tag}</span>
              <ol className={styles.case}>
                {steps.map((step) => (
                  <li key={step.key} className={step.key === 'after' ? styles.caseAfter : ''}>
                    <span className={styles.caseIcon} aria-hidden>
                      {step.icon}
                    </span>
                    <span className={styles.caseLabel}>{step.label}</span>
                    <span className={styles.caseText}>{c[step.key]}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
        <p className={styles.ctaNote}>{e.note}</p>
        <a className="btn ghost" href={localePath(lang, '/check')}>
          {e.cta} <ArrowRight className="arrow" size={18} aria-hidden />
        </a>
      </div>
    </section>
  )
}

export function LpPricing({ lang, t }: SectionProps) {
  const plans = PLANS[lang].filter((p) => !p.isCustom)
  return (
    <section className={styles.section}>
      <div className={`wrap ${styles.center}`}>
        <h2 className={styles.h2}>{t.pricing.title}</h2>
        <p className={styles.lede}>{t.pricing.lede}</p>
        <div className={styles.plans}>
          {plans.map((plan) => (
            <article key={plan.name} className={`${styles.plan} ${plan.isPopular ? styles.planDark : ''}`}>
              <h3>{plan.name}</h3>
              <p className={styles.planLine}>{plan.line}</p>
              <ul>
                {plan.features.slice(0, 3).map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <p className={styles.planPrice}>
                <strong>{plan.price}</strong> {plan.monthlyEur ? t.pricing.perMonth : ''}
              </p>
              <SignupCta placement={`pricing_${plan.monthlyEur ? 'zenno' : 'free'}`} className={`btn ${plan.isPopular ? 'on-dark' : ''} ${styles.planBtn}`}>
                {plan.cta}
              </SignupCta>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function LpFinal({ t }: SectionProps) {
  return (
    <section className={styles.final}>
      <div className={`wrap ${styles.center}`}>
        <h2 className={styles.h2}>{t.final.title}</h2>
        <p className={styles.lede}>{t.final.lede}</p>
        <SignupCta placement="final" className="btn on-dark">
          {t.cta}
        </SignupCta>
        <p className={styles.ctaNote}>{t.ctaNote}</p>
      </div>
    </section>
  )
}
