import type { Metadata } from 'next'
import { homePath, localePath, type Lang } from '@/lib/marketing/lang'
import { COMPARE_STRINGS, COMPETITOR_IDS, COMPETITOR_NAME, HUB, comparePath } from '@/lib/marketing/content/compare'
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
import { SourceList } from './SourceList'
import styles from './CompareHub.module.css'

const PATH = comparePath()
const COLUMNS = ['zenno', ...COMPETITOR_IDS] as const

export function compareHubMetadata(lang: Lang): Metadata {
  const { meta } = HUB[lang]
  return pageMetadata({ lang, path: PATH, title: meta.title, description: meta.description })
}

/** /compare: every provider in one matrix, then links to each "Zenno vs X" page. */
export function CompareHub({ lang }: { lang: Lang }) {
  const c = HUB[lang]
  const t = COMPARE_STRINGS[lang]
  const name = (col: (typeof COLUMNS)[number]) => (col === 'zenno' ? 'Zenno' : COMPETITOR_NAME[col])

  return (
    <MarketingShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: t.home, path: homePath(lang) },
          { name: t.hubLabel, path: localePath(lang, PATH) },
        ])}
      />
      <JsonLd data={faqPageSchema(c.faq.items)} />
      <Nav lang={lang} onLightBg localizedPath={PATH} />
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
            <SectionHeader
              kicker={c.matrix.kicker}
              title={
                <>
                  {c.matrix.title[0]} <span className="ghost-word">{c.matrix.title[1]}</span>
                </>
              }
              lead={t.checked}
            />
            <div className={`card ${styles.scroller}`} data-reveal>
              <table className={styles.matrix}>
                <thead>
                  <tr>
                    <th scope="col">{t.topic}</th>
                    {COLUMNS.map((col) => (
                      <th key={col} scope="col" className={col === 'zenno' ? styles.zenno : undefined}>
                        {name(col)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {c.matrix.rows.map((row) => (
                    <tr key={row.topic}>
                      <th scope="row">{row.topic}</th>
                      {COLUMNS.map((col) => {
                        const source = col === 'zenno' ? undefined : row.sources?.[col]
                        return (
                          <td key={col} className={col === 'zenno' ? styles.zenno : undefined}>
                            {row.cells[col]}
                            {source !== undefined && (
                              <a href={`#source-${source + 1}`} className={styles.sourceMark}>
                                [{source + 1}]
                              </a>
                            )}
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="pad-y">
          <div className="wrap">
            <SectionHeader
              kicker={c.cards.kicker}
              title={
                <>
                  {c.cards.title[0]} <span className="ghost-word">{c.cards.title[1]}</span>
                </>
              }
            />
            <ul className={styles.cards}>
              {COMPETITOR_IDS.map((id) => (
                <li key={id} data-reveal>
                  <a href={localePath(lang, comparePath(id))} className={`card ${styles.card}`}>
                    <span className={styles.cardTitle}>Zenno vs {COMPETITOR_NAME[id]}</span>
                    <span className={styles.cardText}>{c.cards.summaries[id]}</span>
                    <span className="arrow" aria-hidden>
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Faq lang={lang} items={c.faq.items} heading={c.faq} />
        <SourceList lang={lang} sources={c.sources} themName={COMPETITOR_IDS.map((id) => COMPETITOR_NAME[id]).join(', ')} />
        <ClosingCta lang={lang} />
      </main>
      <Footer lang={lang} />
    </MarketingShell>
  )
}
