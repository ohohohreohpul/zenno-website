import type { GuideSet } from './types'

/**
 * Guide for the no-shows feature page. Live features only: deposit / full
 * prepayment at booking, card on file + no-show or late-cancel fee (Stripe),
 * SMS/email reminders, client portal rescheduling. Cancellation windows,
 * per-client exceptions and per-service rules are described as the owner's
 * policy, never as product settings. Legal points go to a lawyer or association.
 */
export const NO_SHOWS_GUIDE: GuideSet = {
  de: {
    kicker: 'Leitfaden No-Shows',
    title: ['Wenn Kundschaft nicht kommt:', 'was Sie vorher regeln können.'],
    intro:
      'Ein ausgefallener Termin kostet die vorbereitete Stunde und oft auch die Kundin, der Sie für genau diese Zeit abgesagt haben. Dieser Leitfaden erklärt, warum Termine platzen, welche Absicherung zu welcher Leistung passt, wie Sie eine faire Ausfallregel formulieren und wie Sie nach dem ersten No-Show mit Kundschaft sprechen, ohne sie zu verlieren.',
    tocLabel: 'Inhalt',
    sections: [
      {
        id: 'why-missed',
        heading: 'Warum Termine platzen',
        paragraphs: [
          'Hinter den meisten No-Shows steckt keine böse Absicht. Oft ist der Termin schlicht vergessen: Wer vor drei Wochen für Donnerstag, 16 Uhr gebucht hat, verabredet sich an diesem Donnerstag mit einer Freundin und denkt erst um 16:20 Uhr wieder an Sie. Je weiter Buchung und Termin auseinanderliegen, desto höher ist das Risiko.',
          'Dazu kommt die billige Zusage. Ein Termin, der nichts kostet und mit zwei Klicks gebucht ist, fühlt sich wenig verbindlich an. Ähnlich ist es mit Impulsbuchungen: abends auf dem Sofa gebucht, weil die Seite gerade offen war, und am nächsten Morgen schon bereut. Abzusagen ist dann unangenehmer, als einfach nicht zu kommen.',
          'Daraus folgen die Mittel, um die es in diesem Leitfaden geht: Erinnerungen gegen das Vergessen, eine Anzahlung oder hinterlegte Karte gegen die billige Zusage und ein Weg zum Verschieben, der leichter ist als ein Anruf.',
        ],
      },
      {
        id: 'deposit-prepay-card',
        heading: 'Anzahlung, Vorkasse oder hinterlegte Karte',
        paragraphs: [
          'Die drei Formen unterscheiden sich darin, wann Geld fließt. Bei der Anzahlung zahlt die Kundin beim Buchen einen Teil, etwa 20 € auf eine Massage für 75 €. Bei Vorkasse zahlt sie den vollen Preis. Bei der hinterlegten Karte wird zunächst nichts belastet, und Sie berechnen die Ausfallgebühr nur, wenn sie nicht kommt oder zu spät absagt. In Zenno läuft das über Stripe direkt bei der Online-Buchung.',
          'Welche Form passt, hängt von der Leistung ab. Eine Coloration über drei Stunden oder eine Hot-Stone-Massage über 90 Minuten verträgt Vorkasse oder eine spürbare Anzahlung, denn diese Lücke füllen Sie am selben Tag nicht mehr. Für einen Herrenhaarschnitt über 30 Minuten reicht oft die hinterlegte Karte, und eine kurze Augenbrauenkorrektur braucht vielleicht gar keine Absicherung.',
        ],
        bullets: [
          'Anzahlung: für mittlere und lange Termine, die Hürde beim Buchen bleibt niedrig',
          'Vorkasse: für lange, teure Termine und für Neukundschaft, die Sie noch nicht kennen',
          'Hinterlegte Karte: die mildeste Form, belastet wird nur bei No-Show oder zu später Absage',
        ],
      },
      {
        id: 'cancellation-rule',
        heading: 'Eine faire Ausfallregel formulieren und zeigen',
        paragraphs: [
          'Eine gute Ausfallregel passt in zwei Sätze. Sie sagt, bis wann kostenlos verschoben oder abgesagt werden kann und was danach fällig wird. Zum Beispiel: „Bis 24 Stunden vorher können Sie kostenlos verschieben oder absagen. Bei späterer Absage oder wenn Sie nicht erscheinen, berechnen wir 50 % des Preises.“ Bei unterschiedlich teuren Leistungen wirkt ein Prozentsatz fairer als ein fester Betrag.',
          'Zeigen Sie die Regel dort, wo die Kundin entscheidet: auf Ihrer Buchungsseite und in Ihren Buchungsbedingungen. Steht sie nur im Kleingedruckten der Website, gibt es im Ernstfall Streit. Am Tresen hilft ein kleines Schild mit demselben Wortlaut, damit Ihr Team nicht jedes Mal neu erklären muss.',
          'Ob Ihre Regel rechtlich hält, hängt von der Formulierung, der Höhe der Gebühr und dem Hinweis vor der Buchung ab. Lassen Sie den Text einmal von Ihrer Rechtsberatung oder Ihrem Branchenverband prüfen, bevor Sie die erste Gebühr berechnen.',
        ],
      },
      {
        id: 'reminders-rescheduling',
        heading: 'Erinnern und Verschieben einfach machen',
        paragraphs: [
          'Erinnerungen sind das günstigste Mittel gegen vergessene Termine. Zenno schickt Bestätigungen und Erinnerungen per SMS und E-Mail, ohne dass jemand im Team daran denken muss. Über den Link in ihrer Bestätigung kommt die Kundin ins Kundenportal und kann dort selbst verschieben oder absagen.',
          'Verschieben sollte leichter sein als Wegbleiben. Wer um 8 Uhr merkt, dass der Termin um 10 Uhr nicht klappt, ruft ungern an, schon gar nicht, wenn das Studio erst um 9 Uhr öffnet. Im Kundenportal wählt sie selbst eine neue Zeit, und der alte Platz ist wieder frei für eine Online-Buchung. Ein verschobener Termin bringt Ihnen später Umsatz, ein verpasster gar keinen.',
          'Sagen Sie Ihrer Kundschaft auch ausdrücklich, dass Verschieben in Ordnung ist. Ein Satz am Tresen oder auf Ihrer Buchungsseite reicht: „Wenn etwas dazwischenkommt, verschieben Sie einfach online, das ist für uns kein Problem.“',
        ],
      },
      {
        id: 'first-no-show',
        heading: 'Das Gespräch nach dem ersten No-Show',
        paragraphs: [
          'Beim ersten Ausfall kommt es auf den Ton an. Melden Sie sich noch am selben Tag, kurz und ohne Vorwurf: „Wir haben Sie heute um 14 Uhr vermisst. Ist alles in Ordnung? Laut unseren Bedingungen fällt eine Gebühr von 30 € an.“ Wer sich ertappt fühlt, kommt oft nicht wieder. Eine freundliche Nachricht lässt der Kundin Raum, sich zu entschuldigen.',
          'Bei langjähriger Stammkundschaft können Sie die Gebühr einmal erlassen. Mit der hinterlegten Karte ist das einfach, Sie berechnen dann schlicht nichts. Sagen Sie es aber dazu: „Diesmal verzichten wir auf die Gebühr, beim nächsten Mal müssten wir sie berechnen.“ So bleibt die Regel gültig, und die Kundin weiß, dass Sie ihr entgegengekommen sind.',
          'Halten Sie auf einer einfachen Liste am Empfang fest, wem Sie die Gebühr schon einmal erlassen haben, damit alle im Team gleich handeln. Beim zweiten Mal berechnen Sie die Gebühr ohne lange Erklärung, denn die Regel stand vorher auf Ihrer Seite.',
        ],
      },
      {
        id: 'new-vs-regulars',
        heading: 'Neukundschaft und Stammkundschaft',
        paragraphs: [
          'Neukundschaft kennt Ihr Studio noch nicht, und Sie kennen sie auch nicht. Hier ist eine Absicherung am sinnvollsten. Eine Anzahlung von 20 € auf die erste Behandlung zeigt, dass ein Termin bei Ihnen einen Wert hat, und wer ernsthaft kommen will, zahlt sie ohne Zögern.',
          'Stammkundinnen, die seit Jahren alle sechs Wochen kommen, empfinden dieselbe Regel schnell als Misstrauen. Eine pragmatische Lösung: Online gilt die Regel für alle, den Folgetermin buchen Sie mit Ihren Stammkundinnen aber direkt am Tresen in den Kalender. Ihr Team muss dafür nur wissen, wer zu dieser Gruppe gehört.',
          'Schwierig wird es bei Ausnahmen, die niemand nachvollziehen kann. Hört eine Neukundin, dass ihre Freundin keine Anzahlung zahlen musste, wirkt die Regel willkürlich. Legen Sie deshalb fest, ab wann jemand als Stammkundschaft gilt, zum Beispiel ab dem fünften Termin.',
        ],
      },
      {
        id: 'setup-checklist',
        heading: 'Checkliste für die Einrichtung',
        paragraphs: [
          'Planen Sie für die Einrichtung einen ruhigen Nachmittag ein. Die meiste Zeit kosten die Entscheidungen, welche Leistungen eine Absicherung brauchen und wie Ihre Regel lautet. Zum Ausprobieren reicht der kostenlose Tarif zum Start.',
          'Schauen Sie nach vier Wochen zurück: Welche Termine sind ausgefallen, bei welchen Leistungen, und hat jemand wegen der Anzahlung nicht gebucht? Passen Sie Ihre Regel danach an.',
        ],
        bullets: [
          'Leistungen nach Dauer und Preis sortieren und überlegen, wo ein Ausfall wirklich teuer ist',
          'Entscheiden: Anzahlung, Vorkasse oder hinterlegte Karte',
          'Ausfallregel in zwei Sätzen formulieren, mit Frist und Höhe der Gebühr',
          'Den Text von Rechtsberatung oder Branchenverband prüfen lassen',
          'Die Regel auf der Buchungsseite, in den Buchungsbedingungen und am Tresen zeigen',
          'Zahlungen über Stripe einrichten und eine Testbuchung mit Anzahlung machen',
          'Prüfen, ob Bestätigungen und Erinnerungen per SMS und E-Mail ankommen',
          'Festlegen, ab wann jemand Stammkundschaft ist und wer eine Gebühr erlassen darf',
          'Eine Vorlage für die Nachricht nach dem ersten No-Show schreiben',
        ],
      },
    ],
  },
  en: {
    kicker: 'A guide to no-shows',
    title: ['When clients don’t turn up:', 'what you can settle in advance.'],
    intro:
      'A missed appointment costs you the prepared hour, and often the client you turned away for that exact slot. This guide explains why appointments get missed, which kind of protection suits which service, how to write a fair cancellation rule, and how to talk to a client after a first no-show without losing her.',
    tocLabel: 'Contents',
    sections: [
      {
        id: 'why-missed',
        heading: 'Why appointments get missed',
        paragraphs: [
          'Most no-shows are not deliberate. Often the appointment is simply forgotten: someone who booked Thursday at 4 pm three weeks ago arranges to meet a friend that Thursday and only remembers you at 4:20. The further apart booking and appointment are, the higher the risk.',
          'Then there is the cheap commitment. An appointment that costs nothing and takes two taps to book doesn’t feel binding. Impulse bookings work the same way: booked on the sofa in the evening because the page happened to be open, regretted the next morning. At that point cancelling feels more awkward than just not coming.',
          'The tools in this guide follow from that: reminders against forgetting, a deposit or card on file against the cheap commitment, and a way to reschedule that is easier than a phone call.',
        ],
      },
      {
        id: 'deposit-prepay-card',
        heading: 'Deposit, full prepayment or card on file',
        paragraphs: [
          'The three options differ in when money moves. With a deposit the client pays part of the price at booking, say €20 on a €75 massage. With prepayment she pays the full price. With a card on file nothing is charged at first, and you only charge the no-show fee if she doesn’t come or cancels too late. In Zenno all of this runs through Stripe during online booking.',
          'Which one fits depends on the service. A three-hour colour or a 90-minute hot stone massage can carry prepayment or a noticeable deposit, because you won’t fill that gap on the same day. For a 30-minute men’s cut a card on file is often enough, and a quick brow tidy may need no protection at all.',
        ],
        bullets: [
          'Deposit: for medium and long appointments, the barrier to booking stays low',
          'Prepayment: for long, expensive appointments and for new clients you don’t know yet',
          'Card on file: the mildest option, charged only for a no-show or late cancellation',
        ],
      },
      {
        id: 'cancellation-rule',
        heading: 'Writing a fair cancellation rule, and where to show it',
        paragraphs: [
          'A good cancellation rule fits in two sentences. It says until when clients can reschedule or cancel for free, and what is due after that. For example: "You can reschedule or cancel free of charge up to 24 hours before. For later cancellations or if you don’t turn up, we charge 50% of the price." If your services vary a lot in price, a percentage feels fairer than a fixed amount.',
          'Show the rule where the client makes the decision: on your booking page and in your booking terms. A rule buried in the small print of your website leads to arguments when it matters. A small sign at the desk with the same wording saves your team from explaining it from scratch each time.',
          'Whether your rule holds up legally depends on the wording, the size of the fee and how clearly you point it out before booking. Have the text checked once by a lawyer or your trade association before you charge the first fee.',
        ],
      },
      {
        id: 'reminders-rescheduling',
        heading: 'Make reminding and rescheduling easy',
        paragraphs: [
          'Reminders are the cheapest fix for forgotten appointments. Zenno sends confirmations and reminders by SMS and email, so nobody on your team has to remember. The link in her confirmation takes the client to the client portal, where she can reschedule or cancel herself.',
          'Rescheduling should be easier than staying away. Someone who realises at 8 am that the 10 am appointment won’t work is reluctant to call, especially if the studio only opens at 9. In the client portal she picks a new time herself, and the old slot is free for someone else to book online. A moved appointment still brings you revenue later; a missed one brings nothing.',
          'Tell clients plainly that rescheduling is fine. One sentence at the desk or on your booking page is enough: "If something comes up, just reschedule online, that’s no problem for us."',
        ],
      },
      {
        id: 'first-no-show',
        heading: 'The conversation after a first no-show',
        paragraphs: [
          'After a first no-show, tone matters most. Get in touch the same day, briefly and without blame: "We missed you today at 2 pm. Is everything all right? Under our booking terms a fee of €30 applies." A client who feels caught out often doesn’t come back. A friendly message gives her room to apologise.',
          'With long-standing regulars you can waive the fee once. With a card on file that’s easy: you simply don’t charge anything. Say so, though: "We’ll leave the fee this time, but next time we’d have to charge it." The rule stays in place, and the client knows you met her halfway.',
          'Keep a simple list at the desk of who has already had a fee waived, so everyone on the team handles it the same way. The second time, you charge the fee without a long explanation, since the rule was on your page from the start.',
        ],
      },
      {
        id: 'new-vs-regulars',
        heading: 'New clients and regulars',
        paragraphs: [
          'New clients don’t know your studio yet, and you don’t know them. This is where protection makes the most sense. A €20 deposit on a first treatment shows that an appointment with you has value, and anyone who seriously means to come pays it without hesitation.',
          'Regulars who have come every six weeks for years can read the same rule as mistrust. A practical approach: online, the rule applies to everyone, but you book your regulars’ next appointment directly into the calendar at the desk. Your team only needs to know who belongs in that group.',
          'Trouble starts with exceptions nobody can follow. If a new client hears that her friend didn’t have to pay a deposit, the rule looks arbitrary. Decide when someone counts as a regular, for example from their fifth appointment.',
        ],
      },
      {
        id: 'setup-checklist',
        heading: 'Setup checklist',
        paragraphs: [
          'Set aside a quiet afternoon. Most of the time goes into deciding which services need protection and how your rule should read. The free plan is enough to try it out.',
          'Look back after four weeks: which appointments were missed, for which services, and did anyone not book because of the deposit? Adjust your rule based on what you find.',
        ],
        bullets: [
          'Sort your services by length and price and note where a no-show really hurts',
          'Decide between deposit, prepayment and card on file',
          'Write your cancellation rule in two sentences, with a deadline and the fee',
          'Have the text checked by a lawyer or your trade association',
          'Show the rule on your booking page, in your booking terms and at the desk',
          'Set up payments through Stripe and make a test booking with a deposit',
          'Check that confirmations and reminders arrive by SMS and email',
          'Decide when someone counts as a regular and who may waive a fee',
          'Write a template for the message after a first no-show',
        ],
      },
    ],
  },
  th: {
    kicker: 'คู่มือเรื่องลูกค้าไม่มาตามนัด',
    title: ['เมื่อลูกค้าไม่มาตามนัด', 'สิ่งที่คุณวางกติกาไว้ล่วงหน้าได้'],
    intro:
      'นัดที่ลูกค้าไม่มาทำให้เสียเวลาหนึ่งชั่วโมงที่เตรียมไว้ และบ่อยครั้งยังเสียลูกค้าอีกคนที่คุณปฏิเสธไปเพราะช่วงเวลานั้นเต็ม คู่มือนี้อธิบายว่าทำไมลูกค้าถึงไม่มา หลักประกันแบบไหนเหมาะกับบริการแบบไหน เขียนเงื่อนไขการยกเลิกอย่างไรให้แฟร์ และควรคุยกับลูกค้าอย่างไรหลังไม่มาครั้งแรก โดยไม่เสียลูกค้าไป',
    tocLabel: 'สารบัญ',
    sections: [
      {
        id: 'why-missed',
        heading: 'ทำไมลูกค้าถึงไม่มาตามนัด',
        paragraphs: [
          'ลูกค้าส่วนใหญ่ที่ไม่มาไม่ได้ตั้งใจ หลายครั้งแค่ลืม คนที่จองวันพฤหัส 16 โมงไว้ตั้งแต่สามสัปดาห์ก่อน พอถึงวันก็นัดเพื่อนไปแล้ว และนึกขึ้นได้ตอน 16:20 ยิ่งวันจองกับวันนัดห่างกันมาก โอกาสลืมก็ยิ่งสูง',
          'อีกเหตุผลคือการจองที่ไม่มีต้นทุน นัดที่ไม่ต้องจ่ายอะไรและกดจองได้ในสองคลิกไม่ทำให้รู้สึกผูกมัด การจองตามอารมณ์ก็คล้ายกัน จองตอนนอนเล่นบนโซฟาเพราะเปิดหน้าเว็บค้างไว้ พอเช้ามาก็เปลี่ยนใจ ถึงตอนนั้นการโทรมายกเลิกดูลำบากใจกว่าการไม่มาเฉยๆ',
          'วิธีแก้ในคู่มือนี้จึงตามมาจากเหตุผลเหล่านี้ คือการแจ้งเตือนสำหรับคนที่ลืม มัดจำหรือการบันทึกบัตรสำหรับการจองที่ไม่มีต้นทุน และทางเลื่อนนัดที่ง่ายกว่าการยกหูโทรศัพท์',
        ],
      },
      {
        id: 'deposit-prepay-card',
        heading: 'มัดจำ ชำระเต็มล่วงหน้า หรือบันทึกบัตร',
        paragraphs: [
          'สามแบบนี้ต่างกันที่จังหวะการจ่ายเงิน แบบมัดจำ ลูกค้าจ่ายส่วนหนึ่งตอนจอง เช่น €20 สำหรับนวด €75 แบบชำระล่วงหน้า ลูกค้าจ่ายเต็มจำนวน ส่วนแบบบันทึกบัตร ยังไม่มีการตัดเงิน คุณจะเรียกเก็บค่าธรรมเนียมก็ต่อเมื่อลูกค้าไม่มาหรือยกเลิกกระชั้นชิด ใน Zenno ทั้งหมดนี้ทำผ่าน Stripe ระหว่างการจองออนไลน์',
          'แบบไหนเหมาะ ขึ้นอยู่กับบริการ ทำสีผมสามชั่วโมงหรือนวดหินร้อน 90 นาทีเหมาะกับการชำระล่วงหน้าหรือมัดจำที่มากพอ เพราะช่องว่างแบบนี้หาคนมาแทนในวันเดียวกันไม่ได้แล้ว ตัดผมชาย 30 นาทีมักใช้แค่การบันทึกบัตรก็พอ ส่วนเก็บทรงคิ้วสั้นๆ อาจไม่ต้องมีหลักประกันเลย',
        ],
        bullets: [
          'มัดจำ: สำหรับนัดขนาดกลางและนัดยาว ลูกค้ายังจองได้ง่าย',
          'ชำระเต็มล่วงหน้า: สำหรับนัดยาว ราคาสูง และลูกค้าใหม่ที่คุณยังไม่รู้จัก',
          'บันทึกบัตร: แบบที่เบาที่สุด เรียกเก็บเฉพาะเมื่อไม่มาหรือยกเลิกกระชั้นชิด',
        ],
      },
      {
        id: 'cancellation-rule',
        heading: 'เขียนเงื่อนไขการยกเลิกให้แฟร์ และแสดงไว้ตรงไหน',
        paragraphs: [
          'เงื่อนไขการยกเลิกที่ดีเขียนจบได้ในสองประโยค บอกว่าเลื่อนหรือยกเลิกฟรีได้ถึงเมื่อไร และหลังจากนั้นต้องจ่ายเท่าไร เช่น “เลื่อนหรือยกเลิกได้ฟรีจนถึง 24 ชั่วโมงก่อนนัด หากยกเลิกหลังจากนั้นหรือไม่มาตามนัด ร้านขอเรียกเก็บ 50% ของราคา” ถ้าบริการของคุณราคาต่างกันมาก การคิดเป็นเปอร์เซ็นต์จะดูแฟร์กว่าคิดเป็นจำนวนเงินตายตัว',
          'แสดงเงื่อนไขไว้ตรงที่ลูกค้าตัดสินใจ คือบนหน้าจองและในเงื่อนไขการจองของคุณ ถ้าเขียนไว้แค่ในตัวหนังสือเล็กๆ บนเว็บไซต์ พอมีปัญหาก็จะเถียงกัน ที่เคาน์เตอร์ติดป้ายเล็กๆ ข้อความเดียวกันไว้ ทีมจะได้ไม่ต้องอธิบายใหม่ทุกครั้ง',
          'เงื่อนไขของคุณจะใช้ได้ตามกฎหมายเยอรมันหรือไม่ ขึ้นอยู่กับถ้อยคำ จำนวนค่าธรรมเนียม และการแจ้งลูกค้าก่อนจอง ให้ทนายหรือสมาคมวิชาชีพตรวจข้อความสักครั้ง ก่อนเรียกเก็บค่าธรรมเนียมครั้งแรก',
        ],
      },
      {
        id: 'reminders-rescheduling',
        heading: 'ทำให้การเตือนและการเลื่อนนัดเป็นเรื่องง่าย',
        paragraphs: [
          'การแจ้งเตือนเป็นวิธีที่ถูกที่สุดในการกันลืม Zenno ส่งคำยืนยันและการแจ้งเตือนทาง SMS และอีเมลให้เอง ไม่ต้องมีใครในทีมคอยจำ ลิงก์ในคำยืนยันพาลูกค้าเข้าพอร์ทัลลูกค้า ซึ่งเลื่อนหรือยกเลิกนัดได้เอง',
          'การเลื่อนนัดควรง่ายกว่าการไม่มา คนที่รู้ตอนแปดโมงเช้าว่านัดสิบโมงไปไม่ได้ มักไม่อยากโทร ยิ่งถ้าร้านเปิดเก้าโมง ในพอร์ทัลลูกค้า เธอเลือกเวลาใหม่ได้เอง และช่องเวลาเดิมก็ว่างให้คนอื่นจองออนไลน์ นัดที่เลื่อนไปยังเป็นรายได้ในวันหลัง ส่วนนัดที่หายไปไม่ได้อะไรเลย',
          'บอกลูกค้าให้ชัดว่าเลื่อนนัดได้ ไม่ต้องเกรงใจ แค่ประโยคเดียวที่เคาน์เตอร์หรือบนหน้าจองก็พอ เช่น “ถ้ามีธุระกะทันหัน เลื่อนนัดออนไลน์ได้เลยนะคะ ไม่มีปัญหาค่ะ”',
        ],
      },
      {
        id: 'first-no-show',
        heading: 'คุยกับลูกค้าอย่างไรหลังไม่มาครั้งแรก',
        paragraphs: [
          'ครั้งแรกที่ลูกค้าไม่มา น้ำเสียงสำคัญที่สุด ติดต่อไปในวันเดียวกัน สั้นๆ และไม่ตำหนิ เช่น “วันนี้บ่ายสองเรารอคุณอยู่ค่ะ ทุกอย่างเรียบร้อยดีไหมคะ ตามเงื่อนไขการจองจะมีค่าธรรมเนียม €30 นะคะ” ลูกค้าที่รู้สึกว่าถูกจับผิดมักไม่กลับมาอีก ข้อความที่เป็นมิตรเปิดโอกาสให้เธอขอโทษได้',
          'ลูกค้าประจำที่มากันหลายปี คุณงดค่าธรรมเนียมให้สักครั้งได้ ถ้าใช้แบบบันทึกบัตรก็ง่าย แค่ไม่ต้องเรียกเก็บ แต่บอกให้ชัดด้วย เช่น “ครั้งนี้เรายกเว้นค่าธรรมเนียมให้นะคะ ครั้งหน้าคงต้องเรียกเก็บค่ะ” กติกายังอยู่ และลูกค้ารู้ว่าคุณช่วยเธอแล้ว',
          'จดรายชื่อคนที่เคยได้รับการยกเว้นไว้ในรายการง่ายๆ ที่เคาน์เตอร์ ทุกคนในทีมจะได้ทำเหมือนกัน ถ้าเกิดซ้ำเป็นครั้งที่สอง ก็เรียกเก็บได้โดยไม่ต้องอธิบายยาว เพราะเงื่อนไขอยู่บนหน้าของคุณตั้งแต่แรก',
        ],
      },
      {
        id: 'new-vs-regulars',
        heading: 'ลูกค้าใหม่กับลูกค้าประจำ',
        paragraphs: [
          'ลูกค้าใหม่ยังไม่รู้จักร้านของคุณ และคุณก็ยังไม่รู้จักเขา ตรงนี้คือที่ที่หลักประกันมีประโยชน์ที่สุด มัดจำ €20 สำหรับทรีตเมนต์ครั้งแรกบอกว่านัดกับร้านคุณมีค่า และคนที่ตั้งใจจะมาจริงก็จ่ายโดยไม่ลังเล',
          'ลูกค้าประจำที่มาทุกหกสัปดาห์มาหลายปี อาจรู้สึกว่ากติกาเดียวกันคือการไม่ไว้ใจ ทางออกที่ใช้ได้จริงคือ การจองออนไลน์ใช้กติกาเดียวกันทุกคน แต่นัดถัดไปของลูกค้าประจำ ให้ทีมลงในปฏิทินที่เคาน์เตอร์ให้เลย ทีมแค่ต้องรู้ว่าใครอยู่ในกลุ่มนี้',
          'ปัญหาจะเกิดเมื่อมีข้อยกเว้นที่ไม่มีใครเข้าใจ ถ้าลูกค้าใหม่ได้ยินว่าเพื่อนไม่ต้องจ่ายมัดจำ กติกาจะดูไม่ยุติธรรม กำหนดไว้เลยว่าลูกค้าแบบไหนนับเป็นลูกค้าประจำ เช่น ตั้งแต่นัดครั้งที่ห้า',
        ],
      },
      {
        id: 'setup-checklist',
        heading: 'เช็กลิสต์การตั้งค่า',
        paragraphs: [
          'กันเวลาไว้สักบ่ายที่ร้านไม่ยุ่ง เวลาส่วนใหญ่หมดไปกับการตัดสินใจว่าบริการไหนต้องมีหลักประกัน และกติกาจะเขียนว่าอะไร ลองใช้ได้ด้วยแพ็กเกจฟรี',
          'ผ่านไปสี่สัปดาห์ ลองย้อนดูว่านัดไหนที่ลูกค้าไม่มา เป็นบริการอะไร และมีใครไม่จองเพราะต้องจ่ายมัดจำหรือไม่ แล้วปรับกติกาตามนั้น',
        ],
        bullets: [
          'เรียงบริการตามระยะเวลาและราคา แล้วดูว่านัดไหนเสียหายมากจริงๆ ถ้าลูกค้าไม่มา',
          'เลือกระหว่างมัดจำ ชำระเต็มล่วงหน้า หรือบันทึกบัตร',
          'เขียนเงื่อนไขการยกเลิกในสองประโยค พร้อมกำหนดเวลาและค่าธรรมเนียม',
          'ให้ทนายหรือสมาคมวิชาชีพตรวจข้อความ',
          'แสดงเงื่อนไขบนหน้าจอง ในเงื่อนไขการจอง และที่เคาน์เตอร์',
          'ตั้งค่าการชำระเงินผ่าน Stripe แล้วลองจองทดสอบพร้อมมัดจำ',
          'ตรวจว่าคำยืนยันและการแจ้งเตือนทาง SMS และอีเมลส่งถึงจริง',
          'กำหนดว่าใครนับเป็นลูกค้าประจำ และใครมีสิทธิ์ยกเว้นค่าธรรมเนียม',
          'เขียนข้อความสำเร็จรูปสำหรับติดต่อลูกค้าหลังไม่มาครั้งแรก',
        ],
      },
    ],
  },
}
