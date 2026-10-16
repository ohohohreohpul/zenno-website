'use client'

import { useRef, useState } from 'react'
import { CalendarDays, Check, FileSpreadsheet, Gift, Inbox, Users, type LucideIcon } from 'lucide-react'
import { LANGS, LANG_LABEL, LANG_NAME, type Lang } from '@/lib/marketing/lang'
import { useStepLoop } from '@/lib/marketing/useStepLoop'
import { APP_WORDS } from '@/lib/marketing/content/home/demo'
import { AppWindow } from '../../app-ui/AppWindow'
import styles from './Switching.module.css'

interface ImportCopy {
  title: string
  from: string
  file: string
  rows: readonly [string, string, string]
  done: string
  language: string
  label: string
}

const COPY: Record<Lang, ImportCopy> = {
  en: {
    title: 'Import',
    from: 'Import from',
    file: 'export.csv',
    rows: ['Customers', 'Appointments', 'Blocked times'],
    done: 'Imported. Check your calendar and start.',
    language: 'Language',
    label: 'Importing customers, appointments and blocked times from a CSV export of the old tool.',
  },
  de: {
    title: 'Import',
    from: 'Importieren aus',
    file: 'export.csv',
    rows: ['Kunden', 'Termine', 'Geblockte Zeiten'],
    done: 'Importiert. Kalender prüfen und loslegen.',
    language: 'Sprache',
    label: 'Kunden, Termine und geblockte Zeiten werden aus dem CSV-Export des alten Tools importiert.',
  },
  th: {
    title: 'นำเข้าข้อมูล',
    from: 'นำเข้าจาก',
    file: 'export.csv',
    rows: ['ลูกค้า', 'นัดหมาย', 'เวลาที่บล็อกไว้'],
    done: 'นำเข้าเรียบร้อย ตรวจปฏิทินแล้วเริ่มใช้งานได้เลย',
    language: 'ภาษา',
    label: 'นำเข้าลูกค้า นัดหมาย และเวลาที่บล็อกไว้จากไฟล์ CSV ของระบบเดิม',
  },
}

const SOURCES = ['EasyWeek', 'Shore', 'Treatwell'] as const
/** Example counts for the fictional shop's import. */
const COUNTS = ['412', '1.208', '36'] as const
const STEPS = [1100, 800, 800, 800, 3000] as const
const NAV_ICONS: readonly LucideIcon[] = [CalendarDays, Inbox, Gift, Users]

interface SwitchingDemoProps {
  lang: Lang
}

export function SwitchingDemo({ lang }: SwitchingDemoProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { step } = useStepLoop(ref, STEPS)
  const [uiLang, setUiLang] = useState<Lang>(lang)
  const t = COPY[lang]
  const words = APP_WORDS[uiLang]
  const navWords = [words.calendar, words.inbox, words.vouchers, words.customers]

  return (
    <div ref={ref} className={styles.grid}>
      <AppWindow title={t.title} className={styles.importWin}>
        <div className={styles.import} role="img" aria-label={t.label}>
          <span className="zn-caption">{t.from}</span>
          <span className={styles.sources}>
            {SOURCES.map((s) => (
              <span key={s} className="zn-chip" aria-pressed={s === 'Shore'}>
                {s}
              </span>
            ))}
          </span>
          <span className={styles.file}>
            <FileSpreadsheet size={16} aria-hidden /> {t.file}
          </span>
          <ul className={styles.rows}>
            {t.rows.map((row, i) => {
              const isDone = step >= i + 1
              return (
                <li key={row} className={isDone ? styles.rowDone : ''}>
                  <span className={styles.check}>{isDone && <Check size={13} strokeWidth={3} aria-hidden />}</span>
                  <span>{row}</span>
                  <b className="tabular">{isDone ? COUNTS[i] : '…'}</b>
                </li>
              )
            })}
          </ul>
          {step === 4 && <span className={`zn-chip zn-chip--booked zn-enter ${styles.done}`}>{t.done}</span>}
        </div>
      </AppWindow>

      <div className={`zn ${styles.night}`}>
        <img src="/logo/mark-cream.svg" alt="" width={22} height={22} />
        <nav className={styles.navList} aria-hidden>
          {navWords.map((label, i) => {
            const Icon = NAV_ICONS[i]
            return (
              <span key={i} className={`${styles.navItem} ${i === 0 ? styles.navActive : ''}`} lang={uiLang}>
                <Icon size={18} strokeWidth={1.75} /> {label}
              </span>
            )
          })}
        </nav>
        <div className="zn-lang" role="radiogroup" aria-label={t.language}>
          {LANGS.map((l) => (
            <button
              key={l}
              type="button"
              role="radio"
              aria-checked={uiLang === l}
              aria-label={LANG_NAME[l]}
              onClick={() => setUiLang(l)}
            >
              {LANG_LABEL[l]}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
