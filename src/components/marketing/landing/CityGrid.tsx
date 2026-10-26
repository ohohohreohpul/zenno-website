import { localePath, type Lang } from '@/lib/marketing/lang'
import { CITY_NAME, CITY_SLUGS, cityPath, cityThumb, type CityIndustry, type CitySlug } from '@/lib/marketing/cities'
import type { Headline } from '@/lib/marketing/content/landing/types'
import { SectionHeader } from '../primitives/SectionHeader'
import styles from './CityGrid.module.css'

interface CityGridProps {
  lang: Lang
  industry: CityIndustry
  kicker: string
  title: Headline
  /** The city whose page this grid sits on, left out of the grid. */
  exclude?: CitySlug
}

/** Photo tiles linking an industry's location pages, like a directory of cities. */
export function CityGrid({ lang, industry, kicker, title, exclude }: CityGridProps) {
  const cities = CITY_SLUGS.filter((c) => c !== exclude)
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
        />
        <ul className={styles.grid}>
          {cities.map((city) => (
            <li key={city} data-reveal>
              <a href={localePath(lang, cityPath(industry, city))} className={styles.tile}>
                <img src={cityThumb(industry, city)} alt="" width={720} height={407} loading="lazy" decoding="async" className={styles.img} />
                <span className={styles.shade} aria-hidden />
                <span className={styles.name}>
                  {CITY_NAME[city][lang]} <span className="arrow" aria-hidden>→</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
