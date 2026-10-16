import type { Lang } from '@/lib/marketing/lang'
import { FeatureSection } from '../FeatureSection'
import { VouchersDemo } from './VouchersDemo'

const COPY: Record<Lang, { kicker: string; title: string; lead: string; points: string[] }> = {
  en: {
    kicker: 'Vouchers and money',
    title: 'Sell vouchers at the counter in three taps. Redeem by QR.',
    lead: 'Value vouchers, voucher sets and multi-visit passes, sold online or at the counter. The money side is handled too.',
    points: [
      'Card, PayPal or pay at the venue',
      'No-show fees, charged from the booking',
      'A cash book and a DATEV export for your tax advisor',
      'Invoices sent by email',
    ],
  },
  de: {
    kicker: 'Gutscheine und Geld',
    title: 'Gutscheine an der Theke in drei Schritten verkaufen. Per QR einlösen.',
    lead: 'Wertgutscheine, Gutscheinsets und Mehrfachkarten, online oder an der Theke verkauft. Auch die Geldseite ist erledigt.',
    points: [
      'Karte, PayPal oder Zahlung vor Ort',
      'No-Show-Gebühren, direkt aus der Buchung',
      'Kassenbuch und DATEV-Export für Ihre Steuerberatung',
      'Rechnungen per E-Mail',
    ],
  },
  th: {
    kicker: 'บัตรของขวัญและการเงิน',
    title: 'ขายบัตรของขวัญที่เคาน์เตอร์ได้ในสามขั้นตอน ใช้งานด้วย QR',
    lead: 'บัตรมูลค่า เซ็ตบัตรของขวัญ และบัตรหลายครั้ง ขายได้ทั้งออนไลน์และที่เคาน์เตอร์ เรื่องเงินก็จัดการให้ครบ',
    points: [
      'บัตร PayPal หรือจ่ายที่ร้าน',
      'เรียกเก็บค่าปรับไม่มาตามนัดจากการจองได้เลย',
      'สมุดเงินสดและไฟล์ส่งออก DATEV สำหรับนักบัญชี',
      'ส่งใบแจ้งหนี้ทางอีเมล',
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
      demo={<VouchersDemo lang={lang} />}
    />
  )
}
