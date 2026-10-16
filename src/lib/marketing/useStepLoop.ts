'use client'

import { useCallback, useEffect, useRef, useState, type RefObject } from 'react'
import { useReducedMotion } from './useReducedMotion'

/** Fraction of the demo that must be on screen before it starts playing. */
const IN_VIEW_THRESHOLD = 0.35

export interface StepLoopOptions {
  /** Start again from the first step after the last (default true). */
  loop?: boolean
  /** Playback speed: 2 plays every step in half the time (default 1). Durations must be a stable (module-level) array. */
  speed?: number
  /** Play only steps `from`…`to` (inclusive) of the durations list. */
  from?: number
  to?: number
  /** Called once after the last step has been held, when not looping. */
  onEnd?: () => void
}

/** Props every demo accepts so the tour can play it as one chapter. */
export interface DemoPlayback {
  speed?: number
  loop?: boolean
  onEnd?: () => void
}

interface StepLoop {
  step: number
  /**
   * Jump to a step. With `hold`, autoplay stops there (the visitor picked
   * something and wants to look at it); without, the demo plays on from it.
   */
  goTo: (step: number, hold?: boolean) => void
  /** True once the visitor has clicked: autoplay stays off from then on. */
  isManual: boolean
}

/**
 * Drives a UI demo as a list of steps, each held for `durations[i]` ms.
 * Plays only while the demo is on screen, pauses when it scrolls away, and
 * with reduced motion shows the last step (the same end state) without moving.
 */
export function useStepLoop(
  ref: RefObject<HTMLElement | null>,
  durations: readonly number[],
  { loop = true, speed = 1, from = 0, to = durations.length - 1, onEnd }: StepLoopOptions = {},
): StepLoop {
  const [step, setStep] = useState(from)
  const [isVisible, setIsVisible] = useState(false)
  const [isManual, setIsManual] = useState(false)
  const isReduced = useReducedMotion()
  const onEndRef = useRef(onEnd)
  const hasEnded = useRef(false)

  useEffect(() => {
    onEndRef.current = onEnd
  }, [onEnd])

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true)
      return
    }
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), {
      threshold: IN_VIEW_THRESHOLD,
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref])

  useEffect(() => {
    // Reduced motion: the end state stays put; the visitor moves on by clicking.
    if (!isVisible || isManual || isReduced) return
    const isLast = step >= to
    const wait = durations[step] / speed
    const timer = setTimeout(() => {
      if (!isLast) return setStep((s) => s + 1)
      if (loop) return setStep(from)
      if (hasEnded.current) return
      hasEnded.current = true
      onEndRef.current?.()
    }, wait)
    return () => clearTimeout(timer)
  }, [isVisible, isManual, isReduced, loop, step, from, to, durations, speed])

  const goTo = useCallback(
    (next: number, hold = false) => {
      // Inside the tour (onEnd set) a click never freezes the chapter.
      if (hold && !onEndRef.current) setIsManual(true)
      setStep(Math.max(from, Math.min(to, next)))
    },
    [from, to],
  )

  // Reduced motion shows the end state, unless the visitor picked a step.
  return { step: isReduced && !isManual ? to : step, goTo, isManual }
}
