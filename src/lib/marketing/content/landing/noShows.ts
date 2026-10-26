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
        {
          q: 'Wird die Karte schon bei der Buchung belastet?',
          a: 'Bei der hinterlegten Karte nicht. Sie wird über Stripe gespeichert, und belastet wird erst, wenn Sie bei No-Show oder zu später Absage die Ausfallgebühr berechnen.',
        },
        {
          q: 'Wie hoch sollte die Ausfallgebühr sein?',
          a: 'Das legen Sie selbst fest. Wichtig ist, dass Kundschaft den Betrag vor der Buchung kennt und versteht. Ob Ihre Regelung rechtlich passt, klären Sie mit Ihrer Rechtsberatung.',
        },
        {
          q: 'Schreckt eine Anzahlung neue Kundschaft ab?',
          a: 'Das hängt von Ihrem Studio ab. Wer bucht, sieht die Regel vorher auf Ihrer Seite und weiß, woran er ist. Wenn Sie unsicher sind, beginnen Sie mit der hinterlegten Karte: Dann wird zunächst nichts belastet.',
        },
        {
          q: 'Was passiert, wenn jemand rechtzeitig verschiebt?',
          a: 'Kundschaft wählt im Kundenportal selbst einen neuen Termin. Der alte Platz ist damit wieder frei und kann online neu gebucht werden.',
        },
      ],
    },
    story: {
      kicker: 'Dienstag, 10:10 Uhr',
      title: ['Der Raum ist vorbereitet.', 'Die Kundin kommt nicht.'],
      paragraphs: [
        'Die Liege ist frisch bezogen, das Öl angewärmt, die nächste Stunde gehört einer einzigen Kundin. Um zehn nach zehn ist klar, dass sie nicht kommt. Kein Anruf, keine Nachricht, nur ein leerer Raum und eine Stunde Arbeitszeit.',
        'So sieht der Alltag in vielen kleinen Studios aus. Eine Massage über 60 Minuten lässt sich kurzfristig kaum neu vergeben, und wer am Sonntagabend online gebucht hat, denkt am Dienstagmorgen oft schon an etwas anderes. Hinterhertelefonieren kostet Zeit, und eine Rechnung im Nachhinein zu schicken fühlt sich unangenehm an. Also bleibt der Ausfall bei Ihnen hängen, Woche für Woche, und außer Ihrer Kasse merkt es niemand.',
        'Mit Zenno legen Sie vorher fest, wie verbindlich eine Buchung ist. Die Kundin zahlt beim Buchen eine Anzahlung oder den vollen Preis, oder sie hinterlegt ihre Karte über Stripe. Erscheint sie nicht oder sagt zu spät ab, berechnen Sie die Ausfallgebühr von dieser Karte. Vorher bekommt sie Erinnerungen per SMS und E-Mail und kann im Kundenportal selbst verschieben. Wer verhindert ist, hat damit einen einfachen Weg, Bescheid zu geben.',
      ],
      image: '/images/features/noshow-empty.webp',
      imageAlt: 'Vorbereitete Massageliege in einem abgedunkelten Behandlungsraum, die Therapeutin wartet in der Tür',
      note: { label: 'Ausfallgebühr', value: '35 € von der hinterlegten Karte' },
    },
    scenes: {
      kicker: 'Zwei Momente',
      title: ['Wo ein Termin verbindlich wird,', 'und wo es darauf ankommt.'],
      items: [
        {
          title: 'Abends auf dem Sofa gebucht',
          body: 'Viele buchen dann, wenn das Studio längst geschlossen ist: abends auf dem Handy, zwischen Abendessen und Serie. Genau in diesem Moment wird die Anzahlung fällig oder die Karte hinterlegt, direkt auf Ihrer Buchungsseite über Stripe. Niemand muss am nächsten Morgen hinterhertelefonieren, und die Kundin weiß von Anfang an, woran sie ist. Die Bestätigung bekommt sie sofort per E-Mail oder SMS.',
          image: '/images/features/noshow-sofa.webp',
          imageAlt: 'Frau bucht abends auf dem Sofa eine Behandlung auf ihrem Smartphone',
          note: { label: 'Anzahlung', value: '20 € bei der Buchung bezahlt' },
        },
        {
          title: 'Drei Stunden für eine Farbe',
          body: 'Eine Coloration mit Strähnen blockiert den halben Nachmittag, und die Farbe ist oft schon angemischt, wenn die Kundin eigentlich da sein sollte. Fällt so ein Termin aus, lässt sich die Lücke kaum füllen. Gerade bei langen Terminen lohnt sich Vorkasse: Der volle Preis ist bei der Buchung bezahlt, und an der Kasse ist nichts mehr zu tun. Wer rechtzeitig im Kundenportal verschiebt, macht den Platz für andere frei.',
          image: '/images/verticals/salon-colour.webp',
          imageAlt: 'Coloristin trägt Farbe auf Strähnen in Folie auf, ein langer Termin im Salon',
          note: { label: 'Vorkasse', value: 'Voller Preis bei der Buchung' },
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
        {
          q: 'Is the card charged when the client books?',
          a: 'Not with a card on file. It is saved through Stripe, and it is only charged when you charge the fee for a no-show or late cancellation.',
        },
        {
          q: 'How high should the no-show fee be?',
          a: 'You decide. What matters is that clients see and understand the amount before they book. Whether your terms hold up legally is a question for your legal advisor.',
        },
        {
          q: 'Will a deposit put new clients off?',
          a: 'That depends on your studio. Clients see the rule on your page before they book, so nobody is surprised. If you are unsure, start with a card on file: nothing is charged up front.',
        },
        {
          q: 'What happens when someone reschedules in time?',
          a: 'Clients pick a new time themselves in the client portal. The old slot opens up again and can be booked online by someone else.',
        },
      ],
    },
    story: {
      kicker: 'Tuesday, 10:10 am',
      title: ['The room is ready.', 'The client isn’t coming.'],
      paragraphs: [
        'The table is freshly made, the oil is warm, and the next hour belongs to one client. By ten past ten it is clear she is not coming. No call, no message, just an empty room and an hour of paid work time.',
        'This is an ordinary week in a lot of small studios. A 60-minute massage is hard to fill at short notice, and someone who booked on Sunday evening is often thinking about something else by Tuesday morning. Chasing them by phone takes time, and sending a bill afterwards feels awkward. So the loss stays with you, week after week, and nobody notices except your till.',
        'With Zenno you decide in advance how firm a booking is. The client pays a deposit or the full price when she books, or saves her card through Stripe. If she doesn’t show or cancels too late, you charge the no-show fee to that card. Before the appointment she gets reminders by SMS and email and can reschedule herself in the client portal. If something comes up, she has an easy way to let you know.',
      ],
      image: '/images/features/noshow-empty.webp',
      imageAlt: 'A prepared massage table in a dimly lit treatment room, the therapist waiting in the doorway',
      note: { label: 'No-show fee', value: '€35 from the card on file' },
    },
    scenes: {
      kicker: 'Two moments',
      title: ['Where a booking becomes firm,', 'and where it counts.'],
      items: [
        {
          title: 'Booked on the sofa, after dinner',
          body: 'A lot of people book when your studio is long closed: in the evening, on their phone, somewhere between dinner and the next episode. That is exactly when the deposit is paid or the card is saved, right on your booking page through Stripe. Nobody has to call the next morning to confirm, and the client knows the terms from the start. Her confirmation arrives straight away by email or SMS.',
          image: '/images/features/noshow-sofa.webp',
          imageAlt: 'A woman on her sofa in the evening booking a treatment on her phone',
          note: { label: 'Deposit', value: '€20 paid at booking' },
        },
        {
          title: 'Three hours for one colour',
          body: 'A full colour with highlights takes up half an afternoon, and the mix is often ready before the client is due. If that appointment falls through, the gap is almost impossible to fill. Long appointments are where prepayment makes the most sense: the full price is paid at booking, and there is nothing left to do at the till. Anyone who reschedules in time through the client portal frees the slot for someone else.',
          image: '/images/verticals/salon-colour.webp',
          imageAlt: 'A colourist painting colour onto foils during a long salon appointment',
          note: { label: 'Prepayment', value: 'Full price at booking' },
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
        {
          q: 'บัตรจะถูกตัดเงินตั้งแต่ตอนจองเลยไหม',
          a: 'ถ้าเป็นแบบบันทึกบัตรไว้ จะยังไม่ตัดเงิน บัตรถูกบันทึกผ่าน Stripe และจะถูกเรียกเก็บก็ต่อเมื่อคุณเรียกเก็บค่าธรรมเนียมตอนลูกค้าไม่มาหรือยกเลิกกระชั้นชิด',
        },
        {
          q: 'ค่าธรรมเนียมเมื่อไม่มาตามนัดควรตั้งเท่าไร',
          a: 'คุณกำหนดเองได้ สิ่งสำคัญคือลูกค้าต้องเห็นและเข้าใจยอดเงินก่อนจอง ส่วนเงื่อนไขของคุณถูกต้องตามกฎหมายหรือไม่ โปรดตรวจสอบกับที่ปรึกษากฎหมายของคุณ',
        },
        {
          q: 'การเก็บมัดจำจะทำให้ลูกค้าใหม่ไม่กล้าจองไหม',
          a: 'ขึ้นอยู่กับร้านของคุณ ลูกค้าเห็นเงื่อนไขบนหน้าจองก่อนจองเสมอ จึงไม่มีใครถูกเซอร์ไพรส์ ถ้ายังไม่แน่ใจ เริ่มจากแบบบันทึกบัตรไว้ก่อนก็ได้ เพราะยังไม่มีการตัดเงินในตอนแรก',
        },
        {
          q: 'ถ้าลูกค้าเลื่อนนัดล่วงหน้าทันเวลา จะเป็นอย่างไร',
          a: 'ลูกค้าเลือกเวลาใหม่เองในพอร์ทัลลูกค้า ช่องเวลาเดิมจะว่างอีกครั้ง และคนอื่นจองออนไลน์ได้ทันที',
        },
      ],
    },
    story: {
      kicker: 'วันอังคาร 10:10 น.',
      title: ['ห้องเตรียมไว้พร้อมแล้ว', 'แต่ลูกค้าไม่มา'],
      paragraphs: [
        'ผ้าปูเตียงนวดเพิ่งเปลี่ยนใหม่ น้ำมันอุ่นไว้แล้ว ชั่วโมงถัดไปเป็นของลูกค้าคนเดียว พอสิบโมงสิบนาทีก็รู้แล้วว่าเธอไม่มา ไม่มีโทรมา ไม่มีข้อความ เหลือแค่ห้องว่างกับเวลางานหนึ่งชั่วโมงที่เสียไป',
        'นี่คือสัปดาห์ปกติของร้านเล็กๆ หลายร้าน นวด 60 นาทีหาคนมาแทนในเวลากระชั้นชิดได้ยาก และลูกค้าที่จองไว้ตั้งแต่คืนวันอาทิตย์ พอถึงเช้าวันอังคารก็อาจลืมไปแล้ว จะโทรตามก็เสียเวลา จะส่งบิลไปทีหลังก็รู้สึกไม่สบายใจ สุดท้ายความเสียหายก็ตกอยู่ที่คุณ สัปดาห์แล้วสัปดาห์เล่า โดยไม่มีใครเห็นนอกจากยอดในลิ้นชักเก็บเงิน',
        'กับ Zenno คุณกำหนดไว้ล่วงหน้าว่าการจองควรผูกมัดแค่ไหน ลูกค้าจ่ายมัดจำหรือราคาเต็มตอนจอง หรือบันทึกบัตรไว้ผ่าน Stripe ถ้าเธอไม่มาหรือยกเลิกกระชั้นชิด คุณเรียกเก็บค่าธรรมเนียมจากบัตรนั้นได้ ก่อนถึงวันนัด เธอได้รับการแจ้งเตือนทาง SMS และอีเมล และเลื่อนนัดเองได้ในพอร์ทัลลูกค้า ถ้ามีธุระกะทันหัน เธอก็มีทางแจ้งร้านได้ง่ายๆ',
      ],
      image: '/images/features/noshow-empty.webp',
      imageAlt: 'เตียงนวดที่จัดเตรียมไว้ในห้องทรีตเมนต์ที่แสงสลัว นักบำบัดยืนรออยู่ที่ประตู',
      note: { label: 'ค่าธรรมเนียมไม่มาตามนัด', value: '€35 จากบัตรที่บันทึกไว้' },
    },
    scenes: {
      kicker: 'สองช่วงเวลา',
      title: ['ช่วงที่การจองเริ่มผูกมัด', 'และช่วงที่มันสำคัญจริงๆ'],
      items: [
        {
          title: 'จองบนโซฟาหลังมื้อเย็น',
          body: 'ลูกค้าจำนวนมากจองตอนที่ร้านปิดไปนานแล้ว ตอนค่ำ บนมือถือ ระหว่างกินข้าวเสร็จกับดูซีรีส์ตอนต่อไป ตอนนั้นเองที่ลูกค้าจ่ายมัดจำหรือบันทึกบัตร บนหน้าจองของคุณผ่าน Stripe ไม่ต้องมีใครโทรยืนยันในเช้าวันรุ่งขึ้น และลูกค้ารู้เงื่อนไขตั้งแต่แรก คำยืนยันส่งถึงเธอทันทีทางอีเมลหรือ SMS',
          image: '/images/features/noshow-sofa.webp',
          imageAlt: 'ผู้หญิงนั่งบนโซฟาตอนค่ำ กำลังจองทรีตเมนต์ผ่านมือถือ',
          note: { label: 'มัดจำ', value: 'จ่าย €20 ตอนจอง' },
        },
        {
          title: 'สามชั่วโมงสำหรับการทำสีหนึ่งครั้ง',
          body: 'การทำสีผมพร้อมไฮไลต์ใช้เวลาครึ่งบ่าย และบ่อยครั้งสีก็ผสมไว้แล้วก่อนลูกค้าจะมาถึง ถ้านัดแบบนี้หลุดไป ช่องว่างนั้นแทบหาคนมาแทนไม่ได้ นัดที่ใช้เวลานานแบบนี้เหมาะกับการชำระเต็มจำนวนล่วงหน้าที่สุด ลูกค้าจ่ายราคาเต็มตอนจอง และไม่ต้องทำอะไรที่เคาน์เตอร์อีก ใครที่เลื่อนนัดทันเวลาในพอร์ทัลลูกค้า ก็เปิดช่องเวลาให้คนอื่นได้จอง',
          image: '/images/verticals/salon-colour.webp',
          imageAlt: 'ช่างทำสีกำลังทาสีลงบนผมที่ห่อฟอยล์ ระหว่างนัดที่ใช้เวลานานในร้านทำผม',
          note: { label: 'ชำระล่วงหน้า', value: 'ราคาเต็มตอนจอง' },
        },
      ],
    },
    og: { line1: 'เก้าอี้ว่าง', line2: 'แต่ยังได้รับเงิน', sub: 'มัดจำและค่าธรรมเนียมเมื่อไม่มาตามนัดสำหรับสตูดิโอ' },
  },
}
