import type { Lang } from '../../lang'
import type { LandingContent } from './types'

/**
 * Target searches (DE): No-Show-Gebühr, No-Shows vermeiden Friseur, Anzahlung Termin Kosmetikstudio, Ausfallgebühr.
 * Live features only: deposit / full prepayment at booking; card on file + no-show or
 * late-cancel fee (Stripe). Not claimed: configurable windows, per-service rules, flagging.
 */
export const NO_SHOWS: Record<Lang, LandingContent> = {
  de: {
    meta: {
      title: 'No-Show-Gebühr & Anzahlung: No-Shows im Studio vermeiden | Zenno',
      description:
        'No-Shows kosten Studios jede Woche Umsatz. Mit Zenno verlangen Sie bei der Online-Buchung eine Anzahlung oder Vorkasse oder hinterlegen die Karte und berechnen eine Ausfallgebühr. Bezahlt über Stripe.',
    },
    label: 'No-Show-Schutz',
    hero: {
      kicker: 'No-Show-Schutz',
      title: ['Leerer Stuhl,', 'trotzdem bezahlt.'],
      lead: 'Verlangen Sie bei der Buchung eine Anzahlung oder den vollen Preis. Oder hinterlegen Sie die Karte und berechnen Sie eine Ausfallgebühr, wenn jemand nicht erscheint oder zu spät absagt.',
      ctaPrimary: 'Kostenlos starten',
      ctaSecondary: 'So funktioniert es',
    },
    embed: 'noShow',
    points: {
      kicker: 'Drei Wege',
      title: ['Wählen Sie,', 'wie fest ein Termin sein soll.'],
      items: [
        {
          title: 'Anzahlung bei der Buchung',
          body: 'Ein Teil des Preises wird beim Buchen fällig. Wer bezahlt hat, kommt, und wer nicht kommt, hat Ihre Zeit trotzdem bezahlt.',
        },
        {
          title: 'Vorkasse',
          body: 'Der volle Preis wird bei der Buchung bezahlt. Sinnvoll für lange Behandlungen und für Neukundschaft.',
        },
        {
          title: 'Hinterlegte Karte mit Ausfallgebühr',
          body: 'Die Karte wird bei der Buchung gespeichert. Bei No-Show oder zu später Absage berechnen Sie die Gebühr, sonst wird nichts belastet.',
        },
      ],
    },
    steps: {
      kicker: 'So funktioniert es',
      title: ['Einmal einstellen.', 'Jede Buchung ist abgesichert.'],
      items: [
        { title: 'Regel wählen', body: 'Anzahlung, Vorkasse oder hinterlegte Karte mit Ausfallgebühr.' },
        { title: 'Kundschaft bucht', body: 'Bezahlt oder hinterlegt wird direkt bei der Online-Buchung über Stripe.' },
        { title: 'Termin platzt? Gebühr statt Verlust', body: 'Bei No-Show oder zu später Absage berechnen Sie die Ausfallgebühr von der hinterlegten Karte.' },
      ],
    },
    faq: {
      kicker: 'Fragen zu No-Shows',
      title: ['Ausfallgebühr, Anzahlung,', 'Vorkasse: kurz erklärt.'],
      items: [
        {
          q: 'Darf ich in Deutschland eine No-Show-Gebühr verlangen?',
          a: 'Eine Ausfallgebühr ist üblich, wenn Kundinnen und Kunden vor der Buchung klar darauf hingewiesen werden, etwa in Ihren Buchungsbedingungen. Wie Sie das rechtssicher formulieren, klären Sie am besten mit Ihrer Rechtsberatung oder Ihrem Branchenverband.',
        },
        {
          q: 'Was ist der Unterschied zwischen Anzahlung und hinterlegter Karte?',
          a: 'Bei der Anzahlung wird sofort ein Teil des Preises bezahlt. Bei der hinterlegten Karte wird zunächst nichts belastet; erst bei No-Show oder zu später Absage berechnen Sie die Gebühr.',
        },
        {
          q: 'Über welchen Zahlungsanbieter läuft das?',
          a: 'Über Stripe, das direkt in Zenno Booking integriert ist. Kundschaft zahlt bei der Online-Buchung.',
        },
        {
          q: 'Helfen Erinnerungen zusätzlich?',
          a: 'Ja. Zenno schickt Bestätigungen und Erinnerungen automatisch per SMS und E-Mail, und Kundschaft kann im Kundenportal selbst verschieben statt einfach fernzubleiben.',
        },
      ],
    },
    og: { line1: 'Leerer Stuhl,', line2: 'trotzdem bezahlt.', sub: 'Anzahlung & Ausfallgebühr für Studios' },
  },
  en: {
    meta: {
      title: 'No-show fees & deposits: stop no-shows at your studio | Zenno',
      description:
        'No-shows cost studios revenue every week. With Zenno you ask for a deposit or prepayment at online booking, or keep the card on file and charge a no-show fee. Payments via Stripe.',
    },
    label: 'No-show protection',
    hero: {
      kicker: 'No-show protection',
      title: ['Empty chair,', 'still paid.'],
      lead: 'Ask for a deposit or the full price when clients book. Or keep their card on file and charge a fee if they don’t show up or cancel too late.',
      ctaPrimary: 'Start free',
      ctaSecondary: 'How it works',
    },
    embed: 'noShow',
    points: {
      kicker: 'Three ways',
      title: ['Choose how firm', 'a booking should be.'],
      items: [
        {
          title: 'Deposit at booking',
          body: 'Part of the price is due when booking. People who paid turn up, and people who don’t have still paid for your time.',
        },
        {
          title: 'Prepayment',
          body: 'The full price is paid at booking. Useful for long treatments and new clients.',
        },
        {
          title: 'Card on file with a no-show fee',
          body: 'The card is saved at booking. For a no-show or late cancellation you charge the fee; otherwise nothing is charged.',
        },
      ],
    },
    steps: {
      kicker: 'How it works',
      title: ['Set it once.', 'Every booking is covered.'],
      items: [
        { title: 'Pick a rule', body: 'Deposit, prepayment, or card on file with a no-show fee.' },
        { title: 'Clients book', body: 'Payment or card is taken during online booking through Stripe.' },
        { title: 'No-show? Fee, not loss', body: 'For a no-show or late cancellation, you charge the fee to the card on file.' },
      ],
    },
    faq: {
      kicker: 'No-show questions',
      title: ['Fees, deposits,', 'prepayment: in brief.'],
      items: [
        {
          q: 'Can I charge a no-show fee in Germany?',
          a: 'A no-show fee is common when clients are told clearly before booking, for example in your booking terms. For wording that holds up legally, check with your legal advisor or trade association.',
        },
        {
          q: 'What’s the difference between a deposit and a card on file?',
          a: 'With a deposit, part of the price is paid right away. With a card on file nothing is charged at first; you only charge the fee for a no-show or late cancellation.',
        },
        {
          q: 'Which payment provider is used?',
          a: 'Stripe, which is built into Zenno Booking. Clients pay during online booking.',
        },
        {
          q: 'Do reminders help as well?',
          a: 'Yes. Zenno sends confirmations and reminders automatically by SMS and email, and clients can reschedule in the client portal instead of simply not turning up.',
        },
      ],
    },
    og: { line1: 'Empty chair,', line2: 'still paid.', sub: 'Deposits & no-show fees for studios' },
  },
  th: {
    meta: {
      title: 'ค่าธรรมเนียมและมัดจำ: ป้องกันลูกค้าไม่มาตามนัด | Zenno',
      description:
        'ลูกค้าไม่มาตามนัดทำให้สตูดิโอเสียรายได้ทุกสัปดาห์ กับ Zenno คุณเก็บมัดจำหรือให้ชำระเต็มจำนวนล่วงหน้าตอนจองออนไลน์ได้ หรือบันทึกบัตรไว้แล้วเรียกเก็บค่าธรรมเนียมเมื่อไม่มาตามนัด ชำระเงินผ่าน Stripe',
    },
    label: 'ป้องกันลูกค้าไม่มาตามนัด',
    hero: {
      kicker: 'ป้องกันลูกค้าไม่มาตามนัด',
      title: ['เก้าอี้ว่าง', 'แต่ยังได้รับเงิน'],
      lead: 'เก็บมัดจำหรือราคาเต็มตอนลูกค้าจอง หรือบันทึกบัตรของลูกค้าไว้ แล้วเรียกเก็บค่าธรรมเนียมถ้าลูกค้าไม่มาหรือยกเลิกกระชั้นชิด',
      ctaPrimary: 'เริ่มใช้ฟรี',
      ctaSecondary: 'ดูวิธีการทำงาน',
    },
    embed: 'noShow',
    points: {
      kicker: 'สามวิธี',
      title: ['เลือกได้ว่าการจอง', 'ควรผูกมัดแค่ไหน'],
      items: [
        {
          title: 'มัดจำตอนจอง',
          body: 'ลูกค้าจ่ายส่วนหนึ่งของราคาตอนจอง คนที่จ่ายแล้วมักจะมา และคนที่ไม่มาก็จ่ายค่าเวลาของคุณไปแล้ว',
        },
        {
          title: 'ชำระเต็มจำนวนล่วงหน้า',
          body: 'ลูกค้าจ่ายราคาเต็มตอนจอง เหมาะกับทรีตเมนต์ที่ใช้เวลานานและลูกค้าใหม่',
        },
        {
          title: 'บันทึกบัตรไว้พร้อมค่าธรรมเนียมเมื่อไม่มาตามนัด',
          body: 'บัตรถูกบันทึกไว้ตอนจอง ถ้าลูกค้าไม่มาหรือยกเลิกกระชั้นชิด คุณเรียกเก็บค่าธรรมเนียม ถ้าไม่เช่นนั้นก็ไม่มีการเรียกเก็บใดๆ',
        },
      ],
    },
    steps: {
      kicker: 'วิธีการทำงาน',
      title: ['ตั้งค่าครั้งเดียว', 'ทุกการจองได้รับการคุ้มครอง'],
      items: [
        { title: 'เลือกกฎ', body: 'มัดจำ ชำระเต็มจำนวนล่วงหน้า หรือบันทึกบัตรไว้พร้อมค่าธรรมเนียมเมื่อไม่มาตามนัด' },
        { title: 'ลูกค้าจอง', body: 'การชำระเงินหรือการบันทึกบัตรเกิดขึ้นระหว่างการจองออนไลน์ผ่าน Stripe' },
        { title: 'ไม่มาตามนัด ได้ค่าธรรมเนียม ไม่ขาดทุน', body: 'เมื่อลูกค้าไม่มาหรือยกเลิกกระชั้นชิด คุณเรียกเก็บค่าธรรมเนียมจากบัตรที่บันทึกไว้' },
      ],
    },
    faq: {
      kicker: 'คำถามเรื่องลูกค้าไม่มาตามนัด',
      title: ['ค่าธรรมเนียม มัดจำ', 'และการชำระล่วงหน้า แบบสั้นๆ'],
      items: [
        {
          q: 'ในเยอรมนีเรียกเก็บค่าธรรมเนียมเมื่อลูกค้าไม่มาตามนัดได้ไหม',
          a: 'ค่าธรรมเนียมเมื่อไม่มาตามนัดเป็นเรื่องปกติ หากแจ้งลูกค้าอย่างชัดเจนก่อนจอง เช่น ในเงื่อนไขการจองของคุณ สำหรับถ้อยคำที่มีผลทางกฎหมาย โปรดตรวจสอบกับที่ปรึกษากฎหมายหรือสมาคมวิชาชีพของคุณ',
        },
        {
          q: 'มัดจำกับการบันทึกบัตรไว้ต่างกันอย่างไร',
          a: 'แบบมัดจำ ลูกค้าจ่ายส่วนหนึ่งของราคาทันที แบบบันทึกบัตรไว้ ยังไม่มีการเรียกเก็บเงินในตอนแรก คุณจะเรียกเก็บค่าธรรมเนียมก็ต่อเมื่อลูกค้าไม่มาตามนัดหรือยกเลิกกระชั้นชิด',
        },
        {
          q: 'ใช้ผู้ให้บริการชำระเงินรายไหน',
          a: 'Stripe ซึ่งรวมอยู่ใน Zenno Booking แล้ว ลูกค้าชำระเงินระหว่างการจองออนไลน์',
        },
        {
          q: 'การแจ้งเตือนช่วยด้วยไหม',
          a: 'ช่วย Zenno ส่งคำยืนยันและการแจ้งเตือนอัตโนมัติทาง SMS และอีเมล และลูกค้าเลื่อนนัดได้ในพอร์ทัลลูกค้า แทนที่จะไม่มาเฉยๆ',
        },
      ],
    },
    og: { line1: 'เก้าอี้ว่าง', line2: 'แต่ยังได้รับเงิน', sub: 'มัดจำและค่าธรรมเนียมเมื่อไม่มาตามนัดสำหรับสตูดิโอ' },
  },
}
