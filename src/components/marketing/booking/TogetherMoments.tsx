import type { Lang } from '@/lib/marketing/lang'
import { TOGETHER_MOMENTS } from '@/lib/marketing/content/booking'
import { SectionHeader } from '../primitives/SectionHeader'
import styles from './TogetherMoments.module.css'

const STRINGS: Record<Lang, { kicker: string; titlePre: string; titleGhost: string; lead: string }> = {
  en: {
    kicker: 'Better together',
    titlePre: 'The receptionist talks.',
    titleGhost: 'Zenno Booking does the rest.',
    lead: 'Add the Zenno AI receptionist and your booking system starts working inside every conversation.',
  },
  de: {
    kicker: 'Besser zusammen',
    titlePre: 'Der Empfang spricht.',
    titleGhost: 'Zenno Booking erledigt den Rest.',
    lead: 'Mit dem Zenno KI-Empfang arbeitet Ihr Buchungssystem in jedem Gespräch mit.',
  },
}

interface TogetherMomentsProps {
  lang?: Lang
}

/** The "only possible together" moments: the AI in the chat, Zenno Booking behind it. */
export function TogetherMoments({ lang = 'en' }: TogetherMomentsProps) {
  const t = STRINGS[lang]
  return (
    <section id="together" className={`pad-y ${styles.section}`}>
      <div className="wrap">
        <SectionHeader
          kicker={t.kicker}
          title={
            <>
              {t.titlePre} <span className={styles.ghostOnDark}>{t.titleGhost}</span>
            </>
          }
          lead={t.lead}
        />

        <div className={styles.grid}>
          {TOGETHER_MOMENTS[lang].map((m) => (
            <article key={m.tag} data-reveal className={styles.moment}>
              <div className={styles.chat} aria-hidden>
                <p className={`${styles.bubble} ${styles.me}`}>{m.chat.me}</p>
                <p className={`${styles.bubble} ${styles.bot}`}>{m.chat.bot}</p>
              </div>
              <span className={styles.tag}>{m.tag}</span>
              <h3 className={styles.title}>{m.title}</h3>
              <p className={styles.body}>{m.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
