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
      image: '/images/verticals/salon-hero.webp',
      imageAlt: 'Stylistin frisiert eine Kundin vor beleuchteten Spiegeln',
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
    story: {
      kicker: 'Nach Ladenschluss',
      title: ['19:40 Uhr, der Boden ist gefegt.', 'Die Nachrichten warten noch.'],
      paragraphs: [
        'Im Salon wird mit den Händen gearbeitet. Wer gerade Farbe aufträgt oder massiert, kann nicht ans Telefon gehen und keine Nachrichten beantworten.',
        'Also sammeln sich Anfragen bis zum Feierabend: Wann ist am Samstag frei, was kostet eine Balayage, kann ich den Termin am Donnerstag verschieben? Gleichzeitig fehlt am Monatsende Umsatz, weil zwei lange Termine nicht erschienen sind und der Stuhl leer blieb.',
        'Mit Zenno bucht Ihre Kundschaft rund um die Uhr selbst, mit Ihren Leistungen, Preisen und Ihrem Team. Lange Termine sichern Sie mit Anzahlung ab, Erinnerungen gehen von allein raus, und Ihre Seite ist so aufgebaut, dass auch KI-Assistenten Sie direkt buchen können. Den Abend müssen Sie dann nicht mehr mit Nachrichten verbringen.',
      ],
      image: '/images/verticals/salon-story.webp',
      imageAlt: 'Saloninhaberin am Empfang schaut auf ihr Handy',
      note: { label: 'Über Nacht gebucht', value: '3 Termine · 2 mit Anzahlung' },
    },
    scenes: {
      kicker: 'Ein Tag im Salon',
      title: ['Vom langen Farbtermin', 'bis zur Hot-Stone-Massage.'],
      items: [
        {
          title: 'Lange Termine, fest gebucht',
          body: 'Balayage, Extensions oder eine Typveränderung blockieren den Stuhl für Stunden. Für diese Leistungen verlangen Sie bei der Buchung eine Anzahlung oder den vollen Preis. Erscheint jemand nicht, ist Ihre Zeit trotzdem bezahlt. Bezahlt wird über Stripe.',
          image: '/images/verticals/salon-colour.webp',
          imageAlt: 'Haarfarbe wird in der Schale mit dem Pinsel angerührt',
          note: { label: 'Anzahlung', value: '40 € · Balayage Sa. 10:00' },
        },
        {
          title: 'Kurze Termine, volle Tage',
          body: 'Maniküre, Wimpern, Augenbrauen: Viele kurze Termine heißen viele Anfragen. Ihre Kundschaft bucht selbst, sieht nur echte freie Zeiten und bekommt Bestätigung und Erinnerung per SMS und E-Mail. Verschieben geht im Kundenportal, ohne Anruf.',
          image: '/images/verticals/salon-nails.webp',
          imageAlt: 'Maniküre am Holztisch am Fenster',
          note: { label: 'Erinnerung gesendet', value: 'Morgen 14:30 · Maniküre' },
        },
        {
          title: 'Spa-Behandlungen und Gutscheine',
          body: 'Massagen, Hot Stone und Gesichtsbehandlungen werden oft verschenkt. Gutscheine verkaufen Sie online, sie werden bei der Buchung eingelöst, und Stammkundschaft sammelt Treuepunkte. Die KI-Rezeption beantwortet Fragen auf WhatsApp, per E-Mail und im Website-Chat.',
          image: '/images/verticals/salon-spa.webp',
          imageAlt: 'Therapeutin bereitet die Massageliege mit Handtüchern und Kerzen vor',
          note: { label: 'Gutschein verkauft', value: '90 € · Hot Stone' },
        },
      ],
    },
    niches: {
      kicker: 'Für wen',
      title: ['Für jeden Stuhl,', 'jede Liege, jeden Tisch.'],
      lead: 'Überall, wo Termine mit Dauer, Preis und Fachkraft gebucht werden.',
      items: ['Friseursalons', 'Barbershops', 'Kosmetikstudios', 'Nagelstudios', 'Wimpern & Brauen', 'Massagestudios', 'Thai-Massage', 'Day Spas', 'Waxing & Sugaring'],
    },
    points: {
      kicker: 'Warum Salons wechseln',
      title: ['Gebaut für den Salonalltag,', 'mit Ihrer eigenen Buchungsseite.'],
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
          body: 'Gebucht wird auf Ihrer eigenen Seite, in Ihrem Namen. Zwischen Ihnen und Ihren Stammkundinnen steht kein Marktplatz, und auf KI-Buchungen fällt keine Provision an.',
        },
        {
          title: 'Gutscheine & Treueprogramm',
          body: 'Gutscheine online verkaufen und Stammkundschaft mit Punkten belohnen. Gutscheine passen zu Geburtstagen und Feiertagen, Punkte belohnen den zehnten Besuch.',
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
          q: 'Kann jede Mitarbeiterin ihren eigenen Kalender haben?',
          a: 'Ja. Jede Fachkraft hat ihre Leistungen und Arbeitszeiten, und die Kundschaft bucht gezielt bei ihr oder bei der ersten freien Person. Im Kassenkalender sehen Sie das ganze Team auf einen Blick.',
        },
        {
          q: 'Verliere ich meine Stammkundschaft an eine Plattform?',
          a: 'Nein. Gebucht wird auf Ihrer eigenen Seite, in Ihrem Namen. Es gibt keinen Marktplatz, der Ihrer Kundschaft andere Salons vorschlägt, und keine Provision pro Buchung.',
        },
        {
          q: 'Wie verkaufe ich Gutscheine?',
          a: 'Online über Ihre Buchungsseite oder im Salon. Gutscheine werden bei der Buchung eingelöst, und Stammkundschaft sammelt zusätzlich Treuepunkte.',
        },
        {
          q: 'Antwortet die KI-Rezeption auch auf WhatsApp?',
          a: 'Ja, mit Ihrer eigenen Nummer, außerdem per E-Mail und im Chat auf Ihrer Website. Sie kennt Ihre Preise und freien Zeiten aus der App, bucht nur echte freie Termine und übergibt Beschwerden an Sie.',
        },
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
      image: '/images/verticals/salon-hero.webp',
      imageAlt: 'A stylist styling a client’s hair in front of lit mirrors',
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
    story: {
      kicker: 'After closing',
      title: ['7:40 pm, the floor is swept.', 'The messages are still waiting.'],
      paragraphs: [
        'Salon work is hands-on. While you are applying colour or giving a massage, you can’t pick up the phone or answer messages.',
        'So requests pile up until closing: when is Saturday free, how much is a balayage, can I move Thursday’s appointment? And at the end of the month revenue is missing, because two long appointments didn’t show and the chair stayed empty.',
        'With Zenno your clients book around the clock, with your services, prices and team. You secure long appointments with a deposit, reminders go out on their own, and your page is built so AI assistants can book you directly too. You no longer spend your evening answering messages.',
      ],
      image: '/images/verticals/salon-story.webp',
      imageAlt: 'Salon owner at the front desk, checking her phone',
      note: { label: 'Booked overnight', value: '3 appointments · 2 with deposit' },
    },
    scenes: {
      kicker: 'A day in the salon',
      title: ['From the long colour appointment', 'to the hot-stone massage.'],
      items: [
        {
          title: 'Long appointments, firmly booked',
          body: 'Balayage, extensions or a full makeover block the chair for hours. For these services you ask for a deposit or the full price at booking. If someone doesn’t show, your time is paid for anyway. Payments run through Stripe.',
          image: '/images/verticals/salon-colour.webp',
          imageAlt: 'Hair colour being mixed in a bowl with a brush',
          note: { label: 'Deposit', value: '€40 · Balayage Sat 10:00' },
        },
        {
          title: 'Short appointments, full days',
          body: 'Manicures, lashes, brows: lots of short appointments mean lots of requests. Clients book themselves, see only real free times, and get a confirmation and a reminder by SMS and email. Rescheduling happens in the client portal, without a call.',
          image: '/images/verticals/salon-nails.webp',
          imageAlt: 'A manicure at a wooden table by the window',
          note: { label: 'Reminder sent', value: 'Tomorrow 14:30 · Manicure' },
        },
        {
          title: 'Spa treatments and gift cards',
          body: 'Massages, hot stone and facials are often given as gifts. You sell gift cards online, they are redeemed at booking, and regulars collect loyalty points. The AI receptionist answers questions on WhatsApp, by email and in your website chat.',
          image: '/images/verticals/salon-spa.webp',
          imageAlt: 'A therapist preparing the massage table with towels and candles',
          note: { label: 'Gift card sold', value: '€90 · Hot stone' },
        },
      ],
    },
    niches: {
      kicker: 'Who it’s for',
      title: ['For every chair,', 'every table, every bed.'],
      lead: 'Wherever appointments are booked with a duration, a price and a specialist.',
      items: ['Hair salons', 'Barbershops', 'Beauty studios', 'Nail studios', 'Lashes & brows', 'Massage studios', 'Thai massage', 'Day spas', 'Waxing & sugaring'],
    },
    points: {
      kicker: 'Why salons switch',
      title: ['Built for a salon day,', 'on your own booking page.'],
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
          body: 'Bookings happen on your own page, in your name. There is no marketplace between you and your regulars, and no commission on AI bookings.',
        },
        {
          title: 'Gift cards & loyalty',
          body: 'Sell gift cards online and reward regulars with points. Gift cards suit birthdays and holidays, and points reward the tenth visit.',
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
          q: 'Can each team member have their own calendar?',
          a: 'Yes. Each specialist has their services and working hours, and clients book them directly or take the first free person. In the POS calendar you see the whole team at a glance.',
        },
        {
          q: 'Will I lose my regulars to a platform?',
          a: 'No. Bookings happen on your own page, in your name. There is no marketplace suggesting other salons to your clients, and no commission per booking.',
        },
        {
          q: 'How do I sell gift cards?',
          a: 'Online through your booking page or in the salon. Gift cards are redeemed at booking, and regulars also collect loyalty points.',
        },
        {
          q: 'Does the AI receptionist answer on WhatsApp?',
          a: 'Yes, on your own number, plus by email and in your website chat. It knows your prices and free times from the app, only books real free slots and hands complaints to you.',
        },
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
      image: '/images/verticals/salon-hero.webp',
      imageAlt: 'ช่างทำผมกำลังจัดทรงผมให้ลูกค้าหน้ากระจกที่มีไฟส่อง',
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
    story: {
      kicker: 'หลังปิดร้าน',
      title: ['19:40 น. กวาดพื้นเสร็จแล้ว', 'แต่ข้อความยังรออยู่'],
      paragraphs: [
        'งานในร้านต้องใช้มือ ระหว่างทำสีผมหรือนวด คุณรับโทรศัพท์หรือตอบข้อความไม่ได้',
        'คำถามจึงกองรอจนปิดร้าน วันเสาร์ว่างกี่โมง บาลายาจราคาเท่าไร ขอเลื่อนนัดวันพฤหัสได้ไหม และพอสิ้นเดือนรายได้ก็หายไป เพราะนัดยาวสองนัดไม่มา เก้าอี้ว่างเปล่า',
        'กับ Zenno ลูกค้าจองเองได้ตลอดเวลา พร้อมบริการ ราคา และทีมของคุณ นัดยาวป้องกันด้วยเงินมัดจำ การแจ้งเตือนส่งออกไปเอง และหน้าของคุณถูกสร้างมาให้ผู้ช่วย AI จองกับคุณได้โดยตรง คุณไม่ต้องใช้ช่วงค่ำไปกับการตอบข้อความอีก',
      ],
      image: '/images/verticals/salon-story.webp',
      imageAlt: 'เจ้าของร้านทำผมที่เคาน์เตอร์ต้อนรับ กำลังดูโทรศัพท์',
      note: { label: 'จองข้ามคืน', value: '3 นัด · 2 นัดมีมัดจำ' },
    },
    scenes: {
      kicker: 'หนึ่งวันในร้าน',
      title: ['ตั้งแต่นัดทำสีผมนานๆ', 'จนถึงนวดหินร้อน'],
      items: [
        {
          title: 'นัดยาว จองแน่นอน',
          body: 'บาลายาจ ต่อผม หรือเปลี่ยนลุคใหม่ ใช้เก้าอี้หลายชั่วโมง สำหรับบริการเหล่านี้ คุณเก็บมัดจำหรือราคาเต็มตอนจองได้ ถ้าลูกค้าไม่มา เวลาของคุณก็ยังได้รับเงิน ชำระผ่าน Stripe',
          image: '/images/verticals/salon-colour.webp',
          imageAlt: 'ผสมสีผมในถ้วยด้วยแปรง',
          note: { label: 'มัดจำ', value: '€40 · บาลายาจ ส. 10:00' },
        },
        {
          title: 'นัดสั้น วันเต็ม',
          body: 'ทำเล็บ ต่อขนตา แต่งคิ้ว นัดสั้นจำนวนมากแปลว่าคำถามจำนวนมาก ลูกค้าจองเอง เห็นเฉพาะเวลาว่างจริง และได้รับคำยืนยันและการแจ้งเตือนทาง SMS และอีเมล เลื่อนนัดได้ในพอร์ทัลลูกค้าโดยไม่ต้องโทร',
          image: '/images/verticals/salon-nails.webp',
          imageAlt: 'ทำเล็บที่โต๊ะไม้ริมหน้าต่าง',
          note: { label: 'ส่งการแจ้งเตือนแล้ว', value: 'พรุ่งนี้ 14:30 · ทำเล็บ' },
        },
        {
          title: 'ทรีตเมนต์สปาและบัตรของขวัญ',
          body: 'นวด หินร้อน และทรีตเมนต์หน้า มักถูกซื้อเป็นของขวัญ คุณขายบัตรของขวัญออนไลน์ ลูกค้าใช้ตอนจอง และลูกค้าประจำสะสมแต้มได้ พนักงานต้อนรับ AI ตอบคำถามทาง WhatsApp อีเมล และแชทบนเว็บไซต์',
          image: '/images/verticals/salon-spa.webp',
          imageAlt: 'นักบำบัดกำลังเตรียมเตียงนวดพร้อมผ้าขนหนูและเทียน',
          note: { label: 'ขายบัตรของขวัญแล้ว', value: '€90 · นวดหินร้อน' },
        },
      ],
    },
    niches: {
      kicker: 'เหมาะกับใคร',
      title: ['สำหรับทุกเก้าอี้', 'ทุกเตียง ทุกโต๊ะ'],
      lead: 'ทุกที่ที่จองนัดพร้อมระยะเวลา ราคา และช่างผู้ให้บริการ',
      items: ['ร้านทำผม', 'บาร์เบอร์', 'ร้านเสริมสวย', 'ร้านทำเล็บ', 'ขนตาและคิ้ว', 'ร้านนวด', 'นวดแผนไทย', 'เดย์สปา', 'แว็กซ์และชูการิ่ง'],
    },
    points: {
      kicker: 'ทำไมซาลอนถึงเปลี่ยนมาใช้',
      title: ['สร้างมาเพื่องานในซาลอน', 'บนหน้าจองของคุณเอง'],
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
          body: 'ขายบัตรของขวัญออนไลน์ และให้แต้มตอบแทนลูกค้าประจำ บัตรของขวัญเหมาะกับวันเกิดและเทศกาล ส่วนแต้มให้รางวัลการมาครั้งที่สิบ',
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
          q: 'พนักงานแต่ละคนมีปฏิทินของตัวเองได้ไหม',
          a: 'ได้ ช่างแต่ละคนมีบริการและเวลาทำงานของตัวเอง ลูกค้าเลือกจองกับช่างที่ต้องการหรือคนแรกที่ว่าง ในปฏิทินหน้าร้านคุณเห็นทั้งทีมในหน้าเดียว',
        },
        {
          q: 'ลูกค้าประจำจะถูกแพลตฟอร์มแย่งไปไหม',
          a: 'ไม่ การจองเกิดบนหน้าของคุณเองในชื่อของคุณ ไม่มีมาร์เก็ตเพลสที่แนะนำร้านอื่นให้ลูกค้าของคุณ และไม่มีค่าคอมมิชชั่นต่อการจอง',
        },
        {
          q: 'ขายบัตรของขวัญอย่างไร',
          a: 'ขายออนไลน์ผ่านหน้าจองหรือที่ร้าน ลูกค้าใช้บัตรตอนจอง และลูกค้าประจำยังสะสมแต้มได้อีกด้วย',
        },
        {
          q: 'พนักงานต้อนรับ AI ตอบทาง WhatsApp ได้ไหม',
          a: 'ได้ ด้วยเบอร์ของคุณเอง และยังตอบทางอีเมลและแชทบนเว็บไซต์ รู้ราคาและเวลาว่างจากแอป จองเฉพาะเวลาที่ว่างจริง และส่งเรื่องร้องเรียนต่อให้คุณ',
        },
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
