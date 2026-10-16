'use client'

import { useEffect, type ReactNode } from 'react'
import { ensureGsap, ScrollTrigger } from '@/lib/marketing/gsap'
import { useReducedMotion } from '@/lib/marketing/useReducedMotion'
import { RevealController } from './primitives/Reveal'

interface MarketingShellProps {
  children: ReactNode
}

/**
 * Root client wrapper for the marketing experience:
 * - applies the `.zx` style scope + reduced-motion flag
 * - boots GSAP + a global reveal controller
 * - keeps ScrollTrigger in sync on resize
 */
export function MarketingShell({ children }: MarketingShellProps) {
  const reduced = useReducedMotion()

  useEffect(() => {
    ensureGsap()
    const onResize = () => ScrollTrigger.refresh()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <div className={`zx ${reduced ? 'reduce' : ''}`}>
      <div className="grain" aria-hidden />
      <RevealController />
      {children}
    </div>
  )
}
