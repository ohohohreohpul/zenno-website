import type { Lang } from '@/lib/marketing/lang'
import { HELP_URL } from '@/lib/marketing/config'
import { FeatureSection } from '../FeatureSection'
import { SwitchingDemo } from './SwitchingDemo'
import styles from './Switching.module.css'

const COPY: Record<Lang, { kicker: string; title: string; lead: string; points: string[]; guides: string }> = {
  en: {
    kicker: 'Switching is easy',
    title: 'Move from your old tool in an afternoon.',
    lead: 'Import customers, appointments and blocked times from EasyWeek, Shore or Treatwell. If you can use WhatsApp, you can use Zenno.',
    points: ['The app in German, English or Thai, switch any time', 'Guides in German, English and Thai'],
    guides: 'Step-by-step guides in the help centre',
  },
  de: {
    kicker: 'Einfach wechseln',
    title: 'Vom alten Tool umziehen, an einem Nachmittag.',
    lead: 'Importieren Sie Kunden, Termine und geblockte Zeiten aus EasyWeek, Shore oder Treatwell. Wer WhatsApp bedienen kann, kann auch Zenno.',
    points: ['Die App auf Deutsch, Englisch oder Thai, jederzeit umstellbar', 'Anleitungen auf Deutsch, Englisch und Thai'],
    guides: 'Schritt-für-Schritt-Anleitungen im Hilfe-Center',
  },
  th: {
    kicker: 'ย้ายมาง่าย',
    title: 'ย้ายจากระบบเดิมได้ในบ่ายเดียว',
    lead: 'นำเข้าลูกค้า นัดหมาย และเวลาที่บล็อกไว้จาก EasyWeek, Shore หรือ Treatwell ถ้าใช้ WhatsApp เป็น ก็ใช้ Zenno ได้',
    points: ['ใช้แอปเป็นภาษาเยอรมัน อังกฤษ หรือไทย เปลี่ยนได้ทุกเมื่อ', 'มีคู่มือภาษาเยอรมัน อังกฤษ และไทย'],
    guides: 'คู่มือทีละขั้นตอนในศูนย์ช่วยเหลือ',
  },
}

interface SwitchingSectionProps {
  lang: Lang
  /** Position in the page's story (the homepage order by default). */
  index?: number
}

export function SwitchingSection({ lang, index = 7 }: SwitchingSectionProps) {
  const t = COPY[lang]
  return (
    <FeatureSection
      id="switching"
      index={index}
      kicker={t.kicker}
      title={t.title}
      lead={t.lead}
      points={t.points}
      tone="sand"
      isReversed
      demo={<SwitchingDemo lang={lang} />}
      footnote={
        <a href={HELP_URL} className={styles.guides}>
          {t.guides} → <span>docs.zennohq.com</span>
        </a>
      }
    />
  )
}
