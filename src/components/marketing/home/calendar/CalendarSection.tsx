import type { Lang } from '@/lib/marketing/lang'
import { FeatureSection } from '../FeatureSection'
import { CalendarDemo } from './CalendarDemo'

const COPY: Record<Lang, { kicker: string; title: string; lead: string; points: string[] }> = {
  en: {
    kicker: 'One calendar',
    title: 'Phone, booking page, WhatsApp, email: it all lands here.',
    lead: 'The POS calendar is your daily workspace. Every therapist has their colour. Every booking is in one place, wherever it came from.',
    points: [
      'Add a phone booking in seconds: type a few digits of the number',
      'Block time with a note and a colour',
      'Confirm, take payment and mark no-shows right on the card',
    ],
  },
  de: {
    kicker: 'Ein Kalender',
    title: 'Telefon, Buchungsseite, WhatsApp, E-Mail: alles landet hier.',
    lead: 'Der Kassenkalender ist Ihr täglicher Arbeitsplatz. Jede Therapeutin hat ihre Farbe. Jede Buchung steht an einem Ort, egal woher sie kommt.',
    points: [
      'Telefonbuchung in Sekunden: ein paar Ziffern der Nummer tippen',
      'Zeit blocken, mit Notiz und Farbe',
      'Direkt auf der Karte bestätigen, kassieren und No-Shows markieren',
    ],
  },
  th: {
    kicker: 'ปฏิทินเดียว',
    title: 'โทรศัพท์ หน้าจอง WhatsApp อีเมล ทุกอย่างมารวมที่นี่',
    lead: 'ปฏิทินหน้าร้านคือที่ทำงานประจำวันของคุณ พนักงานแต่ละคนมีสีของตัวเอง ทุกคิวอยู่ในที่เดียว ไม่ว่าจะมาจากช่องทางไหน',
    points: [
      'เพิ่มคิวจากโทรศัพท์ได้ในไม่กี่วินาที แค่พิมพ์เลขเบอร์ไม่กี่ตัว',
      'บล็อกเวลาพร้อมโน้ตและสี',
      'ยืนยัน รับชำระเงิน และบันทึกลูกค้าไม่มาตามนัดได้จากการ์ดคิว',
    ],
  },
}

interface CalendarSectionProps {
  lang: Lang
  /** Position in the page's story (the homepage order by default). */
  index?: number
}

export function CalendarSection({ lang, index = 2 }: CalendarSectionProps) {
  const t = COPY[lang]
  return (
    <FeatureSection
      id="calendar"
      index={index}
      kicker={t.kicker}
      title={t.title}
      lead={t.lead}
      points={t.points}
      demo={<CalendarDemo lang={lang} />}
    />
  )
}
