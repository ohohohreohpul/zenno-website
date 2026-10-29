'use client'

import { useEffect, useState } from 'react'
import type { Lang } from '@/lib/marketing/lang'
import { HERO_ROTATION, TAGLINE } from '@/lib/marketing/content/tagline'
import { useReducedMotion } from '@/lib/marketing/useReducedMotion'
import styles from './RotatingHeadline.module.css'

const WORD_HOLD_MS = 2600

interface RotatingHeadlineProps {
  lang: Lang
}

/**
 * One headline line whose last word cycles through the outcomes. Every word
 * sits in the same grid cell, so the line keeps the width of the longest one
 * and never jumps. Reduced motion gets the static three-part line.
 */
export function RotatingHeadline({ lang }: RotatingHeadlineProps) {
  const { prefix, words, spoken } = HERO_ROTATION[lang]
  const isReduced = useReducedMotion()
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (isReduced) return
    const timer = window.setInterval(() => setActive((i) => (i + 1) % words.length), WORD_HOLD_MS)
    return () => window.clearInterval(timer)
  }, [isReduced, words.length])

  if (isReduced) return <>{TAGLINE[lang]}</>

  const leaving = (active - 1 + words.length) % words.length
  return (
    <>
      <span className="sr-only">{spoken}</span>
      <span aria-hidden className={styles.line}>
        {prefix && <span>{prefix} </span>}
        <span className={styles.rotator}>
          {words.map((word, i) => (
            <span
              key={word}
              className={`${styles.word} ${i === active ? styles.active : ''} ${i === leaving ? styles.leaving : ''}`}
            >
              {word}
            </span>
          ))}
        </span>
      </span>
    </>
  )
}
