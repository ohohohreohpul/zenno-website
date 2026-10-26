import type { PhotoNote } from '@/lib/marketing/content/landing/types'
import styles from './GlassNote.module.css'

/** A frosted-glass caption laid over a photo — a sliver of the app on the scene. */
export function GlassNote({ label, value }: PhotoNote) {
  return (
    <div className={styles.note}>
      <span className={styles.dot} aria-hidden />
      <span className={styles.label}>{label}</span>
      <span className={styles.value}>{value}</span>
    </div>
  )
}
