import type { Estimate, QuizAnswers } from '@/lib/marketing/quiz/estimate'
import { signupLink } from '@/lib/marketing/signupLink'

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

/** Sign-up link with plan and studio details pre-chosen (answers only, never personal data). */
export function signupUrl(startUrl: string, answers: QuizAnswers, plan: string, currentSearch: string): string {
  return signupLink(startUrl, currentSearch, { src: 'studio_check', plan, type: answers.studio, team: answers.team })
}
