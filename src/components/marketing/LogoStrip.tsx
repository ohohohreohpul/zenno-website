import type { Lang } from '@/lib/marketing/lang'
import styles from './LogoStrip.module.css'

const STRINGS: Record<
  Lang,
  {
    label: string
    cities: string[]
    foot: string
  }
> = {
  en: {
    label: 'Trusted by 140+ wellness & beauty businesses across 14 German cities',
    cities: [
      'Berlin',
      'Munich',
      'Hamburg',
      'Cologne',
      'Frankfurt',
      'Düsseldorf',
      'Stuttgart',
      'Leipzig',
    ],
    foot: 'In a nationwide market of 82,000+ salons, spas & studios — from yoga rooms to day spas.',
  },
  de: {
    label: 'Vertraut von 140+ Wellness- und Beauty-Betrieben in 14 deutschen Städten',
    cities: [
      'Berlin',
      'München',
      'Hamburg',
      'Köln',
      'Frankfurt',
      'Düsseldorf',
      'Stuttgart',
      'Leipzig',
    ],
    foot: 'In einem Markt mit über 82.000 Salons, Spas & Studios bundesweit — vom Yogaraum bis zur Tages spa.',
  },
}

interface LogoStripProps {
  lang?: Lang
}

export function LogoStrip({ lang = 'en' }: LogoStripProps) {
  const t = STRINGS[lang]

  return (
    <section className={styles.section}>
      <div className={`wrap ${styles.inner}`}>
        <span data-reveal className={styles.label}>
          {t.label}
        </span>
        <ul className={styles.row}>
          {t.cities.map((c) => (
            <li key={c} data-reveal className={styles.logo}>
              {c}
            </li>
          ))}
        </ul>
        <span data-reveal className={styles.foot}>
          {t.foot}
        </span>
      </div>
    </section>
  )
}
