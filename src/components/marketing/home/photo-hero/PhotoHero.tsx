'use client'

import type { ReactNode } from 'react'
import { useMemo, useRef } from 'react'
import { ArrowRight, Check, Play } from 'lucide-react'
import { useStepLoop } from '@/lib/marketing/useStepLoop'
import { START_URL } from '@/lib/marketing/config'
import { ChannelBadge, CHANNEL_LABEL, type Channel } from '../../app-ui/ChannelBadge'
import type { StaffColor } from '../../app-ui/DayCalendar'
import styles from './PhotoHero.module.css'

export interface SceneCard {
  notice: { channel: Channel; from: string; text: string; time: string }
  reply: string
  booking: { time: string; name: string; service: string; staff: string; color: StaffColor }
  /** Two bookings already in the column, for context. */
  around: readonly [{ time: string; name: string; color: StaffColor }, { time: string; name: string; color: StaffColor }]
  status: string
}

export interface PhotoScene {
  label: string
  image: string
  alt: string
  card: SceneCard
}

interface PhotoHeroProps {
  eyebrow?: string
  title: ReactNode
  sub: string
  primary: string
  secondary: string
  secondaryHref: string
  scenes: readonly PhotoScene[]
  /** Accessible name for the scene pills. */
  scenesLabel: string
}

/** How long each scene stays before the next one. */
const SCENE_MS = 5600

/**
 * Full-bleed photo hero. On the photo, the app itself in frosted glass: the
 * guest's message, the reply, and the booking landing in the column.
 */
export function PhotoHero({ eyebrow, title, sub, primary, secondary, secondaryHref, scenes, scenesLabel }: PhotoHeroProps) {
  const ref = useRef<HTMLElement>(null)
  const durations = useMemo(() => scenes.map(() => SCENE_MS), [scenes])
  const { step, goTo } = useStepLoop(ref, durations)
  const scene = scenes[step]

  return (
    <section ref={ref} id="top" className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.photos} aria-hidden>
        {scenes.map((s, i) => (
          <img
            key={s.image}
            src={s.image}
            alt=""
            width={2000}
            height={1143}
            className={i === step ? styles.photoOn : ''}
            loading={i === 0 ? 'eager' : 'lazy'}
            fetchPriority={i === 0 ? 'high' : 'auto'}
          />
        ))}
      </div>
      <div className={styles.shade} aria-hidden />

      <div className={`wrap ${styles.inner}`}>
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
        <h1 id="hero-heading" className={styles.title}>
          {title}
        </h1>
        <p className={styles.sub}>{sub}</p>
        <div className={styles.ctas}>
          <a href={START_URL} className={`btn on-dark ${styles.primary}`}>
            {primary} <ArrowRight size={16} className="arrow" aria-hidden />
          </a>
          <a href={secondaryHref} className={`btn ${styles.secondary}`}>
            <Play size={14} aria-hidden /> {secondary}
          </a>
        </div>

        <GlassApp key={step} card={scene.card} />

        <div className={styles.pills} role="group" aria-label={scenesLabel}>
          {scenes.map((s, i) => (
            <button key={s.label} type="button" className={styles.pill} aria-pressed={i === step} onClick={() => goTo(i, true)}>
              {s.label}
            </button>
          ))}
        </div>
        <span className="sr-only" aria-live="polite">
          {scene.alt}
        </span>
      </div>
    </section>
  )
}

/** Our own inbox and calendar, frosted: chat on the left, the staff column on the right. */
function GlassApp({ card }: { card: SceneCard }) {
  const { notice, booking } = card
  return (
    <div className={`zn ${styles.glass}`} aria-hidden>
      <div className={styles.chatPane}>
        <div className={styles.who}>
          <span className={`zn-avatar ${styles.avatar}`}>
            {notice.from.charAt(0)}
            <ChannelBadge channel={notice.channel} />
          </span>
          <span>
            <b>{notice.from}</b>
            <span>{CHANNEL_LABEL[notice.channel]}</span>
          </span>
        </div>
        <div className={`${styles.bubble} ${styles.guest} ${styles.in1}`}>
          {notice.text}
          <span className="tabular">{notice.time}</span>
        </div>
        <div className={`${styles.bubble} ${styles.shop} ${styles.in2}`}>{card.reply}</div>
        <span className={`${styles.status} ${styles.in3}`}>
          <Check size={13} strokeWidth={2.5} /> {card.status}
        </span>
      </div>

      <div className={styles.calPane}>
        <span className={styles.calHead}>
          <i className={styles[`dot${booking.color}`]} /> {booking.staff}
        </span>
        <div className={styles.slot}>
          <span className="tabular">{card.around[0].time}</span>
          <span className={`${styles.mini} ${styles[`s${card.around[0].color}`]}`}>{card.around[0].name}</span>
        </div>
        <div className={styles.slot}>
          <span className="tabular">{booking.time}</span>
          <span className={`${styles.mini} ${styles.newCard} ${styles[`s${booking.color}`]}`}>
            <b>{booking.name}</b>
            <span>{booking.service}</span>
          </span>
        </div>
        <div className={styles.slot}>
          <span className="tabular">{card.around[1].time}</span>
          <span className={`${styles.mini} ${styles[`s${card.around[1].color}`]}`}>{card.around[1].name}</span>
        </div>
      </div>
    </div>
  )
}
