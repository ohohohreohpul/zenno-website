import type { Headline } from '@/lib/marketing/content/landing/types'
import { SectionHeader } from '../primitives/SectionHeader'
import styles from './NicheChips.module.css'

interface NicheChipsProps {
  kicker: string
  title: Headline
  lead: string
  items: string[]
}

/** The kinds of business a page speaks to — scannable, so owners find themselves fast. */
export function NicheChips({ kicker, title, lead, items }: NicheChipsProps) {
  return (
    <section className={`pad-y ${styles.section}`}>
      <div className="wrap">
        <SectionHeader
          kicker={kicker}
          title={
            <>
              {title[0]} <span className="ghost-word">{title[1]}</span>
            </>
          }
          lead={lead}
        />
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item} data-reveal className={styles.chip}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
