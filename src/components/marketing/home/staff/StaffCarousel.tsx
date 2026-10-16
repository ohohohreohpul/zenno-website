'use client'

import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react'
import type { Lang } from '@/lib/marketing/lang'
import { STAFF_COPY, STAFF_TEAM, type StaffCopy, type StaffMember, type StaffSlot } from './staffCopy'
import styles from './StaffCarousel.module.css'

interface StaffCarouselProps {
  lang: Lang
}

/** One card per therapist: portrait, colour, working days and today's slots. Swipe or use the arrows. */
export function StaffCarousel({ lang }: StaffCarouselProps) {
  const track = useRef<HTMLUListElement>(null)
  const [active, setActive] = useState(0)
  const t = STAFF_COPY[lang]

  const scrollTo = (i: number) => {
    const next = Math.max(0, Math.min(STAFF_TEAM.length - 1, i))
    const card = track.current?.children[next] as HTMLElement | undefined
    card?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    setActive(next)
  }

  const onScroll = () => {
    const el = track.current
    if (!el) return
    const cards = Array.from(el.children) as HTMLElement[]
    const centre = el.scrollLeft + el.clientWidth / 2
    const nearest = cards.reduce(
      (best, card, i) => {
        const d = Math.abs(card.offsetLeft + card.offsetWidth / 2 - centre)
        return d < best.d ? { i, d } : best
      },
      { i: 0, d: Infinity },
    )
    setActive(nearest.i)
  }

  return (
    <section id="team" className={styles.section} aria-labelledby="team-heading">
      <div className={`wrap ${styles.head}`}>
        <h2 data-reveal id="team-heading" className={styles.title}>
          {t.title}
        </h2>
        <p data-reveal className={styles.sub}>
          {t.sub}
        </p>
      </div>

      <ul ref={track} className={styles.track} aria-label={t.carouselLabel} onScroll={onScroll}>
        {STAFF_TEAM.map((member, i) => (
          <li key={member.name} className={styles.slide} data-active={i === active}>
            <StaffCard member={member} lang={lang} t={t} />
          </li>
        ))}
      </ul>

      <div className={styles.controls}>
        <button type="button" className={styles.arrow} onClick={() => scrollTo(active - 1)} disabled={active === 0} aria-label={t.prev}>
          <ChevronLeft size={18} aria-hidden />
        </button>
        <div className={styles.dots}>
          {STAFF_TEAM.map((m, i) => (
            <button
              key={m.name}
              type="button"
              className={styles.dot}
              aria-current={i === active}
              aria-label={m.name}
              onClick={() => scrollTo(i)}
            />
          ))}
        </div>
        <button
          type="button"
          className={styles.arrow}
          onClick={() => scrollTo(active + 1)}
          disabled={active === STAFF_TEAM.length - 1}
          aria-label={t.next}
        >
          <ChevronRight size={18} aria-hidden />
        </button>
      </div>
    </section>
  )
}

interface StaffCardProps {
  member: StaffMember
  lang: Lang
  t: StaffCopy
}

function StaffCard({ member, lang, t }: StaffCardProps) {
  const booked = member.slots.filter((s) => s.kind === 'booked' || s.kind === 'pending').length
  const free = member.slots.filter((s) => s.kind === 'free').length

  return (
    <article className={`zn ${styles.card}`}>
      <div className={styles.portrait}>
        <img src={member.photo} alt="" width={900} height={1125} loading="lazy" decoding="async" />
        <span className={styles.nameTag}>
          <i className={styles[`dot${member.color}`]} />
          {member.name}
        </span>
      </div>

      <div className={styles.panel}>
        <div className={styles.panelHead}>
          <span>
            <b className={styles.name}>{member.name}</b>
            <span className={styles.role}>{member.role[lang]}</span>
          </span>
          <span className="zn-pill">
            <span className={`zn-dot ${styles[`dot${member.color}`]}`} />
            <span className="tabular">{member.hours}</span>
          </span>
        </div>

        <div className={styles.week} aria-label={t.works}>
          {t.week.map((d, i) => (
            <span key={d} className={i === member.dayOff ? styles.off : ''}>
              {d}
            </span>
          ))}
        </div>

        <div className={styles.dayHead}>
          <span className="zn-eyebrow">{t.today}</span>
          <span className="zn-caption">{t.summary(booked, free)}</span>
        </div>

        <ul className={styles.slots}>
          {member.slots.map((slot) => (
            <li key={slot.time}>
              <span className={`tabular ${styles.time}`}>{slot.time}</span>
              <Slot slot={slot} color={member.color} t={t} />
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

function Slot({ slot, color, t }: { slot: StaffSlot; color: StaffMember['color']; t: StaffCopy }) {
  if (slot.kind === 'free') {
    return (
      <span className={styles.free}>
        <Plus size={13} aria-hidden /> {t.free} <em>{t.freeHint}</em>
      </span>
    )
  }
  if (slot.kind === 'blocked') {
    return <span className={`zn-block ${styles.blocked}`}>{t.blocked}</span>
  }
  return (
    <span className={`zn-booking zn-booking--s${color} ${slot.kind === 'pending' ? 'zn-booking--pending' : ''} ${styles.booked}`}>
      <span className="zn-booking__row">
        <span className="zn-booking__dot" style={slot.kind === 'pending' ? { background: 'var(--warning)' } : undefined} />
        <span>{slot.label}</span>
        {slot.kind === 'pending' && <span className={styles.pendingTag}>{t.pending}</span>}
      </span>
    </span>
  )
}
