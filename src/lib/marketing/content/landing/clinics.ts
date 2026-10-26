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
      image: '/images/verticals/clinic-hero.webp',
      imageAlt: 'Behandlerin im Gespräch mit einer Kundin in einem ruhigen, hellen Behandlungsraum',
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
    story: {
      kicker: 'Ein Vormittag am Empfang',
      title: ['9:05 Uhr, drei Anrufe in der Leitung.', 'Und vorn wartet jemand auf den Termin.'],
      paragraphs: [
        'In einer Ästhetik- oder Wellnesspraxis ist der Empfang das Nadelöhr. Er begrüßt, kassiert, plant und telefoniert, alles gleichzeitig.',
        'Viele Anrufe sind Routine: Was kostet eine Beratung, wann ist der nächste freie Termin, kann ich auf nächste Woche verschieben? Wer nicht durchkommt, schreibt eine E-Mail oder versucht es gar nicht mehr. Und wenn eine lange Behandlung kurzfristig ausfällt, steht der Raum leer.',
        'Mit Zenno buchen Ihre Kundinnen und Kunden Beratungen und Behandlungen selbst, mit Ihren Preisen und echten freien Zeiten. Lange Behandlungen sichern Sie mit Anzahlung ab. Die KI-Rezeption beantwortet Fragen zu Ablauf und Terminen und übergibt alles Medizinische an Ihr Team.',
      ],
      image: '/images/verticals/clinic-story.webp',
      imageAlt: 'Empfangsmitarbeiterin telefoniert am Tresen einer hellen Praxis und macht sich Notizen',
      note: { label: 'Online gebucht', value: 'Hautberatung · Di. 15:00' },
    },
    scenes: {
      kicker: 'Der Weg durch die Praxis',
      title: ['Beratung, Behandlung, Nachsorge:', 'jeder Schritt gebucht.'],
      items: [
        {
          title: 'Die Beratung zuerst',
          body: 'Viele Behandlungen beginnen mit einem Gespräch. Bieten Sie die Beratung als eigene Leistung mit Dauer und Preis an. Ihre Kundschaft bucht sie online, bekommt Bestätigung und Erinnerung, und Ihr Team weiß vorher, wer kommt und wofür.',
          image: '/images/verticals/clinic-consult.webp',
          imageAlt: 'Behandlerin betrachtet die Haut einer Kundin unter einer Lupenleuchte',
          note: { label: 'Bestätigt', value: 'Beratung · 30 Min. · 45 €' },
        },
        {
          title: 'Lange Behandlungen, abgesichert',
          body: 'Für Behandlungen, die einen Raum und eine Fachkraft lange binden, verlangen Sie bei der Buchung eine Anzahlung oder den vollen Preis. Oder Sie lassen die Karte hinterlegen und berechnen bei No-Show oder zu später Absage eine Gebühr.',
          image: '/images/verticals/clinic-facial.webp',
          imageAlt: 'Kundin entspannt während einer Gesichtsbehandlung',
          note: { label: 'Anzahlung', value: '60 € · Stripe' },
        },
        {
          title: 'Der nächste Termin, direkt gebucht',
          body: 'Nach der Behandlung bucht die Kundin den Folgetermin selbst über den Link in ihrer Bestätigung oder im Kundenportal. Bezahlung, Gutscheine und Umsatzsteuer je Leistung laufen über denselben Kalender, der Export für Ihre Steuerberatung ist inklusive.',
          image: '/images/verticals/clinic-aftercare.webp',
          imageAlt: 'Kundin am Empfangstresen nach der Behandlung, lächelnd mit dem Handy',
          note: { label: 'Folgetermin', value: 'In 4 Wochen · gebucht' },
        },
      ],
    },
    niches: {
      kicker: 'Für wen',
      title: ['Für Praxen,', 'in denen Zeit planbar sein muss.'],
      lead: 'Für ästhetische und Wellness-Behandlungen, die mit Dauer, Preis und Fachkraft gebucht werden.',
      items: ['Ästhetikpraxen', 'Kosmetikinstitute', 'Hautpflege & Facials', 'Laser-Haarentfernung', 'Wellnesspraxen', 'Medical Spas', 'Lymphdrainage', 'Ayurveda'],
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
          q: 'Beantwortet die KI-Rezeption medizinische Fragen?',
          a: 'Nein. Sie beantwortet Fragen zu Terminen, Preisen und Ablauf aus Ihren eigenen Angaben. Gesundheitsfragen und Beschwerden übergibt sie an Ihr Team und markiert den Chat mit „Braucht Sie“. Im Entwurfsmodus geben Sie jede Antwort selbst frei.',
        },
        {
          q: 'Kann ich eine Beratung als eigenen Termin anbieten?',
          a: 'Ja. Die Beratung ist eine eigene Leistung mit Dauer, Preis und Fachkraft. Ihre Kundschaft bucht sie online, und den Behandlungstermin danach ebenso.',
        },
        {
          q: 'Wie wird die Umsatzsteuer berechnet?',
          a: 'Sie hinterlegen den Steuersatz je Leistung, Zenno rechnet ihn in jede Zahlung ein und erstellt die Monats- oder Quartalsübersicht und den DATEV-Export. Welcher Satz für welche Behandlung gilt, klären Sie bitte mit Ihrer Steuerberatung.',
        },
        {
          q: 'Kann meine Kundschaft auf Englisch buchen?',
          a: 'Ja. Die Buchungsseite gibt es auf Deutsch und Englisch, und die KI-Rezeption antwortet auf Deutsch, Englisch oder Thai, in der Sprache, in der geschrieben wird.',
        },
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
      image: '/images/verticals/clinic-hero.webp',
      imageAlt: 'Practitioner talking with a client in a calm, bright treatment room',
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
    story: {
      kicker: 'A morning at the front desk',
      title: ['9:05 am, three calls on hold.', 'And someone is waiting at the desk.'],
      paragraphs: [
        'In an aesthetic or wellness clinic the front desk is the bottleneck. It greets, takes payments, plans and answers the phone, all at once.',
        'Most calls are routine: how much is a consultation, when is the next free slot, can I move to next week? Whoever can’t get through sends an email or doesn’t try again. And when a long treatment is cancelled at short notice, the room stands empty.',
        'With Zenno your clients book consultations and treatments themselves, with your prices and real free times. You secure long treatments with a deposit. The AI receptionist answers questions about the process and appointments, and hands anything medical to your team.',
      ],
      image: '/images/verticals/clinic-story.webp',
      imageAlt: 'Receptionist on the phone at the counter of a bright clinic, taking notes',
      note: { label: 'Booked online', value: 'Skin consultation · Tue 15:00' },
    },
    scenes: {
      kicker: 'The way through the clinic',
      title: ['Consultation, treatment, aftercare:', 'every step booked.'],
      items: [
        {
          title: 'Consultation first',
          body: 'Many treatments start with a conversation. Offer the consultation as its own service with a duration and price. Clients book it online, get a confirmation and a reminder, and your team knows in advance who is coming and why.',
          image: '/images/verticals/clinic-consult.webp',
          imageAlt: 'Practitioner examining a client’s skin under a magnifying lamp',
          note: { label: 'Confirmed', value: 'Consultation · 30 min · €45' },
        },
        {
          title: 'Long treatments, secured',
          body: 'For treatments that tie up a room and a specialist for a long time, you ask for a deposit or the full price at booking. Or you keep the card on file and charge a fee for a no-show or late cancellation.',
          image: '/images/verticals/clinic-facial.webp',
          imageAlt: 'Client relaxing during a facial treatment',
          note: { label: 'Deposit', value: '€60 · Stripe' },
        },
        {
          title: 'The next appointment, booked on the spot',
          body: 'After the treatment, the client books the follow-up herself through the link in her confirmation or in the client portal. Payments, gift cards and VAT per service run through the same calendar, and the export for your tax advisor is included.',
          image: '/images/verticals/clinic-aftercare.webp',
          imageAlt: 'Client at the reception counter after her treatment, smiling with her phone',
          note: { label: 'Follow-up', value: 'In 4 weeks · booked' },
        },
      ],
    },
    niches: {
      kicker: 'Who it’s for',
      title: ['For clinics', 'where time has to be planned.'],
      lead: 'For aesthetic and wellness treatments booked with a duration, a price and a specialist.',
      items: ['Aesthetic clinics', 'Beauty institutes', 'Skincare & facials', 'Laser hair removal', 'Wellness practices', 'Medical spas', 'Lymphatic drainage', 'Ayurveda'],
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
          q: 'Does the AI receptionist answer medical questions?',
          a: 'No. It answers questions about appointments, prices and the process from your own information. Health questions and complaints are handed to your team and the chat is marked “Needs you”. In draft mode you approve every reply yourself.',
        },
        {
          q: 'Can I offer a consultation as its own appointment?',
          a: 'Yes. The consultation is its own service with a duration, price and specialist. Clients book it online, and the treatment afterwards too.',
        },
        {
          q: 'How is VAT handled?',
          a: 'You set the rate per service, Zenno applies it to every payment and produces the monthly or quarterly overview and the DATEV export. Please check with your tax advisor which rate applies to which treatment.',
        },
        {
          q: 'Can my clients book in English?',
          a: 'Yes. The booking page is available in German and English, and the AI receptionist replies in German, English or Thai, in the language the client writes in.',
        },
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
      image: '/images/verticals/clinic-hero.webp',
      imageAlt: 'ผู้ให้บริการกำลังพูดคุยกับลูกค้าในห้องทรีตเมนต์ที่สงบและสว่าง',
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
    story: {
      kicker: 'เช้าวันหนึ่งที่เคาน์เตอร์ต้อนรับ',
      title: ['9:05 น. มีสายรออยู่สามสาย', 'และมีลูกค้ายืนรอที่เคาน์เตอร์'],
      paragraphs: [
        'ในคลินิกความงามหรือเวลเนส เคาน์เตอร์ต้อนรับคือคอขวด ต้องต้อนรับ เก็บเงิน วางแผน และรับโทรศัพท์ในเวลาเดียวกัน',
        'สายส่วนใหญ่เป็นเรื่องเดิมๆ ปรึกษาราคาเท่าไร คิวว่างถัดไปเมื่อไร ขอเลื่อนไปสัปดาห์หน้าได้ไหม ใครโทรไม่ติดก็ส่งอีเมลหรือไม่ลองอีกเลย และเมื่อทรีตเมนต์ยาวถูกยกเลิกกะทันหัน ห้องก็ว่าง',
        'กับ Zenno ลูกค้าจองการปรึกษาและทรีตเมนต์ได้เอง พร้อมราคาของคุณและเวลาว่างจริง ทรีตเมนต์ยาวป้องกันด้วยเงินมัดจำ พนักงานต้อนรับ AI ตอบคำถามเรื่องขั้นตอนและนัดหมาย และส่งเรื่องทางการแพทย์ทั้งหมดต่อให้ทีมของคุณ',
      ],
      image: '/images/verticals/clinic-story.webp',
      imageAlt: 'พนักงานต้อนรับคุยโทรศัพท์ที่เคาน์เตอร์คลินิกที่สว่าง พร้อมจดบันทึก',
      note: { label: 'จองออนไลน์', value: 'ปรึกษาผิว · อ. 15:00' },
    },
    scenes: {
      kicker: 'เส้นทางในคลินิก',
      title: ['ปรึกษา ทรีตเมนต์ ดูแลหลังทำ', 'ทุกขั้นตอนจองไว้แล้ว'],
      items: [
        {
          title: 'ปรึกษาก่อน',
          body: 'ทรีตเมนต์หลายอย่างเริ่มจากการพูดคุย เปิดให้จองการปรึกษาเป็นบริการแยก มีระยะเวลาและราคา ลูกค้าจองออนไลน์ ได้รับคำยืนยันและการแจ้งเตือน และทีมของคุณรู้ล่วงหน้าว่าใครจะมาและมาเพื่ออะไร',
          image: '/images/verticals/clinic-consult.webp',
          imageAlt: 'ผู้ให้บริการตรวจผิวลูกค้าใต้โคมแว่นขยาย',
          note: { label: 'ยืนยันแล้ว', value: 'ปรึกษา · 30 นาที · €45' },
        },
        {
          title: 'ทรีตเมนต์ยาว มีหลักประกัน',
          body: 'สำหรับทรีตเมนต์ที่ใช้ห้องและผู้เชี่ยวชาญนาน คุณเก็บมัดจำหรือราคาเต็มตอนจองได้ หรือบันทึกบัตรไว้แล้วเรียกเก็บค่าธรรมเนียมเมื่อลูกค้าไม่มาหรือยกเลิกกระชั้นชิด',
          image: '/images/verticals/clinic-facial.webp',
          imageAlt: 'ลูกค้าผ่อนคลายระหว่างทำทรีตเมนต์หน้า',
          note: { label: 'มัดจำ', value: '€60 · Stripe' },
        },
        {
          title: 'นัดครั้งถัดไป จองได้ทันที',
          body: 'หลังทำทรีตเมนต์ ลูกค้าจองนัดติดตามผลเองผ่านลิงก์ในคำยืนยันหรือในพอร์ทัลลูกค้า การชำระเงิน บัตรของขวัญ และภาษีมูลค่าเพิ่มตามบริการอยู่ในปฏิทินเดียวกัน พร้อมไฟล์ส่งออกสำหรับนักบัญชีของคุณ',
          image: '/images/verticals/clinic-aftercare.webp',
          imageAlt: 'ลูกค้ายิ้มพร้อมโทรศัพท์ที่เคาน์เตอร์หลังทำทรีตเมนต์',
          note: { label: 'นัดติดตามผล', value: 'อีก 4 สัปดาห์ · จองแล้ว' },
        },
      ],
    },
    niches: {
      kicker: 'เหมาะกับใคร',
      title: ['สำหรับคลินิก', 'ที่ต้องวางแผนเวลาได้'],
      lead: 'สำหรับทรีตเมนต์ความงามและเวลเนสที่จองพร้อมระยะเวลา ราคา และผู้เชี่ยวชาญ',
      items: ['คลินิกความงาม', 'สถาบันเสริมสวย', 'ดูแลผิวและทรีตเมนต์หน้า', 'เลเซอร์กำจัดขน', 'คลินิกเวลเนส', 'เมดิคัลสปา', 'นวดระบายน้ำเหลือง', 'อายุรเวท'],
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
          q: 'พนักงานต้อนรับ AI ตอบคำถามทางการแพทย์ไหม',
          a: 'ไม่ ตอบเฉพาะเรื่องนัดหมาย ราคา และขั้นตอน จากข้อมูลของคุณเอง คำถามด้านสุขภาพและเรื่องร้องเรียนจะส่งต่อให้ทีมของคุณ และแชทจะถูกทำเครื่องหมายว่า “ต้องการคุณ” ในโหมดร่าง คุณอนุมัติทุกคำตอบเอง',
        },
        {
          q: 'เปิดให้จองการปรึกษาเป็นนัดแยกได้ไหม',
          a: 'ได้ การปรึกษาเป็นบริการแยก มีระยะเวลา ราคา และผู้เชี่ยวชาญ ลูกค้าจองออนไลน์ และจองทรีตเมนต์ต่อได้เช่นกัน',
        },
        {
          q: 'ภาษีมูลค่าเพิ่มคำนวณอย่างไร',
          a: 'คุณกำหนดอัตราภาษีตามบริการ Zenno คำนวณในทุกการชำระเงิน และสร้างภาพรวมรายเดือนหรือรายไตรมาสพร้อมไฟล์ DATEV อัตราใดใช้กับทรีตเมนต์ใด โปรดตรวจสอบกับนักบัญชีของคุณ',
        },
        {
          q: 'ลูกค้าจองเป็นภาษาอังกฤษได้ไหม',
          a: 'ได้ หน้าจองมีภาษาเยอรมันและอังกฤษ และพนักงานต้อนรับ AI ตอบเป็นภาษาเยอรมัน อังกฤษ หรือไทย ตามภาษาที่ลูกค้าเขียนมา',
        },
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
