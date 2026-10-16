import { Check } from 'lucide-react'
import styles from './DayCalendar.module.css'

export type StaffColor = 1 | 2 | 3

export interface CalStaff {
  name: string
  color: StaffColor
}

export interface CalBooking {
  id: string
  /** Column index into `staff`. */
  col: number
  /** Start as decimal hours, e.g. 14.5 = 14:30. */
  start: number
  /** Length in hours. */
  dur: number
  name: string
  service: string
  isPending?: boolean
  isPaid?: boolean
  /** Plays the drop-in animation (a booking that just arrived). */
  isNew?: boolean
  isHighlighted?: boolean
}

export interface CalBlock {
  id: string
  col: number
  start: number
  dur: number
  title: string
  note: string
  isNew?: boolean
}

export interface CalGhost {
  col: number
  start: number
}

interface DayCalendarProps {
  staff: readonly CalStaff[]
  bookings: readonly CalBooking[]
  blocks?: readonly CalBlock[]
  ghost?: CalGhost | null
  /** First and last hour shown. */
  from?: number
  to?: number
  /** Current time as decimal hours; draws the red now-line. */
  nowAt?: number
  /** Accessible summary of what the calendar shows. */
  label: string
  compact?: boolean
}

const HOUR_PX = 52
const COMPACT_HOUR_PX = 42

export function formatTime(hours: number): string {
  const h = Math.floor(hours)
  const m = Math.round((hours - h) * 60)
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
}

/**
 * The POS calendar's Day view: one column per therapist in their colour,
 * booking cards, striped blocked time and the hover ghost. A static rendition
 * of the app's calendar for the site's demos.
 */
export function DayCalendar({
  staff,
  bookings,
  blocks = [],
  ghost = null,
  from = 10,
  to = 18,
  nowAt,
  label,
  compact = false,
}: DayCalendarProps) {
  const hourPx = compact ? COMPACT_HOUR_PX : HOUR_PX
  const hours = Array.from({ length: to - from }, (_, i) => from + i)
  const top = (start: number) => (start - from) * hourPx
  const height = (dur: number) => dur * hourPx - 4

  return (
    <div className={`${styles.cal} ${compact ? styles.compact : ''}`} role="img" aria-label={label}>
      <div className={styles.head} style={{ gridTemplateColumns: `44px repeat(${staff.length}, 1fr)` }}>
        <span />
        {staff.map((s) => (
          <span key={s.name} className={styles.staff}>
            <i className={styles[`dot${s.color}`]} />
            {s.name}
          </span>
        ))}
      </div>

      <div className={styles.body} style={{ height: hours.length * hourPx }}>
        <div className={styles.hours}>
          {hours.map((h) => (
            <span key={h} style={{ top: top(h) }}>
              {formatTime(h)}
            </span>
          ))}
        </div>

        <div className={styles.cols} style={{ gridTemplateColumns: `repeat(${staff.length}, 1fr)` }}>
          {staff.map((s, col) => (
            <div key={s.name} className={styles.col}>
              {hours.map((h) => (
                <span key={h} className={styles.line} style={{ top: top(h) }} />
              ))}

              {blocks
                .filter((b) => b.col === col)
                .map((b) => (
                  <div
                    key={b.id}
                    className={`zn-block ${styles.item} ${b.isNew ? styles.fill : ''}`}
                    style={{ top: top(b.start) + 2, height: height(b.dur) }}
                  >
                    <b className="tabular">
                      {formatTime(b.start)} – {formatTime(b.start + b.dur)}
                    </b>
                    <br />
                    {b.title} · {b.note}
                  </div>
                ))}

              {bookings
                .filter((b) => b.col === col)
                .map((b) => (
                  <div
                    key={b.id}
                    className={[
                      'zn-booking',
                      `zn-booking--s${staff[b.col].color}`,
                      b.isPending ? 'zn-booking--pending' : '',
                      b.isNew ? 'zn-drop' : '',
                      b.isHighlighted ? styles.highlight : '',
                      styles.item,
                    ].join(' ')}
                    style={{ top: top(b.start) + 2, height: height(b.dur) }}
                  >
                    <div className="zn-booking__row">
                      <span className="zn-booking__dot" style={b.isPending ? { background: 'var(--warning)' } : undefined} />
                      <span className="zn-booking__time">{formatTime(b.start)}</span>
                      <span>{b.name}</span>
                      {b.isPaid && (
                        <Check size={13} strokeWidth={2.5} className={`zn-enter ${styles.paid}`} aria-hidden />
                      )}
                    </div>
                    {b.dur >= 0.75 && <div className="zn-booking__service">{b.service}</div>}
                  </div>
                ))}

              {ghost?.col === col && (
                <div className={styles.ghost} style={{ top: top(ghost.start) + 2, height: hourPx / 2 - 4 }}>
                  + {formatTime(ghost.start)}
                </div>
              )}
            </div>
          ))}
        </div>

        {nowAt !== undefined && nowAt >= from && nowAt <= to && (
          <div className={styles.now} style={{ top: top(nowAt) }} aria-hidden>
            <i />
          </div>
        )}
      </div>
    </div>
  )
}
