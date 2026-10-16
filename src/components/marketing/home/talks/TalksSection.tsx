import type { Lang } from '@/lib/marketing/lang'
import { FeatureSection } from '../FeatureSection'
import { TalksDemo } from './TalksDemo'

const COPY: Record<Lang, { kicker: string; title: string; lead: string; points: string[] }> = {
  en: {
    kicker: 'Talks like you',
    title: 'Brief her like a new team member, or let her learn your tone from your website.',
    lead: 'Tell her who she is and how you want guests treated. She answers in German, English and Thai, in the language the guest writes in.',
    points: ['Choose how warm and how short she is', 'One click reads your website for prices, times and tone', 'You check and save before anything changes'],
  },
  de: {
    kicker: 'Spricht wie Sie',
    title: 'Briefen Sie sie wie eine neue Kollegin, oder sie lernt Ihren Ton von Ihrer Website.',
    lead: 'Sagen Sie ihr, wer sie ist und wie Gäste behandelt werden sollen. Sie antwortet auf Deutsch, Englisch und Thai, in der Sprache, in der der Gast schreibt.',
    points: ['Wählen Sie, wie herzlich und wie kurz sie ist', 'Ein Klick liest Ihre Website: Preise, Zeiten und Ton', 'Sie prüfen und speichern, bevor sich etwas ändert'],
  },
  th: {
    kicker: 'พูดเหมือนคุณ',
    title: 'บรีฟเธอเหมือนพนักงานใหม่ หรือให้เธอเรียนรู้น้ำเสียงของร้านจากเว็บไซต์',
    lead: 'บอกเธอว่าเธอเป็นใคร และอยากให้ดูแลลูกค้าแบบไหน เธอตอบเป็นภาษาเยอรมัน อังกฤษ และไทย ตามภาษาที่ลูกค้าพิมพ์มา',
    points: ['เลือกได้ว่าจะให้อบอุ่นหรือกระชับแค่ไหน', 'คลิกเดียว อ่านราคา เวลา และน้ำเสียงจากเว็บไซต์ของคุณ', 'คุณตรวจและกดบันทึกก่อนทุกครั้ง'],
  },
}

interface TalksSectionProps {
  lang: Lang
  /** Position in the page's story (the homepage order by default). */
  index?: number
}

export function TalksSection({ lang, index = 4 }: TalksSectionProps) {
  const t = COPY[lang]
  return (
    <FeatureSection
      id="talks-like-you"
      index={index}
      kicker={t.kicker}
      title={t.title}
      lead={t.lead}
      points={t.points}
      demo={<TalksDemo lang={lang} />}
    />
  )
}
