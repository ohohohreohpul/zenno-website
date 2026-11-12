import type { ComparePageSet } from './types'

/**
 * Phorest facts from phorest.com/de, checked 11 Nov 2026. Prices are quote-only.
 * No switching section: an import from Phorest is not confirmed for Zenno.
 */
const SOURCES = [
  { label: 'phorest.com: Preise', href: 'https://www.phorest.com/de/preise/' },
  { label: 'phorest.com: AGB', href: 'https://www.phorest.com/de/agb/' },
  { label: 'phorest.com: KI-Funktionen', href: 'https://www.phorest.com/de/funktionen/ai-funktionen/' },
  { label: 'phorest.com: TSE', href: 'https://www.phorest.com/de/tse/' },
]

export const PHOREST: ComparePageSet = {
  de: {
    meta: {
      title: 'Phorest-Alternative: Zenno vs Phorest im Vergleich | Zenno',
      description:
        'Phorest oder Zenno? Vergleich für Kosmetik-, Massage- und Spa-Betriebe: Preise und Laufzeit, kostenloser Start, Anzahlungen, KI für WhatsApp, Gutscheine, TSE und DATEV. Mit Quellen von phorest.com.',
    },
    label: 'Zenno vs Phorest',
    hero: {
      kicker: 'Phorest-Alternative',
      title: ['Zenno vs Phorest:', 'schlank starten oder Komplett-Suite.'],
      lead: 'Phorest ist eine umfangreiche Salon-Suite mit Marketing, Kasse mit TSE und persönlicher Einrichtung, Preise gibt es auf Anfrage. Zenno startet kostenlos, ohne Angebot und ohne Demo-Termin. Hier der Vergleich, mit Quellen.',
    },
    fit: {
      kicker: 'Wer zu wem passt',
      title: ['Ehrlich verglichen,', 'nicht schöngerechnet.'],
      zenno: {
        title: 'Zenno passt, wenn Sie …',
        items: [
          'heute selbst starten wollen, mit einem Free-Tarif und einem festen Preis von 49 € im Monat',
          'vor dem Kauf mit echten Buchungen testen wollen statt mit einer Demo',
          'eine KI-Rezeption für WhatsApp, E-Mail und Website-Chat im Preis inklusive wollen',
          '10er-Karten und Gutscheinsets verkaufen wollen',
        ],
      },
      them: {
        title: 'Phorest passt, wenn Sie …',
        items: [
          'ein größeres Institut führen und Marketing wie Reconnect, Bewertungsmanager oder Werbemanager in der Software wollen',
          'eine GoBD-konforme Kasse mit Cloud-TSE und DATEV-Export brauchen',
          'Einrichtung, Datenübernahme und eine persönliche Ansprechperson inklusive wollen',
          'eine eigene Salon-App unter Ihrer Marke möchten (ab Paket Power)',
        ],
      },
    },
    table: {
      kicker: 'Im Vergleich',
      title: ['Preise und Funktionen,', 'Punkt für Punkt.'],
      rows: [
        {
          topic: 'Preis',
          zenno: 'Free 0 €. Zenno 49 € im Monat mit allem und 1.000 KI-Antworten.',
          them: 'Pakete Kickstart, Power und Power +. Preise nur auf Anfrage.',
          source: 0,
        },
        {
          topic: 'Kostenlos testen',
          zenno: 'Free-Tarif ohne Zeitlimit, ohne Kreditkarte.',
          them: 'Keine kostenlose Testversion, stattdessen eine Demo.',
          source: 0,
        },
        {
          topic: 'Vertragslaufzeit',
          zenno: 'Monatspreis, ohne Angebotsverfahren.',
          them: '12, 24 oder 36 Monate je nach Angebot. Verlängert sich um 12 Monate, wenn nicht 2 Monate vor Ende gekündigt wird.',
          source: 1,
        },
        {
          topic: 'Anzahlungen & No-Shows',
          zenno: 'Anzahlung, voller Preis oder hinterlegte Karte mit No-Show-Gebühr, über Stripe.',
          them: 'Online-Anzahlungen, No-Show-Gebühr, gespeicherte Kartendaten.',
          source: 0,
        },
        {
          topic: 'KI für Kundenanfragen',
          zenno: 'KI-Rezeption auf WhatsApp (Ihre Nummer), per E-Mail und im Website-Chat, im Zenno-Tarif enthalten.',
          them: 'Front Desk AI bucht, verschiebt und storniert per SMS und WhatsApp. Preis und Paket nicht angegeben.',
          source: 2,
        },
        {
          topic: 'Gutscheine & Mehrfachkarten',
          zenno: 'Wertgutscheine, Gutscheinsets und Mehrfachkarten, per QR eingelöst.',
          them: 'Online-Gutscheine und Gutscheine an der Kasse. Mehrfachkarten sind nicht angegeben.',
          source: 0,
        },
        {
          topic: 'Marketing',
          zenno: 'Treuepunkte für Stammkundschaft. Seite bereit für Buchungen durch KI-Assistenten.',
          them: 'Reconnect, Bewertungsmanager, eigene Salon-App (ab Power), Werbemanager (Power +).',
          source: 0,
        },
        {
          topic: 'Kasse & Steuer',
          zenno: 'Kassenbuch, Umsatzsteuer inkl. Kleinunternehmer, DATEV-Export.',
          them: 'Cloud-TSE über fiskaltrust, GoBD-konform laut Phorest, DATEV-Export.',
          source: 3,
        },
      ],
    },
    faq: {
      kicker: 'Fragen zum Vergleich',
      title: ['Zenno oder Phorest?', 'Kurz beantwortet.'],
      items: [
        {
          q: 'Was kostet Phorest?',
          a: 'Phorest veröffentlicht keine Preise. Für alle drei Pakete (Kickstart, Power, Power +) gibt es ein Angebot auf Anfrage. Die Laufzeit beträgt laut AGB 12, 24 oder 36 Monate. Zenno kostet 0 € im Free-Tarif oder 49 € im Monat.',
        },
        {
          q: 'Kann ich Phorest kostenlos testen?',
          a: 'Laut phorest.com nicht: Phorest bietet keine kostenlose Testversion an, sondern eine Demo. Zenno können Sie im Free-Tarif ohne Zeitlimit mit echten Buchungen nutzen.',
        },
        {
          q: 'Hat Zenno so viele Marketing-Funktionen wie Phorest?',
          a: 'Nein. Phorest hat eine größere Marketing-Suite mit Reconnect, Bewertungsmanager, eigener App und Werbemanager. Zenno konzentriert sich auf Buchung, Anzahlungen, Gutscheine, Treuepunkte und eine KI-Rezeption, die Anfragen beantwortet und bucht.',
        },
      ],
    },
    sources: SOURCES,
  },
  en: {
    meta: {
      title: 'Phorest alternative: Zenno vs Phorest compared | Zenno',
      description:
        'Phorest or Zenno? A comparison for beauty, massage and spa businesses: pricing and contract term, free start, deposits, AI for WhatsApp, gift cards, TSE and DATEV. With sources from phorest.com.',
    },
    label: 'Zenno vs Phorest',
    hero: {
      kicker: 'Phorest alternative',
      title: ['Zenno vs Phorest:', 'start lean or go full suite.'],
      lead: 'Phorest is a large salon suite with marketing, a TSE till and personal onboarding, priced on request. Zenno starts free, with no quote and no demo call. Here is the comparison, with sources.',
    },
    fit: {
      kicker: 'Who fits which',
      title: ['An honest comparison,', 'not a sales sheet.'],
      zenno: {
        title: 'Zenno fits if you …',
        items: [
          'want to start yourself today, on a free plan and a fixed €49 a month',
          'want to test with real bookings before paying, not a demo',
          'want an AI receptionist for WhatsApp, email and website chat included in the price',
          'want to sell ten-visit passes and voucher sets',
        ],
      },
      them: {
        title: 'Phorest fits if you …',
        items: [
          'run a larger business and want marketing like Reconnect, a reputation manager or an ad manager built in',
          'need a GoBD-compliant till with cloud TSE and DATEV export',
          'want setup, data migration and a personal contact included',
          'want your own branded salon app (from the Power package)',
        ],
      },
    },
    table: {
      kicker: 'Side by side',
      title: ['Pricing and features,', 'point by point.'],
      rows: [
        {
          topic: 'Price',
          zenno: 'Free €0. Zenno €49 a month with everything and 1,000 AI replies.',
          them: 'Kickstart, Power and Power + packages. Prices on request only.',
          source: 0,
        },
        {
          topic: 'Try for free',
          zenno: 'Free plan with no time limit, no credit card.',
          them: 'No free trial; a demo instead.',
          source: 0,
        },
        {
          topic: 'Contract term',
          zenno: 'Monthly price, no quote process.',
          them: '12, 24 or 36 months depending on the quote. Renews for 12 months unless cancelled 2 months before the end.',
          source: 1,
        },
        {
          topic: 'Deposits & no-shows',
          zenno: 'Deposit, full price or card on file with a no-show fee, via Stripe.',
          them: 'Online deposits, no-show fee, stored card details.',
          source: 0,
        },
        {
          topic: 'AI for client messages',
          zenno: 'AI receptionist on WhatsApp (your number), email and website chat, included in the Zenno plan.',
          them: 'Front Desk AI books, reschedules and cancels over SMS and WhatsApp. Price and package not stated.',
          source: 2,
        },
        {
          topic: 'Gift cards & passes',
          zenno: 'Value vouchers, voucher sets and multi-visit passes, redeemed by QR.',
          them: 'Online vouchers and vouchers at the till. Multi-visit passes are not stated.',
          source: 0,
        },
        {
          topic: 'Marketing',
          zenno: 'Loyalty points for regulars. A page ready for AI assistants to book.',
          them: 'Reconnect, reputation manager, own salon app (from Power), ad manager (Power +).',
          source: 0,
        },
        {
          topic: 'Till & tax',
          zenno: 'Cash book, VAT incl. the Kleinunternehmer rule, DATEV export.',
          them: 'Cloud TSE via fiskaltrust, GoBD-compliant according to Phorest, DATEV export.',
          source: 3,
        },
      ],
    },
    faq: {
      kicker: 'Comparison questions',
      title: ['Zenno or Phorest?', 'Answered briefly.'],
      items: [
        {
          q: 'How much does Phorest cost?',
          a: 'Phorest doesn’t publish prices. All three packages (Kickstart, Power, Power +) are quoted on request, and its terms set a contract of 12, 24 or 36 months. Zenno costs €0 on the free plan or €49 a month.',
        },
        {
          q: 'Can I try Phorest for free?',
          a: 'According to phorest.com, no: Phorest offers a demo rather than a free trial. You can use Zenno’s free plan with real bookings and no time limit.',
        },
        {
          q: 'Does Zenno have as many marketing features as Phorest?',
          a: 'No. Phorest has a bigger marketing suite with Reconnect, a reputation manager, its own app and an ad manager. Zenno focuses on booking, deposits, gift cards, loyalty points and an AI receptionist that answers and books.',
        },
      ],
    },
    sources: SOURCES,
  },
  th: {
    meta: {
      title: 'ทางเลือกแทน Phorest: เปรียบเทียบ Zenno กับ Phorest | Zenno',
      description:
        'Phorest หรือ Zenno เปรียบเทียบสำหรับร้านเสริมสวย ร้านนวด และสปา: ราคาและอายุสัญญา การเริ่มใช้ฟรี มัดจำ AI สำหรับ WhatsApp บัตรของขวัญ TSE และ DATEV พร้อมแหล่งที่มาจาก phorest.com',
    },
    label: 'Zenno vs Phorest',
    hero: {
      kicker: 'ทางเลือกแทน Phorest',
      title: ['Zenno vs Phorest', 'เริ่มแบบเบาๆ หรือชุดเต็มรูปแบบ'],
      lead: 'Phorest เป็นชุดซอฟต์แวร์ร้านขนาดใหญ่ มีเครื่องมือการตลาด เครื่องเก็บเงินพร้อม TSE และการตั้งค่าแบบมีคนดูแล ราคาต้องขอใบเสนอ ส่วน Zenno เริ่มใช้ฟรี ไม่ต้องขอใบเสนอราคาหรือนัดเดโม นี่คือการเปรียบเทียบพร้อมแหล่งที่มา',
    },
    fit: {
      kicker: 'แบบไหนเหมาะกับใคร',
      title: ['เปรียบเทียบอย่างตรงไปตรงมา', 'ไม่ใช่ใบโฆษณา'],
      zenno: {
        title: 'Zenno เหมาะถ้าคุณ…',
        items: [
          'อยากเริ่มเองได้วันนี้ ด้วยแพ็กเกจฟรีและราคาคงที่ €49 ต่อเดือน',
          'อยากทดลองกับการจองจริงก่อนจ่าย แทนการดูเดโม',
          'อยากได้พนักงานต้อนรับ AI สำหรับ WhatsApp อีเมล และแชทบนเว็บไซต์ รวมในราคา',
          'อยากขายบัตร 10 ครั้งและชุดบัตรของขวัญ',
        ],
      },
      them: {
        title: 'Phorest เหมาะถ้าคุณ…',
        items: [
          'มีกิจการขนาดใหญ่และอยากได้เครื่องมือการตลาด เช่น Reconnect ระบบจัดการรีวิว หรือระบบจัดการโฆษณา',
          'ต้องการเครื่องเก็บเงินที่สอดคล้อง GoBD พร้อม Cloud-TSE และไฟล์ส่งออก DATEV',
          'อยากได้การตั้งค่า การย้ายข้อมูล และผู้ดูแลส่วนตัวรวมในแพ็กเกจ',
          'อยากมีแอปของร้านในแบรนด์ตัวเอง (ตั้งแต่แพ็กเกจ Power)',
        ],
      },
    },
    table: {
      kicker: 'เทียบกันทีละข้อ',
      title: ['ราคาและฟีเจอร์', 'ทีละหัวข้อ'],
      rows: [
        {
          topic: 'ราคา',
          zenno: 'Free €0 แพ็กเกจ Zenno €49 ต่อเดือน ได้ทุกอย่างและการตอบด้วย AI 1,000 ข้อความ',
          them: 'แพ็กเกจ Kickstart, Power และ Power + ราคาต้องขอใบเสนอเท่านั้น',
          source: 0,
        },
        {
          topic: 'ทดลองใช้ฟรี',
          zenno: 'แพ็กเกจฟรีไม่จำกัดเวลา ไม่ต้องใช้บัตรเครดิต',
          them: 'ไม่มีรุ่นทดลองฟรี มีเดโมแทน',
          source: 0,
        },
        {
          topic: 'อายุสัญญา',
          zenno: 'ราคารายเดือน ไม่ต้องขอใบเสนอราคา',
          them: '12, 24 หรือ 36 เดือนตามใบเสนอราคา ต่ออายุอัตโนมัติ 12 เดือนหากไม่ยกเลิกล่วงหน้า 2 เดือน',
          source: 1,
        },
        {
          topic: 'มัดจำและการไม่มาตามนัด',
          zenno: 'มัดจำ เต็มจำนวน หรือผูกบัตรพร้อมค่าธรรมเนียมเมื่อไม่มา ผ่าน Stripe',
          them: 'มัดจำออนไลน์ ค่าธรรมเนียมเมื่อไม่มา และบันทึกข้อมูลบัตร',
          source: 0,
        },
        {
          topic: 'AI ตอบลูกค้า',
          zenno: 'พนักงานต้อนรับ AI บน WhatsApp (เบอร์ของคุณ) อีเมล และแชทบนเว็บไซต์ รวมในแพ็กเกจ Zenno',
          them: 'Front Desk AI จอง เลื่อน และยกเลิกคิวทาง SMS และ WhatsApp ไม่ได้ระบุราคาและแพ็กเกจ',
          source: 2,
        },
        {
          topic: 'บัตรของขวัญและบัตรหลายครั้ง',
          zenno: 'บัตรมูลค่า ชุดบัตรของขวัญ และบัตรหลายครั้ง ใช้ด้วย QR',
          them: 'บัตรของขวัญออนไลน์และที่เครื่องเก็บเงิน ไม่ได้ระบุบัตรหลายครั้ง',
          source: 0,
        },
        {
          topic: 'การตลาด',
          zenno: 'แต้มสะสมสำหรับลูกค้าประจำ และหน้าที่พร้อมให้ผู้ช่วย AI จอง',
          them: 'Reconnect ระบบจัดการรีวิว แอปของร้าน (ตั้งแต่ Power) และระบบจัดการโฆษณา (Power +)',
          source: 0,
        },
        {
          topic: 'เครื่องเก็บเงินและภาษี',
          zenno: 'สมุดเงินสด ภาษีมูลค่าเพิ่มรวมกฎ Kleinunternehmer และไฟล์ส่งออก DATEV',
          them: 'Cloud-TSE ผ่าน fiskaltrust สอดคล้อง GoBD ตามที่ Phorest ระบุ และไฟล์ส่งออก DATEV',
          source: 3,
        },
      ],
    },
    faq: {
      kicker: 'คำถามเรื่องการเปรียบเทียบ',
      title: ['Zenno หรือ Phorest', 'ตอบสั้นๆ'],
      items: [
        {
          q: 'Phorest ราคาเท่าไร',
          a: 'Phorest ไม่ได้เผยแพร่ราคา ทั้งสามแพ็กเกจ (Kickstart, Power, Power +) ต้องขอใบเสนอราคา และตามเงื่อนไขสัญญามีอายุ 12, 24 หรือ 36 เดือน ส่วน Zenno ราคา €0 ในแพ็กเกจฟรี หรือ €49 ต่อเดือน',
        },
        {
          q: 'ทดลองใช้ Phorest ฟรีได้ไหม',
          a: 'ตาม phorest.com ไม่ได้ Phorest มีเดโมแทนรุ่นทดลองฟรี ส่วน Zenno ใช้แพ็กเกจฟรีกับการจองจริงได้โดยไม่จำกัดเวลา',
        },
        {
          q: 'Zenno มีฟีเจอร์การตลาดเท่า Phorest ไหม',
          a: 'ไม่ Phorest มีชุดเครื่องมือการตลาดที่ใหญ่กว่า ทั้ง Reconnect ระบบจัดการรีวิว แอปของร้าน และระบบจัดการโฆษณา Zenno เน้นการจอง มัดจำ บัตรของขวัญ แต้มสะสม และพนักงานต้อนรับ AI ที่ตอบและจองคิวให้',
        },
      ],
    },
    sources: SOURCES,
  },
}
