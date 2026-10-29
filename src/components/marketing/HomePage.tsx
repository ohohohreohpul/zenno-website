import '@/styles/zenno-ui.css'
import type { Lang } from '@/lib/marketing/lang'
import { MarketingShell } from './MarketingShell'
import { Nav } from './Nav'
import { Footer } from './Footer'
import { Faq } from './Faq'
import { ClosingCta } from './ClosingCta'
import { BookingPricing } from './booking/BookingPricing'
import { HomeHero } from './home/hero/HomeHero'
import { FrontDeskSection } from './home/frontdesk/FrontDeskSection'
import { CalendarSection } from './home/calendar/CalendarSection'
import { BooksSection } from './home/books/BooksSection'
import { TalksSection } from './home/talks/TalksSection'
import { VouchersSection } from './home/vouchers/VouchersSection'
import { RegularsSection } from './home/regulars/RegularsSection'
import { ChargeSection } from './home/charge/ChargeSection'
import { SwitchingSection } from './home/switching/SwitchingSection'
import { TourSection } from './home/tour/TourSection'
import { GuestCards } from './home/guests/GuestCards'
import { StaffCarousel } from './home/staff/StaffCarousel'

interface HomePageProps {
  lang: Lang
}

/**
 * The homepage leads with outcomes: the front desk problem, then more
 * bookings, more gift cards and more regulars. How it works comes after:
 * the tour, one calendar, the receptionist's voice, control, switching,
 * pricing, FAQ. Every section shows a real screen of the app.
 */
export function HomePage({ lang }: HomePageProps) {
  return (
    <MarketingShell>
      <Nav lang={lang} />
      <main>
        <HomeHero lang={lang} />
        <FrontDeskSection lang={lang} />
        <BooksSection lang={lang} index={2} />
        <VouchersSection lang={lang} index={3} />
        <RegularsSection lang={lang} index={4} />
        <TourSection lang={lang} />
        <GuestCards lang={lang} />
        <CalendarSection lang={lang} index={5} />
        <StaffCarousel lang={lang} />
        <TalksSection lang={lang} index={6} />
        <ChargeSection lang={lang} index={7} />
        <SwitchingSection lang={lang} index={8} />
        <BookingPricing lang={lang} />
        <Faq lang={lang} />
        <ClosingCta lang={lang} />
      </main>
      <Footer lang={lang} />
    </MarketingShell>
  )
}
