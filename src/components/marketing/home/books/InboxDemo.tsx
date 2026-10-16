'use client'

import { useRef } from 'react'
import type { Lang } from '@/lib/marketing/lang'
import { useStepLoop, type DemoPlayback } from '@/lib/marketing/useStepLoop'
import { APP_WORDS, navLabels } from '@/lib/marketing/content/home/demo'
import { AppWindow } from '../../app-ui/AppWindow'
import { ChannelBadge, type Channel } from '../../app-ui/ChannelBadge'
import styles from './Books.module.css'

interface InboxRow {
  name: string
  channel: Channel
  time: string
  preview: string
  status: string
}

const ROWS: Record<Lang, readonly InboxRow[]> = {
  en: [
    { name: 'Lea S.', channel: 'whatsapp', time: '23:05', preview: "Done! You're booked for Saturday at 10:00.", status: 'Booked' },
    { name: 'Julia K.', channel: 'email', time: '22:41', preview: 'Here is your 50 € voucher for your mum, paid by card.', status: 'Voucher sold' },
    { name: 'Tim', channel: 'web', time: '21:58', preview: 'Yes, there are two parking spots behind the house.', status: 'Answered' },
  ],
  de: [
    { name: 'Lea S.', channel: 'whatsapp', time: '23:05', preview: 'Erledigt! Sie sind für Samstag um 10:00 gebucht.', status: 'Gebucht' },
    { name: 'Julia K.', channel: 'email', time: '22:41', preview: 'Hier ist Ihr 50-€-Gutschein für Ihre Mutter, per Karte bezahlt.', status: 'Gutschein verkauft' },
    { name: 'Tim', channel: 'web', time: '21:58', preview: 'Ja, hinter dem Haus gibt es zwei Parkplätze.', status: 'Beantwortet' },
  ],
  th: [
    { name: 'Lea S.', channel: 'whatsapp', time: '23:05', preview: 'เรียบร้อยค่ะ จองวันเสาร์ 10:00 ไว้ให้แล้วนะคะ', status: 'จองแล้ว' },
    { name: 'Julia K.', channel: 'email', time: '22:41', preview: 'นี่คือบัตรของขวัญ 50 € สำหรับคุณแม่ ชำระด้วยบัตรแล้วค่ะ', status: 'ขายบัตรของขวัญแล้ว' },
    { name: 'Tim', channel: 'web', time: '21:58', preview: 'มีค่ะ มีที่จอดรถสองคันหลังร้าน', status: 'ตอบแล้ว' },
  ],
}

const LABEL: Record<Lang, string> = {
  en: 'The inbox: a WhatsApp booking, an email voucher sale and a website question, all answered by the receptionist.',
  de: 'Der Posteingang: eine WhatsApp-Buchung, ein Gutscheinverkauf per E-Mail und eine Frage von der Website, alle von der Rezeption beantwortet.',
  th: 'กล่องข้อความ: การจองทาง WhatsApp การขายบัตรของขวัญทางอีเมล และคำถามจากเว็บไซต์ ทั้งหมดตอบโดยพนักงานต้อนรับ',
}

/** One row arrives per step, then the full inbox holds. */
const STEPS = [1100, 1100, 1100, 3600] as const

interface InboxDemoProps extends DemoPlayback {
  lang: Lang
}

export function InboxDemo({ lang, speed, loop, onEnd }: InboxDemoProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { step } = useStepLoop(ref, STEPS, { speed, loop, onEnd })
  const words = APP_WORDS[lang]
  const rows = ROWS[lang].slice(0, Math.min(step + 1, 3))

  return (
    <div ref={ref} role="img" aria-label={LABEL[lang]}>
      <AppWindow
        title={words.inbox}
        nav="inbox"
        navLabels={navLabels(lang)}
        actions={
          <span className="zn-pill zn-pill--on">
            <span className="zn-dot" />
            WhatsApp · E-Mail · Web
          </span>
        }
      >
        <div className={styles.inbox}>
          {rows.map((r) => (
            <div key={r.name} className={`zn-convo zn-enter ${styles.convo}`}>
              <span className="zn-avatar">
                {r.name.charAt(0)}
                <ChannelBadge channel={r.channel} />
              </span>
              <span className={styles.convoText}>
                <span className={styles.convoTop}>
                  <b>{r.name}</b>
                  <span className="zn-caption tabular">{r.time}</span>
                </span>
                <span className={styles.preview}>{r.preview}</span>
              </span>
              <span className={`zn-chip zn-chip--booked ${styles.status}`}>{r.status}</span>
            </div>
          ))}
        </div>
      </AppWindow>
    </div>
  )
}
