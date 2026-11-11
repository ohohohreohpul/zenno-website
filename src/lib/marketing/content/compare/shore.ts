import type { ComparePageSet } from './types'

/** Shore facts from shore.com, checked 11 Nov 2026. Prices are net; a 12-month promo runs until 30 Nov 2026. */
const SOURCES = [
  { label: 'shore.com: Preise', href: 'https://www.shore.com/de/preise/' },
  { label: 'shore.com: Alle Shore-Pakete im Vergleich', href: 'https://www.shore.com/de/preise/alle-shore-pakete-vergleich' },
  { label: 'shore.com: Anzahlungen', href: 'https://www.shore.com/de/buchungssystem/anzahlungen' },
  { label: 'help.shore.com: WhatsApp-Integration mit Superchat', href: 'https://help.shore.com/en/was-ist-die-whatsapp-integration-mit-superchat-shore' },
  { label: 'shore.com: Kassensystem', href: 'https://www.shore.com/de/kassensystem' },
]

export const SHORE: ComparePageSet = {
  de: {
    meta: {
      title: 'Shore-Alternative: Zenno vs Shore im Vergleich | Zenno',
      description:
        'Shore-Alternative für Massage- und Kosmetikstudios: Preise, kostenloser Start, Anzahlungen, WhatsApp und KI-Rezeption, Gutscheine und Kasse im Vergleich. Mit Quellen von shore.com.',
    },
    label: 'Zenno vs Shore',
    hero: {
      kicker: 'Shore-Alternative',
      title: ['Zenno vs Shore:', 'was zu Ihrem Studio passt.'],
      lead: 'Beide buchen ohne Provision auf Ihrer eigenen Seite. Shore ist stark bei Kasse und TSE aus einer Hand, Zenno startet kostenlos und beantwortet WhatsApp mit einer KI-Rezeption. Hier der Vergleich, mit Quellen.',
    },
    fit: {
      kicker: 'Wer zu wem passt',
      title: ['Ehrlich verglichen,', 'nicht schöngerechnet.'],
      zenno: {
        title: 'Zenno passt, wenn Sie …',
        items: [
          'kostenlos und ohne Zeitlimit starten wollen, mit einer Therapeutin und fünf Behandlungen',
          'WhatsApp, E-Mail und Website-Chat von einer KI-Rezeption beantworten und buchen lassen wollen',
          '10er-Karten und Gutscheinsets verkaufen und per QR-Code einlösen wollen',
          'mit mehr als fünf Therapeutinnen einen festen Preis von 49 € im Monat wollen',
        ],
      },
      them: {
        title: 'Shore passt, wenn Sie …',
        items: [
          'eine iPad-Kasse mit Cloud-TSE und DATEV-Kassenarchiv aus derselben Hand wollen',
          'neben Terminen auch Einzelhandel oder Gastronomie über ein System abrechnen',
          'WhatsApp über die Partnerlösung Superchat nutzen möchten',
          'vor dem Kauf 14 Tage lang alle Funktionen testen wollen',
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
          them: 'Booking 49,90 € netto im Monat bei Jahresvertrag, in den ersten 12 Monaten 39,90 €. Monatlich ab 59,90 €.',
          source: 0,
        },
        {
          topic: 'Kostenlos testen',
          zenno: 'Free-Tarif ohne Zeitlimit, ohne Kreditkarte.',
          them: '14 Tage kostenlos testen. Kein Gratis-Tarif.',
          source: 0,
        },
        {
          topic: 'Teamgröße',
          zenno: 'Im Zenno-Tarif keine Grenze bei Therapeutinnen und Behandlungen.',
          them: 'Booking bis zu 5 Mitarbeitende, größere Pakete unbegrenzt.',
          source: 1,
        },
        {
          topic: 'Provision',
          zenno: 'Keine Provision auf Buchungen.',
          them: 'Keine Provision auf Buchungen.',
          source: 2,
        },
        {
          topic: 'Anzahlungen & No-Shows',
          zenno: 'Anzahlung, voller Preis oder hinterlegte Karte mit No-Show-Gebühr, über Stripe.',
          them: 'Vorabzahlung per Karte, Google Pay, Apple Pay oder PayPal, je Leistung in Prozent einstellbar.',
          source: 2,
        },
        {
          topic: 'Erinnerungen',
          zenno: 'Per SMS und E-Mail.',
          them: 'E-Mail inklusive, SMS für 0,10 € pro SMS.',
          source: 1,
        },
        {
          topic: 'WhatsApp & KI',
          zenno: 'KI-Rezeption antwortet auf WhatsApp (Ihre Nummer), per E-Mail und im Website-Chat und bucht echte freie Zeiten.',
          them: 'WhatsApp über den Partner Superchat in Booking + Marketing und All-in-One. Eine KI-Rezeption für Kundenanfragen ist nicht angegeben.',
          source: 3,
        },
        {
          topic: 'Gutscheine & Mehrfachkarten',
          zenno: 'Wertgutscheine, Gutscheinsets und Mehrfachkarten, online, am Empfang oder per KI verkauft, per QR eingelöst.',
          them: 'Gutscheinverwaltung in Kasse+ und All-in-One. Mehrfachkarten sind nicht angegeben.',
          source: 1,
        },
        {
          topic: 'Kasse & Steuer',
          zenno: 'Kassenbuch, Umsatzsteuer inkl. Kleinunternehmer, DATEV-Export.',
          them: 'iPad-Kasse mit zertifizierter Cloud-TSE (9 € im Monat) und DATEV-Schnittstelle.',
          source: 4,
        },
      ],
    },
    switching: {
      kicker: 'Wechsel von Shore',
      title: ['Kundschaft und Termine', 'kommen mit.'],
      paragraphs: [
        'Zenno übernimmt Kundinnen und Kunden, Termine und geblockte Zeiten aus Shore. Sie legen Ihre Behandlungen mit Dauer und Preis an, prüfen den Kalender und schalten dann Ihren neuen Buchungslink frei.',
        'Achten Sie bei Shore auf Ihre Kündigungsfrist und die Laufzeit Ihres Pakets. Den Free-Tarif von Zenno können Sie schon vorher parallel einrichten und testen.',
      ],
    },
    faq: {
      kicker: 'Fragen zum Wechsel',
      title: ['Zenno oder Shore?', 'Kurz beantwortet.'],
      items: [
        {
          q: 'Welche Alternativen zu Shore gibt es für Terminbuchung und Kasse im Salon?',
          a: 'Zum Beispiel Zenno, Treatwell, Phorest und Fresha. Zenno startet kostenlos und hat eine KI-Rezeption für WhatsApp, Treatwell bringt einen Marktplatz für Neukundschaft mit, Phorest ist eine große Salon-Suite mit Marketing und Fresha hat den günstigsten Einstieg für Selbstständige. Die Übersicht mit Quellen finden Sie auf unserer Vergleichsseite.',
        },
        {
          q: 'Ist Zenno günstiger als Shore?',
          a: 'Für den Einstieg ja: Zenno hat einen Free-Tarif für 0 €, Shore hat keinen. Der Zenno-Tarif kostet 49 € im Monat ohne Grenze bei Therapeutinnen. Shore Booking kostet laut shore.com 49,90 € netto im Monat bei Jahresvertrag (aktuell 39,90 € in den ersten 12 Monaten), für mehr als fünf Mitarbeitende brauchen Sie ein größeres Paket.',
        },
        {
          q: 'Kann ich meine Daten von Shore übernehmen?',
          a: 'Ja. Zenno importiert Kundinnen und Kunden, Termine und geblockte Zeiten aus Shore.',
        },
        {
          q: 'Brauche ich eine TSE-Kasse?',
          a: 'Wenn Sie Bargeld über ein elektronisches Kassensystem annehmen, verlangt die Kassensicherungsverordnung eine TSE. Shore bietet dafür eine Cloud-TSE für 9 € im Monat an. Klären Sie mit Ihrer Steuerberatung, was für Ihr Studio gilt.',
        },
      ],
    },
    sources: SOURCES,
  },
  en: {
    meta: {
      title: 'Shore alternative: Zenno vs Shore compared | Zenno',
      description:
        'A Shore alternative for massage and beauty studios: pricing, free start, deposits, WhatsApp and AI receptionist, gift cards and till compared. With sources from shore.com.',
    },
    label: 'Zenno vs Shore',
    hero: {
      kicker: 'Shore alternative',
      title: ['Zenno vs Shore:', 'what fits your studio.'],
      lead: 'Both take bookings on your own page with no commission. Shore is strong on an all-in-one till with TSE, Zenno starts free and answers WhatsApp with an AI receptionist. Here is the comparison, with sources.',
    },
    fit: {
      kicker: 'Who fits which',
      title: ['An honest comparison,', 'not a sales sheet.'],
      zenno: {
        title: 'Zenno fits if you …',
        items: [
          'want to start free with no time limit, with one therapist and five treatments',
          'want an AI receptionist to answer and book on WhatsApp, email and website chat',
          'sell ten-visit passes and voucher sets and redeem them by QR code',
          'want one fixed price of €49 a month with more than five therapists',
        ],
      },
      them: {
        title: 'Shore fits if you …',
        items: [
          'want an iPad till with cloud TSE and the DATEV cash archive from the same provider',
          'also run retail or hospitality through one system',
          'want WhatsApp through the partner solution Superchat',
          'want to test every feature for 14 days before buying',
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
          them: 'Booking €49.90 net a month on an annual contract, €39.90 in the first 12 months. Monthly from €59.90.',
          source: 0,
        },
        {
          topic: 'Try for free',
          zenno: 'Free plan with no time limit, no credit card.',
          them: '14-day free trial. No free plan.',
          source: 0,
        },
        {
          topic: 'Team size',
          zenno: 'The Zenno plan has no limit on therapists or treatments.',
          them: 'Booking up to 5 employees, larger packages unlimited.',
          source: 1,
        },
        {
          topic: 'Commission',
          zenno: 'No commission on bookings.',
          them: 'No commission on bookings.',
          source: 2,
        },
        {
          topic: 'Deposits & no-shows',
          zenno: 'Deposit, full price or card on file with a no-show fee, via Stripe.',
          them: 'Prepayment by card, Google Pay, Apple Pay or PayPal, set as a percentage per service.',
          source: 2,
        },
        {
          topic: 'Reminders',
          zenno: 'By SMS and email.',
          them: 'Email included, SMS at €0.10 per message.',
          source: 1,
        },
        {
          topic: 'WhatsApp & AI',
          zenno: 'The AI receptionist answers on WhatsApp (your number), email and website chat and books real free times.',
          them: 'WhatsApp through the partner Superchat in Booking + Marketing and All-in-One. No AI receptionist for client messages is stated.',
          source: 3,
        },
        {
          topic: 'Gift cards & passes',
          zenno: 'Value vouchers, voucher sets and multi-visit passes, sold online, at the desk or by the AI, redeemed by QR.',
          them: 'Voucher management in Kasse+ and All-in-One. Multi-visit passes are not stated.',
          source: 1,
        },
        {
          topic: 'Till & tax',
          zenno: 'Cash book, VAT incl. the Kleinunternehmer rule, DATEV export.',
          them: 'iPad till with certified cloud TSE (€9 a month) and a DATEV interface.',
          source: 4,
        },
      ],
    },
    switching: {
      kicker: 'Switching from Shore',
      title: ['Your clients and appointments', 'come with you.'],
      paragraphs: [
        'Zenno imports clients, appointments and blocked times from Shore. You add your treatments with duration and price, check the calendar, then switch on your new booking link.',
        'Check your Shore notice period and package term. You can set up and test Zenno’s free plan alongside it beforehand.',
      ],
    },
    faq: {
      kicker: 'Switching questions',
      title: ['Zenno or Shore?', 'Answered briefly.'],
      items: [
        {
          q: 'What are the alternatives to Shore for booking and a till in a salon?',
          a: 'For example Zenno, Treatwell, Phorest and Fresha. Zenno starts free and has an AI receptionist for WhatsApp, Treatwell brings a marketplace for new clients, Phorest is a large salon suite with marketing, and Fresha has the cheapest entry for solo practitioners. The overview with sources is on our comparison page.',
        },
        {
          q: 'Is Zenno cheaper than Shore?',
          a: 'To start, yes: Zenno has a €0 free plan and Shore has none. The Zenno plan costs €49 a month with no limit on therapists. According to shore.com, Shore Booking costs €49.90 net a month on an annual contract (currently €39.90 for the first 12 months), and more than five employees need a larger package.',
        },
        {
          q: 'Can I bring my data over from Shore?',
          a: 'Yes. Zenno imports clients, appointments and blocked times from Shore.',
        },
        {
          q: 'Do I need a TSE till?',
          a: 'If you take cash through an electronic till, German law (KassenSichV) requires a TSE. Shore offers a cloud TSE for €9 a month. Ask your tax advisor what applies to your studio.',
        },
      ],
    },
    sources: SOURCES,
  },
  th: {
    meta: {
      title: 'ทางเลือกแทน Shore: เปรียบเทียบ Zenno กับ Shore | Zenno',
      description:
        'ทางเลือกแทน Shore สำหรับร้านนวดและร้านเสริมสวย: เปรียบเทียบราคา การเริ่มใช้ฟรี มัดจำ WhatsApp และพนักงานต้อนรับ AI บัตรของขวัญ และระบบเก็บเงิน พร้อมแหล่งที่มาจาก shore.com',
    },
    label: 'Zenno vs Shore',
    hero: {
      kicker: 'ทางเลือกแทน Shore',
      title: ['Zenno vs Shore', 'อะไรเหมาะกับร้านของคุณ'],
      lead: 'ทั้งสองรับจองบนหน้าของคุณเองโดยไม่มีค่าคอมมิชชั่น Shore เด่นเรื่องเครื่องเก็บเงินพร้อม TSE ในระบบเดียว ส่วน Zenno เริ่มใช้ฟรีและตอบ WhatsApp ด้วยพนักงานต้อนรับ AI นี่คือการเปรียบเทียบพร้อมแหล่งที่มา',
    },
    fit: {
      kicker: 'แบบไหนเหมาะกับใคร',
      title: ['เปรียบเทียบอย่างตรงไปตรงมา', 'ไม่ใช่ใบโฆษณา'],
      zenno: {
        title: 'Zenno เหมาะถ้าคุณ…',
        items: [
          'อยากเริ่มใช้ฟรีโดยไม่จำกัดเวลา กับหมอนวด 1 คนและบริการ 5 รายการ',
          'อยากให้พนักงานต้อนรับ AI ตอบและจองคิวทาง WhatsApp อีเมล และแชทบนเว็บไซต์',
          'ขายบัตร 10 ครั้งและชุดบัตรของขวัญ และใช้ด้วย QR code',
          'อยากได้ราคาคงที่ €49 ต่อเดือน แม้มีหมอนวดมากกว่าห้าคน',
        ],
      },
      them: {
        title: 'Shore เหมาะถ้าคุณ…',
        items: [
          'อยากได้เครื่องเก็บเงินบน iPad พร้อม Cloud-TSE และคลังข้อมูล DATEV จากผู้ให้บริการเดียว',
          'มีงานขายปลีกหรือร้านอาหารที่ต้องคิดเงินในระบบเดียวกัน',
          'อยากใช้ WhatsApp ผ่านโซลูชันพาร์ทเนอร์ Superchat',
          'อยากทดลองทุกฟีเจอร์ 14 วันก่อนซื้อ',
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
          them: 'Booking €49.90 ต่อเดือน (ไม่รวม VAT) เมื่อทำสัญญารายปี €39.90 ใน 12 เดือนแรก รายเดือนเริ่ม €59.90',
          source: 0,
        },
        {
          topic: 'ทดลองใช้ฟรี',
          zenno: 'แพ็กเกจฟรีไม่จำกัดเวลา ไม่ต้องใช้บัตรเครดิต',
          them: 'ทดลองฟรี 14 วัน ไม่มีแพ็กเกจฟรี',
          source: 0,
        },
        {
          topic: 'ขนาดทีม',
          zenno: 'แพ็กเกจ Zenno ไม่จำกัดจำนวนหมอนวดและบริการ',
          them: 'Booking สูงสุด 5 คน แพ็กเกจใหญ่กว่านั้นไม่จำกัด',
          source: 1,
        },
        {
          topic: 'ค่าคอมมิชชั่น',
          zenno: 'ไม่มีค่าคอมมิชชั่นจากการจอง',
          them: 'ไม่มีค่าคอมมิชชั่นจากการจอง',
          source: 2,
        },
        {
          topic: 'มัดจำและการไม่มาตามนัด',
          zenno: 'มัดจำ เต็มจำนวน หรือผูกบัตรพร้อมค่าธรรมเนียมเมื่อไม่มา ผ่าน Stripe',
          them: 'จ่ายล่วงหน้าด้วยบัตร Google Pay, Apple Pay หรือ PayPal ตั้งเป็นเปอร์เซ็นต์ตามบริการ',
          source: 2,
        },
        {
          topic: 'การแจ้งเตือน',
          zenno: 'ทาง SMS และอีเมล',
          them: 'อีเมลรวมในแพ็กเกจ SMS ข้อความละ €0.10',
          source: 1,
        },
        {
          topic: 'WhatsApp และ AI',
          zenno: 'พนักงานต้อนรับ AI ตอบทาง WhatsApp (เบอร์ของคุณ) อีเมล และแชทบนเว็บไซต์ และจองเวลาที่ว่างจริง',
          them: 'WhatsApp ผ่านพาร์ทเนอร์ Superchat ในแพ็กเกจ Booking + Marketing และ All-in-One ไม่ได้ระบุพนักงานต้อนรับ AI สำหรับตอบลูกค้า',
          source: 3,
        },
        {
          topic: 'บัตรของขวัญและบัตรหลายครั้ง',
          zenno: 'บัตรมูลค่า ชุดบัตรของขวัญ และบัตรหลายครั้ง ขายออนไลน์ ที่หน้าร้าน หรือผ่าน AI ใช้ด้วย QR',
          them: 'การจัดการบัตรของขวัญใน Kasse+ และ All-in-One ไม่ได้ระบุบัตรหลายครั้ง',
          source: 1,
        },
        {
          topic: 'เครื่องเก็บเงินและภาษี',
          zenno: 'สมุดเงินสด ภาษีมูลค่าเพิ่มรวมกฎ Kleinunternehmer และไฟล์ส่งออก DATEV',
          them: 'เครื่องเก็บเงินบน iPad พร้อม Cloud-TSE ที่ได้รับการรับรอง (€9 ต่อเดือน) และการเชื่อมต่อ DATEV',
          source: 4,
        },
      ],
    },
    switching: {
      kicker: 'ย้ายจาก Shore',
      title: ['ลูกค้าและนัดหมาย', 'ย้ายมาด้วยได้'],
      paragraphs: [
        'Zenno นำเข้าข้อมูลลูกค้า นัดหมาย และเวลาที่บล็อกไว้จาก Shore คุณเพิ่มบริการพร้อมระยะเวลาและราคา ตรวจปฏิทิน แล้วเปิดใช้ลิงก์จองใหม่',
        'ตรวจสอบระยะเวลาแจ้งยกเลิกและอายุสัญญาแพ็กเกจ Shore ของคุณ ระหว่างนั้นคุณตั้งค่าและทดลองแพ็กเกจฟรีของ Zenno ควบคู่กันไปได้',
      ],
    },
    faq: {
      kicker: 'คำถามเรื่องการย้ายระบบ',
      title: ['Zenno หรือ Shore', 'ตอบสั้นๆ'],
      items: [
        {
          q: 'มีทางเลือกอะไรแทน Shore สำหรับการจองคิวและเครื่องเก็บเงินในร้าน',
          a: 'เช่น Zenno, Treatwell, Phorest และ Fresha Zenno เริ่มใช้ฟรีและมีพนักงานต้อนรับ AI สำหรับ WhatsApp, Treatwell มีมาร์เก็ตเพลสหาลูกค้าใหม่, Phorest เป็นชุดซอฟต์แวร์ร้านขนาดใหญ่พร้อมเครื่องมือการตลาด และ Fresha ราคาเริ่มต้นถูกที่สุดสำหรับคนทำงานคนเดียว ดูภาพรวมพร้อมแหล่งที่มาได้ที่หน้าการเปรียบเทียบของเรา',
        },
        {
          q: 'Zenno ถูกกว่า Shore ไหม',
          a: 'สำหรับการเริ่มต้นใช่ Zenno มีแพ็กเกจฟรี €0 แต่ Shore ไม่มี แพ็กเกจ Zenno ราคา €49 ต่อเดือนโดยไม่จำกัดหมอนวด ตาม shore.com แพ็กเกจ Booking ราคา €49.90 ต่อเดือนไม่รวม VAT เมื่อทำสัญญารายปี (ตอนนี้ €39.90 ใน 12 เดือนแรก) และถ้ามีพนักงานมากกว่าห้าคนต้องใช้แพ็กเกจที่ใหญ่กว่า',
        },
        {
          q: 'ย้ายข้อมูลจาก Shore มาได้ไหม',
          a: 'ได้ Zenno นำเข้าข้อมูลลูกค้า นัดหมาย และเวลาที่บล็อกไว้จาก Shore',
        },
        {
          q: 'ต้องมีเครื่องเก็บเงินที่มี TSE ไหม',
          a: 'ในเยอรมนี หากรับเงินสดผ่านเครื่องเก็บเงินอิเล็กทรอนิกส์ กฎหมาย KassenSichV กำหนดให้ต้องมี TSE Shore มี Cloud-TSE ราคา €9 ต่อเดือน ควรถามที่ปรึกษาภาษีว่าร้านของคุณต้องทำอย่างไร',
        },
      ],
    },
    sources: SOURCES,
  },
}
