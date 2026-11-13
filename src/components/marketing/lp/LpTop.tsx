import { ArrowRight, Sparkles } from 'lucide-react'
import { localePath, type Lang } from '@/lib/marketing/lang'
import type { LpCopy } from '@/lib/marketing/content/lp'
import { HeroDemo } from '../home/hero/HeroDemo'
import { ChatMock, CommissionMock, ReminderMock, VoucherMock } from './LpMocks'
import { Marked } from './Marked'
import { SignupCta } from './SignupCta'
import styles from './Lp.module.css'

interface SectionProps {
  lang: Lang
  t: LpCopy
}

export function LpHero({ lang, t }: SectionProps) {
  return (
    <section className={styles.hero}>
      <div className={`wrap ${styles.center}`}>
        <h1 className={styles.heroTitle}>{t.hero.title}</h1>
        <p className={styles.heroLede}>{t.hero.lede}</p>
        <SignupCta placement="hero">{t.cta}</SignupCta>
        <p className={styles.ctaNote}>{t.ctaNote}</p>
        <figure className={styles.heroMedia}>
          <img src="/images/spa-dusk.webp" alt="" width={2000} height={1200} className={styles.heroPhoto} fetchPriority="high" decoding="async" />
          <div className={styles.heroDemo}>
            <HeroDemo lang={lang} />
          </div>
          <figcaption className={styles.mediaLabel}>{t.hero.mediaLabel}</figcaption>
        </figure>
      </div>
    </section>
  )
}

const MOCKS = [ChatMock, VoucherMock, ReminderMock, CommissionMock]

export function LpDoesWork({ lang, t }: SectionProps) {
  const d = t.doesWork
  return (
    <section className={styles.section}>
      <div className="wrap">
        <h2 className={`${styles.h2} ${styles.centerText}`}>
          {d.title}
          <br />
          <mark className={styles.mark}>{d.titleMark}</mark>
        </h2>
        <div className={styles.story}>
          {d.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p>
            <b>{d.closing}</b>
          </p>
        </div>
        <div className={styles.cards}>
          {d.cards.map((card, i) => {
            const Mock = MOCKS[i]
            return (
              <article key={card.title} className={styles.card} data-reveal>
                <div className={styles.cardHead}>
                  <h3>{card.title}</h3>
                  <span className={styles.cardNo}>#{String(i + 1).padStart(2, '0')}</span>
                </div>
                <p className={styles.cardText}>{card.text}</p>
                <div className={styles.cardVisual}>
                  <Mock lang={lang} />
                </div>
              </article>
            )
          })}
        </div>
        <p className={styles.more}>
          <Marked text={d.more} />
        </p>
      </div>
    </section>
  )
}

export function LpStat({ t }: SectionProps) {
  return (
    <section className={styles.stat}>
      <div className={`wrap ${styles.center}`}>
        <blockquote className={styles.statQuote}>{t.stat.quote}</blockquote>
        <p className={styles.statSource}>{t.stat.source}</p>
      </div>
    </section>
  )
}

export function LpCheck({ lang, t }: SectionProps) {
  const c = t.check
  return (
    <section className={styles.checkBand}>
      <div className={`wrap ${styles.center}`}>
        <span className={styles.pill}>{c.pill}</span>
        <h2 className={styles.h2}>{c.title}</h2>
        <p className={styles.lede}>{c.lede}</p>
        <div className={styles.exampleWrap}>
          <span className={styles.exampleTag}>{c.exampleLabel}</span>
          <article className={styles.exampleCard}>
            <div className={styles.exampleHead}>
              <span className={styles.avatar} aria-hidden>
                <Sparkles size={22} />
              </span>
              <div>
                <h3>{c.cardTitle}</h3>
                <p>{c.cardLede}</p>
              </div>
            </div>
            <ol className={styles.actions}>
              {c.actions.map((a) => (
                <li key={a}>
                  <Marked text={a} />
                </li>
              ))}
            </ol>
          </article>
        </div>
        <a className={`btn ${styles.wideBtn}`} href={localePath(lang, '/check')}>
          {c.cta} <ArrowRight className="arrow" size={18} aria-hidden />
        </a>
        <p className={styles.ctaNote}>{c.ctaNote}</p>
      </div>
    </section>
  )
}
