import type { ComparePageSet } from './types'

/**
 * Treatwell facts from treatwell.de and its partner terms, checked 11 Nov 2026.
 * Not used, because Treatwell's own pages disagree or don't say: the commission
 * rate (set per partner), the online prepayment fee (2 % vs 2.5 %), the AI price.
 */
const SOURCES = [
  { label: 'treatwell.de: Preise für Partner', href: 'https://www.treatwell.de/partners/preise/' },
  { label: 'treatwell.de: Vertragsbestimmungen', href: 'https://www.treatwell.de/info/vertragsbestimmungen/' },
  { label: 'treatwell.de: Zahlungen', href: 'https://www.treatwell.de/partners/losungen/zahlungen/' },
  { label: 'treatwell.de: AI Receptionist', href: 'https://www.treatwell.de/partners/losungen/ai-receptionist/' },
  {
    label: 'Treatwell Partner Care: So funktioniert die Treatwell-Provision',
    href: 'https://partnercare.treatwell.com/s/?language=de&path=Hoe-werkt-de-Treatwell-commissie&view=article',
  },
]

export const TREATWELL: ComparePageSet = {
  de: {
    meta: {
      title: 'Treatwell-Alternative ohne Provision: Zenno vs Treatwell | Zenno',
      description:
        'Treatwell oder eigene Buchungsseite? Zenno vs Treatwell im Vergleich: Marktplatz und Neukundenprovision, Preise, Anzahlungen, KI-Rezeption, Gutscheine und Kasse. Mit Quellen von treatwell.de.',
    },
    label: 'Zenno vs Treatwell',
    hero: {
      kicker: 'Treatwell-Alternative',
      title: ['Zenno vs Treatwell:', 'Marktplatz oder eigene Seite.'],
      lead: 'Treatwell bringt über seinen Marktplatz neue Kundschaft und berechnet dafür eine Neukundenprovision. Zenno ist kein Marktplatz: Gebucht wird auf Ihrer eigenen Seite, ohne Provision. Hier der Vergleich, mit Quellen.',
    },
    fit: {
      kicker: 'Wer zu wem passt',
      title: ['Ehrlich verglichen,', 'nicht schöngerechnet.'],
      zenno: {
        title: 'Zenno passt, wenn Sie …',
        items: [
          'Ihre Stammkundschaft auf Ihrer eigenen Seite buchen lassen wollen, ohne Provision auf irgendeine Buchung',
          'Ihre Preise ohne Preisbindung an einen Marktplatz festlegen wollen',
          'kostenlos starten wollen, mit einer Therapeutin und fünf Behandlungen',
          'WhatsApp, E-Mail und Website-Chat von einer KI-Rezeption beantworten lassen wollen',
        ],
      },
      them: {
        title: 'Treatwell passt, wenn Sie …',
        items: [
          'über einen großen Marktplatz neue Kundschaft gewinnen wollen und die Provision dafür einplanen',
          'eine KI wollen, die Telefonanrufe annimmt und Termine bucht',
          'eine Kasse mit TSE im selben System wollen (Tarif Advanced)',
          'ein großes Team zum festen Preis ohne Kosten pro Teammitglied führen',
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
          them: 'Starter 39 € netto im Monat. Advanced 49 € netto im Monat plus 7,50 € TSE-Gebühr. Unbegrenzt viele Teammitglieder.',
          source: 0,
        },
        {
          topic: 'Kostenlos testen',
          zenno: 'Free-Tarif ohne Zeitlimit, ohne Kreditkarte.',
          them: 'Kein Gratis-Tarif.',
          source: 0,
        },
        {
          topic: 'Marktplatz',
          zenno: 'Kein Marktplatz. Kundschaft bucht auf Ihrer eigenen Seite und sieht keine anderen Studios.',
          them: 'Standortprofil auf dem Treatwell-Marktplatz, auf Wunsch abschaltbar.',
          source: 1,
        },
        {
          topic: 'Provision',
          zenno: 'Keine Provision auf Buchungen.',
          them: 'Neukundenprovision auf Marktplatz-Buchungen, je nach Standort; der Satz steht in Ihrer individuellen Vereinbarung. 0 % auf erneute Marktplatz-Buchungen und auf Buchungen über Ihre Website und Social Media.',
          source: 0,
        },
        {
          topic: 'Preisbindung',
          zenno: 'Keine. Ihre Preise legen Sie allein fest.',
          them: 'Preise auf dem Marktplatz müssen dem besten Preis auf Ihrer eigenen Website entsprechen.',
          source: 1,
        },
        {
          topic: 'Anzahlungen & No-Shows',
          zenno: 'Anzahlung, voller Preis oder hinterlegte Karte mit No-Show-Gebühr, über Stripe.',
          them: 'Vorauszahlungen, Stornierungsrichtlinien, No-Show-Gebühren. Kartenterminal 0,79 % + 0,20 € pro Zahlung.',
          source: 2,
        },
        {
          topic: 'KI-Rezeption',
          zenno: 'Antwortet auf WhatsApp (Ihre Nummer), per E-Mail und im Website-Chat und bucht. Keine Telefonanrufe. Im Zenno-Tarif enthalten.',
          them: 'Nimmt Telefonanrufe an, prüft freie Zeiten und bucht. WhatsApp laut Treatwell „schon bald“.',
          source: 3,
        },
        {
          topic: 'Kasse & Steuer',
          zenno: 'Kassenbuch, Umsatzsteuer inkl. Kleinunternehmer, DATEV-Export.',
          them: 'Kasse mit TSE im Tarif Advanced.',
          source: 0,
        },
      ],
    },
    switching: {
      kicker: 'Wechsel von Treatwell',
      title: ['Kundschaft und Termine', 'kommen mit.'],
      paragraphs: [
        'Zenno übernimmt Kundinnen und Kunden, Termine und geblockte Zeiten aus Treatwell. Ihre Stammkundschaft bucht danach über Ihren eigenen Link, zum Beispiel aus dem Google-Unternehmensprofil, von Instagram oder Ihrer Website.',
        'Treatwell schreibt, dass es sich nicht mit anderen Kalendersystemen synchronisiert. Wer beide parallel nutzt, pflegt zwei Kalender. Planen Sie den Wechsel deshalb mit einem festen Stichtag und beachten Sie die Kündigungsfrist von 30 Tagen aus den Treatwell-Vertragsbestimmungen.',
      ],
    },
    faq: {
      kicker: 'Fragen zum Wechsel',
      title: ['Zenno oder Treatwell?', 'Kurz beantwortet.'],
      items: [
        {
          q: 'Wie hoch ist die Treatwell-Provision?',
          a: 'Treatwell veröffentlicht keinen einheitlichen Satz. Laut treatwell.de fällt eine Neukundenprovision an, die je nach Standort unterschiedlich ist und in der individuellen Vereinbarung steht. Auf erneute Marktplatz-Buchungen und auf Buchungen über Ihre eigenen Kanäle fallen 0 % an. Bei Zenno gibt es keine Provision.',
        },
        {
          q: 'Kann ich Treatwell und Zenno parallel nutzen?',
          a: 'Technisch ja, aber Treatwell synchronisiert sich laut eigener Aussage nicht mit anderen Kalendersystemen. Sie müssten freie Zeiten in beiden Systemen pflegen. Die meisten Studios wechseln mit einem festen Stichtag.',
        },
        {
          q: 'Verliere ich ohne Marktplatz Neukundschaft?',
          a: 'Ein Marktplatz kann Neukundschaft bringen, dafür zahlen Sie die Provision. Zenno setzt auf Ihre eigenen Kanäle: Google-Unternehmensprofil, Instagram, Website und KI-Assistenten, die Ihre Seite lesen und direkt bei Ihnen buchen können. Wie viele Buchungen das bringt, hängt von Ihrem Standort und Ihrer Sichtbarkeit ab.',
        },
        {
          q: 'Kann ich meine Daten von Treatwell übernehmen?',
          a: 'Ja. Zenno importiert Kundinnen und Kunden, Termine und geblockte Zeiten aus Treatwell.',
        },
      ],
    },
    sources: SOURCES,
  },
  en: {
    meta: {
      title: 'Commission-free Treatwell alternative: Zenno vs Treatwell | Zenno',
      description:
        'Treatwell or your own booking page? Zenno vs Treatwell compared: marketplace and new-client commission, pricing, deposits, AI receptionist, gift cards and till. With sources from treatwell.de.',
    },
    label: 'Zenno vs Treatwell',
    hero: {
      kicker: 'Treatwell alternative',
      title: ['Zenno vs Treatwell:', 'marketplace or your own page.'],
      lead: 'Treatwell brings new clients through its marketplace and charges a new-client commission for them. Zenno is not a marketplace: clients book on your own page, with no commission. Here is the comparison, with sources.',
    },
    fit: {
      kicker: 'Who fits which',
      title: ['An honest comparison,', 'not a sales sheet.'],
      zenno: {
        title: 'Zenno fits if you …',
        items: [
          'want your regulars to book on your own page, with no commission on any booking',
          'want to set your prices without a price-parity rule from a marketplace',
          'want to start free, with one therapist and five treatments',
          'want an AI receptionist to answer WhatsApp, email and website chat',
        ],
      },
      them: {
        title: 'Treatwell fits if you …',
        items: [
          'want new clients from a large marketplace and budget for the commission',
          'want an AI that answers phone calls and books appointments',
          'want a till with TSE in the same system (Advanced plan)',
          'run a large team at a flat price with no per-member cost',
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
          them: 'Starter €39 net a month. Advanced €49 net a month plus a €7.50 TSE fee. Unlimited team members.',
          source: 0,
        },
        {
          topic: 'Try for free',
          zenno: 'Free plan with no time limit, no credit card.',
          them: 'No free plan.',
          source: 0,
        },
        {
          topic: 'Marketplace',
          zenno: 'No marketplace. Clients book on your own page and see no other studios.',
          them: 'Location profile on the Treatwell marketplace, which you can switch off.',
          source: 1,
        },
        {
          topic: 'Commission',
          zenno: 'No commission on bookings.',
          them: 'New-client commission on marketplace bookings, varying by location; the rate is in your individual agreement. 0% on repeat marketplace bookings and on bookings through your website and social media.',
          source: 0,
        },
        {
          topic: 'Price parity',
          zenno: 'None. You set your prices alone.',
          them: 'Marketplace prices must match the best price on your own website.',
          source: 1,
        },
        {
          topic: 'Deposits & no-shows',
          zenno: 'Deposit, full price or card on file with a no-show fee, via Stripe.',
          them: 'Prepayments, cancellation policies, no-show fees. Card terminal 0.79% + €0.20 per payment.',
          source: 2,
        },
        {
          topic: 'AI receptionist',
          zenno: 'Answers on WhatsApp (your number), email and website chat and books. No phone calls. Included in the Zenno plan.',
          them: 'Answers phone calls, checks free times and books. WhatsApp “coming soon” according to Treatwell.',
          source: 3,
        },
        {
          topic: 'Till & tax',
          zenno: 'Cash book, VAT incl. the Kleinunternehmer rule, DATEV export.',
          them: 'Till with TSE on the Advanced plan.',
          source: 0,
        },
      ],
    },
    switching: {
      kicker: 'Switching from Treatwell',
      title: ['Your clients and appointments', 'come with you.'],
      paragraphs: [
        'Zenno imports clients, appointments and blocked times from Treatwell. Your regulars then book through your own link, for example from your Google Business Profile, Instagram or website.',
        'Treatwell says it doesn’t sync with other calendar systems, so running both means keeping two calendars. Plan the switch for a fixed date and allow for the 30-day notice in Treatwell’s partner terms.',
      ],
    },
    faq: {
      kicker: 'Switching questions',
      title: ['Zenno or Treatwell?', 'Answered briefly.'],
      items: [
        {
          q: 'How much is the Treatwell commission?',
          a: 'Treatwell doesn’t publish one rate. According to treatwell.de, a new-client commission applies that varies by location and is set in your individual agreement. Repeat marketplace bookings and bookings through your own channels carry 0%. Zenno charges no commission.',
        },
        {
          q: 'Can I use Treatwell and Zenno at the same time?',
          a: 'Technically yes, but Treatwell says it doesn’t sync with other calendar systems, so you would keep free times up to date in both. Most studios switch on a fixed date.',
        },
        {
          q: 'Will I lose new clients without a marketplace?',
          a: 'A marketplace can bring new clients, and you pay commission for them. Zenno relies on your own channels: your Google Business Profile, Instagram, website and AI assistants that read your page and can book you directly. How many bookings that brings depends on your location and visibility.',
        },
        {
          q: 'Can I bring my data over from Treatwell?',
          a: 'Yes. Zenno imports clients, appointments and blocked times from Treatwell.',
        },
      ],
    },
    sources: SOURCES,
  },
  th: {
    meta: {
      title: 'ทางเลือกแทน Treatwell ไม่มีค่าคอมมิชชั่น: Zenno vs Treatwell | Zenno',
      description:
        'Treatwell หรือหน้าจองของคุณเอง เปรียบเทียบ Zenno กับ Treatwell: มาร์เก็ตเพลสและค่าคอมมิชชั่นลูกค้าใหม่ ราคา มัดจำ พนักงานต้อนรับ AI บัตรของขวัญ และเครื่องเก็บเงิน พร้อมแหล่งที่มาจาก treatwell.de',
    },
    label: 'Zenno vs Treatwell',
    hero: {
      kicker: 'ทางเลือกแทน Treatwell',
      title: ['Zenno vs Treatwell', 'มาร์เก็ตเพลสหรือหน้าของคุณเอง'],
      lead: 'Treatwell หาลูกค้าใหม่ผ่านมาร์เก็ตเพลสและเก็บค่าคอมมิชชั่นลูกค้าใหม่ ส่วน Zenno ไม่ใช่มาร์เก็ตเพลส ลูกค้าจองบนหน้าของคุณเองโดยไม่มีค่าคอมมิชชั่น นี่คือการเปรียบเทียบพร้อมแหล่งที่มา',
    },
    fit: {
      kicker: 'แบบไหนเหมาะกับใคร',
      title: ['เปรียบเทียบอย่างตรงไปตรงมา', 'ไม่ใช่ใบโฆษณา'],
      zenno: {
        title: 'Zenno เหมาะถ้าคุณ…',
        items: [
          'อยากให้ลูกค้าประจำจองบนหน้าของคุณเอง โดยไม่มีค่าคอมมิชชั่นจากการจองใดๆ',
          'อยากตั้งราคาเองโดยไม่ต้องผูกราคากับมาร์เก็ตเพลส',
          'อยากเริ่มใช้ฟรี กับหมอนวด 1 คนและบริการ 5 รายการ',
          'อยากให้พนักงานต้อนรับ AI ตอบ WhatsApp อีเมล และแชทบนเว็บไซต์',
        ],
      },
      them: {
        title: 'Treatwell เหมาะถ้าคุณ…',
        items: [
          'อยากได้ลูกค้าใหม่จากมาร์เก็ตเพลสขนาดใหญ่ และเผื่องบค่าคอมมิชชั่นไว้',
          'อยากได้ AI ที่รับสายโทรศัพท์และจองคิว',
          'อยากได้เครื่องเก็บเงินพร้อม TSE ในระบบเดียวกัน (แพ็กเกจ Advanced)',
          'มีทีมใหญ่และอยากจ่ายราคาคงที่โดยไม่คิดตามจำนวนพนักงาน',
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
          them: 'Starter €39 ต่อเดือน (ไม่รวม VAT) Advanced €49 ต่อเดือน (ไม่รวม VAT) บวกค่า TSE €7.50 พนักงานไม่จำกัด',
          source: 0,
        },
        {
          topic: 'ทดลองใช้ฟรี',
          zenno: 'แพ็กเกจฟรีไม่จำกัดเวลา ไม่ต้องใช้บัตรเครดิต',
          them: 'ไม่มีแพ็กเกจฟรี',
          source: 0,
        },
        {
          topic: 'มาร์เก็ตเพลส',
          zenno: 'ไม่มีมาร์เก็ตเพลส ลูกค้าจองบนหน้าของคุณเองและไม่เห็นร้านอื่น',
          them: 'มีโปรไฟล์ร้านบนมาร์เก็ตเพลส Treatwell ซึ่งปิดได้',
          source: 1,
        },
        {
          topic: 'ค่าคอมมิชชั่น',
          zenno: 'ไม่มีค่าคอมมิชชั่นจากการจอง',
          them: 'ค่าคอมมิชชั่นลูกค้าใหม่จากการจองผ่านมาร์เก็ตเพลส แตกต่างตามพื้นที่ อัตราระบุในข้อตกลงเฉพาะของคุณ 0% สำหรับการจองซ้ำผ่านมาร์เก็ตเพลสและการจองผ่านเว็บไซต์หรือโซเชียลมีเดียของคุณ',
          source: 0,
        },
        {
          topic: 'การผูกราคา',
          zenno: 'ไม่มี คุณตั้งราคาเองได้',
          them: 'ราคาบนมาร์เก็ตเพลสต้องเท่ากับราคาที่ดีที่สุดบนเว็บไซต์ของคุณ',
          source: 1,
        },
        {
          topic: 'มัดจำและการไม่มาตามนัด',
          zenno: 'มัดจำ เต็มจำนวน หรือผูกบัตรพร้อมค่าธรรมเนียมเมื่อไม่มา ผ่าน Stripe',
          them: 'จ่ายล่วงหน้า นโยบายการยกเลิก ค่าธรรมเนียมเมื่อไม่มา เครื่องรูดบัตร 0.79% + €0.20 ต่อรายการ',
          source: 2,
        },
        {
          topic: 'พนักงานต้อนรับ AI',
          zenno: 'ตอบทาง WhatsApp (เบอร์ของคุณ) อีเมล และแชทบนเว็บไซต์ และจองคิว ไม่รับสายโทรศัพท์ รวมอยู่ในแพ็กเกจ Zenno',
          them: 'รับสายโทรศัพท์ ตรวจเวลาว่าง และจองคิว Treatwell ระบุว่า WhatsApp “เร็วๆ นี้”',
          source: 3,
        },
        {
          topic: 'เครื่องเก็บเงินและภาษี',
          zenno: 'สมุดเงินสด ภาษีมูลค่าเพิ่มรวมกฎ Kleinunternehmer และไฟล์ส่งออก DATEV',
          them: 'เครื่องเก็บเงินพร้อม TSE ในแพ็กเกจ Advanced',
          source: 0,
        },
      ],
    },
    switching: {
      kicker: 'ย้ายจาก Treatwell',
      title: ['ลูกค้าและนัดหมาย', 'ย้ายมาด้วยได้'],
      paragraphs: [
        'Zenno นำเข้าข้อมูลลูกค้า นัดหมาย และเวลาที่บล็อกไว้จาก Treatwell จากนั้นลูกค้าประจำจะจองผ่านลิงก์ของคุณเอง เช่น จาก Google Business Profile, Instagram หรือเว็บไซต์',
        'Treatwell ระบุว่าไม่ซิงค์กับระบบปฏิทินอื่น ถ้าใช้ทั้งสองพร้อมกันต้องดูแลสองปฏิทิน จึงควรกำหนดวันย้ายที่แน่นอน และคำนึงถึงระยะแจ้งยกเลิก 30 วันตามเงื่อนไขพาร์ทเนอร์ของ Treatwell',
      ],
    },
    faq: {
      kicker: 'คำถามเรื่องการย้ายระบบ',
      title: ['Zenno หรือ Treatwell', 'ตอบสั้นๆ'],
      items: [
        {
          q: 'ค่าคอมมิชชั่นของ Treatwell เท่าไร',
          a: 'Treatwell ไม่ได้เผยแพร่อัตราเดียว ตาม treatwell.de มีค่าคอมมิชชั่นลูกค้าใหม่ที่แตกต่างตามพื้นที่และระบุในข้อตกลงเฉพาะ การจองซ้ำผ่านมาร์เก็ตเพลสและการจองผ่านช่องทางของคุณเองเป็น 0% ส่วน Zenno ไม่มีค่าคอมมิชชั่น',
        },
        {
          q: 'ใช้ Treatwell กับ Zenno พร้อมกันได้ไหม',
          a: 'ทางเทคนิคได้ แต่ Treatwell ระบุว่าไม่ซิงค์กับระบบปฏิทินอื่น คุณต้องอัปเดตเวลาว่างในทั้งสองระบบ ร้านส่วนใหญ่จึงย้ายในวันที่กำหนดไว้',
        },
        {
          q: 'ถ้าไม่มีมาร์เก็ตเพลสจะเสียลูกค้าใหม่ไหม',
          a: 'มาร์เก็ตเพลสช่วยหาลูกค้าใหม่ได้ โดยคุณจ่ายค่าคอมมิชชั่น Zenno ใช้ช่องทางของคุณเอง ทั้ง Google Business Profile, Instagram, เว็บไซต์ และผู้ช่วย AI ที่อ่านหน้าของคุณและจองกับคุณได้โดยตรง จำนวนการจองขึ้นอยู่กับทำเลและการมองเห็นของร้าน',
        },
        {
          q: 'ย้ายข้อมูลจาก Treatwell มาได้ไหม',
          a: 'ได้ Zenno นำเข้าข้อมูลลูกค้า นัดหมาย และเวลาที่บล็อกไว้จาก Treatwell',
        },
      ],
    },
    sources: SOURCES,
  },
}
