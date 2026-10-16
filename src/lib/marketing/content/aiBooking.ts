import type { Lang } from '../lang'

/**
 * "Is your studio bookable by AI?" — the homepage positioning section.
 * Source: Zenno AI Booking positioning brief (30 Sep 2026). Claims stay inside
 * its guardrails: "ready for AI assistants to book you", never "ChatGPT books
 * you today"; no commission on AI bookings, never "free forever"; no
 * marketplace named in the comparison.
 */

/** One row of the readiness check: what an AI assistant needs from a page. */
export interface ReadinessRow {
  need: string
  /** [typical salon website, marketplace listing, Zenno page] */
  cells: [boolean, boolean, boolean]
  /** Optional small print under a cell, same order as `cells`. */
  notes?: [string?, string?, string?]
}

export interface WhyNowFact {
  stat: string
  text: string
  source: string
  href: string
}

export interface AiBookingContent {
  kicker: string
  title: [string, string]
  lead: string
  columns: [string, string, string]
  columnsTitle: string
  rows: ReadinessRow[]
  whyNowKicker: string
  whyNow: WhyNowFact[]
  whyNowFoot: string
  controlTitle: string
  control: { title: string; text: string }[]
  cta: string
}

const SOURCES = {
  brightlocal: 'https://www.brightlocal.com/research/lcrs-ai-trust/',
  googleIo: 'https://www.partoo.co/en/blog/google-io-2026/',
  checkout:
    'https://www.hypotenuse.ai/blog/chatgpts-instant-checkout-the-next-phase-of-agentic-commerce',
} as const

export const AI_BOOKING: Record<Lang, AiBookingContent> = {
  en: {
    kicker: 'AI booking',
    title: ['AI can only book', 'what it can read.'],
    lead: 'When a customer asks an assistant for an appointment, it looks for a page that states services, prices and free times, and takes the booking without a phone call. Most studio websites can’t, so the AI hands over a link or a marketplace takes the booking. Your Zenno page can.',
    columnsTitle: 'What an AI assistant needs',
    columns: ['Typical studio website', 'Marketplace listing', 'Your Zenno page'],
    rows: [
      {
        need: 'Services, prices and hours in a format AI reads',
        cells: [false, true, true],
        notes: [undefined, undefined, 'schema.org + llms.txt'],
      },
      { need: 'Live free times', cells: [false, true, true] },
      { need: 'Takes the booking without a call', cells: [false, true, true] },
      { need: 'Booked in your name, the customer stays yours', cells: [true, false, true] },
      {
        need: 'No commission on new customers',
        cells: [true, false, true],
        notes: [undefined, 'often up to 35% of the first booking', undefined],
      },
    ],
    whyNowKicker: 'Why now',
    whyNow: [
      {
        stat: '45%',
        text: 'of US consumers used AI to find a local business, up from 6% a year earlier.',
        source: 'BrightLocal, Mar 2026',
        href: SOURCES.brightlocal,
      },
      {
        stat: '2026',
        text: 'Google starts taking bookings through AI agents, US first, including beauty and health appointments.',
        source: 'Partoo, Google I/O recap, Jun 2026',
        href: SOURCES.googleIo,
      },
      {
        stat: 'Own site',
        text: 'AI assistants now find the business, then send the customer to book on the business’s own site.',
        source: 'Hypotenuse, Mar 2026',
        href: SOURCES.checkout,
      },
    ],
    whyNowFoot: 'None of this has reached Germany yet. Studios that are ready now will be early, not late.',
    controlTitle: 'You stay in charge',
    control: [
      { title: 'One switch', text: 'Turn AI booking on in your admin. Nothing to install, no keys.' },
      { title: 'Your rules', text: 'Accept AI bookings automatically, or approve each one with a tap from the email.' },
      { title: 'See the source', text: 'Your dashboard shows how many bookings came from AI, Google, social or direct.' },
      { title: 'No login for customers', text: 'They book without an account and get a confirmation with a cancel link.' },
    ],
    cta: 'Turn on AI booking',
  },
  de: {
    kicker: 'KI-Buchung',
    title: ['Die KI bucht nur,', 'was sie lesen kann.'],
    lead: 'Fragt eine Kundin einen KI-Assistenten nach einem Termin, sucht er eine Seite mit Leistungen, Preisen und freien Zeiten, die eine Buchung ohne Anruf annimmt. Die meisten Studio-Websites können das nicht. Dann schickt die KI nur einen Link, oder ein Marktplatz übernimmt die Buchung. Ihre Zenno-Seite kann es.',
    columnsTitle: 'Was ein KI-Assistent braucht',
    columns: ['Typische Studio-Website', 'Marktplatz-Profil', 'Ihre Zenno-Seite'],
    rows: [
      {
        need: 'Leistungen, Preise und Öffnungszeiten in einem Format, das die KI liest',
        cells: [false, true, true],
        notes: [undefined, undefined, 'schema.org + llms.txt'],
      },
      { need: 'Freie Termine in Echtzeit', cells: [false, true, true] },
      { need: 'Nimmt die Buchung ohne Anruf an', cells: [false, true, true] },
      { need: 'Gebucht in Ihrem Namen, die Kundschaft bleibt Ihre', cells: [true, false, true] },
      {
        need: 'Keine Provision auf Neukundschaft',
        cells: [true, false, true],
        notes: [undefined, 'oft bis zu 35 % der ersten Buchung', undefined],
      },
    ],
    whyNowKicker: 'Warum jetzt',
    whyNow: [
      {
        stat: '45 %',
        text: 'der US-Verbraucher haben KI genutzt, um ein lokales Geschäft zu finden. Ein Jahr zuvor waren es 6 %.',
        source: 'BrightLocal, März 2026',
        href: SOURCES.brightlocal,
      },
      {
        stat: '2026',
        text: 'Google nimmt Buchungen über KI-Agenten an, zuerst in den USA, auch für Beauty- und Gesundheitstermine.',
        source: 'Partoo, Google I/O-Rückblick, Juni 2026',
        href: SOURCES.googleIo,
      },
      {
        stat: 'Eigene Seite',
        text: 'KI-Assistenten finden das Geschäft und schicken die Kundschaft zur Buchung auf dessen eigene Seite.',
        source: 'Hypotenuse, März 2026',
        href: SOURCES.checkout,
      },
    ],
    whyNowFoot: 'In Deutschland ist das noch nicht angekommen. Wer jetzt bereit ist, ist früh dran, nicht spät.',
    controlTitle: 'Sie behalten die Kontrolle',
    control: [
      { title: 'Ein Schalter', text: 'KI-Buchung im Admin einschalten. Nichts installieren, keine Schlüssel.' },
      { title: 'Ihre Regeln', text: 'KI-Buchungen automatisch annehmen oder jede einzeln per Tipp aus der E-Mail bestätigen.' },
      { title: 'Die Quelle sehen', text: 'Ihr Dashboard zeigt, wie viele Buchungen über KI, Google, Social Media oder direkt kamen.' },
      { title: 'Kein Konto für Kundschaft', text: 'Gebucht wird ohne Konto, mit Bestätigung und Stornolink.' },
    ],
    cta: 'KI-Buchung einschalten',
  },
  th: {
    kicker: 'การจองผ่าน AI',
    title: ['AI จองได้เฉพาะ', 'สิ่งที่มันอ่านออก'],
    lead: 'เมื่อลูกค้าถามผู้ช่วย AI ว่าอยากจองคิว AI จะมองหาหน้าเว็บที่บอกบริการ ราคา และเวลาว่าง แล้วรับการจองได้โดยไม่ต้องโทร เว็บไซต์สตูดิโอส่วนใหญ่ทำแบบนี้ไม่ได้ AI จึงได้แค่ส่งลิงก์ หรือปล่อยให้แพลตฟอร์มตัวกลางรับการจองไป แต่หน้า Zenno ของคุณทำได้',
    columnsTitle: 'สิ่งที่ผู้ช่วย AI ต้องการ',
    columns: ['เว็บไซต์สตูดิโอทั่วไป', 'โปรไฟล์บนแพลตฟอร์มตัวกลาง', 'หน้า Zenno ของคุณ'],
    rows: [
      {
        need: 'บริการ ราคา และเวลาเปิดทำการ ในรูปแบบที่ AI อ่านได้',
        cells: [false, true, true],
        notes: [undefined, undefined, 'schema.org + llms.txt'],
      },
      { need: 'เวลาว่างแบบเรียลไทม์', cells: [false, true, true] },
      { need: 'รับการจองได้โดยไม่ต้องโทร', cells: [false, true, true] },
      { need: 'จองในชื่อของคุณ ลูกค้ายังเป็นของคุณ', cells: [true, false, true] },
      {
        need: 'ไม่มีค่าคอมมิชชั่นจากลูกค้าใหม่',
        cells: [true, false, true],
        notes: [undefined, 'มักสูงถึง 35% ของการจองครั้งแรก', undefined],
      },
    ],
    whyNowKicker: 'ทำไมต้องตอนนี้',
    whyNow: [
      {
        stat: '45%',
        text: 'ของผู้บริโภคในสหรัฐฯ ใช้ AI ค้นหาร้านค้าในพื้นที่ เพิ่มจาก 6% เมื่อปีก่อน',
        source: 'BrightLocal, มี.ค. 2026',
        href: SOURCES.brightlocal,
      },
      {
        stat: '2026',
        text: 'Google เริ่มรับการจองผ่าน AI agent โดยเริ่มที่สหรัฐฯ ก่อน รวมถึงคิวด้านความงามและสุขภาพ',
        source: 'Partoo, สรุป Google I/O, มิ.ย. 2026',
        href: SOURCES.googleIo,
      },
      {
        stat: 'เว็บของร้านเอง',
        text: 'ผู้ช่วย AI ค้นหาร้านให้ แล้วส่งลูกค้าไปจองบนเว็บไซต์ของร้านนั้นเอง',
        source: 'Hypotenuse, มี.ค. 2026',
        href: SOURCES.checkout,
      },
    ],
    whyNowFoot: 'เรื่องนี้ยังมาไม่ถึงเยอรมนี สตูดิโอที่พร้อมตั้งแต่ตอนนี้จะได้เปรียบก่อนใคร',
    controlTitle: 'คุณยังควบคุมได้ทั้งหมด',
    control: [
      { title: 'สวิตช์เดียว', text: 'เปิดการจองผ่าน AI ในหน้าแอดมิน ไม่ต้องติดตั้งอะไร ไม่ต้องใช้คีย์' },
      { title: 'กฎของคุณ', text: 'ให้ระบบรับการจองจาก AI อัตโนมัติ หรือกดยืนยันทีละรายการจากอีเมล' },
      { title: 'รู้ที่มาของการจอง', text: 'แดชบอร์ดบอกว่ามีการจองจาก AI, Google, โซเชียล หรือเข้ามาตรงกี่รายการ' },
      { title: 'ลูกค้าไม่ต้องสมัครบัญชี', text: 'จองได้เลยโดยไม่ต้องมีบัญชี และได้รับอีเมลยืนยันพร้อมลิงก์ยกเลิก' },
    ],
    cta: 'เปิดการจองผ่าน AI',
  },
}
