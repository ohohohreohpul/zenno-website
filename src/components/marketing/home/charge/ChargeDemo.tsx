'use client'

import { useRef } from 'react'
import { Hand, Send } from 'lucide-react'
import type { Lang } from '@/lib/marketing/lang'
import { useStepLoop, type DemoPlayback } from '@/lib/marketing/useStepLoop'
import { APP_WORDS, navLabels } from '@/lib/marketing/content/home/demo'
import { AppWindow } from '../../app-ui/AppWindow'
import { ChannelBadge, type Channel } from '../../app-ui/ChannelBadge'
import { CHARGE_DEMO } from './chargeCopy'
import styles from './Charge.module.css'

/** All chats, filter "Needs you", open the handed-over chat, owner types, sent. */
export const STEPS = [1500, 1300, 2000, 1900, 2800] as const
const CHANNELS: readonly Channel[] = ['whatsapp', 'whatsapp', 'email']

interface ChargeDemoProps extends DemoPlayback {
  lang: Lang
}

export function ChargeDemo({ lang, speed, loop, onEnd }: ChargeDemoProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { step } = useStepLoop(ref, STEPS, { speed, loop, onEnd })
  const t = CHARGE_DEMO[lang]
  const isFiltered = step >= 1
  const rows = isFiltered ? t.rows.slice(0, 1) : t.rows

  return (
    <div ref={ref} className={styles.stack} role="img" aria-label={t.label}>
      <AppWindow title={APP_WORDS[lang].inbox} nav="inbox" navLabels={navLabels(lang)}>
        <div className={styles.panes}>
          <div className={styles.list}>
            <div className={styles.filters}>
              <span className="zn-chip" aria-pressed={!isFiltered}>
                {t.all}
              </span>
              <span className="zn-chip" aria-pressed={isFiltered}>
                {t.needsYou} <span className="zn-badge">1</span>
              </span>
            </div>
            {rows.map((r, i) => (
              <div key={r.name} className="zn-convo" aria-current={step >= 2 && i === 0}>
                <span className="zn-avatar">
                  {r.name.replace(/^(Mrs\.|Frau|คุณ)\s?/, '').charAt(0)}
                  <ChannelBadge channel={CHANNELS[i]} />
                </span>
                <span className={styles.rowText}>
                  <span className={styles.rowTop}>
                    <b>{r.name}</b>
                    {i === 0 && <span className="zn-badge">{t.needsYou}</span>}
                  </span>
                  <span className={styles.preview}>{r.preview}</span>
                </span>
              </div>
            ))}
          </div>

          <div className={styles.thread}>
            {step >= 2 ? (
              <div className={`zn-chat ${styles.chat}`}>
                <div className="zn-bubble zn-bubble--customer zn-enter">{t.question}</div>
                <span className={`zn-pill zn-pill--warn zn-enter ${styles.note}`}>
                  <Hand size={13} aria-hidden /> {t.handover}
                </span>
                {step === 4 && (
                  <div className={`zn-bubble zn-bubble--shop zn-enter ${styles.ownerReply}`}>
                    <span className="zn-eyebrow">{t.you}</span>
                    {t.draft}
                  </div>
                )}
              </div>
            ) : (
              <div className={styles.empty} aria-hidden />
            )}
            {step >= 3 && step < 4 && (
              <div className={`zn-enter ${styles.composer}`}>
                <span className={styles.typing}>{t.draft}</span>
                <span className="zn-btn zn-btn--primary zn-btn--sm">
                  <Send size={14} aria-hidden /> {t.send}
                </span>
              </div>
            )}
          </div>
        </div>
      </AppWindow>

      <div className={`zn zn-surface zn-surface--solid ${styles.draftRow}`}>
        <span>
          <b>{t.draftMode}</b>
          <span className="zn-caption">{t.draftModeHint}</span>
        </span>
        <span className="zn-switch" role="switch" aria-checked="true" aria-hidden="true" />
      </div>
    </div>
  )
}
