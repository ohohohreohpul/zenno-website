import type { ReactNode } from 'react'
import { Check } from 'lucide-react'
import styles from './FeatureSection.module.css'

interface FeatureSectionProps {
  id: string
  /** Position in the story, shown as "03". */
  index: number
  kicker: string
  title: string
  lead: string
  points?: readonly string[]
  /** The live screen that proves the claim. */
  demo: ReactNode
  /** Puts the demo on the left. */
  isReversed?: boolean
  tone?: 'paper' | 'sand'
  /** Wide demos sit under the text instead of beside it. */
  layout?: 'split' | 'stacked'
  footnote?: ReactNode
}

/**
 * One chapter of the homepage story: a short claim on one side, the real
 * screen that shows it on the other.
 */
export function FeatureSection({
  id,
  index,
  kicker,
  title,
  lead,
  points,
  demo,
  isReversed = false,
  tone = 'paper',
  layout = 'split',
  footnote,
}: FeatureSectionProps) {
  const headingId = `${id}-heading`
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`${styles.section} ${tone === 'sand' ? styles.sand : ''}`}
    >
      <div className={`wrap ${styles.grid} ${styles[layout]} ${isReversed ? styles.reversed : ''}`}>
        <div className={styles.copy}>
          <span data-reveal className={styles.kicker}>
            <b className="tabular">{String(index).padStart(2, '0')}</b>
            {kicker}
          </span>
          <h2 data-reveal id={headingId} className={styles.title}>
            {title}
          </h2>
          <p data-reveal className={styles.lead}>
            {lead}
          </p>
          {points && (
            <ul data-reveal className={styles.points}>
              {points.map((p) => (
                <li key={p}>
                  <Check size={16} strokeWidth={2.25} aria-hidden />
                  {p}
                </li>
              ))}
            </ul>
          )}
          {footnote && <div data-reveal>{footnote}</div>}
        </div>
        <div data-reveal className={styles.demo}>
          {demo}
        </div>
      </div>
    </section>
  )
}
