'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import type { Lang } from '@/lib/marketing/lang'
import { checkCopy, fill } from '@/lib/marketing/content/check'
import { estimate, type Channel, type QuizAnswers } from '@/lib/marketing/quiz/estimate'
import { FIELD, isMultiSelect, toAnswers, visibleSteps, type Draft, type StepKey } from './quizSteps'
import { trackCheckResult, trackCheckStart, trackCheckStep } from './checkTracking'
import { QuizResult } from './QuizResult'
import { StepVisual } from './StepVisual'
import { HAS_LEVELS, optionIcon, type VisualKey } from './quizVisuals'
import styles from './Check.module.css'

type Phase = { name: 'intro' } | { name: 'question'; index: number } | { name: 'result'; answers: QuizAnswers }

interface QuizProps {
  lang: Lang
  startUrl: string
}

/** The Studio-Check: intro → one question per screen → estimate. All state stays in the browser. */
export function Quiz({ lang, startUrl }: QuizProps) {
  const copy = checkCopy(lang)
  const [phase, setPhase] = useState<Phase>({ name: 'intro' })
  const [draft, setDraft] = useState<Draft>({})

  const steps = visibleSteps(draft)

  const goTo = (index: number, nextDraft: Draft) => {
    const nextSteps = visibleSteps(nextDraft)
    if (index < nextSteps.length) {
      trackCheckStep(nextSteps[index], index)
      setPhase({ name: 'question', index })
      return
    }
    const answers = toAnswers(nextDraft)
    if (!answers) return
    trackCheckResult(estimate(answers), answers)
    setPhase({ name: 'result', answers })
  }

  const start = () => {
    trackCheckStart()
    goTo(0, draft)
  }

  const restart = () => {
    setDraft({})
    setPhase({ name: 'intro' })
  }

  const step = phase.name === 'question' ? steps[phase.index] : null
  const screenKey: VisualKey = phase.name === 'question' ? (step ?? 'intro') : phase.name

  return (
    <div className={styles.layout}>
      <StepVisual screen={screenKey} chip={copy.chips[screenKey]} />
      <div className={styles.side}>{renderScreen()}</div>
    </div>
  )

  function renderScreen() {
    if (phase.name === 'intro') {
      return (
        <section className={styles.panel} aria-labelledby="check-title">
          <span className="kicker">{copy.intro.kicker}</span>
          <h1 id="check-title" className={styles.introTitle}>
            {copy.intro.title}
          </h1>
          <p className={styles.lede}>{copy.intro.lede}</p>
          <button type="button" className="btn" onClick={start}>
            {copy.intro.start} <ArrowRight className="arrow" size={18} aria-hidden />
          </button>
          <p className={styles.promise}>{copy.intro.promise}</p>
        </section>
      )
    }

    if (phase.name === 'result') {
      return <QuizResult lang={lang} copy={copy} answers={phase.answers} startUrl={startUrl} onRestart={restart} />
    }

    if (!step) return null
    return (
      <QuestionScreen
        key={step}
        lang={lang}
        step={step}
        index={phase.index}
        total={steps.length}
        draft={draft}
        onAnswer={(nextDraft, isDone) => {
          setDraft(nextDraft)
          if (isDone) goTo(phase.index + 1, nextDraft)
        }}
        onBack={() => (phase.index === 0 ? setPhase({ name: 'intro' }) : setPhase({ name: 'question', index: phase.index - 1 }))}
      />
    )
  }
}

interface QuestionScreenProps {
  lang: Lang
  step: StepKey
  index: number
  total: number
  draft: Draft
  onAnswer: (draft: Draft, isDone: boolean) => void
  onBack: () => void
}

function QuestionScreen({ lang, step, index, total, draft, onAnswer, onBack }: QuestionScreenProps) {
  const copy = checkCopy(lang)
  const question = copy.questions[step]
  const field = FIELD[step]
  const isMulti = isMultiSelect(step)
  const selected = draft[field]
  const channels = (draft.channels ?? []) as readonly Channel[]

  const isChosen = (value: unknown) => (isMulti ? channels.includes(value as Channel) : selected === value)

  const choose = (value: unknown) => {
    if (!isMulti) {
      onAnswer({ ...draft, [field]: value }, true)
      return
    }
    const channel = value as Channel
    const next = channels.includes(channel) ? channels.filter((c) => c !== channel) : [...channels, channel]
    onAnswer({ ...draft, channels: next }, false)
  }

  const progress = Math.round(((index + 1) / total) * 100)

  return (
    <section className={styles.panel} aria-labelledby={`q-${step}`}>
      <div className={styles.progressRow}>
        <button type="button" className={styles.back} onClick={onBack}>
          <ArrowLeft size={16} aria-hidden /> {copy.back}
        </button>
        <span className={styles.stepOf}>{fill(copy.stepOf, { n: index + 1, total })}</span>
      </div>
      <div className={styles.progress} role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
        <span style={{ transform: `scaleX(${progress / 100})` }} />
      </div>

      <div className={styles.question}>
        <h1 id={`q-${step}`} className={styles.questionTitle}>
          {question.q}
        </h1>
        {question.hint && <p className={styles.hint}>{question.hint}</p>}
        <div className={styles.options} role={isMulti ? 'group' : 'radiogroup'} aria-labelledby={`q-${step}`}>
          {question.options.map((option, i) => {
            const isOn = isChosen(option.value)
            const Icon = optionIcon(step, i)
            const levelCount = question.options.filter((o) => o.value !== null).length
            const hasLevel = HAS_LEVELS[step] === true && option.value !== null
            return (
              <button
                key={String(option.value)}
                type="button"
                role={isMulti ? 'checkbox' : 'radio'}
                aria-checked={isOn}
                className={`${styles.option} ${isOn ? styles.optionOn : ''}`}
                onClick={() => choose(option.value)}
              >
                <span className={styles.optionIcon} aria-hidden>
                  <Icon size={20} />
                </span>
                <span className={styles.optionLabel}>{option.label}</span>
                {hasLevel && (
                  <span className={styles.meter} aria-hidden>
                    {Array.from({ length: levelCount }, (_, k) => (
                      <i key={k} className={k <= i ? styles.meterOn : ''} />
                    ))}
                  </span>
                )}
                <span className={styles.tick} aria-hidden>
                  {isOn && <Check size={16} />}
                </span>
              </button>
            )
          })}
        </div>
        {isMulti && (
          <button type="button" className="btn" disabled={channels.length === 0} onClick={() => onAnswer(draft, true)}>
            {copy.next} <ArrowRight className="arrow" size={18} aria-hidden />
          </button>
        )}
      </div>
    </section>
  )
}
