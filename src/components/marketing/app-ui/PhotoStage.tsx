import type { ReactNode } from 'react'
import styles from './PhotoStage.module.css'

interface PhotoStageProps {
  image: string
  /** Empty when the photo is decoration only. */
  alt?: string
  width: number
  height: number
  /** Loads the photo early: only for the first screen. */
  isPriority?: boolean
  children?: ReactNode
  className?: string
}

/**
 * A calm photo panel from a real shop, with the app's screens layered on top.
 * The children position themselves inside it.
 */
export function PhotoStage({ image, alt = '', width, height, isPriority = false, children, className = '' }: PhotoStageProps) {
  return (
    <div className={`${styles.stage} ${className}`}>
      <img
        src={image}
        alt={alt}
        width={width}
        height={height}
        className={styles.photo}
        loading={isPriority ? 'eager' : 'lazy'}
        fetchPriority={isPriority ? 'high' : 'auto'}
        decoding="async"
      />
      {children}
    </div>
  )
}
