'use client'

import { useRef } from 'react'
import { Check, Search } from 'lucide-react'
import type { Lang } from '@/lib/marketing/lang'
import { useStepLoop, type DemoPlayback } from '@/lib/marketing/useStepLoop'
import { APP_WORDS, SERVICES, STAFF, navLabels } from '@/lib/marketing/content/home/demo'
import { AppWindow } from '../../app-ui/AppWindow'
import { DayCalendar, type CalBlock, type CalBooking, type CalGhost } from '../../app-ui/DayCalendar'
import { CALENDAR_DEMO, type CalendarDemoCopy } from './calendarCopy'
import styles from './Calendar.module.css'

/**
 * Three shots on one calendar, played in order:
 * block time (steps 0–3), phone booking (4–8), payment (9–12).
 */
export const STEPS = [900, 900, 1700, 2000, 1100, 1100, 1100, 600, 2000, 1500, 1300, 600, 2400] as const
export const SCENE_START = [0, 4, 9] as const
const BLOCK_GREEN = '#22c55e'
const BLOCK_COLOURS = ['#22c55e', '#3b82f6', '#06b6d4', '#a855f7', '#ec4899', '#ef4444', '#f97316', '#eab308']

function sceneOf(step: number): number {
  if (step >= SCENE_START[2]) return 2
  if (step >= SCENE_START[1]) return 1
  return 0
}

function bookingsAt(lang: Lang, step: number): CalBooking[] {
  const base: CalBooking[] = [
    { id: 'n1', col: 0, start: 10, dur: 1, name: 'Lea S.', service: SERVICES.thai[lang] },
    { id: 'n2', col: 0, start: 12, dur: 0.5, name: 'Tom B.', service: SERVICES.back[lang] },
    { id: 'n3', col: 0, start: 13.5, dur: 1, name: 'Kai W.', service: SERVICES.thai[lang] },
    {
      id: 'p1',
      col: 1,
      start: 10,
      dur: 1.5,
      name: 'Lena M.',
      service: SERVICES.aroma[lang],
      isHighlighted: step >= 9 && step < 12,
      isPaid: step >= 12,
    },
    { id: 'p2', col: 1, start: 12.5, dur: 1, name: 'Sara P.', service: SERVICES.thai[lang] },
    { id: 'a1', col: 2, start: 11, dur: 1, name: 'Julia K.', service: SERVICES.facial[lang] },
    { id: 'a2', col: 2, start: 13, dur: 0.75, name: 'Max R.', service: SERVICES.foot[lang], isPending: true },
  ]
  if (step < 8) return base
  const phone: CalBooking = {
    id: 'lee',
    col: 2,
    start: 15.5,
    dur: 1,
    name: CALENDAR_DEMO[lang].phoneResult,
    service: SERVICES.thai[lang],
    isNew: step === 8,
  }
  return [...base, phone]
}

function blocksAt(t: CalendarDemoCopy, step: number): CalBlock[] {
  if (step < 3) return []
  return [{ id: 'blk', col: 1, start: 14.5, dur: 1, title: t.blockBlocked, note: t.blockNote, isNew: step === 3 }]
}

function ghostAt(step: number): CalGhost | null {
  if (step === 0) return { col: 1, start: 14 }
  if (step === 1 || step === 2) return { col: 1, start: 14.5 }
  return null
}

interface CalendarDemoProps extends DemoPlayback {
  lang: Lang
  /** Play just one shot: 0 block time, 1 phone booking, 2 payment. */
  only?: 0 | 1 | 2
  /** Shorter hour rows, for the tour's stage. */
  compact?: boolean
}

const SCENE_END = [SCENE_START[1] - 1, SCENE_START[2] - 1, STEPS.length - 1] as const

export function CalendarDemo({ lang, only, compact = false, speed, loop, onEnd }: CalendarDemoProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { step, goTo } = useStepLoop(ref, STEPS, {
    speed,
    loop,
    onEnd,
    from: only === undefined ? 0 : SCENE_START[only],
    to: only === undefined ? STEPS.length - 1 : SCENE_END[only],
  })
  const t = CALENDAR_DEMO[lang]
  const scene = sceneOf(step)

  return (
    <div ref={ref}>
      <AppWindow title={APP_WORDS[lang].saturday} nav="calendar" navLabels={navLabels(lang)}>
        {only === undefined && (
        <div className="zn-tabs" role="tablist" aria-label={APP_WORDS[lang].calendar}>
          {t.tabs.map((label, i) => (
            <button
              key={label}
              type="button"
              role="tab"
              className="zn-tab"
              aria-selected={scene === i}
              onClick={() => goTo(SCENE_START[i])}
            >
              {label}
            </button>
          ))}
        </div>
        )}
        <div className={styles.calWrap}>
          <DayCalendar
            staff={STAFF}
            bookings={bookingsAt(lang, step)}
            blocks={blocksAt(t, step)}
            ghost={ghostAt(step)}
            from={10}
            to={17}
            nowAt={11.75}
            label={t.calLabel}
            compact={compact}
          />
          {step === 2 && <BlockPopover t={t} />}
          {step >= 4 && step <= 7 && <PhonePopover t={t} step={step} />}
          {step >= 9 && step <= 11 && <PayPopover t={t} step={step} />}
          {step === 12 && (
            <span className={`zn-chip zn-chip--booked zn-enter ${styles.toast}`}>
              <Check size={14} strokeWidth={2.5} aria-hidden /> {t.paid}
            </span>
          )}
        </div>
      </AppWindow>
    </div>
  )
}

function BlockPopover({ t }: { t: CalendarDemoCopy }) {
  return (
    <div className={`zn-modal zn-enter ${styles.pop}`}>
      <span className="zn-section">{t.blockTitle}</span>
      <span className={`tabular ${styles.row}`}>Ploy · 14:30 – 15:30</span>
      <span className={styles.field}>{t.blockNote}</span>
      <span className="zn-caption">{t.blockColour}</span>
      <span className={styles.swatches}>
        {BLOCK_COLOURS.map((c) => (
          <i key={c} style={{ background: c }} className={c === BLOCK_GREEN ? styles.swatchOn : ''} />
        ))}
      </span>
      <span className="zn-btn zn-btn--primary zn-btn--sm" data-pressed="true">
        {t.blockButton}
      </span>
    </div>
  )
}

function PhonePopover({ t, step }: { t: CalendarDemoCopy; step: number }) {
  const typed = step === 4 ? '0151 2' : '0151 2384'
  return (
    <div className={`zn-modal zn-enter ${styles.pop}`}>
      <span className="zn-section">{t.phoneTitle}</span>
      <span className={styles.field}>
        <Search size={14} aria-hidden />
        <span className="tabular">{typed}</span>
        <span className={styles.caret} />
      </span>
      {step >= 5 && (
        <span className={`zn-enter ${styles.result}`}>
          <span className="zn-avatar">L</span>
          <span>
            <b>{t.phoneResult}</b>
            <span className="zn-caption tabular">0151 2384 7710</span>
          </span>
        </span>
      )}
      {step >= 5 && (
        <>
          <span className="zn-caption">{t.phoneTimes}</span>
          <span className={styles.times}>
            {['15:00', '15:30', '16:00'].map((time) => (
              <span key={time} className="zn-chip tabular" aria-pressed={step >= 6 && time === '15:30'}>
                {time}
              </span>
            ))}
          </span>
        </>
      )}
      {step >= 6 && (
        <span className="zn-btn zn-btn--primary zn-btn--sm" data-pressed={step === 7}>
          {t.phoneAdd}
        </span>
      )}
    </div>
  )
}

function PayPopover({ t, step }: { t: CalendarDemoCopy; step: number }) {
  return (
    <div className={`zn-modal zn-enter ${styles.pop}`}>
      <span className="zn-section">{t.payTitle}</span>
      {step === 9 ? (
        <>
          <span className="zn-caption">{t.payCame}</span>
          <span className={styles.pair}>
            <span className="zn-btn zn-btn--primary zn-btn--sm">{t.payYes}</span>
            <span className="zn-btn zn-btn--secondary zn-btn--sm">{t.payNoShow}</span>
          </span>
        </>
      ) : (
        <>
          <span className="zn-caption">{t.payHow}</span>
          <span className="zn-choice">
            <button type="button" tabIndex={-1} aria-pressed={step === 11}>
              {t.payCard}
            </button>
            <button type="button" tabIndex={-1} aria-pressed={false}>
              {t.payCash}
            </button>
            <button type="button" tabIndex={-1} aria-pressed={false}>
              {t.payVoucher}
            </button>
          </span>
        </>
      )}
    </div>
  )
}
