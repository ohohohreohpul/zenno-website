import { BellRing } from 'lucide-react'
import { STEP_IMAGE, type VisualKey } from './quizVisuals'
import styles from './Check.module.css'

interface StepVisualProps {
  screen: VisualKey
  chip: string
}

/** The photo beside the question, with a small frosted app notification that fits the question. */
export function StepVisual({ screen, chip }: StepVisualProps) {
  return (
    <div className={styles.visual} aria-hidden>
      {/* Keyed by screen so each change fades the next photo in. */}
      <img key={screen} src={STEP_IMAGE[screen]} alt="" width={1200} height={800} className={styles.visualImg} decoding="async" />
      <div key={`chip-${screen}`} className={styles.chip}>
        <span className={styles.chipIcon}>
          <BellRing size={16} />
        </span>
        <span className={styles.chipText}>
          <b>Zenno</b>
          <span>{chip}</span>
        </span>
      </div>
    </div>
  )
}
