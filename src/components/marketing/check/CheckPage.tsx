import '@/styles/marketing.css'
import type { Metadata } from 'next'
import type { Lang } from '@/lib/marketing/lang'
import { START_URL } from '@/lib/marketing/config'
import { checkCopy } from '@/lib/marketing/content/check'
import { pageMetadata } from '@/lib/marketing/seo'
import { MarketingShell } from '../MarketingShell'
import { Nav } from '../Nav'
import { Footer } from '../Footer'
import { Quiz } from './Quiz'
import styles from './Check.module.css'

const PATH = '/check'

export function checkMetadata(lang: Lang): Metadata {
  const { meta } = checkCopy(lang)
  return pageMetadata({ lang, path: PATH, title: meta.title, description: meta.description })
}

/** /check: the Studio-Check quiz, the landing page for paid ads. */
export function CheckPage({ lang }: { lang: Lang }) {
  return (
    <MarketingShell>
      <Nav lang={lang} onLightBg localizedPath={PATH} />
      <main className={styles.page}>
        <div className="wrap">
          <Quiz lang={lang} startUrl={START_URL} />
        </div>
      </main>
      <Footer lang={lang} />
    </MarketingShell>
  )
}
