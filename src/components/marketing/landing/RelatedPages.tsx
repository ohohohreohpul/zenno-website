import { localePath, type Lang } from '@/lib/marketing/lang'
import { PAGE_LABEL, relatedSlugs, type PageSlug } from '@/lib/marketing/pages'
import styles from './RelatedPages.module.css'

const HEADING: Record<Lang, string> = { de: 'Mehr zu Zenno', en: 'More from Zenno', th: 'เพิ่มเติมเกี่ยวกับ Zenno' }

interface RelatedPagesProps {
  lang: Lang
  slug: PageSlug
}

/** Internal links to sibling pages — helps visitors and spreads link equity. */
export function RelatedPages({ lang, slug }: RelatedPagesProps) {
  return (
    <nav aria-label={HEADING[lang]} className={`wrap ${styles.related}`}>
      <span className="kicker">{HEADING[lang]}</span>
      <ul className={styles.list}>
        {relatedSlugs(slug).map((s) => (
          <li key={s}>
            <a href={localePath(lang, `/${s}`)} className={styles.link}>
              {PAGE_LABEL[s][lang]} <span className="arrow" aria-hidden>→</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
