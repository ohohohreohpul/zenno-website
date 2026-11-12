import type { Lang } from '../../lang'
import type { CompareHubContent, Source } from './types'

/** Same official pages as the single comparisons, checked 11 Nov 2026. */
const SOURCES: Source[] = [
  { label: 'shore.com: Preise', href: 'https://www.shore.com/de/preise/' },
  { label: 'shore.com: Alle Shore-Pakete im Vergleich', href: 'https://www.shore.com/de/preise/alle-shore-pakete-vergleich' },
  { label: 'help.shore.com: WhatsApp-Integration mit Superchat', href: 'https://help.shore.com/en/was-ist-die-whatsapp-integration-mit-superchat-shore' },
  { label: 'shore.com: Anzahlungen', href: 'https://www.shore.com/de/buchungssystem/anzahlungen' },
  { label: 'treatwell.de: Preise für Partner', href: 'https://www.treatwell.de/partners/preise/' },
  { label: 'treatwell.de: Zahlungen', href: 'https://www.treatwell.de/partners/losungen/zahlungen/' },
  { label: 'treatwell.de: AI Receptionist', href: 'https://www.treatwell.de/partners/losungen/ai-receptionist/' },
  { label: 'phorest.com: Preise', href: 'https://www.phorest.com/de/preise/' },
  { label: 'phorest.com: KI-Funktionen', href: 'https://www.phorest.com/de/funktionen/ai-funktionen/' },
  { label: 'phorest.com: TSE', href: 'https://www.phorest.com/de/tse/' },
  { label: 'fresha.com: Preise', href: 'https://www.fresha.com/de/pricing' },
]

/** Source index per provider for a row, in the order of SOURCES above. */
const S = { shorePrice: 0, shorePlans: 1, shoreWa: 2, shoreDeposit: 3, twPrice: 4, twPay: 5, twAi: 6, phPrice: 7, phAi: 8, phTse: 9, frPrice: 10 }

export const HUB: Record<Lang, CompareHubContent> = {
  de: {
    meta: {
      title: 'Vergleich Buchungssoftware: Zenno, Shore, Treatwell, Phorest, Fresha | Zenno',
      description:
        'Treatwell, Shore, Phorest, Fresha und Zenno im Vergleich für Kosmetik-, Massage- und Spa-Betriebe: Preise, kostenlos testen, Provision, Anzahlungen, KI-Rezeption, Gutscheine, TSE und DATEV. Mit Quellen.',
    },
    hero: {
      kicker: 'Vergleich',
      title: ['Fünf Buchungssysteme,', 'eine ehrliche Übersicht.'],
      lead: 'Welche Lösung zu Ihrem Studio passt, hängt davon ab, was Sie brauchen: Neukundschaft über einen Marktplatz, eine Kasse mit TSE, eine große Marketing-Suite oder einen kostenlosen Start mit KI-Rezeption. Alle Angaben zu anderen Anbietern stammen von deren eigenen Websites.',
    },
    matrix: {
      kicker: 'Auf einen Blick',
      title: ['Preise und Funktionen', 'nebeneinander.'],
      rows: [
        {
          topic: 'Einstiegspreis',
          cells: {
            zenno: 'Free 0 €. Zenno 49 € im Monat mit allem.',
            shore: 'Booking 49,90 € netto bei Jahresvertrag, in den ersten 12 Monaten 39,90 €.',
            treatwell: 'Starter 39 € netto im Monat.',
            phorest: 'Nur auf Anfrage.',
            fresha: '12,95 € netto allein, im Team 8,95 € pro Mitglied.',
          },
          sources: { shore: S.shorePrice, treatwell: S.twPrice, phorest: S.phPrice, fresha: S.frPrice },
        },
        {
          topic: 'Kostenlos testen',
          cells: {
            zenno: 'Free-Tarif ohne Zeitlimit.',
            shore: '14 Tage.',
            treatwell: 'Kein Gratis-Tarif, Testdauer nicht angegeben.',
            phorest: 'Keine Testversion, Demo.',
            fresha: '7 Tage.',
          },
          sources: { shore: S.shorePrice, treatwell: S.twPrice, phorest: S.phPrice, fresha: S.frPrice },
        },
        {
          topic: 'Marktplatz & Provision',
          cells: {
            zenno: 'Kein Marktplatz, keine Provision.',
            shore: 'Kein Marktplatz, keine Provision.',
            treatwell: 'Marktplatz, Neukundenprovision je nach Standort.',
            phorest: 'Kein Marktplatz beschrieben, keine Provision.',
            fresha: 'Marktplatz, einmalige Gebühr für neue Marktplatz-Kunden.',
          },
          sources: { shore: S.shoreDeposit, treatwell: S.twPrice, phorest: S.phPrice, fresha: S.frPrice },
        },
        {
          topic: 'Anzahlung & No-Show',
          cells: {
            zenno: 'Anzahlung, Vorkasse oder Karte mit No-Show-Gebühr.',
            shore: 'Vorabzahlung je Leistung.',
            treatwell: 'Vorauszahlung und No-Show-Gebühr.',
            phorest: 'Anzahlung und No-Show-Gebühr.',
            fresha: 'Vorauszahlung, No-Show- und Absagegebühr.',
          },
          sources: { shore: S.shoreDeposit, treatwell: S.twPay, phorest: S.phPrice, fresha: S.frPrice },
        },
        {
          topic: 'KI für Kundenanfragen',
          cells: {
            zenno: 'WhatsApp, E-Mail, Website-Chat. Inklusive.',
            shore: 'Nicht angegeben. WhatsApp über Partner Superchat.',
            treatwell: 'Telefon. WhatsApp „schon bald“.',
            phorest: 'SMS und WhatsApp. Preis nicht angegeben.',
            fresha: 'Zusatzmodul, 28,95 € netto pro Standort.',
          },
          sources: { shore: S.shoreWa, treatwell: S.twAi, phorest: S.phAi, fresha: S.frPrice },
        },
        {
          topic: 'Gutscheine & Mehrfachkarten',
          cells: {
            zenno: 'Gutscheine, Sets, Mehrfachkarten.',
            shore: 'Gutscheine ab Kasse+. Mehrfachkarten nicht angegeben.',
            treatwell: 'Eigene Gutscheine. Mehrfachkarten nicht angegeben.',
            phorest: 'Gutscheine. Mehrfachkarten nicht angegeben.',
            fresha: 'Gutscheine, Pakete, Mitgliedschaften.',
          },
          sources: { shore: S.shorePlans, treatwell: S.twPay, phorest: S.phPrice, fresha: S.frPrice },
        },
        {
          topic: 'Kasse & DATEV',
          cells: {
            zenno: 'Kassenbuch und DATEV-Export.',
            shore: 'Kasse mit Cloud-TSE (9 €), DATEV.',
            treatwell: 'Kasse mit TSE im Tarif Advanced.',
            phorest: 'Kasse mit Cloud-TSE, DATEV-Export.',
            fresha: 'TSE und DATEV nicht angegeben.',
          },
          sources: { shore: S.shorePrice, treatwell: S.twPrice, phorest: S.phTse, fresha: S.frPrice },
        },
      ],
    },
    cards: {
      kicker: 'Einzelvergleiche',
      title: ['Zenno gegen jeden,', 'mit allen Details.'],
      summaries: {
        shore: 'Kasse mit TSE aus einer Hand gegen kostenlosen Start und KI-Rezeption für WhatsApp.',
        treatwell: 'Marktplatz mit Neukundenprovision gegen eigene Buchungsseite ohne Provision.',
        phorest: 'Große Salon-Suite mit Preisen auf Anfrage gegen Festpreis und Free-Tarif.',
        fresha: 'Preis pro Teammitglied plus KI-Zusatzmodul gegen 49 € für das ganze Team.',
      },
    },
    faq: {
      kicker: 'Häufige Fragen',
      title: ['Welche Lösung passt?', 'Kurz beantwortet.'],
      items: [
        {
          q: 'Vergleich: Treatwell, Shore und Phorest für Kosmetikstudios – welche Lösung passt besser?',
          a: 'Treatwell passt, wenn Sie über einen Marktplatz Neukundschaft gewinnen wollen und dafür eine Neukundenprovision zahlen. Shore passt, wenn Sie Termine und eine Kasse mit Cloud-TSE aus einer Hand wollen, ohne Provision. Phorest passt zu größeren Instituten, die eine umfangreiche Marketing-Suite und persönliche Einrichtung wollen, mit Preisen auf Anfrage und 12 bis 36 Monaten Laufzeit. Wenn Sie kostenlos starten und WhatsApp von einer KI-Rezeption beantworten lassen wollen, ist Zenno eine Alternative.',
        },
        {
          q: 'Welche Salonsoftware kann ich kostenlos testen, bevor ich mich festlege?',
          a: 'Zenno hat einen Free-Tarif ohne Zeitlimit für 1 Therapeutin und 5 Behandlungen. Shore bietet 14 Tage, Fresha 7 Tage Testphase. Phorest bietet laut eigener Website keine kostenlose Testversion, sondern eine Demo. Treatwell hat keinen Gratis-Tarif und nennt keine Testdauer.',
        },
        {
          q: 'Welche Buchungssoftware hat eine KI-Rezeption?',
          a: 'Zenno beantwortet WhatsApp, E-Mail und Website-Chat mit einer KI-Rezeption, die im Zenno-Tarif enthalten ist. Treatwell hat eine KI, die Telefonanrufe annimmt. Phorest hat eine Front Desk AI für SMS und WhatsApp. Fresha bietet eine KI-Rezeption als Zusatzmodul für 28,95 € netto pro Standort an. Für Shore ist keine KI-Rezeption angegeben.',
        },
      ],
    },
    sources: SOURCES,
  },
  en: {
    meta: {
      title: 'Booking software compared: Zenno, Shore, Treatwell, Phorest, Fresha | Zenno',
      description:
        'Treatwell, Shore, Phorest, Fresha and Zenno compared for beauty, massage and spa businesses: pricing, free trials, commission, deposits, AI receptionist, gift cards, TSE and DATEV. With sources.',
    },
    hero: {
      kicker: 'Comparison',
      title: ['Five booking systems,', 'one honest overview.'],
      lead: 'Which one fits your studio depends on what you need: new clients from a marketplace, a till with TSE, a big marketing suite, or a free start with an AI receptionist. Every detail about other providers comes from their own websites.',
    },
    matrix: {
      kicker: 'At a glance',
      title: ['Pricing and features', 'side by side.'],
      rows: [
        {
          topic: 'Entry price',
          cells: {
            zenno: 'Free €0. Zenno €49 a month with everything.',
            shore: 'Booking €49.90 net on an annual contract, €39.90 in the first 12 months.',
            treatwell: 'Starter €39 net a month.',
            phorest: 'On request only.',
            fresha: '€12.95 net solo, €8.95 per member for teams.',
          },
          sources: { shore: S.shorePrice, treatwell: S.twPrice, phorest: S.phPrice, fresha: S.frPrice },
        },
        {
          topic: 'Try for free',
          cells: {
            zenno: 'Free plan, no time limit.',
            shore: '14 days.',
            treatwell: 'No free plan, trial length not stated.',
            phorest: 'No trial, demo.',
            fresha: '7 days.',
          },
          sources: { shore: S.shorePrice, treatwell: S.twPrice, phorest: S.phPrice, fresha: S.frPrice },
        },
        {
          topic: 'Marketplace & commission',
          cells: {
            zenno: 'No marketplace, no commission.',
            shore: 'No marketplace, no commission.',
            treatwell: 'Marketplace, new-client commission by location.',
            phorest: 'No marketplace described, no commission.',
            fresha: 'Marketplace, one-time fee for new marketplace clients.',
          },
          sources: { shore: S.shoreDeposit, treatwell: S.twPrice, phorest: S.phPrice, fresha: S.frPrice },
        },
        {
          topic: 'Deposits & no-shows',
          cells: {
            zenno: 'Deposit, prepayment or card with no-show fee.',
            shore: 'Prepayment per service.',
            treatwell: 'Prepayment and no-show fee.',
            phorest: 'Deposit and no-show fee.',
            fresha: 'Prepayment, no-show and cancellation fees.',
          },
          sources: { shore: S.shoreDeposit, treatwell: S.twPay, phorest: S.phPrice, fresha: S.frPrice },
        },
        {
          topic: 'AI for client messages',
          cells: {
            zenno: 'WhatsApp, email, website chat. Included.',
            shore: 'Not stated. WhatsApp via partner Superchat.',
            treatwell: 'Phone. WhatsApp “coming soon”.',
            phorest: 'SMS and WhatsApp. Price not stated.',
            fresha: 'Add-on, €28.95 net per location.',
          },
          sources: { shore: S.shoreWa, treatwell: S.twAi, phorest: S.phAi, fresha: S.frPrice },
        },
        {
          topic: 'Gift cards & passes',
          cells: {
            zenno: 'Gift cards, sets, multi-visit passes.',
            shore: 'Gift cards from Kasse+. Passes not stated.',
            treatwell: 'Own gift cards. Passes not stated.',
            phorest: 'Gift cards. Passes not stated.',
            fresha: 'Gift cards, packages, memberships.',
          },
          sources: { shore: S.shorePlans, treatwell: S.twPay, phorest: S.phPrice, fresha: S.frPrice },
        },
        {
          topic: 'Till & DATEV',
          cells: {
            zenno: 'Cash book and DATEV export.',
            shore: 'Till with cloud TSE (€9), DATEV.',
            treatwell: 'Till with TSE on Advanced.',
            phorest: 'Till with cloud TSE, DATEV export.',
            fresha: 'TSE and DATEV not stated.',
          },
          sources: { shore: S.shorePrice, treatwell: S.twPrice, phorest: S.phTse, fresha: S.frPrice },
        },
      ],
    },
    cards: {
      kicker: 'One-to-one comparisons',
      title: ['Zenno against each,', 'in full detail.'],
      summaries: {
        shore: 'An all-in-one till with TSE versus a free start and an AI receptionist for WhatsApp.',
        treatwell: 'A marketplace with new-client commission versus your own booking page with no commission.',
        phorest: 'A large salon suite priced on request versus a flat price and a free plan.',
        fresha: 'Per-member pricing plus an AI add-on versus €49 for the whole team.',
      },
    },
    faq: {
      kicker: 'Common questions',
      title: ['Which one fits?', 'Answered briefly.'],
      items: [
        {
          q: 'Treatwell, Shore or Phorest for a beauty studio: which fits better?',
          a: 'Treatwell fits if you want new clients from a marketplace and accept a new-client commission. Shore fits if you want booking and a till with cloud TSE from one provider, with no commission. Phorest suits larger businesses that want a big marketing suite and personal onboarding, priced on request with 12 to 36-month terms. If you want to start free and have an AI receptionist answer WhatsApp, Zenno is an alternative.',
        },
        {
          q: 'Which salon software can I try for free before committing?',
          a: 'Zenno has a free plan with no time limit for 1 therapist and 5 treatments. Shore offers a 14-day trial and Fresha 7 days. According to its website, Phorest offers a demo rather than a free trial. Treatwell has no free plan and states no trial length.',
        },
        {
          q: 'Which booking software has an AI receptionist?',
          a: 'Zenno answers WhatsApp, email and website chat with an AI receptionist included in the Zenno plan. Treatwell has an AI that answers phone calls. Phorest has a Front Desk AI for SMS and WhatsApp. Fresha offers an AI receptionist add-on at €28.95 net per location. No AI receptionist is stated for Shore.',
        },
      ],
    },
    sources: SOURCES,
  },
  th: {
    meta: {
      title: 'เปรียบเทียบระบบจองคิว: Zenno, Shore, Treatwell, Phorest, Fresha | Zenno',
      description:
        'เปรียบเทียบ Treatwell, Shore, Phorest, Fresha และ Zenno สำหรับร้านเสริมสวย ร้านนวด และสปา: ราคา ทดลองใช้ฟรี ค่าคอมมิชชั่น มัดจำ พนักงานต้อนรับ AI บัตรของขวัญ TSE และ DATEV พร้อมแหล่งที่มา',
    },
    hero: {
      kicker: 'การเปรียบเทียบ',
      title: ['ระบบจองคิวห้าตัว', 'ภาพรวมที่ตรงไปตรงมา'],
      lead: 'ระบบไหนเหมาะกับร้านของคุณขึ้นอยู่กับสิ่งที่ต้องการ ลูกค้าใหม่จากมาร์เก็ตเพลส เครื่องเก็บเงินพร้อม TSE ชุดเครื่องมือการตลาดขนาดใหญ่ หรือการเริ่มใช้ฟรีพร้อมพนักงานต้อนรับ AI ข้อมูลของผู้ให้บริการอื่นทั้งหมดมาจากเว็บไซต์ของผู้ให้บริการนั้นเอง',
    },
    matrix: {
      kicker: 'ดูในหน้าเดียว',
      title: ['ราคาและฟีเจอร์', 'เทียบกันตรงๆ'],
      rows: [
        {
          topic: 'ราคาเริ่มต้น',
          cells: {
            zenno: 'Free €0 แพ็กเกจ Zenno €49 ต่อเดือน ได้ทุกอย่าง',
            shore: 'Booking €49.90 ไม่รวม VAT เมื่อทำสัญญารายปี €39.90 ใน 12 เดือนแรก',
            treatwell: 'Starter €39 ต่อเดือน ไม่รวม VAT',
            phorest: 'ต้องขอใบเสนอราคา',
            fresha: '€12.95 ไม่รวม VAT สำหรับคนเดียว ทีม €8.95 ต่อคน',
          },
          sources: { shore: S.shorePrice, treatwell: S.twPrice, phorest: S.phPrice, fresha: S.frPrice },
        },
        {
          topic: 'ทดลองใช้ฟรี',
          cells: {
            zenno: 'แพ็กเกจฟรีไม่จำกัดเวลา',
            shore: '14 วัน',
            treatwell: 'ไม่มีแพ็กเกจฟรี ไม่ได้ระบุระยะทดลอง',
            phorest: 'ไม่มีรุ่นทดลอง มีเดโม',
            fresha: '7 วัน',
          },
          sources: { shore: S.shorePrice, treatwell: S.twPrice, phorest: S.phPrice, fresha: S.frPrice },
        },
        {
          topic: 'มาร์เก็ตเพลสและค่าคอมมิชชั่น',
          cells: {
            zenno: 'ไม่มีมาร์เก็ตเพลส ไม่มีค่าคอมมิชชั่น',
            shore: 'ไม่มีมาร์เก็ตเพลส ไม่มีค่าคอมมิชชั่น',
            treatwell: 'มีมาร์เก็ตเพลส ค่าคอมมิชชั่นลูกค้าใหม่ตามพื้นที่',
            phorest: 'ไม่ได้ระบุมาร์เก็ตเพลส ไม่มีค่าคอมมิชชั่น',
            fresha: 'มีมาร์เก็ตเพลส ค่าธรรมเนียมครั้งเดียวสำหรับลูกค้าใหม่',
          },
          sources: { shore: S.shoreDeposit, treatwell: S.twPrice, phorest: S.phPrice, fresha: S.frPrice },
        },
        {
          topic: 'มัดจำและการไม่มาตามนัด',
          cells: {
            zenno: 'มัดจำ จ่ายล่วงหน้า หรือผูกบัตรพร้อมค่าธรรมเนียม',
            shore: 'จ่ายล่วงหน้าตามบริการ',
            treatwell: 'จ่ายล่วงหน้าและค่าธรรมเนียมเมื่อไม่มา',
            phorest: 'มัดจำและค่าธรรมเนียมเมื่อไม่มา',
            fresha: 'จ่ายล่วงหน้า ค่าธรรมเนียมเมื่อไม่มาและยกเลิก',
          },
          sources: { shore: S.shoreDeposit, treatwell: S.twPay, phorest: S.phPrice, fresha: S.frPrice },
        },
        {
          topic: 'AI ตอบลูกค้า',
          cells: {
            zenno: 'WhatsApp อีเมล แชทบนเว็บไซต์ รวมในราคา',
            shore: 'ไม่ได้ระบุ มี WhatsApp ผ่านพาร์ทเนอร์ Superchat',
            treatwell: 'โทรศัพท์ WhatsApp “เร็วๆ นี้”',
            phorest: 'SMS และ WhatsApp ไม่ได้ระบุราคา',
            fresha: 'ส่วนเสริม €28.95 ต่อสาขา ไม่รวม VAT',
          },
          sources: { shore: S.shoreWa, treatwell: S.twAi, phorest: S.phAi, fresha: S.frPrice },
        },
        {
          topic: 'บัตรของขวัญและบัตรหลายครั้ง',
          cells: {
            zenno: 'บัตรของขวัญ ชุดบัตร บัตรหลายครั้ง',
            shore: 'บัตรของขวัญตั้งแต่ Kasse+ ไม่ได้ระบุบัตรหลายครั้ง',
            treatwell: 'บัตรของขวัญของร้าน ไม่ได้ระบุบัตรหลายครั้ง',
            phorest: 'บัตรของขวัญ ไม่ได้ระบุบัตรหลายครั้ง',
            fresha: 'บัตรของขวัญ แพ็กเกจ สมาชิก',
          },
          sources: { shore: S.shorePlans, treatwell: S.twPay, phorest: S.phPrice, fresha: S.frPrice },
        },
        {
          topic: 'เครื่องเก็บเงินและ DATEV',
          cells: {
            zenno: 'สมุดเงินสดและไฟล์ส่งออก DATEV',
            shore: 'เครื่องเก็บเงินพร้อม Cloud-TSE (€9) และ DATEV',
            treatwell: 'เครื่องเก็บเงินพร้อม TSE ในแพ็กเกจ Advanced',
            phorest: 'เครื่องเก็บเงินพร้อม Cloud-TSE และไฟล์ส่งออก DATEV',
            fresha: 'ไม่ได้ระบุ TSE และ DATEV',
          },
          sources: { shore: S.shorePrice, treatwell: S.twPrice, phorest: S.phTse, fresha: S.frPrice },
        },
      ],
    },
    cards: {
      kicker: 'เปรียบเทียบแบบตัวต่อตัว',
      title: ['Zenno กับแต่ละเจ้า', 'แบบละเอียด'],
      summaries: {
        shore: 'เครื่องเก็บเงินพร้อม TSE ในระบบเดียว เทียบกับการเริ่มใช้ฟรีและพนักงานต้อนรับ AI สำหรับ WhatsApp',
        treatwell: 'มาร์เก็ตเพลสที่มีค่าคอมมิชชั่นลูกค้าใหม่ เทียบกับหน้าจองของคุณเองที่ไม่มีค่าคอมมิชชั่น',
        phorest: 'ชุดซอฟต์แวร์ร้านขนาดใหญ่ที่ต้องขอราคา เทียบกับราคาคงที่และแพ็กเกจฟรี',
        fresha: 'ราคาตามจำนวนพนักงานบวกส่วนเสริม AI เทียบกับ €49 สำหรับทั้งทีม',
      },
    },
    faq: {
      kicker: 'คำถามที่พบบ่อย',
      title: ['แบบไหนเหมาะ', 'ตอบสั้นๆ'],
      items: [
        {
          q: 'Treatwell, Shore หรือ Phorest สำหรับร้านเสริมสวย แบบไหนเหมาะกว่า',
          a: 'Treatwell เหมาะถ้าอยากได้ลูกค้าใหม่จากมาร์เก็ตเพลสและยอมจ่ายค่าคอมมิชชั่นลูกค้าใหม่ Shore เหมาะถ้าอยากได้ระบบจองและเครื่องเก็บเงินพร้อม Cloud-TSE จากเจ้าเดียวโดยไม่มีค่าคอมมิชชั่น Phorest เหมาะกับกิจการขนาดใหญ่ที่อยากได้ชุดเครื่องมือการตลาดและการตั้งค่าแบบมีคนดูแล ราคาตามใบเสนอและสัญญา 12 ถึง 36 เดือน ถ้าอยากเริ่มใช้ฟรีและให้พนักงานต้อนรับ AI ตอบ WhatsApp Zenno เป็นอีกทางเลือก',
        },
        {
          q: 'ซอฟต์แวร์ร้านแบบไหนทดลองใช้ฟรีได้ก่อนตัดสินใจ',
          a: 'Zenno มีแพ็กเกจฟรีไม่จำกัดเวลาสำหรับพนักงาน 1 คนและบริการ 5 รายการ Shore ให้ทดลอง 14 วัน Fresha 7 วัน ตามเว็บไซต์ของ Phorest มีเดโมแทนรุ่นทดลองฟรี Treatwell ไม่มีแพ็กเกจฟรีและไม่ได้ระบุระยะทดลอง',
        },
        {
          q: 'ระบบจองคิวไหนมีพนักงานต้อนรับ AI',
          a: 'Zenno ตอบ WhatsApp อีเมล และแชทบนเว็บไซต์ด้วยพนักงานต้อนรับ AI ที่รวมในแพ็กเกจ Zenno Treatwell มี AI รับสายโทรศัพท์ Phorest มี Front Desk AI สำหรับ SMS และ WhatsApp Fresha มีพนักงานต้อนรับ AI เป็นส่วนเสริม €28.95 ต่อสาขาไม่รวม VAT ส่วน Shore ไม่ได้ระบุพนักงานต้อนรับ AI',
        },
      ],
    },
    sources: SOURCES,
  },
}
