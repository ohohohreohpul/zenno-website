'use client'

import { useRef } from 'react'
import { BookOpen, Check, FileText, FileDown, UserX, type LucideIcon } from 'lucide-react'
import type { Lang } from '@/lib/marketing/lang'
import { useStepLoop, type DemoPlayback } from '@/lib/marketing/useStepLoop'
import { APP_WORDS, SHOP_NAME, navLabels } from '@/lib/marketing/content/home/demo'
import { AppWindow } from '../../app-ui/AppWindow'
import { QrCode } from '../../app-ui/QrCode'
import { VOUCHERS_DEMO, type VouchersDemoCopy } from './vouchersCopy'
import styles from './Vouchers.module.css'

/** Popup, 50 €, cash, sell, issued with QR, redeemed by scan. */
export const STEPS = [900, 900, 900, 500, 2800, 3000] as const
const AMOUNTS = ['25 €', '50 €', '100 €'] as const
const CODE = 'ZN-7Q4K'
const TILE_ICONS: readonly LucideIcon[] = [UserX, BookOpen, FileDown, FileText]

interface VouchersDemoProps extends DemoPlayback {
  lang: Lang
  /** Shows the four money tiles under the voucher screen. */
  showMoney?: boolean
}

export function VouchersDemo({ lang, showMoney = true, speed, loop, onEnd }: VouchersDemoProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { step } = useStepLoop(ref, STEPS, { speed, loop, onEnd })
  const t = VOUCHERS_DEMO[lang]

  return (
    <div ref={ref} className={styles.stack}>
      <AppWindow title={APP_WORDS[lang].vouchers} nav="vouchers" navLabels={navLabels(lang)}>
        <div className={styles.stage} role="img" aria-label={t.label}>
          {step <= 3 && <SellPopup t={t} step={step} />}
          {step >= 4 && <IssuedVoucher t={t} isRedeemed={step === 5} />}
        </div>
      </AppWindow>

      {showMoney && (
        <ul className={styles.tiles}>
          {t.tiles.map((tile, i) => {
            const Icon = TILE_ICONS[i]
            return (
              <li key={tile.title} className={`zn zn-surface zn-surface--solid ${styles.tile}`}>
                <span className={styles.tileIcon}>
                  <Icon size={16} aria-hidden />
                </span>
                <span>
                  <b>{tile.title}</b>
                  <span className="zn-caption tabular">{tile.line}</span>
                </span>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

function SellPopup({ t, step }: { t: VouchersDemoCopy; step: number }) {
  return (
    <div className={`zn-modal zn-enter ${styles.popup}`}>
      <span className="zn-section">{t.sell}</span>
      <span className="zn-caption">{t.amount}</span>
      <span className={styles.amounts}>
        {AMOUNTS.map((a) => (
          <span key={a} className="zn-chip tabular" aria-pressed={step >= 1 && a === '50 €'}>
            {a}
          </span>
        ))}
        <span className="zn-chip">{t.other}</span>
      </span>
      <span className="zn-caption">{t.payWith}</span>
      <span className="zn-choice">
        <button type="button" tabIndex={-1} aria-pressed={step >= 2}>
          {t.cash}
        </button>
        <button type="button" tabIndex={-1} aria-pressed={false}>
          {t.card}
        </button>
      </span>
      <span className="zn-btn zn-btn--primary" data-pressed={step === 3}>
        {t.sellButton} · <span className="tabular">50,00 €</span>
      </span>
    </div>
  )
}

function IssuedVoucher({ t, isRedeemed }: { t: VouchersDemoCopy; isRedeemed: boolean }) {
  return (
    <div className={styles.issuedRow}>
      <div className={`zn-enter ${styles.voucher}`}>
        <div className={styles.voucherTop}>
          <span className="zn-eyebrow">{t.voucher}</span>
          <span className={styles.shop}>{SHOP_NAME}</span>
        </div>
        <b className={`tabular ${styles.value}`}>50,00 €</b>
        <div className={styles.voucherBottom}>
          <span className={styles.qr}>
            <QrCode code={CODE} size={84} />
            {isRedeemed && <span className={styles.scanLine} aria-hidden />}
          </span>
          <span className={styles.meta}>
            <span className="tabular">{CODE}</span>
            <span className="zn-caption tabular">{t.validUntil}</span>
            <span className="zn-pill zn-pill--on">
              <span className="zn-dot" /> {t.sold}
            </span>
          </span>
        </div>
      </div>

      <div className={`${styles.redeem} ${isRedeemed ? styles.redeemOn : ''}`}>
        {isRedeemed ? (
          <div className="zn-enter">
            <span className={styles.redeemTitle}>
              <Check size={16} strokeWidth={2.5} aria-hidden /> {t.redeemed}
            </span>
            <span className="zn-caption tabular">{t.redeemLine}</span>
            <b className="tabular">{t.leftToPay}</b>
          </div>
        ) : (
          <span className="zn-caption">{t.scan}</span>
        )}
      </div>
    </div>
  )
}
