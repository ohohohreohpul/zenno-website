import type { GuideSet } from './types'

/**
 * Guide for the commission-free page. No marketplace is named and no commission
 * figures are given. Legal points (platform terms, data protection) are handed to
 * the owner's contract, the platform or a lawyer. AI wording stays at
 * "ready for AI assistants to book you".
 */
export const COMMISSION_FREE_GUIDE: GuideSet = {
  de: {
    kicker: 'Ratgeber Wechsel',
    title: ['Unabhängig buchen,', 'Schritt für Schritt.'],
    intro:
      'Viele Studios haben ihre ersten Online-Buchungen über einen Marktplatz bekommen. Irgendwann stellt sich die Frage, ob Wiederbuchungen nicht besser auf der eigenen Seite landen. Hier lesen Sie, was eine eigene Buchungsseite braucht, wie Sie bestehende Kundschaft mitnehmen und was Sie vor dem Wechsel prüfen sollten, damit im Kalender keine Lücke entsteht.',
    tocLabel: 'Inhalt',
    sections: [
      {
        id: 'marketplace-costs',
        heading: 'Was Provision und Listung für ein kleines Studio bedeuten',
        paragraphs: [
          'Ein Marktplatz bringt Sichtbarkeit, und für ein neues Studio kann das am Anfang helfen. Bezahlt wird sie meist mit einem Anteil an Buchungen, häufig bei Neukundschaft, manchmal zusätzlich mit Gebühren für Zahlungen oder eine bessere Platzierung. Was davon für Sie gilt, steht in Ihrem Vertrag. Legen Sie die Abrechnungen der letzten drei Monate einmal neben Ihre Terminliste, dann sehen Sie, welche Termine wie viel gekostet haben.',
          'Auf einem Marktplatz stehen Sie in einer Liste mit anderen Studios aus der Gegend. Eine Kundin, die Sie dort gefunden hat, sieht beim nächsten Besuch wieder Empfehlungen und Angebote anderer Anbieter. Die Gewohnheit, über die Plattform zu buchen, bleibt, auch wenn sie eigentlich nur zu Ihnen will.',
          'Prüfen Sie deshalb zuerst, ob Ihr Vertrag auch für Wiederbuchungen Gebühren vorsieht. Wenn ja, ist das die Stelle, an der sich ein eigener Buchungslink am schnellsten bemerkbar macht.',
        ],
      },
      {
        id: 'own-booking-page',
        heading: 'Was Ihre eigene Buchungsseite braucht',
        paragraphs: [
          'Eine Buchungsseite muss die Fragen beantworten, die sonst am Telefon gestellt werden. Was kostet eine Pediküre mit Lack? Wie lange dauert sie, wer macht sie, und muss ich vorher etwas bezahlen? Je weniger offen bleibt, desto eher bucht jemand um 23 Uhr, ohne auf eine Antwort von Ihnen zu warten.',
          'Schreiben Sie Leistungen so, wie Kundschaft sie sucht. „Klassische Gesichtsbehandlung, 60 Minuten, 75 €“ hilft mehr als ein Fantasiename ohne Preis. Zeigen Sie echte Fotos Ihres Teams, denn viele buchen lieber bei jemandem, dessen Gesicht sie schon kennen. Und formulieren Sie eine Stornoregel, die vor der Buchung sichtbar ist, etwa: kostenlos bis 24 Stunden vorher, danach 50 % des Preises.',
          'In Zenno legen Sie Leistungen mit Dauer, Preis und zuständiger Person an. Gebucht wird ohne Kundenkonto, und über das Kundenportal kann Kundschaft im Rahmen Ihrer Regel selbst verschieben oder absagen. Diese Punkte gehören auf jede Seite:',
        ],
        bullets: [
          'Alle Leistungen mit Dauer und Preis in Euro',
          'Echte Fotos vom Team und von den Räumen',
          'Die Stornoregel und, falls gewünscht, eine Anzahlung',
          'Adresse, Anfahrt und Öffnungszeiten',
        ],
      },
      {
        id: 'moving-clients',
        heading: 'Bestehende Kundschaft auf den eigenen Link holen',
        paragraphs: [
          'Ihr Buchungslink gehört überall dorthin, wo Kundschaft Sie heute schon findet. Fangen Sie mit den Kanälen an, die Sie selbst pflegen. Dort müssen Sie niemanden um Erlaubnis fragen.',
          'Am meisten bringt oft der Moment nach der Behandlung. Die Kundin ist zufrieden, steht an der Theke und möchte den nächsten Termin. Zeigen Sie auf den QR-Code und lassen Sie sie direkt auf dem Handy buchen, während Sie danebenstehen. Beim nächsten Mal weiß sie, wie es geht.',
          'Rechnen Sie mit einigen Wochen, bis sich das einspielt. Wer seit Jahren auf einem bestimmten Weg bucht, ändert das nicht nach einer einzigen Nachricht. Wiederholen Sie den Hinweis freundlich und ohne Druck. Diese Stellen sollten den Link tragen:',
        ],
        bullets: [
          'Instagram: Link in der Bio und ein angehefteter Beitrag „So buchen Sie ab jetzt“',
          'Google-Unternehmensprofil: Ihr Buchungslink als Termin- oder Website-Link',
          'WhatsApp-Status: Link regelmäßig teilen, besonders wenn kurzfristig etwas frei wird',
          'Quittungen und Terminkarten: Link oder QR-Code aufdrucken',
          'Theke: QR-Code gut sichtbar neben dem Kartenterminal',
        ],
      },
      {
        id: 'marketplace-clients',
        heading: 'Kundschaft vom Marktplatz fair behalten',
        paragraphs: [
          'Bei Kundschaft, die Sie über einen Marktplatz gewonnen haben, ist Vorsicht angebracht. Plattformen regeln in ihren Bedingungen oft, ob und wie Sie diese Personen direkt ansprechen dürfen, und manche untersagen, Kontaktdaten aus der Plattform für eigene Nachrichten zu nutzen. Lesen Sie Ihren Vertrag, bevor Sie etwas verschicken. Im Zweifel fragen Sie bei der Plattform oder einer Rechtsberatung nach.',
          'Im Studio selbst sieht die Lage meist anders aus. Der QR-Code an der Theke und die Terminkarte mit Ihrem Link richten sich an alle, die zu Ihnen kommen. Ob Ihr Vertrag auch dazu etwas sagt, sollten Sie trotzdem einmal nachlesen.',
          'Behalten Sie Ihr Marktplatzprofil, solange es Ihnen neue Gesichter bringt. Eine Zeit lang zweigleisig zu fahren ist normal: Neukundschaft über die Plattform, Wiederbuchungen über den eigenen Link. Tragen Sie in dieser Phase jeden Marktplatztermin auch in Ihrem Zenno-Kalender ein oder blockieren Sie die Zeit, damit kein Platz doppelt vergeben wird.',
        ],
      },
      {
        id: 'ai-assistants',
        heading: 'Bereit für KI-Assistenten',
        paragraphs: [
          'Manche Menschen fragen inzwischen einen KI-Assistenten wie ChatGPT oder Perplexity, bevor sie eine Suchmaschine öffnen: „Wo bekomme ich am Samstag in Köln-Ehrenfeld eine Maniküre?“ Damit ein Assistent Ihr Studio nennen und buchen kann, muss er Leistungen, Preise und freie Zeiten lesen können.',
          'Ihre Zenno-Seite stellt diese Angaben in einem Format bereit, das KI-Assistenten lesen können. Damit ist sie bereit dafür, dass ein Assistent einen echten freien Termin bei Ihnen bucht, auf Ihrer Seite und ohne Provision. Wie oft das geschieht, hängt vom Assistenten ab und davon, was Menschen fragen. Eine gepflegte Seite ist dafür die Voraussetzung.',
          'Pflegen Sie deshalb dieselben Dinge, die auch Menschen helfen: klare Leistungsnamen, Preise in Euro, aktuelle Öffnungszeiten und einen Kalender, der stimmt. Eine Seite, auf der seit Wochen alles ausgebucht aussieht, weil Urlaubstage nie wieder freigegeben wurden, hilft weder Kundschaft noch Assistenten.',
        ],
      },
      {
        id: 'client-data',
        heading: 'Wer Kontakte und Kundenhistorie hält',
        paragraphs: [
          'Die Kundenkartei ist für ein Studio fast so wertvoll wie die Einrichtung. Darin steht, wer welche Farbe hatte, wer immer dienstags um 18 Uhr kommt und wer eine Unverträglichkeit erwähnt hat. Liegen diese Informationen nur beim Marktplatz, haben Sie beim Wechsel wenig in der Hand.',
          'Mit einer eigenen Buchungsseite liegen Kontakte und Buchungshistorie in Ihrem eigenen Konto. Prüfen Sie vor dem Wechsel, ob und in welcher Form Sie Daten aus dem Marktplatz exportieren dürfen.',
          'Für den Datenschutz sind Sie als Studio verantwortlich, mit welcher Software Sie auch arbeiten. Fragen wie „Darf ich frühere Kundinnen anschreiben?“ oder „Wie lange darf ich Notizen zu Hautreaktionen speichern?“ klären Sie mit einer Rechtsberatung oder einer Fachperson für Datenschutz. Angaben zur Gesundheit gelten dabei als besonders schutzwürdig.',
        ],
      },
      {
        id: 'switching-checklist',
        heading: 'Checkliste für den Wechsel',
        paragraphs: [
          'Planen Sie den Wechsel für eine ruhige Woche, etwa Ende Januar, wenn der Kalender nach den Feiertagen Luft hat.',
          'Zenno hat einen kostenlosen Tarif zum Start. Sie können Ihre Seite also in Ruhe aufbauen und testen, während der Marktplatz weiterläuft, und den Link erst teilen, wenn alles stimmt.',
        ],
        bullets: [
          'Marktplatzvertrag lesen: Kündigungsfrist, Regeln zu Kundenkontakt und Datenexport',
          'Leistungen mit Dauer, Preis und zuständiger Person in Zenno anlegen',
          'Anzahlung oder Ausfallgebühr festlegen, falls gewünscht',
          'Testbuchung mit dem eigenen Handy durchspielen, inklusive Absage über das Kundenportal',
          'Link in Instagram-Bio, Google-Unternehmensprofil und WhatsApp-Status eintragen',
          'QR-Code für die Theke drucken und Quittungen anpassen',
          'Offene Marktplatztermine im Zenno-Kalender eintragen oder blockieren',
          'Nach vier Wochen nachsehen, wie viele Buchungen über den eigenen Link kamen',
        ],
      },
    ],
  },
  en: {
    kicker: 'Switching guide',
    title: ['Independent booking,', 'step by step.'],
    intro:
      'Many studios got their first online bookings through a marketplace. Sooner or later the question comes up whether repeat bookings should land on your own page instead. This guide covers what your own booking page needs, how to bring existing clients along and what to check before switching, so your calendar doesn’t develop gaps.',
    tocLabel: 'Contents',
    sections: [
      {
        id: 'marketplace-costs',
        heading: 'What commission and listings mean for a small studio',
        paragraphs: [
          'A marketplace brings visibility, and for a new studio that can help at the start. You usually pay for it with a share of bookings, often on new clients, sometimes with extra fees for payments or a better placement. What applies to you is in your contract. Put the statements from the last three months next to your appointment list once, and you will see what each appointment cost you.',
          'On a marketplace you sit in a list with other studios nearby. A client who found you there sees recommendations and offers from other businesses again on her next visit. The habit of booking through the platform stays, even when she only ever wants to come to you.',
          'So check first whether your contract charges fees on repeat bookings too. If it does, that is where your own booking link will make a difference fastest.',
        ],
      },
      {
        id: 'own-booking-page',
        heading: 'What your own booking page needs',
        paragraphs: [
          'A booking page has to answer the questions people would otherwise ask on the phone. How much is a pedicure with polish? How long does it take, who does it, and do I pay anything upfront? The fewer questions are left open, the more likely someone books at 11 pm without waiting to hear back from you.',
          'Name services the way clients search for them. “Classic facial, 60 minutes, €75” is more useful than a fancy name with no price. Show real photos of your team, because many people prefer to book with someone whose face they already know. And write a cancellation rule that is visible before booking, for example: free up to 24 hours before, 50% of the price after that.',
          'In Zenno you add services with duration, price and the person who provides them. Clients book without creating an account, and through the client portal they can reschedule or cancel themselves within your rule. Every page should include:',
        ],
        bullets: [
          'All services with duration and price in euros',
          'Real photos of the team and the rooms',
          'Your cancellation rule and, if you want one, a deposit',
          'Address, directions and opening hours',
        ],
      },
      {
        id: 'moving-clients',
        heading: 'Moving existing clients to your own link',
        paragraphs: [
          'Your booking link belongs wherever clients already find you. Start with the channels you run yourself. You don’t need anyone’s permission there.',
          'The moment after a treatment often works best. The client is happy, standing at the counter, and wants her next appointment. Point to the QR code and let her book on her own phone while you stand next to her. Next time she knows how it works.',
          'Expect it to take a few weeks to settle in. Someone who has booked the same way for years won’t change after a single message. Repeat the hint in a friendly way, without pressure. These are the places that should carry the link:',
        ],
        bullets: [
          'Instagram: link in your bio and a pinned post saying “How to book from now on”',
          'Google Business Profile: your booking link as the appointment or website link',
          'WhatsApp status: share the link regularly, especially when a slot opens up at short notice',
          'Receipts and appointment cards: print the link or a QR code on them',
          'Counter: a QR code in clear view next to the card terminal',
        ],
      },
      {
        id: 'marketplace-clients',
        heading: 'Keeping marketplace clients, fairly',
        paragraphs: [
          'Clients you won through a marketplace need some care. Platforms often set out in their terms whether and how you may contact these people directly, and some forbid using contact details from the platform for your own messages. Read your contract before you send anything. If in doubt, ask the platform or a lawyer.',
          'Inside your studio the picture is usually different. The QR code at the counter and the appointment card with your link are aimed at everyone who walks in. It is still worth checking once whether your contract says anything about this too.',
          'Keep your marketplace profile for as long as it brings you new faces. Running both for a while is normal: new clients through the platform, repeat bookings through your own link. During that phase, enter every marketplace appointment in your Zenno calendar as well, or block the time, so no slot gets booked twice.',
        ],
      },
      {
        id: 'ai-assistants',
        heading: 'Ready for AI assistants',
        paragraphs: [
          'Some people now ask an AI assistant like ChatGPT or Perplexity before they open a search engine: “Where can I get a manicure in Hamburg-Altona on Saturday?” For an assistant to name and book your studio, it has to be able to read your services, prices and free times.',
          'Your Zenno page publishes these details in a format AI assistants can read. That makes it ready for an assistant to book a real free slot with you, on your page and without commission. How often that happens depends on the assistant and on what people ask. A well-kept page is the precondition.',
          'So look after the same things that help people: clear service names, prices in euros, current opening hours and a calendar that is accurate. A page where everything looks booked out for weeks, because holiday blocks were never removed, helps neither clients nor assistants.',
        ],
      },
      {
        id: 'client-data',
        heading: 'Who holds client contacts and history',
        paragraphs: [
          'For a studio, the client records are worth almost as much as the furniture. They tell you who had which colour, who always comes on Tuesdays at 6 pm and who mentioned an intolerance. If that information only sits with the marketplace, you have little to take with you when you switch.',
          'With your own booking page, contacts and booking history sit in your own account. Before you switch, check whether and in what form you may export data from the marketplace.',
          'As a studio you are responsible for data protection, whichever software you use. Questions like “May I write to former clients?” or “How long may I keep notes on skin reactions?” are for a lawyer or a data protection specialist. Health information counts as particularly sensitive data.',
        ],
      },
      {
        id: 'switching-checklist',
        heading: 'Switching checklist',
        paragraphs: [
          'Plan the switch for a quiet week, such as late January, when the calendar has room after the holidays.',
          'Zenno has a free plan to start with. You can build and test your page calmly while the marketplace keeps running, and only share the link once everything is right.',
        ],
        bullets: [
          'Read your marketplace contract: notice period, rules on client contact and data export',
          'Add services with duration, price and responsible person in Zenno',
          'Set a deposit or no-show fee if you want one',
          'Run a test booking on your own phone, including a cancellation through the client portal',
          'Add the link to your Instagram bio, Google Business Profile and WhatsApp status',
          'Print a QR code for the counter and update your receipts',
          'Enter or block open marketplace appointments in your Zenno calendar',
          'After four weeks, check how many bookings came through your own link',
        ],
      },
    ],
  },
  th: {
    kicker: 'คู่มือการย้ายระบบจอง',
    title: ['รับจองด้วยตัวเอง', 'ทีละขั้นตอน'],
    intro:
      'หลายร้านได้ลูกค้าออนไลน์กลุ่มแรกจากแพลตฟอร์มตัวกลาง พอถึงจุดหนึ่งก็เริ่มคิดว่าลูกค้าประจำควรจองผ่านหน้าของร้านเองดีกว่าไหม คู่มือนี้อธิบายว่าหน้าจองของร้านต้องมีอะไรบ้าง จะชวนลูกค้าเดิมมาใช้ลิงก์ใหม่อย่างไร และต้องเช็กอะไรก่อนย้าย เพื่อไม่ให้ตารางนัดมีช่องว่าง',
    tocLabel: 'สารบัญ',
    sections: [
      {
        id: 'marketplace-costs',
        heading: 'ค่าคอมมิชชั่นและการลงรายชื่อ มีผลกับร้านเล็กอย่างไร',
        paragraphs: [
          'แพลตฟอร์มตัวกลางช่วยให้คนเห็นร้าน ซึ่งมีประโยชน์ตอนเปิดร้านใหม่ แต่สิ่งที่ต้องจ่ายมักเป็นส่วนแบ่งจากการจอง โดยเฉพาะลูกค้าใหม่ บางที่มีค่าธรรมเนียมการชำระเงินหรือค่าโปรโมตให้ร้านขึ้นอันดับต้นๆ ด้วย รายละเอียดอยู่ในสัญญาของคุณ ลองวางใบสรุปยอดสามเดือนล่าสุดไว้ข้างรายการนัด แล้วคุณจะเห็นว่าแต่ละนัดเสียค่าใช้จ่ายเท่าไร',
          'บนแพลตฟอร์ม ร้านคุณอยู่ในรายชื่อเดียวกับร้านอื่นแถวนั้น ลูกค้าที่เจอคุณที่นั่น พอกลับมาจองอีกครั้งก็จะเห็นร้านอื่นที่แพลตฟอร์มแนะนำอีก นิสัยการจองผ่านแพลตฟอร์มยังติดอยู่ ทั้งที่จริงๆ เธออยากมาที่ร้านคุณร้านเดียว',
          'เพราะฉะนั้นให้เช็กก่อนว่าสัญญาของคุณเก็บค่าธรรมเนียมจากการจองซ้ำของลูกค้าเดิมด้วยหรือไม่ ถ้าใช่ ตรงนี้คือจุดที่ลิงก์จองของร้านเองจะเห็นผลเร็วที่สุด',
        ],
      },
      {
        id: 'own-booking-page',
        heading: 'หน้าจองของร้านต้องมีอะไรบ้าง',
        paragraphs: [
          'หน้าจองต้องตอบคำถามที่ปกติลูกค้าจะโทรมาถาม ทาสีเล็บเท้าราคาเท่าไร ใช้เวลานานแค่ไหน ใครเป็นคนทำ ต้องจ่ายอะไรล่วงหน้าไหม ยิ่งเหลือคำถามน้อย คนก็ยิ่งกล้าจองตอนห้าทุ่มโดยไม่ต้องรอคุณตอบ',
          'ตั้งชื่อบริการให้ตรงกับที่ลูกค้าค้นหา “ทรีตเมนต์หน้าแบบคลาสสิก 60 นาที €75” ช่วยลูกค้าได้มากกว่าชื่อเก๋ๆ ที่ไม่มีราคา ใช้รูปจริงของทีมงาน เพราะหลายคนอยากจองกับคนที่เคยเห็นหน้ามาก่อน และเขียนเงื่อนไขการยกเลิกให้ลูกค้าเห็นก่อนจอง เช่น ยกเลิกฟรีถ้าแจ้งก่อน 24 ชั่วโมง หลังจากนั้นคิด 50% ของราคา',
          'ใน Zenno คุณเพิ่มบริการพร้อมระยะเวลา ราคา และคนที่รับผิดชอบได้ ลูกค้าจองได้โดยไม่ต้องสมัครบัญชี และเลื่อนหรือยกเลิกนัดเองได้ผ่านพอร์ทัลลูกค้า ภายใต้เงื่อนไขที่คุณตั้งไว้ ทุกหน้าจองควรมีสิ่งเหล่านี้',
        ],
        bullets: [
          'บริการทั้งหมด พร้อมระยะเวลาและราคาเป็นยูโร',
          'รูปจริงของทีมงานและของร้าน',
          'เงื่อนไขการยกเลิก และเงินมัดจำถ้าต้องการ',
          'ที่อยู่ วิธีเดินทาง และเวลาเปิดทำการ',
        ],
      },
      {
        id: 'moving-clients',
        heading: 'ชวนลูกค้าเดิมมาใช้ลิงก์ของร้าน',
        paragraphs: [
          'ลิงก์จองควรอยู่ทุกที่ที่ลูกค้าเจอร้านคุณอยู่แล้ว เริ่มจากช่องทางที่คุณดูแลเอง เพราะไม่ต้องขออนุญาตใคร',
          'จังหวะที่ได้ผลดีมักเป็นตอนหลังทำทรีตเมนต์เสร็จ ลูกค้าพอใจ ยืนอยู่ที่เคาน์เตอร์ และอยากนัดครั้งต่อไป ให้ชี้ไปที่ QR code แล้วให้เธอจองเองในมือถือตอนที่คุณยืนอยู่ข้างๆ ครั้งหน้าเธอก็จะจองเองได้',
          'ต้องใช้เวลาสักสองสามสัปดาห์กว่าลูกค้าจะคุ้น คนที่จองแบบเดิมมาหลายปีจะไม่เปลี่ยนเพราะได้ข้อความแค่ครั้งเดียว ให้บอกซ้ำอย่างเป็นมิตร ไม่ต้องกดดัน ที่เหล่านี้ควรมีลิงก์จองของร้าน',
        ],
        bullets: [
          'Instagram: ใส่ลิงก์ใน bio และปักหมุดโพสต์ “จองคิวกับเราแบบใหม่”',
          'Google Business Profile: ใส่ลิงก์จองเป็นลิงก์นัดหมายหรือลิงก์เว็บไซต์',
          'สถานะ WhatsApp: แชร์ลิงก์เป็นประจำ โดยเฉพาะตอนมีคิวว่างกะทันหัน',
          'ใบเสร็จและบัตรนัด: พิมพ์ลิงก์หรือ QR code ไว้',
          'เคาน์เตอร์: ติด QR code ให้เห็นชัดข้างเครื่องรูดบัตร',
        ],
      },
      {
        id: 'marketplace-clients',
        heading: 'ดูแลลูกค้าจากแพลตฟอร์มอย่างตรงไปตรงมา',
        paragraphs: [
          'ลูกค้าที่ได้มาจากแพลตฟอร์มต้องระวังเป็นพิเศษ แพลตฟอร์มมักกำหนดในเงื่อนไขว่าคุณติดต่อลูกค้าเหล่านี้โดยตรงได้หรือไม่ และได้แค่ไหน บางแห่งห้ามนำข้อมูลติดต่อจากแพลตฟอร์มไปส่งข้อความของร้านเอง อ่านสัญญาก่อนส่งอะไรออกไป ถ้าไม่แน่ใจ ให้ถามแพลตฟอร์มหรือที่ปรึกษากฎหมาย',
          'ในร้านของคุณเอง สถานการณ์มักต่างออกไป QR code ที่เคาน์เตอร์และบัตรนัดที่มีลิงก์ของร้าน มีไว้สำหรับทุกคนที่เดินเข้าร้าน แต่ก็ควรเปิดสัญญาดูสักครั้งว่ามีข้อกำหนดเรื่องนี้ไหม',
          'เก็บโปรไฟล์บนแพลตฟอร์มไว้ ตราบที่ยังได้ลูกค้าใหม่ การใช้สองช่องทางคู่กันสักพักเป็นเรื่องปกติ ลูกค้าใหม่มาจากแพลตฟอร์ม ลูกค้าประจำจองผ่านลิงก์ของร้าน ช่วงนี้ให้ลงนัดจากแพลตฟอร์มในปฏิทิน Zenno ด้วย หรือบล็อกเวลาไว้ จะได้ไม่มีคิวซ้อนกัน',
        ],
      },
      {
        id: 'ai-assistants',
        heading: 'พร้อมให้ผู้ช่วย AI จองกับคุณ',
        paragraphs: [
          'ตอนนี้บางคนถามผู้ช่วย AI อย่าง ChatGPT หรือ Perplexity ก่อนจะเปิดเสิร์ชเอนจิน เช่น “วันเสาร์นี้ทำเล็บแถว Berlin-Neukölln ได้ที่ไหน” ผู้ช่วย AI จะแนะนำและจองร้านคุณได้ ก็ต่อเมื่ออ่านบริการ ราคา และเวลาว่างของร้านได้',
          'หน้า Zenno ของคุณเผยแพร่ข้อมูลเหล่านี้ในรูปแบบที่ผู้ช่วย AI อ่านได้ หน้าของคุณจึงพร้อมให้ผู้ช่วย AI จองคิวที่ว่างจริงกับร้านคุณ บนหน้าของคุณ และไม่มีค่าคอมมิชชั่น จะเกิดขึ้นบ่อยแค่ไหนขึ้นอยู่กับผู้ช่วย AI แต่ละตัว และคำถามที่คนถาม หน้าที่ดูแลอย่างดีคือพื้นฐานที่ต้องมี',
          'ดูแลสิ่งเดียวกับที่ช่วยลูกค้าทั่วไป คือชื่อบริการที่ชัดเจน ราคาเป็นยูโร เวลาเปิดทำการที่เป็นปัจจุบัน และปฏิทินที่ตรงกับความจริง ถ้าหน้าจองดูเหมือนเต็มไปหลายสัปดาห์เพราะลืมเปิดวันหยุดที่บล็อกไว้ ก็ไม่มีประโยชน์ทั้งกับลูกค้าและผู้ช่วย AI',
        ],
      },
      {
        id: 'client-data',
        heading: 'ใครเป็นคนเก็บข้อมูลติดต่อและประวัติลูกค้า',
        paragraphs: [
          'ประวัติลูกค้าสำคัญกับร้านพอๆ กับอุปกรณ์ในร้าน ในนั้นมีว่าใครทำสีอะไร ใครมาทุกวันอังคารหกโมงเย็น และใครเคยบอกว่าแพ้อะไร ถ้าข้อมูลเหล่านี้อยู่กับแพลตฟอร์มอย่างเดียว ตอนย้ายคุณแทบไม่มีอะไรติดมือมาเลย',
          'เมื่อมีหน้าจองของร้านเอง ข้อมูลติดต่อและประวัติการจองจะอยู่ในบัญชีของคุณ ก่อนย้าย ให้เช็กว่าคุณส่งออกข้อมูลจากแพลตฟอร์มได้หรือไม่ และได้ในรูปแบบไหน',
          'ร้านของคุณเป็นผู้รับผิดชอบเรื่องการคุ้มครองข้อมูลส่วนบุคคล ไม่ว่าจะใช้ซอฟต์แวร์ตัวไหน คำถามอย่าง “ส่งข้อความหาลูกค้าเก่าได้ไหม” หรือ “เก็บบันทึกเรื่องอาการแพ้ผิวไว้ได้นานแค่ไหน” ควรถามที่ปรึกษากฎหมายหรือผู้เชี่ยวชาญด้านการคุ้มครองข้อมูล ข้อมูลสุขภาพถือเป็นข้อมูลที่ต้องดูแลเป็นพิเศษ',
        ],
      },
      {
        id: 'switching-checklist',
        heading: 'เช็กลิสต์ก่อนย้าย',
        paragraphs: [
          'วางแผนย้ายในสัปดาห์ที่งานไม่ยุ่ง เช่น ปลายเดือนมกราคม ตอนที่ตารางนัดเริ่มว่างหลังช่วงเทศกาล',
          'Zenno มีแพ็กเกจฟรีให้เริ่มต้นใช้ คุณจึงสร้างและทดลองหน้าจองได้สบายๆ ระหว่างที่ยังใช้แพลตฟอร์มอยู่ แล้วค่อยแชร์ลิงก์เมื่อทุกอย่างพร้อม',
        ],
        bullets: [
          'อ่านสัญญาแพลตฟอร์ม: ระยะเวลาแจ้งยกเลิก กฎเรื่องการติดต่อลูกค้า และการส่งออกข้อมูล',
          'เพิ่มบริการใน Zenno พร้อมระยะเวลา ราคา และคนที่รับผิดชอบ',
          'ตั้งเงินมัดจำหรือค่าปรับไม่มาตามนัด ถ้าต้องการ',
          'ลองจองด้วยมือถือของตัวเอง รวมถึงลองยกเลิกผ่านพอร์ทัลลูกค้า',
          'ใส่ลิงก์ใน bio ของ Instagram, Google Business Profile และสถานะ WhatsApp',
          'พิมพ์ QR code ไว้ที่เคาน์เตอร์ และปรับใบเสร็จ',
          'ลงหรือบล็อกนัดที่ยังค้างจากแพลตฟอร์มในปฏิทิน Zenno',
          'ผ่านไปสี่สัปดาห์ ดูว่ามีการจองผ่านลิงก์ของร้านกี่ครั้ง',
        ],
      },
    ],
  },
}
