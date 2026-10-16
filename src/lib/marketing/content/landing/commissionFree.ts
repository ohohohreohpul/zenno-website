import type { Lang } from '../../lang'
import type { LandingContent } from './types'

/**
 * Target searches (DE): Buchungssystem ohne Provision, Online-Terminbuchung ohne Provision,
 * Alternative zu Buchungsplattformen. Per the positioning brief no marketplace is named.
 * Claims: flat monthly plans (Free/Standard/Pro); no commission on AI bookings; Stripe's own
 * payment fees apply to online payments.
 */
export const COMMISSION_FREE: Record<Lang, LandingContent> = {
  de: {
    meta: {
      title: 'Buchungssystem ohne Provision: Ihre Kundschaft, Ihre Seite | Zenno',
      description:
        'Online-Terminbuchung ohne Provision für Studios und Salons: feste Monatstarife ab 0 €, Buchung auf Ihrer eigenen Seite in Ihrem Namen, und KI-Assistenten buchen Sie direkt statt über einen Marktplatz.',
    },
    label: 'Buchen ohne Provision',
    hero: {
      kicker: 'Die Alternative zu Buchungsplattformen',
      title: ['Ihre Kundschaft.', 'Ihre Seite. Keine Provision.'],
      lead: 'Marktplätze stellen ihre Marke zwischen Sie und Ihre Kundschaft und verlangen oft bis zu 35 % der ersten Buchung. Mit Zenno bucht man Sie auf Ihrer eigenen Seite, in Ihrem Namen, zu einem festen Monatstarif.',
      ctaPrimary: 'Kostenlos starten',
      ctaSecondary: 'Der Vergleich',
    },
    embed: 'readiness',
    points: {
      kicker: 'Was sich ändert',
      title: ['Gelistet werden', 'ist nicht dasselbe wie gebucht werden.'],
      items: [
        {
          title: 'Fester Preis statt Provision',
          body: 'Free 0 €, Standard 29 €, Pro 45 € im Monat. Auf KI-Buchungen fällt keine Provision an. Für Online-Zahlungen gelten die Gebühren von Stripe.',
        },
        {
          title: 'Ihr Name, nicht der des Marktplatzes',
          body: 'Gebucht wird auf Ihrer Seite mit Ihrem Logo. Kundschaft sieht kein Nachbarstudio als Empfehlung daneben.',
        },
        {
          title: 'Die Kundendaten gehören Ihnen',
          body: 'Kontakte und Buchungshistorie liegen in Ihrem eigenen Zenno-Konto, unter Ihrem Namen.',
        },
        {
          title: 'Die KI bucht Sie direkt',
          body: 'Fragt jemand ChatGPT oder Google nach einem Termin, kann die KI direkt auf Ihrer Seite buchen, statt auf einen Marktplatz zu verweisen.',
        },
      ],
    },
    steps: {
      kicker: 'So wechseln Sie',
      title: ['In einem Nachmittag', 'unabhängig.'],
      items: [
        { title: 'Kostenlos starten', body: 'Konto anlegen, keine Kreditkarte nötig.' },
        { title: 'Leistungen übernehmen', body: 'Leistungen, Preise und Team anlegen. Eigene Regeln für Anzahlung und No-Shows setzen.' },
        { title: 'Link teilen, KI einschalten', body: 'Buchungslink auf Instagram, Google und Ihre Website. Ein Schalter macht die Seite für KI-Assistenten buchbar.' },
      ],
    },
    faq: {
      kicker: 'Fragen zum Wechsel',
      title: ['Ohne Provision buchen,', 'kurz erklärt.'],
      items: [
        {
          q: 'Fällt bei Zenno wirklich keine Provision an?',
          a: 'Zenno Booking kostet einen festen Monatsbetrag: Free 0 €, Standard 29 €, Pro 45 €. Auf Buchungen über KI-Assistenten fällt keine Provision an. Für Online-Zahlungen berechnet Stripe seine üblichen Zahlungsgebühren.',
        },
        {
          q: 'Verliere ich Sichtbarkeit, wenn ich nicht auf einem Marktplatz bin?',
          a: 'Ihre Zenno-Seite steht in dem Format, das Google, ChatGPT und Perplexity lesen: Leistungen, Preise, Öffnungszeiten und freie Zeiten. So kann man Sie direkt finden und buchen.',
        },
        {
          q: 'Kann ich parallel auf einem Marktplatz bleiben?',
          a: 'Ja. Sie können Ihr Profil behalten und Stammkundschaft nach und nach auf Ihren eigenen Buchungslink lenken.',
        },
        {
          q: 'Ich nutze bereits onbuuk. Muss ich wechseln?',
          a: 'Nein. onbuuk heißt jetzt Zenno Booking. Konto, Leistungen, Buchungslink und Kundendaten bleiben erhalten.',
        },
      ],
    },
    og: { line1: 'Ihre Kundschaft.', line2: 'Ihre Seite. Keine Provision.', sub: 'Buchungssystem ohne Provision' },
  },
  en: {
    meta: {
      title: 'Commission-free booking: your clients, your page | Zenno',
      description:
        'Commission-free online booking for studios and salons: flat monthly plans from €0, bookings on your own page in your name, and AI assistants book you directly instead of through a marketplace.',
    },
    label: 'Commission-free booking',
    hero: {
      kicker: 'The alternative to booking marketplaces',
      title: ['Your clients.', 'Your page. No commission.'],
      lead: 'Marketplaces put their brand between you and your clients and often take up to 35% of the first booking. With Zenno, people book you on your own page, in your name, for a flat monthly plan.',
      ctaPrimary: 'Start free',
      ctaSecondary: 'The comparison',
    },
    embed: 'readiness',
    points: {
      kicker: 'What changes',
      title: ['Being listed', 'isn’t the same as being booked.'],
      items: [
        {
          title: 'A flat price, not a cut',
          body: 'Free €0, Standard €29, Pro €45 a month. No commission on AI bookings. Stripe’s own fees apply to online payments.',
        },
        {
          title: 'Your name, not the marketplace’s',
          body: 'Bookings happen on your page with your logo. Clients don’t see a competing studio suggested next to you.',
        },
        {
          title: 'The client data is yours',
          body: 'Contacts and booking history live in your own Zenno account, under your name.',
        },
        {
          title: 'AI books you directly',
          body: 'When someone asks ChatGPT or Google for an appointment, the AI can book on your page instead of pointing to a marketplace.',
        },
      ],
    },
    steps: {
      kicker: 'How to switch',
      title: ['Independent', 'in an afternoon.'],
      items: [
        { title: 'Start free', body: 'Create an account, no credit card needed.' },
        { title: 'Bring your services', body: 'Add services, prices and team. Set your own deposit and no-show rules.' },
        { title: 'Share the link, switch on AI', body: 'Booking link on Instagram, Google and your website. One switch makes the page bookable by AI assistants.' },
      ],
    },
    faq: {
      kicker: 'Switching questions',
      title: ['Commission-free booking,', 'in brief.'],
      items: [
        {
          q: 'Is there really no commission with Zenno?',
          a: 'Zenno Booking costs a flat monthly amount: Free €0, Standard €29, Pro €45. There is no commission on bookings made through AI assistants. For online payments, Stripe charges its usual payment fees.',
        },
        {
          q: 'Will I lose visibility if I’m not on a marketplace?',
          a: 'Your Zenno page is published in the format Google, ChatGPT and Perplexity read: services, prices, opening hours and free times. That lets people find and book you directly.',
        },
        {
          q: 'Can I stay on a marketplace in parallel?',
          a: 'Yes. You can keep your profile and move regulars over to your own booking link step by step.',
        },
        {
          q: 'I already use onbuuk. Do I need to switch?',
          a: 'No. onbuuk is now Zenno Booking. Your account, services, booking link and client data carry over.',
        },
      ],
    },
    og: { line1: 'Your clients.', line2: 'Your page. No commission.', sub: 'Commission-free booking for studios' },
  },
  th: {
    meta: {
      title: 'ระบบจองคิวไม่มีค่าคอมมิชชั่น: ลูกค้าของคุณ หน้าของคุณ | Zenno',
      description:
        'ระบบจองคิวออนไลน์ไม่มีค่าคอมมิชชั่นสำหรับสตูดิโอและซาลอน: แพ็กเกจรายเดือนราคาคงที่เริ่มต้น €0 การจองบนหน้าของคุณเองในชื่อของคุณ และผู้ช่วย AI จองกับคุณได้โดยตรงแทนที่จะผ่านแพลตฟอร์มตัวกลาง',
    },
    label: 'จองโดยไม่มีค่าคอมมิชชั่น',
    hero: {
      kicker: 'ทางเลือกแทนแพลตฟอร์มตัวกลางสำหรับการจอง',
      title: ['ลูกค้าของคุณ', 'หน้าของคุณ ไม่มีค่าคอมมิชชั่น'],
      lead: 'แพลตฟอร์มตัวกลางวางแบรนด์ของตัวเองไว้ระหว่างคุณกับลูกค้า และมักหักสูงถึง 35% ของการจองครั้งแรก กับ Zenno ลูกค้าจองกับคุณบนหน้าของคุณเอง ในชื่อของคุณ ด้วยแพ็กเกจรายเดือนราคาคงที่',
      ctaPrimary: 'เริ่มใช้ฟรี',
      ctaSecondary: 'ดูการเปรียบเทียบ',
    },
    embed: 'readiness',
    points: {
      kicker: 'อะไรที่เปลี่ยนไป',
      title: ['การมีรายชื่ออยู่บนแพลตฟอร์ม', 'ไม่ได้แปลว่าจะมีคนจอง'],
      items: [
        {
          title: 'ราคาคงที่ ไม่ใช่การหักส่วนแบ่ง',
          body: 'Free €0, Standard €29, Pro €45 ต่อเดือน ไม่มีค่าคอมมิชชั่นสำหรับการจองผ่าน AI สำหรับการชำระเงินออนไลน์ มีค่าธรรมเนียมของ Stripe เอง',
        },
        {
          title: 'ชื่อของคุณ ไม่ใช่ชื่อแพลตฟอร์มตัวกลาง',
          body: 'การจองเกิดขึ้นบนหน้าของคุณพร้อมโลโก้ของคุณ ลูกค้าจะไม่เห็นสตูดิโอคู่แข่งถูกแนะนำอยู่ข้างๆ คุณ',
        },
        {
          title: 'ข้อมูลลูกค้าเป็นของคุณ',
          body: 'รายชื่อติดต่อและประวัติการจองอยู่ในบัญชี Zenno ของคุณเอง ในชื่อของคุณ',
        },
        {
          title: 'AI จองกับคุณโดยตรง',
          body: 'เมื่อมีคนถาม ChatGPT หรือ Google เพื่อหานัด AI จองบนหน้าของคุณได้ แทนที่จะชี้ไปที่แพลตฟอร์มตัวกลาง',
        },
      ],
    },
    steps: {
      kicker: 'วิธีเปลี่ยนมาใช้',
      title: ['เป็นอิสระได้', 'ในบ่ายเดียว'],
      items: [
        { title: 'เริ่มใช้ฟรี', body: 'สร้างบัญชีได้เลย ไม่ต้องใช้บัตรเครดิต' },
        { title: 'นำบริการของคุณมา', body: 'เพิ่มบริการ ราคา และทีมงาน ตั้งกฎมัดจำและกฎเมื่อลูกค้าไม่มาตามนัดได้เอง' },
        { title: 'แชร์ลิงก์ แล้วเปิด AI', body: 'ใส่ลิงก์จองไว้บน Instagram, Google และเว็บไซต์ของคุณ สวิตช์เดียวก็ทำให้ผู้ช่วย AI จองผ่านหน้าของคุณได้' },
      ],
    },
    faq: {
      kicker: 'คำถามเรื่องการเปลี่ยนมาใช้',
      title: ['จองโดยไม่มีค่าคอมมิชชั่น', 'แบบสั้นๆ'],
      items: [
        {
          q: 'Zenno ไม่มีค่าคอมมิชชั่นจริงหรือ',
          a: 'Zenno Booking มีค่าใช้จ่ายรายเดือนคงที่: Free €0, Standard €29, Pro €45 ไม่มีค่าคอมมิชชั่นสำหรับการจองที่ทำผ่านผู้ช่วย AI สำหรับการชำระเงินออนไลน์ Stripe เรียกเก็บค่าธรรมเนียมการชำระเงินตามปกติของ Stripe',
        },
        {
          q: 'ถ้าไม่อยู่บนแพลตฟอร์มตัวกลาง ฉันจะมีคนเห็นน้อยลงไหม',
          a: 'หน้า Zenno ของคุณถูกเผยแพร่ในรูปแบบที่ Google, ChatGPT และ Perplexity อ่านได้: บริการ ราคา เวลาเปิดทำการ และเวลาว่าง ทำให้คนค้นเจอและจองกับคุณได้โดยตรง',
        },
        {
          q: 'ยังอยู่บนแพลตฟอร์มตัวกลางควบคู่กันไปได้ไหม',
          a: 'ได้ คุณเก็บโปรไฟล์เดิมไว้ได้ และค่อยๆ ย้ายลูกค้าประจำมาใช้ลิงก์จองของคุณเองทีละขั้น',
        },
        {
          q: 'ฉันใช้ onbuuk อยู่แล้ว ต้องเปลี่ยนไหม',
          a: 'ไม่ต้อง onbuuk ตอนนี้คือ Zenno Booking บัญชี บริการ ลิงก์จอง และข้อมูลลูกค้าของคุณย้ายมาครบ',
        },
      ],
    },
    og: { line1: 'ลูกค้าของคุณ', line2: 'หน้าของคุณ ไม่มีค่าคอมมิชชั่น', sub: 'ระบบจองคิวไม่มีค่าคอมมิชชั่นสำหรับสตูดิโอ' },
  },
}
