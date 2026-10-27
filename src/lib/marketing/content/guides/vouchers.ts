import type { GuideSet } from './types'

/** Practical guide at the end of the vouchers feature page. */
export const VOUCHERS_GUIDE: GuideSet = {
  de: {
    kicker: 'Praxisleitfaden',
    title: ['Gutscheine übers ganze Jahr,', 'von Weihnachten bis zum Sommer.'],
    intro:
      'Gutscheine bringen Geld, bevor eine Behandlung stattfindet, und oft neue Gäste ins Studio. Dieser Leitfaden zeigt, welche Gutscheinart wann passt, welche Termine im Jahr sich lohnen, wie Sie an der Theke, online und über die KI-Rezeption verkaufen, wie das Einlösen läuft und was Sie mit Anwältin und Steuerberatung klären sollten.',
    tocLabel: 'Inhalt',
    sections: [
      {
        id: 'voucher-types',
        heading: 'Wertgutschein oder Behandlungsgutschein',
        paragraphs: [
          'Ein Wertgutschein ist ein Betrag, etwa 50 oder 100 €, den der Gast für eine beliebige Leistung einsetzt. Für die schenkende Person ist das am einfachsten, sie muss nicht wissen, ob die Schwester lieber eine Gesichtsbehandlung oder eine Fußmassage möchte. Auch für Sie ist er flexibel: Trifft der 50-€-Gutschein auf eine Behandlung für 70 €, zahlt der Gast die Differenz, trifft er auf eine Maniküre für 35 €, bleibt der Rest auf dem Gutschein.',
          'Ein Behandlungsgutschein nennt eine bestimmte Leistung, zum Beispiel „Thai-Massage, 90 Minuten“ oder „Spa-Tag für zwei“. Er wirkt persönlicher und eignet sich für Ihre bekanntesten Behandlungen. Zwei Fragen sollten Sie vorher klären: Was gilt, wenn Ihr Preis steigt, bevor der Gutschein eingelöst wird? Und was passiert, wenn Sie die Behandlung nicht mehr anbieten? Schreiben Sie Ihre Antwort auf und lassen Sie sie anwaltlich prüfen, bevor Sie den ersten Behandlungsgutschein verkaufen.',
          'Viele Studios bieten beides an: runde Werte an der Theke, etwa 25, 50 und 100 €, und zwei oder drei Behandlungsgutscheine für die Geschenke, nach denen Gäste mit Namen fragen.',
        ],
      },
      {
        id: 'voucher-calendar',
        heading: 'Der Gutscheinkalender',
        paragraphs: [
          'Planen Sie jeden Anlass etwa vier Wochen im Voraus: welchen Gutschein Sie hervorheben, welches Foto auf Instagram kommt, was Ihr Team an der Theke sagt. Ein Eintrag im Kalender sorgt dafür, dass die Vorbereitung nicht in dieselbe Woche fällt wie der Anlass selbst.',
          'Gutscheinverkäufe folgen dem Kalender, und jeder Anlass hat eigene Käuferinnen und Käufer:',
        ],
        bullets: [
          'Weihnachten: ab Mitte November anbieten, wenn die ersten Geschenke geplant werden. Das letzte Wochenende vor dem 24. Dezember ist an der Theke voll, online kommen Bestellungen noch spät am Abend, wenn das Studio längst zu ist.',
          'Valentinstag: Paarmassagen und Zeit zu zweit. Ende Januar online stellen.',
          'Muttertag am zweiten Sonntag im Mai: Gesichtsbehandlungen, entspannende Massagen, ein halber Tag für Mütter, die sich selten Zeit nehmen.',
          'Geburtstage gibt es das ganze Jahr. Ein sichtbarer Link „Gutschein verschenken“ auf Ihrer Buchungsseite erreicht die Freundin, der es am Abend vorher einfällt.',
          'Sommer: eine Pediküre vor dem Strandurlaub oder eine Pflege nach der Sonne. Solche Gutscheine helfen, ruhigere Wochen im Juli zu füllen.',
        ],
      },
      {
        id: 'selling-channels',
        heading: 'Verkaufen an der Theke, online und per Nachricht',
        paragraphs: [
          'An der Theke zählt Tempo. Wer auf dem Weg nach draußen einen Gutschein kauft, hat ein paar Minuten, weniger, wenn die Parkuhr läuft. In Zenno ist ein Verkauf an der Theke in drei Schritten erledigt: Gutschein wählen, bezahlen lassen, QR-Code drucken. Legen Sie Umschläge und Schleifen neben die Kasse und ein paar Mustergutscheine gut sichtbar aus, damit Gäste sehen, was sie verschenken würden.',
          'Online steht der Gutschein auf Ihrer Buchungsseite neben Ihren Leistungen, rund um die Uhr. Gäste bezahlen direkt, und der Gutschein mit QR-Code wird sofort ausgestellt. Verlinken Sie die Seite in Ihrem Instagram-Profil und in Ihrem Google-Unternehmensprofil, damit Menschen, die ein Geschenk suchen, sie finden.',
          'Viele Anfragen kommen abends per WhatsApp: „Haben Sie Gutscheine? Etwas für meine Mutter, so um die 80 €?“ Ihre KI-Rezeption beantwortet solche Nachrichten, schlägt einen passenden Wert- oder Behandlungsgutschein vor und schließt den Verkauf ab. Ungewöhnliche Wünsche, etwa zwanzig Gutscheine für eine Firma, gibt sie an Sie weiter.',
        ],
      },
      {
        id: 'redemption',
        heading: 'Einlösen mit QR-Code und Restbetrag',
        paragraphs: [
          'Kommt der Gast zur Behandlung, wird der Gutschein beim Bezahlen gescannt, auf Papier oder auf dem Handy. Der Wert wird von der Rechnung abgezogen. Kostet die Behandlung mehr, zahlt der Gast die Differenz, kostet sie weniger, bleibt der Rest auf dem Gutschein. Ein 100-€-Gutschein für eine Massage zu 65 € hat danach noch 35 €, und genau das zeigt der nächste Scan.',
          'Damit fallen die Diskussionen an der Theke weg. Niemand sucht eine handschriftliche Nummer in einem Ordner, und Ihr Team sieht sofort, ob ein Gutschein schon eingelöst wurde.',
          'Sprechen Sie den Restbetrag beim Einlösen an: „Auf Ihrem Gutschein sind noch 35 €. Möchten Sie die Pediküre gleich für nächstes Mal buchen?“ Mit diesem Satz kann aus einem Restbetrag der nächste Termin werden.',
        ],
      },
      {
        id: 'design-wording',
        heading: 'Gestaltung und Formulierung',
        paragraphs: [
          'Ein Gutschein ist zuerst ein Geschenk und sollte auch so aussehen. Drucken Sie ihn auf gutes Papier in Ihren Farben, mit Logo und dem QR-Code in einer Ecke, wo er nicht dominiert. An der Theke reicht eine gefaltete Karte im Umschlag mit Schleife, vielleicht mit einer kleinen Probe des Öls, das Sie verwenden. Wer online kauft, leitet den Gutschein weiter, also sollte die digitale Fassung auf dem Handy genauso gut aussehen.',
          'Beschreiben Sie das Erlebnis in einfachen Worten. „90 Minuten Thai-Massage, danach Tee in der Lounge“ sagt mehr als „Wellness-Erlebnis“. Kleingedrucktes, das nach Falle klingt, schreckt ab. Kann ein Gutschein nicht bar ausgezahlt oder für Produkte genutzt werden, sagen Sie das in einem freundlichen Satz, sobald Ihre Anwältin oder Ihr Anwalt die Formulierung geprüft hat.',
          'Auf den Gutschein gehört:',
        ],
        bullets: [
          'der Wert oder die genannte Behandlung',
          'Gutscheincode und QR-Code',
          'Name, Adresse und Telefon- oder WhatsApp-Nummer des Studios',
          'wie man bucht, zum Beispiel der Link zur Buchungsseite',
          'die Gültigkeit, so formuliert, wie Ihre Anwältin oder Ihr Anwalt sie freigegeben hat',
          'Platz für einen persönlichen Gruß',
        ],
      },
      {
        id: 'validity-accounting',
        heading: 'Gültigkeit und Buchhaltung',
        paragraphs: [
          'Wie lange ein Gutschein gilt und ob Sie die Gültigkeit begrenzen dürfen, ist eine Rechtsfrage mit eigenen Regeln. Eine aufgedruckte Frist, die diesen Regeln nicht entspricht, kann später Ärger machen. Übernehmen Sie keine Frist vom Gutschein eines anderen Studios oder aus einem Forum. Fragen Sie eine Anwältin oder einen Anwalt, welche Gültigkeit Sie drucken können, wie Sie Behandlungsgutscheine nach einer Preiserhöhung behandeln und was mit nicht genutzten Restbeträgen geschieht.',
          'Auch die Buchhaltung hat eigene Fragen. Ein Gutschein aus dem Dezember wird vielleicht erst im März eingelöst, und die Art des Gutscheins, Wert oder Behandlung, kann beeinflussen, wie und wann er verbucht wird. Klären Sie mit Ihrer Steuerberatung vor der Saison, wie Sie jede Art behandeln, und vereinbaren Sie, was sie jeden Monat von Ihnen braucht.',
          'Zenno erfasst jeden Gutscheinverkauf und jede Einlösung im Kassenbuch und im DATEV-Export, sodass Ihre Steuerberatung die Zahlen vorliegen hat. Wie sie verbucht werden, entscheidet die Steuerberatung.',
        ],
      },
      {
        id: 'season-checklist',
        heading: 'Checkliste vor der Weihnachtssaison',
        paragraphs: [
          'Anfang November ist ein guter Zeitpunkt, bevor die ersten Weihnachtskäufe an der Theke ankommen. Schauen Sie im Januar nach, was verkauft wurde: welche Werte, welche Behandlungen, wie viel online und wie viel an der Theke. Daraus ergibt sich, was Sie zum Valentinstag ändern.',
          'Gehen Sie diese Punkte einmal mit Ihrem Team durch:',
        ],
        bullets: [
          'Wertgutscheine und zwei oder drei Behandlungsgutscheine sind angelegt und bepreist.',
          'Ihre Anwältin oder Ihr Anwalt hat die Gültigkeit und die Regel bei Preiserhöhungen geprüft.',
          'Ihre Steuerberatung weiß, wie Sie Gutscheinverkäufe und Einlösungen verbuchen.',
          'Gedruckte Gutscheine, Umschläge und Schleifen reichen für den Dezember.',
          'Der Gutschein ist auf Ihrer Buchungsseite sichtbar und auf Instagram und Google verlinkt.',
          'Ihre KI-Rezeption kennt die Gutscheinangebote und den letzten Abholtag für gedruckte Gutscheine.',
          'Das Team weiß, wie man an der Theke verkauft und per QR-Code einlöst.',
          'Sie haben einen Testgutschein verkauft und eingelöst, einschließlich Restbetrag.',
        ],
      },
    ],
  },
  en: {
    kicker: 'Practical guide',
    title: ['Gift vouchers all year,', 'from Christmas to summer.'],
    intro:
      'Vouchers bring in money before a treatment happens and often bring new guests through the door. This guide covers which kind of voucher fits which situation, the dates worth planning for, how to sell at the counter, online and through your AI receptionist, how redemption works, and what to clarify with your lawyer and tax advisor.',
    tocLabel: 'Contents',
    sections: [
      {
        id: 'voucher-types',
        heading: 'Value vouchers or treatment vouchers',
        paragraphs: [
          'A value voucher is an amount, say €50 or €100, that the guest spends on whatever they like. It is the easiest gift for the buyer, who does not need to know whether her sister prefers a facial or a foot massage. It is flexible for you as well: if the €50 voucher meets a €70 treatment, the guest pays the difference, and if it meets a €35 manicure, the rest stays on the voucher.',
          'A treatment voucher names a specific service, such as "Thai massage, 90 minutes" or "Spa day for two". It feels more personal and works well for the treatments you are known for. Think through two questions first. What applies if your price goes up before the voucher is used? And what happens if you stop offering the treatment? Write down your answer and have a lawyer check it before you sell the first treatment voucher.',
          'Many studios offer both: round values at the counter, for example €25, €50 and €100, and two or three treatment vouchers for the gifts people ask for by name.',
        ],
      },
      {
        id: 'voucher-calendar',
        heading: 'The voucher calendar',
        paragraphs: [
          'Plan each occasion about four weeks ahead: which voucher you put first, which photo goes on Instagram, what your team says at the counter. A reminder in your calendar keeps the preparation from landing in the same week as the occasion.',
          'Voucher sales follow the calendar, and each occasion has its own buyers:',
        ],
        bullets: [
          'Christmas: start selling in mid-November, when people begin planning gifts. The last weekend before 24 December is busy at the counter, and online orders keep coming late in the evening, long after you have closed.',
          'Valentine’s Day: couples massages and time for two. Put them online in late January.',
          'Mother’s Day, the second Sunday in May: facials, relaxing massages, a half day for mothers who rarely take time for themselves.',
          'Birthdays happen all year. A visible "Give a voucher" link on your booking page catches the friend who remembers the evening before.',
          'Summer: a pedicure before the beach holiday or an after-sun treatment. Vouchers like these help fill quieter weeks in July.',
        ],
      },
      {
        id: 'selling-channels',
        heading: 'Selling at the counter, online and by message',
        paragraphs: [
          'At the counter, speed counts. A guest buying a voucher on the way out has a few minutes, fewer if the parking meter is running. In Zenno a counter sale takes three taps: choose the voucher, take payment, print the QR code. Keep envelopes and ribbons next to the till and a few sample vouchers on display, so people can see what they would be giving.',
          'Online, the voucher sits on your booking page next to your services, day and night. Guests pay right there, and the voucher with its QR code is issued at once. Link the page from your Instagram profile and your Google Business Profile, so people looking for a gift find it.',
          'Many requests arrive on WhatsApp in the evening: "Do you have vouchers? Something for my mum, around €80?" Your AI receptionist answers these, suggests a value or treatment voucher that fits, and completes the sale. Unusual requests, such as twenty vouchers for a company, she passes to you.',
        ],
      },
      {
        id: 'redemption',
        heading: 'Redemption with QR code and remaining balance',
        paragraphs: [
          'When the guest comes in, the voucher is scanned at checkout, on paper or on a phone. The value comes off the bill. If the treatment costs more, the guest pays the difference; if it costs less, the rest stays on the voucher. A €100 voucher used for a €65 massage has €35 left, and the next scan shows exactly that.',
          'This takes the arguments out of the counter conversation. Nobody hunts for a handwritten number in a folder, and your team sees straight away whether a voucher has already been used.',
          'Mention the balance when the guest redeems: "There’s €35 left on your voucher. Would you like to book the pedicure for next time?" That one sentence can turn a leftover amount into the next appointment.',
        ],
      },
      {
        id: 'design-wording',
        heading: 'Design and wording',
        paragraphs: [
          'A voucher is a gift first, and it should look like one. Print it on good paper in your colours, with your logo and the QR code in a corner where it does not dominate. At the counter, a folded card in an envelope with a ribbon is enough, perhaps with a small sample of the oil you use. Online buyers forward the voucher, so the digital version should look just as good on a phone.',
          'Describe the experience in plain words. "90 minutes of Thai massage, then tea in the lounge" says more than "wellness experience". Fine print that sounds like a trap puts people off. If a voucher cannot be paid out in cash or used for products, say so in one friendly sentence, once your lawyer has checked the wording.',
          'What belongs on the voucher:',
        ],
        bullets: [
          'the value or the named treatment',
          'the voucher code and QR code',
          'your studio name, address and phone or WhatsApp number',
          'how to book, for example the link to your booking page',
          'the validity, worded the way your lawyer approved it',
          'space for a personal message',
        ],
      },
      {
        id: 'validity-accounting',
        heading: 'Validity and accounting',
        paragraphs: [
          'How long a voucher stays valid, and whether you may limit it, is a legal question with its own rules in Germany. A printed period that does not follow those rules can cause trouble later. Do not copy a period from another studio’s voucher or from a forum. Ask a lawyer which validity you can print, how to handle treatment vouchers after a price increase, and what happens to unused balances.',
          'Accounting has its own questions. A voucher sold in December may be redeemed in March, and the type of voucher, value or treatment, can affect how and when it is booked. Clarify with your tax advisor before the season how you handle each type, and agree on what they need from you each month.',
          'Zenno records every voucher sale and every redemption in the cash book and the DATEV export, so your tax advisor has the figures. How they are booked is your tax advisor’s decision.',
        ],
      },
      {
        id: 'season-checklist',
        heading: 'Checklist before the holiday season',
        paragraphs: [
          'Early November is a good moment, before the first Christmas buyers reach the counter. In January, look at what sold: which values, which treatments, how much online and how much at the counter. That tells you what to change for Valentine’s Day.',
          'Go through these points once with your team:',
        ],
        bullets: [
          'Value vouchers and two or three treatment vouchers are set up and priced.',
          'Your lawyer has checked the validity wording and the rule for price increases.',
          'Your tax advisor knows how you will book voucher sales and redemptions.',
          'Printed vouchers, envelopes and ribbons will last through December.',
          'The voucher is visible on your booking page and linked from Instagram and Google.',
          'Your AI receptionist knows the voucher offers and the last pick-up day for printed vouchers.',
          'The team knows how to sell at the counter and how to redeem by QR code.',
          'You have sold and redeemed a test voucher, including a remaining balance.',
        ],
      },
    ],
  },
  th: {
    kicker: 'คู่มือใช้งานจริง',
    title: ['ขายบัตรของขวัญได้ทั้งปี', 'ตั้งแต่คริสต์มาสจนถึงหน้าร้อน'],
    intro:
      'บัตรของขวัญทำให้ร้านได้เงินก่อนที่ลูกค้าจะมาใช้บริการ และมักพาลูกค้าใหม่เข้าร้านด้วย คู่มือนี้อธิบายว่าบัตรแบบไหนเหมาะกับสถานการณ์ไหน ช่วงไหนของปีที่ควรวางแผน ขายที่เคาน์เตอร์ ออนไลน์ และผ่านพนักงานต้อนรับ AI อย่างไร การใช้บัตรทำงานอย่างไร และเรื่องไหนควรถามทนายกับที่ปรึกษาภาษี',
    tocLabel: 'สารบัญ',
    sections: [
      {
        id: 'voucher-types',
        heading: 'บัตรมูลค่า หรือบัตรทรีตเมนต์',
        paragraphs: [
          'บัตรมูลค่าคือบัตรที่ระบุจำนวนเงิน เช่น 50 € หรือ 100 € ลูกค้าใช้กับบริการอะไรก็ได้ คนซื้อให้ง่ายที่สุด ไม่ต้องรู้ว่าน้องสาวชอบทำหน้าหรือนวดเท้ามากกว่า สำหรับร้านก็ยืดหยุ่น ถ้าบัตร 50 € ใช้กับทรีตเมนต์ราคา 70 € ลูกค้าจ่ายส่วนต่าง ถ้าใช้กับทำเล็บมือ 35 € ยอดที่เหลือยังอยู่ในบัตร',
          'บัตรทรีตเมนต์ระบุบริการชัดเจน เช่น "นวดไทย 90 นาที" หรือ "วันสปาสำหรับสองคน" ดูเป็นของขวัญที่ตั้งใจเลือกมากกว่า และเหมาะกับทรีตเมนต์ที่ร้านขึ้นชื่อ ก่อนขายให้คิดสองเรื่อง ถ้าร้านขึ้นราคาก่อนลูกค้ามาใช้บัตรจะทำอย่างไร และถ้าร้านเลิกทำทรีตเมนต์นั้นจะทำอย่างไร เขียนคำตอบไว้ แล้วให้ทนายตรวจก่อนขายบัตรทรีตเมนต์ใบแรก',
          'หลายร้านขายทั้งสองแบบ บัตรมูลค่าเลขกลมๆ ที่เคาน์เตอร์ เช่น 25 € 50 € และ 100 € กับบัตรทรีตเมนต์อีกสองสามแบบที่ลูกค้าถามหาบ่อย',
        ],
      },
      {
        id: 'voucher-calendar',
        heading: 'ปฏิทินขายบัตรของขวัญ',
        paragraphs: [
          'วางแผนแต่ละเทศกาลล่วงหน้าราวสี่สัปดาห์ ว่าจะดันบัตรแบบไหน ใช้รูปไหนลง Instagram และทีมจะพูดอะไรที่เคาน์เตอร์ ใส่เตือนไว้ในปฏิทิน การเตรียมตัวจะได้ไม่ไปตรงกับสัปดาห์ของเทศกาลพอดี',
          'ยอดขายบัตรของขวัญขึ้นลงตามปฏิทิน และแต่ละเทศกาลมีคนซื้อคนละกลุ่ม',
        ],
        bullets: [
          'คริสต์มาส เริ่มขายกลางเดือนพฤศจิกายน ตอนที่คนเริ่มคิดเรื่องของขวัญ สุดสัปดาห์สุดท้ายก่อนวันที่ 24 ธันวาคม เคาน์เตอร์จะยุ่งมาก และออนไลน์ยังมีคนสั่งตอนดึกหลังร้านปิดไปนานแล้ว',
          'วันวาเลนไทน์ นวดคู่และเวลาพักผ่อนสำหรับสองคน ลงขายออนไลน์ปลายเดือนมกราคม',
          'วันแม่ของเยอรมนี ตรงกับวันอาทิตย์ที่สองของเดือนพฤษภาคม ทรีตเมนต์หน้า นวดผ่อนคลาย หรือครึ่งวันสำหรับคุณแม่ที่ไม่ค่อยมีเวลาให้ตัวเอง',
          'วันเกิดมีทั้งปี ลิงก์ "ซื้อบัตรของขวัญ" ที่เห็นชัดบนหน้าจอง ช่วยให้เพื่อนที่เพิ่งนึกได้ตอนค่ำก่อนวันเกิดซื้อทัน',
          'หน้าร้อน ทำเล็บเท้าก่อนไปทะเล หรือทรีตเมนต์บำรุงผิวหลังโดนแดด บัตรแบบนี้ช่วยเติมคิวในสัปดาห์ที่เงียบช่วงเดือนกรกฎาคม',
        ],
      },
      {
        id: 'selling-channels',
        heading: 'ขายที่เคาน์เตอร์ ออนไลน์ และทางข้อความ',
        paragraphs: [
          'ที่เคาน์เตอร์ ความเร็วสำคัญ ลูกค้าที่ซื้อบัตรตอนจะกลับมีเวลาไม่กี่นาที ยิ่งถ้ามิเตอร์จอดรถกำลังเดินอยู่ ใน Zenno การขายที่เคาน์เตอร์ใช้สามขั้นตอน เลือกบัตร รับเงิน พิมพ์ QR code เตรียมซองกับโบว์ไว้ข้างเครื่องคิดเงิน และวางบัตรตัวอย่างให้ลูกค้าเห็นว่าจะได้ของขวัญหน้าตาแบบไหน',
          'ออนไลน์ บัตรของขวัญอยู่บนหน้าจองข้างรายการบริการ ซื้อได้ตลอดเวลา ลูกค้าจ่ายเงินที่หน้านั้นเลย และบัตรพร้อม QR code ออกให้ทันที ใส่ลิงก์หน้านี้ไว้ในโปรไฟล์ Instagram และ Google Business Profile ของร้าน คนที่หาของขวัญจะได้เจอ',
          'คำถามจำนวนมากมาทาง WhatsApp ตอนค่ำ เช่น "มีบัตรของขวัญไหมคะ อยากได้ให้แม่ ประมาณ 80 €" พนักงานต้อนรับ AI ตอบได้ เสนอบัตรมูลค่าหรือบัตรทรีตเมนต์ที่เหมาะ และปิดการขายให้ ถ้าเป็นคำขอแปลกๆ เช่น บริษัทอยากซื้อยี่สิบใบ เธอจะส่งต่อให้คุณ',
        ],
      },
      {
        id: 'redemption',
        heading: 'ใช้บัตรด้วย QR code และยอดคงเหลือ',
        paragraphs: [
          'เมื่อลูกค้ามาใช้บริการ ก็สแกนบัตรตอนจ่ายเงิน จะเป็นบัตรกระดาษหรือในมือถือก็ได้ ระบบหักมูลค่าออกจากบิล ถ้าทรีตเมนต์แพงกว่า ลูกค้าจ่ายส่วนต่าง ถ้าถูกกว่า ยอดที่เหลืออยู่ในบัตร บัตร 100 € ใช้กับนวด 65 € จะเหลือ 35 € และสแกนครั้งต่อไปก็แสดงยอดนั้นพอดี',
          'แบบนี้ที่เคาน์เตอร์ไม่ต้องเถียงกัน ไม่มีใครต้องไล่หาเลขที่เขียนมือในแฟ้ม และทีมเห็นทันทีว่าบัตรใบนี้ใช้ไปแล้วหรือยัง',
          'บอกยอดคงเหลือตอนลูกค้าใช้บัตร เช่น "ในบัตรยังเหลือ 35 € นะคะ จองทำเล็บเท้าครั้งหน้าไว้เลยไหมคะ" ประโยคเดียวนี้ช่วยเปลี่ยนยอดที่เหลือให้กลายเป็นคิวถัดไปได้',
        ],
      },
      {
        id: 'design-wording',
        heading: 'การออกแบบและถ้อยคำ',
        paragraphs: [
          'บัตรของขวัญคือของขวัญก่อนอย่างอื่น หน้าตาก็ควรเป็นแบบนั้น พิมพ์บนกระดาษดีๆ ใช้สีของร้าน ใส่โลโก้ และวาง QR code ไว้มุมหนึ่งไม่ให้เด่นเกินไป ที่เคาน์เตอร์ การ์ดพับใส่ซองผูกโบว์ก็พอ อาจแถมน้ำมันนวดที่ร้านใช้ขวดเล็กๆ ด้วย คนที่ซื้อออนไลน์จะส่งต่อบัตร ฉบับดิจิทัลจึงควรดูดีบนมือถือเหมือนกัน',
          'เขียนถึงประสบการณ์ด้วยคำง่ายๆ "นวดไทย 90 นาที ตามด้วยชาในเลานจ์" บอกได้มากกว่า "ประสบการณ์เวลเนส" ตัวหนังสือเล็กที่อ่านแล้วเหมือนกับดักทำให้คนไม่อยากซื้อ ถ้าบัตรแลกเป็นเงินสดหรือใช้ซื้อสินค้าไม่ได้ ให้เขียนเป็นประโยคสุภาพสั้นๆ หลังจากทนายตรวจถ้อยคำแล้ว',
          'สิ่งที่ควรมีบนบัตร',
        ],
        bullets: [
          'มูลค่า หรือชื่อทรีตเมนต์',
          'รหัสบัตรและ QR code',
          'ชื่อร้าน ที่อยู่ และเบอร์โทรหรือ WhatsApp',
          'วิธีจอง เช่น ลิงก์หน้าจองของร้าน',
          'อายุบัตร ใช้ถ้อยคำที่ทนายอนุมัติแล้ว',
          'พื้นที่สำหรับเขียนคำอวยพร',
        ],
      },
      {
        id: 'validity-accounting',
        heading: 'อายุบัตรและการลงบัญชี',
        paragraphs: [
          'บัตรของขวัญใช้ได้นานแค่ไหน และร้านจำกัดอายุบัตรได้หรือไม่ เป็นเรื่องกฎหมายที่เยอรมนีมีกฎของตัวเอง ถ้าพิมพ์อายุบัตรที่ไม่ตรงตามกฎ อาจมีปัญหาตามมา อย่าลอกอายุบัตรจากร้านอื่นหรือจากในกลุ่มออนไลน์ ให้ถามทนายว่าพิมพ์อายุบัตรแบบไหนได้ บัตรทรีตเมนต์หลังขึ้นราคาต้องทำอย่างไร และยอดที่ลูกค้าไม่ได้ใช้จะเป็นอย่างไร',
          'การลงบัญชีก็มีคำถามของมันเอง บัตรที่ขายในเดือนธันวาคมอาจถูกใช้ในเดือนมีนาคม และประเภทของบัตร ไม่ว่าจะเป็นบัตรมูลค่าหรือบัตรทรีตเมนต์ อาจมีผลต่อวิธีและช่วงเวลาที่ลงบัญชี คุยกับที่ปรึกษาภาษี (Steuerberater) ก่อนถึงฤดูขายว่าบัตรแต่ละแบบลงบัญชีอย่างไร และตกลงกันว่าเขาต้องการอะไรจากคุณทุกเดือน',
          'Zenno บันทึกการขายและการใช้บัตรทุกครั้งในสมุดเงินสดและไฟล์ส่งออก DATEV ที่ปรึกษาภาษีจึงมีตัวเลขครบ ส่วนจะลงบัญชีอย่างไร ให้ที่ปรึกษาภาษีเป็นคนตัดสิน',
        ],
      },
      {
        id: 'season-checklist',
        heading: 'เช็กลิสต์ก่อนช่วงเทศกาล',
        paragraphs: [
          'ต้นเดือนพฤศจิกายนเป็นช่วงที่ดี ก่อนลูกค้าซื้อของขวัญคริสต์มาสกลุ่มแรกจะมาถึงเคาน์เตอร์ พอถึงเดือนมกราคม ลองดูว่าขายอะไรไปบ้าง มูลค่าไหน ทรีตเมนต์ไหน ขายออนไลน์เท่าไรและที่เคาน์เตอร์เท่าไร แล้วใช้ข้อมูลนี้ปรับสำหรับวันวาเลนไทน์',
          'ไล่ดูข้อต่อไปนี้กับทีมสักรอบ',
        ],
        bullets: [
          'ตั้งบัตรมูลค่าและบัตรทรีตเมนต์สองสามแบบ พร้อมราคาไว้แล้ว',
          'ทนายตรวจถ้อยคำเรื่องอายุบัตรและกรณีขึ้นราคาแล้ว',
          'ที่ปรึกษาภาษีรู้แล้วว่าคุณจะลงบัญชีการขายและการใช้บัตรอย่างไร',
          'บัตรพิมพ์ ซอง และโบว์ มีพอสำหรับเดือนธันวาคม',
          'บัตรของขวัญเห็นชัดบนหน้าจอง และมีลิงก์จาก Instagram และ Google',
          'พนักงานต้อนรับ AI รู้ข้อเสนอบัตรของขวัญ และวันสุดท้ายที่มารับบัตรพิมพ์ได้',
          'ทีมรู้วิธีขายที่เคาน์เตอร์และวิธีใช้บัตรด้วย QR code',
          'คุณลองขายและใช้บัตรทดสอบแล้วหนึ่งใบ รวมถึงกรณีมียอดคงเหลือ',
        ],
      },
    ],
  },
}
