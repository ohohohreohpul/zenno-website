'use client'

import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { RotateCcw } from 'lucide-react'
import type { Lang } from '@/lib/marketing/lang'
import { useReducedMotion } from '@/lib/marketing/useReducedMotion'
import { CalendarDemo, SCENE_START, STEPS as CALENDAR_STEPS } from '../calendar/CalendarDemo'
import { VouchersDemo, STEPS as VOUCHER_STEPS } from '../vouchers/VouchersDemo'
import { TalksDemo, STEPS as TALKS_STEPS } from '../talks/TalksDemo'
import { ChargeDemo, STEPS as CHARGE_STEPS } from '../charge/ChargeDemo'
import { TourEnd } from './TourEnd'
import styles from './Tour.module.css'

/** The tour plays the app's own demos faster than the sections below. */
const SPEED = 1.6
/** How long the end card holds before the tour starts over. */
const END_HOLD_MS = 4000

const CHAPTER_NAMES: Record<Lang, readonly string[]> = {
  en: ['Block time', 'Phone booking', 'Voucher sold', 'Talks like you', 'One inbox', 'Payment', 'Full day'],
  de: ['Zeit blocken', 'Telefonbuchung', 'Gutschein verkauft', 'Spricht wie Sie', 'Ein Posteingang', 'Bezahlen', 'Voller Tag'],
  th: ['บล็อกเวลา', 'จองทางโทรศัพท์', 'ขายบัตรของขวัญ', 'พูดเหมือนคุณ', 'กล่องข้อความเดียว', 'ชำระเงิน', 'คิวเต็มทั้งวัน'],
}

const REPLAY: Record<Lang, string> = { en: 'Play again', de: 'Nochmal abspielen', th: 'เล่นอีกครั้ง' }
const CHAPTERS_LABEL: Record<Lang, string> = { en: 'Tour steps', de: 'Schritte der Tour', th: 'ขั้นตอนของทัวร์' }

const sum = (steps: readonly number[]) => steps.reduce((a, b) => a + b, 0)
const calendarShot = (i: 0 | 1 | 2) =>
  sum(CALENDAR_STEPS.slice(SCENE_START[i], i === 2 ? undefined : SCENE_START[i + 1]))

/** Length of each chapter in ms at tour speed, for the progress bars. */
const CHAPTER_MS = [
  calendarShot(0),
  calendarShot(1),
  sum(VOUCHER_STEPS),
  sum(TALKS_STEPS),
  sum(CHARGE_STEPS),
  calendarShot(2),
].map((ms) => ms / SPEED)

interface TourPlayerProps {
  lang: Lang
}

export function TourPlayer({ lang }: TourPlayerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [chapter, setChapter] = useState(0)
  const [round, setRound] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const isReduced = useReducedMotion()
  const names = CHAPTER_NAMES[lang]
  const lastChapter = names.length - 1

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.35 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const next = useCallback(() => setChapter((c) => Math.min(c + 1, lastChapter)), [lastChapter])

  const jumpTo = (i: number) => {
    setChapter(i)
    setRound((r) => r + 1)
  }

  // The end card holds, then the tour starts over.
  useEffect(() => {
    if (chapter !== lastChapter || !isVisible || isReduced) return
    const timer = setTimeout(() => jumpTo(0), END_HOLD_MS)
    return () => clearTimeout(timer)
  }, [chapter, lastChapter, isVisible, isReduced])

  const playback = { speed: SPEED, loop: false, onEnd: next }
  const stages: ReactNode[] = [
    <CalendarDemo key="block" lang={lang} only={0} compact {...playback} />,
    <CalendarDemo key="phone" lang={lang} only={1} compact {...playback} />,
    <VouchersDemo key="voucher" lang={lang} showMoney={false} {...playback} />,
    <TalksDemo key="talks" lang={lang} {...playback} />,
    <ChargeDemo key="inbox" lang={lang} {...playback} />,
    <CalendarDemo key="pay" lang={lang} only={2} compact {...playback} />,
    <TourEnd key="end" lang={lang} />,
  ]

  return (
    <div ref={ref} className={styles.player} data-playing={isVisible && !isReduced}>
      <div className={styles.stage}>
        <div key={`${chapter}-${round}`} className={`zn-enter ${styles.scene}`}>
          {stages[chapter]}
        </div>
        {chapter === lastChapter && (
          <button type="button" className={`btn ghost ${styles.replay}`} onClick={() => jumpTo(0)}>
            <RotateCcw size={15} aria-hidden /> {REPLAY[lang]}
          </button>
        )}
      </div>

      <ol className={styles.chapters} aria-label={CHAPTERS_LABEL[lang]}>
        {names.map((name, i) => {
          const state = i < chapter ? 'done' : i === chapter ? 'active' : 'todo'
          return (
            <li key={name}>
              <button
                type="button"
                className={styles.chapter}
                data-state={state}
                aria-current={i === chapter ? 'step' : undefined}
                onClick={() => jumpTo(i)}
              >
                <span className={styles.bar}>
                  <i
                    key={`${i}-${chapter}-${round}`}
                    style={{ animationDuration: `${CHAPTER_MS[i] ?? END_HOLD_MS}ms` }}
                  />
                </span>
                <span className={styles.chapterName}>
                  <b className="tabular">{i + 1}</b> {name}
                </span>
              </button>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
