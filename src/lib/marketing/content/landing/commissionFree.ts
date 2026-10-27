import type { Lang } from '../../lang'
import type { LandingContent } from './types'
import { PLAN_LINE } from '../plans'

/**
 * Target searches (DE): Buchungssystem ohne Provision, Online-Terminbuchung ohne Provision,
 * Alternative zu Buchungsplattformen. Per the positioning brief no marketplace is named.
 * Claims: fixed plans from €0 (Free/Zenno/Custom); no commission on AI bookings; Stripe's own
 * payment fees apply to online payments.
 */
export const COMMISSION_FREE: Record<Lang, LandingContent> = {
  de: {
    meta: {
      title: 'Buchungssystem ohne Provision: Ihre Kundschaft, Ihre Seite | Zenno',
      description:
        'Online-Terminbuchung ohne Provision für Studios und Salons: feste Tarife ab 0 €, Buchung auf Ihrer eigenen Seite in Ihrem Namen und bereit dafür, dass KI-Assistenten Sie direkt buchen.',
    },
    label: 'Buchen ohne Provision',
    hero: {
      kicker: 'Die Alternative zu Buchungsplattformen',
      title: ['Ihre Kundschaft.', 'Ihre Seite. Keine Provision.'],
      lead: 'Marktplätze stellen ihre Marke zwischen Sie und Ihre Kundschaft und behalten einen Anteil an Ihren Buchungen. Mit Zenno bucht man Sie auf Ihrer eigenen Seite, in Ihrem Namen, zu einem festen Tarif ab 0 €.',
      ctaPrimary: 'Kostenlos starten',
      ctaSecondary: 'Der Vergleich',
    },
    embed: 'readiness',
    points: {
      kicker: 'Was sich ändert',
      title: ['Gebucht wird', 'auf Ihrer eigenen Seite.'],
      items: [
        {
          title: 'Fester Preis statt Provision',
          body: 'Free 0 €, Zenno 49 € im Monat, Custom nach Absprache. Auf Buchungen fällt keine Provision an. Für Online-Zahlungen gelten die Gebühren von Stripe.',
        },
        {
          title: 'Ihr Name und Ihr Logo',
          body: 'Gebucht wird auf Ihrer Seite mit Ihrem Logo. Kundschaft sieht kein Nachbarstudio als Empfehlung daneben.',
        },
        {
          title: 'Die Kundendaten gehören Ihnen',
          body: 'Kontakte und Buchungshistorie liegen in Ihrem eigenen Zenno-Konto, unter Ihrem Namen.',
        },
        {
          title: 'Bereit für KI-Assistenten',
          body: 'Ihre Seite steht in einem Format, das KI-Assistenten wie ChatGPT lesen. So ist sie bereit dafür, dass ein Assistent direkt bei Ihnen bucht.',
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
          a: `Keine. ${PLAN_LINE.de} Für Online-Zahlungen berechnet Stripe seine üblichen Zahlungsgebühren.`,
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
        {
          q: 'Kostet eine Buchung über einen KI-Assistenten extra?',
          a: 'Nein. Auch wenn jemand über ChatGPT, Google oder Perplexity zu Ihnen findet und auf Ihrer Seite bucht, fällt keine Provision an.',
        },
        {
          q: 'Wem gehören die Kundendaten?',
          a: 'Kontakte und Buchungshistorie liegen in Ihrem eigenen Zenno-Konto, unter Ihrem Namen. Wie Sie die Daten im Einklang mit dem Datenschutz nutzen, klären Sie bei Bedarf mit Ihrer Rechtsberatung.',
        },
        {
          q: 'Wie erfährt meine Kundschaft vom neuen Buchungslink?',
          a: 'Teilen Sie ihn dort, wo man Sie schon findet: im Instagram-Profil, im Google-Unternehmensprofil, auf Ihrer Website und in Ihren WhatsApp-Nachrichten. Bestätigungen und Erinnerungen per SMS und E-Mail kommen danach automatisch.',
        },
        {
          q: 'Kann ich ohne Marktplatz eine Anzahlung verlangen?',
          a: 'Ja. Auf Ihrer Zenno-Seite verlangen Sie eine Anzahlung oder Vorkasse, oder Kundschaft hinterlegt die Karte für eine Ausfallgebühr. Bezahlt wird über Stripe.',
        },
      ],
    },
    story: {
      kicker: 'Ihr Name über der Tür',
      title: ['Sie haben das Studio aufgebaut.', 'Die Buchung gehört auch Ihnen.'],
      paragraphs: [
        'Über der Tür steht Ihr Name, und Ihre Stammkundinnen kennen Sie seit Jahren. Trotzdem lief die Online-Buchung lange über fremde Seiten, mit fremdem Logo und einer Provision, die bei neuer Kundschaft fällig wurde.',
        'Auf einem Marktplatz stehen Sie in einer Liste neben anderen Studios aus der Nachbarschaft. Wer Sie dort gefunden hat, sieht beim nächsten Mal zuerst die Empfehlungen daneben. Die Kontakte liegen beim Marktplatz, und neue Buchungen kosten Sie einen Anteil vom Umsatz. Für ein kleines Studio mit knapper Marge macht das am Monatsende einen spürbaren Unterschied, und auf die Beziehung zur eigenen Kundschaft haben Sie weniger Einfluss, als Sie möchten.',
        'Mit Zenno bucht man Sie auf Ihrer eigenen Seite, mit Ihrem Logo, Ihren Leistungen und Ihren Preisen. Sie zahlen einen festen Tarif ab 0 €, auf Buchungen fällt keine Provision an. Kontakte und Buchungshistorie liegen in Ihrem Zenno-Konto. Und weil Ihre Seite in einem Format steht, das KI-Assistenten wie ChatGPT, Google und Perplexity lesen, ist sie bereit dafür, dass diese Assistenten Sie direkt buchen.',
      ],
      image: '/images/features/commission-owner.webp',
      imageAlt: 'Stolze Inhaberin steht in der Tür ihres kleinen Kosmetikstudios',
      note: { label: 'Provision', value: '0 € auf jede Buchung' },
    },
    scenes: {
      kicker: 'Gebucht bei Ihnen',
      title: ['Zwei Buchungen,', 'kein Umweg.'],
      items: [
        {
          title: 'Spät in der Bahn gebucht',
          body: 'Kurz vor Mitternacht, in der letzten Bahn nach Hause, fällt ihm ein, dass er einen Haarschnitt braucht. Er tippt auf den Link in Ihrem Instagram-Profil und landet direkt auf Ihrer Seite, ohne andere Salons daneben. Er sieht Ihre Preise und freien Zeiten, bucht für Freitag und bekommt die Bestätigung sofort. Kein Anteil geht an eine Plattform, und sein Kontakt steht ab jetzt in Ihrem Konto.',
          image: '/images/features/commission-tram.webp',
          imageAlt: 'Junger Mann bucht nachts in der Straßenbahn einen Termin auf seinem Handy',
          note: { label: 'Neue Buchung', value: 'Fr 17:30, Herrenschnitt' },
        },
        {
          title: 'Nach Feierabend',
          body: 'Das Licht ist aus, die Theke aufgeräumt. Auf dem Handy sieht die Inhaberin die Buchungen für morgen, alle über ihre eigene Seite. Es gibt keine Abrechnung mit Provisionsabzug und keine Gebühr pro Neukundin, sie zahlt ihren festen Tarif. Für Online-Zahlungen gelten die üblichen Gebühren von Stripe. Der Umsatz aus diesen Terminen bleibt bei ihr, und die Kontakte der Kundinnen, die gebucht haben, auch.',
          image: '/images/verticals/salon-story.webp',
          imageAlt: 'Salonbesitzerin schaut nach Ladenschluss im leeren Salon auf ihr Handy',
          note: { label: 'Morgen', value: '7 Buchungen, 0 € Provision' },
        },
      ],
    },
    og: { line1: 'Ihre Kundschaft.', line2: 'Ihre Seite. Keine Provision.', sub: 'Buchungssystem ohne Provision' },
  },
  en: {
    meta: {
      title: 'Commission-free booking: your clients, your page | Zenno',
      description:
        'Commission-free online booking for studios and salons: fixed plans from €0, bookings on your own page in your name, and ready for AI assistants to book you directly.',
    },
    label: 'Commission-free booking',
    hero: {
      kicker: 'The alternative to booking marketplaces',
      title: ['Your clients.', 'Your page. No commission.'],
      lead: 'Marketplaces put their brand between you and your clients and keep a share of your bookings. With Zenno, people book you on your own page, in your name, on a fixed plan starting at €0.',
      ctaPrimary: 'Start free',
      ctaSecondary: 'The comparison',
    },
    embed: 'readiness',
    points: {
      kicker: 'What changes',
      title: ['Bookings happen', 'on your own page.'],
      items: [
        {
          title: 'A flat price, not a cut',
          body: 'Free €0, Zenno €49 a month, Custom priced for you. No commission on bookings. Stripe’s own fees apply to online payments.',
        },
        {
          title: 'Your name and your logo',
          body: 'Bookings happen on your page with your logo. Clients don’t see a competing studio suggested next to you.',
        },
        {
          title: 'The client data is yours',
          body: 'Contacts and booking history live in your own Zenno account, under your name.',
        },
        {
          title: 'Ready for AI assistants',
          body: 'Your page is published in a format AI assistants like ChatGPT read. That makes it ready for an assistant to book you directly.',
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
          a: `None. ${PLAN_LINE.en} For online payments, Stripe charges its usual payment fees.`,
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
        {
          q: 'Does a booking through an AI assistant cost extra?',
          a: 'No. Even when someone finds you through ChatGPT, Google or Perplexity and books on your page, there is no commission.',
        },
        {
          q: 'Who owns the client data?',
          a: 'Contacts and booking history sit in your own Zenno account, under your name. How to use that data in line with data-protection rules is worth checking with your legal advisor.',
        },
        {
          q: 'How do my clients find the new booking link?',
          a: 'Share it where people already find you: your Instagram profile, your Google Business Profile, your website and your WhatsApp messages. Confirmations and reminders by SMS and email go out automatically after that.',
        },
        {
          q: 'Can I take deposits without a marketplace?',
          a: 'Yes. On your Zenno page you ask for a deposit or prepayment, or clients save a card for a no-show fee. Payments run through Stripe.',
        },
      ],
    },
    story: {
      kicker: 'Your name above the door',
      title: ['You built the studio.', 'The bookings are yours too.'],
      paragraphs: [
        'Your name is above the door, and your regulars have known you for years. Still, online booking ran through someone else’s site for a long time, with someone else’s logo and a commission due on new clients.',
        'On a marketplace you sit in a list next to other studios in the neighbourhood. Someone who found you there sees the recommendations beside you first the next time they look. The contacts stay with the marketplace, and new bookings cost you a share of the revenue. For a small studio on tight margins, that shows at the end of the month, and you have less say over the relationship with your own clients than you would like.',
        'With Zenno, people book you on your own page, with your logo, your services and your prices. You pay a fixed plan, starting at €0, with no commission on bookings. Contacts and booking history stay in your Zenno account. And because your page is published in a format that AI assistants like ChatGPT, Google and Perplexity read, it is ready for those assistants to book you directly.',
      ],
      image: '/images/features/commission-owner.webp',
      imageAlt: 'A proud owner standing in the doorway of her small beauty studio',
      note: { label: 'Commission', value: '€0 on every booking' },
    },
    scenes: {
      kicker: 'Booked with you',
      title: ['Two bookings,', 'no detour.'],
      items: [
        {
          title: 'Booked on the last tram',
          body: 'Just before midnight, on the last tram home, he remembers he needs a haircut. He taps the link in your Instagram profile and lands straight on your page, with no other salons next to you. He sees your prices and free times, books for Friday and gets the confirmation straight away. No share goes to a platform, and from now on his contact is in your account.',
          image: '/images/features/commission-tram.webp',
          imageAlt: 'A young man on a night tram booking an appointment on his phone',
          note: { label: 'New booking', value: 'Fri 5:30 pm, men’s cut' },
        },
        {
          title: 'After closing',
          body: 'The lights are off and the counter is tidy. On her phone the owner checks tomorrow’s bookings, all of them made on her own page. There is no statement with commission taken off and no fee per new client, only her fixed plan. Online payments carry Stripe’s usual fees. The revenue from these appointments stays with her, and so do the contacts of the clients who booked.',
          image: '/images/verticals/salon-story.webp',
          imageAlt: 'A salon owner checking her phone in her empty salon after closing',
          note: { label: 'Tomorrow', value: '7 bookings, €0 commission' },
        },
      ],
    },
    og: { line1: 'Your clients.', line2: 'Your page. No commission.', sub: 'Commission-free booking for studios' },
  },
  th: {
    meta: {
      title: 'ระบบจองคิวไม่มีค่าคอมมิชชั่น: ลูกค้าของคุณ หน้าของคุณ | Zenno',
      description:
        'ระบบจองคิวออนไลน์ไม่มีค่าคอมมิชชั่นสำหรับสตูดิโอและซาลอน: แพ็กเกจราคาคงที่เริ่มต้น €0 การจองบนหน้าของคุณเองในชื่อของคุณ และพร้อมให้ผู้ช่วย AI จองกับคุณได้โดยตรง',
    },
    label: 'จองโดยไม่มีค่าคอมมิชชั่น',
    hero: {
      kicker: 'ทางเลือกแทนแพลตฟอร์มตัวกลางสำหรับการจอง',
      title: ['ลูกค้าของคุณ', 'หน้าของคุณ ไม่มีค่าคอมมิชชั่น'],
      lead: 'แพลตฟอร์มตัวกลางวางแบรนด์ของตัวเองไว้ระหว่างคุณกับลูกค้า และหักส่วนแบ่งจากการจองของคุณ กับ Zenno ลูกค้าจองกับคุณบนหน้าของคุณเอง ในชื่อของคุณ ด้วยแพ็กเกจราคาคงที่ เริ่มต้น €0',
      ctaPrimary: 'เริ่มใช้ฟรี',
      ctaSecondary: 'ดูการเปรียบเทียบ',
    },
    embed: 'readiness',
    points: {
      kicker: 'อะไรที่เปลี่ยนไป',
      title: ['ลูกค้าจอง', 'บนหน้าของคุณเอง'],
      items: [
        {
          title: 'ราคาคงที่ ไม่ใช่การหักส่วนแบ่ง',
          body: 'Free €0, Zenno €49 ต่อเดือน, Custom ราคาตามธุรกิจของคุณ ไม่มีค่าคอมมิชชั่นสำหรับการจอง สำหรับการชำระเงินออนไลน์ มีค่าธรรมเนียมของ Stripe เอง',
        },
        {
          title: 'ชื่อและโลโก้ของคุณ',
          body: 'การจองเกิดขึ้นบนหน้าของคุณพร้อมโลโก้ของคุณ ลูกค้าจะไม่เห็นสตูดิโอคู่แข่งถูกแนะนำอยู่ข้างๆ คุณ',
        },
        {
          title: 'ข้อมูลลูกค้าเป็นของคุณ',
          body: 'รายชื่อติดต่อและประวัติการจองอยู่ในบัญชี Zenno ของคุณเอง ในชื่อของคุณ',
        },
        {
          title: 'พร้อมสำหรับผู้ช่วย AI',
          body: 'หน้าของคุณเผยแพร่ในรูปแบบที่ผู้ช่วย AI อย่าง ChatGPT อ่านได้ จึงพร้อมให้ผู้ช่วย AI จองกับคุณได้โดยตรง',
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
          a: `ไม่มี ${PLAN_LINE.th} สำหรับการชำระเงินออนไลน์ Stripe เรียกเก็บค่าธรรมเนียมตามปกติ`,
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
        {
          q: 'การจองผ่านผู้ช่วย AI มีค่าใช้จ่ายเพิ่มไหม',
          a: 'ไม่มี แม้ลูกค้าจะเจอร้านคุณผ่าน ChatGPT, Google หรือ Perplexity แล้วจองบนหน้าของคุณ ก็ไม่มีค่าคอมมิชชั่น',
        },
        {
          q: 'ข้อมูลลูกค้าเป็นของใคร',
          a: 'รายชื่อติดต่อและประวัติการจองอยู่ในบัญชี Zenno ของคุณเอง ภายใต้ชื่อของคุณ ส่วนการใช้ข้อมูลให้ถูกต้องตามกฎคุ้มครองข้อมูลส่วนบุคคล ควรตรวจสอบกับที่ปรึกษากฎหมายของคุณ',
        },
        {
          q: 'ลูกค้าจะรู้จักลิงก์จองใหม่ได้อย่างไร',
          a: 'แชร์ลิงก์ในที่ที่ลูกค้าเจอคุณอยู่แล้ว เช่น โปรไฟล์ Instagram, Google Business Profile, เว็บไซต์ และข้อความ WhatsApp หลังจากนั้นคำยืนยันและการแจ้งเตือนทาง SMS และอีเมลจะส่งอัตโนมัติ',
        },
        {
          q: 'ไม่อยู่บนแพลตฟอร์มตัวกลาง ยังเก็บมัดจำได้ไหม',
          a: 'ได้ บนหน้า Zenno ของคุณ คุณเก็บมัดจำหรือให้ชำระเต็มจำนวนล่วงหน้า หรือให้ลูกค้าบันทึกบัตรไว้สำหรับค่าธรรมเนียมเมื่อไม่มาตามนัด ชำระเงินผ่าน Stripe',
        },
      ],
    },
    story: {
      kicker: 'ชื่อของคุณบนป้ายหน้าร้าน',
      title: ['คุณสร้างร้านนี้ขึ้นมาเอง', 'การจองก็ควรเป็นของคุณ'],
      paragraphs: [
        'ป้ายหน้าร้านเป็นชื่อของคุณ ลูกค้าประจำรู้จักคุณมาหลายปี แต่การจองออนไลน์กลับต้องผ่านเว็บของคนอื่นมานาน มีโลโก้ของคนอื่น และมีค่าคอมมิชชั่นทุกครั้งที่ได้ลูกค้าใหม่',
        'บนแพลตฟอร์มตัวกลาง ร้านของคุณอยู่ในรายชื่อเดียวกับร้านอื่นๆ ในละแวกเดียวกัน ลูกค้าที่เจอคุณที่นั่น ครั้งหน้าก็จะเห็นร้านที่แพลตฟอร์มแนะนำอยู่ข้างๆ ก่อน รายชื่อติดต่อลูกค้าอยู่กับแพลตฟอร์ม และการจองใหม่ก็ต้องแบ่งรายได้ส่วนหนึ่งให้เขา สำหรับร้านเล็กที่กำไรไม่มาก ตัวเลขนี้เห็นชัดตอนสิ้นเดือน และคุณก็ดูแลความสัมพันธ์กับลูกค้าของตัวเองได้น้อยกว่าที่ต้องการ',
        'กับ Zenno ลูกค้าจองบนหน้าของคุณเอง มีโลโก้ บริการ และราคาของคุณ คุณจ่ายค่าแพ็กเกจราคาคงที่ เริ่มต้น €0 ไม่มีค่าคอมมิชชั่นจากการจอง รายชื่อติดต่อและประวัติการจองอยู่ในบัญชี Zenno ของคุณ และเพราะหน้าของคุณเผยแพร่ในรูปแบบที่ผู้ช่วย AI อย่าง ChatGPT, Google และ Perplexity อ่านได้ หน้าของคุณจึงพร้อมให้ผู้ช่วย AI จองกับคุณได้โดยตรง',
      ],
      image: '/images/features/commission-owner.webp',
      imageAlt: 'เจ้าของร้านยืนอย่างภูมิใจที่ประตูร้านเสริมสวยเล็กๆ ของเธอ',
      note: { label: 'ค่าคอมมิชชั่น', value: '€0 ทุกการจอง' },
    },
    scenes: {
      kicker: 'จองกับคุณโดยตรง',
      title: ['สองการจอง', 'ไม่ต้องอ้อมผ่านใคร'],
      items: [
        {
          title: 'จองบนรถรางเที่ยวสุดท้าย',
          body: 'เกือบเที่ยงคืน บนรถรางเที่ยวสุดท้ายกลับบ้าน เขานึกขึ้นได้ว่าต้องตัดผม เขากดลิงก์ในโปรไฟล์ Instagram ของคุณ แล้วเข้ามาที่หน้าของคุณโดยตรง ไม่มีร้านอื่นอยู่ข้างๆ เขาเห็นราคาและเวลาว่าง จองวันศุกร์ และได้รับคำยืนยันทันที ไม่มีส่วนแบ่งให้แพลตฟอร์ม และรายชื่อติดต่อของเขาก็อยู่ในบัญชีของคุณตั้งแต่นี้',
          image: '/images/features/commission-tram.webp',
          imageAlt: 'ชายหนุ่มบนรถรางตอนกลางคืน กำลังจองนัดผ่านมือถือ',
          note: { label: 'การจองใหม่', value: 'ศุกร์ 17:30 ตัดผมชาย' },
        },
        {
          title: 'หลังปิดร้าน',
          body: 'ไฟปิดแล้ว เคาน์เตอร์เก็บเรียบร้อย เจ้าของร้านเปิดมือถือดูการจองของพรุ่งนี้ ทั้งหมดจองผ่านหน้าของเธอเอง ไม่มีใบสรุปที่หักค่าคอมมิชชั่นและไม่มีค่าธรรมเนียมต่อลูกค้าใหม่ มีแค่ค่าแพ็กเกจราคาคงที่ของเธอ การชำระเงินออนไลน์มีค่าธรรมเนียมปกติของ Stripe รายได้จากนัดเหล่านี้เป็นของเธอ รายชื่อติดต่อของลูกค้าที่จองก็เช่นกัน',
          image: '/images/verticals/salon-story.webp',
          imageAlt: 'เจ้าของร้านทำผมดูมือถือในร้านที่ว่างเปล่าหลังปิดร้าน',
          note: { label: 'พรุ่งนี้', value: '7 การจอง ค่าคอมมิชชั่น €0' },
        },
      ],
    },
    og: { line1: 'ลูกค้าของคุณ', line2: 'หน้าของคุณ ไม่มีค่าคอมมิชชั่น', sub: 'ระบบจองคิวไม่มีค่าคอมมิชชั่นสำหรับสตูดิโอ' },
  },
}
