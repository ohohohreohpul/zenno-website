import type { GuideSet } from './types'

/**
 * Guide for the tax-datev page. General explanation only: no rates, no thresholds,
 * no advice. Every decision is handed to the tax advisor. Live features mentioned:
 * VAT per service, §19 UStG, monthly/quarterly overview, DATEV export, cash book,
 * Stripe deposits and fees. Not claimed: e-invoicing, GoBD, TSE.
 */
export const TAX_DATEV_GUIDE: GuideSet = {
  de: {
    kicker: 'Ratgeber Steuern',
    title: ['Umsatzsteuer und DATEV', 'im Studioalltag.'],
    intro:
      'Wie hängen Umsatzsteuer, Kleinunternehmerregelung und der Export für Ihre Steuerberatung im Alltag eines Studios zusammen? Hier steht es in einfachen Worten. Welche Sätze gelten und wie etwas gebucht wird, entscheidet Ihre Steuerberatung. Sie finden die Fragen, die Sie ihr stellen sollten, und eine Monatsroutine, die wenig Zeit kostet.',
    tocLabel: 'Inhalt',
    sections: [
      {
        id: 'vat-per-service',
        heading: 'Umsatzsteuer je Leistung',
        paragraphs: [
          'In einem Studio wird selten nur eine Sorte Leistung verkauft. Eine Kosmetikerin bietet Gesichtsbehandlungen an, verkauft an der Theke eine Pflegecreme für 38 € und hat vielleicht ein Paket aus drei Behandlungen im Angebot. Für die Umsatzsteuer kann jede dieser Positionen anders zu behandeln sein. Deshalb hilft es, jede Leistung einzeln zu betrachten.',
          'Ob eine Leistung mit dem regulären Satz, einem ermäßigten Satz oder steuerfrei läuft, hängt von der Art der Leistung ab und manchmal auch davon, wer sie erbringt. Bei Heilbehandlungen in einer Praxis kann eine Befreiung infrage kommen, bei rein kosmetischen Leistungen meist nicht. Diese Einordnung trifft Ihre Steuerberatung. Von Ihnen braucht sie eine vollständige Liste aller Leistungen und Produkte, mit Preis, Ablauf und der Person, die sie ausführt.',
          'In Zenno hinterlegen Sie den abgestimmten Satz einmal je Leistung. Danach trägt jede Buchung und jede Zahlung diesen Satz mit, und die Übersicht weist Umsatz und enthaltene Umsatzsteuer getrennt aus. Kommt eine neue Leistung ins Angebot, fragen Sie kurz nach, bevor sie online buchbar ist.',
        ],
      },
      {
        id: 'kleinunternehmer',
        heading: 'Die Kleinunternehmerregelung (§19 UStG)',
        paragraphs: [
          'Viele Studios starten klein: eine Inhaberin, ein Raum, die ersten Kundinnen aus dem Bekanntenkreis. Für diese Phase gibt es die Kleinunternehmerregelung nach §19 UStG. Bleibt Ihr Umsatz unter bestimmten Grenzen, weisen Sie auf Rechnungen keine Umsatzsteuer aus und führen auch keine ans Finanzamt ab. Im Gegenzug holen Sie die Umsatzsteuer aus Ihren Einkäufen nicht zurück, etwa beim Kauf einer neuen Behandlungsliege.',
          'Die Grenzen legt der Gesetzgeber fest, und sie haben sich in den letzten Jahren geändert. Fragen Sie Ihre Steuerberatung, was für Ihr Jahr gilt, und behalten Sie den Umsatz im Blick. Zenno zeigt ihn pro Monat, so merken Sie früh, wenn ein gutes Jahr Sie in die Nähe der Grenze bringt.',
          'Mit dem Status ändert sich auch Ihre Preisrechnung. Werden Sie umsatzsteuerpflichtig und lassen die Maniküre bei 45 €, bleibt Ihnen pro Termin weniger. Sprechen Sie deshalb mit Ihrer Steuerberatung, bevor eine dieser Situationen eintritt:',
        ],
        bullets: [
          'Der Umsatz nähert sich der Grenze, etwa nach einer starken Gutscheinsaison im Dezember.',
          'Sie planen eine größere Anschaffung, bei der die enthaltene Umsatzsteuer ins Gewicht fällt.',
          'Sie stellen jemanden ein oder mieten einen zweiten Raum dazu.',
          'Sie überlegen, freiwillig auf die Regelung zu verzichten. Diese Entscheidung bindet Sie für mehrere Jahre.',
        ],
      },
      {
        id: 'monthly-routine',
        heading: 'Eine ruhige Monatsroutine',
        paragraphs: [
          'Die meisten Steuerberatungen brauchen Ihre Zahlen kurz nach Monats- oder Quartalsende, weil die Voranmeldung früh im Folgemonat fällig ist. Legen Sie deshalb einen festen Termin fest, zum Beispiel den zweiten Werktag um 9 Uhr, bevor die erste Kundin kommt. So weiß auch die Kanzlei, wann die Datei kommt.',
          'Der Ablauf selbst dauert selten länger als eine halbe Stunde. Öffnen Sie die Übersicht des Vormonats und prüfen Sie, ob die Summe plausibel ist: Ein Monat mit Urlaubswoche sieht anders aus als der Dezember. Gleichen Sie dann den Kassenbestand mit dem Kassenbuch ab und schauen Sie, ob offene Termine des Monats noch eine Zahlung oder einen Vermerk brauchen. Danach exportieren Sie.',
          'Schicken Sie den Export mit zwei, drei Sätzen zu Besonderheiten des Monats, etwa einem großen Gutscheinverkauf vor dem Muttertag oder einer Rückerstattung nach einer Beschwerde. Das erspart Rückfragen, die sonst mitten in einer Behandlung kommen.',
        ],
      },
      {
        id: 'tax-advisor-datev',
        heading: 'Zusammenarbeit mit Steuerberatung und DATEV',
        paragraphs: [
          'DATEV ist die Software, mit der viele Steuerberatungen in Deutschland arbeiten. Sie selbst brauchen dafür in der Regel keine Lizenz. Der Export aus Zenno ist für DATEV und Steuerberatungen gedacht. In welcher Form Ihre Kanzlei ihn am liebsten bekommt, klären Sie im ersten Gespräch.',
          'Bringen Sie zu diesem Gespräch Ihre Leistungsliste mit Preisen mit und eine kurze Notiz, wie Ihre Kundschaft bezahlt. Schreiben Sie die Antworten auf und hinterlegen Sie die Sätze danach in Zenno. Ändert sich Ihr Angebot, etwa durch einen neuen Raum für apparative Behandlungen, gehen Sie die Liste noch einmal gemeinsam durch.',
          'Diese Fragen gehören in das erste Gespräch:',
        ],
        bullets: [
          'Welcher Umsatzsteuersatz gilt für jede meiner Leistungen und Produkte?',
          'Gebe ich die Voranmeldung monatlich oder vierteljährlich ab?',
          'In welcher Form und bis zu welchem Tag möchten Sie den Export haben?',
          'Wie sollen Gutscheine, Anzahlungen und Ausfallgebühren gebucht werden?',
          'Wie gehen wir mit Trinkgeld und den Gebühren des Zahlungsanbieters um?',
        ],
      },
      {
        id: 'vouchers-deposits-fees',
        heading: 'Gutscheine, Anzahlungen und Ausfallgebühren',
        paragraphs: [
          'Bei diesen Zahlungen liegen Geld und Leistung zeitlich auseinander, und das macht sie in der Buchhaltung knifflig. Ein Gutschein über 80 € wird im Dezember verkauft und im März eingelöst. Eine Anzahlung von 20 € geht zwei Wochen vor dem Termin ein. Eine Ausfallgebühr von 25 € entsteht für einen Termin, der nie stattgefunden hat.',
          'Bei Gutscheinen kommt es darauf an, wie genau festgelegt ist, wofür sie gelten. Ein Wertgutschein, den man für jede Leistung und jedes Produkt einlösen kann, wird steuerlich oft anders behandelt als ein Gutschein für eine bestimmte Behandlung. Davon hängt ab, ob die Umsatzsteuer beim Verkauf oder erst beim Einlösen anfällt. Anzahlungen können schon beim Eingang eine Rolle spielen, und bei Ausfallgebühren ist die Einordnung nicht immer eindeutig.',
          'Fragen Sie Ihre Steuerberatung für jede dieser Zahlungsarten, wie sie gebucht werden soll, und halten Sie die Antwort schriftlich fest. In Zenno stehen verkaufte Gutscheine im Kassenbuch und im DATEV-Export. Anzahlungen und Ausfallgebühren zieht Zenno über Stripe ein.',
        ],
      },
      {
        id: 'payment-types',
        heading: 'Bar, Karte und online in einer Übersicht',
        paragraphs: [
          'An einem normalen Samstag zahlt die erste Kundin bar, die zweite mit Karte am Terminal, und die dritte hat schon online bezahlt. Am Abend liegen diese Beträge an verschiedenen Stellen: in der Kasse, beim Anbieter Ihres Kartenterminals und bei Stripe. Für die Steuerberatung zählt, dass am Ende alles in einer Liste steht und zu den Kontoauszügen passt.',
          'Online-Zahlungen kommen nicht einzeln aufs Konto. Stripe zahlt gesammelt aus und zieht vorher seine Gebühren ab. Auf dem Kontoauszug steht dann zum Beispiel eine Auszahlung über 412,60 €, hinter der zwölf Buchungen stecken. Der Umsatz in Ihrer Übersicht ist deshalb höher als die Gutschrift auf dem Konto. Ihre Steuerberatung braucht beides, den Umsatz und die Gebühren.',
          'Barzahlungen tragen Sie in das Kassenbuch in Zenno ein. Zählen Sie die Kasse am Abend und gleichen Sie sie mit dem Kassenbuch ab, solange Sie sich an den Tag erinnern. Ob für Sie besondere Kassenpflichten gelten, klären Sie mit Ihrer Steuerberatung.',
        ],
      },
      {
        id: 'month-end-checklist',
        heading: 'Checkliste für das Monatsende',
        paragraphs: [
          'Hängen Sie diese Liste neben den Laptop oder legen Sie sie als monatliche Erinnerung im Handy an.',
          'Merken Sie bei der Durchsicht, dass ein Steuersatz falsch hinterlegt war, korrigieren Sie ihn für künftige Buchungen und sagen Sie es Ihrer Steuerberatung gleich dazu. Sie entscheidet, ob und wie die vergangenen Buchungen berichtigt werden.',
        ],
        bullets: [
          'Kassenbestand gezählt und mit dem Kassenbuch abgeglichen',
          'Offene Termine des Monats geprüft: bezahlt, ausgefallen oder abgesagt',
          'Monatsübersicht geöffnet und mit dem Vormonat verglichen',
          'Stripe-Auszahlungen und Kartenumsätze mit dem Kontoauszug abgeglichen',
          'Neue Leistungen oder Preisänderungen notiert, mit abgestimmtem Steuersatz',
          'Gutscheinverkäufe, Anzahlungen und Ausfallgebühren kurz vermerkt',
          'Export erstellt und zum festen Termin an die Steuerberatung geschickt',
          'Rückfragen beantwortet und die Antworten abgelegt',
        ],
      },
    ],
  },
  en: {
    kicker: 'Tax guide',
    title: ['VAT and DATEV', 'in day-to-day studio life.'],
    intro:
      'How do VAT, the Kleinunternehmer rule and the export for your tax advisor fit together in a studio? This guide explains it in plain words. Your tax advisor decides which rates apply and how things are booked. You will find the questions worth asking them and a monthly routine that takes little time.',
    tocLabel: 'Contents',
    sections: [
      {
        id: 'vat-per-service',
        heading: 'VAT per service',
        paragraphs: [
          'A studio rarely sells just one kind of service. A beautician offers facials, sells a €38 face cream at the counter and may have a package of three treatments on the menu. For VAT, each of these items can be treated differently, so it helps to look at every service on its own.',
          'Whether a service carries the standard rate, a reduced rate or no VAT at all depends on what the service is, and sometimes on who provides it. Medical treatments in a clinic may qualify for an exemption, while purely cosmetic services usually don’t. That call belongs to your tax advisor. What they need from you is a complete list of your services and products, with price, what is done and who does it.',
          'In Zenno you set the agreed rate once per service. From then on every booking and payment carries that rate, and the overview shows revenue and included VAT separately. When you add a new service, check with your advisor before it goes live for online booking.',
        ],
      },
      {
        id: 'kleinunternehmer',
        heading: 'The Kleinunternehmer rule (§19 UStG)',
        paragraphs: [
          'Many studios start small: one owner, one room, the first clients from friends and neighbours. For this phase German law has the Kleinunternehmer rule under §19 UStG. If your revenue stays below certain limits, you show no VAT on your invoices and pay none to the tax office. In return, you can’t reclaim the VAT on what you buy, such as a new treatment bed.',
          'The limits are set by law and have changed in recent years. Ask your tax advisor what applies to your year and keep an eye on your revenue. Zenno shows it per month, which tells you early when a good year is bringing you close to the limit.',
          'Your pricing changes with your status too. If you become VAT-registered and keep your manicure at €45, you keep less from each appointment. Talk to your tax advisor before any of these situations arrives:',
        ],
        bullets: [
          'Your revenue is getting close to the limit, for example after a strong voucher season in December.',
          'You are planning a larger purchase where the VAT included in the price is a real amount.',
          'You are hiring someone or renting a second room.',
          'You are thinking about opting out of the rule voluntarily. That decision binds you for several years.',
        ],
      },
      {
        id: 'monthly-routine',
        heading: 'A calm monthly routine',
        paragraphs: [
          'Most tax advisors need your numbers shortly after the month or quarter closes, because the VAT return is due early in the following month. So pick a fixed date, for example the second working day at 9 am, before the first client arrives. That way your advisor also knows when the file will come.',
          'The routine itself rarely takes more than half an hour. Open last month’s overview and check that the total makes sense: a month with a week of holiday looks different from December. Then compare the cash in the till with the cash book, and look for open appointments that still need a payment or a note. After that, export.',
          'Send the export with two or three sentences on anything unusual that month, such as a large voucher sale before Mother’s Day or a refund after a complaint. That saves follow-up questions that otherwise arrive in the middle of a treatment.',
        ],
      },
      {
        id: 'tax-advisor-datev',
        heading: 'Working with your tax advisor and DATEV',
        paragraphs: [
          'DATEV is the software many tax advisors in Germany work with. You usually don’t need a licence yourself. The Zenno export is made for DATEV and for tax advisors. Which format your advisor prefers is something to settle in your first conversation.',
          'Bring your list of services with prices and a short note on how your clients pay. Write the answers down, then set the rates in Zenno. If your menu changes, for instance when you add a room for device-based treatments, go through the list together again.',
          'These questions belong in the first conversation:',
        ],
        bullets: [
          'Which VAT rate applies to each of my services and products?',
          'Do I file VAT returns monthly or quarterly?',
          'In which format, and by which day, do you want the export?',
          'How should vouchers, deposits and no-show fees be booked?',
          'How do we handle tips and the payment provider’s fees?',
        ],
      },
      {
        id: 'vouchers-deposits-fees',
        heading: 'Vouchers, deposits and no-show fees',
        paragraphs: [
          'With these payments the money and the service happen at different times, which makes them tricky in the books. An €80 voucher is sold in December and redeemed in March. A €20 deposit arrives two weeks before the appointment. A €25 no-show fee is charged for an appointment that never took place.',
          'With vouchers, it matters how precisely they define what they can be used for. A value voucher that works for any service or product is often treated differently for tax than a voucher for one specific treatment. That affects whether VAT is due when the voucher is sold or only when it is redeemed. Deposits can matter as soon as they arrive, and no-show fees are not always easy to classify.',
          'Ask your tax advisor how each of these payment types should be booked, and keep the answer in writing. In Zenno, vouchers you sell appear in the cash book and in the DATEV export. Deposits and no-show fees are collected through Stripe.',
        ],
      },
      {
        id: 'payment-types',
        heading: 'Cash, card and online in one overview',
        paragraphs: [
          'On an ordinary Saturday the first client pays cash, the second pays by card at the terminal, and the third has already paid online. By the evening those amounts sit in different places: in the till, with your card terminal provider and with Stripe. What matters to your tax advisor is that everything ends up in one list that matches your bank statements.',
          'Online payments don’t reach your account one by one. Stripe pays out in batches and deducts its fees first. Your bank statement might show a single payout of €412.60 that covers twelve bookings. That is why the revenue in your overview is higher than the amount credited to your account. Your advisor needs both figures, the revenue and the fees.',
          'Cash payments go into the cash book in Zenno. Count the till in the evening and compare it with the cash book while you still remember the day. Whether special cash register rules apply to you is a question for your tax advisor.',
        ],
      },
      {
        id: 'month-end-checklist',
        heading: 'Month-end checklist',
        paragraphs: [
          'Pin this list next to your laptop or set it as a monthly reminder on your phone.',
          'If you notice during the review that a VAT rate was set wrongly, fix it for future bookings and tell your tax advisor at the same time. They decide whether and how past bookings need correcting.',
        ],
        bullets: [
          'Till counted and compared with the cash book',
          'Open appointments of the month checked: paid, no-show or cancelled',
          'Monthly overview opened and compared with the previous month',
          'Stripe payouts and card takings matched against the bank statement',
          'New services or price changes noted, with the agreed VAT rate',
          'Voucher sales, deposits and no-show fees briefly noted',
          'Export created and sent to your tax advisor on the fixed date',
          'Follow-up questions answered and the answers filed',
        ],
      },
    ],
  },
  th: {
    kicker: 'คู่มือเรื่องภาษี',
    title: ['VAT และ DATEV', 'ในงานประจำวันของร้าน'],
    intro:
      'ภาษีมูลค่าเพิ่ม กฎผู้ประกอบการรายย่อย และไฟล์ส่งออกให้นักบัญชี เกี่ยวข้องกันอย่างไรในงานของร้าน คู่มือนี้อธิบายด้วยภาษาง่ายๆ ส่วนอัตราภาษีที่ใช้และวิธีลงบัญชี นักบัญชีหรือที่ปรึกษาภาษี (Steuerberater) ของคุณเป็นผู้ตัดสินใจ ในนี้มีคำถามที่ควรถามนักบัญชี และขั้นตอนประจำเดือนที่ใช้เวลาไม่มาก',
    tocLabel: 'สารบัญ',
    sections: [
      {
        id: 'vat-per-service',
        heading: 'VAT ตามแต่ละบริการ',
        paragraphs: [
          'ร้านส่วนใหญ่ไม่ได้ขายบริการแบบเดียว ร้านเสริมสวยมีทรีตเมนต์หน้า ขายครีมบำรุงที่เคาน์เตอร์ขวดละ €38 และอาจมีแพ็กเกจสามครั้ง ในเรื่อง VAT แต่ละรายการอาจคิดภาษีไม่เหมือนกัน จึงควรดูทีละบริการ',
          'บริการหนึ่งจะใช้อัตราปกติ อัตราลดหย่อน หรือได้รับยกเว้น VAT ขึ้นอยู่กับลักษณะของบริการ และบางครั้งก็ขึ้นกับว่าใครเป็นคนทำ เช่น การรักษาทางการแพทย์ในคลินิกอาจได้รับยกเว้น แต่บริการเพื่อความงามล้วนๆ มักไม่ได้ เรื่องนี้นักบัญชีเป็นคนตัดสิน สิ่งที่คุณต้องเตรียมคือรายการบริการและสินค้าทั้งหมดให้ครบ พร้อมราคา รายละเอียดว่าทำอะไร และใครเป็นคนทำ',
          'ใน Zenno คุณตั้งอัตราที่ตกลงกับนักบัญชีไว้ครั้งเดียวต่อบริการ หลังจากนั้นทุกการจองและการชำระเงินจะใช้อัตรานั้น และภาพรวมจะแยกรายได้กับ VAT ที่รวมอยู่ให้ ถ้าจะเพิ่มบริการใหม่ ให้ถามนักบัญชีก่อนเปิดให้จองออนไลน์',
        ],
      },
      {
        id: 'kleinunternehmer',
        heading: 'กฎผู้ประกอบการรายย่อย (§19 UStG)',
        paragraphs: [
          'หลายร้านเริ่มจากเล็กๆ เจ้าของคนเดียว ห้องเดียว ลูกค้ากลุ่มแรกเป็นคนรู้จัก ช่วงนี้มีกฎ Kleinunternehmer ตาม §19 UStG ถ้ารายได้ไม่เกินเกณฑ์ที่กำหนด คุณไม่ต้องแสดง VAT ในบิลและไม่ต้องนำส่ง VAT ให้สรรพากร แต่ก็ขอคืน VAT จากของที่ซื้อเข้าร้านไม่ได้ เช่น ตอนซื้อเตียงทำทรีตเมนต์ใหม่',
          'เกณฑ์รายได้กำหนดโดยกฎหมาย และมีการเปลี่ยนแปลงในช่วงไม่กี่ปีที่ผ่านมา ถามนักบัญชีว่าปีนี้ใช้เกณฑ์เท่าไร แล้วคอยดูรายได้ของร้าน Zenno แสดงรายได้รายเดือน ถ้าปีไหนขายดีจนเข้าใกล้เกณฑ์ คุณจะรู้ตัวได้เร็ว',
          'เมื่อสถานะภาษีเปลี่ยน การตั้งราคาก็เปลี่ยนด้วย ถ้าต้องเสีย VAT แล้วยังคิดค่าทำเล็บ €45 เท่าเดิม เงินที่เหลือต่อคิวจะน้อยลง ควรคุยกับนักบัญชีก่อนจะเจอสถานการณ์เหล่านี้',
        ],
        bullets: [
          'รายได้ใกล้ถึงเกณฑ์ เช่น หลังขายบัตรของขวัญได้มากในเดือนธันวาคม',
          'กำลังจะซื้ออุปกรณ์ชิ้นใหญ่ที่มี VAT รวมอยู่เป็นเงินไม่น้อย',
          'กำลังจะจ้างพนักงาน หรือเช่าห้องเพิ่ม',
          'คิดจะสละสิทธิ์กฎนี้เอง ซึ่งจะผูกพันคุณไปหลายปี',
        ],
      },
      {
        id: 'monthly-routine',
        heading: 'ขั้นตอนประจำเดือนแบบไม่เร่งรีบ',
        paragraphs: [
          'นักบัญชีส่วนใหญ่ต้องการตัวเลขไม่นานหลังสิ้นเดือนหรือสิ้นไตรมาส เพราะต้องยื่นแบบ VAT (Voranmeldung) ช่วงต้นเดือนถัดไป จึงควรกำหนดวันที่แน่นอน เช่น วันทำการที่สองของเดือนตอน 9 โมงเช้า ก่อนลูกค้าคนแรกมา นักบัญชีก็จะรู้ว่าไฟล์จะมาเมื่อไร',
          'ขั้นตอนทั้งหมดมักใช้เวลาไม่เกินครึ่งชั่วโมง เปิดภาพรวมของเดือนก่อน ดูว่ายอดรวมสมเหตุสมผลไหม เดือนที่หยุดไปหนึ่งสัปดาห์ย่อมต่างจากเดือนธันวาคม จากนั้นนับเงินสดในลิ้นชักเทียบกับสมุดเงินสด (Kassenbuch) และดูว่ามีนัดไหนของเดือนที่ยังต้องบันทึกการชำระเงินหรือหมายเหตุ เสร็จแล้วจึงส่งออกไฟล์',
          'ส่งไฟล์ไปพร้อมข้อความสั้นๆ สองสามประโยค บอกว่าเดือนนี้มีอะไรพิเศษ เช่น ขายบัตรของขวัญได้มากช่วงวันแม่ หรือคืนเงินลูกค้าหลังมีเรื่องร้องเรียน ช่วยลดคำถามที่มักโทรมาตอนคุณกำลังทำทรีตเมนต์อยู่พอดี',
        ],
      },
      {
        id: 'tax-advisor-datev',
        heading: 'ทำงานร่วมกับนักบัญชีและ DATEV',
        paragraphs: [
          'DATEV เป็นโปรแกรมที่สำนักงานบัญชีในเยอรมนีจำนวนมากใช้ โดยทั่วไปคุณไม่ต้องมีไลเซนส์เอง ไฟล์ส่งออกจาก Zenno ทำมาสำหรับ DATEV และนักบัญชี ส่วนนักบัญชีของคุณอยากได้ไฟล์แบบไหน ให้ตกลงกันตั้งแต่คุยกันครั้งแรก',
          'ตอนคุยกัน เตรียมรายการบริการพร้อมราคา และโน้ตสั้นๆ ว่าลูกค้าจ่ายเงินด้วยวิธีไหนบ้าง จดคำตอบไว้ แล้วตั้งอัตราภาษีใน Zenno ตามนั้น ถ้าบริการของร้านเปลี่ยน เช่น เปิดห้องใหม่สำหรับทรีตเมนต์ด้วยเครื่อง ให้นั่งทบทวนรายการกับนักบัญชีอีกครั้ง',
          'คำถามเหล่านี้ควรถามตั้งแต่คุยกันครั้งแรก',
        ],
        bullets: [
          'แต่ละบริการและสินค้าของฉันใช้อัตรา VAT เท่าไร',
          'ฉันต้องยื่นแบบ VAT รายเดือนหรือรายไตรมาส',
          'ต้องการไฟล์ส่งออกแบบไหน และภายในวันที่เท่าไร',
          'บัตรของขวัญ เงินมัดจำ และค่าปรับไม่มาตามนัด ควรลงบัญชีอย่างไร',
          'ทิปและค่าธรรมเนียมของผู้ให้บริการชำระเงิน จัดการอย่างไร',
        ],
      },
      {
        id: 'vouchers-deposits-fees',
        heading: 'บัตรของขวัญ เงินมัดจำ และค่าปรับไม่มาตามนัด',
        paragraphs: [
          'เงินกลุ่มนี้เข้ามาคนละเวลากับตอนให้บริการ จึงลงบัญชียากกว่าปกติ บัตรของขวัญ €80 ขายในเดือนธันวาคม แต่ใช้จริงเดือนมีนาคม เงินมัดจำ €20 เข้ามาสองสัปดาห์ก่อนนัด ส่วนค่าปรับ €25 เกิดจากนัดที่ไม่ได้ทำเลย',
          'สำหรับบัตรของขวัญ สิ่งสำคัญคือบัตรระบุชัดแค่ไหนว่าใช้กับอะไร บัตรแบบมูลค่าเงินที่ใช้กับบริการหรือสินค้าอะไรก็ได้ มักคิดภาษีต่างจากบัตรที่ระบุทรีตเมนต์เฉพาะ เรื่องนี้กำหนดว่า VAT เกิดตอนขายบัตรหรือตอนลูกค้ามาใช้ เงินมัดจำอาจมีผลทางภาษีตั้งแต่ตอนรับเงิน ส่วนค่าปรับไม่มาตามนัดก็จัดประเภทได้ไม่ชัดเจนเสมอไป',
          'ถามนักบัญชีว่าเงินแต่ละประเภทควรลงบัญชีอย่างไร แล้วเก็บคำตอบไว้เป็นลายลักษณ์อักษร ใน Zenno ยอดขายบัตรของขวัญจะอยู่ในสมุดเงินสดและในไฟล์ส่งออก DATEV ส่วนเงินมัดจำและค่าปรับ Zenno เก็บผ่าน Stripe',
        ],
      },
      {
        id: 'payment-types',
        heading: 'เงินสด บัตร และออนไลน์ ในภาพรวมเดียว',
        paragraphs: [
          'วันเสาร์ธรรมดาวันหนึ่ง ลูกค้าคนแรกจ่ายเงินสด คนที่สองรูดบัตรที่เครื่อง คนที่สามจ่ายออนไลน์ไว้แล้ว ตกเย็นเงินเหล่านี้อยู่คนละที่ ทั้งในลิ้นชักเก็บเงิน ที่ผู้ให้บริการเครื่องรูดบัตร และที่ Stripe สิ่งที่นักบัญชีต้องการคือทุกอย่างรวมอยู่ในรายการเดียว และตรงกับสเตทเมนต์ธนาคาร',
          'เงินที่ลูกค้าจ่ายออนไลน์ไม่ได้เข้าบัญชีทีละรายการ Stripe โอนเงินเป็นก้อนรวม และหักค่าธรรมเนียมก่อน ในสเตทเมนต์อาจเห็นยอดโอนเข้า €412.60 ครั้งเดียว ซึ่งรวมการจอง 12 รายการ รายได้ในภาพรวมจึงสูงกว่ายอดที่เข้าบัญชี นักบัญชีต้องใช้ทั้งสองตัวเลข คือรายได้และค่าธรรมเนียม',
          'เงินสดให้บันทึกในสมุดเงินสดใน Zenno นับเงินในลิ้นชักทุกเย็นแล้วเทียบกับสมุดเงินสด ตอนที่ยังจำเรื่องของวันนั้นได้ ส่วนการรับเงินสดของคุณมีข้อกำหนดเรื่องเครื่องบันทึกเงินสดหรือไม่ ขึ้นอยู่กับวิธีที่คุณรับเงิน ให้ถามนักบัญชี',
        ],
      },
      {
        id: 'month-end-checklist',
        heading: 'เช็กลิสต์สิ้นเดือน',
        paragraphs: [
          'แปะรายการนี้ไว้ข้างแล็ปท็อป หรือตั้งเป็นการแจ้งเตือนประจำเดือนในมือถือ',
          'ถ้าระหว่างตรวจพบว่าตั้งอัตรา VAT ผิด ให้แก้สำหรับการจองต่อจากนี้ แล้วแจ้งนักบัญชีไปพร้อมกัน นักบัญชีจะตัดสินว่าต้องแก้รายการที่ผ่านมาหรือไม่และอย่างไร',
        ],
        bullets: [
          'นับเงินสดแล้วเทียบกับสมุดเงินสด',
          'ตรวจนัดที่ยังค้างของเดือน: จ่ายแล้ว ไม่มาตามนัด หรือยกเลิก',
          'เปิดภาพรวมรายเดือนแล้วเทียบกับเดือนก่อน',
          'เทียบยอดโอนจาก Stripe และยอดรูดบัตรกับสเตทเมนต์ธนาคาร',
          'จดบริการใหม่หรือราคาที่เปลี่ยน พร้อมอัตรา VAT ที่ตกลงไว้',
          'จดยอดขายบัตรของขวัญ เงินมัดจำ และค่าปรับไว้สั้นๆ',
          'ส่งออกไฟล์และส่งให้นักบัญชีตามวันที่กำหนด',
          'ตอบคำถามจากนักบัญชี และเก็บคำตอบไว้',
        ],
      },
    ],
  },
}
