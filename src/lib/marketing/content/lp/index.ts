import type { Lang } from '@/lib/marketing/lang'
import { lpDe } from './de'
import { lpEn } from './en'
import { lpTh } from './th'
import type { LpCopy } from './types'

const COPY: Record<Lang, LpCopy> = { de: lpDe, en: lpEn, th: lpTh }

export function lpCopy(lang: Lang): LpCopy {
  return COPY[lang]
}

export type { LpCopy } from './types'
