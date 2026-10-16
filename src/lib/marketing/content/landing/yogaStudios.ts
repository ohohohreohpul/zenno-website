import type { Lang } from '../../lang'
import type { LandingContent } from './types'

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
      image: '/images/yoga-hero.webp',
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
          q: 'Kann die KI Probestunden für mein Studio buchen?',
          a: 'Ihre Zenno-Seite ist so gebaut, dass KI-Assistenten Sie direkt buchen können: Angebote, Preise und freie Zeiten stehen in dem Format, das Google, ChatGPT und Perplexity lesen, und die Seite nimmt Buchungen ohne Anruf an.',
        },
        {
          q: 'Wie verhindere ich leere Plätze durch No-Shows?',
          a: 'Mit Vorkasse oder Anzahlung bei der Buchung oder mit hinterlegter Karte und einer Gebühr bei Nichterscheinen oder zu später Absage. Bezahlt wird über Stripe.',
        },
        {
          q: 'Kann ich Gutscheine verkaufen?',
          a: 'Ja. Gutscheine verkaufen Sie online, und Stammkundschaft sammelt Treuepunkte. Beides ist ab dem Standard-Tarif enthalten.',
        },
        {
          q: 'Was kostet Zenno für ein Studio?',
          a: 'Free kostet 0 € (50 Buchungen pro Monat, 1 Fachkraft), Standard 29 € pro Monat (unbegrenzte Buchungen, 3 Fachkräfte), Pro 45 € pro Monat ohne Limits. Auf KI-Buchungen fällt keine Provision an.',
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
      image: '/images/yoga-hero.webp',
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
          q: 'Can AI book trial sessions at my studio?',
          a: 'Your Zenno page is built so AI assistants can book you directly: offers, prices and free times are published in the format Google, ChatGPT and Perplexity read, and the page accepts bookings without a phone call.',
        },
        {
          q: 'How do I stop no-shows leaving empty spots?',
          a: 'With prepayment or a deposit at booking, or with the card on file and a fee for a no-show or late cancellation. Payments run through Stripe.',
        },
        {
          q: 'Can I sell gift cards?',
          a: 'Yes. You sell gift cards online and regulars collect loyalty points. Both are included from the Standard plan.',
        },
        {
          q: 'What does Zenno cost for a studio?',
          a: 'Free is €0 (50 bookings a month, 1 specialist), Standard €29 a month (unlimited bookings, 3 specialists), Pro €45 a month with no limits. There is no commission on AI bookings.',
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
      image: '/images/yoga-hero.webp',
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
          q: 'AI จองคลาสทดลองที่สตูดิโอของฉันได้ไหม',
          a: 'หน้า Zenno ของคุณถูกสร้างมาให้ผู้ช่วย AI จองกับคุณได้โดยตรง คลาส ราคา และเวลาว่างถูกเผยแพร่ในรูปแบบที่ Google, ChatGPT และ Perplexity อ่านได้ และหน้านี้รับการจองได้โดยไม่ต้องโทรศัพท์',
        },
        {
          q: 'จะป้องกันไม่ให้ลูกค้าไม่มาตามนัดจนเหลือที่ว่างได้อย่างไร',
          a: 'ด้วยการให้ชำระเต็มจำนวนล่วงหน้าหรือมัดจำตอนจอง หรือบันทึกบัตรไว้พร้อมค่าธรรมเนียมเมื่อไม่มาตามนัดหรือยกเลิกกระชั้นชิด การชำระเงินทำผ่าน Stripe',
        },
        {
          q: 'ขายบัตรของขวัญได้ไหม',
          a: 'ได้ คุณขายบัตรของขวัญออนไลน์ได้ และลูกค้าประจำสะสมแต้มได้ ทั้งสองอย่างมีให้ตั้งแต่แพ็กเกจ Standard',
        },
        {
          q: 'Zenno สำหรับสตูดิโอราคาเท่าไร',
          a: 'Free ราคา €0 (50 การจองต่อเดือน ผู้ให้บริการ 1 คน) Standard €29 ต่อเดือน (จองได้ไม่จำกัด ผู้ให้บริการ 3 คน) Pro €45 ต่อเดือน ไม่มีข้อจำกัด ไม่มีค่าคอมมิชชั่นสำหรับการจองผ่าน AI',
        },
      ],
    },
    og: { line1: 'เสื่อที่ว่างอยู่', line2: 'มีคนจองแทนที่จะเสียเปล่า', sub: 'ระบบจองคิวสำหรับสตูดิโอโยคะและฟิตเนส' },
  },
}
