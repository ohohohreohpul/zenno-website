import type { Metadata } from 'next'
import { homePath, localePath, type Lang } from '@/lib/marketing/lang'
import { PRICING_PAGE } from '@/lib/marketing/content/landing'
import { bookingApplicationSchema, breadcrumbSchema, faqPageSchema } from '@/lib/marketing/jsonld'
import { pageMetadata } from '@/lib/marketing/seo'
import { JsonLd } from '../JsonLd'
import { MarketingShell } from '../MarketingShell'
import { Nav } from '../Nav'
import { Footer } from '../Footer'
import { PageHero } from '../PageHero'
import { BookingPricing } from '../booking/BookingPricing'
import { UseCaseFit } from '../UseCaseFit'
import { Faq } from '../Faq'
import { ClosingCta } from '../ClosingCta'
import { RelatedPages } from './RelatedPages'

const HOME_LABEL: Record<Lang, string> = { de: 'Startseite', en: 'Home', th: 'หน้าแรก' }

export function pricingMetadata(lang: Lang): Metadata {
  const { meta } = PRICING_PAGE[lang]
  return pageMetadata({ lang, path: '/pricing', title: meta.title, description: meta.description })
}

/** /pricing in every locale: the plans, how billing works, and the FAQ. */
export function PricingPage({ lang }: { lang: Lang }) {
  const c = PRICING_PAGE[lang]

  return (
    <MarketingShell>
      <JsonLd data={bookingApplicationSchema(lang, '/pricing')} />
      <JsonLd
        data={breadcrumbSchema([
          { name: HOME_LABEL[lang], path: homePath(lang) },
          { name: c.label, path: localePath(lang, '/pricing') },
        ])}
      />
      <JsonLd data={faqPageSchema(c.faq.items)} />
      <Nav lang={lang} onLightBg localizedPath="/pricing" />
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
        <BookingPricing lang={lang} />
        <UseCaseFit kicker={c.billing.kicker} titlePre={c.billing.title[0]} titleGhost={c.billing.title[1]} points={c.billing.items} />
        <Faq lang={lang} items={c.faq.items} heading={c.faq} />
        <RelatedPages lang={lang} slug="pricing" />
        <ClosingCta lang={lang} />
      </main>
      <Footer lang={lang} />
    </MarketingShell>
  )
}
