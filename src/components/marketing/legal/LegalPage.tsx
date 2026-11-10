import '@/styles/marketing.css'
import type { Metadata } from 'next'
import { homePath, localePath, type Lang } from '@/lib/marketing/lang'
import { legalContent, type LegalSlug } from '@/lib/marketing/legal'
import type { LegalBlock } from '@/lib/marketing/legal/types'
import { breadcrumbSchema } from '@/lib/marketing/jsonld'
import { pageMetadata } from '@/lib/marketing/seo'
import { JsonLd } from '../JsonLd'
import { MarketingShell } from '../MarketingShell'
import { Nav } from '../Nav'
import { Footer } from '../Footer'
import styles from './LegalPage.module.css'

const HOME_LABEL: Record<Lang, string> = { de: 'Startseite', en: 'Home', th: 'หน้าแรก' }
const CONTENTS_LABEL: Record<Lang, string> = { de: 'Inhalt', en: 'Contents', th: 'สารบัญ' }

export function legalMetadata(lang: Lang, slug: LegalSlug): Metadata {
  const { meta } = legalContent(slug, lang)
  return pageMetadata({ lang, path: `/${slug}`, title: meta.title, description: meta.description })
}

const anchor = (i: number) => `s${i + 1}`

function Block({ block }: { block: LegalBlock }) {
  if ('p' in block) return <p>{block.p}</p>
  if ('list' in block) {
    return (
      <ul>
        {block.list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )
  }
  return (
    <address className={styles.lines}>
      {block.lines.map((line) => (
        <span key={line}>{line}</span>
      ))}
    </address>
  )
}

interface LegalPageProps {
  lang: Lang
  slug: LegalSlug
}

/** /privacy and /imprint: a plain reading page with a section index beside it on wide screens. */
export function LegalPage({ lang, slug }: LegalPageProps) {
  const doc = legalContent(slug, lang)
  const path = `/${slug}`

  return (
    <MarketingShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: HOME_LABEL[lang], path: homePath(lang) },
          { name: doc.label, path: localePath(lang, path) },
        ])}
      />
      <Nav lang={lang} onLightBg localizedPath={path} />
      <main className={styles.page}>
        <div className={`wrap ${styles.grid}`}>
          <header className={styles.head}>
            <span className="kicker">{doc.label}</span>
            <h1 className="title">{doc.title}</h1>
            {doc.updated && <p className={styles.updated}>{doc.updated}</p>}
            {doc.intro && <p className={styles.intro}>{doc.intro}</p>}
          </header>

          <nav className={styles.toc} aria-label={CONTENTS_LABEL[lang]}>
            <span className={styles.tocLabel}>{CONTENTS_LABEL[lang]}</span>
            <ol>
              {doc.sections.map((s, i) => (
                <li key={s.h}>
                  <a href={`#${anchor(i)}`}>{s.h.replace(/^\d+\.\s*/, '')}</a>
                </li>
              ))}
            </ol>
          </nav>

          <article className={styles.body}>
            {doc.sections.map((s, i) => (
              <section key={s.h} id={anchor(i)} className={styles.section}>
                <h2>{s.h}</h2>
                {s.blocks.map((b, j) => (
                  <Block key={j} block={b} />
                ))}
              </section>
            ))}
          </article>
        </div>
      </main>
      <Footer lang={lang} />
    </MarketingShell>
  )
}
