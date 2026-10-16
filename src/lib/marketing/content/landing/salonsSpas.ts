import type { Lang } from '../../lang'
import type { LandingContent } from './types'
import { PLAN_LINE } from '../plans'

/** Target searches (DE): Online-Terminbuchung Friseur, Buchungssystem Kosmetikstudio, Terminbuchung Spa. */
export const SALONS_SPAS: Record<Lang, LandingContent> = {
  de: {
    meta: {
      title: 'Online-Terminbuchung für Friseure, Kosmetikstudios & Spas | Zenno',
      description:
        'Buchungssystem für Friseure, Kosmetikstudios, Nagelstudios und Spas: Online-Buchung, die KI-Assistenten direkt buchen können, Anzahlungen gegen No-Shows, Erinnerungen und DATEV-Export. Kostenlos starten.',
    },
    label: 'Friseure, Kosmetik & Spas',
    hero: {
      kicker: 'Für Friseure, Kosmetik- und Nagelstudios, Spas',
      title: ['Jeder Stuhl gebucht.', 'Auch über die KI.'],
      lead: 'Ihre Buchungsseite zeigt Leistungen, Preise und freie Zeiten so, dass Kundschaft und KI-Assistenten direkt bei Ihnen buchen. Anzahlungen schützen vor No-Shows, Erinnerungen gehen von selbst raus.',
      ctaPrimary: 'Kostenlos starten',
      ctaSecondary: 'Was die KI braucht',
      image: '/images/salon-hero.webp',
      chat: {
        studio: 'KI-Assistent',
        channel: 'Beispielgespräch',
        accent: 'var(--ink)',
        turns: [
          { from: 'me', text: 'Ich brauche Balayage, am liebsten Samstag in Eimsbüttel.' },
          { from: 'bot', text: 'Studio Mira hat Sa. 11:00 frei, Balayage mit Ines, 2 Std. Direkt dort buchen?' },
          { from: 'me', text: 'Ja, bitte' },
          { from: 'bot', text: 'Gebucht, direkt bei Studio Mira. Die Bestätigung ist unterwegs.', booked: true },
        ],
        bookedLabel: 'Im Kalender von Studio Mira · ohne Provision',
      },
    },
    points: {
      kicker: 'Warum Salons wechseln',
      title: ['Gebaut für den Salonalltag,', 'nicht für einen Marktplatz.'],
      items: [
        {
          title: 'Lange Termine abgesichert',
          body: 'Für Farbe, Balayage oder Treatments verlangen Sie eine Anzahlung oder den vollen Preis bei der Buchung. Kommt jemand nicht, ist der Stuhl trotzdem bezahlt.',
        },
        {
          title: 'Von der KI gefunden und gebucht',
          body: 'Fragt jemand ChatGPT oder Google nach einem Friseur in der Nähe, findet die KI Ihre Leistungen, Preise und freien Zeiten und kann direkt bei Ihnen buchen.',
        },
        {
          title: 'Ihre Kundschaft bleibt Ihre',
          body: 'Gebucht wird auf Ihrer eigenen Seite, in Ihrem Namen. Kein Marktplatz zwischen Ihnen und Ihren Stammkundinnen, keine Provision auf KI-Buchungen.',
        },
        {
          title: 'Gutscheine & Treueprogramm',
          body: 'Gutscheine online verkaufen und Stammkundschaft mit Punkten belohnen. Ideal für Geburtstage, Feiertage und den zehnten Besuch.',
        },
        {
          title: 'Erinnerungen per SMS und E-Mail',
          body: 'Bestätigungen und Erinnerungen gehen automatisch raus. Kundschaft verschiebt oder bucht selbst im Kundenportal neu.',
        },
        {
          title: 'Steuern ohne Zettelwirtschaft',
          body: 'Richtige Umsatzsteuer je Leistung, auch als Kleinunternehmer, und ein Export für DATEV oder Ihre Steuerberatung.',
        },
      ],
    },
    embed: 'readiness',
    steps: {
      kicker: 'In drei Schritten',
      title: ['Heute eingerichtet.', 'Morgen gebucht.'],
      items: [
        { title: 'Leistungen anlegen', body: 'Schnitt, Farbe, Behandlungen mit Dauer, Preis und Team. Der kostenlose Tarif reicht zum Start.' },
        { title: 'Regeln festlegen', body: 'Anzahlung oder Vorkasse, Karte hinterlegen, KI-Buchungen automatisch annehmen oder selbst bestätigen.' },
        { title: 'Link teilen, KI einschalten', body: 'Buchungslink in Instagram, Google und auf die Website. Mit einem Schalter wird Ihre Seite für KI-Assistenten buchbar.' },
      ],
    },
    faq: {
      kicker: 'Fragen aus dem Salon',
      title: ['Kurz beantwortet,', 'für Inhaberinnen und Inhaber.'],
      items: [
        {
          q: 'Für welche Betriebe ist Zenno gedacht?',
          a: 'Für Friseure und Barbershops, Kosmetik- und Nagelstudios, Massage- und Wellnessstudios sowie Day Spas, also überall, wo Termine mit Dauer, Preis und Fachkraft gebucht werden.',
        },
        {
          q: 'Kann ich für bestimmte Leistungen eine Anzahlung verlangen?',
          a: 'Ja. Sie können bei der Buchung eine Anzahlung oder den vollen Preis verlangen oder die Karte hinterlegen lassen und bei No-Show oder zu später Absage eine Gebühr berechnen. Bezahlt wird über Stripe.',
        },
        {
          q: 'Brauchen meine Kundinnen ein Konto?',
          a: 'Nein. Gebucht wird ohne Konto. Jede Buchung bekommt eine Bestätigung mit Stornolink, und im Kundenportal lassen sich Termine verschieben und neu buchen.',
        },
        {
          q: 'Was kostet Zenno für einen Salon?',
          a: `${PLAN_LINE.de} Auf Buchungen fällt keine Provision an.`,
        },
      ],
    },
    og: { line1: 'Jeder Stuhl gebucht.', line2: 'Auch über die KI.', sub: 'Online-Terminbuchung für Salons & Spas' },
  },
  en: {
    meta: {
      title: 'Online booking for hair salons, beauty studios & spas | Zenno',
      description:
        'Booking software for hair salons, beauty and nail studios and spas: online booking that AI assistants can book directly, deposits against no-shows, reminders and DATEV export. Start free.',
    },
    label: 'Salons & spas',
    hero: {
      kicker: 'For hair salons, beauty and nail studios, spas',
      title: ['Every chair booked.', 'By AI too.'],
      lead: 'Your booking page shows services, prices and free times so clients and AI assistants book you directly. Deposits protect you from no-shows, and reminders go out on their own.',
      ctaPrimary: 'Start free',
      ctaSecondary: 'See what AI needs',
      image: '/images/salon-hero.webp',
      chat: {
        studio: 'AI assistant',
        channel: 'Example conversation',
        accent: 'var(--ink)',
        turns: [
          { from: 'me', text: 'I need a balayage, ideally Saturday in Eimsbüttel.' },
          { from: 'bot', text: 'Studio Mira has Sat 11:00 free, balayage with Ines, 2 hours. Book it on their page?' },
          { from: 'me', text: 'Yes please' },
          { from: 'bot', text: 'Booked directly with Studio Mira. The confirmation is on its way.', booked: true },
        ],
        bookedLabel: "In Studio Mira's calendar · no commission",
      },
    },
    points: {
      kicker: 'Why salons switch',
      title: ['Built for a salon day,', 'not for a marketplace.'],
      items: [
        {
          title: 'Long appointments, secured',
          body: 'For colour, balayage or treatments, ask for a deposit or the full price at booking. If someone doesn’t show, the chair is still paid for.',
        },
        {
          title: 'Found and booked by AI',
          body: 'When someone asks ChatGPT or Google for a salon nearby, the AI finds your services, prices and free times and can book you directly.',
        },
        {
          title: 'Your clients stay yours',
          body: 'Bookings happen on your own page, in your name. No marketplace between you and your regulars, no commission on AI bookings.',
        },
        {
          title: 'Gift cards & loyalty',
          body: 'Sell gift cards online and reward regulars with points. Made for birthdays, holidays and the tenth visit.',
        },
        {
          title: 'SMS and email reminders',
          body: 'Confirmations and reminders go out automatically. Clients reschedule or rebook themselves in the client portal.',
        },
        {
          title: 'Tax without the paperwork',
          body: 'The right VAT on every service, including the Kleinunternehmer rule, and an export for DATEV or your tax advisor.',
        },
      ],
    },
    embed: 'readiness',
    steps: {
      kicker: 'Three steps',
      title: ['Set up today.', 'Booked tomorrow.'],
      items: [
        { title: 'Add your services', body: 'Cuts, colour and treatments with duration, price and team. The free plan is enough to start.' },
        { title: 'Set your rules', body: 'Deposit or prepayment, card on file, and AI bookings accepted automatically or approved by you.' },
        { title: 'Share the link, switch on AI', body: 'Put your booking link on Instagram, Google and your website. One switch makes your page bookable by AI assistants.' },
      ],
    },
    faq: {
      kicker: 'Salon questions',
      title: ['Answered briefly,', 'for owners.'],
      items: [
        {
          q: 'Which businesses is Zenno for?',
          a: 'Hair salons and barbers, beauty and nail studios, massage and wellness studios and day spas: anywhere appointments are booked with a duration, a price and a specialist.',
        },
        {
          q: 'Can I ask for a deposit on certain services?',
          a: 'Yes. You can ask for a deposit or the full price at booking, or keep the client’s card on file and charge a fee for a no-show or late cancellation. Payments run through Stripe.',
        },
        {
          q: 'Do my clients need an account?',
          a: 'No. Clients book without an account. Every booking gets a confirmation with a cancel link, and the client portal lets them reschedule and rebook.',
        },
        {
          q: 'What does Zenno cost for a salon?',
          a: `${PLAN_LINE.en} There is no commission on bookings.`,
        },
      ],
    },
    og: { line1: 'Every chair booked.', line2: 'By AI too.', sub: 'Online booking for salons & spas' },
  },
  th: {
    meta: {
      title: 'ระบบจองคิวออนไลน์สำหรับร้านทำผม ร้านเสริมสวย และสปา | Zenno',
      description:
        'ระบบจองคิวสำหรับร้านทำผม ร้านเสริมสวย ร้านทำเล็บ และสปา: การจองออนไลน์ที่ผู้ช่วย AI จองให้ได้โดยตรง มัดจำป้องกันลูกค้าไม่มาตามนัด การแจ้งเตือน และการส่งออกข้อมูลไปยัง DATEV เริ่มใช้ฟรี',
    },
    label: 'ซาลอนและสปา',
    hero: {
      kicker: 'สำหรับร้านทำผม ร้านเสริมสวย ร้านทำเล็บ และสปา',
      title: ['ทุกเก้าอี้มีคนจอง', 'รวมถึงผ่าน AI ด้วย'],
      lead: 'หน้าจองของคุณแสดงบริการ ราคา และเวลาว่าง ให้ทั้งลูกค้าและผู้ช่วย AI จองกับคุณได้โดยตรง มัดจำช่วยป้องกันลูกค้าไม่มาตามนัด และการแจ้งเตือนก็ส่งออกไปเอง',
      ctaPrimary: 'เริ่มใช้ฟรี',
      ctaSecondary: 'ดูว่า AI ต้องการอะไร',
      image: '/images/salon-hero.webp',
      chat: {
        studio: 'ผู้ช่วย AI',
        channel: 'ตัวอย่างบทสนทนา',
        accent: 'var(--ink)',
        turns: [
          { from: 'me', text: 'อยากทำบาลายาจ ถ้าได้วันเสาร์ แถวเอมส์บึทเทล' },
          { from: 'bot', text: 'Studio Mira ว่างวันเสาร์ 11:00 ทำบาลายาจกับ Ines 2 ชั่วโมง จองผ่านหน้าของร้านเลยไหมคะ' },
          { from: 'me', text: 'ได้เลย' },
          { from: 'bot', text: 'จองกับ Studio Mira โดยตรงแล้วค่ะ คำยืนยันกำลังส่งไปให้', booked: true },
        ],
        bookedLabel: 'อยู่ในปฏิทินของ Studio Mira · ไม่มีค่าคอมมิชชั่น',
      },
    },
    points: {
      kicker: 'ทำไมซาลอนถึงเปลี่ยนมาใช้',
      title: ['สร้างมาเพื่องานในซาลอน', 'ไม่ใช่เพื่อแพลตฟอร์มตัวกลาง'],
      items: [
        {
          title: 'นัดยาวก็มั่นใจได้',
          body: 'สำหรับงานทำสี บาลายาจ หรือทรีตเมนต์ คุณเก็บมัดจำหรือราคาเต็มตอนจองได้ ถ้าลูกค้าไม่มา เก้าอี้นั้นก็ยังได้รับเงินแล้ว',
        },
        {
          title: 'AI ค้นเจอและจองให้',
          body: 'เมื่อมีคนถาม ChatGPT หรือ Google หาซาลอนใกล้ๆ AI จะเจอบริการ ราคา และเวลาว่างของคุณ และจองกับคุณได้โดยตรง',
        },
        {
          title: 'ลูกค้าของคุณยังเป็นของคุณ',
          body: 'การจองเกิดขึ้นบนหน้าของคุณเอง ในชื่อของคุณ ไม่มีแพลตฟอร์มตัวกลางคั่นระหว่างคุณกับลูกค้าประจำ และไม่มีค่าคอมมิชชั่นสำหรับการจองผ่าน AI',
        },
        {
          title: 'บัตรของขวัญและระบบสะสมแต้ม',
          body: 'ขายบัตรของขวัญออนไลน์ และให้แต้มตอบแทนลูกค้าประจำ เหมาะกับวันเกิด เทศกาล และการมาใช้บริการครั้งที่สิบ',
        },
        {
          title: 'แจ้งเตือนทาง SMS และอีเมล',
          body: 'คำยืนยันและการแจ้งเตือนส่งออกไปอัตโนมัติ ลูกค้าเลื่อนนัดหรือจองใหม่เองได้ในพอร์ทัลลูกค้า',
        },
        {
          title: 'ภาษีโดยไม่ต้องวุ่นกับเอกสาร',
          body: 'ภาษีมูลค่าเพิ่มที่ถูกต้องในทุกบริการ รวมถึงกฎผู้ประกอบการรายย่อย (§19 UStG) และการส่งออกข้อมูลสำหรับ DATEV หรือนักบัญชีของคุณ',
        },
      ],
    },
    embed: 'readiness',
    steps: {
      kicker: 'สามขั้นตอน',
      title: ['ตั้งค่าวันนี้', 'มีคนจองพรุ่งนี้'],
      items: [
        { title: 'เพิ่มบริการของคุณ', body: 'ตัด ทำสี และทรีตเมนต์ พร้อมระยะเวลา ราคา และทีมงาน แพ็กเกจฟรีก็พอสำหรับเริ่มต้น' },
        { title: 'กำหนดกฎของคุณ', body: 'มัดจำหรือชำระเต็มจำนวนล่วงหน้า บันทึกบัตรไว้ และเลือกว่าจะรับการจองผ่าน AI อัตโนมัติหรือให้คุณอนุมัติเอง' },
        { title: 'แชร์ลิงก์ แล้วเปิด AI', body: 'ใส่ลิงก์จองไว้บน Instagram, Google และเว็บไซต์ของคุณ สวิตช์เดียวก็ทำให้ผู้ช่วย AI จองผ่านหน้าของคุณได้' },
      ],
    },
    faq: {
      kicker: 'คำถามจากซาลอน',
      title: ['ตอบสั้นๆ', 'สำหรับเจ้าของร้าน'],
      items: [
        {
          q: 'Zenno เหมาะกับธุรกิจแบบไหน',
          a: 'ร้านทำผมและบาร์เบอร์ ร้านเสริมสวยและร้านทำเล็บ ร้านนวดและเวลเนส รวมถึงเดย์สปา คือทุกที่ที่มีการจองนัดพร้อมระยะเวลา ราคา และผู้ให้บริการ',
        },
        {
          q: 'เก็บมัดจำสำหรับบางบริการได้ไหม',
          a: 'ได้ คุณเก็บมัดจำหรือราคาเต็มตอนจองได้ หรือบันทึกบัตรของลูกค้าไว้ แล้วเรียกเก็บค่าธรรมเนียมเมื่อลูกค้าไม่มาตามนัดหรือยกเลิกกระชั้นชิด การชำระเงินทำผ่าน Stripe',
        },
        {
          q: 'ลูกค้าต้องมีบัญชีไหม',
          a: 'ไม่ต้อง ลูกค้าจองได้โดยไม่ต้องมีบัญชี ทุกการจองได้รับคำยืนยันพร้อมลิงก์ยกเลิก และในพอร์ทัลลูกค้าก็เลื่อนนัดและจองใหม่ได้',
        },
        {
          q: 'Zenno สำหรับซาลอนราคาเท่าไร',
          a: `${PLAN_LINE.th} ไม่มีค่าคอมมิชชั่นสำหรับการจอง`,
        },
      ],
    },
    og: { line1: 'ทุกเก้าอี้มีคนจอง', line2: 'รวมถึงผ่าน AI ด้วย', sub: 'ระบบจองคิวออนไลน์สำหรับซาลอนและสปา' },
  },
}
