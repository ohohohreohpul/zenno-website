import type { GuideSet } from './types'

/**
 * Practical guide for private-pay massage studios and practices. Buffers are advice
 * (build them into the duration); no health-insurance billing and no competitor names.
 */
export const MASSAGE_STUDIOS_GUIDE: GuideSet = {
  de: {
    kicker: 'Leitfaden für Massagestudios',
    title: ['Online buchbar, ohne Telefon:', 'so richten Sie Ihr Massagestudio ein.'],
    intro:
      'Dieser Leitfaden richtet sich an Inhaberinnen und Inhaber von Massagestudios, Thai-Massage-Läden und Wellnesspraxen, deren Kundschaft selbst bezahlt. Er behandelt Behandlungen und Puffer, Anzahlungen gegen No-Shows, 10er-Karten und Gutscheine, weniger Telefon während der Behandlung und die Auswahl einer Buchungssoftware.',
    tocLabel: 'Inhalt',
    sections: [
      {
        id: 'treatments-buffers',
        heading: 'Behandlungen und Pufferzeiten anlegen',
        paragraphs: [
          'Legen Sie jede Behandlung mit fester Dauer und festem Preis an: „Thai-Massage 60 Min., 59 €“ und „Thai-Massage 90 Min., 79 €“ statt „Thai-Massage ab 59 €“. Kundschaft und KI-Assistenten können nur buchen, was eindeutig ist.',
          'Nach jeder Massage brauchen Sie Zeit für frische Wäsche, Lüften und ein Glas Wasser für den nächsten Gast, meist 10 bis 15 Minuten. Rechnen Sie diesen Puffer in die Dauer ein. Sonst laufen Sie ab dem dritten Termin des Tages hinterher.',
          'Ordnen Sie jeder Therapeutin nur die Behandlungen zu, die sie anbietet. Wer keine Hot-Stone-Ausbildung hat, erscheint dort nicht. Im Kassenkalender von Zenno hat jede Therapeutin eine eigene Spalte.',
        ],
        bullets: [
          'Feste Preise je Dauer statt „ab“-Preisen',
          'Puffer von 10 bis 15 Minuten in die Dauer einrechnen',
          'Behandlungen nur den Therapeutinnen zuordnen, die sie anbieten',
          'Leistungsnamen, nach denen Kundschaft auch sucht',
        ],
      },
      {
        id: 'deposits',
        heading: 'Anzahlungen gegen No-Shows',
        paragraphs: [
          'Ein leerer 90-Minuten-Termin am Samstagnachmittag kostet Sie den vollen Preis, denn so kurzfristig bucht ihn kaum jemand nach. Für lange Behandlungen, Paarmassagen und Wochenendtermine ist eine Anzahlung von 20 bis 30 € üblich, die auf den Preis angerechnet wird.',
          'Für kurze Termine unter der Woche reicht oft eine hinterlegte Karte mit Gebühr bei Nichterscheinen oder später Absage. Schreiben Sie die Regel klar in die Buchungsbestätigung, etwa: kostenlos stornierbar bis 24 Stunden vorher. Lassen Sie die Formulierung in Ihren AGB anwaltlich prüfen.',
          'In Zenno legen Sie je Behandlung fest, ob eine Anzahlung, der volle Preis oder nur die hinterlegte Karte fällig wird. Bezahlt wird über Stripe, per Karte oder PayPal, oder vor Ort.',
        ],
      },
      {
        id: 'passes-vouchers',
        heading: '10er-Karten und Gutscheine',
        paragraphs: [
          'Mehrfachkarten binden Stammkundschaft: Wer eine 10er-Karte für Rücken-Nacken-Massagen kauft, kommt wieder und bucht seltener woanders. Ein kleiner Preisvorteil, etwa zehn Besuche zum Preis von neun, reicht meist.',
          'Massagen sind außerdem ein beliebtes Geschenk, vor allem vor Weihnachten, zum Valentinstag und zum Muttertag. Bieten Sie Wertgutscheine und Leistungsgutscheine wie „Hot Stone 90 Minuten“ an und weisen Sie etwa zwei Wochen vor jedem Anlass darauf hin. Gutscheine verjähren in Deutschland grundsätzlich nach drei Jahren; klären Sie Fristen und Umsatzsteuer mit Ihrer Steuerberatung.',
          'Mit Zenno verkaufen Sie Wertgutscheine, Gutscheinsets und Mehrfachkarten online, am Empfang oder über die KI-Rezeption und lösen sie per QR-Code ein.',
        ],
      },
      {
        id: 'phone-free',
        heading: 'Weniger Telefon während der Behandlung',
        paragraphs: [
          'Die meisten Anrufe drehen sich um drei Fragen: Wann ist frei, was kostet das, kann ich verschieben? Eine Buchungsseite mit echten freien Zeiten beantwortet alle drei. Setzen Sie den Link ins Google-Unternehmensprofil, in die Instagram-Bio und auf Ihre Website, und ändern Sie die Mailbox-Ansage auf „Termine buchen Sie rund um die Uhr online oder per WhatsApp“.',
          'Die KI-Rezeption von Zenno nimmt keine Anrufe an. Sie antwortet auf WhatsApp mit Ihrer eigenen Nummer, per E-Mail und im Website-Chat, nutzt nur Ihre Preise, Zeiten und Angebote und bucht echte freie Termine. Fragen zu Gesundheit, Schwangerschaft oder Beschwerden gibt sie an Sie weiter. Im Entwurfsmodus geben Sie anfangs jede Antwort selbst frei.',
        ],
      },
      {
        id: 'choose-software',
        heading: 'Worauf Sie bei einer Buchungssoftware achten sollten',
        paragraphs: [
          'Prüfen Sie vor dem Wechsel, ob die Software zu Ihrem Alltag passt, und testen Sie sie mit echten Behandlungen, bevor Sie sich festlegen. Zenno können Sie im kostenlosen Tarif mit einer Therapeutin und fünf Behandlungen ohne Kreditkarte ausprobieren.',
          'Wenn Sie mit Krankenkassen abrechnen oder Heilmittelverordnungen verwalten, brauchen Sie eine Praxissoftware. Zenno ist für Betriebe gedacht, deren Kundschaft selbst bezahlt.',
        ],
        bullets: [
          'Kalender je Therapeutin mit eigenen Arbeitszeiten',
          'Anzahlung, Vorkasse oder hinterlegte Karte je Behandlung',
          'Mehrfachkarten und Gutscheine, online und am Empfang',
          'Erinnerungen per SMS und E-Mail, Stornolink für Gäste',
          'Keine Provision pro Buchung und eine Buchungsseite in Ihrem Namen',
          'Kassenbuch und Export für die Steuerberatung',
        ],
      },
    ],
  },
  en: {
    kicker: 'Guide for massage studios',
    title: ['Bookable online, without the phone:', 'how to set up your massage studio.'],
    intro:
      'This guide is for owners of massage studios, Thai massage shops and wellness practices whose clients pay themselves. It covers treatments and buffers, deposits against no-shows, ten-visit passes and gift cards, less phone time during treatments, and choosing booking software.',
    tocLabel: 'Contents',
    sections: [
      {
        id: 'treatments-buffers',
        heading: 'Setting up treatments and buffers',
        paragraphs: [
          'Add every treatment with a fixed duration and a fixed price: “Thai massage 60 min, €59” and “Thai massage 90 min, €79” rather than “Thai massage from €59”. Clients and AI assistants can only book what is unambiguous.',
          'After each massage you need time for fresh linen, airing the room and a glass of water for the next guest, usually 10 to 15 minutes. Build that buffer into the duration, or you’ll be running late from the third appointment of the day.',
          'Assign each therapist only the treatments they offer. Someone without hot-stone training won’t appear for it. In Zenno’s POS calendar each therapist has their own column.',
        ],
        bullets: [
          'Fixed prices per duration instead of “from” prices',
          'Build 10 to 15 minutes of buffer into the duration',
          'Assign treatments only to therapists who offer them',
          'Treatment names clients actually search for',
        ],
      },
      {
        id: 'deposits',
        heading: 'Deposits against no-shows',
        paragraphs: [
          'An empty 90-minute slot on a Saturday afternoon costs you the full price, because hardly anyone books it at such short notice. For long treatments, couples massages and weekend slots a deposit of €20 to €30, credited to the price, is common.',
          'For short weekday appointments a card on file with a fee for no-shows or late cancellations is often enough. State the rule clearly in the confirmation, for example: free cancellation up to 24 hours before. Have the wording in your terms checked by a lawyer.',
          'In Zenno you set per treatment whether a deposit, the full price or just a card on file is due. Payments run through Stripe, by card or PayPal, or at the venue.',
        ],
      },
      {
        id: 'passes-vouchers',
        heading: 'Ten-visit passes and gift cards',
        paragraphs: [
          'Multi-visit passes keep regulars: someone who buys a ten-visit pass for back and neck massages comes back and books elsewhere less often. A small price advantage, such as ten visits for the price of nine, is usually enough.',
          'Massages are also a popular gift, especially before Christmas, Valentine’s Day and Mother’s Day. Offer value vouchers and treatment vouchers such as “Hot stone 90 minutes”, and mention them about two weeks before each occasion. In Germany vouchers generally expire after three years; check terms and VAT with your tax advisor.',
          'With Zenno you sell value vouchers, voucher sets and multi-visit passes online, at the desk or through the AI receptionist, and redeem them by QR code.',
        ],
      },
      {
        id: 'phone-free',
        heading: 'Less phone time during treatments',
        paragraphs: [
          'Most calls are about three questions: when is it free, how much is it, can I move it? A booking page with real free times answers all three. Put the link on your Google Business Profile, Instagram bio and website, and change your voicemail to “book online or on WhatsApp, around the clock”.',
          'Zenno’s AI receptionist doesn’t take phone calls. It answers on WhatsApp with your own number, by email and in your website chat, uses only your prices, times and offers, and books real free slots. Questions about health, pregnancy or pain go to you. In draft mode you approve every reply yourself at first.',
        ],
      },
      {
        id: 'choose-software',
        heading: 'What to look for in booking software',
        paragraphs: [
          'Before switching, check that the software fits your day and test it with real treatments before committing. You can try Zenno on the free plan with one therapist and five treatments, without a credit card.',
          'If you bill health insurers or manage prescriptions, you need practice software. Zenno is for businesses whose clients pay themselves.',
        ],
        bullets: [
          'A calendar per therapist with their own working hours',
          'Deposit, prepayment or card on file per treatment',
          'Multi-visit passes and gift cards, online and at the desk',
          'SMS and email reminders, a cancel link for guests',
          'No commission per booking and a booking page in your name',
          'A cash book and an export for your tax advisor',
        ],
      },
    ],
  },
  th: {
    kicker: 'คู่มือสำหรับร้านนวด',
    title: ['จองออนไลน์ได้ ไม่ต้องรับโทรศัพท์', 'วิธีตั้งค่าร้านนวดของคุณ'],
    intro:
      'คู่มือนี้สำหรับเจ้าของร้านนวด ร้านนวดไทย และร้านเวลเนสที่ลูกค้าจ่ายเงินเอง ครอบคลุมการตั้งบริการและเวลาเผื่อ มัดจำป้องกันลูกค้าไม่มาตามนัด บัตร 10 ครั้งและบัตรของขวัญ การลดเวลารับโทรศัพท์ระหว่างนวด และการเลือกระบบจองคิว',
    tocLabel: 'เนื้อหา',
    sections: [
      {
        id: 'treatments-buffers',
        heading: 'ตั้งค่าบริการและเวลาเผื่อ',
        paragraphs: [
          'ตั้งทุกบริการให้มีระยะเวลาและราคาแน่นอน เช่น “นวดไทย 60 นาที €59” และ “นวดไทย 90 นาที €79” แทน “นวดไทยเริ่มต้น €59” ลูกค้าและผู้ช่วย AI จองได้เฉพาะสิ่งที่ชัดเจน',
          'หลังนวดแต่ละครั้งต้องใช้เวลาเปลี่ยนผ้า ระบายอากาศ และเตรียมน้ำให้ลูกค้าคนถัดไป ปกติ 10 ถึง 15 นาที ให้รวมเวลานี้ไว้ในระยะเวลาของบริการ ไม่อย่างนั้นตั้งแต่คิวที่สามของวันคุณจะเริ่มช้ากว่าเวลา',
          'กำหนดบริการให้หมอนวดแต่ละคนเฉพาะที่ทำได้จริง คนที่ไม่ได้เรียนนวดหินร้อนจะไม่แสดงในบริการนั้น ในปฏิทินหน้าร้านของ Zenno หมอนวดแต่ละคนมีคอลัมน์ของตัวเอง',
        ],
        bullets: [
          'ราคาตายตัวตามระยะเวลา แทนราคา “เริ่มต้น”',
          'รวมเวลาเผื่อ 10 ถึง 15 นาทีไว้ในระยะเวลา',
          'กำหนดบริการเฉพาะหมอนวดที่ทำได้',
          'ตั้งชื่อบริการตามที่ลูกค้าค้นหาจริง',
        ],
      },
      {
        id: 'deposits',
        heading: 'มัดจำป้องกันลูกค้าไม่มาตามนัด',
        paragraphs: [
          'คิว 90 นาทีที่ว่างในบ่ายวันเสาร์ทำให้คุณเสียรายได้เต็มจำนวน เพราะแทบไม่มีใครจองแทนได้ทัน สำหรับคอร์สยาว นวดคู่ และคิววันหยุด มัดจำ €20 ถึง €30 ที่หักจากราคาเป็นเรื่องปกติ',
          'สำหรับคิวสั้นในวันธรรมดา การผูกบัตรไว้พร้อมค่าธรรมเนียมเมื่อไม่มาหรือยกเลิกกระชั้นชิดมักเพียงพอ เขียนกฎให้ชัดในคำยืนยันการจอง เช่น ยกเลิกฟรีได้ถึง 24 ชั่วโมงก่อนนัด และให้ทนายตรวจถ้อยคำในเงื่อนไขการให้บริการ',
          'ใน Zenno คุณกำหนดได้ในแต่ละบริการว่าจะเก็บมัดจำ เต็มจำนวน หรือแค่ผูกบัตร การชำระเงินผ่าน Stripe ด้วยบัตรหรือ PayPal หรือจ่ายที่ร้าน',
        ],
      },
      {
        id: 'passes-vouchers',
        heading: 'บัตร 10 ครั้งและบัตรของขวัญ',
        paragraphs: [
          'บัตรหลายครั้งช่วยรักษาลูกค้าประจำ คนที่ซื้อบัตร 10 ครั้งสำหรับนวดหลังและคอจะกลับมาอีก และไปจองที่อื่นน้อยลง ส่วนลดเล็กน้อย เช่น 10 ครั้งในราคา 9 ครั้ง ก็มักเพียงพอ',
          'การนวดยังเป็นของขวัญยอดนิยม โดยเฉพาะก่อนคริสต์มาส วันวาเลนไทน์ และวันแม่ ให้มีทั้งบัตรมูลค่าและบัตรบริการ เช่น “หินร้อน 90 นาที” และประกาศราวสองสัปดาห์ก่อนแต่ละเทศกาล ในเยอรมนี บัตรของขวัญโดยทั่วไปหมดอายุหลังสามปี ควรถามเรื่องเงื่อนไขและภาษีกับที่ปรึกษาภาษี',
          'กับ Zenno คุณขายบัตรมูลค่า ชุดบัตรของขวัญ และบัตรหลายครั้งได้ทั้งออนไลน์ ที่หน้าร้าน หรือผ่านพนักงานต้อนรับ AI และใช้บัตรด้วย QR code',
        ],
      },
      {
        id: 'phone-free',
        heading: 'ลดเวลารับโทรศัพท์ระหว่างนวด',
        paragraphs: [
          'สายส่วนใหญ่ถามแค่สามเรื่อง ว่างเมื่อไร ราคาเท่าไร และขอเลื่อนได้ไหม หน้าจองที่แสดงเวลาว่างจริงตอบได้ทั้งสามเรื่อง ใส่ลิงก์ไว้ใน Google Business Profile, bio ของ Instagram และเว็บไซต์ แล้วเปลี่ยนข้อความฝากเสียงเป็น “จองออนไลน์หรือทาง WhatsApp ได้ตลอดเวลา”',
          'พนักงานต้อนรับ AI ของ Zenno ไม่รับสายโทรศัพท์ แต่ตอบทาง WhatsApp ด้วยเบอร์ของคุณเอง ทางอีเมล และแชทบนเว็บไซต์ ใช้เฉพาะราคา เวลา และโปรของคุณ และจองเฉพาะเวลาที่ว่างจริง คำถามเรื่องสุขภาพ การตั้งครรภ์ หรืออาการปวดจะส่งต่อให้คุณ ช่วงแรกใช้โหมดร่างเพื่ออนุมัติทุกคำตอบเองได้',
        ],
      },
      {
        id: 'choose-software',
        heading: 'สิ่งที่ควรดูในระบบจองคิว',
        paragraphs: [
          'ก่อนเปลี่ยนระบบ ตรวจดูว่าเข้ากับงานประจำวันของคุณไหม และทดลองกับบริการจริงก่อนตัดสินใจ คุณลองใช้ Zenno ได้ในแพ็กเกจฟรี กับหมอนวด 1 คนและบริการ 5 รายการ โดยไม่ต้องใช้บัตรเครดิต',
          'หากคุณต้องเบิกกับประกันสุขภาพหรือจัดการใบสั่งแพทย์ คุณต้องใช้ซอฟต์แวร์สำหรับคลินิก Zenno เหมาะกับธุรกิจที่ลูกค้าจ่ายเงินเอง',
        ],
        bullets: [
          'ปฏิทินแยกตามหมอนวด พร้อมเวลาทำงานของแต่ละคน',
          'มัดจำ จ่ายล่วงหน้า หรือผูกบัตร แยกตามบริการ',
          'บัตรหลายครั้งและบัตรของขวัญ ทั้งออนไลน์และหน้าร้าน',
          'แจ้งเตือนทาง SMS และอีเมล พร้อมลิงก์ยกเลิกสำหรับลูกค้า',
          'ไม่มีค่าคอมมิชชั่นต่อการจอง และหน้าจองในชื่อของคุณ',
          'สมุดเงินสดและไฟล์ส่งออกให้ที่ปรึกษาภาษี',
        ],
      },
    ],
  },
}
