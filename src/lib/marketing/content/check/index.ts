import type { Lang } from '@/lib/marketing/lang'
import { checkDe } from './de'
import { checkEn } from './en'
import { checkTh } from './th'
import type { CheckCopy } from './types'

const COPY: Record<Lang, CheckCopy> = { de: checkDe, en: checkEn, th: checkTh }

export function checkCopy(lang: Lang): CheckCopy {
  return COPY[lang]
}

export { fill, type CheckCopy } from './types'
