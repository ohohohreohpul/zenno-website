import type { Lang } from '@/lib/marketing/lang'
import { TourPlayer } from './TourPlayer'
import styles from './Tour.module.css'

const COPY: Record<Lang, { kicker: string; title: string; lead: string }> = {
  en: {
    kicker: 'The tour',
    title: 'A day at the front desk, in 30 seconds.',
    lead: 'Press any step to jump to it, or let it play.',
  },
  de: {
    kicker: 'Die Tour',
    title: 'Ein Tag am Empfang, in 30 Sekunden.',
    lead: 'Tippen Sie auf einen Schritt, um hinzuspringen, oder lassen Sie es laufen.',
  },
  th: {
    kicker: 'ทัวร์',
    title: 'หนึ่งวันที่หน้าเคาน์เตอร์ ใน 30 วินาที',
    lead: 'กดที่ขั้นตอนไหนก็ได้เพื่อข้ามไปดู หรือปล่อยให้เล่นต่อไป',
  },
}

interface TourSectionProps {
  lang: Lang
}

/** The product film, rebuilt as a clickable tour of the real screens. */
export function TourSection({ lang }: TourSectionProps) {
  const t = COPY[lang]
  return (
    <section id="tour" className={styles.section} aria-labelledby="tour-heading">
      <div className="wrap">
        <div className={styles.head}>
          <span data-reveal className={styles.kicker}>
            {t.kicker}
          </span>
          <h2 data-reveal id="tour-heading" className={styles.title}>
            {t.title}
          </h2>
          <p data-reveal className={styles.lead}>
            {t.lead}
          </p>
        </div>
        <div data-reveal>
          <TourPlayer lang={lang} />
        </div>
      </div>
    </section>
  )
}
