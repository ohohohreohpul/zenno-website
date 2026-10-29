import type { Lang } from '@/lib/marketing/lang'
import { FeatureSection } from '../FeatureSection'
import { VouchersDemo } from './VouchersDemo'

const COPY: Record<Lang, { kicker: string; title: string; lead: string; points: string[] }> = {
  en: {
    kicker: 'More gift cards',
    title: 'Sell gift cards while you sleep.',
    lead: 'Gift cards are a last-minute buy: in the evening, on a phone, the week before a birthday or Christmas. With Zenno they sell online at any hour, and at the counter in three taps.',
    points: [
      'A gift card shop on your booking page, open day and night',
      'Value vouchers, voucher sets and multi-visit passes',
      'Paid by card or PayPal, each with its own QR code',
      'Redeemed by scan, the rest is paid at checkout',
    ],
  },
  de: {
    kicker: 'Mehr Gutscheine',
    title: 'Gutscheine verkaufen, während Sie schlafen.',
    lead: 'Gutscheine werden auf den letzten Drücker gekauft: abends, auf dem Handy, kurz vor dem Geburtstag oder vor Weihnachten. Mit Zenno verkaufen Sie sie online zu jeder Uhrzeit und an der Theke in drei Schritten.',
    points: [
      'Ein Gutschein-Shop auf Ihrer Buchungsseite, Tag und Nacht offen',
      'Wertgutscheine, Gutscheinsets und Mehrfachkarten',
      'Bezahlt per Karte oder PayPal, jeder mit eigenem QR-Code',
      'Per Scan eingelöst, der Rest wird an der Kasse bezahlt',
    ],
  },
  th: {
    kicker: 'ขายบัตรของขวัญได้มากขึ้น',
    title: 'ขายบัตรของขวัญได้แม้ตอนคุณหลับ',
    lead: 'บัตรของขวัญมักถูกซื้อแบบนาทีสุดท้าย ตอนค่ำ บนมือถือ ก่อนวันเกิดหรือคริสต์มาส กับ Zenno คุณขายออนไลน์ได้ทุกเวลา และขายที่เคาน์เตอร์ได้ในสามขั้นตอน',
    points: [
      'ร้านบัตรของขวัญบนหน้าจองของคุณ เปิดทั้งวันทั้งคืน',
      'บัตรมูลค่า เซ็ตบัตรของขวัญ และบัตรหลายครั้ง',
      'ชำระด้วยบัตรหรือ PayPal ทุกใบมี QR code ของตัวเอง',
      'สแกนเพื่อใช้บัตร ส่วนที่เหลือจ่ายตอนชำระเงิน',
    ],
  },
}

interface VouchersSectionProps {
  lang: Lang
  /** Position in the page's story (the homepage order by default). */
  index?: number
}

export function VouchersSection({ lang, index = 5 }: VouchersSectionProps) {
  const t = COPY[lang]
  return (
    <FeatureSection
      id="vouchers"
      index={index}
      kicker={t.kicker}
      title={t.title}
      lead={t.lead}
      points={t.points}
      tone="sand"
      isReversed
      demo={<VouchersDemo lang={lang} showMoney={false} />}
    />
  )
}
