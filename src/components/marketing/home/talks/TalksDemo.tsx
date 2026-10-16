'use client'

import { useRef } from 'react'
import { Check, Globe } from 'lucide-react'
import type { Lang } from '@/lib/marketing/lang'
import { useStepLoop, type DemoPlayback } from '@/lib/marketing/useStepLoop'
import { APP_WORDS, navLabels } from '@/lib/marketing/content/home/demo'
import { AppWindow } from '../../app-ui/AppWindow'
import { TALKS_DEMO } from './talksCopy'
import styles from './Talks.module.css'

/**
 * 0 Professional · 1 "Learn from my website" pressed · 2 Warm, taken from the
 * website · 3 Short. Picking a tone holds it.
 */
export const STEPS = [3000, 1300, 4200, 3000] as const
const TONE_AT_STEP = [0, 0, 1, 2] as const
const STEP_FOR_TONE = [0, 2, 3] as const

interface TalksDemoProps extends DemoPlayback {
  lang: Lang
}

export function TalksDemo({ lang, speed, loop, onEnd }: TalksDemoProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { step, goTo, isManual } = useStepLoop(ref, STEPS, { speed, loop, onEnd })
  const t = TALKS_DEMO[lang]
  const tone = TONE_AT_STEP[step]
  const isReading = step === 1 && !isManual
  const isLearned = step === 2 && !isManual

  return (
    <div ref={ref}>
      <AppWindow
        title={t.page}
        nav="settings"
        navLabels={navLabels(lang)}
        actions={
          <span className="zn-pill zn-pill--on">
            <span className="zn-dot" />
            <span className={styles.pillText}>{APP_WORDS[lang].receptionistOn}</span>
          </span>
        }
      >
        <div className="zn-tabs" aria-hidden>
          {t.tabs.map((label, i) => (
            <span key={label} className="zn-tab" data-selected={i === 0}>
              {label}
            </span>
          ))}
        </div>

        <div className={styles.grid}>
          <div className={`zn-surface zn-surface--solid ${styles.card}`}>
            <span className="zn-eyebrow">{t.personality}</span>
            <div className="zn-choice" role="group" aria-label={t.personality}>
              {t.tones.map((label, i) => (
                <button key={label} type="button" aria-pressed={tone === i} onClick={() => goTo(STEP_FOR_TONE[i], true)}>
                  {label}
                </button>
              ))}
            </div>

            <span className="zn-eyebrow">{t.briefLabel}</span>
            <p className={styles.brief}>{t.brief}</p>

            <span className={`zn-btn zn-btn--secondary zn-btn--sm ${styles.learn}`} data-pressed={isReading}>
              <Globe size={15} aria-hidden /> {isReading ? t.reading : t.learn}
            </span>
            {isLearned && (
              <span className={`zn-enter ${styles.learned}`}>
                <Check size={14} strokeWidth={2.5} aria-hidden /> {t.learned}
              </span>
            )}
          </div>

          <div className={styles.sample} role="img" aria-label={t.label}>
            <span className="zn-eyebrow">{t.sample}</span>
            <div className={`zn-chat ${styles.chat}`}>
              <div className="zn-bubble zn-bubble--customer">{t.guest}</div>
              {isReading ? (
                <div className="zn-bubble zn-bubble--shop zn-typing">
                  <span />
                  <span />
                  <span />
                </div>
              ) : (
                <div key={tone} className="zn-bubble zn-bubble--shop zn-enter">
                  {t.replies[tone]}
                </div>
              )}
            </div>
          </div>
        </div>
      </AppWindow>
    </div>
  )
}
