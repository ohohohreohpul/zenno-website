import type { Lang } from '../lang'

/**
 * "One system for the whole studio" — the homepage feature section.
 * Booking (ex-onbuuk) is the core product; the AI receptionist is one feature.
 * No-show and tax copy is limited to what is live (2 Oct 2026):
 *   no-shows: deposit / full prepayment at booking, card on file + no-show or late-cancel fee
 *   tax: VAT rates incl. §19 UStG small-business rule, monthly/quarterly overview, DATEV / advisor export
 * Do not add e-invoicing (XRechnung/ZUGFeRD) or GoBD claims until they ship.
 */

export interface SpotlightRow {
  label: string
  value: string
  /** Renders the value in the "booked" green. */
  isPositive?: boolean
}

export interface Spotlight {
  kicker: string
  title: string
  body: string
  rowsLabel: string
  rows: SpotlightRow[]
}

export interface PlatformFeature {
  title: string
  body: string
  tag?: string
}

export interface StudioPlatformContent {
  kicker: string
  title: [string, string]
  lead: string
  noShow: Spotlight
  tax: Spotlight
  features: PlatformFeature[]
}

export const STUDIO_PLATFORM: Record<Lang, StudioPlatformContent> = {
  en: {
    kicker: 'The whole studio',
    title: ['One booking system.', 'Everything around it.'],
    lead: 'Booking is where your money comes in, so that’s where Zenno starts. Payments, no-shows, tax and the chats sit in the same place.',
    noShow: {
      kicker: 'No-show protection',
      title: 'Empty chair, still paid.',
      body: 'Ask for a deposit or the full price when clients book. Or keep their card on file and charge a fee if they don’t show up or cancel too late.',
      rowsLabel: 'Example: Saturday, 11:00',
      rows: [
        { label: 'Balayage · deposit at booking', value: '€20 paid', isPositive: true },
        { label: 'Card on file', value: 'Visa ·· 4242' },
        { label: 'No-show fee', value: '€25 charged', isPositive: true },
      ],
    },
    tax: {
      kicker: 'Tax & invoices · Germany',
      title: 'Ready for your Steuerberater.',
      body: 'The right VAT on every service, including the Kleinunternehmer rule (§19 UStG). A tax overview per month or quarter, and an export your advisor can load into DATEV.',
      rowsLabel: 'Example: Q3 overview',
      rows: [
        { label: 'Revenue incl. 19% VAT', value: '€8,420' },
        { label: 'VAT included', value: '€1,344' },
        { label: 'DATEV export', value: 'ready', isPositive: true },
      ],
    },
    features: [
      {
        title: 'A booking page AI can book',
        body: 'Your logo, services and free times. Clients book in three taps, and AI assistants can book it too.',
      },
      {
        title: 'Payments at booking',
        body: 'Stripe is built in, so clients pay when they book. Less chasing afterwards.',
      },
      {
        title: 'Reminders that send themselves',
        body: 'Automatic confirmations and reminders by SMS and email.',
      },
      {
        title: 'Gift cards & loyalty',
        body: 'Sell gift cards online and reward regulars with points.',
      },
      {
        title: 'A client portal',
        body: 'Clients see their history, reschedule and rebook without calling you.',
      },
      {
        title: 'AI receptionist',
        body: 'Answers on WhatsApp, by email and in your website chat, and books straight into the same calendar.',
        tag: 'Add-on',
      },
    ],
  },
  de: {
    kicker: 'Das ganze Studio',
    title: ['Ein Buchungssystem.', 'Und alles drumherum.'],
    lead: 'Mit Buchungen verdienen Sie Ihr Geld, deshalb fängt Zenno dort an. Zahlungen, No-Shows, Steuern und Chats liegen am selben Ort.',
    noShow: {
      kicker: 'No-Show-Schutz',
      title: 'Leerer Stuhl, trotzdem bezahlt.',
      body: 'Verlangen Sie bei der Buchung eine Anzahlung oder den vollen Preis. Oder hinterlegen Sie die Karte und berechnen Sie eine Gebühr, wenn jemand nicht erscheint oder zu spät absagt.',
      rowsLabel: 'Beispiel: Samstag, 11:00',
      rows: [
        { label: 'Balayage · Anzahlung bei Buchung', value: '20 € bezahlt', isPositive: true },
        { label: 'Hinterlegte Karte', value: 'Visa ·· 4242' },
        { label: 'No-Show-Gebühr', value: '25 € belastet', isPositive: true },
      ],
    },
    tax: {
      kicker: 'Steuern & Rechnungen · Deutschland',
      title: 'Bereit für Ihre Steuerberatung.',
      body: 'Die richtige Umsatzsteuer auf jede Leistung, auch mit Kleinunternehmerregelung (§19 UStG). Eine Steuerübersicht pro Monat oder Quartal und ein Export, den Ihre Steuerberatung in DATEV übernimmt.',
      rowsLabel: 'Beispiel: Übersicht Q3',
      rows: [
        { label: 'Umsatz inkl. 19 % USt', value: '8.420 €' },
        { label: 'Enthaltene USt', value: '1.344 €' },
        { label: 'DATEV-Export', value: 'bereit', isPositive: true },
      ],
    },
    features: [
      {
        title: 'Eine Buchungsseite, die die KI buchen kann',
        body: 'Ihr Logo, Ihre Leistungen, Ihre freien Zeiten. Kundschaft bucht mit drei Klicks, KI-Assistenten ebenso.',
      },
      {
        title: 'Bezahlung bei der Buchung',
        body: 'Stripe ist integriert, Kundschaft zahlt direkt beim Buchen. Weniger Hinterherlaufen.',
      },
      {
        title: 'Erinnerungen, die von selbst rausgehen',
        body: 'Automatische Bestätigungen und Erinnerungen per SMS und E-Mail.',
      },
      {
        title: 'Gutscheine & Treueprogramm',
        body: 'Gutscheine online verkaufen und Stammkundschaft mit Punkten belohnen.',
      },
      {
        title: 'Ein Kundenportal',
        body: 'Kundschaft sieht ihre Historie, verschiebt und bucht neu, ohne anzurufen.',
      },
      {
        title: 'KI-Empfang',
        body: 'Antwortet auf WhatsApp, per E-Mail und im Website-Chat und bucht direkt in denselben Kalender.',
        tag: 'Zusatz',
      },
    ],
  },
  th: {
    kicker: 'ครบทั้งสตูดิโอ',
    title: ['ระบบจองระบบเดียว', 'พร้อมทุกอย่างรอบตัว'],
    lead: 'การจองคือที่มาของรายได้ Zenno จึงเริ่มจากตรงนั้น การรับชำระเงิน การจัดการลูกค้าไม่มาตามนัด ภาษี และแชท อยู่ในที่เดียวกัน',
    noShow: {
      kicker: 'ป้องกันลูกค้าไม่มาตามนัด',
      title: 'เก้าอี้ว่าง แต่ยังได้เงิน',
      body: 'เก็บมัดจำหรือเก็บเต็มจำนวนตอนลูกค้าจอง หรือบันทึกบัตรไว้ แล้วเรียกเก็บค่าธรรมเนียมหากลูกค้าไม่มาหรือยกเลิกกระชั้นชิด',
      rowsLabel: 'ตัวอย่าง: วันเสาร์ 11:00',
      rows: [
        { label: 'ทำสีบาลายาจ · มัดจำตอนจอง', value: 'ชำระแล้ว €20', isPositive: true },
        { label: 'บัตรที่บันทึกไว้', value: 'Visa ·· 4242' },
        { label: 'ค่าธรรมเนียมไม่มาตามนัด', value: 'เรียกเก็บแล้ว €25', isPositive: true },
      ],
    },
    tax: {
      kicker: 'ภาษีและใบแจ้งหนี้ · เยอรมนี',
      title: 'พร้อมส่งให้นักบัญชีของคุณ',
      body: 'คิดภาษีมูลค่าเพิ่มถูกต้องในทุกบริการ รวมถึงกฎผู้ประกอบการรายย่อย (§19 UStG) มีสรุปภาษีรายเดือนหรือรายไตรมาส และส่งออกข้อมูลให้นักบัญชีนำเข้า DATEV ได้',
      rowsLabel: 'ตัวอย่าง: สรุปไตรมาส 3',
      rows: [
        { label: 'รายได้รวม VAT 19%', value: '€8,420' },
        { label: 'VAT ที่รวมอยู่', value: '€1,344' },
        { label: 'ส่งออก DATEV', value: 'พร้อม', isPositive: true },
      ],
    },
    features: [
      {
        title: 'หน้าจองที่ AI จองได้',
        body: 'โลโก้ บริการ และเวลาว่างของคุณ ลูกค้าจองได้ในสามคลิก และผู้ช่วย AI ก็จองได้เช่นกัน',
      },
      {
        title: 'รับชำระเงินตอนจอง',
        body: 'เชื่อมต่อ Stripe ในตัว ลูกค้าจ่ายตอนจอง ไม่ต้องตามเก็บทีหลัง',
      },
      {
        title: 'แจ้งเตือนอัตโนมัติ',
        body: 'ส่งข้อความยืนยันและแจ้งเตือนทาง SMS และอีเมลให้เอง',
      },
      {
        title: 'บัตรของขวัญและระบบสะสมแต้ม',
        body: 'ขายบัตรของขวัญออนไลน์ และให้แต้มกับลูกค้าประจำ',
      },
      {
        title: 'พอร์ทัลลูกค้า',
        body: 'ลูกค้าดูประวัติ เลื่อนนัด และจองใหม่ได้เอง โดยไม่ต้องโทรหาคุณ',
      },
      {
        title: 'พนักงานต้อนรับ AI',
        body: 'ตอบทาง WhatsApp อีเมล และแชทบนเว็บไซต์ แล้วจองเข้าปฏิทินเดียวกันทันที',
        tag: 'ส่วนเสริม',
      },
    ],
  },
}
