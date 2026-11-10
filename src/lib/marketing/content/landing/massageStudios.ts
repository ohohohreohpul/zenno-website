import type { Lang } from '../../lang'
import type { LandingContent } from './types'
import { PLAN_LINE } from '../plans'

/**
 * Target searches (DE): Buchungssoftware Massagestudio, Online-Terminbuchung Massagepraxis,
 * Terminbuchung Thai-Massage. Private-pay massage only: no health-insurance billing is claimed,
 * and no competitor names.
 */
export const MASSAGE_STUDIOS: Record<Lang, LandingContent> = {
  de: {
    meta: {
      title: 'Buchungssoftware für Massagestudios & Massagepraxen | Zenno',
      description:
        'Online-Terminbuchung für Massagestudios, Thai-Massage und Wellnesspraxen: Kalender je Therapeutin, Anzahlung gegen No-Shows, 10er-Karten und Gutscheine, KI-Rezeption auf WhatsApp. Kostenlos starten, ohne Provision.',
    },
    label: 'Massagestudios & -praxen',
    hero: {
      kicker: 'Für Massagestudios, Thai-Massage und Wellnesspraxen',
      title: ['Hände auf dem Rücken,', 'Termine im Kalender.'],
      lead: 'Während Sie massieren, bucht Ihre Kundschaft online selbst: echte freie Zeiten je Therapeutin, Anzahlung für lange Behandlungen, Erinnerungen per SMS und E-Mail. Fragen auf WhatsApp beantwortet die KI-Rezeption.',
      ctaPrimary: 'Kostenlos starten',
      ctaSecondary: 'Was die KI braucht',
      image: '/images/massage-call.webp',
      imageAlt: 'Masseurin massiert den Rücken einer Kundin auf der Massageliege',
      chat: {
        studio: 'Sabai Massage',
        channel: 'WhatsApp',
        accent: 'var(--ink)',
        turns: [
          { from: 'me', text: 'Habt ihr morgen Abend 90 Minuten Thai-Massage frei?' },
          { from: 'bot', text: 'Morgen um 18:30 bei Nok, 90 Min. Thai-Massage für 79 €. Soll ich das buchen?' },
          { from: 'me', text: 'Ja, gern' },
          { from: 'bot', text: 'Gebucht. Sie bekommen eine Bestätigung mit Stornolink.', booked: true },
        ],
        bookedLabel: 'Im Kalender von Nok · ohne Provision',
      },
    },
    story: {
      kicker: 'Nach der letzten Behandlung',
      title: ['21:10 Uhr, die Kerzen sind aus.', 'Das Handy zeigt 14 Nachrichten.'],
      paragraphs: [
        'Eine Massage lässt sich nicht unterbrechen. Wer 60 oder 90 Minuten am Rücken einer Kundin arbeitet, hat ölige Hände und kein Ohr für das Telefon. Anrufe landen auf der Mailbox, WhatsApp-Nachrichten warten bis zum Feierabend.',
        'Dann kommen die üblichen Fragen: Ist am Samstag noch etwas frei, was kostet Hot Stone, kann ich meinen Termin auf nächste Woche schieben? Wer zu spät antwortet, verliert die Buchung. Und wenn ein Gast ohne Absage nicht erscheint, bleibt die Liege eine Stunde leer.',
        'Mit Zenno bucht Ihre Kundschaft rund um die Uhr selbst, bei der Therapeutin, die sie möchte. Lange Behandlungen sichern Sie mit Anzahlung ab, Erinnerungen gehen von allein raus, und auf WhatsApp antwortet die KI-Rezeption mit Ihren Preisen und freien Zeiten.',
      ],
      image: '/images/spa-dusk.webp',
      imageAlt: 'Massageliege mit Kerzen, Handtüchern und heißen Steinen im abendlichen Studio',
      note: { label: 'Über Nacht gebucht', value: '4 Termine · 1 Gutschein' },
    },
    scenes: {
      kicker: 'Ein Tag im Massagestudio',
      title: ['Vom ersten Rücken am Morgen', 'bis zur Anfrage um Mitternacht.'],
      items: [
        {
          title: 'Lange Behandlungen, fest gebucht',
          body: 'Eine 90-Minuten-Massage oder ein Hot-Stone-Termin am Samstag ist schwer kurzfristig zu füllen. Dafür verlangen Sie bei der Buchung eine Anzahlung oder den vollen Preis, oder Sie lassen die Karte hinterlegen und berechnen bei No-Show eine Gebühr. Bezahlt wird über Stripe.',
          image: '/images/verticals/salon-spa.webp',
          imageAlt: 'Therapeutin bereitet die Massageliege mit Handtüchern und Kerzen vor',
          note: { label: 'Anzahlung', value: '30 € · Hot Stone Sa. 15:00' },
        },
        {
          title: '10er-Karten und Gutscheine',
          body: 'Stammkundschaft kauft gern Mehrfachkarten, und Massagen werden oft verschenkt. Wertgutscheine, Gutscheinsets und 10er-Karten verkaufen Sie online, am Empfang oder über die KI-Rezeption. Eingelöst wird per QR-Code.',
          image: '/images/qr-hands.webp',
          imageAlt: 'Ein Gast zeigt den QR-Code eines Gutscheins, er wird eingelöst',
          note: { label: '10er-Karte', value: 'Besuch 4 von 10 eingelöst' },
        },
        {
          title: 'WhatsApp beantwortet, während Sie arbeiten',
          body: 'Die KI-Rezeption antwortet auf WhatsApp mit Ihrer eigenen Nummer, per E-Mail und im Website-Chat. Sie kennt nur Ihre Preise, Zeiten und Angebote und bucht echte freie Termine. Gesundheitsfragen, etwa zu Schwangerschaft oder Verletzungen, gibt sie an Sie weiter.',
          image: '/images/thai-shop.webp',
          imageAlt: 'Ein Thai-Massagestudio, eine Buchung kommt per WhatsApp herein',
          note: { label: 'Braucht Sie', value: 'Frage zu Massage in der Schwangerschaft' },
        },
      ],
    },
    niches: {
      kicker: 'Für wen',
      title: ['Für jede Liege,', 'jede Matte, jeden Raum.'],
      lead: 'Für Massagebetriebe, deren Kundschaft selbst bezahlt.',
      items: ['Massagestudios', 'Thai-Massage', 'Mobile Massage', 'Wellnessmassage', 'Sportmassage', 'Hot Stone', 'Ayurveda', 'Paarmassage', 'Day Spas'],
    },
    points: {
      kicker: 'Warum Massagestudios wechseln',
      title: ['Gebaut für Behandlungen mit Dauer,', 'auf Ihrer eigenen Buchungsseite.'],
      items: [
        {
          title: 'Ein Kalender je Therapeutin',
          body: 'Jede Therapeutin hat ihre Spalte, Arbeitszeiten und Behandlungen. Kundschaft bucht gezielt bei ihr oder bei der ersten freien Person.',
        },
        {
          title: 'Anzahlung für lange Termine',
          body: 'Für 90 Minuten, Hot Stone oder Wochenendtermine verlangen Sie eine Anzahlung oder den vollen Preis. Eine leere Liege ist dann trotzdem bezahlt.',
        },
        {
          title: 'Mehrfachkarten und Gutscheine',
          body: 'Wertgutscheine, Gutscheinsets und 10er-Karten, verkauft online oder am Empfang und per QR-Code eingelöst.',
        },
        {
          title: 'KI-Rezeption auf WhatsApp',
          body: 'Antwortet auf Ihrer Nummer, per E-Mail und im Website-Chat, bucht nur echte freie Zeiten und gibt Gesundheitsfragen an Sie weiter.',
        },
        {
          title: 'Ohne Provision, Ihre Kundschaft',
          body: 'Gebucht wird auf Ihrer eigenen Seite, in Ihrem Namen. Kein Marktplatz zeigt Ihrer Stammkundschaft andere Studios.',
        },
        {
          title: 'Kassenbuch und DATEV-Export',
          body: 'Zahlungen am Empfang, Kassenbuch, richtige Umsatzsteuer, auch als Kleinunternehmer, und ein Export für Ihre Steuerberatung.',
        },
      ],
    },
    embed: 'readiness',
    steps: {
      kicker: 'In drei Schritten',
      title: ['Heute eingerichtet.', 'Morgen gebucht.'],
      items: [
        { title: 'Behandlungen anlegen', body: '60 und 90 Minuten, Hot Stone, Thai, Rücken-Nacken: jeweils mit Dauer, Preis und Therapeutin. Der kostenlose Tarif reicht zum Start.' },
        { title: 'Regeln festlegen', body: 'Anzahlung oder Vorkasse, Karte hinterlegen, Puffer zwischen den Behandlungen, KI-Buchungen automatisch annehmen oder selbst bestätigen.' },
        { title: 'Link teilen, KI einschalten', body: 'Buchungslink ins Google-Unternehmensprofil, auf Instagram und die Website. Mit einem Schalter wird Ihre Seite für KI-Assistenten buchbar.' },
      ],
    },
    faq: {
      kicker: 'Fragen aus dem Massagestudio',
      title: ['Kurz beantwortet,', 'für Inhaberinnen und Inhaber.'],
      items: [
        {
          q: 'Welche Buchungssoftware eignet sich für ein Massagestudio?',
          a: 'Eine, die Behandlungen mit fester Dauer je Therapeutin bucht, Anzahlungen für lange Termine nimmt, Mehrfachkarten und Gutscheine verkauft und auch dann Anfragen beantwortet, wenn niemand ans Telefon kann. Zenno macht all das auf Ihrer eigenen Buchungsseite, ohne Provision.',
        },
        {
          q: 'Wie mache ich meine Massagepraxis online buchbar, ohne ständig ans Telefon zu gehen?',
          a: 'Legen Sie Ihre Behandlungen mit Dauer und Preis an, setzen Sie den Buchungslink ins Google-Unternehmensprofil, auf Instagram und auf Ihre Website und ändern Sie die Mailbox-Ansage auf „Termine rund um die Uhr online oder per WhatsApp“. Die KI-Rezeption von Zenno beantwortet WhatsApp, E-Mail und Website-Chat. Anrufe nimmt sie nicht an.',
        },
        {
          q: 'Kann ich Pufferzeiten zwischen zwei Massagen einplanen?',
          a: 'Ja. Rechnen Sie die Zeit für frische Wäsche und Lüften in die Dauer der Behandlung ein, zum Beispiel 75 Minuten Kalenderzeit für eine 60-Minuten-Massage. Online werden dann nur Zeiten angeboten, die wirklich passen.',
        },
        {
          q: 'Kann ich 10er-Karten verkaufen?',
          a: 'Ja. Neben Wertgutscheinen und Gutscheinsets gibt es Mehrfachkarten, die online, am Empfang oder über die KI-Rezeption verkauft und bei jedem Besuch per QR-Code eingelöst werden.',
        },
        {
          q: 'Was macht die KI bei Gesundheitsfragen?',
          a: 'Sie beantwortet keine. Fragen zu Schwangerschaft, Verletzungen oder Beschwerden gibt sie als „Braucht Sie“ an Sie weiter. Sie antwortet nur mit Ihren Preisen, Zeiten und Angeboten, und im Entwurfsmodus geben Sie jede Antwort selbst frei.',
        },
        {
          q: 'Rechnet Zenno mit Krankenkassen ab?',
          a: 'Nein. Zenno ist für Massagebetriebe gedacht, deren Kundschaft selbst bezahlt: online per Karte oder PayPal oder vor Ort. Für Heilmittelverordnungen und die Abrechnung mit Krankenkassen brauchen Sie eine Praxissoftware.',
        },
        {
          q: 'Brauchen meine Gäste ein Konto?',
          a: 'Nein. Gebucht wird ohne Konto. Jede Buchung bekommt eine Bestätigung mit Stornolink, und im Kundenportal lassen sich Termine verschieben und neu buchen.',
        },
        {
          q: 'Was kostet Zenno für ein Massagestudio?',
          a: `${PLAN_LINE.de} Auf Buchungen fällt keine Provision an, und zum Start ist keine Kreditkarte nötig.`,
        },
      ],
    },
    og: { line1: 'Hände auf dem Rücken,', line2: 'Termine im Kalender.', sub: 'Buchungssoftware für Massagestudios' },
  },
  en: {
    meta: {
      title: 'Booking software for massage studios & practices | Zenno',
      description:
        'Online booking for massage studios, Thai massage and wellness practices: a calendar per therapist, deposits against no-shows, multi-visit passes and gift cards, and an AI receptionist on WhatsApp. Start free, no commission.',
    },
    label: 'Massage studios',
    hero: {
      kicker: 'For massage studios, Thai massage and wellness practices',
      title: ['Hands on the back,', 'bookings in the calendar.'],
      lead: 'While you massage, clients book online themselves: real free times per therapist, deposits for long treatments, reminders by SMS and email. The AI receptionist answers questions on WhatsApp.',
      ctaPrimary: 'Start free',
      ctaSecondary: 'See what AI needs',
      image: '/images/massage-call.webp',
      imageAlt: 'A massage therapist working on a client’s back on the massage table',
      chat: {
        studio: 'Sabai Massage',
        channel: 'WhatsApp',
        accent: 'var(--ink)',
        turns: [
          { from: 'me', text: 'Do you have 90 minutes of Thai massage free tomorrow evening?' },
          { from: 'bot', text: 'Tomorrow at 18:30 with Nok, 90 min Thai massage for €79. Shall I book it?' },
          { from: 'me', text: 'Yes please' },
          { from: 'bot', text: 'Booked. You’ll get a confirmation with a cancel link.', booked: true },
        ],
        bookedLabel: 'In Nok’s calendar · no commission',
      },
    },
    story: {
      kicker: 'After the last treatment',
      title: ['9:10 pm, the candles are out.', 'The phone shows 14 messages.'],
      paragraphs: [
        'You can’t pause a massage. Sixty or ninety minutes on a client’s back means oily hands and no ear for the phone. Calls go to voicemail, WhatsApp messages wait until closing.',
        'Then come the usual questions: anything free on Saturday, how much is hot stone, can I move my appointment to next week? Answer too late and the booking is gone. And when a guest doesn’t show without cancelling, the table sits empty for an hour.',
        'With Zenno clients book around the clock, with the therapist they want. You secure long treatments with a deposit, reminders go out on their own, and the AI receptionist answers WhatsApp with your prices and free times.',
      ],
      image: '/images/spa-dusk.webp',
      imageAlt: 'A massage table with candles, towels and hot stones in the studio at night',
      note: { label: 'Booked overnight', value: '4 appointments · 1 gift card' },
    },
    scenes: {
      kicker: 'A day in the massage studio',
      title: ['From the first back in the morning', 'to the request at midnight.'],
      items: [
        {
          title: 'Long treatments, firmly booked',
          body: 'A 90-minute massage or a Saturday hot-stone slot is hard to fill at short notice. Ask for a deposit or the full price at booking, or keep the card on file and charge a no-show fee. Payments run through Stripe.',
          image: '/images/verticals/salon-spa.webp',
          imageAlt: 'A therapist preparing the massage table with towels and candles',
          note: { label: 'Deposit', value: '€30 · Hot stone Sat 15:00' },
        },
        {
          title: 'Multi-visit passes and gift cards',
          body: 'Regulars like buying passes, and massages are often given as gifts. Sell value vouchers, voucher sets and ten-visit passes online, at the desk or through the AI receptionist. They’re redeemed by QR code.',
          image: '/images/qr-hands.webp',
          imageAlt: 'A guest shows a voucher QR code and it is redeemed',
          note: { label: 'Ten-visit pass', value: 'Visit 4 of 10 redeemed' },
        },
        {
          title: 'WhatsApp answered while you work',
          body: 'The AI receptionist answers on WhatsApp with your own number, by email and in your website chat. It only knows your prices, times and offers and books real free slots. Health questions, such as pregnancy or injuries, go to you.',
          image: '/images/thai-shop.webp',
          imageAlt: 'A Thai massage shop, a booking comes in on WhatsApp',
          note: { label: 'Needs you', value: 'Question about massage in pregnancy' },
        },
      ],
    },
    niches: {
      kicker: 'Who it’s for',
      title: ['For every table,', 'every mat, every room.'],
      lead: 'For massage businesses whose clients pay themselves.',
      items: ['Massage studios', 'Thai massage', 'Mobile massage', 'Wellness massage', 'Sports massage', 'Hot stone', 'Ayurveda', 'Couples massage', 'Day spas'],
    },
    points: {
      kicker: 'Why massage studios switch',
      title: ['Built for treatments with a duration,', 'on your own booking page.'],
      items: [
        {
          title: 'A calendar per therapist',
          body: 'Each therapist has their column, working hours and treatments. Clients book them directly or take the first free person.',
        },
        {
          title: 'Deposits for long slots',
          body: 'For 90 minutes, hot stone or weekend slots, ask for a deposit or the full price. An empty table is still paid for.',
        },
        {
          title: 'Passes and gift cards',
          body: 'Value vouchers, voucher sets and ten-visit passes, sold online or at the desk and redeemed by QR code.',
        },
        {
          title: 'AI receptionist on WhatsApp',
          body: 'Answers on your number, by email and in your website chat, books only real free times and hands health questions to you.',
        },
        {
          title: 'No commission, your clients',
          body: 'Bookings happen on your own page, in your name. No marketplace shows your regulars other studios.',
        },
        {
          title: 'Cash book and DATEV export',
          body: 'Payments at the desk, a cash book, the right VAT including the Kleinunternehmer rule, and an export for your tax advisor.',
        },
      ],
    },
    embed: 'readiness',
    steps: {
      kicker: 'Three steps',
      title: ['Set up today.', 'Booked tomorrow.'],
      items: [
        { title: 'Add your treatments', body: '60 and 90 minutes, hot stone, Thai, back and neck: each with duration, price and therapist. The free plan is enough to start.' },
        { title: 'Set your rules', body: 'Deposit or prepayment, card on file, buffers between treatments, and AI bookings accepted automatically or approved by you.' },
        { title: 'Share the link, switch on AI', body: 'Put your booking link on your Google Business Profile, Instagram and website. One switch makes your page bookable by AI assistants.' },
      ],
    },
    faq: {
      kicker: 'Massage studio questions',
      title: ['Answered briefly,', 'for owners.'],
      items: [
        {
          q: 'What booking software suits a massage studio?',
          a: 'One that books fixed-length treatments per therapist, takes deposits for long slots, sells passes and gift cards, and answers requests when nobody can reach the phone. Zenno does all of that on your own booking page, with no commission.',
        },
        {
          q: 'How do I make my massage practice bookable online without answering the phone all day?',
          a: 'Add your treatments with duration and price, put the booking link on your Google Business Profile, Instagram and website, and change your voicemail to “book online or on WhatsApp, around the clock”. Zenno’s AI receptionist answers WhatsApp, email and website chat. It doesn’t take phone calls.',
        },
        {
          q: 'Can I plan buffers between two massages?',
          a: 'Yes. Build the time for fresh linen and airing the room into the treatment’s duration, for example 75 minutes of calendar time for a 60-minute massage. Online, only times that really fit are offered.',
        },
        {
          q: 'Can I sell ten-visit passes?',
          a: 'Yes. Besides value vouchers and voucher sets there are multi-visit passes, sold online, at the desk or by the AI receptionist and redeemed by QR code at each visit.',
        },
        {
          q: 'What does the AI do with health questions?',
          a: 'It doesn’t answer them. Questions about pregnancy, injuries or pain go to you as “Needs you”. It only replies with your prices, times and offers, and in draft mode you approve every reply yourself.',
        },
        {
          q: 'Does Zenno bill health insurers?',
          a: 'No. Zenno is for massage businesses whose clients pay themselves: online by card or PayPal, or at the venue. For prescriptions and billing statutory health insurers you need practice software.',
        },
        {
          q: 'Do my guests need an account?',
          a: 'No. Guests book without an account. Every booking gets a confirmation with a cancel link, and the client portal lets them reschedule and rebook.',
        },
        {
          q: 'What does Zenno cost for a massage studio?',
          a: `${PLAN_LINE.en} There is no commission on bookings, and no credit card is needed to start.`,
        },
      ],
    },
    og: { line1: 'Hands on the back,', line2: 'bookings in the calendar.', sub: 'Booking software for massage studios' },
  },
  th: {
    meta: {
      title: 'ระบบจองคิวสำหรับร้านนวดและคลินิกนวด | Zenno',
      description:
        'ระบบจองคิวออนไลน์สำหรับร้านนวด นวดไทย และร้านเวลเนส: ปฏิทินแยกตามหมอนวด มัดจำป้องกันลูกค้าไม่มาตามนัด บัตรหลายครั้งและบัตรของขวัญ และพนักงานต้อนรับ AI บน WhatsApp เริ่มใช้ฟรี ไม่มีค่าคอมมิชชั่น',
    },
    label: 'ร้านนวด',
    hero: {
      kicker: 'สำหรับร้านนวด นวดไทย และร้านเวลเนส',
      title: ['มือนวดอยู่บนหลังลูกค้า', 'คิวก็เข้าปฏิทินเอง'],
      lead: 'ระหว่างที่คุณนวด ลูกค้าจองออนไลน์ได้เอง เห็นเวลาว่างจริงของหมอนวดแต่ละคน มีมัดจำสำหรับคอร์สยาว และแจ้งเตือนทาง SMS และอีเมล ส่วนคำถามทาง WhatsApp พนักงานต้อนรับ AI ตอบให้',
      ctaPrimary: 'เริ่มใช้ฟรี',
      ctaSecondary: 'ดูว่า AI ต้องการอะไร',
      image: '/images/massage-call.webp',
      imageAlt: 'หมอนวดกำลังนวดหลังให้ลูกค้าบนเตียงนวด',
      chat: {
        studio: 'Sabai Massage',
        channel: 'WhatsApp',
        accent: 'var(--ink)',
        turns: [
          { from: 'me', text: 'พรุ่งนี้เย็นมีคิวนวดไทย 90 นาทีว่างไหม' },
          { from: 'bot', text: 'พรุ่งนี้ 18:30 กับนก นวดไทย 90 นาที €79 ให้จองเลยไหม' },
          { from: 'me', text: 'จองเลย' },
          { from: 'bot', text: 'จองแล้ว คุณจะได้รับคำยืนยันพร้อมลิงก์ยกเลิก', booked: true },
        ],
        bookedLabel: 'อยู่ในปฏิทินของนก · ไม่มีค่าคอมมิชชั่น',
      },
    },
    story: {
      kicker: 'หลังลูกค้าคนสุดท้าย',
      title: ['21:10 น. เป่าเทียนดับแล้ว', 'มือถือมีข้อความรอ 14 ข้อความ'],
      paragraphs: [
        'การนวดหยุดกลางคันไม่ได้ นวดหลังลูกค้า 60 หรือ 90 นาที มือเต็มไปด้วยน้ำมัน รับโทรศัพท์ไม่ได้ สายเข้าไปที่ฝากข้อความ ข้อความ WhatsApp ก็ต้องรอจนปิดร้าน',
        'จากนั้นก็เป็นคำถามเดิมๆ วันเสาร์ยังว่างไหม นวดหินร้อนราคาเท่าไร ขอเลื่อนนัดไปสัปดาห์หน้าได้ไหม ตอบช้าไปก็เสียลูกค้า และถ้าลูกค้าไม่มาโดยไม่ยกเลิก เตียงก็ว่างไปหนึ่งชั่วโมง',
        'กับ Zenno ลูกค้าจองได้เองตลอดเวลา กับหมอนวดที่ต้องการ คอร์สยาวคุณเก็บมัดจำไว้ได้ การแจ้งเตือนส่งออกไปเอง และบน WhatsApp พนักงานต้อนรับ AI ตอบด้วยราคาและเวลาว่างของคุณ',
      ],
      image: '/images/spa-dusk.webp',
      imageAlt: 'เตียงนวดที่มีเทียน ผ้าขนหนู และหินร้อนในร้านตอนกลางคืน',
      note: { label: 'จองข้ามคืน', value: '4 คิว · บัตรของขวัญ 1 ใบ' },
    },
    scenes: {
      kicker: 'หนึ่งวันในร้านนวด',
      title: ['ตั้งแต่ลูกค้าคนแรกตอนเช้า', 'จนถึงข้อความตอนเที่ยงคืน'],
      items: [
        {
          title: 'คอร์สยาว จองแน่นอน',
          body: 'นวด 90 นาทีหรือนวดหินร้อนวันเสาร์ หาคนมาแทนกะทันหันได้ยาก สำหรับบริการเหล่านี้ ให้เก็บมัดจำหรือเต็มจำนวนตอนจอง หรือให้ลูกค้าผูกบัตรไว้แล้วเก็บค่าธรรมเนียมเมื่อไม่มาตามนัด การชำระเงินผ่าน Stripe',
          image: '/images/verticals/salon-spa.webp',
          imageAlt: 'หมอนวดกำลังเตรียมเตียงนวดด้วยผ้าขนหนูและเทียน',
          note: { label: 'มัดจำ', value: '€30 · หินร้อน ส. 15:00' },
        },
        {
          title: 'บัตรหลายครั้งและบัตรของขวัญ',
          body: 'ลูกค้าประจำชอบซื้อบัตรหลายครั้ง และการนวดมักถูกซื้อเป็นของขวัญ คุณขายบัตรมูลค่า ชุดบัตรของขวัญ และบัตร 10 ครั้งได้ทั้งออนไลน์ ที่หน้าร้าน หรือผ่านพนักงานต้อนรับ AI ใช้บัตรด้วยการสแกน QR code',
          image: '/images/qr-hands.webp',
          imageAlt: 'ลูกค้าแสดง QR ของบัตรของขวัญ และสแกนใช้งาน',
          note: { label: 'บัตร 10 ครั้ง', value: 'ใช้ไปแล้ว 4 จาก 10 ครั้ง' },
        },
        {
          title: 'ตอบ WhatsApp ระหว่างที่คุณทำงาน',
          body: 'พนักงานต้อนรับ AI ตอบทาง WhatsApp ด้วยเบอร์ของคุณเอง ทางอีเมล และแชทบนเว็บไซต์ รู้เฉพาะราคา เวลา และโปรของคุณ และจองเฉพาะเวลาที่ว่างจริง คำถามด้านสุขภาพ เช่น การตั้งครรภ์หรืออาการบาดเจ็บ จะส่งต่อให้คุณ',
          image: '/images/thai-shop.webp',
          imageAlt: 'ร้านนวดไทย มีการจองเข้ามาทาง WhatsApp',
          note: { label: 'ต้องการคุณ', value: 'คำถามเรื่องนวดระหว่างตั้งครรภ์' },
        },
      ],
    },
    niches: {
      kicker: 'เหมาะกับใคร',
      title: ['ทุกเตียง', 'ทุกเบาะ ทุกห้อง'],
      lead: 'สำหรับธุรกิจนวดที่ลูกค้าจ่ายเงินเอง',
      items: ['ร้านนวด', 'นวดไทย', 'นวดนอกสถานที่', 'นวดเพื่อผ่อนคลาย', 'นวดนักกีฬา', 'นวดหินร้อน', 'อายุรเวท', 'นวดคู่', 'เดย์สปา'],
    },
    points: {
      kicker: 'ทำไมร้านนวดเปลี่ยนมาใช้',
      title: ['สร้างมาเพื่อบริการที่มีระยะเวลา', 'บนหน้าจองของคุณเอง'],
      items: [
        {
          title: 'ปฏิทินแยกตามหมอนวด',
          body: 'หมอนวดแต่ละคนมีคอลัมน์ เวลาทำงาน และบริการของตัวเอง ลูกค้าเลือกจองกับคนที่ต้องการหรือคนแรกที่ว่าง',
        },
        {
          title: 'มัดจำสำหรับคิวยาว',
          body: 'สำหรับนวด 90 นาที หินร้อน หรือคิววันหยุด เก็บมัดจำหรือเต็มจำนวนได้ เตียงที่ว่างก็ยังได้เงิน',
        },
        {
          title: 'บัตรหลายครั้งและบัตรของขวัญ',
          body: 'บัตรมูลค่า ชุดบัตรของขวัญ และบัตร 10 ครั้ง ขายออนไลน์หรือที่หน้าร้าน และใช้ด้วย QR code',
        },
        {
          title: 'พนักงานต้อนรับ AI บน WhatsApp',
          body: 'ตอบด้วยเบอร์ของคุณ ทางอีเมล และแชทบนเว็บไซต์ จองเฉพาะเวลาที่ว่างจริง และส่งคำถามด้านสุขภาพให้คุณ',
        },
        {
          title: 'ไม่มีค่าคอมมิชชั่น ลูกค้าเป็นของคุณ',
          body: 'การจองเกิดขึ้นบนหน้าของคุณเอง ในชื่อของคุณ ไม่มีมาร์เก็ตเพลสที่แนะนำร้านอื่นให้ลูกค้าประจำของคุณ',
        },
        {
          title: 'สมุดเงินสดและการส่งออก DATEV',
          body: 'รับชำระที่หน้าร้าน สมุดเงินสด ภาษีมูลค่าเพิ่มที่ถูกต้อง รวมถึงกฎ Kleinunternehmer และไฟล์ส่งออกให้ที่ปรึกษาภาษี',
        },
      ],
    },
    embed: 'readiness',
    steps: {
      kicker: 'สามขั้นตอน',
      title: ['ตั้งค่าวันนี้', 'พรุ่งนี้มีคนจอง'],
      items: [
        { title: 'เพิ่มบริการ', body: 'นวด 60 และ 90 นาที หินร้อน นวดไทย นวดหลังและคอ ใส่ระยะเวลา ราคา และหมอนวด แพ็กเกจฟรีก็เพียงพอสำหรับเริ่มต้น' },
        { title: 'ตั้งกฎ', body: 'มัดจำหรือจ่ายล่วงหน้า ผูกบัตร เวลาเผื่อระหว่างคิว และเลือกว่าจะรับการจองจาก AI อัตโนมัติหรือยืนยันเอง' },
        { title: 'แชร์ลิงก์ เปิด AI', body: 'ใส่ลิงก์จองใน Google Business Profile, Instagram และเว็บไซต์ เปิดสวิตช์เดียว หน้าของคุณก็พร้อมให้ผู้ช่วย AI จอง' },
      ],
    },
    faq: {
      kicker: 'คำถามจากร้านนวด',
      title: ['ตอบสั้นๆ', 'สำหรับเจ้าของร้าน'],
      items: [
        {
          q: 'ระบบจองคิวแบบไหนเหมาะกับร้านนวด',
          a: 'ระบบที่จองบริการที่มีระยะเวลาแน่นอนตามหมอนวดแต่ละคน เก็บมัดจำสำหรับคิวยาว ขายบัตรหลายครั้งและบัตรของขวัญ และตอบคำถามได้แม้ไม่มีใครว่างรับโทรศัพท์ Zenno ทำได้ทั้งหมดบนหน้าจองของคุณเอง โดยไม่มีค่าคอมมิชชั่น',
        },
        {
          q: 'ทำให้ร้านนวดจองออนไลน์ได้โดยไม่ต้องรับโทรศัพท์ทั้งวันได้อย่างไร',
          a: 'เพิ่มบริการพร้อมระยะเวลาและราคา ใส่ลิงก์จองใน Google Business Profile, Instagram และเว็บไซต์ แล้วเปลี่ยนข้อความฝากเสียงเป็น “จองออนไลน์หรือทาง WhatsApp ได้ตลอดเวลา” พนักงานต้อนรับ AI ของ Zenno ตอบ WhatsApp อีเมล และแชทบนเว็บไซต์ แต่ไม่รับสายโทรศัพท์',
        },
        {
          q: 'เผื่อเวลาระหว่างคิวนวดได้ไหม',
          a: 'ได้ ให้รวมเวลาเปลี่ยนผ้าและระบายอากาศไว้ในระยะเวลาของบริการ เช่น ตั้งเวลาในปฏิทิน 75 นาทีสำหรับนวด 60 นาที หน้าจองออนไลน์จะแสดงเฉพาะเวลาที่ลงตัวจริง',
        },
        {
          q: 'ขายบัตร 10 ครั้งได้ไหม',
          a: 'ได้ นอกจากบัตรมูลค่าและชุดบัตรของขวัญ ยังมีบัตรหลายครั้ง ขายได้ทั้งออนไลน์ ที่หน้าร้าน หรือผ่านพนักงานต้อนรับ AI และสแกน QR code ทุกครั้งที่มาใช้บริการ',
        },
        {
          q: 'AI ทำอย่างไรกับคำถามด้านสุขภาพ',
          a: 'AI ไม่ตอบคำถามเหล่านี้ คำถามเรื่องการตั้งครรภ์ อาการบาดเจ็บ หรืออาการปวด จะส่งถึงคุณในหมวด “ต้องการคุณ” AI ตอบด้วยราคา เวลา และโปรของคุณเท่านั้น และในโหมดร่าง คุณอนุมัติทุกคำตอบเอง',
        },
        {
          q: 'Zenno เบิกค่าบริการกับประกันสุขภาพได้ไหม',
          a: 'ไม่ได้ Zenno เหมาะกับธุรกิจนวดที่ลูกค้าจ่ายเงินเอง ทั้งออนไลน์ด้วยบัตรหรือ PayPal หรือจ่ายที่ร้าน หากต้องการเบิกกับประกันสุขภาพ คุณต้องใช้ซอฟต์แวร์สำหรับคลินิก',
        },
        {
          q: 'ลูกค้าต้องมีบัญชีไหม',
          a: 'ไม่ต้อง ลูกค้าจองได้โดยไม่ต้องสมัคร ทุกการจองมีคำยืนยันพร้อมลิงก์ยกเลิก และในพอร์ทัลลูกค้าสามารถเลื่อนหรือจองใหม่ได้',
        },
        {
          q: 'Zenno สำหรับร้านนวดราคาเท่าไร',
          a: `${PLAN_LINE.th} ไม่มีค่าคอมมิชชั่นจากการจอง และไม่ต้องใช้บัตรเครดิตในการเริ่มต้น`,
        },
      ],
    },
    og: { line1: 'มือนวดอยู่บนหลังลูกค้า', line2: 'คิวก็เข้าปฏิทินเอง', sub: 'ระบบจองคิวสำหรับร้านนวด' },
  },
}
