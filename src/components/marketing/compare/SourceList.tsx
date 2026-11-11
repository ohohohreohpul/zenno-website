import type { Lang } from '@/lib/marketing/lang'
import { COMPARE_STRINGS } from '@/lib/marketing/content/compare'
import type { Source } from '@/lib/marketing/content/compare/types'
import styles from './Compare.module.css'

interface SourceListProps {
  lang: Lang
  sources: Source[]
  /** Brand(s) named on the page, for the trademark note. */
  themName: string
}

/** Numbered sources behind the table, the check date and a correction contact. */
export function SourceList({ lang, sources, themName }: SourceListProps) {
  const t = COMPARE_STRINGS[lang]
  return (
    <section className={`wrap ${styles.sources}`} aria-labelledby="compare-sources">
      <h2 id="compare-sources" className="kicker">
        {t.sourcesTitle}
      </h2>
      <ol className={styles.sourceList}>
        {sources.map((s, i) => (
          <li key={s.href} id={`source-${i + 1}`}>
            <a href={s.href} target="_blank" rel="noopener noreferrer nofollow">
              {s.label}
            </a>
          </li>
        ))}
      </ol>
      <p className={styles.disclaimer}>{t.disclaimer(themName)}</p>
    </section>
  )
}
