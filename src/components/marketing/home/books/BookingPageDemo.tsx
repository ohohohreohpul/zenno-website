'use client'

import { useRef } from 'react'
import { CalendarCheck, Check } from 'lucide-react'
import type { Lang } from '@/lib/marketing/lang'
import { useStepLoop, type DemoPlayback } from '@/lib/marketing/useStepLoop'
import { SERVICES, SERVICE_PRICE, SHOP_NAME, type ServiceKey } from '@/lib/marketing/content/home/demo'
import { IPhone } from '../../app-ui/IPhone'
import styles from './Books.module.css'

interface BookingPageCopy {
  pickService: string
  pickTime: string
  days: readonly [string, string, string]
  details: string
  name: string
  phone: string
  payWith: string
  pay: readonly [string, string, string]
  confirm: string
  doneTitle: string
  doneLine: string
  reminder: string
  cancel: string
  label: string
}

const COPY: Record<Lang, BookingPageCopy> = {
  en: {
    pickService: 'Choose a treatment',
    pickTime: 'Choose a time',
    days: ['Fri 17', 'Sat 18', 'Sun 19'],
    details: 'Your details',
    name: 'Lea S.',
    phone: '+49 170 555 0142',
    payWith: 'Pay',
    pay: ['Card', 'PayPal', 'At the spa'],
    confirm: 'Book',
    doneTitle: "You're booked",
    doneLine: 'Sat 18 · 10:00 · with Nok',
    reminder: 'Reminder 24 hours before',
    cancel: 'Cancel link in your email',
    label: 'A guest books on the phone: picks Thai massage, Saturday 10:00, enters her details and is booked.',
  },
  de: {
    pickService: 'Behandlung wählen',
    pickTime: 'Zeit wählen',
    days: ['Fr 17', 'Sa 18', 'So 19'],
    details: 'Ihre Angaben',
    name: 'Lea S.',
    phone: '+49 170 555 0142',
    payWith: 'Bezahlen',
    pay: ['Karte', 'PayPal', 'Vor Ort'],
    confirm: 'Buchen',
    doneTitle: 'Sie sind gebucht',
    doneLine: 'Sa 18 · 10:00 · bei Nok',
    reminder: 'Erinnerung 24 Stunden vorher',
    cancel: 'Stornolink in Ihrer E-Mail',
    label: 'Ein Gast bucht am Handy: Thai-Massage, Samstag 10:00, Angaben eingeben, gebucht.',
  },
  th: {
    pickService: 'เลือกบริการ',
    pickTime: 'เลือกเวลา',
    days: ['ศ. 17', 'ส. 18', 'อา. 19'],
    details: 'ข้อมูลของคุณ',
    name: 'Lea S.',
    phone: '+49 170 555 0142',
    payWith: 'ชำระเงิน',
    pay: ['บัตร', 'PayPal', 'ที่ร้าน'],
    confirm: 'จอง',
    doneTitle: 'จองเรียบร้อยแล้ว',
    doneLine: 'ส. 18 · 10:00 · กับนก',
    reminder: 'แจ้งเตือนล่วงหน้า 24 ชั่วโมง',
    cancel: 'ลิงก์ยกเลิกอยู่ในอีเมล',
    label: 'ลูกค้าจองผ่านมือถือ เลือกนวดไทย วันเสาร์ 10:00 กรอกข้อมูล แล้วจองสำเร็จ',
  },
}

const MENU: readonly ServiceKey[] = ['thai', 'aroma', 'back', 'foot']
const TIMES = ['10:00', '11:30', '14:00', '15:30'] as const
/** Menu, tap, time, details, booked. */
const STEPS = [1300, 700, 1600, 1800, 2800] as const

interface BookingPageDemoProps extends DemoPlayback {
  lang: Lang
}

export function BookingPageDemo({ lang, speed, loop, onEnd }: BookingPageDemoProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { step } = useStepLoop(ref, STEPS, { speed, loop, onEnd })
  const t = COPY[lang]

  return (
    <div ref={ref} role="img" aria-label={t.label} className={styles.phoneWrap}>
      <IPhone time="23:04">
        <div className={styles.shopHead}>
          <img src="/logo/mark-black.svg" alt="" width={18} height={18} />
          <b>{SHOP_NAME}</b>
        </div>
        <div className={styles.progress} aria-hidden>
          {[0, 1, 2].map((i) => (
            <i key={i} className={Math.min(step, 4) >= [0, 2, 3][i] ? styles.progressOn : ''} />
          ))}
        </div>

        {step <= 1 && (
          <div key="menu" className={`zn-enter ${styles.page}`}>
            <span className="zn-eyebrow">{t.pickService}</span>
            {MENU.map((key) => (
              <span key={key} className={`${styles.service} ${step === 1 && key === 'thai' ? styles.serviceOn : ''}`}>
                <span>{SERVICES[key][lang]}</span>
                <b className="tabular">{SERVICE_PRICE[key]}</b>
              </span>
            ))}
          </div>
        )}

        {step === 2 && (
          <div key="time" className={`zn-enter ${styles.page}`}>
            <span className="zn-eyebrow">{t.pickTime}</span>
            <span className={styles.days}>
              {t.days.map((d, i) => (
                <span key={d} className="zn-chip" aria-pressed={i === 1}>
                  {d}
                </span>
              ))}
            </span>
            <span className={styles.timeGrid}>
              {TIMES.map((time, i) => (
                <span key={time} className={`zn-chip tabular ${styles.time}`} aria-pressed={i === 0}>
                  {time}
                </span>
              ))}
            </span>
            <span className="zn-caption">{SERVICES.thai[lang]} · Nok</span>
          </div>
        )}

        {step === 3 && (
          <div key="details" className={`zn-enter ${styles.page}`}>
            <span className="zn-eyebrow">{t.details}</span>
            <span className={styles.input}>{t.name}</span>
            <span className={`${styles.input} tabular`}>{t.phone}</span>
            <span className="zn-caption">{t.payWith}</span>
            <span className="zn-choice">
              {t.pay.map((p, i) => (
                <button key={p} type="button" tabIndex={-1} aria-pressed={i === 2}>
                  {p}
                </button>
              ))}
            </span>
            <span className={`zn-btn zn-btn--primary ${styles.confirm}`}>
              {t.confirm} · <span className="tabular">{SERVICE_PRICE.thai}</span>
            </span>
          </div>
        )}

        {step === 4 && (
          <div key="done" className={`zn-enter ${styles.page} ${styles.done}`}>
            <span className={styles.doneIcon}>
              <CalendarCheck size={26} aria-hidden />
            </span>
            <b className={styles.doneTitle}>{t.doneTitle}</b>
            <span className="tabular">{SERVICES.thai[lang]}</span>
            <span className="tabular">{t.doneLine}</span>
            <span className={styles.doneList}>
              <span>
                <Check size={14} aria-hidden /> {t.reminder}
              </span>
              <span>
                <Check size={14} aria-hidden /> {t.cancel}
              </span>
            </span>
          </div>
        )}
      </IPhone>
    </div>
  )
}
