import '@/styles/zenno-ui.css'
import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { homePath, localePath, type Lang } from '@/lib/marketing/lang'
import { FEATURE_PAGES, type FeaturePageSlug } from '@/lib/marketing/content/featurePages'
import { FEATURE_SCENES } from '@/lib/marketing/content/featureScenes'
import { bookingApplicationSchema, breadcrumbSchema, faqPageSchema } from '@/lib/marketing/jsonld'
import { pageMetadata } from '@/lib/marketing/seo'
import { JsonLd } from '../JsonLd'
import { MarketingShell } from '../MarketingShell'
import { Nav } from '../Nav'
import { Footer } from '../Footer'
import { Faq } from '../Faq'
import { ClosingCta } from '../ClosingCta'
import { HeroDemo } from '../home/hero/HeroDemo'
import { PhotoHero } from '../home/photo-hero/PhotoHero'
import { TalksSection } from '../home/talks/TalksSection'
import { BooksSection } from '../home/books/BooksSection'
import { ChargeSection } from '../home/charge/ChargeSection'
import { CalendarSection } from '../home/calendar/CalendarSection'
import { VouchersDemo } from '../home/vouchers/VouchersDemo'
import { StorySection } from '../landing/StorySection'
import { GuideSection } from '../landing/GuideSection'
import { guideContent } from '@/lib/marketing/content/guides'
import styles from './FeaturePage.module.css'

const HOME_LABEL: Record<Lang, string> = { de: 'Start', en: 'Home', th: 'หน้าแรก' }

export function featurePageMetadata(lang: Lang, slug: FeaturePageSlug): Metadata {
  const { meta } = FEATURE_PAGES[slug][lang]
  return pageMetadata({ lang, path: `/${slug}`, title: meta.title, description: meta.description })
}

/** The screen under each page's headline, and the anchor its second button scrolls to. */
const HERO_VISUAL: Record<FeaturePageSlug, { anchor: string; render: (lang: Lang) => ReactNode }> = {
  'ai-receptionist': { anchor: '#talks-like-you', render: (lang) => <HeroDemo lang={lang} /> },
  vouchers: { anchor: '#books-itself', render: (lang) => <VouchersDemo lang={lang} /> },
}

function sections(slug: FeaturePageSlug, lang: Lang): ReactNode {
  if (slug === 'ai-receptionist') {
    return (
      <>
        <TalksSection lang={lang} index={1} />
        <BooksSection lang={lang} index={2} />
        <ChargeSection lang={lang} index={3} />
      </>
    )
  }
  return (
    <>
      <BooksSection lang={lang} index={1} />
      <CalendarSection lang={lang} index={2} />
    </>
  )
}

interface FeaturePageProps {
  lang: Lang
  slug: FeaturePageSlug
}

/** A feature page: headline and live screen, the matching homepage chapters, FAQ. */
export function FeaturePage({ lang, slug }: FeaturePageProps) {
  const c = FEATURE_PAGES[slug][lang]
  const visual = HERO_VISUAL[slug]
  const scenes = FEATURE_SCENES[slug][lang]
  const path = `/${slug}`

  return (
    <>
      <JsonLd data={bookingApplicationSchema(lang, path)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: HOME_LABEL[lang], path: homePath(lang) },
          { name: c.label, path: localePath(lang, path) },
        ])}
      />
      <JsonLd data={faqPageSchema(c.faq.items)} />
      <MarketingShell>
        <Nav lang={lang} localizedPath={path} />
        <main>
          <PhotoHero
            eyebrow={c.hero.eyebrow}
            title={c.hero.title}
            sub={c.hero.lead}
            primary={c.hero.primary}
            secondary={c.hero.secondary}
            secondaryHref={visual.anchor}
            scenes={scenes.scenes}
            scenesLabel={scenes.label}
          />
          <section className={styles.shot}>
            <div data-reveal className={`wrap ${styles.visual}`}>
              {visual.render(lang)}
            </div>
          </section>
          {c.story && <StorySection {...c.story} />}
          {sections(slug, lang)}
          <GuideSection {...guideContent(slug, lang)} />
          <Faq lang={lang} items={c.faq.items} heading={{ kicker: c.faq.kicker, title: c.faq.title }} />
          <ClosingCta lang={lang} />
        </main>
        <Footer lang={lang} />
      </MarketingShell>
    </>
  )
}
