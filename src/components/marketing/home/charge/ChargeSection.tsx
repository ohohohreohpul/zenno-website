import type { Lang } from '@/lib/marketing/lang'
import { FeatureSection } from '../FeatureSection'
import { ChargeDemo } from './ChargeDemo'

const COPY: Record<Lang, { kicker: string; title: string; lead: string; points: string[] }> = {
  en: {
    kicker: 'You stay in charge',
    title: 'It never guesses. Prices, times and offers come from your app.',
    lead: 'Every chat is in one inbox. When she is unsure, or a guest complains or asks about health, the chat comes to you.',
    points: [
      'Only your prices, times and offers, nothing invented',
      'Draft mode: approve each reply before it is sent',
      'Handover on complaints and health questions',
      'Answers guests who wrote to you. Bulk messages go out slowly, only to people who agreed.',
    ],
  },
  de: {
    kicker: 'Sie behalten die Kontrolle',
    title: 'Sie rät nie. Preise, Zeiten und Angebote kommen aus Ihrer App.',
    lead: 'Jeder Chat steht in einem Posteingang. Wenn sie unsicher ist, ein Gast sich beschwert oder nach Gesundheit fragt, geht der Chat an Sie.',
    points: [
      'Nur Ihre Preise, Zeiten und Angebote, nichts erfunden',
      'Entwurfsmodus: jede Antwort vor dem Senden freigeben',
      'Übergabe bei Beschwerden und Gesundheitsfragen',
      'Antwortet Gästen, die Ihnen geschrieben haben. Rundnachrichten gehen langsam raus, nur an Gäste, die zugestimmt haben.',
    ],
  },
  th: {
    kicker: 'คุณยังเป็นคนตัดสินใจ',
    title: 'เธอไม่เดา ราคา เวลา และโปรโมชันมาจากแอปของคุณ',
    lead: 'ทุกแชทอยู่ในกล่องข้อความเดียว เมื่อเธอไม่แน่ใจ หรือมีลูกค้าร้องเรียนหรือถามเรื่องสุขภาพ แชทจะส่งมาที่คุณ',
    points: [
      'ใช้เฉพาะราคา เวลา และโปรโมชันของร้าน ไม่แต่งเอง',
      'โหมดร่างข้อความ: อนุมัติทุกคำตอบก่อนส่ง',
      'ส่งต่อให้คุณเมื่อมีเรื่องร้องเรียนหรือคำถามสุขภาพ',
      'ตอบลูกค้าที่ทักมาหาร้าน ข้อความถึงหลายคนส่งช้าๆ และส่งเฉพาะคนที่ยินยอมเท่านั้น',
    ],
  },
}

interface ChargeSectionProps {
  lang: Lang
  /** Position in the page's story (the homepage order by default). */
  index?: number
}

export function ChargeSection({ lang, index = 6 }: ChargeSectionProps) {
  const t = COPY[lang]
  return (
    <FeatureSection
      id="in-charge"
      index={index}
      kicker={t.kicker}
      title={t.title}
      lead={t.lead}
      points={t.points}
      demo={<ChargeDemo lang={lang} />}
    />
  )
}
