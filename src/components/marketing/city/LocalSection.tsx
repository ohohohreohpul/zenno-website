import type { Headline } from '@/lib/marketing/content/landing/types'
import styles from './LocalSection.module.css'

interface LocalLink {
  label: string
  href: string
}

interface LocalSectionProps {
  kicker: string
  title: Headline
  paragraphs: string[]
  districtsLabel: string
  districts: string[]
  clienteleKicker: string
  clientele: string
  alsoLabel: string
  alsoLinks: LocalLink[]
}

/** The city-specific story: the local paragraphs, the neighbourhoods and who books there. */
export function LocalSection({
  kicker,
  title,
  paragraphs,
  districtsLabel,
  districts,
  clienteleKicker,
  clientele,
  alsoLabel,
  alsoLinks,
}: LocalSectionProps) {
  return (
    <section id="local" className={`pad-y ${styles.section}`}>
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.main}>
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
        <aside data-reveal className={`card ${styles.side}`}>
          <span className="kicker">{districtsLabel}</span>
          <ul className={styles.chips}>
            {districts.map((d) => (
              <li key={d} className={styles.chip}>
                {d}
              </li>
            ))}
          </ul>
          <span className="kicker">{clienteleKicker}</span>
          <p className={styles.clientele}>{clientele}</p>
          <span className="kicker">{alsoLabel}</span>
          <ul className={styles.links}>
            {alsoLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={styles.link}>
                  {l.label} <span className="arrow" aria-hidden>→</span>
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}
