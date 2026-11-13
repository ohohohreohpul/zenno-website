'use client'

import type { MouseEvent, ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { START_URL } from '@/lib/marketing/config'
import { signupLink } from '@/lib/marketing/signupLink'

interface SignupCtaProps {
  children: ReactNode
  /** Where on the page the click came from, for attribution in the app. */
  placement: string
  className?: string
}

/**
 * "Start free" into the app. The ad's UTM tags are added at click time (the page is
 * static, so they aren't known at build). The site-wide tracker reports it as a Lead.
 */
export function SignupCta({ children, placement, className = 'btn' }: SignupCtaProps) {
  const extra = { src: 'lp_studio', placement }
  const withAdTags = (event: MouseEvent<HTMLAnchorElement>) => {
    event.currentTarget.href = signupLink(START_URL, window.location.search, extra)
  }
  return (
    <a className={className} href={signupLink(START_URL, '', extra)} onClick={withAdTags} onAuxClick={withAdTags}>
      {children} <ArrowRight className="arrow" size={18} aria-hidden />
    </a>
  )
}
