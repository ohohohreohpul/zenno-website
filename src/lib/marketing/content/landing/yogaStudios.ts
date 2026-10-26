import type { Lang } from '../../lang'
import type { LandingContent } from './types'
import { PLAN_LINE } from '../plans'

/**
 * Target searches (DE): Buchungssoftware Yogastudio, Online-Buchung Fitnessstudio, Terminbuchung Personal Training.
 * Copy sticks to appointment booking (sessions, trial sessions, privates): group-class
 * capacity / class packs are not confirmed features, so they are not claimed here.
 */
export const YOGA_STUDIOS: Record<Lang, LandingContent> = {
  de: {
    meta: {
      title: 'Buchungssoftware für Yoga- und Fitnessstudios | Zenno',
      description:
        'Online-Buchung für Yoga-, Pilates- und Fitnessstudios: Probestunden und Einzelstunden, die KI-Assistenten direkt buchen können, No-Show-Gebühren, Gutscheine und DATEV-Export. Kostenlos starten.',
    },
    label: 'Yoga- & Fitnessstudios',
    hero: {
      kicker: 'Für Yoga-, Pilates- und Fitnessstudios',
      title: ['Freie Matten,', 'gebucht statt verpasst.'],
      lead: 'Probestunde, Einzelstunde oder Personal Training: Kundschaft und KI-Assistenten buchen direkt auf Ihrer Seite. Wer nicht erscheint, zahlt die Gebühr statt Sie.',
      ctaPrimary: 'Kostenlos starten',
      ctaSecondary: 'Was die KI braucht',
      image: '/images/verticals/yoga-hero.webp',
      imageAlt: 'Morgenklasse in einem hellen Yogastudio, die Lehrerin korrigiert eine Haltung',
      chat: {
        studio: 'KI-Assistent',
        channel: 'Beispielgespräch',
        accent: 'var(--ink)',
        turns: [
          { from: 'me', text: 'Gibt es in Altona eine Yoga-Probestunde am Donnerstagabend?' },
          { from: 'bot', text: 'Lotus Yoga hat Do. 18:30 eine Probestunde mit Mali, 60 Min., 15 €. Direkt dort buchen?' },
          { from: 'me', text: 'Gern' },
          { from: 'bot', text: 'Gebucht, direkt bei Lotus Yoga. Die Bestätigung kommt per E-Mail.', booked: true },
        ],
        bookedLabel: 'Im Kalender von Lotus Yoga · ohne Provision',
      },
    },
    story: {
      kicker: 'Ein Abend im Studio',
      title: ['18:10 Uhr, die Matten liegen bereit.', 'Und das Telefon klingelt schon wieder.'],
      paragraphs: [
        'Die meisten Yogastudios werden von den Menschen geführt, die auch unterrichten. Zwischen zwei Stunden bleibt kaum Zeit für Nachrichten, Rückrufe und Zahlungen.',
        'Genau dann fragen Interessierte nach einer Probestunde, Stammkundschaft will den Termin verschieben, und jemand schreibt auf Englisch, ob es am Samstag noch eine Einzelstunde gibt. Wer erst nach der Klasse antwortet, hat die Anfrage oft schon an ein anderes Studio verloren.',
        'Mit Zenno bucht Ihre Kundschaft selbst: Probestunde, Einzelstunde oder Personal Training, mit echten freien Zeiten, Ihren Preisen und Ihren Lehrerinnen und Lehrern. Ihre Seite ist so aufgebaut, dass auch KI-Assistenten Sie finden und direkt buchen können. Sie unterrichten, der Kalender füllt sich.',
      ],
      image: '/images/verticals/yoga-story.webp',
      imageAlt: 'Studioinhaberin sitzt vor der Abendklasse auf einer Holzbank und schaut aufs Handy',
      note: { label: 'Neue Buchung', value: 'Probestunde · Do. 18:30' },
    },
    scenes: {
      kicker: 'Vom ersten Besuch zur Stammkundschaft',
      title: ['Drei Momente,', 'die Zenno für Sie übernimmt.'],
      items: [
        {
          title: 'Die erste Probestunde',
          body: 'Neue Kundschaft entscheidet abends auf dem Sofa. Ihre Buchungsseite zeigt Angebot, Dauer, Preis und freie Zeiten auf einen Blick, gebucht wird ohne Konto. Mit Vorkasse oder hinterlegter Karte ist der Platz auch dann bezahlt, wenn jemand doch nicht kommt.',
          image: '/images/verticals/yoga-trial.webp',
          imageAlt: 'Eine neue Schülerin mit Matte wird an der Studiotür begrüßt',
          note: { label: 'Vorkasse', value: '15 € bezahlt · Stripe' },
        },
        {
          title: 'Einzelstunden und Personal Training',
          body: 'Reformer-Pilates, Privatstunde oder Training mit Ihrer Coachin: Jede Leistung bekommt eigene Dauer, eigenen Preis und eigene Lehrkraft. Die Kundschaft sieht nur Zeiten, die wirklich frei sind, und verschiebt selbst im Kundenportal statt per Nachricht.',
          image: '/images/verticals/yoga-private.webp',
          imageAlt: 'Pilates-Privatstunde am Reformer mit Trainerin',
          note: { label: 'Kundenportal', value: 'Verschoben auf Fr. 9:00' },
        },
        {
          title: 'Die Stammkundschaft, die bleibt',
          body: 'Erinnerungen per SMS und E-Mail gehen von selbst raus. Treuepunkte belohnen regelmäßige Besuche, und Gutscheine verkaufen Sie online, etwa für Geburtstage oder zu Weihnachten. Umsatzsteuer und DATEV-Export laufen im Hintergrund mit.',
          image: '/images/verticals/yoga-savasana.webp',
          imageAlt: 'Abendklasse in der Endentspannung bei Kerzenlicht',
          note: { label: 'Treuepunkte', value: '10. Besuch · Bonus' },
        },
      ],
    },
    niches: {
      kicker: 'Für wen',
      title: ['Für Studios,', 'die nach Termin arbeiten.'],
      lead: 'Überall, wo Kundschaft eine Stunde mit Dauer, Preis und Lehrkraft bucht.',
      items: ['Yogastudios', 'Pilates & Reformer', 'Barre', 'Personal Training', 'Meditation & Atemarbeit', 'Yin & Restorative', 'Faszien- & Mobility-Training', 'Prä- & Postnatal-Yoga'],
    },
    points: {
      kicker: 'Warum Studios wechseln',
      title: ['Gebaut für Studios,', 'die von Stammkundschaft leben.'],
      items: [
        {
          title: 'Probestunden, die die KI bucht',
          body: 'Wer ChatGPT oder Google nach Yoga in der Nähe fragt, findet Ihre Angebote mit Preis und freien Zeiten und kann direkt bei Ihnen buchen.',
        },
        {
          title: 'No-Shows kosten nicht Sie',
          body: 'Verlangen Sie Vorkasse oder hinterlegen Sie die Karte und berechnen Sie eine Gebühr, wenn jemand nicht kommt oder zu spät absagt.',
        },
        {
          title: 'Gutscheine & Treuepunkte',
          body: 'Gutscheine online verkaufen, Stammkundschaft mit Punkten belohnen. Ohne Plugin, ohne zweites System.',
        },
        {
          title: 'Erinnerungen, die von selbst rausgehen',
          body: 'Bestätigung und Erinnerung per SMS und E-Mail. Verschieben und neu buchen geht im Kundenportal.',
        },
        {
          title: 'Ihr Studio, Ihr Name',
          body: 'Gebucht wird auf Ihrer eigenen Seite mit Ihrem Logo. Keine Plattform, die Ihre Kundschaft an das nächste Studio weiterreicht.',
        },
        {
          title: 'Steuer und DATEV inklusive',
          body: 'Umsatzsteuer je Leistung, Kleinunternehmerregelung, Übersicht pro Monat oder Quartal und Export für die Steuerberatung.',
        },
      ],
    },
    embed: 'readiness',
    steps: {
      kicker: 'In drei Schritten',
      title: ['Angebot anlegen.', 'Link teilen. Fertig.'],
      items: [
        { title: 'Angebote anlegen', body: 'Probestunde, Einzelstunde, Personal Training mit Dauer, Preis und Lehrer:in.' },
        { title: 'Regeln festlegen', body: 'Vorkasse oder hinterlegte Karte mit No-Show-Gebühr. KI-Buchungen automatisch annehmen oder bestätigen.' },
        { title: 'Buchbar machen', body: 'Link in Instagram, Google und auf der Website. Ein Schalter macht die Seite für KI-Assistenten buchbar.' },
      ],
    },
    faq: {
      kicker: 'Fragen aus dem Studio',
      title: ['Kurz beantwortet,', 'für Studioinhaber:innen.'],
      items: [
        {
          q: 'Kann ich Einzelstunden, Probestunden und Personal Training getrennt anbieten?',
          a: 'Ja. Jede Leistung bekommt eigene Dauer, eigenen Preis und eine oder mehrere Lehrkräfte. Ihre Kundschaft wählt auf der Buchungsseite und sieht nur Zeiten, die wirklich frei sind.',
        },
        {
          q: 'Meine Kundschaft spricht oft Englisch. Gibt es die Buchungsseite auch auf Englisch?',
          a: 'Ja. Die Buchungsseite gibt es auf Deutsch und Englisch. Die KI-Rezeption antwortet auf WhatsApp, per E-Mail und im Website-Chat auf Deutsch, Englisch oder Thai, je nachdem, wie geschrieben wird.',
        },
        {
          q: 'Kann Kundschaft selbst umbuchen oder absagen?',
          a: 'Ja, im Kundenportal. Jede Buchung bekommt eine Bestätigung mit Link. Wer zu spät absagt oder nicht erscheint, zahlt die Gebühr, die Sie festgelegt haben, wenn eine Karte hinterlegt ist.',
        },
        {
          q: 'Bin ich als kleines Studio Kleinunternehmer. Kann Zenno das?',
          a: 'Ja. Sie stellen die Kleinunternehmerregelung ein oder hinterlegen die Umsatzsteuer je Leistung. Die Monats- oder Quartalsübersicht und der DATEV-Export gehen an Ihre Steuerberatung. Was für Sie gilt, klären Sie bitte mit ihr.',
        },
        {
          q: 'Kann die KI Probestunden für mein Studio buchen?',
          a: 'Ihre Zenno-Seite ist so gebaut, dass KI-Assistenten Sie direkt buchen können: Angebote, Preise und freie Zeiten stehen in dem Format, das Google, ChatGPT und Perplexity lesen, und die Seite nimmt Buchungen ohne Anruf an.',
        },
        {
          q: 'Wie verhindere ich leere Plätze durch No-Shows?',
          a: 'Mit Vorkasse oder Anzahlung bei der Buchung oder mit hinterlegter Karte und einer Gebühr bei Nichterscheinen oder zu später Absage. Bezahlt wird über Stripe.',
        },
        {
          q: 'Kann ich Gutscheine verkaufen?',
          a: 'Ja. Gutscheine verkaufen Sie online, und Stammkundschaft sammelt Treuepunkte.',
        },
        {
          q: 'Was kostet Zenno für ein Studio?',
          a: `${PLAN_LINE.de} Auf Buchungen fällt keine Provision an.`,
        },
      ],
    },
    og: { line1: 'Freie Matten,', line2: 'gebucht statt verpasst.', sub: 'Buchungssoftware für Yoga- & Fitnessstudios' },
  },
  en: {
    meta: {
      title: 'Booking software for yoga and fitness studios | Zenno',
      description:
        'Online booking for yoga, Pilates and fitness studios: trial and private sessions that AI assistants can book directly, no-show fees, gift cards and DATEV export. Start free.',
    },
    label: 'Yoga & fitness studios',
    hero: {
      kicker: 'For yoga, Pilates and fitness studios',
      title: ['Empty mats,', 'booked instead of missed.'],
      lead: 'Trial session, private or personal training: clients and AI assistants book directly on your page. If someone doesn’t show, they pay the fee instead of you.',
      ctaPrimary: 'Start free',
      ctaSecondary: 'See what AI needs',
      image: '/images/verticals/yoga-hero.webp',
      imageAlt: 'Morning class in a bright yoga studio, the teacher adjusting a student’s pose',
      chat: {
        studio: 'AI assistant',
        channel: 'Example conversation',
        accent: 'var(--ink)',
        turns: [
          { from: 'me', text: 'Is there a yoga trial session in Altona on Thursday evening?' },
          { from: 'bot', text: 'Lotus Yoga has a trial session Thu 18:30 with Mali, 60 min, €15. Book it on their page?' },
          { from: 'me', text: 'Sure' },
          { from: 'bot', text: 'Booked directly with Lotus Yoga. The confirmation is on its way by email.', booked: true },
        ],
        bookedLabel: "In Lotus Yoga's calendar · no commission",
      },
    },
    story: {
      kicker: 'An evening at the studio',
      title: ['6:10 pm, the mats are out.', 'And the phone is ringing again.'],
      paragraphs: [
        'Most yoga studios are run by the people who also teach. Between two classes there is barely time for messages, call-backs and payments.',
        'That is exactly when someone asks about a trial session, a regular wants to move their slot, and a message arrives in English asking about a private on Saturday. Answer only after class and the request has often gone to another studio.',
        'With Zenno your clients book themselves: trial session, private or personal training, with real free times, your prices and your teachers. Your page is built so AI assistants can find you and book you directly too. You teach, the calendar fills.',
      ],
      image: '/images/verticals/yoga-story.webp',
      imageAlt: 'Studio owner sitting on a wooden bench before the evening class, checking her phone',
      note: { label: 'New booking', value: 'Trial session · Thu 18:30' },
    },
    scenes: {
      kicker: 'From first visit to regular',
      title: ['Three moments', 'Zenno takes off your hands.'],
      items: [
        {
          title: 'The first trial session',
          body: 'New clients decide in the evening, on the sofa. Your booking page shows the offer, duration, price and free times at a glance, and nobody needs an account. With prepayment or a card on file, the spot is paid for even if someone doesn’t turn up.',
          image: '/images/verticals/yoga-trial.webp',
          imageAlt: 'A new student with a mat being welcomed at the studio door',
          note: { label: 'Prepaid', value: '€15 paid · Stripe' },
        },
        {
          title: 'Privates and personal training',
          body: 'Reformer Pilates, a private class or a session with your coach: each service gets its own duration, price and teacher. Clients only see times that are really free, and they reschedule in the client portal instead of messaging you.',
          image: '/images/verticals/yoga-private.webp',
          imageAlt: 'Private Pilates reformer session with an instructor',
          note: { label: 'Client portal', value: 'Moved to Fri 9:00' },
        },
        {
          title: 'The regulars who stay',
          body: 'Reminders by SMS and email go out on their own. Loyalty points reward regular visits, and you sell gift cards online for birthdays or the holidays. VAT and the DATEV export run in the background.',
          image: '/images/verticals/yoga-savasana.webp',
          imageAlt: 'Evening class resting in savasana by candlelight',
          note: { label: 'Loyalty points', value: '10th visit · bonus' },
        },
      ],
    },
    niches: {
      kicker: 'Who it’s for',
      title: ['For studios', 'that work by appointment.'],
      lead: 'Wherever clients book a session with a duration, a price and a teacher.',
      items: ['Yoga studios', 'Pilates & reformer', 'Barre', 'Personal training', 'Meditation & breathwork', 'Yin & restorative', 'Mobility training', 'Pre- & postnatal yoga'],
    },
    points: {
      kicker: 'Why studios switch',
      title: ['Built for studios', 'that live on regulars.'],
      items: [
        {
          title: 'Trial sessions AI can book',
          body: 'When someone asks ChatGPT or Google for yoga nearby, they find your offers with price and free times and can book you directly.',
        },
        {
          title: 'No-shows don’t cost you',
          body: 'Ask for prepayment, or keep the card on file and charge a fee when someone doesn’t come or cancels too late.',
        },
        {
          title: 'Gift cards & loyalty points',
          body: 'Sell gift cards online and reward regulars with points. No plugin, no second system.',
        },
        {
          title: 'Reminders that send themselves',
          body: 'Confirmation and reminder by SMS and email. Rescheduling and rebooking happen in the client portal.',
        },
        {
          title: 'Your studio, your name',
          body: 'Bookings happen on your own page with your logo. No platform passing your clients on to the next studio.',
        },
        {
          title: 'Tax and DATEV included',
          body: 'VAT per service, the Kleinunternehmer rule, a monthly or quarterly overview and an export for your tax advisor.',
        },
      ],
    },
    embed: 'readiness',
    steps: {
      kicker: 'Three steps',
      title: ['Add your offers.', 'Share the link. Done.'],
      items: [
        { title: 'Add your offers', body: 'Trial session, private, personal training, each with duration, price and teacher.' },
        { title: 'Set your rules', body: 'Prepayment or card on file with a no-show fee. AI bookings accepted automatically or approved by you.' },
        { title: 'Make it bookable', body: 'Link on Instagram, Google and your website. One switch makes the page bookable by AI assistants.' },
      ],
    },
    faq: {
      kicker: 'Studio questions',
      title: ['Answered briefly,', 'for studio owners.'],
      items: [
        {
          q: 'Can I offer privates, trial sessions and personal training separately?',
          a: 'Yes. Each service gets its own duration, price and one or more teachers. Clients choose on your booking page and only see times that are really free.',
        },
        {
          q: 'Many of my clients speak English. Is the booking page available in English?',
          a: 'Yes. The booking page is available in German and English. The AI receptionist answers on WhatsApp, by email and in your website chat in German, English or Thai, depending on how the client writes.',
        },
        {
          q: 'Can clients reschedule or cancel themselves?',
          a: 'Yes, in the client portal. Every booking comes with a confirmation and a link. If someone cancels too late or doesn’t show, they pay the fee you set, as long as a card is on file.',
        },
        {
          q: 'I’m a small studio under the Kleinunternehmer rule. Does Zenno handle that?',
          a: 'Yes. You switch on the Kleinunternehmer rule or set VAT per service. The monthly or quarterly overview and the DATEV export go to your tax advisor. Please check with them what applies to you.',
        },
        {
          q: 'Can AI book trial sessions at my studio?',
          a: 'Your Zenno page is built so AI assistants can book you directly: offers, prices and free times are published in the format Google, ChatGPT and Perplexity read, and the page accepts bookings without a phone call.',
        },
        {
          q: 'How do I stop no-shows leaving empty spots?',
          a: 'With prepayment or a deposit at booking, or with the card on file and a fee for a no-show or late cancellation. Payments run through Stripe.',
        },
        {
          q: 'Can I sell gift cards?',
          a: 'Yes. You sell gift cards online and regulars collect loyalty points.',
        },
        {
          q: 'What does Zenno cost for a studio?',
          a: `${PLAN_LINE.en} There is no commission on bookings.`,
        },
      ],
    },
    og: { line1: 'Empty mats,', line2: 'booked instead of missed.', sub: 'Booking software for yoga & fitness studios' },
  },
  th: {
    meta: {
      title: 'ระบบจองคิวออนไลน์สำหรับสตูดิโอโยคะและฟิตเนส | Zenno',
      description:
        'การจองออนไลน์สำหรับสตูดิโอโยคะ พิลาทิส และฟิตเนส: คลาสทดลองและคลาสส่วนตัวที่ผู้ช่วย AI จองให้ได้โดยตรง ค่าธรรมเนียมเมื่อลูกค้าไม่มาตามนัด บัตรของขวัญ และการส่งออกข้อมูลไปยัง DATEV เริ่มใช้ฟรี',
    },
    label: 'สตูดิโอโยคะและฟิตเนส',
    hero: {
      kicker: 'สำหรับสตูดิโอโยคะ พิลาทิส และฟิตเนส',
      title: ['เสื่อที่ว่างอยู่', 'มีคนจองแทนที่จะเสียเปล่า'],
      lead: 'คลาสทดลอง คลาสส่วนตัว หรือเทรนนิ่งส่วนตัว ลูกค้าและผู้ช่วย AI จองได้โดยตรงบนหน้าของคุณ ถ้าลูกค้าไม่มา ลูกค้าเป็นคนจ่ายค่าธรรมเนียม ไม่ใช่คุณ',
      ctaPrimary: 'เริ่มใช้ฟรี',
      ctaSecondary: 'ดูว่า AI ต้องการอะไร',
      image: '/images/verticals/yoga-hero.webp',
      imageAlt: 'คลาสโยคะยามเช้าในสตูดิโอที่สว่าง ครูกำลังจัดท่าให้ผู้เรียน',
      chat: {
        studio: 'ผู้ช่วย AI',
        channel: 'ตัวอย่างบทสนทนา',
        accent: 'var(--ink)',
        turns: [
          { from: 'me', text: 'มีคลาสทดลองโยคะแถวอัลโทนา เย็นวันพฤหัสไหม' },
          { from: 'bot', text: 'Lotus Yoga มีคลาสทดลองวันพฤหัส 18:30 กับ Mali 60 นาที €15 จองผ่านหน้าของสตูดิโอเลยไหมคะ' },
          { from: 'me', text: 'ได้เลย' },
          { from: 'bot', text: 'จองกับ Lotus Yoga โดยตรงแล้วค่ะ คำยืนยันกำลังส่งไปทางอีเมล', booked: true },
        ],
        bookedLabel: 'อยู่ในปฏิทินของ Lotus Yoga · ไม่มีค่าคอมมิชชั่น',
      },
    },
    story: {
      kicker: 'ค่ำวันหนึ่งที่สตูดิโอ',
      title: ['18:10 น. ปูเสื่อเสร็จแล้ว', 'แต่โทรศัพท์ดังอีกแล้ว'],
      paragraphs: [
        'สตูดิโอโยคะส่วนใหญ่ดูแลโดยคนที่สอนเอง ระหว่างคลาสแทบไม่มีเวลาตอบข้อความ โทรกลับ หรือเก็บเงิน',
        'แต่ช่วงนั้นเองที่มีคนถามเรื่องคลาสทดลอง ลูกค้าประจำขอเลื่อนนัด และมีข้อความภาษาอังกฤษถามว่าวันเสาร์ยังมีคลาสส่วนตัวว่างไหม ถ้ารอตอบหลังเลิกคลาส ลูกค้ามักจองสตูดิโออื่นไปแล้ว',
        'กับ Zenno ลูกค้าจองเองได้ ทั้งคลาสทดลอง คลาสส่วนตัว และเทรนนิ่งส่วนตัว พร้อมเวลาว่างจริง ราคาของคุณ และครูของคุณ หน้าของคุณยังถูกสร้างมาให้ผู้ช่วย AI หาเจอและจองกับคุณได้โดยตรง คุณสอนไป ปฏิทินก็เต็มไป',
      ],
      image: '/images/verticals/yoga-story.webp',
      imageAlt: 'เจ้าของสตูดิโอนั่งบนม้านั่งไม้ก่อนคลาสเย็น กำลังดูโทรศัพท์',
      note: { label: 'การจองใหม่', value: 'คลาสทดลอง · พฤ. 18:30' },
    },
    scenes: {
      kicker: 'จากครั้งแรกสู่ลูกค้าประจำ',
      title: ['สามช่วงเวลา', 'ที่ Zenno ดูแลแทนคุณ'],
      items: [
        {
          title: 'คลาสทดลองครั้งแรก',
          body: 'ลูกค้าใหม่มักตัดสินใจตอนค่ำบนโซฟา หน้าจองของคุณแสดงคลาส ระยะเวลา ราคา และเวลาว่างในที่เดียว จองได้โดยไม่ต้องสมัครบัญชี ถ้าให้ชำระล่วงหน้าหรือบันทึกบัตรไว้ ที่นั่งก็ได้รับเงินแม้ลูกค้าไม่มา',
          image: '/images/verticals/yoga-trial.webp',
          imageAlt: 'นักเรียนใหม่ถือเสื่อโยคะได้รับการต้อนรับที่ประตูสตูดิโอ',
          note: { label: 'ชำระล่วงหน้า', value: 'จ่ายแล้ว €15 · Stripe' },
        },
        {
          title: 'คลาสส่วนตัวและเทรนนิ่งส่วนตัว',
          body: 'พิลาทิสรีฟอร์มเมอร์ คลาสส่วนตัว หรือเทรนนิ่งกับโค้ช แต่ละบริการมีระยะเวลา ราคา และครูของตัวเอง ลูกค้าเห็นเฉพาะเวลาที่ว่างจริง และเลื่อนนัดเองได้ในพอร์ทัลลูกค้าแทนการส่งข้อความหาคุณ',
          image: '/images/verticals/yoga-private.webp',
          imageAlt: 'คลาสพิลาทิสส่วนตัวบนเครื่องรีฟอร์มเมอร์กับครูฝึก',
          note: { label: 'พอร์ทัลลูกค้า', value: 'เลื่อนเป็น ศ. 9:00' },
        },
        {
          title: 'ลูกค้าประจำที่อยู่กับคุณ',
          body: 'การแจ้งเตือนทาง SMS และอีเมลส่งออกไปเอง แต้มสะสมให้รางวัลลูกค้าที่มาสม่ำเสมอ และคุณขายบัตรของขวัญออนไลน์ได้ เช่น สำหรับวันเกิดหรือเทศกาล ภาษีมูลค่าเพิ่มและการส่งออก DATEV ทำงานอยู่เบื้องหลัง',
          image: '/images/verticals/yoga-savasana.webp',
          imageAlt: 'คลาสเย็นในท่าศพาสนะท่ามกลางแสงเทียน',
          note: { label: 'แต้มสะสม', value: 'ครั้งที่ 10 · โบนัส' },
        },
      ],
    },
    niches: {
      kicker: 'เหมาะกับใคร',
      title: ['สำหรับสตูดิโอ', 'ที่ทำงานแบบนัดหมาย'],
      lead: 'ทุกที่ที่ลูกค้าจองคลาสพร้อมระยะเวลา ราคา และครูผู้สอน',
      items: ['สตูดิโอโยคะ', 'พิลาทิสและรีฟอร์มเมอร์', 'บาร์เร่', 'เทรนนิ่งส่วนตัว', 'สมาธิและการหายใจ', 'หยินโยคะ', 'โมบิลิตี้', 'โยคะก่อนและหลังคลอด'],
    },
    points: {
      kicker: 'ทำไมสตูดิโอถึงเปลี่ยนมาใช้',
      title: ['สร้างมาเพื่อสตูดิโอ', 'ที่อยู่ได้ด้วยลูกค้าประจำ'],
      items: [
        {
          title: 'คลาสทดลองที่ AI จองให้ได้',
          body: 'เมื่อมีคนถาม ChatGPT หรือ Google หาคลาสโยคะใกล้ๆ เขาจะเจอคลาสของคุณพร้อมราคาและเวลาว่าง และจองกับคุณได้โดยตรง',
        },
        {
          title: 'ลูกค้าไม่มาตามนัด คุณไม่เสียเงิน',
          body: 'ให้ชำระเต็มจำนวนล่วงหน้า หรือบันทึกบัตรไว้ แล้วเรียกเก็บค่าธรรมเนียมเมื่อลูกค้าไม่มาหรือยกเลิกกระชั้นชิด',
        },
        {
          title: 'บัตรของขวัญและระบบสะสมแต้ม',
          body: 'ขายบัตรของขวัญออนไลน์ และให้แต้มตอบแทนลูกค้าประจำ ไม่ต้องใช้ปลั๊กอิน ไม่ต้องมีระบบที่สอง',
        },
        {
          title: 'แจ้งเตือนที่ส่งออกไปเอง',
          body: 'คำยืนยันและการแจ้งเตือนทาง SMS และอีเมล การเลื่อนนัดและจองใหม่ทำได้ในพอร์ทัลลูกค้า',
        },
        {
          title: 'สตูดิโอของคุณ ในชื่อของคุณ',
          body: 'การจองเกิดขึ้นบนหน้าของคุณเองพร้อมโลโก้ของคุณ ไม่มีแพลตฟอร์มที่ส่งลูกค้าของคุณต่อไปให้สตูดิโออื่น',
        },
        {
          title: 'ภาษีและ DATEV รวมอยู่แล้ว',
          body: 'ภาษีมูลค่าเพิ่มตามแต่ละบริการ กฎผู้ประกอบการรายย่อย (§19 UStG) ภาพรวมรายเดือนหรือรายไตรมาส และการส่งออกข้อมูลสำหรับนักบัญชีของคุณ',
        },
      ],
    },
    embed: 'readiness',
    steps: {
      kicker: 'สามขั้นตอน',
      title: ['เพิ่มคลาสของคุณ', 'แชร์ลิงก์ เสร็จแล้ว'],
      items: [
        { title: 'เพิ่มคลาสของคุณ', body: 'คลาสทดลอง คลาสส่วนตัว เทรนนิ่งส่วนตัว แต่ละคลาสมีระยะเวลา ราคา และครูผู้สอน' },
        { title: 'กำหนดกฎของคุณ', body: 'ชำระเต็มจำนวนล่วงหน้า หรือบันทึกบัตรไว้พร้อมค่าธรรมเนียมเมื่อไม่มาตามนัด เลือกว่าจะรับการจองผ่าน AI อัตโนมัติหรือให้คุณอนุมัติเอง' },
        { title: 'เปิดให้จองได้', body: 'ใส่ลิงก์ไว้บน Instagram, Google และเว็บไซต์ของคุณ สวิตช์เดียวก็ทำให้ผู้ช่วย AI จองผ่านหน้าของคุณได้' },
      ],
    },
    faq: {
      kicker: 'คำถามจากสตูดิโอ',
      title: ['ตอบสั้นๆ', 'สำหรับเจ้าของสตูดิโอ'],
      items: [
        {
          q: 'แยกคลาสส่วนตัว คลาสทดลอง และเทรนนิ่งส่วนตัวได้ไหม',
          a: 'ได้ แต่ละบริการมีระยะเวลา ราคา และครูหนึ่งคนหรือหลายคน ลูกค้าเลือกบนหน้าจองของคุณ และเห็นเฉพาะเวลาที่ว่างจริง',
        },
        {
          q: 'ลูกค้าหลายคนพูดภาษาอังกฤษ หน้าจองมีภาษาอังกฤษไหม',
          a: 'มี หน้าจองมีทั้งภาษาเยอรมันและอังกฤษ พนักงานต้อนรับ AI ตอบทาง WhatsApp อีเมล และแชทบนเว็บไซต์เป็นภาษาเยอรมัน อังกฤษ หรือไทย ตามภาษาที่ลูกค้าเขียนมา',
        },
        {
          q: 'ลูกค้าเลื่อนหรือยกเลิกนัดเองได้ไหม',
          a: 'ได้ ในพอร์ทัลลูกค้า ทุกการจองมีคำยืนยันพร้อมลิงก์ ถ้ายกเลิกกระชั้นชิดหรือไม่มา ลูกค้าจ่ายค่าธรรมเนียมที่คุณกำหนดไว้ หากบันทึกบัตรไว้',
        },
        {
          q: 'สตูดิโอเล็กของฉันใช้กฎผู้ประกอบการรายย่อย Zenno รองรับไหม',
          a: 'รองรับ คุณเปิดใช้กฎผู้ประกอบการรายย่อย (§19 UStG) หรือกำหนดภาษีมูลค่าเพิ่มตามบริการ ภาพรวมรายเดือนหรือรายไตรมาสและไฟล์ DATEV ส่งต่อให้นักบัญชีของคุณได้ เรื่องที่ใช้กับคุณ โปรดตรวจสอบกับนักบัญชี',
        },
        {
          q: 'AI จองคลาสทดลองที่สตูดิโอของฉันได้ไหม',
          a: 'หน้า Zenno ของคุณถูกสร้างมาให้ผู้ช่วย AI จองกับคุณได้โดยตรง คลาส ราคา และเวลาว่างถูกเผยแพร่ในรูปแบบที่ Google, ChatGPT และ Perplexity อ่านได้ และหน้านี้รับการจองได้โดยไม่ต้องโทรศัพท์',
        },
        {
          q: 'จะป้องกันไม่ให้ลูกค้าไม่มาตามนัดจนเหลือที่ว่างได้อย่างไร',
          a: 'ด้วยการให้ชำระเต็มจำนวนล่วงหน้าหรือมัดจำตอนจอง หรือบันทึกบัตรไว้พร้อมค่าธรรมเนียมเมื่อไม่มาตามนัดหรือยกเลิกกระชั้นชิด การชำระเงินทำผ่าน Stripe',
        },
        {
          q: 'ขายบัตรของขวัญได้ไหม',
          a: 'ได้ คุณขายบัตรของขวัญออนไลน์ได้ และลูกค้าประจำสะสมแต้มได้',
        },
        {
          q: 'Zenno สำหรับสตูดิโอราคาเท่าไร',
          a: `${PLAN_LINE.th} ไม่มีค่าคอมมิชชั่นสำหรับการจอง`,
        },
      ],
    },
    og: { line1: 'เสื่อที่ว่างอยู่', line2: 'มีคนจองแทนที่จะเสียเปล่า', sub: 'ระบบจองคิวสำหรับสตูดิโอโยคะและฟิตเนส' },
  },
}
