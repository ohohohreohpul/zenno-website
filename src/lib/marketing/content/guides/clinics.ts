import type { GuideSet } from './types'

/**
 * Guide for the clinics pillar page. Aesthetic / wellness scope only:
 * no medical advice, no health-data or data-protection compliance claims,
 * no VAT-exemption claims (owners check rates with their tax advisor).
 */
export const CLINICS_GUIDE: GuideSet = {
  de: {
    kicker: 'Leitfaden für Praxen',
    title: ['Online-Buchung in der Praxis:', 'ein Leitfaden für den Alltag.'],
    intro:
      'Eine Ästhetik- oder Wellnesspraxis bucht anders als ein Friseursalon. Vor vielen Behandlungen steht ein Gespräch, manche Termine binden einen Raum für zwei Stunden, und Gesundheitsfragen gehören nicht in einen Chat. Hier lesen Sie, wie Sie Beratung, Anzahlung, Empfang und Nachsorge so aufsetzen, dass Ihr Team weniger telefoniert und weniger Behandlungsräume leer stehen.',
    tocLabel: 'Inhalt',
    sections: [
      {
        id: 'consultation-first',
        heading: 'Die Beratung als ersten Termin anbieten',
        paragraphs: [
          'Wer zum ersten Mal eine Laserbehandlung oder ein Microneedling bucht, möchte vorher mit jemandem sprechen. Geht das nur telefonisch, landet die Anfrage am Empfang, meist dann, wenn gerade jemand bezahlt. Legen Sie die Beratung deshalb als eigene Leistung an, zum Beispiel 30 Minuten für 45 €, bei der Fachkraft, die später auch behandelt. Die Kundin sieht vorab, was sie erwartet, und Sie sehen im Kalender, wer wofür kommt.',
          'Ob die Beratung etwas kosten soll, ist eine Grundsatzentscheidung. Eine kostenlose Beratung senkt die Hürde, wird aber leichter vergessen. Eine verbreitete Lösung ist ein kleiner Betrag, den Sie auf die Behandlung anrechnen, wenn sie innerhalb von sechs Wochen gebucht wird. Schreiben Sie diese Regel in die Leistungsbeschreibung, dann muss am Tresen niemand darüber verhandeln.',
          'Stammkundinnen, die eine Behandlung schon kennen, brauchen nicht jedes Mal eine Beratung. Bieten Sie beides nebeneinander an und ergänzen Sie in der Beschreibung der Behandlung einen kurzen Hinweis wie „Erstbehandlung nur nach Beratung“. Das reicht in der Praxis, damit Neukundschaft den richtigen Termin wählt.',
        ],
      },
      {
        id: 'deposits',
        heading: 'Anzahlung und Vorkasse für lange Behandlungen',
        paragraphs: [
          'Je länger und teurer ein Termin, desto mehr kostet ein Ausfall. Eine apparative Gesichtsbehandlung über 75 Minuten lässt sich am selben Morgen kaum neu vergeben, und das Gerät war schon vorbereitet. Für solche Termine verlangen Sie mit Zenno bei der Buchung eine Anzahlung oder den vollen Preis über Stripe. Alternativ lassen Sie die Karte hinterlegen und berechnen bei No-Show oder zu später Absage eine Gebühr.',
          'Kurze, günstige Termine brauchen meist keine Absicherung. Ab etwa einer Stunde oder rund 100 € ist eine Anzahlung von 20 bis 30 Prozent für Kundinnen gut nachvollziehbar. Vorkasse passt zu Neukundschaft, die Sie noch nicht kennen, und zu Behandlungen, für die Sie Material bestellen. Die hinterlegte Karte ist die mildeste Variante, weil zunächst nichts belastet wird.',
          'Die Regel muss vor der Buchung sichtbar sein, in der Leistungsbeschreibung und in Ihren Buchungsbedingungen. Wie Sie Anzahlung und Ausfallgebühr rechtlich sauber formulieren, klären Sie bitte mit Ihrer Rechtsberatung oder Ihrem Berufsverband.',
        ],
      },
      {
        id: 'front-desk',
        heading: 'Den Empfang entlasten, und wo die KI aufhört',
        paragraphs: [
          'Am Empfang wiederholen sich die Fragen: Was kostet die Beratung, wann ist der nächste freie Termin, kann ich auf Donnerstag verschieben? Die ersten beiden beantwortet Ihre Buchungsseite, das Verschieben erledigt die Kundin im Kundenportal. Bestätigungen und Erinnerungen gehen per SMS und E-Mail hinaus. Setzen Sie den Buchungslink in Ihr Google-Profil, in die Instagram-Bio und in Ihre E-Mail-Signatur.',
          'Für Nachrichten, die trotzdem kommen, gibt es die KI-Rezeption auf WhatsApp mit eigener Nummer, per E-Mail und im Website-Chat. Sie antwortet auf Deutsch, Englisch oder Thai, erklärt Ablauf und Preise aus Ihren eigenen Angaben und bucht nur Zeiten, die im Kalender wirklich frei sind. Die Anfrage von 22 Uhr hat so morgens schon einen Beratungstermin.',
          'Medizinische Auskünfte gibt die KI nicht. Fragen zu Medikamenten, Hautreaktionen, Schwangerschaft oder Vorerkrankungen übergibt sie an Ihr Team und markiert den Chat mit „Braucht Sie“, Beschwerden ebenso. Wenn Sie anfangs vorsichtig sein möchten, starten Sie im Entwurfsmodus: Die KI schlägt eine Antwort vor, und erst Ihre Freigabe schickt sie ab.',
        ],
      },
      {
        id: 'medical-questions',
        heading: 'Gesundheitsfragen gehören in die Beratung',
        paragraphs: [
          'Manche Kundinnen schreiben ausführlich, mit Foto der Hautstelle, Liste ihrer Medikamente und einer Frage zur Rötung nach der letzten Sitzung. Im Chat lässt sich das schlecht beantworten, und solche Angaben sammeln sich dann an Stellen, an denen Sie sie nicht haben wollen. Eine freundliche, feste Linie hilft allen: Gesundheitliches besprechen wir persönlich.',
          'Schreiben Sie diesen Satz dorthin, wo er gelesen wird, also in die Beschreibung der Beratung, in Ihre Buchungsbedingungen und in die Standardantworten Ihres Teams. Zum Beispiel: „Bitte schicken Sie uns keine Fotos oder Gesundheitsangaben per Nachricht. Wir besprechen alles in Ruhe bei Ihrem Beratungstermin.“ Hängen Sie den Buchungslink an, damit die Antwort einen nächsten Schritt hat.',
          'Wie Sie Gesundheitsangaben in der Praxis dokumentieren und aufbewahren, entscheiden Sie selbst. Welche Vorgaben dafür gelten, klären Sie mit Ihrer Datenschutzberatung. Für die Buchung selbst genügen Name, Kontakt und die gewünschte Leistung.',
        ],
      },
      {
        id: 'aftercare',
        heading: 'Folge- und Nachsorgetermine planen',
        paragraphs: [
          'Viele Behandlungen sind als Serie angelegt, etwa vier Sitzungen im Abstand von vier Wochen, und zu manchen gehört ein kurzer Kontrolltermin. Der beste Moment für den nächsten Termin ist direkt nach der Behandlung, solange die Kundin noch am Tresen steht. Buchen Sie ihn dort gemeinsam, oder zeigen Sie ihr den Link in der Bestätigung, über den sie später selbst bucht.',
          'Legen Sie Kontrolltermine als eigene Leistung an, zum Beispiel 15 Minuten, kostenlos oder mit kleinem Preis. Dann blockieren sie im Kalender nur so viel Zeit, wie sie brauchen, und Ihr Team erkennt sofort, dass es um Nachsorge geht. Wer verschieben muss, macht das im Kundenportal, und der Platz ist wieder frei.',
        ],
        bullets: [
          'Den Abstand der Serie in die Leistungsbeschreibung schreiben, etwa „Folgetermin nach 4 Wochen“',
          'Kontrolltermine als eigene, kurze Leistung anlegen',
          'Den Folgetermin ansprechen, bevor die Kundin bezahlt',
        ],
      },
      {
        id: 'vat',
        heading: 'Umsatzsteuer je Behandlung',
        paragraphs: [
          'In einer Ästhetikpraxis sind nicht alle Leistungen steuerlich gleich einzuordnen. Welcher Satz für welche Behandlung gilt und ob überhaupt Umsatzsteuer anfällt, hängt vom Einzelfall ab. Das klären Sie mit Ihrer Steuerberatung, bevor Sie Ihre Leistungen anlegen, und nicht erst bei der Jahresabrechnung.',
          'In Zenno hinterlegen Sie den Steuersatz je Leistung. Jede Zahlung wird damit berechnet, und am Monats- oder Quartalsende haben Sie eine Übersicht und einen Export für DATEV oder Ihre Steuerberatung. Wenn Sie die Kleinunternehmerregelung nach § 19 UStG nutzen, lässt sich das ebenfalls abbilden. Auch das Kassenbuch führen Sie im selben System.',
          'Ein einfacher Weg: Bringen Sie zum nächsten Termin mit Ihrer Steuerberatung die Liste Ihrer Leistungen mit Preisen mit und lassen Sie sich zu jeder Zeile den Satz bestätigen. Das dauert eine halbe Stunde, und Sie müssen später weniger korrigieren.',
        ],
      },
      {
        id: 'switching',
        heading: 'Checkliste für den Wechsel',
        paragraphs: [
          'Wechseln Sie in einer ruhigen Woche und mit einem festen Stichtag. Ab diesem Tag laufen neue Buchungen über die neue Seite, und die bereits gebuchten Termine der kommenden Wochen tragen Sie einmal in den neuen Kalender ein. Starten können Sie im kostenlosen Tarif.',
          'Sagen Sie Ihrer Stammkundschaft vorher Bescheid, am Tresen und einmal per E-Mail mit dem neuen Link. Wer bisher immer angerufen hat, darf das weiter tun. Ihr Team trägt diese Termine dann direkt im Kalender ein.',
        ],
        bullets: [
          'Leistungsliste mit Dauer, Preis und Fachkraft aufschreiben, Beratung und Kontrolltermin als eigene Leistungen',
          'Mit der Steuerberatung den Umsatzsteuersatz je Leistung klären',
          'Entscheiden, welche Behandlungen eine Anzahlung, Vorkasse oder hinterlegte Karte brauchen',
          'Buchungsbedingungen mit Ausfallregel von Rechtsberatung oder Verband prüfen lassen',
          'Den Satz zu Gesundheitsfragen in Beratung, Bedingungen und Standardantworten aufnehmen',
          'Die KI-Rezeption im Entwurfsmodus starten und die ersten Wochen mitlesen',
          'Buchungslink auf Website, Google-Profil, Instagram und in die E-Mail-Signatur setzen',
          'Mit dem Team einen Tag lang Testbuchungen machen',
        ],
      },
    ],
  },
  en: {
    kicker: 'A guide for clinics',
    title: ['Online booking in a clinic:', 'a guide for the working day.'],
    intro:
      'An aesthetic or wellness clinic books differently from a hair salon. Many treatments start with a conversation, some appointments tie up a room for two hours, and health questions do not belong in a chat. This guide covers how to set up consultations, deposits, the front desk and aftercare so your team spends less time on the phone and fewer rooms stand empty.',
    tocLabel: 'Contents',
    sections: [
      {
        id: 'consultation-first',
        heading: 'Offer the consultation as the first appointment',
        paragraphs: [
          "Someone booking laser treatment or microneedling for the first time wants to talk to a person first. If that only works by phone, the request lands at the front desk, usually while someone else is paying. Set the consultation up as its own service instead, for example 30 minutes for €45, with the specialist who will later do the treatment. The client sees what to expect, and you see in the calendar who is coming and why.",
          'Whether the consultation should cost something is a policy decision. A free consultation lowers the barrier but is easier to forget. A common middle way is a small fee that you credit against the treatment if it is booked within six weeks. Put that rule in the service description so nobody has to negotiate it at the desk.',
          "Regular clients who already know a treatment don't need a consultation every time. Offer both side by side and add a short note to the treatment description, such as \"First treatment only after a consultation\". In practice that is enough for new clients to pick the right appointment.",
        ],
      },
      {
        id: 'deposits',
        heading: 'Deposits and prepayment for long treatments',
        paragraphs: [
          'The longer and more expensive an appointment, the more a no-show costs. A 75-minute device-based facial is hard to fill on the same morning, and the device was already set up. For appointments like that, Zenno lets you ask for a deposit or the full price at booking through Stripe. Or you keep the card on file and charge a fee for a no-show or late cancellation.',
          'Short, inexpensive appointments usually need no protection. From about an hour or around €100, a deposit of 20 to 30 percent is easy for clients to understand. Prepayment suits new clients you have never met and treatments you order material for. A card on file is the mildest option, because nothing is charged up front.',
          'The rule has to be visible before booking, in the service description and in your booking terms. Please check with your lawyer or professional association how to word deposits and no-show fees so they hold up.',
        ],
      },
      {
        id: 'front-desk',
        heading: 'Taking load off the front desk, and where the AI stops',
        paragraphs: [
          'The same questions come up at the front desk every day: how much is a consultation, when is the next free slot, can I move to Thursday? Your booking page answers the first two, and the client reschedules herself in the client portal. Confirmations and reminders go out by SMS and email. Put the booking link in your Google profile, your Instagram bio and your email signature.',
          'For the messages that still come in, the AI receptionist works on WhatsApp with your own number, by email and in your website chat. It replies in German, English or Thai, explains the process and prices from your own information, and only books times that are really free in the calendar. A request sent at 10 pm can have a consultation booked by the morning.',
          'The AI gives no medical advice. Questions about medication, skin reactions, pregnancy or existing conditions go to your team, and the chat is marked "Needs you". Complaints are handled the same way. If you want to be careful at first, start in draft mode: the AI suggests a reply, and nothing is sent until you approve it.',
        ],
      },
      {
        id: 'medical-questions',
        heading: 'Health questions belong in the consultation',
        paragraphs: [
          "Some clients write at length, with a photo of the skin area, a list of their medication and a question about redness after the last session. A chat is a poor place to answer that, and those details end up in places you don't want them. A friendly, firm line helps everyone: anything health-related is discussed in person.",
          'Put that sentence where people will read it: in the consultation description, in your booking terms and in the standard replies your team uses. For example: "Please don\'t send photos or health details by message. We\'ll go through everything calmly at your consultation." Add the booking link so the reply comes with a next step.',
          'How you record and store health information in your clinic is your own decision. Check with your data protection advisor which rules apply. The booking itself only needs a name, contact details and the service.',
        ],
      },
      {
        id: 'aftercare',
        heading: 'Planning follow-up and aftercare appointments',
        paragraphs: [
          'Many treatments are planned as a series, say four sessions four weeks apart, and some come with a short check-up. The best moment to book the next appointment is straight after the treatment, while the client is still at the desk. Book it together there, or show her the link in her confirmation so she can book it later herself.',
          'Set check-ups up as their own service, for example 15 minutes, free or at a small price. They then block only the time they need, and your team can see at a glance that the visit is aftercare. If the client has to move it, she does that in the client portal and the slot opens up again.',
        ],
        bullets: [
          'Write the interval into the service description, for example "Follow-up after 4 weeks"',
          'Set up check-ups as a separate, short service',
          'Bring up the follow-up before the client pays',
        ],
      },
      {
        id: 'vat',
        heading: 'VAT per treatment',
        paragraphs: [
          'In an aesthetic clinic, not every service falls under the same tax treatment. Which rate applies to which treatment, and whether VAT applies at all, depends on the individual case. Settle that with your tax advisor before you add your services, rather than at the end of the year.',
          'In Zenno you set the VAT rate per service. Every payment is calculated with it, and at the end of the month or quarter you get an overview and an export for DATEV or your tax advisor. If you use the small business rule under § 19 UStG, Zenno handles that as well. Your cash book runs in the same system.',
          'An easy way to start: take the list of your services and prices to your next meeting with your tax advisor and have them confirm the rate for each line. It takes half an hour and leaves less to correct later.',
        ],
      },
      {
        id: 'switching',
        heading: 'Switching checklist',
        paragraphs: [
          'Switch in a quiet week and pick a fixed start date. From that day new bookings run through the new page, and you enter the appointments already booked for the coming weeks into the new calendar once. You can start on the free plan.',
          'Tell your regular clients beforehand, at the desk and once by email with the new link. Anyone who has always phoned can keep doing so. Your team then enters those appointments directly in the calendar.',
        ],
        bullets: [
          'List your services with duration, price and specialist, with consultation and check-up as separate services',
          'Agree the VAT rate per service with your tax advisor',
          'Decide which treatments need a deposit, prepayment or card on file',
          'Have your booking terms and no-show rule checked by a lawyer or your association',
          'Add the sentence about health questions to the consultation, your terms and your standard replies',
          'Start the AI receptionist in draft mode and read along for the first weeks',
          'Put the booking link on your website, Google profile, Instagram and email signature',
          'Spend a day making test bookings with your team',
        ],
      },
    ],
  },
  th: {
    kicker: 'คู่มือสำหรับคลินิก',
    title: ['ระบบจองออนไลน์ในคลินิก', 'คู่มือสำหรับการทำงานจริง'],
    intro:
      'คลินิกความงามหรือเวลเนสรับจองไม่เหมือนร้านทำผม ทรีตเมนต์หลายอย่างต้องเริ่มจากการพูดคุย บางนัดใช้ห้องนานสองชั่วโมง และคำถามเรื่องสุขภาพไม่ควรอยู่ในแชท คู่มือนี้อธิบายวิธีวางระบบนัดปรึกษา มัดจำ งานเคาน์เตอร์ และการนัดติดตามผล เพื่อให้ทีมของคุณรับโทรศัพท์น้อยลง และห้องทรีตเมนต์ว่างน้อยลง',
    tocLabel: 'สารบัญ',
    sections: [
      {
        id: 'consultation-first',
        heading: 'ให้นัดปรึกษาเป็นนัดแรก',
        paragraphs: [
          'ลูกค้าที่จะทำเลเซอร์หรือไมโครนีดดิ้งครั้งแรกมักอยากคุยกับใครสักคนก่อน ถ้าทำได้แค่ทางโทรศัพท์ สายก็จะมาที่เคาน์เตอร์ และมักมาตอนที่มีลูกค้าอีกคนกำลังจ่ายเงินอยู่ ตั้งการปรึกษาเป็นบริการแยกไปเลย เช่น 30 นาที €45 กับผู้เชี่ยวชาญคนเดียวกับที่จะทำทรีตเมนต์ ลูกค้ารู้ล่วงหน้าว่าจะเจออะไร และคุณเห็นในปฏิทินว่าใครจะมาเรื่องอะไร',
          'จะเก็บค่าปรึกษาหรือไม่เป็นเรื่องที่ต้องตัดสินใจ การปรึกษาฟรีทำให้คนกล้าจองมากขึ้น แต่ก็ลืมกันง่ายกว่า ทางสายกลางที่ใช้กันบ่อยคือเก็บเงินจำนวนเล็กน้อย แล้วหักออกจากค่าทรีตเมนต์ถ้าลูกค้าจองภายในหกสัปดาห์ เขียนเงื่อนไขนี้ไว้ในคำอธิบายบริการ จะได้ไม่ต้องมาต่อรองกันที่เคาน์เตอร์',
          'ลูกค้าประจำที่รู้จักทรีตเมนต์อยู่แล้วไม่จำเป็นต้องปรึกษาทุกครั้ง เปิดให้จองทั้งสองแบบ แล้วเขียนหมายเหตุสั้นๆ ในคำอธิบายทรีตเมนต์ เช่น “ครั้งแรกต้องนัดปรึกษาก่อน” เท่านี้ลูกค้าใหม่ก็เลือกนัดได้ถูก',
        ],
      },
      {
        id: 'deposits',
        heading: 'มัดจำและชำระล่วงหน้าสำหรับทรีตเมนต์ที่ใช้เวลานาน',
        paragraphs: [
          'ยิ่งนัดยาวและราคาสูง เวลาลูกค้าไม่มาก็ยิ่งเสียมาก ทรีตเมนต์หน้าด้วยเครื่อง 75 นาทีหาคนมาแทนในเช้าวันเดียวกันแทบไม่ได้ และเครื่องก็เตรียมไว้แล้ว นัดแบบนี้คุณเก็บมัดจำหรือราคาเต็มตอนจองผ่าน Stripe ได้ใน Zenno หรือจะให้ลูกค้าบันทึกบัตรไว้ แล้วเรียกเก็บค่าธรรมเนียมเมื่อไม่มาหรือยกเลิกกระชั้นชิดก็ได้',
          'นัดสั้นๆ ราคาไม่สูงมักไม่ต้องมีหลักประกัน ถ้านัดยาวราวหนึ่งชั่วโมงขึ้นไป หรือราคาประมาณ €100 ขึ้นไป มัดจำ 20 ถึง 30 เปอร์เซ็นต์เป็นตัวเลขที่ลูกค้าเข้าใจได้ การชำระเต็มล่วงหน้าเหมาะกับลูกค้าใหม่ที่คุณยังไม่รู้จัก และทรีตเมนต์ที่ต้องสั่งวัสดุ ส่วนการบันทึกบัตรเป็นแบบที่เบาที่สุด เพราะยังไม่มีการตัดเงิน',
          'เงื่อนไขต้องเห็นได้ก่อนจอง ทั้งในคำอธิบายบริการและในเงื่อนไขการจองของคุณ ส่วนการเขียนเรื่องมัดจำและค่าธรรมเนียมให้ถูกต้องตามกฎหมายเยอรมัน โปรดปรึกษาทนายหรือสมาคมวิชาชีพของคุณ',
        ],
      },
      {
        id: 'front-desk',
        heading: 'ลดงานที่เคาน์เตอร์ และขอบเขตของ AI',
        paragraphs: [
          'คำถามที่เคาน์เตอร์วนอยู่ไม่กี่เรื่อง ค่าปรึกษาเท่าไร คิวว่างถัดไปเมื่อไร ขอเลื่อนเป็นวันพฤหัสได้ไหม สองข้อแรกหน้าจองตอบให้ ส่วนการเลื่อนนัด ลูกค้าทำเองได้ในพอร์ทัลลูกค้า คำยืนยันและการแจ้งเตือนส่งทาง SMS และอีเมล ใส่ลิงก์จองไว้ใน Google โปรไฟล์ ใน Bio ของ Instagram และในลายเซ็นอีเมล',
          'ข้อความที่ยังเข้ามาอยู่ พนักงานต้อนรับ AI ช่วยตอบได้ทาง WhatsApp เบอร์ของคุณเอง อีเมล และแชทบนเว็บไซต์ ตอบเป็นภาษาเยอรมัน อังกฤษ หรือไทย อธิบายขั้นตอนและราคาจากข้อมูลที่คุณใส่ไว้ และจองเฉพาะเวลาที่ว่างจริงในปฏิทิน คนที่ทักมาตอนสี่ทุ่ม ตื่นมาก็มีนัดปรึกษาแล้ว',
          'AI ไม่ให้คำแนะนำทางการแพทย์ คำถามเรื่องยา อาการแพ้ผิว การตั้งครรภ์ หรือโรคประจำตัว จะส่งต่อให้ทีมของคุณ และแชทจะถูกทำเครื่องหมาย “ต้องการคุณ” เรื่องร้องเรียนก็เช่นกัน ถ้าช่วงแรกอยากระวังไว้ก่อน ให้เริ่มด้วยโหมดร่าง AI จะร่างคำตอบไว้ และจะส่งก็ต่อเมื่อคุณกดอนุมัติ',
        ],
      },
      {
        id: 'medical-questions',
        heading: 'เรื่องสุขภาพคุยกันตอนนัดปรึกษา',
        paragraphs: [
          'ลูกค้าบางคนเขียนมายาว แนบรูปผิว รายชื่อยาที่ใช้ และถามเรื่องรอยแดงหลังทำครั้งก่อน แชทไม่ใช่ที่ที่จะตอบเรื่องแบบนี้ได้ดี และข้อมูลพวกนี้ก็จะไปกองอยู่ในที่ที่คุณไม่อยากให้อยู่ วางหลักไว้ชัดๆ แต่สุภาพว่า เรื่องสุขภาพเราคุยกันต่อหน้า',
          'เขียนประโยคนี้ไว้ในที่ที่คนอ่านจริง คือคำอธิบายนัดปรึกษา เงื่อนไขการจอง และข้อความตอบกลับที่ทีมใช้ประจำ เช่น “รบกวนอย่าส่งรูปหรือข้อมูลสุขภาพมาทางข้อความนะคะ เราจะคุยกันอย่างละเอียดตอนนัดปรึกษา” แล้วแนบลิงก์จองไปด้วย ลูกค้าจะได้รู้ว่าต้องทำอะไรต่อ',
          'ข้อมูลสุขภาพจะบันทึกและเก็บอย่างไรในคลินิก คุณเป็นคนกำหนดเอง ส่วนกฎที่ต้องปฏิบัติตาม โปรดสอบถามที่ปรึกษาด้านการคุ้มครองข้อมูล สำหรับการจองนั้นใช้แค่ชื่อ ช่องทางติดต่อ และบริการที่ต้องการก็พอ',
        ],
      },
      {
        id: 'aftercare',
        heading: 'วางแผนนัดต่อเนื่องและนัดติดตามผล',
        paragraphs: [
          'ทรีตเมนต์หลายอย่างทำเป็นคอร์ส เช่น สี่ครั้ง ห่างกันครั้งละสี่สัปดาห์ และบางอย่างต้องมีนัดเช็กผลสั้นๆ จังหวะที่ดีที่สุดในการจองนัดถัดไปคือหลังทำเสร็จ ตอนลูกค้ายังยืนอยู่ที่เคาน์เตอร์ จองด้วยกันตรงนั้นเลย หรือชี้ให้ดูลิงก์ในคำยืนยัน ให้เธอจองเองทีหลัง',
          'ตั้งนัดเช็กผลเป็นบริการแยก เช่น 15 นาที ฟรีหรือราคาไม่สูง ปฏิทินจะกันเวลาไว้เท่าที่จำเป็น และทีมเห็นทันทีว่าเป็นนัดติดตามผล ถ้าลูกค้าต้องเลื่อน ก็เลื่อนเองในพอร์ทัลลูกค้า แล้วช่องเวลาเดิมก็ว่างให้คนอื่น',
        ],
        bullets: [
          'เขียนระยะห่างของคอร์สไว้ในคำอธิบายบริการ เช่น “นัดถัดไปหลัง 4 สัปดาห์”',
          'ตั้งนัดเช็กผลเป็นบริการสั้นๆ แยกต่างหาก',
          'ชวนจองนัดถัดไปก่อนลูกค้าจ่ายเงิน',
        ],
      },
      {
        id: 'vat',
        heading: 'ภาษีมูลค่าเพิ่มตามทรีตเมนต์',
        paragraphs: [
          'ในคลินิกความงาม บริการแต่ละอย่างอาจจัดประเภททางภาษีไม่เหมือนกัน ทรีตเมนต์ไหนใช้อัตราเท่าไร หรือต้องเสียภาษีมูลค่าเพิ่มหรือไม่ ขึ้นอยู่กับแต่ละกรณี เรื่องนี้ควรคุยกับ Steuerberater ของคุณก่อนตั้งบริการในระบบ ไม่ใช่รอถึงตอนปิดบัญชีปลายปี',
          'ใน Zenno คุณกำหนดอัตราภาษีแยกตามบริการ ทุกการชำระเงินคำนวณตามอัตรานั้น และสิ้นเดือนหรือสิ้นไตรมาสคุณจะได้ภาพรวมพร้อมไฟล์ส่งออกสำหรับ DATEV หรือนักบัญชี ถ้าคุณใช้สิทธิ์ผู้ประกอบการรายย่อยตาม § 19 UStG ก็ตั้งค่าได้เช่นกัน และสมุดเงินสด (Kassenbuch) ก็อยู่ในระบบเดียวกัน',
          'วิธีง่ายๆ คือพิมพ์รายการบริการพร้อมราคาไปให้ Steuerberater ดูในการนัดครั้งหน้า แล้วให้ยืนยันอัตราภาษีทีละบรรทัด ใช้เวลาราวครึ่งชั่วโมง และภายหลังจะต้องแก้น้อยลง',
        ],
      },
      {
        id: 'switching',
        heading: 'เช็กลิสต์สำหรับการย้ายระบบ',
        paragraphs: [
          'เลือกย้ายระบบในสัปดาห์ที่ไม่ยุ่ง และกำหนดวันเริ่มให้ชัด ตั้งแต่วันนั้นการจองใหม่ทั้งหมดผ่านหน้าใหม่ ส่วนนัดที่จองไว้แล้วในสัปดาห์ถัดๆ ไป ให้ลงในปฏิทินใหม่ครั้งเดียว เริ่มต้นด้วยแพ็กเกจฟรีได้',
          'บอกลูกค้าประจำล่วงหน้า ทั้งที่เคาน์เตอร์และทางอีเมลพร้อมลิงก์ใหม่ ใครที่โทรมาจองเป็นประจำก็โทรได้เหมือนเดิม ทีมของคุณลงนัดให้ในปฏิทินโดยตรง',
        ],
        bullets: [
          'ทำรายการบริการพร้อมระยะเวลา ราคา และผู้ให้บริการ โดยแยกนัดปรึกษาและนัดเช็กผลเป็นบริการต่างหาก',
          'ตกลงอัตราภาษีมูลค่าเพิ่มของแต่ละบริการกับ Steuerberater',
          'ตัดสินใจว่าทรีตเมนต์ไหนต้องมีมัดจำ ชำระล่วงหน้า หรือบันทึกบัตร',
          'ให้ทนายหรือสมาคมวิชาชีพตรวจเงื่อนไขการจองและเงื่อนไขการยกเลิก',
          'ใส่ประโยคเรื่องคำถามสุขภาพไว้ในนัดปรึกษา เงื่อนไขการจอง และข้อความตอบกลับประจำ',
          'เริ่มใช้พนักงานต้อนรับ AI ในโหมดร่าง และอ่านตามไปในช่วงสัปดาห์แรกๆ',
          'ใส่ลิงก์จองไว้บนเว็บไซต์ Google โปรไฟล์ Instagram และลายเซ็นอีเมล',
          'ให้ทีมลองจองทดสอบกันหนึ่งวัน',
        ],
      },
    ],
  },
}
