import type { Headline } from '@/lib/marketing/content/landing/types'
import { SectionHeader } from '../primitives/SectionHeader'
import styles from './Neighbourhoods.module.css'

interface NeighbourhoodsProps {
  kicker: string
  title: Headline
  items: { name: string; body: string }[]
}

/** Neighbourhood portraits: what booking looks like street by street. */
export function Neighbourhoods({ kicker, title, items }: NeighbourhoodsProps) {
  return (
    <section className="pad-y">
      <div className="wrap">
        <SectionHeader
          kicker={kicker}
          title={
            <>
              {title[0]} <span className="ghost-word">{title[1]}</span>
            </>
          }
        />
        <div className={styles.grid}>
          {items.map((n) => (
            <article key={n.name} data-reveal className={styles.item}>
              <h3 className={styles.name}>{n.name}</h3>
              <p className={styles.body}>{n.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
