import type { Lang } from '../lang'

/**
 * Plans and AI credits: the one source for every price on the site (pricing
 * cards, FAQs, landing pages, JSON-LD, llms.txt mirrors this by hand).
 * Limits are enforced by the app's server; the site only describes them.
 */

export interface Plan {
  name: string
  /** Shown big on the card; a number for fixed plans, a word for Custom. */
  price: string
  /** Monthly price in euros for JSON-LD; absent for Custom. */
  monthlyEur?: number
  line: string
  cta: string
  isPopular?: boolean
  /** Custom is priced per business: its button writes to us instead of starting free. */
  isCustom?: boolean
  features: string[]
  /** What the plan leaves out, shown muted with a dash. */
  limits?: string[]
}

export const PLANS: Record<Lang, Plan[]> = {
  en: [
    {
      name: 'Free',
      price: '€0',
      monthlyEur: 0,
      line: '1 therapist · 5 treatments',
      cta: 'Start free',
      features: ['POS calendar and online booking page', 'Your booking link'],
      limits: ['No AI receptionist', '“Powered by Zenno” badge on your booking page'],
    },
    {
      name: 'Zenno',
      price: '€49',
      monthlyEur: 49,
      line: 'Everything · 1,000 AI replies a month',
      cta: 'Start with Zenno',
      isPopular: true,
      features: [
        'No limit on therapists or treatments',
        'AI receptionist on WhatsApp, email and website',
        '1,000 AI replies a month included',
        'No-show fees, cash book and DATEV export',
        'Your own branding, no badge',
      ],
    },
    {
      name: 'Custom',
      price: 'On request',
      line: 'Same features · priced for your business',
      cta: 'Talk to us',
      isCustom: true,
      features: ['Everything in Zenno', 'A price set for your business', 'AI replies to match your volume'],
    },
  ],
  de: [
    {
      name: 'Free',
      price: '0 €',
      monthlyEur: 0,
      line: '1 Therapeutin · 5 Behandlungen',
      cta: 'Kostenlos starten',
      features: ['Kassenkalender und Online-Buchungsseite', 'Ihr eigener Buchungslink'],
      limits: ['Ohne KI-Rezeption', '„Powered by Zenno“ auf Ihrer Buchungsseite'],
    },
    {
      name: 'Zenno',
      price: '49 €',
      monthlyEur: 49,
      line: 'Alles · 1.000 KI-Antworten im Monat',
      cta: 'Mit Zenno starten',
      isPopular: true,
      features: [
        'Beliebig viele Therapeutinnen und Behandlungen',
        'KI-Rezeption auf WhatsApp, per E-Mail und auf der Website',
        '1.000 KI-Antworten im Monat inklusive',
        'No-Show-Gebühren, Kassenbuch und DATEV-Export',
        'Ihr eigenes Branding, ohne Badge',
      ],
    },
    {
      name: 'Custom',
      price: 'Auf Anfrage',
      line: 'Gleiche Funktionen · Preis für Ihren Betrieb',
      cta: 'Sprechen Sie uns an',
      isCustom: true,
      features: ['Alles aus Zenno', 'Ein Preis für Ihren Betrieb', 'KI-Antworten passend zu Ihrem Volumen'],
    },
  ],
  th: [
    {
      name: 'Free',
      price: '€0',
      monthlyEur: 0,
      line: 'พนักงาน 1 คน · บริการ 5 รายการ',
      cta: 'เริ่มใช้ฟรี',
      features: ['ปฏิทินหน้าร้านและหน้าจองออนไลน์', 'ลิงก์จองของร้านคุณ'],
      limits: ['ไม่มีพนักงานต้อนรับ AI', 'มีป้าย “Powered by Zenno” บนหน้าจอง'],
    },
    {
      name: 'Zenno',
      price: '€49',
      monthlyEur: 49,
      line: 'ครบทุกอย่าง · ตอบด้วย AI 1,000 ข้อความต่อเดือน',
      cta: 'เริ่มใช้ Zenno',
      isPopular: true,
      features: [
        'เพิ่มพนักงานและบริการได้ไม่จำกัด',
        'พนักงานต้อนรับ AI ทาง WhatsApp อีเมล และเว็บไซต์',
        'รวมการตอบด้วย AI 1,000 ข้อความต่อเดือน',
        'ค่าปรับไม่มาตามนัด สมุดเงินสด และไฟล์ส่งออก DATEV',
        'ใช้แบรนด์ของร้านเอง ไม่มีป้าย',
      ],
    },
    {
      name: 'Custom',
      price: 'สอบถามราคา',
      line: 'ฟีเจอร์เหมือนกัน · ราคาตามธุรกิจของคุณ',
      cta: 'ติดต่อเรา',
      isCustom: true,
      features: ['ทุกอย่างใน Zenno', 'ราคาที่ตั้งให้เหมาะกับร้านของคุณ', 'จำนวนการตอบด้วย AI ตามปริมาณงานจริง'],
    },
  ],
}

export interface CreditPack {
  replies: string
  price: string
}

/** AI credit top-ups, paid through Stripe. */
export const CREDIT_PACKS: Record<Lang, CreditPack[]> = {
  en: [
    { replies: '500', price: '€10' },
    { replies: '2,000', price: '€29' },
    { replies: '10,000', price: '€99' },
  ],
  de: [
    { replies: '500', price: '10 €' },
    { replies: '2.000', price: '29 €' },
    { replies: '10.000', price: '99 €' },
  ],
  th: [
    { replies: '500', price: '€10' },
    { replies: '2,000', price: '€29' },
    { replies: '10,000', price: '€99' },
  ],
}

/** One sentence that names every plan, for FAQs and landing pages. */
export const PLAN_LINE: Record<Lang, string> = {
  en: 'Free costs €0 (1 therapist, 5 treatments, no AI receptionist). Zenno is €49 a month with everything and 1,000 AI replies a month. Custom has the same features at a price set for your business.',
  de: 'Free kostet 0 € (1 Therapeutin, 5 Behandlungen, ohne KI-Rezeption). Zenno kostet 49 € im Monat, mit allem und 1.000 KI-Antworten im Monat. Custom hat dieselben Funktionen zu einem Preis für Ihren Betrieb.',
  th: 'Free ราคา €0 (พนักงาน 1 คน บริการ 5 รายการ ไม่มีพนักงานต้อนรับ AI) Zenno ราคา €49 ต่อเดือน ได้ทุกอย่างพร้อมการตอบด้วย AI 1,000 ข้อความต่อเดือน ส่วน Custom ได้ฟีเจอร์เหมือนกันในราคาที่ตั้งให้เหมาะกับธุรกิจของคุณ',
}

/** How AI credits work, in one or two sentences. */
export const CREDITS_LINE: Record<Lang, string> = {
  en: 'Need more AI replies? Top up with 500, 2,000 or 10,000 replies for €10, €29 or €99, paid through Stripe. If credits run out, the AI pauses and new messages wait in your inbox.',
  de: 'Mehr KI-Antworten nötig? Laden Sie 500, 2.000 oder 10.000 Antworten für 10 €, 29 € oder 99 € auf, bezahlt über Stripe. Sind die Credits aufgebraucht, pausiert die KI und neue Nachrichten warten in Ihrem Posteingang.',
  th: 'อยากได้การตอบด้วย AI เพิ่ม เติมได้ 500, 2,000 หรือ 10,000 ข้อความ ในราคา €10, €29 หรือ €99 ชำระผ่าน Stripe ถ้าเครดิตหมด AI จะหยุดตอบชั่วคราว และข้อความใหม่จะรออยู่ในกล่องข้อความของคุณ',
}
