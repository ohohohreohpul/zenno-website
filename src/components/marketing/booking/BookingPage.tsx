import { homePath, type Lang } from '@/lib/marketing/lang'
import { LEGACY_BOOKING_DOMAIN } from '@/lib/marketing/config'
import { BOOKING_FAQ, bookingPath } from '@/lib/marketing/content/booking'
import { bookingApplicationSchema, breadcrumbSchema, faqPageSchema } from '@/lib/marketing/jsonld'
import { JsonLd } from '../JsonLd'
import { MarketingShell } from '../MarketingShell'
import { Nav } from '../Nav'
import { Footer } from '../Footer'
import { Faq } from '../Faq'
import { ClosingCta } from '../ClosingCta'
import { PageHero } from '../PageHero'
import { BookingFeatures } from './BookingFeatures'
import { BookingPricing } from './BookingPricing'
import { ExistingCustomers } from './ExistingCustomers'

interface BookingPageStrings {
  home: string
  kicker: string
  titlePre: string
  titleGhost: string
  lead: string
  faqKicker: string
  faqTitle: [string, string]
}

const STRINGS: Record<Lang, BookingPageStrings> = {
  en: {
    home: 'Home',
    kicker: `Previously ${LEGACY_BOOKING_DOMAIN}`,
    titlePre: 'onbuuk is now Zenno.',
    titleGhost: 'One app for the front desk.',
    lead: 'Your booking page, calendar and payments, now together with vouchers and the AI receptionist. Nothing to move, nothing to set up again.',
    faqKicker: 'Questions',
    faqTitle: ['About onbuuk', 'becoming Zenno.'],
  },
  de: {
    home: 'Startseite',
    kicker: `Früher ${LEGACY_BOOKING_DOMAIN}`,
    titlePre: 'onbuuk ist jetzt Zenno.',
    titleGhost: 'Eine App für den Empfang.',
    lead: 'Ihre Buchungsseite, Ihr Kalender und Ihre Zahlungen, jetzt zusammen mit Gutscheinen und der KI-Rezeption. Nichts umziehen, nichts neu einrichten.',
    faqKicker: 'Fragen',
    faqTitle: ['Wie aus onbuuk', 'Zenno wird.'],
  },
  th: {
    home: 'หน้าแรก',
    kicker: `เดิมคือ ${LEGACY_BOOKING_DOMAIN}`,
    titlePre: 'onbuuk เปลี่ยนเป็น Zenno แล้ว',
    titleGhost: 'แอปเดียวสำหรับหน้าเคาน์เตอร์',
    lead: 'หน้าจอง ปฏิทิน และการชำระเงินของคุณ ตอนนี้มาพร้อมบัตรของขวัญและพนักงานต้อนรับ AI ไม่ต้องย้ายข้อมูล ไม่ต้องตั้งค่าใหม่',
    faqKicker: 'คำถาม',
    faqTitle: ['เมื่อ onbuuk', 'กลายเป็น Zenno'],
  },
}

interface BookingPageProps {
  lang: Lang
}

/** /booking: for onbuuk customers, who now find everything in the one Zenno app. */
export function BookingPage({ lang }: BookingPageProps) {
  const t = STRINGS[lang]

  return (
    <MarketingShell>
      <JsonLd data={bookingApplicationSchema(lang, '/booking')} />
      <JsonLd data={faqPageSchema(BOOKING_FAQ[lang])} />
      <JsonLd
        data={breadcrumbSchema([
          { name: t.home, path: homePath(lang) },
          { name: 'Zenno', path: bookingPath(lang) },
        ])}
      />
      <Nav lang={lang} onLightBg localizedPath="/booking" />
      <main>
        <PageHero
          kicker={t.kicker}
          title={
            <>
              {t.titlePre} <span className="ghost-word">{t.titleGhost}</span>
            </>
          }
          lead={t.lead}
        />
        <ExistingCustomers lang={lang} />
        <BookingFeatures lang={lang} />
        <BookingPricing lang={lang} />
        <Faq lang={lang} items={BOOKING_FAQ[lang]} heading={{ kicker: t.faqKicker, title: t.faqTitle }} />
        <ClosingCta lang={lang} />
      </main>
      <Footer lang={lang} />
    </MarketingShell>
  )
}
