import type { Lang } from '@/lib/marketing/lang'
import { FeatureSection } from '../FeatureSection'
import { RegularsDemo } from './RegularsDemo'

const COPY: Record<Lang, { kicker: string; title: string; lead: string; points: string[] }> = {
  en: {
    kicker: 'More regulars',
    title: 'Guests rarely leave over the treatment. They drift away.',
    lead: 'No free slot when they wanted one, a phone call to move an appointment, no reason to come back. Zenno takes those reasons away, so first-time guests turn into regulars.',
    points: [
      'Guests see their history and rebook without calling you',
      'Reminders by SMS and email, so nobody forgets',
      'Loyalty points on every visit, built in',
      'Questions answered right away, even mid-treatment',
    ],
  },
  de: {
    kicker: 'Mehr Stammkundschaft',
    title: 'Gäste gehen selten wegen der Behandlung. Sie verlaufen sich.',
    lead: 'Kein freier Termin, als sie einen wollten, ein Anruf, um umzubuchen, kein Grund wiederzukommen. Zenno nimmt diese Gründe weg, damit aus neuen Gästen Stammgäste werden.',
    points: [
      'Gäste sehen ihre Termine und buchen neu, ohne anzurufen',
      'Erinnerungen per SMS und E-Mail, damit niemand vergisst',
      'Treuepunkte bei jedem Besuch, direkt eingebaut',
      'Fragen sofort beantwortet, auch mitten in der Behandlung',
    ],
  },
  th: {
    kicker: 'ลูกค้าประจำมากขึ้น',
    title: 'ลูกค้าไม่ค่อยเลิกมาเพราะบริการ แต่ค่อยๆ ห่างหายไปเอง',
    lead: 'ไม่มีคิวว่างตอนที่อยากมา ต้องโทรมาเลื่อนนัด ไม่มีเหตุผลให้กลับมา Zenno ช่วยลบเหตุผลเหล่านั้น ให้ลูกค้าใหม่กลายเป็นลูกค้าประจำ',
    points: [
      'ลูกค้าดูประวัติและจองซ้ำได้เอง ไม่ต้องโทรหาคุณ',
      'แจ้งเตือนทาง SMS และอีเมล ไม่มีใครลืมนัด',
      'แต้มสะสมทุกครั้งที่มาใช้บริการ มีในระบบอยู่แล้ว',
      'ตอบคำถามทันที แม้คุณกำลังให้บริการอยู่',
    ],
  },
}

interface RegularsSectionProps {
  lang: Lang
  /** Position in the page's story. */
  index: number
}

export function RegularsSection({ lang, index }: RegularsSectionProps) {
  const t = COPY[lang]
  return (
    <FeatureSection
      id="regulars"
      index={index}
      kicker={t.kicker}
      title={t.title}
      lead={t.lead}
      points={t.points}
      demo={<RegularsDemo lang={lang} />}
    />
  )
}
