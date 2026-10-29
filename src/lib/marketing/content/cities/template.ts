import type { CityIndustry, CityLang } from '../../cities'

/** What a location page calls the businesses it is for. */
const INDUSTRY_NOUN: Record<CityIndustry, Record<CityLang, string>> = {
  'salons-spas': { de: 'Salons & Spas', en: 'salons & spas' },
  'yoga-studios': { de: 'Yoga- & Fitnessstudios', en: 'yoga & fitness studios' },
  clinics: { de: 'Ästhetik- & Wellnesspraxen', en: 'aesthetic & wellness clinics' },
}

/** Search phrase the page targets, used in the title. */
const TITLE: Record<CityIndustry, Record<CityLang, (city: string) => string>> = {
  'salons-spas': {
    de: (city) => `Online-Terminbuchung für Salons & Spas in ${city} | Zenno`,
    en: (city) => `Online booking for salons & spas in ${city} | Zenno`,
  },
  'yoga-studios': {
    de: (city) => `Buchungssoftware für Yogastudios in ${city} | Zenno`,
    en: (city) => `Booking software for yoga studios in ${city} | Zenno`,
  },
  clinics: {
    de: (city) => `Terminbuchung für Ästhetik-Praxen in ${city} | Zenno`,
    en: (city) => `Booking software for aesthetic clinics in ${city} | Zenno`,
  },
}

export interface CityPageStrings {
  title: string
  description: string
  kicker: string
  ctaPrimary: string
  ctaSecondary: string
  localKicker: string
  districtsLabel: string
  neighbourhoodsKicker: string
  neighbourhoodsTitle: [string, string]
  clienteleKicker: string
  otherCitiesKicker: string
  otherCitiesTitle: [string, string]
  sameCityLabel: string
  faqKicker: string
  faqTitle: [string, string]
  imageAlt: string
}

export function cityPageStrings(industry: CityIndustry, lang: CityLang, city: string, districts: string[]): CityPageStrings {
  const noun = INDUSTRY_NOUN[industry][lang]
  const [d1, d2] = districts
  if (lang === 'de') {
    return {
      title: TITLE[industry].de(city),
      description: `Online-Buchung für ${noun} in ${city}, von ${d1} bis ${d2}: buchbar für KI-Assistenten, Anzahlung gegen No-Shows, Gutscheine und DATEV-Export. Ohne Provision, kostenlos starten.`,
      kicker: `${noun} in ${city}`,
      ctaPrimary: 'Kostenlos starten',
      ctaSecondary: 'Was sich in ' + city + ' ändert',
      localKicker: `${city} vor Ort`,
      districtsLabel: 'Stadtteile',
      neighbourhoodsKicker: 'Stadtteil für Stadtteil',
      neighbourhoodsTitle: [`${city} ist nicht eine Stadt,`, 'sondern viele Viertel.'],
      clienteleKicker: `Wer in ${city} bucht`,
      otherCitiesKicker: 'Weitere Städte',
      otherCitiesTitle: [`${noun}`, 'in anderen Städten.'],
      sameCityLabel: `Auch in ${city}`,
      faqKicker: `Fragen aus ${city}`,
      faqTitle: ['Kurz beantwortet,', `für ${noun} in ${city}.`],
      imageAlt: `Stadtansicht von ${city}`,
    }
  }
  return {
    title: TITLE[industry].en(city),
    description: `Online booking for ${noun} in ${city}, from ${d1} to ${d2}: ready for AI assistants to book you, deposits against no-shows, gift cards and DATEV export. No commission, start free.`,
    kicker: `${noun[0].toUpperCase()}${noun.slice(1)} in ${city}`,
    ctaPrimary: 'Start free',
    ctaSecondary: `What changes in ${city}`,
    localKicker: `${city}, locally`,
    districtsLabel: 'Neighbourhoods',
    neighbourhoodsKicker: 'Neighbourhood by neighbourhood',
    neighbourhoodsTitle: [`${city} isn’t one market,`, 'it’s many neighbourhoods.'],
    clienteleKicker: `Who books in ${city}`,
    otherCitiesKicker: 'Other cities',
    otherCitiesTitle: [`${noun[0].toUpperCase()}${noun.slice(1)}`, 'in other cities.'],
    sameCityLabel: `Also in ${city}`,
    faqKicker: `Questions from ${city}`,
    faqTitle: ['Answered briefly,', `for ${noun} in ${city}.`],
    imageAlt: `A view of ${city}`,
  }
}
