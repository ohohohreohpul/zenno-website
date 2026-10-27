import type { GuideSet } from './types'

/**
 * Practical guide for yoga, Pilates and fitness studios (appointment booking only:
 * trial sessions, privates, reformer, personal training). No group-class capacity,
 * class packs, memberships or waitlists are mentioned, because they are not features.
 * Tax section stays general and always points to the tax advisor.
 */
export const YOGA_STUDIOS_GUIDE: GuideSet = {
  de: {
    kicker: 'Leitfaden für Studios',
    title: ['Probestunde, Absageregel, Steuer:', 'was ein kleines Studio regeln sollte.'],
    intro:
      'Dieser Leitfaden ist für Inhaberinnen und Inhaber kleiner Yoga-, Pilates- und Fitnessstudios geschrieben, die selbst unterrichten und den Rest zwischen zwei Stunden erledigen. Er beginnt bei der Probestunde und endet bei der Frage, was Sie Ihrer Steuerberatung mitbringen.',
    tocLabel: 'Inhalt',
    sections: [
      {
        id: 'trial-pricing',
        heading: 'Probestunden bepreisen und durchführen',
        paragraphs: [
          'Eine kostenlose Probestunde klingt einladend, zieht aber auch Buchungen an, die am Donnerstagabend einfach nicht erscheinen. Ein kleiner Betrag zwischen 10 und 20 €, bezahlt bei der Buchung, sortiert schon vorher: Wer Geld hinterlegt hat, plant den Termin ernsthaft ein. Bieten Sie die Probestunde als Einzeltermin an, darf sie auch mehr kosten, etwa 35 € für 45 Minuten mit kurzem Vorgespräch, wenn Ihre reguläre Einzelstunde bei 75 € liegt.',
          'Ob jemand wiederkommt, entscheidet sich in den Minuten vor und nach der Stunde. Fragen Sie vorher nach Vorerfahrung, Beschwerden und dem Grund für den Besuch. Danach empfehlen Sie konkret, welche Stunde als nächste passt und bei wem. Ein Folgetermin, der schon im Kalender steht, wird seltener vergessen als ein guter Vorsatz auf dem Heimweg.',
          'In Zenno ist die Probestunde eine eigene Leistung mit Dauer, Preis und Lehrkraft. Sie wird per Vorkasse über Stripe bezahlt und ohne Kundenkonto gebucht.',
        ],
        bullets: [
          'Preis festlegen und bei der Buchung kassieren, auch wenn er klein ist',
          'Am Ende eine bestimmte nächste Stunde mit Uhrzeit vorschlagen',
          'Neue Kundschaft innerhalb einer Woche persönlich ansprechen, falls noch kein Folgetermin gebucht ist',
        ],
      },
      {
        id: 'cancellation-rule',
        heading: 'Eine faire Absage- und No-Show-Regel',
        paragraphs: [
          'Eine gute Regel passt in einen Satz, den Ihre Kundschaft auswendig kann. Für Einzelstunden und Personal Training reichen meist 24 Stunden Frist. Bei der Reformer-Privatstunde um 7:00 Uhr sind 48 Stunden sinnvoller, weil Sie den Platz am Vorabend kaum noch neu vergeben. Wer später absagt oder nicht kommt, zahlt einen festen Betrag, zum Beispiel die Hälfte des Preises oder bei Einzelstunden den vollen Preis.',
          'Die Regel muss vor der Buchung sichtbar sein, auf der Buchungsseite und in Ihren AGB. Lassen Sie die Formulierung einmal von einer Anwältin oder einem Anwalt prüfen. Einziehen müssen Sie die Gebühr trotzdem nicht jedes Mal: Verpasst eine Stammkundin nach drei Jahren zum ersten Mal einen Termin, ist Kulanz oft die bessere Entscheidung.',
          'Mit Zenno verlangen Sie Vorkasse oder lassen die Karte bei der Buchung über Stripe hinterlegen und berechnen bei No-Show oder zu später Absage die Gebühr, die Sie festgelegt haben. Absagen und Verschieben erledigt die Kundschaft selbst im Kundenportal, ohne Nachricht an Sie.',
        ],
      },
      {
        id: 'services-teachers',
        heading: 'Leistungen und Lehrkräfte anlegen',
        paragraphs: [
          'Legen Sie jede Leistung so an, wie Kundschaft sie bucht. Ein typisches kleines Studio kommt mit wenigen Einträgen aus: Probestunde 60 Minuten für 15 €, Yoga-Einzelstunde 60 Minuten für 75 €, Reformer-Privatstunde 55 Minuten für 85 €, Personal Training 45 Minuten für 70 €. Sieben Varianten von Vinyasa mit leicht unterschiedlichen Preisen führen dazu, dass Interessierte abbrechen, bevor sie gebucht haben.',
          'Rechnen Sie die Zeit zwischen zwei Terminen in die Dauer ein. Am Reformer brauchen Sie nach jeder Stunde einige Minuten zum Abwischen und Umstellen der Federn. Wer den ganzen Vormittag 60-Minuten-Termine hintereinander legt, beginnt um 8:00 Uhr pünktlich und ist um 12:00 Uhr eine Viertelstunde hinterher. Mit 55 Minuten Dauer im Stundentakt bleibt die Pause eingebaut.',
          'Jede Lehrkraft bekommt eigene Arbeitszeiten und nur die Leistungen, die sie wirklich gibt. Arbeitet Ihre Pilates-Trainerin dienstags und donnerstags von 7 bis 13 Uhr, sieht die Kundschaft Reformer-Termine bei ihr auch nur in diesen Fenstern. Im Kassenkalender hat jede Lehrkraft eine eigene Spalte.',
        ],
      },
      {
        id: 'ai-assistants',
        heading: 'Was KI-Assistenten brauchen, um Sie zu buchen',
        paragraphs: [
          'Wer ChatGPT, Perplexity oder Google nach einer Yoga-Probestunde in der Nähe fragt, bekommt nur Studios vorgeschlagen, deren Angebot der Assistent lesen kann. Eine Preisliste als Foto in der Instagram-Story, ein PDF auf der Website oder „Preise auf Anfrage“ helfen dabei wenig. Der Assistent braucht dieselben Angaben wie ein Mensch am Telefon, nur ordentlich aufgeschrieben und an einer festen Adresse.',
          'Ihre Zenno-Seite stellt Angebote, Preise und freie Zeiten in einem Format bereit, das KI-Assistenten lesen, und nimmt Buchungen ohne Anruf an. Damit ist Ihr Studio bereit, von KI-Assistenten gebucht zu werden. Sie entscheiden, ob solche Buchungen automatisch angenommen werden oder ob Sie sie bestätigen. Wie oft ein Assistent Ihr Studio empfiehlt, liegt beim jeweiligen Anbieter und lässt sich von keiner Software garantieren.',
        ],
        bullets: [
          'Eindeutige Leistungsnamen wie „Yoga-Probestunde“ oder „Reformer-Privatstunde“ statt Fantasienamen',
          'Ein fester Preis und die Dauer in Minuten, auch für die Probestunde',
          'Echte freie Zeiten, die sich mit Ihrem Kalender aktualisieren',
          'Eine eigene Buchungsseite mit Studioname und Adresse',
        ],
      },
      {
        id: 'english-clients',
        heading: 'Englischsprachige Kundschaft gut bedienen',
        paragraphs: [
          'In Städten wie Berlin, Hamburg oder München fragt ein Teil der Interessierten auf Englisch an. Die Hürden liegen meist vor der Stunde: eine Buchungsseite nur auf Deutsch, AGB, die niemand versteht, oder eine deutsche Antwort auf eine englische Nachricht um 22 Uhr.',
          'Schreiben Sie in den Leistungsnamen, in welcher Sprache unterrichtet wird, etwa „Vinyasa-Einzelstunde (DE/EN)“. Halten Sie Ihre Absageregel in beiden Sprachen bereit und sagen Sie bei der Probestunde kurz, was mitzubringen ist und ob es Matten vor Ort gibt.',
          'Die Zenno-Buchungsseite gibt es auf Deutsch und Englisch. Die KI-Rezeption antwortet auf WhatsApp, per E-Mail und im Website-Chat auf Deutsch, Englisch oder Thai, je nachdem, wie geschrieben wird. Fragt jemand, ob die Stunde mit einem Bandscheibenvorfall geht, beantwortet die KI das nicht selbst und gibt die Nachricht als „Braucht Sie“ an Sie weiter.',
        ],
      },
      {
        id: 'switching',
        heading: 'Umstieg von Papier, Instagram-Nachrichten oder einem anderen Tool',
        paragraphs: [
          'Wählen Sie für den Wechsel eine ruhigere Woche. Im Januar, wenn die Vorsätze für das neue Jahr Probestunden bringen, haben Sie dafür keinen Kopf. Rechnen Sie mit etwa zwei Wochen, in denen alte und neue Wege parallel laufen, weil Stammkundschaft aus Gewohnheit weiter per Nachricht bucht.',
          'Das größte Risiko sind Termine, die nur in einem Chatverlauf oder im Papierkalender stehen. Gehen Sie vor dem Stichtag alle offenen Unterhaltungen durch und tragen Sie jeden vereinbarten Termin der nächsten Wochen in den neuen Kalender ein. Danach antworten Sie auf Buchungsanfragen freundlich mit dem Link, bis er sich herumgesprochen hat.',
        ],
        bullets: [
          'Leistungen, Lehrkräfte und Arbeitszeiten anlegen',
          'Vereinbarte Termine der nächsten Wochen übertragen',
          'Liste der offenen Gutscheine bereithalten, damit keiner verloren geht',
          'Kundendaten nur übernehmen, wenn das datenschutzrechtlich geklärt ist',
          'Buchungslink in Instagram-Bio, Google-Unternehmensprofil und Website setzen',
          'Stammkundschaft persönlich mit Link informieren',
          'Das alte Tool erst kündigen, wenn alle Termine übertragen sind',
        ],
      },
      {
        id: 'tax-basics',
        heading: 'Steuerliche Grundlagen für kleine Studios',
        paragraphs: [
          'Viele kleine Studios starten als Kleinunternehmer nach § 19 UStG. Nach der seit 2025 geltenden Regel darf der Umsatz im Vorjahr 25.000 € nicht überschritten haben und im laufenden Jahr 100.000 € nicht überschreiten. Sie weisen dann keine Umsatzsteuer aus, können aber auch keine Vorsteuer ziehen, etwa beim Kauf von zwei Reformern.',
          'Liegen Sie darüber, braucht jede Leistung den passenden Steuersatz. Ob einzelne Angebote anders behandelt werden, zum Beispiel zertifizierte Präventionskurse, und wann bei verkauften Gutscheinen die Steuer fällig wird, ist eine Frage für Ihre Steuerberatung. In Zenno stellen Sie die Kleinunternehmerregelung ein oder hinterlegen die Umsatzsteuer je Leistung. Die Monats- oder Quartalsübersicht und den DATEV-Export geben Sie an die Steuerberatung, Barzahlungen am Tresen landen im Kassenbuch.',
          'Dieser Abschnitt ersetzt keine Steuerberatung. Bitte klären Sie mit Ihrer Steuerberaterin oder Ihrem Steuerberater, was für Ihr Studio gilt. Diese Fragen können Sie zum nächsten Termin mitnehmen:',
        ],
        bullets: [
          'Komme ich für die Kleinunternehmerregelung in Frage, und wie lange noch?',
          'Welcher Steuersatz gilt für Einzelstunden, Personal Training und Gutscheine?',
          'Wie halte ich Barzahlungen im Kassenbuch richtig fest?',
        ],
      },
    ],
  },
  en: {
    kicker: 'A guide for studios',
    title: ['Trials, cancellations, tax:', 'what a small studio should settle.'],
    intro:
      'This guide is written for owners of small yoga, Pilates and fitness studios in Germany who teach themselves and run everything else between sessions. It starts with the trial session and ends with the questions to take to your tax advisor.',
    tocLabel: 'Contents',
    sections: [
      {
        id: 'trial-pricing',
        heading: 'Pricing and running trial sessions',
        paragraphs: [
          'A free trial sounds welcoming, but it also attracts bookings that simply don’t turn up on Thursday evening. A small charge of €10 to €20, paid at booking, sorts people out in advance: someone who has already paid tends to take the slot seriously. If the trial is a one-to-one session, it can cost more, say €35 for 45 minutes with a short intake chat, when your regular private is €75.',
          'Whether someone comes back is decided in the minutes before and after the session. Beforehand, ask about experience, injuries and why they came. Afterwards, recommend a specific next session and a specific teacher. A follow-up already in the calendar is forgotten less often than a good intention on the way home.',
          'In Zenno the trial is its own service with duration, price and teacher. It is prepaid through Stripe, and clients book without creating an account.',
        ],
        bullets: [
          'Set a price and take it at booking, even if it is small',
          'End by suggesting one specific next session with a time',
          'Contact new clients personally within a week if they haven’t booked again',
        ],
      },
      {
        id: 'cancellation-rule',
        heading: 'A fair cancellation and no-show rule',
        paragraphs: [
          'A good rule fits into one sentence your clients can repeat. For privates and personal training, 24 hours’ notice usually works. For a 7:00 am reformer private, 48 hours makes more sense, because you can hardly fill that spot the evening before. Anyone who cancels later or doesn’t come pays a fixed amount, for example half the price, or the full price for one-to-one sessions.',
          'The rule has to be visible before booking, on the booking page and in your terms. Have a lawyer check the wording once. You don’t have to charge the fee every time: when a regular of three years misses her first session, letting it go is often the better call.',
          'With Zenno you ask for prepayment, or clients leave a card on file through Stripe at booking and you charge the fee you set for a no-show or late cancellation. Clients cancel and reschedule themselves in the client portal, without messaging you.',
        ],
      },
      {
        id: 'services-teachers',
        heading: 'Setting up services and teachers',
        paragraphs: [
          'Set up each service the way clients book it. A typical small studio needs only a few entries: trial session 60 minutes for €15, yoga private 60 minutes for €75, reformer private 55 minutes for €85, personal training 45 minutes for €70. Seven variations of vinyasa at slightly different prices mean people give up before they book.',
          'Build the gap between appointments into the duration. On the reformer you need a few minutes after every session to wipe down and change the springs. Book 60-minute sessions back to back all morning and you start on time at 8:00 and run a quarter of an hour late by noon. With a 55-minute duration on the hour, the break is built in.',
          'Each teacher gets their own working hours and only the services they actually teach. If your Pilates instructor works Tuesdays and Thursdays from 7 to 13, clients only see reformer slots with her in those windows. In the POS calendar every teacher has their own column.',
        ],
      },
      {
        id: 'ai-assistants',
        heading: 'What AI assistants need to find and book you',
        paragraphs: [
          'When someone asks ChatGPT, Perplexity or Google for a yoga trial nearby, the assistant can only suggest studios whose offer it can read. A price list as a photo in your Instagram story, a PDF on your website or “prices on request” don’t help much. The assistant needs the same information a person on the phone would, written out properly at a fixed address.',
          'Your Zenno page publishes offers, prices and free times in a format AI assistants read, and it accepts bookings without a phone call. That makes your studio ready for AI assistants to book you. You decide whether those bookings are accepted automatically or wait for your approval. How often an assistant recommends you is up to the company behind it, and no software can promise that.',
        ],
        bullets: [
          'Plain service names such as “Yoga trial session” or “Reformer private” instead of creative titles',
          'A fixed price and the duration in minutes, including for the trial',
          'Real free times that update with your calendar',
          'Your own booking page with studio name and address',
        ],
      },
      {
        id: 'english-clients',
        heading: 'Serving an English-speaking clientele',
        paragraphs: [
          'In cities like Berlin, Hamburg or Munich, part of your enquiries arrive in English. The friction usually comes before the session: a booking page only in German, terms nobody understands, or a German reply to an English message at 10 pm.',
          'Put the teaching language in the service name, for example “Vinyasa private (DE/EN)”. Keep your cancellation rule in both languages, and tell trial clients what to bring and whether mats are provided.',
          'The Zenno booking page is available in German and English. The AI receptionist answers on WhatsApp, by email and in your website chat in German, English or Thai, depending on how the client writes. If someone asks whether the class is fine with a slipped disc, the AI doesn’t answer that itself and passes the message to you as “Needs you”.',
        ],
      },
      {
        id: 'switching',
        heading: 'Switching from paper, Instagram DMs or another tool',
        paragraphs: [
          'Pick a quieter week for the switch. In January, when New Year resolutions bring trial requests, you won’t have the head space. Expect about two weeks in which old and new channels run side by side, because regulars keep booking by message out of habit.',
          'The biggest risk is appointments that exist only in a chat thread or a paper diary. Before the cut-over, go through every open conversation and enter each agreed appointment for the coming weeks into the new calendar. After that, answer booking requests kindly with the link until word gets around.',
        ],
        bullets: [
          'Add services, teachers and working hours',
          'Transfer agreed appointments for the coming weeks',
          'Keep a list of open gift cards so none get lost',
          'Only move client data over once data protection is cleared',
          'Add the booking link to your Instagram bio, Google Business Profile and website',
          'Tell regulars personally and send them the link',
          'Cancel the old tool only after every appointment has moved',
        ],
      },
      {
        id: 'tax-basics',
        heading: 'Tax basics for small studios',
        paragraphs: [
          'Many small studios start under the Kleinunternehmer rule in § 19 UStG. Under the rule in force since 2025, turnover must not have exceeded €25,000 in the previous year and must not exceed €100,000 in the current year. You then charge no VAT, but you also can’t reclaim input VAT, for example when you buy two reformers.',
          'Above the limit, every service needs the right VAT rate. Whether particular offers are treated differently, such as certified prevention courses, and when VAT is due on gift cards you sell, are questions for your tax advisor. In Zenno you switch on the Kleinunternehmer rule or set VAT per service. The monthly or quarterly overview and the DATEV export go to your tax advisor, and cash payments at the desk go into the cash book.',
          'This section is not tax advice. Please check with your tax advisor what applies to your studio. You can take these questions to your next appointment:',
        ],
        bullets: [
          'Do I qualify for the Kleinunternehmer rule, and for how long?',
          'Which VAT rate applies to privates, personal training and gift cards?',
          'How do I record cash payments correctly in the cash book?',
        ],
      },
    ],
  },
  th: {
    kicker: 'คู่มือสำหรับสตูดิโอ',
    title: ['คลาสทดลอง กฎการยกเลิก ภาษี', 'เรื่องที่สตูดิโอเล็กควรจัดให้ลงตัว'],
    intro:
      'คู่มือนี้เขียนสำหรับเจ้าของสตูดิโอโยคะ พิลาทิส และฟิตเนสขนาดเล็กในเยอรมนี ที่สอนเองและจัดการงานอื่นทั้งหมดในช่วงพักระหว่างคลาส เนื้อหาไล่ตั้งแต่การตั้งราคาคลาสทดลอง กฎการยกเลิกที่ยุติธรรม การตั้งค่าบริการและครู ผู้ช่วย AI ลูกค้าที่พูดภาษาอังกฤษ การย้ายจากสมุดนัดหรือ Instagram ไปจนถึงพื้นฐานเรื่องภาษี',
    tocLabel: 'สารบัญ',
    sections: [
      {
        id: 'trial-pricing',
        heading: 'ตั้งราคาและจัดคลาสทดลอง',
        paragraphs: [
          'คลาสทดลองฟรีฟังดูน่าสนใจ แต่ก็ดึงการจองที่ไม่มาจริงในเย็นวันพฤหัสด้วย การเก็บเงินเล็กน้อยราว €10 ถึง €20 ตอนจองช่วยคัดคนได้ตั้งแต่ต้น คนที่จ่ายแล้วมักตั้งใจมาจริง ถ้าคลาสทดลองเป็นแบบตัวต่อตัว ก็ตั้งราคาสูงขึ้นได้ เช่น €35 สำหรับ 45 นาทีพร้อมคุยสั้นๆ ก่อนเริ่ม เมื่อคลาสส่วนตัวปกติของคุณราคา €75',
          'ลูกค้าจะกลับมาหรือไม่ มักตัดสินกันในไม่กี่นาทีก่อนและหลังคลาส ก่อนเริ่มให้ถามเรื่องประสบการณ์ อาการบาดเจ็บ และเหตุผลที่มา หลังจบให้แนะนำคลาสถัดไปที่เหมาะ พร้อมชื่อครูและเวลาที่ชัดเจน นัดครั้งต่อไปที่อยู่ในปฏิทินแล้วถูกลืมน้อยกว่าความตั้งใจที่คิดไว้ระหว่างทางกลับบ้าน',
          'ใน Zenno คลาสทดลองเป็นบริการแยกที่มีระยะเวลา ราคา และครูของตัวเอง ชำระล่วงหน้าผ่าน Stripe และลูกค้าจองได้โดยไม่ต้องสมัครบัญชี',
        ],
        bullets: [
          'ตั้งราคาและเก็บเงินตอนจอง แม้จะเป็นจำนวนเล็กน้อย',
          'ปิดท้ายด้วยการเสนอคลาสถัดไปพร้อมวันและเวลา',
          'ติดต่อลูกค้าใหม่ด้วยตัวเองภายในหนึ่งสัปดาห์ ถ้ายังไม่ได้จองครั้งต่อไป',
        ],
      },
      {
        id: 'cancellation-rule',
        heading: 'กฎการยกเลิกและการไม่มาตามนัดที่ยุติธรรม',
        paragraphs: [
          'กฎที่ดีควรสั้นพอให้ลูกค้าพูดตามได้ในประโยคเดียว สำหรับคลาสส่วนตัวและเทรนนิ่งส่วนตัว แจ้งล่วงหน้า 24 ชั่วโมงมักเพียงพอ แต่คลาสรีฟอร์มเมอร์ส่วนตัวตอน 7:00 น. ควรเป็น 48 ชั่วโมง เพราะคืนก่อนหน้าแทบหาคนมาแทนไม่ได้ ใครยกเลิกช้ากว่านั้นหรือไม่มา ก็จ่ายค่าธรรมเนียมที่กำหนดไว้ เช่น ครึ่งหนึ่งของราคา หรือเต็มราคาสำหรับคลาสตัวต่อตัว',
          'ลูกค้าต้องเห็นกฎนี้ก่อนจอง ทั้งบนหน้าจองและในเงื่อนไขการให้บริการ (AGB) ควรให้ทนายตรวจถ้อยคำสักครั้ง แต่คุณไม่จำเป็นต้องเก็บค่าธรรมเนียมทุกครั้ง ถ้าลูกค้าประจำที่มาสามปีพลาดนัดเป็นครั้งแรก การยกเว้นให้มักเป็นทางเลือกที่ดีกว่า',
          'ใน Zenno คุณให้ชำระล่วงหน้า หรือให้ลูกค้าบันทึกบัตรผ่าน Stripe ตอนจอง แล้วเรียกเก็บค่าธรรมเนียมที่ตั้งไว้เมื่อไม่มาหรือยกเลิกกระชั้นชิด ลูกค้ายกเลิกและเลื่อนนัดเองได้ในพอร์ทัลลูกค้า โดยไม่ต้องส่งข้อความหาคุณ',
        ],
      },
      {
        id: 'services-teachers',
        heading: 'ตั้งค่าบริการและครู',
        paragraphs: [
          'ตั้งบริการแต่ละอย่างให้ตรงกับที่ลูกค้าจองจริง สตูดิโอเล็กส่วนใหญ่ใช้แค่ไม่กี่รายการ เช่น คลาสทดลอง 60 นาที €15 โยคะส่วนตัว 60 นาที €75 รีฟอร์มเมอร์ส่วนตัว 55 นาที €85 และเทรนนิ่งส่วนตัว 45 นาที €70 ถ้ามีวินยาสะเจ็ดแบบที่ราคาต่างกันนิดหน่อย ลูกค้ามักเลิกเลือกก่อนจะจองเสร็จ',
          'รวมเวลาพักระหว่างนัดไว้ในระยะเวลาของบริการ หลังคลาสรีฟอร์มเมอร์ทุกครั้งต้องใช้เวลาเช็ดเครื่องและเปลี่ยนสปริง ถ้าจองนัด 60 นาทีติดกันทั้งเช้า คุณจะเริ่ม 8:00 ตรงเวลา แต่พอเที่ยงจะช้าไปสิบห้านาที ถ้าตั้งไว้ 55 นาทีและเริ่มทุกต้นชั่วโมง เวลาพักก็อยู่ในตารางแล้ว',
          'ครูแต่ละคนมีเวลาทำงานของตัวเอง และมีเฉพาะบริการที่สอนจริง ถ้าครูพิลาทิสของคุณทำงานวันอังคารและพฤหัส 7:00 ถึง 13:00 ลูกค้าก็จะเห็นคิวรีฟอร์มเมอร์กับเธอเฉพาะช่วงนั้น ในปฏิทินหน้าร้านครูแต่ละคนมีคอลัมน์ของตัวเอง',
        ],
      },
      {
        id: 'ai-assistants',
        heading: 'สิ่งที่ผู้ช่วย AI ต้องใช้เพื่อค้นหาและจองสตูดิโอของคุณ',
        paragraphs: [
          'เมื่อมีคนถาม ChatGPT, Perplexity หรือ Google หาคลาสทดลองโยคะใกล้บ้าน ผู้ช่วย AI จะแนะนำได้เฉพาะสตูดิโอที่อ่านข้อมูลได้ ใบราคาที่เป็นรูปใน Instagram Story ไฟล์ PDF บนเว็บไซต์ หรือคำว่า “สอบถามราคา” แทบไม่ช่วยอะไร ผู้ช่วย AI ต้องการข้อมูลแบบเดียวกับที่คนโทรมาถาม แค่ต้องเขียนไว้ชัดเจนในที่อยู่เว็บที่แน่นอน',
          'หน้า Zenno ของคุณเผยแพร่บริการ ราคา และเวลาว่างในรูปแบบที่ผู้ช่วย AI อ่านได้ และรับการจองได้โดยไม่ต้องโทร สตูดิโอของคุณจึงพร้อมให้ผู้ช่วย AI จองได้ คุณเลือกเองว่าจะรับการจองเหล่านี้อัตโนมัติหรือรอให้คุณอนุมัติ ส่วนผู้ช่วย AI จะแนะนำคุณบ่อยแค่ไหน ขึ้นอยู่กับบริษัทที่ให้บริการ AI นั้น ไม่มีซอฟต์แวร์ไหนรับประกันได้',
        ],
        bullets: [
          'ชื่อบริการที่ชัดเจน เช่น “คลาสทดลองโยคะ” หรือ “รีฟอร์มเมอร์ส่วนตัว” แทนชื่อสร้างสรรค์ที่เดาไม่ออก',
          'ราคาที่แน่นอนและระยะเวลาเป็นนาที รวมถึงคลาสทดลอง',
          'เวลาว่างจริงที่อัปเดตตามปฏิทินของคุณ',
          'หน้าจองของคุณเองพร้อมชื่อสตูดิโอและที่อยู่',
        ],
      },
      {
        id: 'english-clients',
        heading: 'ดูแลลูกค้าที่พูดภาษาอังกฤษ',
        paragraphs: [
          'ในเมืองอย่างเบอร์ลิน ฮัมบวร์ก หรือมิวนิก คำถามส่วนหนึ่งมาเป็นภาษาอังกฤษ ปัญหามักเกิดก่อนเริ่มคลาส เช่น หน้าจองมีแต่ภาษาเยอรมัน เงื่อนไขที่ไม่มีใครเข้าใจ หรือตอบข้อความภาษาอังกฤษเป็นภาษาเยอรมันตอนสี่ทุ่ม',
          'ระบุภาษาที่ใช้สอนไว้ในชื่อบริการ เช่น “Vinyasa private (DE/EN)” เตรียมกฎการยกเลิกไว้ทั้งสองภาษา และบอกลูกค้าคลาสทดลองว่าต้องเตรียมอะไรมา มีเสื่อให้ยืมไหม',
          'หน้าจองของ Zenno มีทั้งภาษาเยอรมันและอังกฤษ พนักงานต้อนรับ AI ตอบทาง WhatsApp อีเมล และแชทบนเว็บไซต์เป็นภาษาเยอรมัน อังกฤษ หรือไทย ตามภาษาที่ลูกค้าเขียนมา ถ้ามีคนถามว่าเป็นหมอนรองกระดูกทับเส้นแล้วเรียนได้ไหม AI จะไม่ตอบเอง แต่ส่งข้อความต่อให้คุณในหมวด “ต้องการคุณ”',
        ],
      },
      {
        id: 'switching',
        heading: 'ย้ายจากสมุดนัด ข้อความ Instagram หรือระบบอื่น',
        paragraphs: [
          'เลือกสัปดาห์ที่งานไม่ยุ่งสำหรับการเปลี่ยนระบบ ช่วงมกราคมที่คนตั้งปณิธานปีใหม่และจองคลาสทดลองกันเยอะ คุณจะไม่มีเวลาคิดเรื่องนี้ เผื่อเวลาไว้ราวสองสัปดาห์ที่ช่องทางเก่าและใหม่ใช้ควบคู่กัน เพราะลูกค้าประจำยังเคยชินกับการจองผ่านข้อความ',
          'ความเสี่ยงใหญ่ที่สุดคือนัดที่มีอยู่แค่ในแชทหรือในสมุด ก่อนวันเปลี่ยน ให้ไล่ดูบทสนทนาที่ค้างอยู่ทั้งหมด แล้วลงนัดที่ตกลงกันไว้ในอีกไม่กี่สัปดาห์ข้างหน้าในปฏิทินใหม่ทุกนัด หลังจากนั้นตอบคำขอจองด้วยลิงก์อย่างสุภาพ จนลูกค้าคุ้นเคย',
        ],
        bullets: [
          'เพิ่มบริการ ครู และเวลาทำงาน',
          'ลงนัดที่ตกลงไว้แล้วในอีกไม่กี่สัปดาห์ข้างหน้า',
          'เก็บรายชื่อบัตรของขวัญที่ยังไม่ได้ใช้ไว้ ไม่ให้ตกหล่น',
          'ย้ายข้อมูลลูกค้าเมื่อตรวจสอบเรื่องการคุ้มครองข้อมูลแล้วเท่านั้น',
          'ใส่ลิงก์จองใน bio ของ Instagram, Google Business Profile และเว็บไซต์',
          'แจ้งลูกค้าประจำด้วยตัวเองพร้อมส่งลิงก์',
          'ยกเลิกระบบเก่าหลังจากย้ายนัดครบทุกนัดแล้ว',
        ],
      },
      {
        id: 'tax-basics',
        heading: 'พื้นฐานภาษีสำหรับสตูดิโอเล็ก',
        paragraphs: [
          'สตูดิโอเล็กหลายแห่งเริ่มต้นด้วยกฎผู้ประกอบการรายย่อย (Kleinunternehmer ตาม § 19 UStG) ตามกฎที่ใช้ตั้งแต่ปี 2025 รายได้ปีก่อนต้องไม่เกิน €25,000 และปีปัจจุบันต้องไม่เกิน €100,000 คุณจะไม่ต้องคิดภาษีมูลค่าเพิ่มกับลูกค้า แต่ก็ขอคืนภาษีซื้อไม่ได้ เช่น ตอนซื้อเครื่องรีฟอร์มเมอร์สองเครื่อง',
          'ถ้ารายได้เกินเกณฑ์ ทุกบริการต้องมีอัตราภาษีที่ถูกต้อง บางบริการอาจได้รับการปฏิบัติต่างออกไป เช่น คอร์สป้องกันสุขภาพที่ได้รับการรับรอง และภาษีของบัตรของขวัญต้องจ่ายเมื่อไร เรื่องเหล่านี้ต้องถามนักบัญชีหรือที่ปรึกษาภาษี ใน Zenno คุณเปิดใช้กฎผู้ประกอบการรายย่อย หรือกำหนดภาษีมูลค่าเพิ่มตามบริการ ภาพรวมรายเดือนหรือรายไตรมาสและไฟล์ DATEV ส่งให้นักบัญชีได้ ส่วนเงินสดที่รับหน้าร้านบันทึกในสมุดเงินสด (Kassenbuch)',
          'ส่วนนี้ไม่ใช่คำแนะนำด้านภาษี โปรดตรวจสอบกับที่ปรึกษาภาษีของคุณว่าอะไรใช้กับสตูดิโอของคุณ คำถามเหล่านี้นำไปถามในการนัดครั้งหน้าได้',
        ],
        bullets: [
          'ฉันเข้าเกณฑ์ผู้ประกอบการรายย่อยไหม และจะอยู่ในเกณฑ์ได้อีกนานเท่าไร',
          'คลาสส่วนตัว เทรนนิ่งส่วนตัว และบัตรของขวัญ ใช้อัตราภาษีเท่าไร',
          'ควรบันทึกเงินสดในสมุดเงินสดอย่างไรให้ถูกต้อง',
        ],
      },
    ],
  },
}
