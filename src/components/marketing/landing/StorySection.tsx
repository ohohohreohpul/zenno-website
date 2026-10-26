import type { StoryBlock } from '@/lib/marketing/content/landing/types'
import { GlassNote } from './GlassNote'
import styles from './StorySection.module.css'

/** Editorial split: a tall photo with a glass note beside the page's longer story. */
export function StorySection({ kicker, title, paragraphs, image, imageAlt, note }: StoryBlock) {
  return (
    <section className={`pad-y ${styles.story}`}>
      <div className={`wrap ${styles.grid}`}>
        <figure data-reveal className={styles.figure}>
          <img src={image} alt={imageAlt} width={1200} height={1500} loading="lazy" decoding="async" className={styles.img} />
          {note && <GlassNote {...note} />}
        </figure>
        <div className={styles.copy}>
          <span data-reveal className="kicker">
            {kicker}
          </span>
          <h2 data-reveal className="title">
            {title[0]} <span className="ghost-word">{title[1]}</span>
          </h2>
          {paragraphs.map((p) => (
            <p key={p} data-reveal className={styles.para}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
