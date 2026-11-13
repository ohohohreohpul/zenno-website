'use client'

import { useMemo } from 'react'
import { ArrowRight, RotateCcw } from 'lucide-react'
import type { Lang } from '@/lib/marketing/lang'
import { fill, type CheckCopy } from '@/lib/marketing/content/check'
import { estimate, type QuizAnswers } from '@/lib/marketing/quiz/estimate'
import { signupUrl, trackCheckSignupClick } from './checkTracking'
import styles from './Check.module.css'

const LOCALE: Record<Lang, string> = { de: 'de-DE', en: 'en-IE', th: 'th-TH' }
const ZENNO_MONTHLY_EUR = 49
/** Below this the "pays for itself N×" line would sound thin, so it's left out. */
const MIN_PAYBACK_TIMES = 2

interface QuizResultProps {
  lang: Lang
  copy: CheckCopy
  answers: QuizAnswers
  startUrl: string
  onRestart: () => void
}

export function QuizResult({ lang, copy, answers, startUrl, onRestart }: QuizResultProps) {
  const result = useMemo(() => estimate(answers), [answers])
  const euro = new Intl.NumberFormat(LOCALE[lang], { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })
  const money = (n: number) => euro.format(n)
  const span = (low: number, high: number) => (low === high ? money(low) : `${money(low)}–${money(high)}`)

  const r = copy.result
  const plan = r.plans[result.plan]
  const hasMoney = result.total.high > 0
  const payback = Math.floor((result.total.low + result.total.high) / 2 / ZENNO_MONTHLY_EUR)
  const href = signupUrl(startUrl, answers, result.plan, window.location.search)

  return (
    <section className={styles.panel} aria-labelledby="check-result">
      <span className="kicker">{r.kicker}</span>
      <h1 id="check-result" className={styles.resultTotal}>
        {hasMoney ? fill(r.total, { low: money(result.total.low), high: money(result.total.high) }) : r.nothing}
      </h1>
      {result.hoursSaved.high > 0 && (
        <p className={styles.resultHours}>{fill(r.hours, { low: result.hoursSaved.low, high: result.hoursSaved.high })}</p>
      )}

      {result.lines.length > 0 && (
        <dl className={styles.lines}>
          {result.lines.map((line) => (
            <div key={line.key} className={styles.line}>
              <dt>{r.lines[line.key].label}</dt>
              <dd>{span(line.range.low, line.range.high)}</dd>
            </div>
          ))}
        </dl>
      )}
      {(result.isGiftSeason && result.lines.some((l) => l.key === 'giftCards')) && <p className={styles.note}>{r.seasonNote}</p>}
      {result.isCapped && <p className={styles.note}>{r.cappedNote}</p>}

      <div className={styles.planCard}>
        <span className={styles.planLabel}>{r.costLabel}</span>
        <strong className={styles.planName}>{plan.name}</strong>
        <p className={styles.planLine}>{plan.line}</p>
        {result.plan === 'zenno' && payback >= MIN_PAYBACK_TIMES && (
          <p className={styles.payback}>{fill(r.payback, { times: payback })}</p>
        )}
        <a
          className="btn"
          href={href}
          data-no-lead
          onClick={() => trackCheckSignupClick(result.plan)}
        >
          {plan.cta} <ArrowRight className="arrow" size={18} aria-hidden />
        </a>
      </div>

      <details className={styles.how}>
        <summary>{r.howTitle}</summary>
        <ul>
          {result.lines.map((line) => (
            <li key={line.key}>
              <strong>{r.lines[line.key].label}:</strong> {r.lines[line.key].how}
            </li>
          ))}
        </ul>
        <p>{r.howIntro}</p>
        <ul className={styles.sources}>
          {r.sources.map((s) => (
            <li key={s.url}>
              <a href={s.url} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </details>

      <p className={styles.disclaimer}>{r.disclaimer}</p>
      <button type="button" className={styles.back} onClick={onRestart}>
        <RotateCcw size={15} aria-hidden /> {r.restart}
      </button>
    </section>
  )
}
