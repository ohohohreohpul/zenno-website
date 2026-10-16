import type { Lang } from '@/lib/marketing/lang'
import { HOMEPAGE_FAQ, type FaqItem } from '@/lib/marketing/content/faq'
import { HELP_URL, SUPPORT_EMAIL } from '@/lib/marketing/config'
import { SectionHeader } from './primitives/SectionHeader'
import { FaqAccordion } from './primitives/FaqAccordion'
import styles from './Faq.module.css'

interface FaqStrings {
  kicker: string
  titlePre: string
  titleGhost: string
  lead: string
  helpTitle: string
  helpDocs: string
  helpMail: string
}

const STRINGS: Record<Lang, FaqStrings> = {
  en: {
    kicker: 'Questions',
    titlePre: 'Straight answers',
    titleGhost: 'to the real worries.',
    lead: 'What owners ask us before they switch.',
    helpTitle: 'Still unsure?',
    helpDocs: 'Help centre',
    helpMail: 'Write to us',
  },
  de: {
    kicker: 'Fragen',
    titlePre: 'Klare Antworten',
    titleGhost: 'auf die echten Sorgen.',
    lead: 'Was Inhaberinnen und Inhaber uns fragen, bevor sie wechseln.',
    helpTitle: 'Noch Fragen?',
    helpDocs: 'Hilfe-Center',
    helpMail: 'Schreiben Sie uns',
  },
  th: {
    kicker: 'คำถาม',
    titlePre: 'ตอบตรงๆ',
    titleGhost: 'ทุกเรื่องที่กังวล',
    lead: 'สิ่งที่เจ้าของร้านถามเราก่อนเปลี่ยนมาใช้',
    helpTitle: 'ยังมีคำถามอยู่ไหม',
    helpDocs: 'ศูนย์ช่วยเหลือ',
    helpMail: 'ส่งข้อความหาเรา',
  },
}

interface FaqProps {
  lang?: Lang
  /** Questions to show; defaults to the homepage FAQ. */
  items?: FaqItem[]
  /** Section heading; defaults to the homepage FAQ heading. */
  heading?: { kicker: string; title: [string, string]; lead?: string }
}

export function Faq({ lang = 'en', items = HOMEPAGE_FAQ[lang], heading }: FaqProps) {
  const base = STRINGS[lang]
  const t = heading
    ? { ...base, kicker: heading.kicker, titlePre: heading.title[0], titleGhost: heading.title[1], lead: heading.lead ?? '' }
    : base

  return (
    <section id="faq" className="pad-y">
      <div className={`wrap ${styles.layout}`}>
        <div className={styles.left}>
          <SectionHeader
            kicker={t.kicker}
            title={
              <>
                {t.titlePre} <span className="ghost-word">{t.titleGhost}</span>
              </>
            }
            lead={t.lead || undefined}
          />
          <div data-reveal className={styles.help}>
            <span className={styles.helpTitle}>{t.helpTitle}</span>
            <a href={HELP_URL}>
              {t.helpDocs} <span>docs.zennohq.com</span>
            </a>
            <a href={`mailto:${SUPPORT_EMAIL}`}>
              {t.helpMail} <span>{SUPPORT_EMAIL}</span>
            </a>
          </div>
        </div>

        <FaqAccordion items={items} />
      </div>
    </section>
  )
}
