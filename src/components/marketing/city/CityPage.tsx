import type { Metadata } from 'next'
import { homePath, localePath, type Lang } from '@/lib/marketing/lang'
import {
  CITY_INDUSTRIES,
  CITY_LANGS,
  CITY_NAME,
  cityImage,
  cityOgImage,
  cityPath,
  type CityIndustry,
  type CityLang,
  type CitySlug,
} from '@/lib/marketing/cities'
import { cityContent } from '@/lib/marketing/content/cities'
import { cityPageStrings } from '@/lib/marketing/content/cities/template'
import { landingContent } from '@/lib/marketing/content/landing'
import { PAGE_LABEL } from '@/lib/marketing/pages'
import { breadcrumbSchema, cityServiceSchema, faqPageSchema } from '@/lib/marketing/jsonld'
import { pageMetadata } from '@/lib/marketing/seo'
import { JsonLd } from '../JsonLd'
import { MarketingShell } from '../MarketingShell'
import { Nav } from '../Nav'
import { Footer } from '../Footer'
import { UseCaseHero } from '../UseCaseHero'
import { UseCaseFit } from '../UseCaseFit'
import { Faq } from '../Faq'
import { ClosingCta } from '../ClosingCta'
import { CityGrid } from '../landing/CityGrid'
import { LocalSection } from './LocalSection'
import { Neighbourhoods } from './Neighbourhoods'

const HOME_LABEL: Record<Lang, string> = { de: 'Startseite', en: 'Home', th: 'หน้าแรก' }

/** How many of the industry page's general FAQs follow the city's own questions. */
const SHARED_FAQ_COUNT = 2

interface CityPageProps {
  lang: CityLang
  industry: CityIndustry
  city: CitySlug
}

function strings({ lang, industry, city }: CityPageProps) {
  const copy = cityContent(city, lang).industries[industry]
  return cityPageStrings(industry, lang, CITY_NAME[city][lang], copy.districts)
}

export function cityPageMetadata(props: CityPageProps): Metadata {
  const s = strings(props)
  return pageMetadata({
    lang: props.lang,
    path: cityPath(props.industry, props.city),
    title: s.title,
    description: s.description,
    langs: CITY_LANGS,
    image: cityOgImage(props.industry, props.city),
  })
}

/**
 * A location page: one industry in one city. The local story, chat and FAQ are
 * written per city; benefits and steps come from the industry page.
 */
export function CityPage({ lang, industry, city }: CityPageProps) {
  const { clientele, industries } = cityContent(city, lang)
  const copy = industries[industry]
  const industryPage = landingContent(industry, lang)
  const s = strings({ lang, industry, city })
  const cityName = CITY_NAME[city][lang]
  const path = cityPath(industry, city)
  const faqItems = [...copy.faq, ...industryPage.faq.items.slice(-SHARED_FAQ_COUNT)]
  const otherIndustries = CITY_INDUSTRIES.filter((i) => i !== industry)

  return (
    <MarketingShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: HOME_LABEL[lang], path: homePath(lang) },
          { name: industryPage.label, path: localePath(lang, `/${industry}`) },
          { name: cityName, path: localePath(lang, path) },
        ])}
      />
      <JsonLd data={faqPageSchema(faqItems)} />
      <JsonLd data={cityServiceSchema({ lang, path, name: s.title.replace(/ \| Zenno$/, ''), description: s.description, city: cityName })} />
      <Nav lang={lang} localizedPath={path} langPaths={{ th: `/${industry}` }} />
      <main>
        <UseCaseHero
          image={cityImage(industry, city)}
          imageAlt={s.imageAlt}
          kicker={s.kicker}
          title={copy.hero.title}
          lead={copy.hero.lead}
          ctaPrimary={s.ctaPrimary}
          ctaSecondary={s.ctaSecondary}
          secondaryHref="#local"
          chat={copy.chat}
        />
        <LocalSection
          kicker={s.localKicker}
          title={copy.local.title}
          paragraphs={copy.local.paragraphs}
          districtsLabel={s.districtsLabel}
          districts={copy.districts}
          clienteleKicker={s.clienteleKicker}
          clientele={clientele}
          alsoLabel={s.sameCityLabel}
          alsoLinks={otherIndustries.map((i) => ({ label: PAGE_LABEL[i][lang], href: localePath(lang, cityPath(i, city)) }))}
        />
        <Neighbourhoods kicker={s.neighbourhoodsKicker} title={s.neighbourhoodsTitle} items={copy.neighbourhoods} />
        <UseCaseFit
          kicker={industryPage.points.kicker}
          titlePre={industryPage.points.title[0]}
          titleGhost={industryPage.points.title[1]}
          points={industryPage.points.items}
        />
        {industryPage.steps && (
          <UseCaseFit
            id="how"
            kicker={industryPage.steps.kicker}
            titlePre={industryPage.steps.title[0]}
            titleGhost={industryPage.steps.title[1]}
            points={industryPage.steps.items}
          />
        )}
        <Faq lang={lang} items={faqItems} heading={{ kicker: s.faqKicker, title: s.faqTitle }} />
        <CityGrid lang={lang} industry={industry} kicker={s.otherCitiesKicker} title={s.otherCitiesTitle} exclude={city} />
        <ClosingCta lang={lang} />
      </main>
      <Footer lang={lang} />
    </MarketingShell>
  )
}
