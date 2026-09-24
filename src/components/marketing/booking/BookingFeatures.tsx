import type { ReactNode } from 'react'
import type { Lang } from '@/lib/marketing/lang'
import { BOOKING_FEATURES, type BookingFeature } from '@/lib/marketing/content/booking'
import { SectionHeader } from '../primitives/SectionHeader'
import styles from './BookingFeatures.module.css'

const STRINGS: Record<
  Lang,
  { kicker: string; titlePre: string; titleGhost: string; lead: string; gift: string; flow: [string, string][] }
> = {
  en: {
    kicker: 'What Zenno Booking does',
    titlePre: 'Everything behind the appointment,',
    titleGhost: 'in one place.',
    lead: 'Built for salons, spas, massage and wellness studios.',
    gift: 'Gift card',
    flow: [
      ['Service', 'Balayage · 2h'],
      ['Specialist', 'Mia'],
      ['Time', 'Thu 11:00'],
    ],
  },
  de: {
    kicker: 'Was Zenno Booking kann',
    titlePre: 'Alles rund um den Termin,',
    titleGhost: 'an einem Ort.',
    lead: 'Gemacht für Salons, Spas, Massage- und Wellnessstudios.',
    gift: 'Gutschein',
    flow: [
      ['Leistung', 'Balayage · 2 Std.'],
      ['Fachkraft', 'Mia'],
      ['Uhrzeit', 'Do. 11:00'],
    ],
  },
}

const GIFT_PUNCHES = 10
const GIFT_PUNCHED = 7

/** Mini booking-page flow — service → specialist → time. */
function PageVisual({ steps }: { steps: [string, string][] }) {
  return (
    <div className={styles.flow} aria-hidden>
      {steps.map(([k, v], i) => (
        <span key={k} className={`${styles.step} ${i === steps.length - 1 ? styles.stepOn : ''}`}>
          <em>{k}</em>
          {v}
        </span>
      ))}
    </div>
  )
}

function GiftVisual({ label }: { label: string }) {
  return (
    <div className={styles.gift} aria-hidden>
      <span className={styles.giftAmount}>€50</span>
      <span className={styles.giftLabel}>{label}</span>
      <span className={styles.giftDots}>
        {Array.from({ length: GIFT_PUNCHES }, (_, i) => (
          <i key={i} className={i < GIFT_PUNCHED ? styles.dotOn : ''} />
        ))}
      </span>
    </div>
  )
}

function visualFor(area: BookingFeature['area'], lang: Lang): ReactNode {
  if (area === 'page') return <PageVisual steps={STRINGS[lang].flow} />
  if (area === 'loyalty') return <GiftVisual label={STRINGS[lang].gift} />
  return null
}

interface BookingFeaturesProps {
  lang?: Lang
}

export function BookingFeatures({ lang = 'en' }: BookingFeaturesProps) {
  const t = STRINGS[lang]
  return (
    <section id="features" className={`pad-y ${styles.section}`}>
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

        <div className={styles.bento}>
          {BOOKING_FEATURES[lang].map((f) => (
            <article key={f.area} data-reveal className={`card ${styles.tile}`} style={{ gridArea: f.area }}>
              <h3 className={styles.title}>{f.title}</h3>
              <p className={styles.body}>{f.body}</p>
              {visualFor(f.area, lang)}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
