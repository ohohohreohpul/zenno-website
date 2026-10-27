import type { Headline, Scene } from '@/lib/marketing/content/landing/types'
import { SectionHeader } from '../primitives/SectionHeader'
import { GlassNote } from './GlassNote'
import styles from './SceneRows.module.css'

interface SceneRowsProps {
  kicker: string
  title: Headline
  items: Scene[]
}

/** Alternating photo rows: each one moment of the working day, with the app's part in it. */
export function SceneRows({ kicker, title, items }: SceneRowsProps) {
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
        <ol className={styles.rows}>
          {items.map((scene, i) => (
            <li key={scene.title} className={`${styles.row} ${i % 2 === 1 ? styles.flip : ''}`}>
              <figure data-reveal className={styles.figure}>
                <img src={scene.image} alt={scene.imageAlt} width={1200} height={900} loading="lazy" decoding="async" className={styles.img} />
                <GlassNote {...scene.note} />
              </figure>
              <div data-reveal className={styles.copy}>
                <span className={styles.index}>{String(i + 1).padStart(2, '0')}</span>
                <h3 className={styles.title}>{scene.title}</h3>
                <p className={styles.body}>{scene.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
