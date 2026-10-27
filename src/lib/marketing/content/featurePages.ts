import type { Lang } from '../lang'
import type { FaqItem } from './faq'
import type { OgCopy } from '@/components/marketing/OgImage'
import type { StoryBlock } from './landing/types'

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
  /** Editorial block with a photo, between the hero screen and the product chapters. */
  story?: StoryBlock
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
    story: {
      kicker: 'Kurz nach 23 Uhr',
      title: ['Das Spa ist zu.', 'Die Rezeption antwortet trotzdem.'],
      paragraphs: [
        'Im Empfang ist das Licht aus, die Handtücher für morgen liegen gefaltet bereit. Auf dem Tresen leuchtet ein Telefon: Jemand fragt auf WhatsApp nach einer Paarmassage am Samstag. Früher hätte diese Nachricht bis zum Morgen gewartet.',
        'Bis dahin hat die Person vielleicht schon woanders gebucht. Viele Anfragen kommen genau dann, wenn niemand Zeit hat zu antworten: abends nach der Arbeit, am Sonntag, oder während Sie selbst mit einer Kundin im Behandlungsraum sind. Wer morgens erst einen Stapel Nachrichten abarbeiten muss, beginnt den Tag schon im Rückstand, und manche Frage bleibt einfach liegen, bis sie sich von selbst erledigt hat.',
        'Die KI-Rezeption von Zenno antwortet in diesem Moment, auf WhatsApp mit Ihrer eigenen Nummer, per E-Mail oder im Chat auf Ihrer Website, auf Deutsch, Englisch oder Thai. Sie kennt Ihre Leistungen, Preise und echten freien Zeiten, schlägt den Samstag um 15 Uhr vor und trägt die Buchung in Ihren Kalender ein. Bei Beschwerden oder Gesundheitsfragen übergibt sie an Sie, und im Entwurfsmodus geben Sie jede Antwort vorher selbst frei.',
      ],
      image: '/images/features/reception-night.webp',
      imageAlt: 'Geschlossene Spa-Rezeption bei Nacht, auf dem Tresen leuchtet ein Telefon mit einer neuen Nachricht',
      note: { label: 'Gebucht um 23:14', value: 'Paarmassage, Sa 15:00' },
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
          a: 'Aus Ihrer App. Sie bucht nur Zeiten, die dort wirklich frei sind, und nennt nur die Preise und Angebote, die Sie eingetragen haben.',
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
    story: {
      kicker: 'Just after 11 pm',
      title: ['The spa is closed.', 'The front desk still answers.'],
      paragraphs: [
        'The lights in reception are off and tomorrow’s towels are folded and ready. On the counter a phone lights up: someone on WhatsApp is asking about a couples massage on Saturday. This message used to wait until morning.',
        'By then, that person may already have booked somewhere else. A lot of questions arrive exactly when nobody is free to answer: in the evening after work, on a Sunday, or while you are in the treatment room with a client. Starting the morning with a pile of messages means starting the day behind, and some questions simply sit there until they no longer need an answer.',
        'The Zenno AI receptionist answers right then, on WhatsApp with your own number, by email or in the chat on your website, in German, English or Thai. She knows your services, prices and real free times, suggests Saturday at 3 pm and puts the booking in your calendar. Complaints and health questions go to you, and with draft mode on, you approve every reply before it is sent.',
      ],
      image: '/images/features/reception-night.webp',
      imageAlt: 'A closed spa reception at night, a phone on the counter glowing with a new message',
      note: { label: 'Booked at 11:14 pm', value: 'Couples massage, Sat 3 pm' },
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
          a: 'From your app. She only books times that are really free there and only quotes the prices and offers you have entered.',
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
    story: {
      kicker: 'หลังห้าทุ่มนิดหน่อย',
      title: ['สปาปิดแล้ว', 'แต่หน้าเคาน์เตอร์ยังตอบลูกค้าอยู่'],
      paragraphs: [
        'ไฟที่ล็อบบี้ปิดแล้ว ผ้าขนหนูสำหรับพรุ่งนี้พับเตรียมไว้เรียบร้อย บนเคาน์เตอร์มีมือถือสว่างขึ้นมา ลูกค้าทักมาทาง WhatsApp ถามเรื่องนวดคู่วันเสาร์ ถ้าเป็นเมื่อก่อน ข้อความนี้ต้องรอถึงเช้า',
        'กว่าจะถึงเช้า ลูกค้าคนนั้นอาจจองร้านอื่นไปแล้ว คำถามจำนวนมากเข้ามาตอนที่ไม่มีใครว่างตอบ ทั้งตอนค่ำหลังเลิกงาน วันอาทิตย์ หรือตอนที่คุณกำลังทำทรีตเมนต์ให้ลูกค้าอยู่ในห้อง ถ้าต้องเริ่มเช้าด้วยการไล่ตอบข้อความกองโต วันนั้นก็เริ่มต้นแบบตามหลังไปแล้ว และบางคำถามก็ค้างอยู่จนลูกค้าไม่ต้องการคำตอบอีก',
        'พนักงานต้อนรับ AI ของ Zenno ตอบทันทีตอนนั้นเลย ทาง WhatsApp ด้วยเบอร์ของร้านเอง ทางอีเมล หรือในแชทบนเว็บไซต์ เป็นภาษาเยอรมัน อังกฤษ หรือไทย เธอรู้บริการ ราคา และเวลาว่างจริงของร้าน เสนอเวลาบ่ายสามโมงวันเสาร์ แล้วลงการจองในปฏิทินของคุณ ถ้าเป็นเรื่องร้องเรียนหรือคำถามสุขภาพ เธอจะส่งต่อให้คุณ และถ้าเปิดโหมดร่างข้อความ คุณอนุมัติทุกคำตอบก่อนส่งเอง',
      ],
      image: '/images/features/reception-night.webp',
      imageAlt: 'ล็อบบี้สปาที่ปิดแล้วตอนกลางคืน มีมือถือบนเคาน์เตอร์สว่างขึ้นพร้อมข้อความใหม่',
      note: { label: 'จองเมื่อ 23:14', value: 'นวดคู่ เสาร์ 15:00' },
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
          a: 'จากแอปของคุณ เธอจองเฉพาะเวลาที่ว่างจริงในแอป และบอกเฉพาะราคาและโปรโมชันที่คุณกรอกไว้',
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
    story: {
      kicker: 'Mitte Dezember',
      title: ['Die Schleife binden Sie.', 'Um den Rest kümmert sich Zenno.'],
      paragraphs: [
        'Im Dezember suchen viele nach einem Geschenk, das nach Zeit für sich aussieht. Ein Gutschein für eine Massage oder einen Spa-Tag passt dazu, und an der Theke wird er mit Schleife überreicht.',
        'In den Wochen vor Weihnachten kommt beides zusammen: Kundschaft an der Theke, die schnell einen Gutschein mitnehmen will, und Anfragen per Nachricht, oft spät am Abend. Mit Papiergutscheinen beginnt dann die Suche. Welche Nummer war das, wie viel ist noch drauf, wurde er schon eingelöst? Und im Januar fragt die Steuerberatung, wo eigentlich die Gutscheinverkäufe aus dem Dezember stehen.',
        'Mit Zenno verkaufen Sie Wertgutscheine, Gutscheinsets und Mehrfachkarten an der Theke in drei Schritten und online auf Ihrer Buchungsseite rund um die Uhr. Ihre KI-Rezeption verkauft sie auch auf WhatsApp und per E-Mail. Jeder Gutschein hat einen QR-Code, der beim Einlösen gescannt wird, und der Restbetrag bleibt auf dem Gutschein. Jeder Verkauf steht im Kassenbuch und im DATEV-Export.',
      ],
      image: '/images/features/voucher-ribbon.webp',
      imageAlt: 'Hände binden an der Theke eines Spas eine Schleife um einen Geschenkumschlag, weihnachtliche Stimmung',
      note: { label: 'Gutschein verkauft', value: 'Spa-Tag für zwei, 180 €' },
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
    story: {
      kicker: 'Mid-December',
      title: ['You tie the ribbon.', 'Zenno handles the rest.'],
      paragraphs: [
        'In December a lot of people are looking for a gift that feels like time for yourself. A voucher for a massage or a spa day fits that wish, and at the counter it is handed over with a ribbon.',
        'In the weeks before Christmas, two things happen at once: clients at the counter who want a voucher quickly, and requests by message, often late in the evening. With paper vouchers, the searching starts. Which number was it, how much is left on it, has it already been used? And in January your tax advisor asks where December’s voucher sales are.',
        'With Zenno you sell value vouchers, voucher sets and multi-visit passes at the counter in three taps, and online on your booking page day and night. Your AI receptionist sells them on WhatsApp and by email too. Every voucher has a QR code that is scanned when it is redeemed, and any remaining balance stays on the voucher. Every sale goes into the cash book and the DATEV export.',
      ],
      image: '/images/features/voucher-ribbon.webp',
      imageAlt: 'Hands tying a ribbon around a gift envelope at a spa counter in a festive December mood',
      note: { label: 'Voucher sold', value: 'Spa day for two, €180' },
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
    story: {
      kicker: 'กลางเดือนธันวาคม',
      title: ['คุณผูกโบว์', 'ที่เหลือ Zenno จัดการให้'],
      paragraphs: [
        'ช่วงธันวาคม หลายคนมองหาของขวัญที่ให้เวลาพักผ่อนกับตัวเอง บัตรของขวัญสำหรับนวดหรือวันสปาตรงกับที่เขามองหา และที่เคาน์เตอร์ก็ส่งให้ลูกค้าพร้อมโบว์สวยๆ',
        'ช่วงสัปดาห์ก่อนคริสต์มาส สองอย่างมาพร้อมกัน ลูกค้าที่เคาน์เตอร์อยากได้บัตรของขวัญแบบรีบๆ และข้อความถามซื้อที่มักเข้ามาตอนดึก ถ้าเป็นบัตรกระดาษ ก็ต้องเริ่มตามหา เลขที่เท่าไร เหลือยอดเท่าไร ใช้ไปแล้วหรือยัง แล้วพอถึงเดือนมกราคม นักบัญชีก็ถามว่ายอดขายบัตรของขวัญเดือนธันวาคมอยู่ตรงไหน',
        'กับ Zenno คุณขายบัตรมูลค่า เซ็ตบัตรของขวัญ และบัตรหลายครั้ง ที่เคาน์เตอร์ได้ในสามขั้นตอน และขายออนไลน์บนหน้าจองได้ตลอดเวลา พนักงานต้อนรับ AI ก็ขายทาง WhatsApp และอีเมลได้ด้วย ทุกใบมี QR code ที่สแกนตอนใช้งาน และยอดที่เหลือยังอยู่ในบัตร ทุกการขายบันทึกในสมุดเงินสดและไฟล์ส่งออก DATEV',
      ],
      image: '/images/features/voucher-ribbon.webp',
      imageAlt: 'มือกำลังผูกโบว์บนซองของขวัญที่เคาน์เตอร์สปา บรรยากาศเดือนธันวาคม',
      note: { label: 'ขายบัตรของขวัญแล้ว', value: 'วันสปาสำหรับสองคน €180' },
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
