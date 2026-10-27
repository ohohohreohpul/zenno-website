import type { GuideSet } from './types'

/**
 * Practical guide for hair salons, beauty and nail studios, massage studios and spas.
 * Buffer and processing times are handled as advice (build them into the duration,
 * fill gaps by hand in the POS calendar); no automatic processing-time feature is claimed.
 * No competitor names and no marketplace commission figures.
 */
export const SALONS_SPAS_GUIDE: GuideSet = {
  de: {
    kicker: 'Leitfaden für Salons und Spas',
    title: ['Anzahlung, Kalender, Gutscheine:', 'der Salonalltag, sauber geregelt.'],
    intro:
      'Dieser Leitfaden richtet sich an Inhaberinnen und Inhaber von Friseursalons, Kosmetik- und Nagelstudios, Massagepraxen und Day Spas. Er behandelt Anzahlungen für lange Termine, Teamkalender mit Puffer- und Einwirkzeiten, weniger Telefon am Stuhl, das Gutscheinjahr, KI-Assistenten, die Frage nach eigener Seite oder Marktplatz und eine Checkliste für den Wechsel.',
    tocLabel: 'Inhalt',
    sections: [
      {
        id: 'deposits',
        heading: 'Anzahlungen für lange Termine',
        paragraphs: [
          'Eine Balayage mit Schnitt dauert gut drei Stunden und kostet schnell 190 €. Erscheint die Kundin am Samstag um 10:00 Uhr nicht, ist der halbe Tag Ihrer Coloristin verloren, und am Samstag lässt sich so ein Block kaum kurzfristig füllen. Für solche Termine ist eine Anzahlung von 40 bis 60 € üblich, die später auf den Preis angerechnet wird. Bei Extensions, für die Sie Haare im Wert von 300 € individuell bestellen, verlangen viele Salons die Materialkosten vorab.',
          'Kurze Leistungen brauchen meist keine Anzahlung. Wer für einen Herrenschnitt zu 35 € vorab zahlen soll, bucht im Zweifel woanders. Hier reicht eine hinterlegte Karte mit Gebühr bei Nichterscheinen. Schreiben Sie klar dazu, was mit der Anzahlung bei einer Absage passiert: zum Beispiel bis 48 Stunden vorher übertragbar auf einen neuen Termin, danach einbehalten. Lassen Sie diese Regel in Ihren AGB anwaltlich prüfen.',
          'In Zenno legen Sie fest, ob bei der Buchung eine Anzahlung, der volle Preis oder nur die hinterlegte Karte fällig wird. Bezahlt wird über Stripe.',
        ],
        bullets: [
          'Farbe und Balayage: Anzahlung, angerechnet auf den Preis',
          'Extensions: Materialkosten vorab, bevor Sie bestellen',
          'Spa-Pakete über 90 Minuten oder Paarbehandlungen am Wochenende: Anzahlung oder voller Preis',
          'Schnitt, Maniküre, Brauen: hinterlegte Karte mit No-Show-Gebühr',
        ],
      },
      {
        id: 'staff-buffer',
        heading: 'Teamkalender, Pufferzeiten und Einwirkzeiten',
        paragraphs: [
          'Jede Fachkraft bekommt ihre eigenen Arbeitszeiten und nur die Leistungen, die sie wirklich anbietet. Ihre Auszubildende im zweiten Jahr schneidet vielleicht schon, übernimmt aber keine Farbkorrektur. Kundschaft bucht dann gezielt bei einer Person oder nimmt die erste freie. Im Kassenkalender von Zenno hat jede Fachkraft eine eigene Spalte, und Sie sehen morgens, wo es eng wird.',
          'Puffer gehören in die Dauer der Leistung. Nach einer Maniküre brauchen Sie etwa zehn Minuten zum Desinfizieren und Aufräumen, nach einer Massage eine Viertelstunde für frische Wäsche und Lüften. Legen Sie die Maniküre also mit 55 Minuten an, wenn die Behandlung selbst 45 Minuten dauert. Sonst laufen Sie ab dem dritten Termin der Uhr hinterher.',
          'Einwirkzeiten sind der heikle Teil. Während die Farbe 35 Minuten wirkt, könnte die Stylistin einen Kinderhaarschnitt oder Augenbrauen dazwischenschieben. Online buchen Sie die Farbe am besten als festen Block, damit kein System Termine übereinander stapelt. Kurze Leistungen für die Wartezeit tragen Sie am Empfang selbst im Kassenkalender ein, wenn Sie sehen, dass es passt.',
        ],
      },
      {
        id: 'phone-time',
        heading: 'Weniger Telefon am Stuhl',
        paragraphs: [
          'Das Telefon klingelt meist genau dann, wenn die Folien im Haar sind. Handschuhe aus, Hände waschen, zwei Minuten Gespräch, Handschuhe wieder an: Das passiert an einem vollen Samstag schnell zehnmal. Die meisten Anrufe drehen sich um drei Fragen. Wann ist frei, was kostet das, und kann ich verschieben? Alle drei beantwortet eine gute Buchungsseite.',
          'Setzen Sie den Buchungslink überall dorthin, wo Kundschaft nach Ihnen sucht: Google-Unternehmensprofil, Instagram-Bio, Website. Ändern Sie die Ansage auf dem Anrufbeantworter, etwa so: „Termine buchen Sie rund um die Uhr auf unserer Website oder schreiben uns auf WhatsApp.“ Zum Verschieben nutzt die Kundschaft den Link in der Bestätigung und das Kundenportal.',
          'Die KI-Rezeption von Zenno nimmt keine Anrufe an. Sie antwortet auf WhatsApp mit Ihrer eigenen Nummer, per E-Mail und im Website-Chat, kennt Ihre Preise und freien Zeiten aus der App und bucht nur echte freie Termine. Beschwerden landen als „Braucht Sie“ bei Ihnen. In den ersten Wochen können Sie im Entwurfsmodus jede Antwort selbst freigeben, bis Sie dem Ton vertrauen.',
        ],
      },
      {
        id: 'vouchers-year',
        heading: 'Gutscheine durch das Jahr',
        paragraphs: [
          'Gutscheine verkaufen sich in Wellen. Vor Weihnachten beginnt die Nachfrage Mitte November und wird in der letzten Woche vor dem 24. Dezember am größten. Valentinstag im Februar, Muttertag am zweiten Sonntag im Mai und Geburtstage übers ganze Jahr kommen dazu. Weisen Sie etwa zwei Wochen vor jedem Anlass auf Instagram und am Empfang darauf hin. Wer am Samstagabend vor Muttertag noch ein Geschenk sucht, kauft online, wenn der Salon längst zu ist.',
          'Bieten Sie zwei Arten an: Wertgutscheine zu 50, 75 und 100 € und Leistungsgutscheine wie „Hot Stone 90 Minuten“. Beim Leistungsgutschein sollten Sie vorher entscheiden, was passiert, wenn der Preis bis zur Einlösung steigt. Gutscheine verjähren in Deutschland grundsätzlich nach drei Jahren, kürzere Fristen sind heikel. Klären Sie die Formulierung mit einer Anwältin oder einem Anwalt und die umsatzsteuerliche Behandlung mit Ihrer Steuerberatung.',
          'Mit Zenno verkaufen Sie Gutscheine online und am Empfang und lösen sie per QR-Code ein. Stammkundschaft sammelt zusätzlich Treuepunkte.',
        ],
        bullets: [
          'Mitte November: Weihnachtsgutscheine sichtbar machen',
          'Ende Januar: Valentinstag ankündigen',
          'Mitte April: Muttertag vorbereiten',
          'Ganzjährig: Gutschein-Link in der Instagram-Bio für Geburtstage',
        ],
      },
      {
        id: 'ai-bookable',
        heading: 'Buchbar für KI-Assistenten',
        paragraphs: [
          'Ein KI-Assistent kann „Damenhaarschnitt ab 49 €, Preis nach Aufwand“ nicht buchen, weil er weder Dauer noch Endpreis kennt. Teilen Sie solche Leistungen auf, zum Beispiel nach Haarlänge: kurz, schulterlang, lang, jeweils mit festem Preis und fester Dauer. Bei Farbe gilt dasselbe. „Balayage schulterlang inkl. Schnitt, 3 Std., 190 €“ ist für Mensch und Maschine verständlich, „Colour Magic“ ist es nicht.',
          'Ihre Zenno-Seite stellt Leistungen, Preise und freie Zeiten in einem Format bereit, das ChatGPT, Perplexity und Google lesen, und nimmt Buchungen ohne Anruf an. Damit ist Ihr Salon bereit, von KI-Assistenten gebucht zu werden. Sie legen fest, ob solche Buchungen automatisch angenommen werden oder auf Ihre Bestätigung warten. Wie oft ein Assistent Sie empfiehlt, entscheidet der jeweilige Anbieter, das kann niemand garantieren.',
        ],
        bullets: [
          'Leistungsnamen, die Kundschaft auch googeln würde',
          'Feste Preise statt „ab“-Preisen, notfalls in Varianten aufgeteilt',
          'Realistische Dauer inklusive Puffer',
          'Fachkräfte mit aktuellen Arbeitszeiten',
          'Eine eigene Buchungsseite mit Salonname und Adresse',
        ],
      },
      {
        id: 'own-page-marketplace',
        heading: 'Eigene Buchungsseite oder Marktplatz',
        paragraphs: [
          'Ein Marktplatz bringt Sichtbarkeit bei Menschen, die Sie noch nicht kennen. Dafür steht Ihr Profil direkt neben den Salons aus der Nachbarschaft, und der Kontakt zur Kundschaft läuft über die Plattform. Lesen Sie den Vertrag genau: Fällt Provision auch an, wenn Ihre Stammkundin zum zwölften Mal über die Plattform bucht? Wem gehören die Kontaktdaten? Was passiert mit Ihren Bewertungen, wenn Sie kündigen?',
          'Auf der eigenen Buchungsseite bucht die Kundschaft in Ihrem Namen und mit Ihrem Logo, und die Kundendaten bleiben bei Ihnen. Den Weg dorthin müssen Sie selbst bauen, über Google-Profil, Instagram, Empfehlungen und KI-Assistenten. Manche Salons nutzen beides und bitten neue Kundschaft beim ersten Besuch, den nächsten Termin direkt über den eigenen Link zu buchen. Bei Zenno fällt auf Buchungen keine Provision an.',
        ],
      },
      {
        id: 'switching',
        heading: 'Checkliste für den Wechsel',
        paragraphs: [
          'Planen Sie den Umstieg außerhalb der Wochen vor Weihnachten und vor Ostern. Rechnen Sie mit zwei Wochen, in denen alte und neue Wege parallel laufen. Der wichtigste Schritt ist der erste: Jeder Termin, der schon vereinbart ist, muss im neuen Kalender stehen, bevor Sie den alten abschalten.',
        ],
        bullets: [
          'Leistungen mit Dauer, Preis und Fachkraft anlegen, Puffer eingerechnet',
          'Arbeitszeiten und Urlaube des Teams eintragen',
          'Alle bereits vereinbarten Termine übertragen',
          'Offene Gutscheine aus dem alten System auflisten',
          'Anzahlungsregeln je Leistung festlegen und in die AGB schreiben',
          'Kundendaten nur übernehmen, wenn der Datenschutz geklärt ist',
          'Buchungslink in Google-Profil, Instagram-Bio und Website setzen',
          'Ansage auf dem Anrufbeantworter ändern',
          'Stammkundschaft beim nächsten Besuch auf den neuen Link hinweisen',
          'Das alte System erst kündigen, wenn nichts mehr offen ist',
        ],
      },
    ],
  },
  en: {
    kicker: 'A guide for salons and spas',
    title: ['Deposits, calendars, gift cards:', 'the salon day, properly sorted.'],
    intro:
      'This guide is for owners of hair salons, beauty and nail studios, massage studios and day spas. It covers deposits for long appointments, team calendars with buffer and processing times, less phone time at the chair, the gift-card year, AI assistants, the choice between your own page and a marketplace, and a checklist for switching.',
    tocLabel: 'Contents',
    sections: [
      {
        id: 'deposits',
        heading: 'Deposits for long appointments',
        paragraphs: [
          'A balayage with a cut takes a good three hours and easily costs €190. If the client doesn’t turn up at 10:00 on Saturday, half of your colourist’s day is gone, and a block like that is hard to fill at short notice on a Saturday. For these appointments a deposit of €40 to €60 is common, credited against the final price. For extensions where you order €300 of hair for one client, many salons take the cost of the hair up front.',
          'Short services rarely need a deposit. Ask someone to prepay a €35 men’s cut and they may well book elsewhere. A card on file with a no-show fee does the job there. Spell out what happens to a deposit when someone cancels: for example, transferable to a new date up to 48 hours before, kept after that. Have a lawyer check that rule in your terms.',
          'In Zenno you choose whether booking requires a deposit, the full price or just a card on file. Payments run through Stripe.',
        ],
        bullets: [
          'Colour and balayage: a deposit credited against the price',
          'Extensions: material cost up front, before you order',
          'Spa packages over 90 minutes or weekend couples’ treatments: deposit or full price',
          'Cuts, manicures, brows: card on file with a no-show fee',
        ],
      },
      {
        id: 'staff-buffer',
        heading: 'Staff calendars, buffer and processing times',
        paragraphs: [
          'Each specialist gets their own working hours and only the services they actually offer. Your second-year apprentice may already cut but won’t take a colour correction. Clients then book a specific person or take the first one free. In the Zenno POS calendar every specialist has their own column, and in the morning you can see where the day gets tight.',
          'Buffers belong in the service duration. After a manicure you need about ten minutes to disinfect and tidy up, after a massage a quarter of an hour for fresh linen and airing the room. So set the manicure to 55 minutes if the treatment itself takes 45. Otherwise you are chasing the clock from the third appointment on.',
          'Processing time is the tricky part. While colour develops for 35 minutes, the stylist could fit in a child’s cut or a brow shape. Online, book the colour as one fixed block so appointments never stack on top of each other. Add short services for the waiting time yourself in the POS calendar at reception when you can see it fits.',
        ],
      },
      {
        id: 'phone-time',
        heading: 'Cutting phone time at the chair',
        paragraphs: [
          'The phone tends to ring exactly when the foils are in. Gloves off, wash hands, two minutes on the phone, gloves back on: on a full Saturday that easily happens ten times. Most calls come down to three questions. When are you free, what does it cost, and can I move my appointment? A good booking page answers all three.',
          'Put the booking link everywhere clients look for you: your Google Business Profile, Instagram bio and website. Change your voicemail to something like: “You can book any time on our website or message us on WhatsApp.” To reschedule, clients use the link in their confirmation and the client portal.',
          'The Zenno AI receptionist doesn’t take phone calls. It replies on WhatsApp with your own number, by email and in your website chat, knows your prices and free times from the app and only books real free slots. Complaints come to you as “Needs you”. In the first weeks you can use draft mode and approve every reply yourself until you trust the tone.',
        ],
      },
      {
        id: 'vouchers-year',
        heading: 'Gift cards through the year',
        paragraphs: [
          'Gift cards sell in waves. Before Christmas, demand starts in mid-November and peaks in the last week before 24 December. Valentine’s Day in February, Mother’s Day on the second Sunday in May and birthdays all year come on top. Mention it on Instagram and at reception about two weeks before each date. Someone looking for a present on the Saturday evening before Mother’s Day buys online long after you’ve closed.',
          'Offer two kinds: value cards at €50, €75 and €100, and service cards such as “Hot stone, 90 minutes”. With service cards, decide beforehand what happens if the price goes up before redemption. In Germany gift cards generally expire after three years, and shorter terms are risky. Check the wording with a lawyer and the VAT treatment with your tax advisor.',
          'With Zenno you sell gift cards online and at the counter and redeem them by QR code. Regulars also collect loyalty points.',
        ],
        bullets: [
          'Mid-November: make Christmas gift cards visible',
          'End of January: announce Valentine’s Day',
          'Mid-April: prepare for Mother’s Day',
          'All year: gift card link in your Instagram bio for birthdays',
        ],
      },
      {
        id: 'ai-bookable',
        heading: 'Being bookable by AI assistants',
        paragraphs: [
          'An AI assistant can’t book “Women’s cut from €49, price depends on effort”, because it knows neither the duration nor the final price. Split services like that, for example by hair length: short, shoulder length, long, each with a fixed price and duration. Colour works the same way. “Balayage, shoulder length, incl. cut, 3 hrs, €190” makes sense to a person and a machine, and “Colour Magic” doesn’t.',
          'Your Zenno page publishes services, prices and free times in a format ChatGPT, Perplexity and Google read, and it accepts bookings without a phone call. That makes your salon ready for AI assistants to book you. You decide whether those bookings are accepted automatically or wait for your approval. How often an assistant recommends you is up to the company behind it, and nobody can promise that.',
        ],
        bullets: [
          'Service names clients would actually search for',
          'Fixed prices instead of “from” prices, split into variants if needed',
          'Realistic durations including buffer',
          'Specialists with up-to-date working hours',
          'Your own booking page with salon name and address',
        ],
      },
      {
        id: 'own-page-marketplace',
        heading: 'Your own booking page or a marketplace',
        paragraphs: [
          'A marketplace gives you visibility with people who don’t know you yet. In return your profile sits right next to the salons down the street, and contact with clients runs through the platform. Read the contract closely. Is commission charged when your regular books through the platform for the twelfth time? Who owns the contact details? What happens to your reviews if you leave?',
          'On your own booking page clients book in your name and with your logo, and the client data stays with you. You have to build the way there yourself, through your Google profile, Instagram, recommendations and AI assistants. Some salons use both and ask new clients at their first visit to book the next appointment through their own link. Zenno charges no commission on bookings.',
        ],
      },
      {
        id: 'switching',
        heading: 'Checklist for switching',
        paragraphs: [
          'Plan the switch outside the weeks before Christmas and Easter. Expect two weeks in which old and new channels run side by side. The most important step comes first: every appointment that is already agreed has to be in the new calendar before you turn the old one off.',
        ],
        bullets: [
          'Add services with duration, price and specialist, buffer included',
          'Enter the team’s working hours and holidays',
          'Transfer every appointment already agreed',
          'List open gift cards from the old system',
          'Set deposit rules per service and add them to your terms',
          'Only move client data over once data protection is cleared',
          'Add the booking link to your Google profile, Instagram bio and website',
          'Change your voicemail message',
          'Point regulars to the new link at their next visit',
          'Cancel the old system only when nothing is left open',
        ],
      },
    ],
  },
  th: {
    kicker: 'คู่มือสำหรับซาลอนและสปา',
    title: ['มัดจำ ปฏิทินทีม บัตรของขวัญ', 'จัดงานในร้านให้เป็นระบบ'],
    intro:
      'คู่มือนี้เขียนสำหรับเจ้าของร้านทำผม ร้านเสริมสวย ร้านทำเล็บ ร้านนวด และเดย์สปาในเยอรมนี เนื้อหาครอบคลุมการเก็บมัดจำสำหรับนัดยาว ปฏิทินทีมพร้อมเวลาเผื่อและเวลารอสี การลดเวลาคุยโทรศัพท์ระหว่างทำงาน บัตรของขวัญตลอดปี ผู้ช่วย AI การเลือกระหว่างหน้าจองของตัวเองกับแพลตฟอร์มตัวกลาง และเช็กลิสต์สำหรับการเปลี่ยนระบบ',
    tocLabel: 'สารบัญ',
    sections: [
      {
        id: 'deposits',
        heading: 'มัดจำสำหรับนัดยาว',
        paragraphs: [
          'บาลายาจพร้อมตัดผมใช้เวลาราวสามชั่วโมง ราคาก็ถึง €190 ได้ง่ายๆ ถ้าลูกค้าไม่มาตอน 10:00 วันเสาร์ ครึ่งวันของช่างทำสีก็หายไป และวันเสาร์แทบหาคนมาแทนในเวลากระชั้นไม่ได้ สำหรับนัดแบบนี้ มัดจำ €40 ถึง €60 ที่หักจากราคาจริงตอนจ่ายถือเป็นเรื่องปกติ ส่วนงานต่อผมที่ต้องสั่งผมเฉพาะลูกค้าราคา €300 หลายร้านเก็บค่าวัสดุก่อนสั่ง',
          'บริการสั้นๆ ส่วนใหญ่ไม่ต้องมีมัดจำ ถ้าให้ลูกค้าจ่ายล่วงหน้าค่าตัดผมชาย €35 เขาอาจไปจองร้านอื่นแทน กรณีนี้ใช้การบันทึกบัตรพร้อมค่าธรรมเนียมเมื่อไม่มาก็พอ เขียนให้ชัดว่าเงินมัดจำจะเป็นอย่างไรเมื่อยกเลิก เช่น เลื่อนไปนัดใหม่ได้ถ้าแจ้งก่อน 48 ชั่วโมง หลังจากนั้นร้านเก็บไว้ และควรให้ทนายตรวจกฎนี้ในเงื่อนไขการให้บริการ (AGB)',
          'ใน Zenno คุณกำหนดได้ว่าตอนจองต้องจ่ายมัดจำ จ่ายเต็มราคา หรือแค่บันทึกบัตร การชำระเงินทำผ่าน Stripe',
        ],
        bullets: [
          'ทำสีและบาลายาจ: มัดจำที่หักจากราคาจริง',
          'ต่อผม: เก็บค่าวัสดุก่อนสั่งของ',
          'แพ็กเกจสปาเกิน 90 นาทีหรือทรีตเมนต์คู่ช่วงสุดสัปดาห์: มัดจำหรือเต็มราคา',
          'ตัดผม ทำเล็บ แต่งคิ้ว: บันทึกบัตรพร้อมค่าธรรมเนียมเมื่อไม่มา',
        ],
      },
      {
        id: 'staff-buffer',
        heading: 'ปฏิทินพนักงาน เวลาเผื่อ และเวลารอสี',
        paragraphs: [
          'ช่างแต่ละคนมีเวลาทำงานของตัวเอง และมีเฉพาะบริการที่ทำจริง เด็กฝึกงานปีสองอาจตัดผมได้แล้ว แต่ยังไม่รับงานแก้สี ลูกค้าเลือกจองกับช่างที่ต้องการหรือคนแรกที่ว่าง ในปฏิทินหน้าร้านของ Zenno ช่างแต่ละคนมีคอลัมน์ของตัวเอง ตอนเช้าคุณเห็นได้ทันทีว่าช่วงไหนจะแน่น',
          'เวลาเผื่อควรรวมอยู่ในระยะเวลาของบริการ หลังทำเล็บต้องใช้ราวสิบนาทีฆ่าเชื้อและเก็บโต๊ะ หลังนวดต้องใช้สิบห้านาทีเปลี่ยนผ้าและระบายอากาศ ถ้าตัวบริการทำเล็บใช้ 45 นาที ก็ตั้งไว้ 55 นาที ไม่อย่างนั้นตั้งแต่นัดที่สามคุณจะเริ่มช้ากว่าเวลา',
          'เวลารอสีเป็นเรื่องที่ต้องระวัง ระหว่างรอสีขึ้น 35 นาที ช่างอาจแทรกตัดผมเด็กหรือแต่งคิ้วได้ แต่สำหรับการจองออนไลน์ ให้จองงานทำสีเป็นช่วงเวลาเดียวต่อเนื่อง เพื่อไม่ให้นัดซ้อนกัน ส่วนบริการสั้นๆ ที่จะแทรกช่วงรอ ให้คุณลงเองที่หน้าเคาน์เตอร์ในปฏิทินหน้าร้าน เมื่อเห็นว่าเวลาพอดี',
        ],
      },
      {
        id: 'phone-time',
        heading: 'ลดเวลาคุยโทรศัพท์ระหว่างทำงาน',
        paragraphs: [
          'โทรศัพท์มักดังตอนที่ฟอยล์อยู่บนหัวลูกค้าพอดี ถอดถุงมือ ล้างมือ คุยสองนาที แล้วใส่ถุงมือใหม่ วันเสาร์ที่คิวแน่นอาจเป็นแบบนี้สิบครั้ง สายส่วนใหญ่ถามแค่สามเรื่อง ว่างเมื่อไร ราคาเท่าไร และขอเลื่อนนัดได้ไหม หน้าจองที่ดีตอบได้ทั้งสามเรื่อง',
          'ใส่ลิงก์จองไว้ทุกที่ที่ลูกค้าจะหาคุณเจอ ทั้ง Google Business Profile, bio ของ Instagram และเว็บไซต์ เปลี่ยนข้อความฝากเสียงเป็นประมาณว่า “จองคิวได้ตลอดเวลาบนเว็บไซต์ของเรา หรือส่งข้อความหาเราทาง WhatsApp” ถ้าลูกค้าอยากเลื่อนนัด ก็ใช้ลิงก์ในคำยืนยันและพอร์ทัลลูกค้า',
          'พนักงานต้อนรับ AI ของ Zenno ไม่รับสายโทรศัพท์ แต่ตอบทาง WhatsApp ด้วยเบอร์ของคุณเอง ทางอีเมล และแชทบนเว็บไซต์ รู้ราคาและเวลาว่างจากแอป และจองเฉพาะเวลาที่ว่างจริง เรื่องร้องเรียนจะส่งถึงคุณในหมวด “ต้องการคุณ” ช่วงสัปดาห์แรกๆ ใช้โหมดร่างได้ คุณอนุมัติทุกคำตอบเองจนกว่าจะมั่นใจในน้ำเสียงของมัน',
        ],
      },
      {
        id: 'vouchers-year',
        heading: 'บัตรของขวัญตลอดทั้งปี',
        paragraphs: [
          'บัตรของขวัญขายดีเป็นช่วงๆ ก่อนคริสต์มาส คนเริ่มซื้อกลางเดือนพฤศจิกายน และซื้อมากที่สุดในสัปดาห์สุดท้ายก่อนวันที่ 24 ธันวาคม นอกจากนี้ยังมีวันวาเลนไทน์ในเดือนกุมภาพันธ์ วันแม่ของเยอรมนีซึ่งตรงกับวันอาทิตย์ที่สองของเดือนพฤษภาคม และวันเกิดตลอดทั้งปี ประกาศบน Instagram และที่หน้าเคาน์เตอร์ราวสองสัปดาห์ก่อนแต่ละเทศกาล คนที่หาของขวัญตอนเย็นวันเสาร์ก่อนวันแม่จะซื้อออนไลน์ได้แม้ร้านปิดไปนานแล้ว',
          'ควรมีสองแบบ คือบัตรมูลค่า €50, €75 และ €100 กับบัตรบริการ เช่น “นวดหินร้อน 90 นาที” สำหรับบัตรบริการ ให้ตัดสินใจไว้ก่อนว่าถ้าราคาขึ้นก่อนลูกค้ามาใช้จะทำอย่างไร ในเยอรมนี บัตรของขวัญโดยทั่วไปหมดอายุตามกฎหมายหลังสามปี การกำหนดอายุสั้นกว่านั้นมีความเสี่ยง ควรให้ทนายตรวจถ้อยคำ และถามเรื่องภาษีมูลค่าเพิ่มกับที่ปรึกษาภาษี',
          'กับ Zenno คุณขายบัตรของขวัญได้ทั้งออนไลน์และที่หน้าร้าน และใช้บัตรด้วยการสแกน QR code ลูกค้าประจำยังสะสมแต้มได้อีกด้วย',
        ],
        bullets: [
          'กลางพฤศจิกายน: เริ่มโปรโมตบัตรของขวัญคริสต์มาส',
          'ปลายมกราคม: ประกาศเรื่องวาเลนไทน์',
          'กลางเมษายน: เตรียมสำหรับวันแม่',
          'ตลอดปี: ใส่ลิงก์บัตรของขวัญใน bio ของ Instagram สำหรับวันเกิด',
        ],
      },
      {
        id: 'ai-bookable',
        heading: 'ให้ผู้ช่วย AI จองร้านของคุณได้',
        paragraphs: [
          'ผู้ช่วย AI จองบริการแบบ “ตัดผมผู้หญิง เริ่มต้น €49 ราคาตามงาน” ไม่ได้ เพราะไม่รู้ทั้งระยะเวลาและราคาสุดท้าย ให้แยกบริการแบบนี้ออก เช่น ตามความยาวผม สั้น ประบ่า ยาว แต่ละแบบมีราคาและระยะเวลาที่แน่นอน งานทำสีก็เหมือนกัน “บาลายาจ ผมประบ่า รวมตัด 3 ชม. €190” ทั้งคนและเครื่องเข้าใจได้ แต่ “Colour Magic” ไม่มีใครเดาออก',
          'หน้า Zenno ของคุณเผยแพร่บริการ ราคา และเวลาว่างในรูปแบบที่ ChatGPT, Perplexity และ Google อ่านได้ และรับการจองได้โดยไม่ต้องโทร ร้านของคุณจึงพร้อมให้ผู้ช่วย AI จองได้ คุณเลือกเองว่าจะรับการจองเหล่านี้อัตโนมัติหรือรอให้คุณอนุมัติ ส่วนผู้ช่วย AI จะแนะนำร้านคุณบ่อยแค่ไหน ขึ้นอยู่กับบริษัทเจ้าของ AI ไม่มีใครรับประกันได้',
        ],
        bullets: [
          'ชื่อบริการแบบที่ลูกค้าจะพิมพ์ค้นหาจริง',
          'ราคาตายตัวแทนราคา “เริ่มต้น” ถ้าจำเป็นให้แยกเป็นหลายแบบ',
          'ระยะเวลาที่สมจริงและรวมเวลาเผื่อแล้ว',
          'ช่างพร้อมเวลาทำงานที่อัปเดตล่าสุด',
          'หน้าจองของร้านเองพร้อมชื่อร้านและที่อยู่',
        ],
      },
      {
        id: 'own-page-marketplace',
        heading: 'หน้าจองของตัวเอง หรือแพลตฟอร์มตัวกลาง',
        paragraphs: [
          'แพลตฟอร์มตัวกลางช่วยให้คนที่ยังไม่รู้จักคุณมองเห็นร้าน แต่โปรไฟล์ของคุณก็อยู่ติดกับร้านอื่นในละแวกเดียวกัน และการติดต่อกับลูกค้าต้องผ่านแพลตฟอร์ม อ่านสัญญาให้ละเอียด ถ้าลูกค้าประจำจองผ่านแพลตฟอร์มเป็นครั้งที่สิบสอง ยังต้องจ่ายค่าคอมมิชชั่นไหม ข้อมูลติดต่อลูกค้าเป็นของใคร และรีวิวของคุณจะเป็นอย่างไรถ้าเลิกใช้',
          'บนหน้าจองของตัวเอง ลูกค้าจองในชื่อและโลโก้ของคุณ ข้อมูลลูกค้าอยู่กับคุณ แต่คุณต้องสร้างทางให้ลูกค้ามาถึงเอง ผ่าน Google Profile, Instagram การบอกต่อ และผู้ช่วย AI บางร้านใช้ทั้งสองทาง และขอให้ลูกค้าใหม่จองนัดครั้งต่อไปผ่านลิงก์ของร้านตั้งแต่มาครั้งแรก Zenno ไม่เก็บค่าคอมมิชชั่นจากการจอง',
        ],
      },
      {
        id: 'switching',
        heading: 'เช็กลิสต์สำหรับการเปลี่ยนระบบ',
        paragraphs: [
          'วางแผนเปลี่ยนระบบนอกช่วงสัปดาห์ก่อนคริสต์มาสและอีสเตอร์ เผื่อเวลาไว้สองสัปดาห์ที่ช่องทางเก่าและใหม่ใช้ควบคู่กัน ขั้นตอนสำคัญที่สุดคือขั้นแรก ทุกนัดที่ตกลงไว้แล้วต้องอยู่ในปฏิทินใหม่ก่อนปิดระบบเก่า',
        ],
        bullets: [
          'เพิ่มบริการพร้อมระยะเวลา ราคา และช่าง โดยรวมเวลาเผื่อแล้ว',
          'ใส่เวลาทำงานและวันลาของทีม',
          'ย้ายนัดที่ตกลงไว้แล้วทั้งหมด',
          'ทำรายการบัตรของขวัญที่ยังไม่ได้ใช้จากระบบเก่า',
          'กำหนดกฎมัดจำตามบริการ และใส่ไว้ในเงื่อนไขการให้บริการ',
          'ย้ายข้อมูลลูกค้าเมื่อตรวจสอบเรื่องการคุ้มครองข้อมูลแล้วเท่านั้น',
          'ใส่ลิงก์จองใน Google Profile, bio ของ Instagram และเว็บไซต์',
          'เปลี่ยนข้อความฝากเสียง',
          'บอกลูกค้าประจำเรื่องลิงก์ใหม่เมื่อมาครั้งถัดไป',
          'ยกเลิกระบบเก่าเมื่อไม่มีอะไรค้างแล้ว',
        ],
      },
    ],
  },
}
