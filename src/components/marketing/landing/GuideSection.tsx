import type { Guide } from '@/lib/marketing/content/guides'
import styles from './GuideSection.module.css'

/** The page's long-form guide: a sticky table of contents beside the chapters. */
export function GuideSection({ kicker, title, intro, tocLabel, sections }: Guide) {
  return (
    <section id="guide" className={`pad-y ${styles.section}`} aria-labelledby="guide-title">
      <div className={`wrap ${styles.grid}`}>
        <nav className={styles.toc} aria-label={tocLabel}>
          <span className="kicker">{tocLabel}</span>
          <ol className={styles.tocList}>
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className={styles.tocLink}>
                  {s.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <article className={styles.article}>
          <span data-reveal className="kicker">
            {kicker}
          </span>
          <h2 id="guide-title" data-reveal className="title">
            {title[0]} <span className="ghost-word">{title[1]}</span>
          </h2>
          <p data-reveal className={styles.intro}>
            {intro}
          </p>
          {sections.map((s) => (
            <div key={s.id} id={s.id} className={styles.chapter}>
              <h3 className={styles.heading}>{s.heading}</h3>
              {s.paragraphs.map((p) => (
                <p key={p} className={styles.para}>
                  {p}
                </p>
              ))}
              {s.bullets && (
                <ul className={styles.bullets}>
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </article>
      </div>
    </section>
  )
}
