import type { Lang } from '../../lang'
import type { ComparePageContent, ComparePageSet, CompetitorId } from './types'
import { SHORE } from './shore'
import { TREATWELL } from './treatwell'
import { PHOREST } from './phorest'
import { FRESHA } from './fresha'

/**
 * "Zenno vs X" pages. Competitor names appear only here and on /compare (user
 * decision 2026-11-11). Every competitor fact links to that competitor's own
 * page; re-check prices against the sources before editing, then move the date.
 */
export const COMPARE_CHECKED_ON: Record<Lang, string> = {
  de: '11. November 2026',
  en: '11 November 2026',
  th: '11 พฤศจิกายน 2026',
}

export const COMPETITOR_NAME: Record<CompetitorId, string> = {
  shore: 'Shore',
  treatwell: 'Treatwell',
  phorest: 'Phorest',
  fresha: 'Fresha',
}

const PAGES: Record<CompetitorId, ComparePageSet> = {
  shore: SHORE,
  treatwell: TREATWELL,
  phorest: PHOREST,
  fresha: FRESHA,
}

export function compareContent(id: CompetitorId, lang: Lang): ComparePageContent {
  return PAGES[id][lang]
}

/** Locale-free path: '/compare' for the hub, '/compare/shore' for a page. */
export function comparePath(id?: CompetitorId): string {
  return id ? `/compare/${id}` : '/compare'
}

interface CompareStrings {
  home: string
  hubLabel: string
  topic: string
  otherLabel: string
  sourcesTitle: string
  checked: string
  disclaimer: (brand: string) => string
}

export const COMPARE_STRINGS: Record<Lang, CompareStrings> = {
  de: {
    home: 'Startseite',
    hubLabel: 'Vergleiche',
    topic: 'Thema',
    otherLabel: 'Weitere Vergleiche',
    sourcesTitle: 'Quellen',
    checked: `Angaben zu anderen Anbietern laut deren eigenen Websites, Stand ${COMPARE_CHECKED_ON.de}. Die Zahlen in eckigen Klammern verweisen auf die Quellen unten.`,
    disclaimer: (brand) =>
      `${brand} ist eine Marke des jeweiligen Inhabers. Zenno steht in keiner Verbindung dazu. Preise und Funktionen können sich ändern; maßgeblich ist die Website des Anbieters. Ist etwas falsch oder veraltet? Schreiben Sie an support@zennohq.com, wir korrigieren es.`,
  },
  en: {
    home: 'Home',
    hubLabel: 'Comparisons',
    topic: 'Topic',
    otherLabel: 'More comparisons',
    sourcesTitle: 'Sources',
    checked: `Details on other providers come from their own websites, as of ${COMPARE_CHECKED_ON.en}. Numbers in square brackets point to the sources below.`,
    disclaimer: (brand) =>
      `${brand} is a trademark of its owner. Zenno is not affiliated with it. Prices and features can change; the provider's website is authoritative. Something wrong or out of date? Write to support@zennohq.com and we'll correct it.`,
  },
  th: {
    home: 'หน้าแรก',
    hubLabel: 'การเปรียบเทียบ',
    topic: 'หัวข้อ',
    otherLabel: 'การเปรียบเทียบอื่นๆ',
    sourcesTitle: 'แหล่งที่มา',
    checked: `ข้อมูลของผู้ให้บริการอื่นมาจากเว็บไซต์ของผู้ให้บริการนั้นเอง ณ วันที่ ${COMPARE_CHECKED_ON.th} ตัวเลขในวงเล็บเหลี่ยมชี้ไปยังแหล่งที่มาด้านล่าง`,
    disclaimer: (brand) =>
      `${brand} เป็นเครื่องหมายการค้าของเจ้าของ Zenno ไม่มีความเกี่ยวข้องใดๆ ราคาและฟีเจอร์อาจเปลี่ยนแปลงได้ ให้ยึดตามเว็บไซต์ของผู้ให้บริการ หากพบข้อมูลผิดหรือล้าสมัย เขียนมาที่ support@zennohq.com แล้วเราจะแก้ไข`,
  },
}

export { HUB } from './hub'
export { COMPETITOR_IDS, type CompetitorId } from './types'
