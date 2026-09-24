import type { Lang } from '@/lib/marketing/lang'
import { BOOKING_FAQ, bookingPath } from '@/lib/marketing/content/booking'
import { bookingApplicationSchema, breadcrumbSchema, faqPageSchema } from '@/lib/marketing/jsonld'
import { JsonLd } from '../JsonLd'
import { MarketingShell } from '../MarketingShell'
import { Nav } from '../Nav'
import { Footer } from '../Footer'
import { SectionHeader } from '../primitives/SectionHeader'
import { FaqAccordion } from '../primitives/FaqAccordion'
import { BookingHero } from './BookingHero'
import { TwoProducts } from './TwoProducts'
import { BookingFeatures } from './BookingFeatures'
import { TogetherMoments } from './TogetherMoments'
import { BookingPricing } from './BookingPricing'
import { ExistingCustomers } from './ExistingCustomers'
import styles from './BookingPage.module.css'

const STRINGS: Record<Lang, { home: string; faqKicker: string; faqPre: string; faqGhost: string }> = {
  en: { home: 'Home', faqKicker: 'Questions', faqPre: 'About onbuuk', faqGhost: 'becoming Zenno Booking.' },
  de: { home: 'Startseite', faqKicker: 'Fragen', faqPre: 'Wie aus onbuuk', faqGhost: 'Zenno Booking wird.' },
}

interface BookingPageProps {
  lang: Lang
}

/** Shared Zenno Booking page, rendered by app/booking (en) and app/de/booking (de). */
export function BookingPage({ lang }: BookingPageProps) {
  const t = STRINGS[lang]
  const otherLang: Lang = lang === 'de' ? 'en' : 'de'

  return (
    <MarketingShell lang={lang}>
      <JsonLd data={bookingApplicationSchema(lang)} />
      <JsonLd data={faqPageSchema(BOOKING_FAQ[lang])} />
      <JsonLd
        data={breadcrumbSchema([
          { name: t.home, path: lang === 'de' ? '/de' : '/' },
          { name: 'Zenno Booking', path: bookingPath(lang) },
        ])}
      />
      <Nav lang={lang} onLightBg alternatePath={bookingPath(otherLang)} />
      <main>
        <BookingHero lang={lang} />
        <TwoProducts lang={lang} />
        <BookingFeatures lang={lang} />
        <TogetherMoments lang={lang} />
        <BookingPricing lang={lang} />
        <ExistingCustomers lang={lang} />
        <section className="pad-y">
          <div className="wrap">
            <SectionHeader
              kicker={t.faqKicker}
              title={
                <>
                  {t.faqPre} <span className="ghost-word">{t.faqGhost}</span>
                </>
              }
            />
            <div className={styles.faqWrap}>
              <FaqAccordion items={BOOKING_FAQ[lang]} />
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </MarketingShell>
  )
}
