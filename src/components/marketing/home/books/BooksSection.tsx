import type { Lang } from '@/lib/marketing/lang'
import { FeatureSection } from '../FeatureSection'
import { BookingPageDemo } from './BookingPageDemo'
import { InboxDemo } from './InboxDemo'
import styles from './Books.module.css'

const COPY: Record<Lang, { kicker: string; title: string; lead: string; points: string[] }> = {
  en: {
    kicker: 'More bookings',
    title: 'Stop losing bookings to messages nobody answered.',
    lead: 'Your AI receptionist answers on WhatsApp, by email and in your website chat, day and night, and books the real free times on your booking page. Reminders and deposits make sure the slot gets used.',
    points: [
      'Your own WhatsApp number, not a new one',
      'Guests book online any time, or just write',
      'Reminders and a cancel link, sent for you',
      'Deposits and no-show fees, charged from the booking',
    ],
  },
  de: {
    kicker: 'Mehr Buchungen',
    title: 'Keine Buchung mehr an unbeantwortete Nachrichten verlieren.',
    lead: 'Ihre KI-Rezeption antwortet auf WhatsApp, per E-Mail und im Website-Chat, Tag und Nacht, und bucht die echten freien Termine Ihrer Buchungsseite. Erinnerungen und Anzahlungen sorgen dafür, dass der Termin auch stattfindet.',
    points: [
      'Ihre eigene WhatsApp-Nummer, keine neue',
      'Gäste buchen jederzeit online oder schreiben einfach',
      'Erinnerungen und Stornolink, automatisch verschickt',
      'Anzahlungen und No-Show-Gebühren, direkt aus der Buchung',
    ],
  },
  th: {
    kicker: 'คิวเต็มขึ้น',
    title: 'ไม่เสียคิวไปกับข้อความที่ไม่มีใครตอบอีกต่อไป',
    lead: 'พนักงานต้อนรับ AI ตอบทาง WhatsApp อีเมล และแชทบนเว็บไซต์ ทั้งกลางวันและกลางคืน และจองจากเวลาว่างจริงบนหน้าจองของคุณ การแจ้งเตือนและมัดจำช่วยให้ลูกค้ามาตามนัด',
    points: [
      'ใช้เบอร์ WhatsApp ของร้านเอง ไม่ต้องมีเบอร์ใหม่',
      'ลูกค้าจองออนไลน์ได้ตลอดเวลา หรือแค่ทักมา',
      'ส่งแจ้งเตือนและลิงก์ยกเลิกให้อัตโนมัติ',
      'เก็บมัดจำและค่าปรับไม่มาตามนัดจากการจองได้เลย',
    ],
  },
}

interface BooksSectionProps {
  lang: Lang
  /** Position in the page's story (the homepage order by default). */
  index?: number
}

export function BooksSection({ lang, index = 3 }: BooksSectionProps) {
  const t = COPY[lang]
  return (
    <FeatureSection
      id="books-itself"
      index={index}
      kicker={t.kicker}
      title={t.title}
      lead={t.lead}
      points={t.points}
      tone="sand"
      isReversed
      demo={
        <div className={styles.pair}>
          <BookingPageDemo lang={lang} />
          <InboxDemo lang={lang} />
        </div>
      }
    />
  )
}
