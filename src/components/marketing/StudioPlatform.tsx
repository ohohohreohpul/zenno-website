import type { Lang } from '@/lib/marketing/lang'
import { STUDIO_PLATFORM, type Spotlight } from '@/lib/marketing/content/studioPlatform'
import { SectionHeader } from './primitives/SectionHeader'
import styles from './StudioPlatform.module.css'

interface StudioPlatformProps {
  lang?: Lang
}

/** The booking platform: no-show + tax spotlights, then the rest of the toolkit. */
export function StudioPlatform({ lang = 'en' }: StudioPlatformProps) {
  const t = STUDIO_PLATFORM[lang]

  return (
    <section id="features" className="pad-y">
      <div className="wrap">
        <SectionHeader
          kicker={t.kicker}
          title={
            <>
              {t.title[0]} <span className="ghost-word">{t.title[1]}</span>
            </>
          }
          lead={t.lead}
        />

        <div className={styles.spotlights}>
          <SpotlightCard spotlight={t.noShow} />
          <SpotlightCard spotlight={t.tax} />
        </div>

        <ul className={styles.features}>
          {t.features.map((f) => (
            <li key={f.title} data-reveal className={styles.feature}>
              <h3 className={styles.featureTitle}>
                {f.title}
                {f.tag && <span className={styles.tag}>{f.tag}</span>}
              </h3>
              <p className={styles.featureBody}>{f.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function SpotlightCard({ spotlight }: { spotlight: Spotlight }) {
  return (
    <article data-reveal className={`card ${styles.spotlight}`}>
      <span className={styles.spotKicker}>{spotlight.kicker}</span>
      <h3 className={`sub ${styles.spotTitle}`}>{spotlight.title}</h3>
      <p className={styles.spotBody}>{spotlight.body}</p>
      <SpotlightLedger spotlight={spotlight} />
    </article>
  )
}

/** The example ledger on its own — reused under the feature landing-page heroes. */
export function SpotlightLedger({ spotlight }: { spotlight: Spotlight }) {
  return (
    <figure className={styles.ledger}>
      <figcaption className={styles.ledgerLabel}>{spotlight.rowsLabel}</figcaption>
      <dl className={styles.rows}>
        {spotlight.rows.map((row) => (
          <div key={row.label} className={styles.row}>
            <dt>{row.label}</dt>
            <dd className={row.isPositive ? styles.positive : undefined}>{row.value}</dd>
          </div>
        ))}
      </dl>
    </figure>
  )
}
