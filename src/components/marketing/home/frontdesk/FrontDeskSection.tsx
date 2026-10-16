import type { Lang } from '@/lib/marketing/lang'
import { FeatureSection } from '../FeatureSection'
import { FrontDeskDemo } from './FrontDeskDemo'

const COPY: Record<Lang, { kicker: string; title: string; lead: string }> = {
  en: {
    kicker: 'The front desk',
    title: 'The hardest job in the shop is the front desk.',
    lead: 'A guest writes at 11 pm. The phone rings in the middle of a massage. A voucher is sold on a paper slip. Your hands are busy, and every missed moment is a lost booking.',
  },
  de: {
    kicker: 'Der Empfang',
    title: 'Der schwierigste Job im Laden ist der Empfang.',
    lead: 'Ein Gast schreibt um 23 Uhr. Das Telefon klingelt mitten in der Massage. Ein Gutschein wird auf einem Zettel verkauft. Ihre Hände sind beschäftigt, und jeder verpasste Moment ist eine verlorene Buchung.',
  },
  th: {
    kicker: 'หน้าเคาน์เตอร์',
    title: 'งานที่ยากที่สุดในร้าน คืองานหน้าเคาน์เตอร์',
    lead: 'ลูกค้าทักมาตอนห้าทุ่ม โทรศัพท์ดังตอนกำลังนวด บัตรของขวัญขายบนเศษกระดาษ มือคุณไม่ว่าง และทุกครั้งที่พลาดคือคิวที่หายไป',
  },
}

interface FrontDeskSectionProps {
  lang: Lang
}

export function FrontDeskSection({ lang }: FrontDeskSectionProps) {
  const t = COPY[lang]
  return (
    <FeatureSection
      id="front-desk"
      index={1}
      kicker={t.kicker}
      title={t.title}
      lead={t.lead}
      layout="stacked"
      tone="sand"
      demo={<FrontDeskDemo lang={lang} />}
    />
  )
}
