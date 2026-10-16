'use client'

import { useRef } from 'react'
import type { Lang } from '@/lib/marketing/lang'
import { useStepLoop, type DemoPlayback } from '@/lib/marketing/useStepLoop'
import { APP_WORDS, SERVICES, STAFF, navLabels } from '@/lib/marketing/content/home/demo'
import { AppWindow } from '../../app-ui/AppWindow'
import { IPhone } from '../../app-ui/IPhone'
import { PhotoStage } from '../../app-ui/PhotoStage'
import { DayCalendar, type CalBooking } from '../../app-ui/DayCalendar'
import { Chat, messagesAt } from '../../app-ui/Chat'
import styles from './Hero.module.css'

interface HeroChat {
  guest: string
  ask: string
  offer: string
  yes: string
  done: string
  booked: string
  via: string
  calLabel: string
}

const CHAT: Record<Lang, HeroChat> = {
  en: {
    guest: 'Lea S.',
    ask: 'Hi! Do you have time for a Thai massage on Saturday morning?',
    offer: "Hi, I'm Mali from Sabai Spa, lovely to hear from you! Saturday at 10:00 with Nok is free. Thai massage, 60 min, 70 €. Shall I book it for you?",
    yes: 'Yes please 🙏',
    done: "Done! You're booked for Saturday at 10:00. See you then.",
    booked: 'Booked · Sat 10:00',
    via: 'WhatsApp · answered by Mali',
    calLabel: 'Saturday in the calendar: Nok, Ploy and Anna, with the new 10:00 booking for Lea S. in Nok’s column.',
  },
  de: {
    guest: 'Lea S.',
    ask: 'Hallo! Haben Sie Samstagvormittag Zeit für eine Thai-Massage?',
    offer: 'Hallo, hier ist Mali vom Sabai Spa, schön von Ihnen zu hören! Samstag um 10:00 ist bei Nok frei. Thai-Massage, 60 Min., 70 €. Soll ich das für Sie buchen?',
    yes: 'Ja, gerne 🙏',
    done: 'Erledigt! Sie sind für Samstag um 10:00 gebucht. Bis dann!',
    booked: 'Gebucht · Sa 10:00',
    via: 'WhatsApp · beantwortet von Mali',
    calLabel: 'Samstag im Kalender: Nok, Ploy und Anna, mit der neuen Buchung um 10:00 für Lea S. in Noks Spalte.',
  },
  th: {
    guest: 'Lea S.',
    ask: 'สวัสดีค่ะ วันเสาร์ช่วงเช้ามีคิวนวดไทยว่างไหมคะ',
    offer: 'สวัสดีค่ะ มะลิจาก Sabai Spa ค่ะ วันเสาร์ 10:00 คุณนกว่างค่ะ นวดไทย 60 นาที 70 € ให้จองไว้เลยไหมคะ',
    yes: 'จองเลยค่ะ 🙏',
    done: 'เรียบร้อยค่ะ จองวันเสาร์ 10:00 ไว้ให้แล้วนะคะ แล้วพบกันค่ะ',
    booked: 'จองแล้ว · ส. 10:00',
    via: 'WhatsApp · มะลิตอบให้',
    calLabel: 'ปฏิทินวันเสาร์ของนก พลอย และแอนนา พร้อมคิวใหม่ 10:00 ของ Lea S. ในช่องของนก',
  },
}

/** Step lengths in ms: guest asks, typing, offer, yes, typing, done, card drops, hold. */
const STEPS = [700, 1300, 1100, 2000, 1000, 800, 1100, 3200] as const

function existingBookings(lang: Lang): CalBooking[] {
  return [
    { id: 'b1', col: 1, start: 10, dur: 1.5, name: 'Lena M.', service: SERVICES.aroma[lang] },
    { id: 'b2', col: 2, start: 11, dur: 1, name: 'Julia K.', service: SERVICES.facial[lang] },
    { id: 'b3', col: 0, start: 12, dur: 0.5, name: 'Tom B.', service: SERVICES.back[lang] },
    { id: 'b4', col: 1, start: 12.5, dur: 1, name: 'Sara P.', service: SERVICES.thai[lang] },
    { id: 'b5', col: 2, start: 13, dur: 0.75, name: 'Max R.', service: SERVICES.foot[lang] },
    { id: 'b6', col: 0, start: 13.5, dur: 1, name: 'Mrs. Lee', service: SERVICES.thai[lang] },
  ]
}

interface HeroDemoProps extends DemoPlayback {
  lang: Lang
}

/**
 * The hero loop: a WhatsApp message arrives at night, the receptionist
 * answers, and the booking drops into Nok's column on Saturday.
 */
export function HeroDemo({ lang, speed, loop, onEnd }: HeroDemoProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { step } = useStepLoop(ref, STEPS, { speed, loop, onEnd })
  const t = CHAT[lang]
  const words = APP_WORDS[lang]

  const messages = messagesAt(
    [
      { at: 1, id: 'ask', from: 'guest', text: t.ask, time: '23:04' },
      { at: 3, id: 'offer', from: 'shop', text: t.offer, time: '23:04' },
      { at: 4, id: 'yes', from: 'guest', text: t.yes, time: '23:05' },
      { at: 6, id: 'done', from: 'shop', text: t.done, time: '23:05' },
    ],
    step,
  )

  const bookings: CalBooking[] =
    step >= 7
      ? [...existingBookings(lang), { id: 'new', col: 0, start: 10, dur: 1, name: t.guest, service: SERVICES.thai[lang], isNew: true }]
      : existingBookings(lang)

  return (
    <div ref={ref}>
      <PhotoStage image="/images/spa-dusk.webp" width={2000} height={1125} isPriority className={styles.stage}>
        <div className={styles.phoneSlot}>
          <IPhone time="23:05">
            <Chat
              title={t.guest}
              subtitle={t.via}
              messages={messages}
              isTyping={step === 2 || step === 5}
              booked={step >= 6 ? t.booked : undefined}
              isBare
            />
          </IPhone>
        </div>
        <div className={styles.windowSlot}>
          <AppWindow
            title={words.saturday}
            nav="calendar"
            navLabels={navLabels(lang)}
            actions={
              <span className="zn-pill zn-pill--on">
                <span className="zn-dot" />
                <span className={styles.pillText}>{words.receptionistOn}</span>
              </span>
            }
          >
            <DayCalendar staff={STAFF} bookings={bookings} from={10} to={15} label={t.calLabel} compact />
          </AppWindow>
        </div>
      </PhotoStage>
    </div>
  )
}
