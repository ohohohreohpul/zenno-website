import { Check } from 'lucide-react'
import { ChannelBadge, type Channel } from './ChannelBadge'
import styles from './Chat.module.css'

export interface ChatMessage {
  id: string
  from: 'guest' | 'shop'
  text: string
  time?: string
}

/** A message that appears once a demo reaches step `at`. */
export interface TimedMessage extends ChatMessage {
  at: number
}

/** The messages a demo shows at `step`. */
export function messagesAt(timeline: readonly TimedMessage[], step: number): ChatMessage[] {
  return timeline.filter((m) => step >= m.at)
}

interface ChatProps {
  /** Who the shop is talking to, shown in the header. */
  title: string
  subtitle: string
  channel?: Channel
  messages: readonly ChatMessage[]
  isTyping?: boolean
  /** A confirmation chip under the thread, e.g. "Booked · Sat 10:00". */
  booked?: string
  /** Fills a phone screen: no card edge or shadow of its own. */
  isBare?: boolean
  className?: string
}

/**
 * A WhatsApp-style thread with the receptionist: guest bubbles on the right,
 * the shop's replies on the left, typing dots, then the booked chip.
 */
export function Chat({
  title,
  subtitle,
  channel = 'whatsapp',
  messages,
  isTyping = false,
  booked,
  isBare = false,
  className = '',
}: ChatProps) {
  return (
    <div className={`${styles.chat} ${isBare ? styles.bare : ''} ${className}`}>
      <div className={styles.header}>
        <span className="zn-avatar">
          {title.charAt(0)}
          <ChannelBadge channel={channel} />
        </span>
        <span className={styles.who}>
          <b>{title}</b>
          <span className="zn-caption">{subtitle}</span>
        </span>
      </div>
      <div className={`zn-chat ${styles.thread}`}>
        {messages.map((m) => (
          <div key={m.id} className={`zn-bubble zn-bubble--${m.from === 'guest' ? 'customer' : 'shop'} zn-enter`}>
            {m.text}
            {m.time && <span className="zn-bubble__time tabular">{m.time}</span>}
          </div>
        ))}
        {isTyping && (
          <div className="zn-bubble zn-bubble--shop zn-typing zn-enter" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        )}
        {booked && (
          <span className={`zn-chip zn-chip--booked zn-enter ${styles.booked}`}>
            <Check size={14} strokeWidth={2.5} aria-hidden />
            {booked}
          </span>
        )}
      </div>
    </div>
  )
}
