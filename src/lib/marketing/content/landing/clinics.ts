import type { Lang } from '../../lang'
import type { LandingContent } from './types'
import { PLAN_LINE } from '../plans'

/**
 * Target searches (DE): Online-Terminbuchung Kosmetikpraxis, Buchungssystem Ästhetik, Terminbuchung Wellnesspraxis.
 * Scoped to aesthetic / wellness treatments. No medical, health-data or
 * VAT-exemption claims (medical services have their own rules).
 */
export const CLINICS: Record<Lang, LandingContent> = {
  de: {
    meta: {
      title: 'Online-Terminbuchung für Ästhetik- und Wellnesspraxen | Zenno',
      description:
        'Buchungssoftware für Ästhetik-, Kosmetik- und Wellnesspraxen: Beratungen und Behandlungen online buchen, auch über KI-Assistenten, Anzahlungen gegen No-Shows, Erinnerungen und DATEV-Export.',
    },
    label: 'Ästhetik- & Wellnesspraxen',
    hero: {
      kicker: 'Für Ästhetik-, Kosmetik- und Wellnesspraxen',
      title: ['Beratungen gebucht,', 'Behandlungen abgesichert.'],
      lead: 'Kundinnen und Kunden buchen Beratung oder Behandlung direkt auf Ihrer Seite, auch über KI-Assistenten. Für lange oder teure Behandlungen sichern Anzahlung oder hinterlegte Karte den Termin.',
      ctaPrimary: 'Kostenlos starten',
      ctaSecondary: 'Was die KI braucht',
      image: '/images/clinic-hero.webp',
      chat: {
        studio: 'KI-Assistent',
        channel: 'Beispielgespräch',
        accent: 'var(--ink)',
        turns: [
          { from: 'me', text: 'Ich hätte gern eine Beratung für eine Gesichtsbehandlung, nächste Woche vormittags.' },
          { from: 'bot', text: 'North Studio hat Di. 9:30 eine Beratung frei, 30 Min. Direkt dort buchen?' },
          { from: 'me', text: 'Ja' },
          { from: 'bot', text: 'Gebucht, direkt bei North Studio. Bestätigung und Stornolink kommen per E-Mail.', booked: true },
        ],
        bookedLabel: 'Im Kalender von North Studio · ohne Provision',
      },
    },
    points: {
      kicker: 'Warum Praxen wechseln',
      title: ['Gebaut für Behandlungen,', 'die Zeit und Vorbereitung brauchen.'],
      items: [
        {
          title: 'Teure Termine abgesichert',
          body: 'Verlangen Sie bei der Buchung eine Anzahlung oder den vollen Preis, oder hinterlegen Sie die Karte und berechnen Sie bei No-Show oder zu später Absage eine Gebühr.',
        },
        {
          title: 'Beratung zuerst',
          body: 'Legen Sie Beratungstermine als eigene Leistung mit Dauer und Preis an, damit Neukundschaft den ersten Schritt ohne Anruf bucht.',
        },
        {
          title: 'Von der KI gefunden',
          body: 'Wer ChatGPT oder Google nach einer Behandlung in der Nähe fragt, findet Ihre Leistungen, Preise und freien Zeiten und kann direkt bei Ihnen buchen.',
        },
        {
          title: 'Weniger Telefon am Empfang',
          body: 'Bestätigungen und Erinnerungen per SMS und E-Mail, Verschieben und Neubuchen im Kundenportal.',
        },
        {
          title: 'Mehrere Fachkräfte, ein Kalender',
          body: 'Behandlungen nach Fachkraft und Dauer. Im Free-Tarif 1 Therapeutin, im Zenno-Tarif beliebig viele.',
        },
        {
          title: 'Steuern sauber vorbereitet',
          body: 'Umsatzsteuer je Leistung, Steuerübersicht pro Monat oder Quartal und ein Export für DATEV oder Ihre Steuerberatung.',
        },
      ],
    },
    embed: 'readiness',
    steps: {
      kicker: 'In drei Schritten',
      title: ['Behandlungen anlegen.', 'Termine absichern.'],
      items: [
        { title: 'Leistungen anlegen', body: 'Beratung und Behandlungen mit Dauer, Preis und Fachkraft.' },
        { title: 'Absicherung wählen', body: 'Anzahlung, Vorkasse oder hinterlegte Karte mit No-Show-Gebühr.' },
        { title: 'Buchbar machen', body: 'Link auf Website und Google. Ein Schalter macht die Seite für KI-Assistenten buchbar.' },
      ],
    },
    faq: {
      kicker: 'Fragen aus der Praxis',
      title: ['Kurz beantwortet,', 'für Praxisinhaber:innen.'],
      items: [
        {
          q: 'Für welche Praxen eignet sich Zenno?',
          a: 'Für Ästhetik-, Kosmetik- und Wellnesspraxen, die Beratungen und Behandlungen mit fester Dauer und festem Preis anbieten.',
        },
        {
          q: 'Kann ich für Behandlungen eine Anzahlung verlangen?',
          a: 'Ja. Anzahlung oder voller Preis bei der Buchung, oder eine hinterlegte Karte mit Gebühr bei No-Show oder zu später Absage. Bezahlt wird über Stripe.',
        },
        {
          q: 'Können KI-Assistenten Termine bei uns buchen?',
          a: 'Ihre Zenno-Seite ist so gebaut, dass KI-Assistenten Sie direkt buchen können. Sie entscheiden, ob KI-Buchungen automatisch angenommen werden oder ob Sie jede einzeln per E-Mail bestätigen.',
        },
        {
          q: 'Was kostet Zenno?',
          a: `${PLAN_LINE.de} Auf Buchungen fällt keine Provision an.`,
        },
      ],
    },
    og: { line1: 'Beratungen gebucht,', line2: 'Behandlungen abgesichert.', sub: 'Terminbuchung für Ästhetik- & Wellnesspraxen' },
  },
  en: {
    meta: {
      title: 'Online booking for aesthetic and wellness clinics | Zenno',
      description:
        'Booking software for aesthetic, beauty and wellness clinics: consultations and treatments booked online, including by AI assistants, deposits against no-shows, reminders and DATEV export.',
    },
    label: 'Aesthetic & wellness clinics',
    hero: {
      kicker: 'For aesthetic, beauty and wellness clinics',
      title: ['Consultations booked,', 'treatments secured.'],
      lead: 'Clients book a consultation or treatment directly on your page, including through AI assistants. For long or costly treatments, a deposit or a card on file secures the slot.',
      ctaPrimary: 'Start free',
      ctaSecondary: 'See what AI needs',
      image: '/images/clinic-hero.webp',
      chat: {
        studio: 'AI assistant',
        channel: 'Example conversation',
        accent: 'var(--ink)',
        turns: [
          { from: 'me', text: 'I’d like a consultation for a facial treatment, next week in the morning.' },
          { from: 'bot', text: 'North Studio has a consultation free Tue 9:30, 30 min. Book it on their page?' },
          { from: 'me', text: 'Yes' },
          { from: 'bot', text: 'Booked directly with North Studio. Confirmation and cancel link are on their way.', booked: true },
        ],
        bookedLabel: "In North Studio's calendar · no commission",
      },
    },
    points: {
      kicker: 'Why clinics switch',
      title: ['Built for treatments', 'that take time and preparation.'],
      items: [
        {
          title: 'Costly appointments, secured',
          body: 'Ask for a deposit or the full price at booking, or keep the card on file and charge a fee for a no-show or late cancellation.',
        },
        {
          title: 'Consultation first',
          body: 'Set up consultations as their own service with duration and price, so new clients take the first step without calling.',
        },
        {
          title: 'Found by AI',
          body: 'When someone asks ChatGPT or Google for a treatment nearby, they find your services, prices and free times and can book you directly.',
        },
        {
          title: 'Fewer calls at the front desk',
          body: 'Confirmations and reminders by SMS and email, rescheduling and rebooking in the client portal.',
        },
        {
          title: 'Several specialists, one calendar',
          body: 'Treatments by specialist and duration. 1 therapist on Free, as many as you need on Zenno.',
        },
        {
          title: 'Tax, prepared',
          body: 'VAT per service, a monthly or quarterly tax overview and an export for DATEV or your tax advisor.',
        },
      ],
    },
    embed: 'readiness',
    steps: {
      kicker: 'Three steps',
      title: ['Add treatments.', 'Secure the slots.'],
      items: [
        { title: 'Add your services', body: 'Consultations and treatments with duration, price and specialist.' },
        { title: 'Choose your protection', body: 'Deposit, prepayment or card on file with a no-show fee.' },
        { title: 'Make it bookable', body: 'Link on your website and Google. One switch makes the page bookable by AI assistants.' },
      ],
    },
    faq: {
      kicker: 'Clinic questions',
      title: ['Answered briefly,', 'for clinic owners.'],
      items: [
        {
          q: 'Which clinics is Zenno for?',
          a: 'Aesthetic, beauty and wellness clinics that offer consultations and treatments with a set duration and price.',
        },
        {
          q: 'Can I ask for a deposit on treatments?',
          a: 'Yes. A deposit or the full price at booking, or a card on file with a fee for a no-show or late cancellation. Payments run through Stripe.',
        },
        {
          q: 'Can AI assistants book appointments with us?',
          a: 'Your Zenno page is built so AI assistants can book you directly. You decide whether AI bookings are accepted automatically or approved one by one from the email.',
        },
        {
          q: 'What does Zenno cost?',
          a: `${PLAN_LINE.en} There is no commission on bookings.`,
        },
      ],
    },
    og: { line1: 'Consultations booked,', line2: 'treatments secured.', sub: 'Booking for aesthetic & wellness clinics' },
  },
  th: {
    meta: {
      title: 'ระบบจองคิวออนไลน์สำหรับคลินิกความงามและเวลเนส | Zenno',
      description:
        'ระบบจองคิวสำหรับคลินิกความงามและเวลเนส: จองปรึกษาและทรีตเมนต์ออนไลน์ รวมถึงผ่านผู้ช่วย AI มัดจำป้องกันลูกค้าไม่มาตามนัด การแจ้งเตือน และการส่งออกข้อมูลไปยัง DATEV',
    },
    label: 'คลินิกความงามและเวลเนส',
    hero: {
      kicker: 'สำหรับคลินิกเสริมความงาม คลินิกความงาม และคลินิกเวลเนส',
      title: ['นัดปรึกษามีคนจอง', 'ทรีตเมนต์มีหลักประกัน'],
      lead: 'ลูกค้าจองนัดปรึกษาหรือทรีตเมนต์ได้โดยตรงบนหน้าของคุณ รวมถึงผ่านผู้ช่วย AI สำหรับทรีตเมนต์ที่ใช้เวลานานหรือราคาสูง มัดจำหรือการบันทึกบัตรไว้ช่วยล็อกคิวให้',
      ctaPrimary: 'เริ่มใช้ฟรี',
      ctaSecondary: 'ดูว่า AI ต้องการอะไร',
      image: '/images/clinic-hero.webp',
      chat: {
        studio: 'ผู้ช่วย AI',
        channel: 'ตัวอย่างบทสนทนา',
        accent: 'var(--ink)',
        turns: [
          { from: 'me', text: 'อยากนัดปรึกษาเรื่องทรีตเมนต์หน้า สัปดาห์หน้าช่วงเช้า' },
          { from: 'bot', text: 'North Studio ว่างนัดปรึกษาวันอังคาร 9:30 30 นาที จองผ่านหน้าของคลินิกเลยไหมคะ' },
          { from: 'me', text: 'ได้' },
          { from: 'bot', text: 'จองกับ North Studio โดยตรงแล้วค่ะ คำยืนยันและลิงก์ยกเลิกกำลังส่งไปให้', booked: true },
        ],
        bookedLabel: 'อยู่ในปฏิทินของ North Studio · ไม่มีค่าคอมมิชชั่น',
      },
    },
    points: {
      kicker: 'ทำไมคลินิกถึงเปลี่ยนมาใช้',
      title: ['สร้างมาเพื่อทรีตเมนต์', 'ที่ต้องใช้เวลาและการเตรียมตัว'],
      items: [
        {
          title: 'นัดราคาสูงก็มั่นใจได้',
          body: 'เก็บมัดจำหรือราคาเต็มตอนจอง หรือบันทึกบัตรไว้ แล้วเรียกเก็บค่าธรรมเนียมเมื่อลูกค้าไม่มาตามนัดหรือยกเลิกกระชั้นชิด',
        },
        {
          title: 'เริ่มจากการปรึกษา',
          body: 'ตั้งนัดปรึกษาเป็นบริการแยก พร้อมระยะเวลาและราคา ลูกค้าใหม่จึงเริ่มก้าวแรกได้โดยไม่ต้องโทร',
        },
        {
          title: 'AI ค้นเจอคุณ',
          body: 'เมื่อมีคนถาม ChatGPT หรือ Google หาทรีตเมนต์ใกล้ๆ เขาจะเจอบริการ ราคา และเวลาว่างของคุณ และจองกับคุณได้โดยตรง',
        },
        {
          title: 'สายโทรเข้าที่เคาน์เตอร์น้อยลง',
          body: 'คำยืนยันและการแจ้งเตือนทาง SMS และอีเมล การเลื่อนนัดและจองใหม่ทำได้ในพอร์ทัลลูกค้า',
        },
        {
          title: 'ผู้ให้บริการหลายคน ปฏิทินเดียว',
          body: 'จัดทรีตเมนต์ตามผู้ให้บริการและระยะเวลา แพ็กเกจ Free มีพนักงาน 1 คน Zenno เพิ่มได้ไม่จำกัด',
        },
        {
          title: 'ภาษีเตรียมไว้ให้แล้ว',
          body: 'ภาษีมูลค่าเพิ่มตามแต่ละบริการ ภาพรวมภาษีรายเดือนหรือรายไตรมาส และการส่งออกข้อมูลสำหรับ DATEV หรือนักบัญชีของคุณ',
        },
      ],
    },
    embed: 'readiness',
    steps: {
      kicker: 'สามขั้นตอน',
      title: ['เพิ่มทรีตเมนต์', 'ล็อกคิวให้แน่นอน'],
      items: [
        { title: 'เพิ่มบริการของคุณ', body: 'นัดปรึกษาและทรีตเมนต์ พร้อมระยะเวลา ราคา และผู้ให้บริการ' },
        { title: 'เลือกการป้องกัน', body: 'มัดจำ ชำระเต็มจำนวนล่วงหน้า หรือบันทึกบัตรไว้พร้อมค่าธรรมเนียมเมื่อไม่มาตามนัด' },
        { title: 'เปิดให้จองได้', body: 'ใส่ลิงก์ไว้บนเว็บไซต์และ Google สวิตช์เดียวก็ทำให้ผู้ช่วย AI จองผ่านหน้าของคุณได้' },
      ],
    },
    faq: {
      kicker: 'คำถามจากคลินิก',
      title: ['ตอบสั้นๆ', 'สำหรับเจ้าของคลินิก'],
      items: [
        {
          q: 'Zenno เหมาะกับคลินิกแบบไหน',
          a: 'คลินิกเสริมความงาม คลินิกความงาม และคลินิกเวลเนส ที่มีนัดปรึกษาและทรีตเมนต์ซึ่งกำหนดระยะเวลาและราคาไว้',
        },
        {
          q: 'เก็บมัดจำสำหรับทรีตเมนต์ได้ไหม',
          a: 'ได้ เก็บมัดจำหรือราคาเต็มตอนจอง หรือบันทึกบัตรไว้พร้อมค่าธรรมเนียมเมื่อไม่มาตามนัดหรือยกเลิกกระชั้นชิด การชำระเงินทำผ่าน Stripe',
        },
        {
          q: 'ผู้ช่วย AI จองนัดกับเราได้ไหม',
          a: 'หน้า Zenno ของคุณถูกสร้างมาให้ผู้ช่วย AI จองกับคุณได้โดยตรง คุณเลือกได้ว่าจะรับการจองผ่าน AI อัตโนมัติ หรืออนุมัติทีละรายการจากอีเมล',
        },
        {
          q: 'Zenno ราคาเท่าไร',
          a: `${PLAN_LINE.th} ไม่มีค่าคอมมิชชั่นสำหรับการจอง`,
        },
      ],
    },
    og: { line1: 'นัดปรึกษามีคนจอง', line2: 'ทรีตเมนต์มีหลักประกัน', sub: 'ระบบจองคิวสำหรับคลินิกความงามและเวลเนส' },
  },
}
