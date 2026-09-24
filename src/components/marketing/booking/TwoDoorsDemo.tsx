'use client'

import type { Lang } from '@/lib/marketing/lang'
import { useGsapContext, gsap, ScrollTrigger } from '@/lib/marketing/gsap'
import styles from './TwoDoorsDemo.module.css'

type Source = 'chat' | 'click'

interface Slot {
  time: string
  client?: string
  service?: string
  /** Set on the two slots the demo fills; others are static. */
  fills?: Source
  /** Already taken before the demo starts. */
  taken?: boolean
}

interface DemoStrings {
  aria: string
  chat: string
  click: string
  chatMe: string
  chatBot: string
  service: string
  day: string
  oneCalendar: string
  open: string
  source: Record<Source, string>
  slots: Slot[]
}

const STRINGS: Record<Lang, DemoStrings> = {
  en: {
    aria: 'Demo: one booking arrives by chat, one by the booking page, both land in the same calendar',
    chat: 'Chat',
    click: 'Click',
    chatMe: 'Facial tomorrow afternoon?',
    chatBot: '2pm with Ines is free — booked for you ✓',
    service: 'Balayage · 2h · Mia',
    day: 'Thursday',
    oneCalendar: 'One calendar',
    open: 'Open',
    source: { chat: 'via WhatsApp · Zenno', click: 'via booking page' },
    slots: [
      { time: '09:30', client: 'Lena K.', service: 'Cut & finish', taken: true },
      { time: '11:00', client: 'Sara M.', service: 'Balayage', fills: 'click' },
      { time: '13:00' },
      { time: '14:00', client: 'Nora P.', service: 'Facial', fills: 'chat' },
      { time: '16:30', client: 'Aylin T.', service: 'Massage 60′', taken: true },
    ],
  },
  de: {
    aria: 'Demo: eine Buchung kommt per Chat, eine über die Buchungsseite — beide landen im selben Kalender',
    chat: 'Chat',
    click: 'Klick',
    chatMe: 'Gesichtsbehandlung morgen Nachmittag?',
    chatBot: '14 Uhr mit Ines ist frei — für Sie gebucht ✓',
    service: 'Balayage · 2 Std. · Mia',
    day: 'Donnerstag',
    oneCalendar: 'Ein Kalender',
    open: 'Frei',
    source: { chat: 'per WhatsApp · Zenno', click: 'über die Buchungsseite' },
    slots: [
      { time: '09:30', client: 'Lena K.', service: 'Schnitt & Styling', taken: true },
      { time: '11:00', client: 'Sara M.', service: 'Balayage', fills: 'click' },
      { time: '13:00' },
      { time: '14:00', client: 'Nora P.', service: 'Gesichtsbehandlung', fills: 'chat' },
      { time: '16:30', client: 'Aylin T.', service: 'Massage 60′', taken: true },
    ],
  },
}

const LOOP_PAUSE = 2.6

interface TwoDoorsDemoProps {
  lang?: Lang
}

/**
 * The page's signature moment: one booking arrives by chat, one by click,
 * and both land in the same calendar. Loops while visible, static under
 * reduced motion (both slots shown filled).
 */
export function TwoDoorsDemo({ lang = 'en' }: TwoDoorsDemoProps) {
  const t = STRINGS[lang]
  const scopeRef = useGsapContext(({ reduced, scope }) => {
    const q = (sel: string) => scope.querySelector<HTMLElement>(sel)
    const chatMe = q('[data-chat-me]')
    const chatBot = q('[data-chat-bot]')
    const tap = q('[data-tap]')
    const pick = q('[data-pick]')
    const chatSlot = q('[data-fill="chat"]')
    const clickSlot = q('[data-fill="click"]')
    if (!chatMe || !chatBot || !tap || !pick || !chatSlot || !clickSlot) return

    const filled = styles.filled
    const picked = styles.picked

    if (reduced) {
      gsap.set([chatMe, chatBot], { opacity: 1, y: 0 })
      pick.classList.add(picked)
      chatSlot.classList.add(filled)
      clickSlot.classList.add(filled)
      return
    }

    const reset = () => {
      gsap.set([chatMe, chatBot], { opacity: 0, y: 10 })
      gsap.set(tap, { opacity: 0, scale: 0.4 })
      pick.classList.remove(picked)
      chatSlot.classList.remove(filled)
      clickSlot.classList.remove(filled)
    }
    reset()

    const pulse = (el: HTMLElement) => ({
      keyframes: [{ scale: 1.03, duration: 0.18 }, { scale: 1, duration: 0.4, ease: 'expo.out' }],
      onStart: () => el.classList.add(filled),
    })

    const tl = gsap.timeline({ repeat: -1, repeatDelay: LOOP_PAUSE, paused: true, onRepeat: reset })
    tl.to(chatMe, { opacity: 1, y: 0, duration: 0.5, ease: 'expo.out' }, 0.3)
      .to(chatBot, { opacity: 1, y: 0, duration: 0.5, ease: 'expo.out' }, '+=0.8')
      .to(chatSlot, pulse(chatSlot), '+=0.25')
      .to(tap, { opacity: 1, scale: 1, duration: 0.25, ease: 'back.out(2)' }, '+=0.7')
      .add(() => pick.classList.add(picked))
      .to(tap, { opacity: 0, scale: 1.6, duration: 0.45 }, '+=0.1')
      .to(clickSlot, pulse(clickSlot), '-=0.2')
      .to({}, { duration: LOOP_PAUSE })

    ScrollTrigger.create({
      trigger: scope,
      start: 'top 90%',
      end: 'bottom 10%',
      onToggle: (self) => (self.isActive ? tl.play() : tl.pause()),
    })
  }, [])

  return (
    <div
      ref={(n) => {
        scopeRef.current = n
      }}
      className={styles.stage}
      aria-label={t.aria}
    >
      <div className={styles.doors}>
        <div className={`card ${styles.door}`}>
          <span className={styles.doorLabel}>
            <i className={styles.waDot} /> {t.chat}
          </span>
          <p data-chat-me className={`${styles.bubble} ${styles.me}`}>
            {t.chatMe}
          </p>
          <p data-chat-bot className={`${styles.bubble} ${styles.bot}`}>
            {t.chatBot}
          </p>
        </div>

        <div className={`card ${styles.door}`}>
          <span className={styles.doorLabel}>
            <i className={styles.bkDot} /> {t.click}
          </span>
          <span className={styles.service}>{t.service}</span>
          <div className={styles.times}>
            <span className={styles.time}>10:00</span>
            <span data-pick className={styles.time}>
              11:00
              <i data-tap className={styles.tap} aria-hidden />
            </span>
            <span className={styles.time}>15:00</span>
          </div>
        </div>
      </div>

      <div className={styles.join} aria-hidden>
        <span />
        <span />
      </div>

      <div className={`card ${styles.calendar}`}>
        <div className={styles.calHead}>
          <strong>{t.day}</strong>
          <span>{t.oneCalendar}</span>
        </div>
        <ul className={styles.slots}>
          {t.slots.map((slot) => (
            <li
              key={slot.time}
              data-fill={slot.fills}
              data-source={slot.fills}
              className={`${styles.slot} ${slot.taken ? styles.taken : ''}`}
            >
              <span className={styles.slotTime}>{slot.time}</span>
              {!slot.taken && <span className={styles.slotEmpty}>{t.open}</span>}
              {slot.client && (
                <span className={styles.slotBody}>
                  <b>{slot.client}</b> · {slot.service}
                  {slot.fills && <em className={styles.source}>{t.source[slot.fills]}</em>}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
