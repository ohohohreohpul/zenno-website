import '@/styles/marketing.css'
import '@/styles/zenno-ui.css'
import type { Metadata } from 'next'
import { homePath, type Lang } from '@/lib/marketing/lang'
import { lpCopy } from '@/lib/marketing/content/lp'
import { pageMetadata } from '@/lib/marketing/seo'
import { MarketingShell } from '../MarketingShell'
import { Faq } from '../Faq'
import { Footer } from '../Footer'
import { LpCheck, LpDoesWork, LpHero, LpStat } from './LpTop'
import { LpExamples, LpFinal, LpPricing, LpReception, LpStudios } from './LpBottom'
import styles from './Lp.module.css'

const PATH = '/lp/studio'

export function landingMetadata(lang: Lang): Metadata {
  const { meta } = lpCopy(lang)
  return { ...pageMetadata({ lang, path: PATH, title: meta.title, description: meta.description }), robots: { index: false, follow: true } }
}

/**
 * /lp/studio: the paid-ads landing page. Long-form funnel, no site nav to leak
 * clicks: problem → Zenno does the work → example check → proof → pricing → FAQ → CTA.
 */
export function LandingPage({ lang }: { lang: Lang }) {
  const t = lpCopy(lang)
  const props = { lang, t }
  return (
    <MarketingShell>
      <header className={styles.top}>
        <a href={homePath(lang)} aria-label="Zenno">
          <img src="/logo/wordmark-black.svg" alt="Zenno" width={104} height={29} />
        </a>
      </header>
      <main className={styles.page}>
        <LpHero {...props} />
        <LpDoesWork {...props} />
        <LpStat {...props} />
        <LpCheck {...props} />
        <LpReception {...props} />
        <LpStudios {...props} />
        <LpExamples {...props} />
        <LpPricing {...props} />
        <Faq lang={lang} />
        <LpFinal {...props} />
      </main>
      <Footer lang={lang} />
    </MarketingShell>
  )
}
