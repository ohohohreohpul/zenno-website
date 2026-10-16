import type { Lang } from '../lang'
import type { FaqItem } from './faq'
import type { OgCopy } from '@/components/marketing/OgImage'

/**
 * The two feature pages the rebrief asks for. Each has its own search intent
 * ("KI Rezeption WhatsApp", "Gutscheine verkaufen Kosmetikstudio") and links
 * back to the one product.
 */
export const FEATURE_PAGE_SLUGS = ['ai-receptionist', 'vouchers'] as const
export type FeaturePageSlug = (typeof FEATURE_PAGE_SLUGS)[number]

export interface FeaturePageContent {
  meta: { title: string; description: string }
  label: string
  hero: { eyebrow: string; title: string; lead: string; primary: string; secondary: string }
  faq: { kicker: string; title: [string, string]; items: FaqItem[] }
  og: OgCopy
}

const AI_RECEPTIONIST: Record<Lang, FeaturePageContent> = {
  de: {
    meta: {
      title: 'KI-Rezeption für WhatsApp, E-Mail und Website | Zenno',
      description:
        'Eine KI-Rezeption, die auf WhatsApp, per E-Mail und im Website-Chat antwortet, Termine bucht und Gutscheine verkauft. Für Spas, Massage- und Kosmetikstudios. Auf Deutsch, Englisch und Thai.',
    },
    label: 'KI-Rezeption',
    hero: {
      eyebrow: 'KI-Rezeption für WhatsApp, E-Mail und Website',
      title: 'Eine Rezeption, die nachts antwortet und für Sie bucht.',
      lead: 'Sie beantwortet Anfragen, schließt Buchungen ab und verkauft Gutscheine, gemeinsam mit Ihnen. Alles landet in Ihrem Kalender.',
      primary: 'Kostenlos starten',
      secondary: 'So spricht sie',
    },
    faq: {
      kicker: 'Fragen zur KI-Rezeption',
      title: ['Was sie tut,', 'und was nicht.'],
      items: [
        {
          q: 'Auf welchen Kanälen antwortet sie?',
          a: 'Auf WhatsApp mit Ihrer eigenen Nummer, per E-Mail und im Chat auf Ihrer Website. Alles steht in einem Posteingang.',
        },
        {
          q: 'Woher weiß sie Preise und freie Termine?',
          a: 'Aus Ihrer App. Sie bucht nur echte freie Zeiten und nennt nur Ihre Preise und Angebote. Sie rät nie.',
        },
        {
          q: 'Was passiert bei Beschwerden oder Gesundheitsfragen?',
          a: 'Sie übergibt den Chat an Sie und markiert ihn mit „Braucht Sie“. Im Entwurfsmodus geben Sie jede Antwort selbst frei.',
        },
        {
          q: 'Welche Sprachen spricht sie?',
          a: 'Deutsch, Englisch und Thai. Sie antwortet in der Sprache, in der der Gast schreibt.',
        },
        {
          q: 'Sperrt WhatsApp meine Nummer?',
          a: 'Sie antwortet Gästen, die Ihnen geschrieben haben. Rundnachrichten gehen langsam raus, und nur an Gäste, die zugestimmt haben.',
        },
      ],
    },
    og: { line1: 'Ihre Rezeption,', line2: 'auch um 23 Uhr.', sub: 'KI-Rezeption für WhatsApp, E-Mail und Website' },
  },
  en: {
    meta: {
      title: 'AI receptionist for WhatsApp, email and your website | Zenno',
      description:
        'An AI receptionist that answers on WhatsApp, by email and in your website chat, books appointments and sells vouchers. For spas, massage shops and beauty salons. In German, English and Thai.',
    },
    label: 'AI receptionist',
    hero: {
      eyebrow: 'AI receptionist for WhatsApp, email and your website',
      title: 'A receptionist who answers at night and books for you.',
      lead: 'She answers inquiries, completes bookings and sells gift cards, working with you. Everything lands in your calendar.',
      primary: 'Start free',
      secondary: 'Hear how she talks',
    },
    faq: {
      kicker: 'About the receptionist',
      title: ['What she does,', 'and what she does not.'],
      items: [
        {
          q: 'Which channels does she answer on?',
          a: 'WhatsApp with your own number, email and the chat on your website. Everything is in one inbox.',
        },
        {
          q: 'How does she know prices and free times?',
          a: 'From your app. She only books real free times and only quotes your prices and offers. She never guesses.',
        },
        {
          q: 'What about complaints or health questions?',
          a: 'She hands the chat to you and marks it "Needs you". With draft mode on, you approve every reply yourself.',
        },
        {
          q: 'Which languages does she speak?',
          a: 'German, English and Thai. She answers in the language the guest writes in.',
        },
        {
          q: 'Will WhatsApp ban my number?',
          a: 'She answers guests who wrote to you. Bulk messages go out slowly, and only to people who agreed.',
        },
      ],
    },
    og: { line1: 'Your front desk,', line2: 'even at 11 pm.', sub: 'AI receptionist for WhatsApp, email and website' },
  },
  th: {
    meta: {
      title: 'พนักงานต้อนรับ AI สำหรับ WhatsApp อีเมล และเว็บไซต์ | Zenno',
      description:
        'พนักงานต้อนรับ AI ที่ตอบลูกค้าทาง WhatsApp อีเมล และแชทบนเว็บไซต์ จองคิว และขายบัตรของขวัญ สำหรับสปา ร้านนวด และร้านเสริมสวย รองรับภาษาเยอรมัน อังกฤษ และไทย',
    },
    label: 'พนักงานต้อนรับ AI',
    hero: {
      eyebrow: 'พนักงานต้อนรับ AI สำหรับ WhatsApp อีเมล และเว็บไซต์',
      title: 'พนักงานต้อนรับที่ตอบตอนกลางคืน และจองคิวให้คุณ',
      lead: 'เธอตอบคำถาม ปิดการจอง และขายบัตรของขวัญ ทำงานไปพร้อมกับคุณ ทุกอย่างลงปฏิทินของคุณ',
      primary: 'เริ่มใช้ฟรี',
      secondary: 'ฟังเธอคุย',
    },
    faq: {
      kicker: 'เกี่ยวกับพนักงานต้อนรับ',
      title: ['เธอทำอะไรได้', 'และอะไรที่ไม่ทำ'],
      items: [
        {
          q: 'เธอตอบที่ช่องทางไหนบ้าง',
          a: 'WhatsApp ด้วยเบอร์ของร้านเอง อีเมล และแชทบนเว็บไซต์ ทุกอย่างอยู่ในกล่องข้อความเดียว',
        },
        {
          q: 'เธอรู้ราคาและเวลาว่างได้อย่างไร',
          a: 'จากแอปของคุณ เธอจองเฉพาะเวลาว่างจริง และบอกเฉพาะราคาและโปรโมชันของร้าน เธอไม่เดา',
        },
        {
          q: 'ถ้ามีเรื่องร้องเรียนหรือคำถามสุขภาพล่ะ',
          a: 'เธอส่งแชทต่อให้คุณ และติดป้าย "รอคุณตอบ" ถ้าเปิดโหมดร่างข้อความ คุณจะอนุมัติทุกคำตอบเอง',
        },
        {
          q: 'เธอพูดได้กี่ภาษา',
          a: 'ภาษาเยอรมัน อังกฤษ และไทย เธอตอบตามภาษาที่ลูกค้าพิมพ์มา',
        },
        {
          q: 'WhatsApp จะแบนเบอร์ของฉันไหม',
          a: 'เธอตอบเฉพาะลูกค้าที่ทักมาหาร้าน ข้อความถึงหลายคนส่งช้าๆ และส่งเฉพาะคนที่ยินยอมเท่านั้น',
        },
      ],
    },
    og: { line1: 'หน้าเคาน์เตอร์ของคุณ', line2: 'แม้ตอนห้าทุ่ม', sub: 'พนักงานต้อนรับ AI สำหรับ WhatsApp อีเมล และเว็บไซต์' },
  },
}

const VOUCHERS: Record<Lang, FeaturePageContent> = {
  de: {
    meta: {
      title: 'Gutscheine verkaufen für Kosmetikstudio, Spa und Massage | Zenno',
      description:
        'Gutscheine online und an der Theke verkaufen, mit QR-Code ausstellen und per Scan einlösen. Wertgutscheine, Gutscheinsets und Mehrfachkarten, mit Kassenbuch und DATEV-Export.',
    },
    label: 'Gutscheine',
    hero: {
      eyebrow: 'Gutscheine für Kosmetikstudios, Spas und Massage',
      title: 'Gutscheine verkaufen, ohne Zettel in der Schublade.',
      lead: 'An der Theke in drei Schritten, online rund um die Uhr. Jeder Gutschein hat einen QR-Code und wird per Scan eingelöst.',
      primary: 'Kostenlos starten',
      secondary: 'So geht der Verkauf',
    },
    faq: {
      kicker: 'Fragen zu Gutscheinen',
      title: ['Gutscheine,', 'einfach erklärt.'],
      items: [
        {
          q: 'Welche Gutscheine kann ich verkaufen?',
          a: 'Wertgutscheine, Gutscheinsets und Mehrfachkarten, zum Beispiel fünf Massagen zum Paketpreis.',
        },
        {
          q: 'Wo verkaufe ich sie?',
          a: 'Online auf Ihrer Buchungsseite, an der Theke in der App, und Ihre KI-Rezeption verkauft sie auch auf WhatsApp und per E-Mail.',
        },
        {
          q: 'Wie wird ein Gutschein eingelöst?',
          a: 'Scannen Sie den QR-Code beim Bezahlen. Der Betrag wird abgezogen, der Rest bleibt auf dem Gutschein.',
        },
        {
          q: 'Wie zahlen Gäste?',
          a: 'Per Karte, PayPal oder bar vor Ort. Verkäufe stehen im Kassenbuch und im DATEV-Export.',
        },
      ],
    },
    og: { line1: 'Gutscheine verkaufen,', line2: 'per QR einlösen.', sub: 'Für Kosmetikstudios, Spas und Massage' },
  },
  en: {
    meta: {
      title: 'Sell gift vouchers for your spa, salon or massage shop | Zenno',
      description:
        'Sell vouchers online and at the counter, issue them with a QR code and redeem them by scanning. Value vouchers, voucher sets and multi-visit passes, with a cash book and DATEV export.',
    },
    label: 'Vouchers',
    hero: {
      eyebrow: 'Gift vouchers for spas, salons and massage shops',
      title: 'Sell vouchers, without paper slips in a drawer.',
      lead: 'Three taps at the counter, online day and night. Every voucher has a QR code and is redeemed by scanning.',
      primary: 'Start free',
      secondary: 'See a sale',
    },
    faq: {
      kicker: 'About vouchers',
      title: ['Vouchers,', 'simply explained.'],
      items: [
        {
          q: 'Which vouchers can I sell?',
          a: 'Value vouchers, voucher sets and multi-visit passes, for example five massages at a package price.',
        },
        {
          q: 'Where do I sell them?',
          a: 'Online on your booking page, at the counter in the app, and your AI receptionist sells them on WhatsApp and by email too.',
        },
        {
          q: 'How is a voucher redeemed?',
          a: 'Scan the QR code at checkout. The amount is taken off and the rest stays on the voucher.',
        },
        {
          q: 'How do guests pay?',
          a: 'By card, PayPal or cash at the counter. Sales go into the cash book and the DATEV export.',
        },
      ],
    },
    og: { line1: 'Sell vouchers,', line2: 'redeem by QR.', sub: 'For spas, salons and massage shops' },
  },
  th: {
    meta: {
      title: 'ขายบัตรของขวัญสำหรับสปา ร้านเสริมสวย และร้านนวด | Zenno',
      description:
        'ขายบัตรของขวัญทั้งออนไลน์และที่เคาน์เตอร์ ออกบัตรพร้อม QR code และใช้งานด้วยการสแกน บัตรมูลค่า เซ็ตบัตรของขวัญ และบัตรหลายครั้ง พร้อมสมุดเงินสดและไฟล์ส่งออก DATEV',
    },
    label: 'บัตรของขวัญ',
    hero: {
      eyebrow: 'บัตรของขวัญสำหรับสปา ร้านเสริมสวย และร้านนวด',
      title: 'ขายบัตรของขวัญ ไม่ต้องมีกระดาษในลิ้นชักอีกต่อไป',
      lead: 'ขายที่เคาน์เตอร์ได้ในสามขั้นตอน ขายออนไลน์ได้ตลอดเวลา ทุกใบมี QR code ใช้งานด้วยการสแกน',
      primary: 'เริ่มใช้ฟรี',
      secondary: 'ดูการขาย',
    },
    faq: {
      kicker: 'เกี่ยวกับบัตรของขวัญ',
      title: ['บัตรของขวัญ', 'อธิบายแบบง่ายๆ'],
      items: [
        {
          q: 'ขายบัตรแบบไหนได้บ้าง',
          a: 'บัตรมูลค่า เซ็ตบัตรของขวัญ และบัตรหลายครั้ง เช่น นวดห้าครั้งในราคาแพ็กเกจ',
        },
        {
          q: 'ขายได้ที่ไหน',
          a: 'ออนไลน์บนหน้าจองของคุณ ที่เคาน์เตอร์ในแอป และพนักงานต้อนรับ AI ก็ขายทาง WhatsApp และอีเมลได้ด้วย',
        },
        {
          q: 'ใช้บัตรอย่างไร',
          a: 'สแกน QR code ตอนชำระเงิน ระบบจะหักยอด และยอดที่เหลือยังอยู่ในบัตร',
        },
        {
          q: 'ลูกค้าจ่ายเงินอย่างไร',
          a: 'บัตร PayPal หรือเงินสดที่ร้าน ยอดขายบันทึกในสมุดเงินสดและไฟล์ส่งออก DATEV',
        },
      ],
    },
    og: { line1: 'ขายบัตรของขวัญ', line2: 'ใช้งานด้วย QR', sub: 'สำหรับสปา ร้านเสริมสวย และร้านนวด' },
  },
}

export const FEATURE_PAGES: Record<FeaturePageSlug, Record<Lang, FeaturePageContent>> = {
  'ai-receptionist': AI_RECEPTIONIST,
  vouchers: VOUCHERS,
}
