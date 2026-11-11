import type { ComparePageSet } from './types'

/**
 * Fresha facts from fresha.com/de, checked 11 Nov 2026. Prices are net.
 * Not used: a euro rate for the marketplace new-client fee (not shown for Germany).
 * No switching section: an import from Fresha is not confirmed for Zenno.
 */
const SOURCES = [
  { label: 'fresha.com: Preise', href: 'https://www.fresha.com/de/pricing' },
  { label: 'fresha.com: Marktplatz', href: 'https://www.fresha.com/de/for-business/features/marketplace' },
  { label: 'fresha.com: KI-Rezeption', href: 'https://www.fresha.com/de/for-business/features/ai-concierge' },
  {
    label: 'fresha.com Hilfe: Gebühren für neue Marktplatz-Kunden',
    href: 'https://www.fresha.com/de/help-center/knowledge-base/billing-and-fees/101357-marketplace-new-client-fees',
  },
]

export const FRESHA: ComparePageSet = {
  de: {
    meta: {
      title: 'Fresha-Alternative: Zenno vs Fresha im Vergleich | Zenno',
      description:
        'Fresha oder Zenno? Vergleich für Massage-, Kosmetik- und Spa-Betriebe: Preis pro Teammitglied, Marktplatz, Zahlungsgebühren, SMS und WhatsApp, KI-Rezeption, DATEV. Mit Quellen von fresha.com.',
    },
    label: 'Zenno vs Fresha',
    hero: {
      kicker: 'Fresha-Alternative',
      title: ['Zenno vs Fresha:', 'Preis pro Kopf oder Festpreis.'],
      lead: 'Fresha ist günstig für Selbstständige und rechnet im Team pro Mitglied ab, die KI-Rezeption kostet extra. Zenno kostet 49 € im Monat für das ganze Team, mit KI-Rezeption und DATEV-Export. Hier der Vergleich, mit Quellen.',
    },
    fit: {
      kicker: 'Wer zu wem passt',
      title: ['Ehrlich verglichen,', 'nicht schöngerechnet.'],
      zenno: {
        title: 'Zenno passt, wenn Sie …',
        items: [
          'mit mehreren Therapeutinnen einen festen Monatspreis wollen statt eines Preises pro Kopf',
          'die KI-Rezeption für WhatsApp, E-Mail und Website-Chat im Preis inklusive wollen',
          'einen DATEV-Export für Ihre Steuerberatung brauchen',
          'keinen Marktplatz wollen, auf dem Ihre Kundschaft andere Studios sieht',
        ],
      },
      them: {
        title: 'Fresha passt, wenn Sie …',
        items: [
          'allein arbeiten und den günstigsten Einstieg suchen (12,95 € netto im Monat)',
          'über einen großen internationalen Marktplatz Neukundschaft finden wollen',
          'Mitgliedschaften und Pakete verkaufen möchten',
          'ohne Mindestlaufzeit monatlich kündbar bleiben wollen',
        ],
      },
    },
    table: {
      kicker: 'Im Vergleich',
      title: ['Preise und Funktionen,', 'Punkt für Punkt.'],
      rows: [
        {
          topic: 'Preis',
          zenno: 'Free 0 €. Zenno 49 € im Monat für das ganze Team, mit 1.000 KI-Antworten.',
          them: 'Selbstständig 12,95 € netto im Monat. Team 8,95 € netto pro Teammitglied im Monat. Ohne Mindestlaufzeit.',
          source: 0,
        },
        {
          topic: 'Kostenlos testen',
          zenno: 'Free-Tarif ohne Zeitlimit, ohne Kreditkarte.',
          them: '7 Tage Testphase. Kein Gratis-Tarif.',
          source: 0,
        },
        {
          topic: 'Marktplatz',
          zenno: 'Kein Marktplatz. Kundschaft bucht auf Ihrer eigenen Seite.',
          them: 'Marktplatz mit Fresha-App und Fresha-Konto für Kundinnen und Kunden. Für neue Marktplatz-Kunden beschreibt Fresha eine einmalige Gebühr auf den ersten Termin.',
          source: 3,
        },
        {
          topic: 'Kartenzahlung',
          zenno: 'Online über Stripe zu den üblichen Stripe-Gebühren.',
          them: '1,29 % + 0,20 € pro Zahlung, online und vor Ort.',
          source: 0,
        },
        {
          topic: 'Erinnerungen',
          zenno: 'Per SMS und E-Mail.',
          them: 'E-Mail kostenlos. 20 SMS oder WhatsApp im Monat frei, danach 0,14 € pro SMS.',
          source: 0,
        },
        {
          topic: 'KI-Rezeption',
          zenno: 'Antwortet auf WhatsApp (Ihre Nummer), per E-Mail und im Website-Chat und bucht. Im Zenno-Tarif enthalten.',
          them: 'Zusatzmodul für Nachrichten: 28,95 € netto pro Standort im Monat. Rechenbeispiel: 3 Teammitglieder plus KI = 55,80 € netto im Monat.',
          source: 0,
        },
        {
          topic: 'Gutscheine & Pakete',
          zenno: 'Wertgutscheine, Gutscheinsets und Mehrfachkarten, per QR eingelöst.',
          them: 'Geschenkgutscheine, Pakete und Mitgliedschaften.',
          source: 0,
        },
        {
          topic: 'Steuer & Buchhaltung',
          zenno: 'Kassenbuch, Umsatzsteuer inkl. Kleinunternehmer, DATEV-Export.',
          them: 'DATEV nicht angegeben. Xero-Anbindung für 8,95 € netto pro Standort im Monat.',
          source: 0,
        },
      ],
    },
    faq: {
      kicker: 'Fragen zum Vergleich',
      title: ['Zenno oder Fresha?', 'Kurz beantwortet.'],
      items: [
        {
          q: 'Ist Fresha günstiger als Zenno?',
          a: 'Für Selbstständige ohne KI-Rezeption ja: Fresha kostet laut fresha.com 12,95 € netto im Monat. Im Team zahlen Sie 8,95 € netto pro Teammitglied, die KI-Rezeption kostet 28,95 € netto pro Standort zusätzlich. Zenno kostet 49 € im Monat für das ganze Team, mit KI-Rezeption und 1.000 Antworten.',
        },
        {
          q: 'Hat Fresha einen DATEV-Export?',
          a: 'Auf den deutschen Seiten von Fresha ist kein DATEV-Export angegeben; als Buchhaltungsanbindung wird Xero genannt. Zenno hat einen DATEV-Export für Ihre Steuerberatung.',
        },
        {
          q: 'Brauchen meine Kundinnen ein Konto?',
          a: 'Bei Zenno nicht: Gebucht wird ohne Konto, mit Bestätigung und Stornolink. Auf dem Fresha-Marktplatz buchen Kundinnen und Kunden mit der Fresha-App und einem Fresha-Konto.',
        },
      ],
    },
    sources: SOURCES,
  },
  en: {
    meta: {
      title: 'Fresha alternative: Zenno vs Fresha compared | Zenno',
      description:
        'Fresha or Zenno? A comparison for massage, beauty and spa businesses: price per team member, marketplace, payment fees, SMS and WhatsApp, AI receptionist, DATEV. With sources from fresha.com.',
    },
    label: 'Zenno vs Fresha',
    hero: {
      kicker: 'Fresha alternative',
      title: ['Zenno vs Fresha:', 'per-head price or flat price.'],
      lead: 'Fresha is cheap for solo practitioners and charges per team member for teams, with the AI receptionist as an add-on. Zenno costs €49 a month for the whole team, with the AI receptionist and DATEV export. Here is the comparison, with sources.',
    },
    fit: {
      kicker: 'Who fits which',
      title: ['An honest comparison,', 'not a sales sheet.'],
      zenno: {
        title: 'Zenno fits if you …',
        items: [
          'have several therapists and want one flat monthly price instead of a per-head price',
          'want the AI receptionist for WhatsApp, email and website chat included in the price',
          'need a DATEV export for your tax advisor',
          'don’t want a marketplace where your clients see other studios',
        ],
      },
      them: {
        title: 'Fresha fits if you …',
        items: [
          'work alone and want the cheapest entry (€12.95 net a month)',
          'want new clients from a large international marketplace',
          'want to sell memberships and packages',
          'want no minimum term and monthly cancellation',
        ],
      },
    },
    table: {
      kicker: 'Side by side',
      title: ['Pricing and features,', 'point by point.'],
      rows: [
        {
          topic: 'Price',
          zenno: 'Free €0. Zenno €49 a month for the whole team, with 1,000 AI replies.',
          them: 'Independent €12.95 net a month. Team €8.95 net per team member a month. No minimum term.',
          source: 0,
        },
        {
          topic: 'Try for free',
          zenno: 'Free plan with no time limit, no credit card.',
          them: '7-day trial. No free plan.',
          source: 0,
        },
        {
          topic: 'Marketplace',
          zenno: 'No marketplace. Clients book on your own page.',
          them: 'Marketplace with the Fresha app and a Fresha account for clients. Fresha describes a one-time fee on the first appointment of new marketplace clients.',
          source: 3,
        },
        {
          topic: 'Card payments',
          zenno: 'Online via Stripe at Stripe’s usual fees.',
          them: '1.29% + €0.20 per payment, online and in person.',
          source: 0,
        },
        {
          topic: 'Reminders',
          zenno: 'By SMS and email.',
          them: 'Email free. 20 SMS or WhatsApp messages free a month, then €0.14 per SMS.',
          source: 0,
        },
        {
          topic: 'AI receptionist',
          zenno: 'Answers on WhatsApp (your number), email and website chat and books. Included in the Zenno plan.',
          them: 'Messaging add-on: €28.95 net per location a month. Example: 3 team members plus AI = €55.80 net a month.',
          source: 0,
        },
        {
          topic: 'Gift cards & packages',
          zenno: 'Value vouchers, voucher sets and multi-visit passes, redeemed by QR.',
          them: 'Gift cards, packages and memberships.',
          source: 0,
        },
        {
          topic: 'Tax & accounting',
          zenno: 'Cash book, VAT incl. the Kleinunternehmer rule, DATEV export.',
          them: 'DATEV not stated. Xero integration at €8.95 net per location a month.',
          source: 0,
        },
      ],
    },
    faq: {
      kicker: 'Comparison questions',
      title: ['Zenno or Fresha?', 'Answered briefly.'],
      items: [
        {
          q: 'Is Fresha cheaper than Zenno?',
          a: 'For a solo practitioner without an AI receptionist, yes: fresha.com lists €12.95 net a month. Teams pay €8.95 net per team member, and the AI receptionist costs another €28.95 net per location. Zenno costs €49 a month for the whole team, with the AI receptionist and 1,000 replies.',
        },
        {
          q: 'Does Fresha have a DATEV export?',
          a: 'Fresha’s German pages don’t mention a DATEV export; the accounting integration listed is Xero. Zenno has a DATEV export for your tax advisor.',
        },
        {
          q: 'Do my clients need an account?',
          a: 'Not with Zenno: clients book without an account and get a confirmation with a cancel link. On the Fresha marketplace, clients book with the Fresha app and a Fresha account.',
        },
      ],
    },
    sources: SOURCES,
  },
  th: {
    meta: {
      title: 'ทางเลือกแทน Fresha: เปรียบเทียบ Zenno กับ Fresha | Zenno',
      description:
        'Fresha หรือ Zenno เปรียบเทียบสำหรับร้านนวด ร้านเสริมสวย และสปา: ราคาต่อพนักงาน มาร์เก็ตเพลส ค่าธรรมเนียมชำระเงิน SMS และ WhatsApp พนักงานต้อนรับ AI และ DATEV พร้อมแหล่งที่มาจาก fresha.com',
    },
    label: 'Zenno vs Fresha',
    hero: {
      kicker: 'ทางเลือกแทน Fresha',
      title: ['Zenno vs Fresha', 'ราคาต่อหัวหรือราคาคงที่'],
      lead: 'Fresha ราคาถูกสำหรับคนทำงานคนเดียว และคิดเงินตามจำนวนพนักงานสำหรับทีม พนักงานต้อนรับ AI เป็นส่วนเสริมที่ต้องจ่ายเพิ่ม ส่วน Zenno ราคา €49 ต่อเดือนสำหรับทั้งทีม รวมพนักงานต้อนรับ AI และไฟล์ส่งออก DATEV นี่คือการเปรียบเทียบพร้อมแหล่งที่มา',
    },
    fit: {
      kicker: 'แบบไหนเหมาะกับใคร',
      title: ['เปรียบเทียบอย่างตรงไปตรงมา', 'ไม่ใช่ใบโฆษณา'],
      zenno: {
        title: 'Zenno เหมาะถ้าคุณ…',
        items: [
          'มีหมอนวดหลายคนและอยากได้ราคารายเดือนคงที่ แทนราคาต่อหัว',
          'อยากได้พนักงานต้อนรับ AI สำหรับ WhatsApp อีเมล และแชทบนเว็บไซต์ รวมในราคา',
          'ต้องการไฟล์ส่งออก DATEV สำหรับที่ปรึกษาภาษี',
          'ไม่อยากใช้มาร์เก็ตเพลสที่ลูกค้าเห็นร้านอื่น',
        ],
      },
      them: {
        title: 'Fresha เหมาะถ้าคุณ…',
        items: [
          'ทำงานคนเดียวและอยากได้ราคาเริ่มต้นถูกที่สุด (€12.95 ต่อเดือน ไม่รวม VAT)',
          'อยากได้ลูกค้าใหม่จากมาร์เก็ตเพลสระดับนานาชาติ',
          'อยากขายสมาชิกและแพ็กเกจ',
          'อยากยกเลิกได้ทุกเดือนโดยไม่มีสัญญาขั้นต่ำ',
        ],
      },
    },
    table: {
      kicker: 'เทียบกันทีละข้อ',
      title: ['ราคาและฟีเจอร์', 'ทีละหัวข้อ'],
      rows: [
        {
          topic: 'ราคา',
          zenno: 'Free €0 แพ็กเกจ Zenno €49 ต่อเดือนสำหรับทั้งทีม พร้อมการตอบด้วย AI 1,000 ข้อความ',
          them: 'คนเดียว €12.95 ต่อเดือน ทีม €8.95 ต่อพนักงานต่อเดือน (ไม่รวม VAT) ไม่มีสัญญาขั้นต่ำ',
          source: 0,
        },
        {
          topic: 'ทดลองใช้ฟรี',
          zenno: 'แพ็กเกจฟรีไม่จำกัดเวลา ไม่ต้องใช้บัตรเครดิต',
          them: 'ทดลอง 7 วัน ไม่มีแพ็กเกจฟรี',
          source: 0,
        },
        {
          topic: 'มาร์เก็ตเพลส',
          zenno: 'ไม่มีมาร์เก็ตเพลส ลูกค้าจองบนหน้าของคุณเอง',
          them: 'มาร์เก็ตเพลสที่ลูกค้าใช้แอปและบัญชี Fresha Fresha ระบุค่าธรรมเนียมครั้งเดียวสำหรับนัดแรกของลูกค้าใหม่จากมาร์เก็ตเพลส',
          source: 3,
        },
        {
          topic: 'การชำระด้วยบัตร',
          zenno: 'ออนไลน์ผ่าน Stripe ตามค่าธรรมเนียมปกติของ Stripe',
          them: '1.29% + €0.20 ต่อรายการ ทั้งออนไลน์และที่ร้าน',
          source: 0,
        },
        {
          topic: 'การแจ้งเตือน',
          zenno: 'ทาง SMS และอีเมล',
          them: 'อีเมลฟรี SMS หรือ WhatsApp ฟรี 20 ข้อความต่อเดือน จากนั้น SMS ละ €0.14',
          source: 0,
        },
        {
          topic: 'พนักงานต้อนรับ AI',
          zenno: 'ตอบทาง WhatsApp (เบอร์ของคุณ) อีเมล และแชทบนเว็บไซต์ และจองคิว รวมในแพ็กเกจ Zenno',
          them: 'ส่วนเสริมสำหรับข้อความ €28.95 ต่อสาขาต่อเดือน (ไม่รวม VAT) ตัวอย่าง: พนักงาน 3 คนรวม AI = €55.80 ต่อเดือน',
          source: 0,
        },
        {
          topic: 'บัตรของขวัญและแพ็กเกจ',
          zenno: 'บัตรมูลค่า ชุดบัตรของขวัญ และบัตรหลายครั้ง ใช้ด้วย QR',
          them: 'บัตรของขวัญ แพ็กเกจ และสมาชิก',
          source: 0,
        },
        {
          topic: 'ภาษีและบัญชี',
          zenno: 'สมุดเงินสด ภาษีมูลค่าเพิ่มรวมกฎ Kleinunternehmer และไฟล์ส่งออก DATEV',
          them: 'ไม่ได้ระบุ DATEV มีการเชื่อมต่อ Xero ราคา €8.95 ต่อสาขาต่อเดือน',
          source: 0,
        },
      ],
    },
    faq: {
      kicker: 'คำถามเรื่องการเปรียบเทียบ',
      title: ['Zenno หรือ Fresha', 'ตอบสั้นๆ'],
      items: [
        {
          q: 'Fresha ถูกกว่า Zenno ไหม',
          a: 'สำหรับคนทำงานคนเดียวที่ไม่ใช้พนักงานต้อนรับ AI ใช่ fresha.com ระบุ €12.95 ต่อเดือนไม่รวม VAT ทีมจ่าย €8.95 ต่อพนักงาน และพนักงานต้อนรับ AI เพิ่มอีก €28.95 ต่อสาขา ส่วน Zenno ราคา €49 ต่อเดือนสำหรับทั้งทีม รวมพนักงานต้อนรับ AI และ 1,000 ข้อความ',
        },
        {
          q: 'Fresha มีไฟล์ส่งออก DATEV ไหม',
          a: 'หน้าภาษาเยอรมันของ Fresha ไม่ได้ระบุไฟล์ส่งออก DATEV ระบบบัญชีที่ระบุคือ Xero ส่วน Zenno มีไฟล์ส่งออก DATEV สำหรับที่ปรึกษาภาษี',
        },
        {
          q: 'ลูกค้าต้องมีบัญชีไหม',
          a: 'กับ Zenno ไม่ต้อง ลูกค้าจองได้โดยไม่ต้องสมัคร และได้คำยืนยันพร้อมลิงก์ยกเลิก บนมาร์เก็ตเพลส Fresha ลูกค้าจองด้วยแอปและบัญชี Fresha',
        },
      ],
    },
    sources: SOURCES,
  },
}
