'use client'

import { useEffect, useState } from 'react'
import type { ProjectionPoint } from '@/lib/marketing/quiz/estimate'
import { useReducedMotion } from '@/lib/marketing/useReducedMotion'
import styles from './GrowthChart.module.css'

const W = 600
const H = 260
const PAD = { top: 18, right: 18, bottom: 30, left: 58 }
const GRID_LINES = 3
const COUNT_UP_MS = 1600
/** The count-up starts once the band has mostly drawn in. */
const COUNT_UP_DELAY_MS = 500

interface GrowthChartProps {
  points: readonly ProjectionPoint[]
  locale: string
  title: string
  /** "Nach 12 Monaten: ca. {range}" with the range already filled by the caller via `formatEnd`. */
  formatEnd: (low: string, high: string) => string
  note: string
  money: (n: number) => string
}

function useCountUp(target: number, isEnabled: boolean): number {
  const [value, setValue] = useState(isEnabled ? 0 : target)
  useEffect(() => {
    if (!isEnabled) return
    let frame = 0
    const startAt = performance.now() + COUNT_UP_DELAY_MS
    const tick = (now: number) => {
      const t = Math.min(1, Math.max(0, (now - startAt) / COUNT_UP_MS))
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(target * eased)
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, isEnabled])
  return isEnabled ? value : target
}

/** Cumulative extra revenue over the next 12 months as a low–high band with a midline. */
export function GrowthChart({ points, locale, title, formatEnd, note, money }: GrowthChartProps) {
  const isReduced = useReducedMotion()
  const last = points[points.length - 1]
  const maxY = Math.max(1, last.cumulative.high) * 1.08
  const innerW = W - PAD.left - PAD.right
  const innerH = H - PAD.top - PAD.bottom
  const x = (i: number) => PAD.left + (i / (points.length - 1)) * innerW
  const y = (v: number) => PAD.top + innerH - (v / maxY) * innerH

  const upper = points.map((p, i) => `${x(i)},${y(p.cumulative.high)}`)
  const lower = points.map((p, i) => `${x(i)},${y(p.cumulative.low)}`).reverse()
  const band = `M${upper.join('L')}L${lower.join('L')}Z`
  const mid = `M${points.map((p, i) => `${x(i)},${y((p.cumulative.low + p.cumulative.high) / 2)}`).join('L')}`
  const monthFmt = new Intl.DateTimeFormat(locale, { month: 'short' })
  const grid = Array.from({ length: GRID_LINES }, (_, k) => (maxY / GRID_LINES) * (k + 1))

  const low = useCountUp(last.cumulative.low, !isReduced)
  const high = useCountUp(last.cumulative.high, !isReduced)

  return (
    <figure className={`${styles.chart} ${isReduced ? styles.still : ''}`}>
      <figcaption className={styles.head}>
        <span className={styles.title}>{title}</span>
        <strong className={styles.end}>{formatEnd(money(Math.round(low / 10) * 10), money(Math.round(high / 10) * 10))}</strong>
      </figcaption>
      <svg viewBox={`0 0 ${W} ${H}`} className={styles.svg} role="img" aria-label={formatEnd(money(last.cumulative.low), money(last.cumulative.high))}>
        {grid.map((v) => (
          <g key={v}>
            <line x1={PAD.left} x2={W - PAD.right} y1={y(v)} y2={y(v)} className={styles.grid} />
            <text x={PAD.left - 10} y={y(v) + 4} className={styles.axis} textAnchor="end">
              {money(Math.round(v / 100) * 100)}
            </text>
          </g>
        ))}
        <line x1={PAD.left} x2={W - PAD.right} y1={y(0)} y2={y(0)} className={styles.base} />
        <g className={styles.reveal}>
          <path d={band} className={styles.band} />
          <path d={mid} className={styles.mid} pathLength={1} />
          {points.map((p, i) => (
            <circle
              key={p.month.toISOString()}
              cx={x(i)}
              cy={y((p.cumulative.low + p.cumulative.high) / 2)}
              r={i === points.length - 1 ? 6 : 3}
              className={i === points.length - 1 ? styles.endDot : styles.dot}
              style={{ animationDelay: `${0.15 + i * 0.09}s` }}
            />
          ))}
        </g>
        {points.map((p, i) =>
          i % 2 === 0 || i === points.length - 1 ? (
            <text key={p.month.toISOString()} x={x(i)} y={H - 8} className={styles.axis} textAnchor="middle">
              {monthFmt.format(p.month)}
            </text>
          ) : null,
        )}
      </svg>
      <p className={styles.note}>{note}</p>
    </figure>
  )
}
