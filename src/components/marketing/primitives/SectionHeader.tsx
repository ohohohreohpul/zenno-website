import type { ReactNode } from 'react'
import styles from './SectionHeader.module.css'

interface SectionHeaderProps {
  kicker: string
  title: ReactNode
  lead?: ReactNode
  align?: 'left' | 'center'
  /** Heading level for the title; page-top headers pass 'h1'. */
  as?: 'h1' | 'h2'
}

export function SectionHeader({ kicker, title, lead, align = 'left', as: Heading = 'h2' }: SectionHeaderProps) {
  return (
    <div className={`${styles.head} ${align === 'center' ? styles.center : ''}`}>
      <span data-reveal className="kicker">
        {kicker}
      </span>
      <Heading data-reveal className="title">
        {title}
      </Heading>
      {lead && (
        <p data-reveal className={`lead ${styles.lead}`}>
          {lead}
        </p>
      )}
    </div>
  )
}
