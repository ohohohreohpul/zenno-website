import type { Metadata } from 'next'
import { START_URL } from '@/lib/marketing/config'
import { homePath, localePath, type Lang } from '@/lib/marketing/lang'
import { landingContent, type LandingContent } from '@/lib/marketing/content/landing'
import { STUDIO_PLATFORM } from '@/lib/marketing/content/studioPlatform'
import { breadcrumbSchema, faqPageSchema } from '@/lib/marketing/jsonld'
import type { LandingSlug } from '@/lib/marketing/pages'
import { pageMetadata } from '@/lib/marketing/seo'
import { JsonLd } from '../JsonLd'
import { MarketingShell } from '../MarketingShell'
import { Nav } from '../Nav'
import { Footer } from '../Footer'
import { UseCaseHero } from '../UseCaseHero'
import { PageHero } from '../PageHero'
import { UseCaseFit } from '../UseCaseFit'
import { AiBookable } from '../AiBookable'
import { SpotlightLedger } from '../StudioPlatform'
import { Faq } from '../Faq'
import { ClosingCta } from '../ClosingCta'
import { RelatedPages } from './RelatedPages'
import styles from './LandingPage.module.css'

const HOME_LABEL: Record<Lang, string> = { de: 'Startseite', en: 'Home', th: 'หน้าแรก' }

export function landingMetadata(lang: Lang, slug: LandingSlug): Metadata {
  const { meta } = landingContent(slug, lang)
  return pageMetadata({ lang, path: `/${slug}`, title: meta.title, description: meta.description })
}

interface LandingPageProps {
  lang: Lang
  slug: LandingSlug
}

/**
 * Shared template for the industry and feature landing pages. Content lives in
 * lib/marketing/content/landing; the page renders it in every locale.
 */
export function LandingPage({ lang, slug }: LandingPageProps) {
  const c = landingContent(slug, lang)
  const secondaryHref = c.embed === 'readiness' ? '#ai-booking' : '#how'

  return (
    <MarketingShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: HOME_LABEL[lang], path: homePath(lang) },
          { name: c.label, path: localePath(lang, `/${slug}`) },
        ])}
      />
      <JsonLd data={faqPageSchema(c.faq.items)} />
      <Nav lang={lang} onLightBg={!c.hero.image} localizedPath={`/${slug}`} />
      <main>
        <LandingHero lang={lang} content={c} secondaryHref={secondaryHref} />
        <UseCaseFit kicker={c.points.kicker} titlePre={c.points.title[0]} titleGhost={c.points.title[1]} points={c.points.items} />
        {c.embed === 'readiness' && <AiBookable lang={lang} />}
        {c.steps && (
          <UseCaseFit
            id="how"
            kicker={c.steps.kicker}
            titlePre={c.steps.title[0]}
            titleGhost={c.steps.title[1]}
            points={c.steps.items}
          />
        )}
        <Faq lang={lang} items={c.faq.items} heading={c.faq} />
        <RelatedPages lang={lang} slug={slug} />
        <ClosingCta lang={lang} />
      </main>
      <Footer lang={lang} />
    </MarketingShell>
  )
}

interface LandingHeroProps {
  lang: Lang
  content: LandingContent
  secondaryHref: string
}

function LandingHero({ lang, content, secondaryHref }: LandingHeroProps) {
  const { hero, embed } = content
  if (hero.image) {
    return <UseCaseHero image={hero.image} secondaryHref={secondaryHref} {...hero} />
  }

  const spotlight = embed === 'noShow' ? STUDIO_PLATFORM[lang].noShow : embed === 'tax' ? STUDIO_PLATFORM[lang].tax : null
  return (
    <>
      <PageHero
        kicker={hero.kicker}
        title={
          <>
            {hero.title[0]} <span className="ghost-word">{hero.title[1]}</span>
          </>
        }
        lead={hero.lead}
        actions={
          <>
            <a href={START_URL} className="btn">
              {hero.ctaPrimary} <span className="arrow">→</span>
            </a>
            <a href={secondaryHref} className="btn ghost">
              {hero.ctaSecondary}
            </a>
          </>
        }
      />
      {spotlight && (
        <div data-reveal className={`wrap card ${styles.ledgerCard}`}>
          <SpotlightLedger spotlight={spotlight} />
        </div>
      )}
    </>
  )
}
