'use client'

import { useRef } from 'react'
import { Check, PhoneMissed, Ticket } from 'lucide-react'
import type { Lang } from '@/lib/marketing/lang'
import { useStepLoop, type DemoPlayback } from '@/lib/marketing/useStepLoop'
import { SERVICES } from '@/lib/marketing/content/home/demo'
import { QrCode } from '../../app-ui/QrCode'
import styles from './FrontDesk.module.css'

interface Moment {
  time: string
  title: string
  before: string
  after: string
}

interface FrontDeskCopy {
  without: string
  with: string
  toggleLabel: string
  moments: readonly [Moment, Moment, Moment]
  guestText: string
  unanswered: string
  answered: string
  booked: string
  missed: string
  onlineBooking: string
  slip: string
  voucher: string
  photoBefore: string
  photoAfter: string
}

const COPY: Record<Lang, FrontDeskCopy> = {
  en: {
    without: 'Without Zenno',
    with: 'With Zenno',
    toggleLabel: 'Compare the front desk',
    moments: [
      { time: '23:04', title: 'A message at 11 pm', before: 'Read in the morning. By then she booked somewhere else.', after: 'Answered at 23:04 and booked for Saturday.' },
      { time: '14:20', title: 'The phone rings mid-massage', before: "You can't pick up with oil on your hands. Nobody leaves a message.", after: 'She books online instead. You finish the massage.' },
      { time: '', title: 'A voucher on a paper slip', before: 'Written by hand, kept in a drawer, hard to check later.', after: 'Sold in three taps with a QR code. Redeemed by scan.' },
    ],
    guestText: 'Hi! Any time for a massage on Saturday?',
    unanswered: 'Unanswered',
    answered: 'Saturday 10:00 with Nok is free. Shall I book it?',
    booked: 'Booked · Sat 10:00',
    missed: '2 missed calls',
    onlineBooking: 'Online booking',
    slip: 'Voucher 50 € for Mrs. Lee',
    voucher: 'Gift voucher',
    photoBefore: '23:04 · Closed. Three messages waiting.',
    photoAfter: '08:00 · Already booked for the day.',
  },
  de: {
    without: 'Ohne Zenno',
    with: 'Mit Zenno',
    toggleLabel: 'Empfang vergleichen',
    moments: [
      { time: '23:04', title: 'Eine Nachricht um 23 Uhr', before: 'Morgens gelesen. Da hat sie schon woanders gebucht.', after: 'Um 23:04 beantwortet und für Samstag gebucht.' },
      { time: '14:20', title: 'Das Telefon klingelt mitten in der Massage', before: 'Mit Öl an den Händen geht niemand ran. Eine Nachricht hinterlässt keiner.', after: 'Sie bucht stattdessen online. Sie massieren in Ruhe weiter.' },
      { time: '', title: 'Ein Gutschein auf einem Zettel', before: 'Von Hand geschrieben, in der Schublade, später schwer zu prüfen.', after: 'In drei Schritten verkauft, mit QR-Code. Per Scan eingelöst.' },
    ],
    guestText: 'Hallo! Haben Sie Samstag Zeit für eine Massage?',
    unanswered: 'Unbeantwortet',
    answered: 'Samstag um 10:00 ist bei Nok frei. Soll ich buchen?',
    booked: 'Gebucht · Sa 10:00',
    missed: '2 verpasste Anrufe',
    onlineBooking: 'Online gebucht',
    slip: 'Gutschein 50 € für Frau Lee',
    voucher: 'Geschenkgutschein',
    photoBefore: '23:04 · Geschlossen. Drei Nachrichten warten.',
    photoAfter: '08:00 · Der Tag ist schon gebucht.',
  },
  th: {
    without: 'ไม่มี Zenno',
    with: 'มี Zenno',
    toggleLabel: 'เปรียบเทียบงานหน้าเคาน์เตอร์',
    moments: [
      { time: '23:04', title: 'ข้อความตอนห้าทุ่ม', before: 'มาเห็นตอนเช้า ลูกค้าไปจองร้านอื่นแล้ว', after: 'ตอบตอน 23:04 และจองวันเสาร์ให้เรียบร้อย' },
      { time: '14:20', title: 'โทรศัพท์ดังตอนกำลังนวด', before: 'มือเต็มไปด้วยน้ำมัน รับสายไม่ได้ ลูกค้าก็ไม่ฝากข้อความ', after: 'ลูกค้าจองออนไลน์แทน คุณนวดต่อได้สบายใจ' },
      { time: '', title: 'บัตรของขวัญบนกระดาษ', before: 'เขียนด้วยมือ เก็บในลิ้นชัก ตรวจสอบทีหลังยาก', after: 'ขายได้ในสามขั้นตอน มี QR code ใช้งานด้วยการสแกน' },
    ],
    guestText: 'สวัสดีค่ะ วันเสาร์มีคิวนวดว่างไหมคะ',
    unanswered: 'ยังไม่ได้ตอบ',
    answered: 'วันเสาร์ 10:00 คุณนกว่างค่ะ จองไว้เลยไหมคะ',
    booked: 'จองแล้ว · ส. 10:00',
    missed: 'สายที่ไม่ได้รับ 2 สาย',
    onlineBooking: 'จองออนไลน์',
    slip: 'บัตรของขวัญ 50 € สำหรับคุณลี',
    voucher: 'บัตรของขวัญ',
    photoBefore: '23:04 · ร้านปิดแล้ว มีข้อความรออยู่สามข้อความ',
    photoAfter: '08:00 · คิววันนี้เต็มแล้ว',
  },
}

/** Before for 3.2 s, after for 4.5 s. */
const STEPS = [3200, 4500] as const

interface FrontDeskDemoProps extends DemoPlayback {
  lang: Lang
}

/**
 * Three front desk moments, flipped between "without" and "with Zenno". It
 * flips by itself until the visitor picks a side.
 */
export function FrontDeskDemo({ lang, speed, loop, onEnd }: FrontDeskDemoProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { step, goTo } = useStepLoop(ref, STEPS, { speed, loop, onEnd })
  const t = COPY[lang]
  const isAfter = step === 1
  const [msg, call, slip] = t.moments

  return (
    <div ref={ref} className={`zn ${styles.demo}`}>
      <div className={`zn-choice ${styles.toggle}`} role="group" aria-label={t.toggleLabel}>
        <button type="button" aria-pressed={!isAfter} onClick={() => goTo(0, true)}>
          {t.without}
        </button>
        <button type="button" aria-pressed={isAfter} onClick={() => goTo(1, true)}>
          {t.with}
        </button>
      </div>

      <div className={styles.photo} aria-hidden>
        <img src="/images/before-night.webp" alt="" width={1400} height={1031} loading="lazy" className={isAfter ? '' : styles.photoOn} />
        <img src="/images/after-morning.webp" alt="" width={1400} height={1031} loading="lazy" className={isAfter ? styles.photoOn : ''} />
        <span key={String(isAfter)} className={`zn-enter ${styles.photoChip} ${isAfter ? styles.photoChipGood : ''}`}>
          <span className="zn-dot" /> {isAfter ? t.photoAfter : t.photoBefore}
        </span>
      </div>

      <div className={styles.cards} data-after={isAfter}>
        <article className={`zn-surface zn-surface--solid ${styles.card}`}>
          <div className={styles.screen}>
            <div className={`zn-chat ${styles.miniChat}`}>
              <div className="zn-bubble zn-bubble--customer">
                {t.guestText}
                <span className="zn-bubble__time tabular">{msg.time}</span>
              </div>
              {isAfter ? (
                <>
                  <div key="a" className="zn-bubble zn-bubble--shop zn-enter">
                    {t.answered}
                    <span className="zn-bubble__time tabular">{msg.time}</span>
                  </div>
                  <span key="b" className={`zn-chip zn-chip--booked zn-enter ${styles.center}`}>
                    <Check size={13} strokeWidth={2.5} aria-hidden /> {t.booked}
                  </span>
                </>
              ) : (
                <span key="c" className={`zn-pill zn-pill--warn zn-enter ${styles.center}`}>
                  <span className="zn-dot" /> {t.unanswered}
                </span>
              )}
            </div>
          </div>
          <MomentText moment={msg} isAfter={isAfter} />
        </article>

        <article className={`zn-surface zn-surface--solid ${styles.card}`}>
          <div className={`${styles.screen} ${styles.padded}`}>
            {isAfter ? (
              <div key="a" className="zn-booking zn-booking--s2 zn-drop">
                <div className="zn-booking__row">
                  <span className="zn-booking__dot" />
                  <span className="zn-booking__time">14:30</span>
                  <span>{t.onlineBooking}</span>
                </div>
                <div className="zn-booking__service">{SERVICES.foot[lang]}</div>
              </div>
            ) : (
              <div key="b" className={`zn-enter ${styles.missed}`}>
                <PhoneMissed size={18} aria-hidden />
                <span>
                  <b>{t.missed}</b>
                  <span className="zn-caption tabular">{call.time} · 14:22</span>
                </span>
              </div>
            )}
          </div>
          <MomentText moment={call} isAfter={isAfter} />
        </article>

        <article className={`zn-surface zn-surface--solid ${styles.card}`}>
          <div className={`${styles.screen} ${styles.padded}`}>
            {isAfter ? (
              <div key="a" className={`zn-enter ${styles.voucher}`}>
                <QrCode code="ZN-7Q4K" size={58} />
                <span>
                  <span className="zn-eyebrow">{t.voucher}</span>
                  <b className="tabular">50,00 €</b>
                  <span className="zn-caption tabular">ZN-7Q4K</span>
                </span>
              </div>
            ) : (
              <div key="b" className={`zn-enter ${styles.slip}`}>
                <Ticket size={16} aria-hidden />
                <span>{t.slip}</span>
              </div>
            )}
          </div>
          <MomentText moment={slip} isAfter={isAfter} />
        </article>
      </div>
    </div>
  )
}

interface MomentTextProps {
  moment: Moment
  isAfter: boolean
}

function MomentText({ moment, isAfter }: MomentTextProps) {
  return (
    <div className={styles.text}>
      <h3 className="zn-section">{moment.title}</h3>
      <p key={String(isAfter)} className={`zn-enter ${isAfter ? styles.good : ''}`}>
        {isAfter ? moment.after : moment.before}
      </p>
    </div>
  )
}
