import type { ReactNode } from 'react'
import { SectionHeader } from './primitives/SectionHeader'
import styles from './PageHero.module.css'

interface PageHeroProps {
  kicker: string
  title: ReactNode
  lead?: ReactNode
  /** Optional buttons under the lead. */
  actions?: ReactNode
}

/** Text-only page-top header (h1) for pages that don't carry a photo hero. */
export function PageHero({ kicker, title, lead, actions }: PageHeroProps) {
  return (
    <section id="top" className={styles.hero}>
      <div className="wrap">
        <SectionHeader as="h1" align="center" kicker={kicker} title={title} lead={lead} />
        {actions && (
          <div data-reveal className={styles.actions}>
            {actions}
          </div>
        )}
      </div>
    </section>
  )
}
