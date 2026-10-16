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
import { ChargeSection } from './home/charge/ChargeSection'
import { SwitchingSection } from './home/switching/SwitchingSection'
import { TourSection } from './home/tour/TourSection'
import { GuestCards } from './home/guests/GuestCards'
import { StaffCarousel } from './home/staff/StaffCarousel'

interface HomePageProps {
  lang: Lang
}

/**
 * The homepage, in the rebrief's order: the front desk moment, a quick tour
 * (the product film as clickable screens), one calendar,
 * it books itself, talks like you, vouchers and money, you stay in charge,
 * switching, pricing, FAQ. Every section shows a real screen of the app.
 */
export function HomePage({ lang }: HomePageProps) {
  return (
    <MarketingShell>
      <Nav lang={lang} />
      <main>
        <HomeHero lang={lang} />
        <FrontDeskSection lang={lang} />
        <TourSection lang={lang} />
        <GuestCards lang={lang} />
        <CalendarSection lang={lang} />
        <StaffCarousel lang={lang} />
        <BooksSection lang={lang} />
        <TalksSection lang={lang} />
        <VouchersSection lang={lang} />
        <ChargeSection lang={lang} />
        <SwitchingSection lang={lang} />
        <BookingPricing lang={lang} />
        <Faq lang={lang} />
        <ClosingCta lang={lang} />
      </main>
      <Footer lang={lang} />
    </MarketingShell>
  )
}
