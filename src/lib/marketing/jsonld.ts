import type { Lang } from './lang'
import type { FaqItem } from './content/faq'
import { PLANS } from './content/plans'
import { SITE_URL } from './config'
import { absoluteUrl } from './seo'

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Zenno',
    url: SITE_URL,
    logo: `${SITE_URL}/logo/wordmark-black.png`,
    description:
      'Booking software for studios that AI assistants can book directly, with no-show protection, VAT and DATEV export, and an AI receptionist.',
    areaServed: { '@type': 'Country', name: 'Germany' },
    knowsLanguage: ['de', 'en', 'th'],
  }
}

const WEBSITE_NAME: Record<Lang, string> = {
  de: 'Zenno – Buchungssoftware für Studios',
  en: 'Zenno – Booking software for studios',
  th: 'Zenno – ระบบจองคิวออนไลน์สำหรับสตูดิโอ',
}

/** One WebSite node per locale, tied to the organization. */
export function websiteSchema(lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${absoluteUrl(lang)}#website`,
    name: WEBSITE_NAME[lang],
    url: absoluteUrl(lang),
    inLanguage: lang,
    publisher: { '@id': `${SITE_URL}/#organization` },
  }
}

export function faqPageSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}

export const BOOKING_APP_DESCRIPTION: Record<Lang, string> = {
  de: 'Buchungssoftware, die für Sie bucht: Kassenkalender, Online-Buchungsseite, Gutscheine, Zahlungen, No-Show-Gebühren, Kassenbuch und DATEV-Export, mit einer KI-Rezeption für WhatsApp, E-Mail und Website. Vormals onbuuk.com.',
  en: 'Booking software that books itself: a POS calendar, online booking page, vouchers, payments, no-show fees, cash book and DATEV export, with an AI receptionist for WhatsApp, email and your website. Previously onbuuk.com.',
  th: 'ระบบจองคิว ที่รับจองแทนคุณ ปฏิทินหน้าร้าน หน้าจองออนไลน์ บัตรของขวัญ การชำระเงิน ค่าปรับไม่มาตามนัด สมุดเงินสด และไฟล์ส่งออก DATEV พร้อมพนักงานต้อนรับ AI สำหรับ WhatsApp อีเมล และเว็บไซต์ เดิมคือ onbuuk.com',
}

/** The product: the homepage, feature pages and /booking describe this one. */
export function bookingApplicationSchema(lang: Lang, path: string = '/') {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Zenno',
    alternateName: 'onbuuk',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: absoluteUrl(lang, path),
    inLanguage: lang,
    description: BOOKING_APP_DESCRIPTION[lang],
    publisher: { '@id': `${SITE_URL}/#organization` },
    offers: planOffers(lang),
  }
}

/** The fixed-price plans as schema.org Offers. */
function planOffers(lang: Lang) {
  return PLANS[lang]
    .filter((plan) => plan.monthlyEur !== undefined)
    .map((plan) => ({
      '@type': 'Offer',
      name: plan.name,
      price: String(plan.monthlyEur),
      priceCurrency: 'EUR',
      description: plan.line,
    }))
}

interface CityServiceInput {
  lang: Lang
  /** Locale-free route path of the location page. */
  path: string
  name: string
  description: string
  city: string
}

/** A location page: the booking software offered to businesses in one city. */
export function cityServiceSchema({ lang, path, name, description, city }: CityServiceInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: absoluteUrl(lang, path),
    inLanguage: lang,
    serviceType: 'Booking software',
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: { '@type': 'City', name: city, containedInPlace: { '@type': 'Country', name: 'Germany' } },
    offers: planOffers(lang),
  }
}
