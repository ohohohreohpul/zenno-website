import type { Lang } from '@/lib/marketing/lang'
import { FeatureSection } from '../FeatureSection'
import { BookingPageDemo } from './BookingPageDemo'
import { InboxDemo } from './InboxDemo'
import styles from './Books.module.css'

const COPY: Record<Lang, { kicker: string; title: string; lead: string; points: string[] }> = {
  en: {
    kicker: 'It books itself',
    title: 'Guests book online. Or they write, and your receptionist books for you.',
    lead: 'Your booking page shows real free times. Your AI receptionist answers on WhatsApp, by email and in your website chat, day and night, and books the same free times.',
    points: [
      'Pay by card, PayPal or at the venue',
      'Reminders and a cancel link, sent for you',
      'Your own WhatsApp number, not a new one',
      'Sells vouchers and answers questions too',
    ],
  },
  de: {
    kicker: 'Bucht von selbst',
    title: 'Gäste buchen online. Oder sie schreiben, und Ihre Rezeption bucht für Sie.',
    lead: 'Ihre Buchungsseite zeigt echte freie Termine. Ihre KI-Rezeption antwortet auf WhatsApp, per E-Mail und im Website-Chat, Tag und Nacht, und bucht dieselben freien Termine.',
    points: [
      'Bezahlen per Karte, PayPal oder vor Ort',
      'Erinnerungen und Stornolink, automatisch verschickt',
      'Ihre eigene WhatsApp-Nummer, keine neue',
      'Verkauft auch Gutscheine und beantwortet Fragen',
    ],
  },
  th: {
    kicker: 'จองได้เอง',
    title: 'ลูกค้าจองออนไลน์ได้เอง หรือทักมา แล้วพนักงานต้อนรับจองให้คุณ',
    lead: 'หน้าจองของคุณแสดงเวลาว่างจริง พนักงานต้อนรับ AI ตอบทาง WhatsApp อีเมล และแชทบนเว็บไซต์ ทั้งกลางวันและกลางคืน และจองจากเวลาว่างเดียวกัน',
    points: [
      'ชำระด้วยบัตร PayPal หรือจ่ายที่ร้าน',
      'ส่งแจ้งเตือนและลิงก์ยกเลิกให้อัตโนมัติ',
      'ใช้เบอร์ WhatsApp ของร้านเอง ไม่ต้องมีเบอร์ใหม่',
      'ขายบัตรของขวัญและตอบคำถามได้ด้วย',
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
