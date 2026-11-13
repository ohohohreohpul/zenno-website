import type { Estimate, QuizAnswers } from '@/lib/marketing/quiz/estimate'

/** Open Analytics' global (cookieless, always on); the Meta pixel's `fbq` only exists after consent. */
declare global {
  interface Window {
    oa?: { track?: (name: string, props?: Record<string, string | number | boolean>) => void }
  }
}

type Props = Record<string, string | number | boolean>

function analytics(name: string, props: Props = {}): void {
  try {
    window.oa?.track?.(name, props)
  } catch {
    // Analytics must never break the quiz.
  }
}

export function trackCheckStart(): void {
  analytics('check_start')
  window.fbq?.('track', 'ViewContent', { content_name: 'studio_check' })
}

export function trackCheckStep(step: string, index: number): void {
  analytics('check_step', { step, index })
}

/** The result screen is the campaign's optimisation event: a Lead worth the estimate's midpoint. */
export function trackCheckResult(result: Estimate, answers: QuizAnswers): void {
  const value = Math.round((result.total.low + result.total.high) / 2)
  analytics('check_result', { value, plan: result.plan, studio: answers.studio, team: answers.team })
  window.fbq?.('track', 'Lead', { content_name: 'studio_check', value, currency: 'EUR' })
}

export function trackCheckSignupClick(plan: string): void {
  analytics('check_signup_click', { plan })
  window.fbq?.('trackCustom', 'CheckToSignup', { plan })
}

const FORWARDED_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'fbclid']

/**
 * Sign-up link into the app with the plan and studio details pre-chosen, plus the ad's
 * UTM tags carried over so the account is attributed to the ad that brought it.
 * Only answers go into the URL, never personal data.
 */
export function signupUrl(startUrl: string, answers: QuizAnswers, plan: string, currentSearch: string): string {
  const url = new URL('signup', startUrl)
  const incoming = new URLSearchParams(currentSearch)
  for (const key of FORWARDED_PARAMS) {
    const value = incoming.get(key)
    if (value) url.searchParams.set(key, value)
  }
  if (!url.searchParams.has('utm_source')) url.searchParams.set('utm_source', 'zennohq')
  url.searchParams.set('src', 'studio_check')
  url.searchParams.set('plan', plan)
  url.searchParams.set('type', answers.studio)
  url.searchParams.set('team', answers.team)
  return url.toString()
}
