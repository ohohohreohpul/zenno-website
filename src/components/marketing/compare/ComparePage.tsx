import type { Metadata } from 'next'
import { homePath, localePath, type Lang } from '@/lib/marketing/lang'
import { COMPARE_STRINGS, COMPETITOR_NAME, compareContent, comparePath } from '@/lib/marketing/content/compare'
import { COMPETITOR_IDS, type CompetitorId, type FitColumn } from '@/lib/marketing/content/compare/types'
import { breadcrumbSchema, faqPageSchema } from '@/lib/marketing/jsonld'
import { pageMetadata } from '@/lib/marketing/seo'
import { JsonLd } from '../JsonLd'
import { MarketingShell } from '../MarketingShell'
import { Nav } from '../Nav'
import { Footer } from '../Footer'
import { PageHero } from '../PageHero'
import { SectionHeader } from '../primitives/SectionHeader'
import { Faq } from '../Faq'
import { ClosingCta } from '../ClosingCta'
import { CompareTable } from './CompareTable'
import { SourceList } from './SourceList'
import styles from './Compare.module.css'

export function compareMetadata(lang: Lang, id: CompetitorId): Metadata {
  const { meta } = compareContent(id, lang)
  return pageMetadata({ lang, path: comparePath(id), title: meta.title, description: meta.description })
}

interface ComparePageProps {
  lang: Lang
  id: CompetitorId
}

/** "Zenno vs X": who each one fits, a sourced table, switching, FAQ, sources. */
export function ComparePage({ lang, id }: ComparePageProps) {
  const c = compareContent(id, lang)
  const t = COMPARE_STRINGS[lang]
  const themName = COMPETITOR_NAME[id]
  const path = comparePath(id)

  return (
    <MarketingShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: t.home, path: homePath(lang) },
          { name: t.hubLabel, path: localePath(lang, comparePath()) },
          { name: c.label, path: localePath(lang, path) },
        ])}
      />
      <JsonLd data={faqPageSchema(c.faq.items)} />
      <Nav lang={lang} onLightBg localizedPath={path} />
      <main>
        <PageHero
          kicker={c.hero.kicker}
          title={
            <>
              {c.hero.title[0]} <span className="ghost-word">{c.hero.title[1]}</span>
            </>
          }
          lead={c.hero.lead}
        />

        <section className="pad-y">
          <div className="wrap">
            <SectionHeader kicker={c.fit.kicker} title={<HeadlineText value={c.fit.title} />} />
            <div className={styles.fit}>
              <FitList column={c.fit.zenno} isZenno />
              <FitList column={c.fit.them} />
            </div>
          </div>
        </section>

        <section className="pad-y">
          <div className="wrap">
            <SectionHeader kicker={c.table.kicker} title={<HeadlineText value={c.table.title} />} lead={t.checked} />
            <CompareTable rows={c.table.rows} sources={c.sources} topicLabel={t.topic} themName={themName} />
          </div>
        </section>

        {c.switching && (
          <section className="pad-y">
            <div className={`wrap ${styles.switching}`}>
              <SectionHeader kicker={c.switching.kicker} title={<HeadlineText value={c.switching.title} />} />
              <div className={styles.prose}>
                {c.switching.paragraphs.map((p) => (
                  <p key={p} data-reveal>
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </section>
        )}

        <Faq lang={lang} items={c.faq.items} heading={c.faq} />
        <SourceList lang={lang} sources={c.sources} themName={themName} />
        <OtherComparisons lang={lang} current={id} />
        <ClosingCta lang={lang} />
      </main>
      <Footer lang={lang} />
    </MarketingShell>
  )
}

function HeadlineText({ value }: { value: [string, string] }) {
  return (
    <>
      {value[0]} <span className="ghost-word">{value[1]}</span>
    </>
  )
}

function FitList({ column, isZenno = false }: { column: FitColumn; isZenno?: boolean }) {
  return (
    <div data-reveal className={`card ${styles.fitCard} ${isZenno ? styles.fitZenno : ''}`}>
      <h3 className={styles.fitTitle}>{column.title}</h3>
      <ul className={styles.fitList}>
        {column.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

/** Links to the hub and the other "Zenno vs X" pages. */
export function OtherComparisons({ lang, current }: { lang: Lang; current?: CompetitorId }) {
  const t = COMPARE_STRINGS[lang]
  const others = COMPETITOR_IDS.filter((id) => id !== current)
  return (
    <nav aria-label={t.otherLabel} className={`wrap ${styles.others}`}>
      <span className="kicker">{t.otherLabel}</span>
      <ul className={styles.otherList}>
        {current && (
          <li>
            <a href={localePath(lang, comparePath())} className={styles.otherLink}>
              {t.hubLabel} <span className="arrow" aria-hidden>→</span>
            </a>
          </li>
        )}
        {others.map((id) => (
          <li key={id}>
            <a href={localePath(lang, comparePath(id))} className={styles.otherLink}>
              Zenno vs {COMPETITOR_NAME[id]} <span className="arrow" aria-hidden>→</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
