import type { Lang } from '../../lang'
import type { LandingContent } from './types'

/**
 * Target searches (DE): Buchungssoftware DATEV Export, Umsatzsteuer Friseur, Kleinunternehmerregelung Kosmetikstudio.
 * Live features only: VAT rates incl. §19 UStG, monthly/quarterly overview, DATEV /
 * tax-advisor export. Not claimed: e-invoicing (XRechnung/ZUGFeRD), GoBD, TSE/cash register.
 */
export const TAX_DATEV: Record<Lang, LandingContent> = {
  de: {
    meta: {
      title: 'Umsatzsteuer & DATEV-Export für Studios und Salons | Zenno',
      description:
        'Buchungssoftware mit Steuerfunktionen für Studios in Deutschland: richtige Umsatzsteuer je Leistung, Kleinunternehmerregelung (§19 UStG), Übersicht pro Monat oder Quartal und Export für DATEV oder Ihre Steuerberatung.',
    },
    label: 'Umsatzsteuer & DATEV',
    hero: {
      kicker: 'Steuern & Rechnungen · Deutschland',
      title: ['Bereit für Ihre', 'Steuerberatung.'],
      lead: 'Die richtige Umsatzsteuer auf jede Leistung, auch mit Kleinunternehmerregelung. Eine Steuerübersicht pro Monat oder Quartal und ein Export, den Ihre Steuerberatung in DATEV übernimmt.',
      ctaPrimary: 'Kostenlos starten',
      ctaSecondary: 'So funktioniert es',
    },
    embed: 'tax',
    points: {
      kicker: 'Was Zenno übernimmt',
      title: ['Weniger Belege sortieren.', 'Mehr Zeit für Kundschaft.'],
      items: [
        {
          title: 'Umsatzsteuer je Leistung',
          body: 'Jede Leistung trägt den richtigen Steuersatz, damit Umsätze und enthaltene Umsatzsteuer stimmen.',
        },
        {
          title: 'Kleinunternehmerregelung',
          body: 'Nutzen Sie §19 UStG, rechnet Zenno ohne ausgewiesene Umsatzsteuer.',
        },
        {
          title: 'Übersicht pro Monat oder Quartal',
          body: 'Umsätze und Steuer auf einen Blick, passend zu Ihrem Voranmeldungszeitraum.',
        },
        {
          title: 'Export für DATEV',
          body: 'Ein Export, den Ihre Steuerberatung direkt in DATEV oder ihr eigenes System übernimmt.',
        },
      ],
    },
    steps: {
      kicker: 'So funktioniert es',
      title: ['Einstellen, buchen,', 'exportieren.'],
      items: [
        { title: 'Steuerstatus festlegen', body: 'Umsatzsteuerpflichtig oder Kleinunternehmer nach §19 UStG.' },
        { title: 'Buchungen laufen', body: 'Jede Buchung und Zahlung wird mit dem richtigen Steuersatz erfasst.' },
        { title: 'Export an die Steuerberatung', body: 'Zum Monats- oder Quartalsende exportieren und für DATEV übergeben.' },
      ],
    },
    faq: {
      kicker: 'Fragen zu Steuern',
      title: ['Umsatzsteuer und DATEV,', 'kurz erklärt.'],
      items: [
        {
          q: 'Ersetzt Zenno meine Steuerberatung?',
          a: 'Nein. Zenno bereitet Umsätze und Umsatzsteuer auf und exportiert sie für DATEV oder Ihre Steuerberatung. Die Steuererklärung und die Voranmeldung macht weiterhin Ihre Steuerberatung.',
        },
        {
          q: 'Funktioniert das als Kleinunternehmer?',
          a: 'Ja. Zenno unterstützt die Kleinunternehmerregelung nach §19 UStG.',
        },
        {
          q: 'Welche Zeiträume kann ich auswerten?',
          a: 'Zenno zeigt eine Steuerübersicht pro Monat oder pro Quartal.',
        },
        {
          q: 'Kann meine Steuerberatung mit dem Export arbeiten?',
          a: 'Der Export ist für DATEV und für Steuerberatungen gedacht. Fragen Sie Ihre Steuerberatung, in welcher Form sie die Daten am liebsten bekommt.',
        },
        {
          q: 'Welcher Steuersatz gilt für meine Leistungen?',
          a: 'Das hängt von der Leistung und von Ihrer Situation ab, und das kann Zenno nicht für Sie entscheiden. Klären Sie die Sätze einmal mit Ihrer Steuerberatung und hinterlegen Sie sie dann je Leistung in Zenno.',
        },
        {
          q: 'Brauche ich selbst eine DATEV-Lizenz?',
          a: 'Nein. Mit DATEV arbeitet in der Regel Ihre Steuerberatung. Sie exportieren die Daten aus Zenno und geben die Datei weiter.',
        },
        {
          q: 'Wo sehe ich verkaufte Gutscheine?',
          a: 'Gutscheinverkäufe stehen im Kassenbuch und im DATEV-Export. Wie Gutscheine steuerlich zu behandeln sind, klären Sie am besten mit Ihrer Steuerberatung.',
        },
      ],
    },
    story: {
      kicker: 'Sonntagabend, Küchentisch',
      title: ['Die Zahlen stehen schon.', 'Der Tee wird nicht kalt.'],
      paragraphs: [
        'Monatsende hieß lange: Schuhkarton auf den Küchentisch, Kontoauszüge daneben und bis spät in die Nacht Umsätze abtippen. Mit Zenno klappen Sie den Laptop auf, sehen die Übersicht für den Monat und schicken den Export an Ihre Steuerberatung.',
        'In einem Studio kommen viele kleine Beträge zusammen: Behandlungen, Pakete, Gutscheine, mal mit Anzahlung, mal vor Ort bezahlt. Nicht jede Leistung hat denselben Steuersatz, und wer die Kleinunternehmerregelung nutzt, weist gar keine Umsatzsteuer aus. Wird das alles erst am Quartalsende sortiert, gehen ganze Abende verloren. Und die Rückfragen der Steuerberatung kommen genau dann, wenn eigentlich Kundschaft im Studio sitzt.',
        'Zenno erfasst jede Buchung und Zahlung gleich mit dem Steuersatz, den Sie für die Leistung hinterlegt haben. Nutzen Sie §19 UStG, rechnet Zenno ohne ausgewiesene Umsatzsteuer. Die Übersicht zeigt Umsätze und Steuer pro Monat oder Quartal, passend zu Ihrem Voranmeldungszeitraum, und den Export übernimmt Ihre Steuerberatung in DATEV. Welcher Satz für welche Leistung gilt, klären Sie einmal mit ihr. Danach müssen Sie am Monatsende nichts mehr nachtragen.',
      ],
      image: '/images/features/tax-kitchen.webp',
      imageAlt: 'Studioinhaberin sitzt abends entspannt am Küchentisch mit Laptop, Belegen und einer Tasse Tee',
      note: { label: 'DATEV-Export', value: 'Oktober bereit für die Steuerberatung' },
    },
    scenes: {
      kicker: 'Von der Theke zur Steuerberatung',
      title: ['Jede Zahlung landet', 'an der richtigen Stelle.'],
      items: [
        {
          title: 'Bezahlt an der Theke',
          body: 'Nach der Behandlung steht die Kundin an der Theke und bezahlt, oder sie hat schon bei der Buchung online angezahlt. In beiden Fällen erfasst Zenno den Betrag mit dem Steuersatz der Leistung. Sie müssen nichts nachtragen und keine Belege auf einen Stapel legen, der erst Wochen später sortiert wird. Am Abend stehen die Umsätze des Tages bereits in Ihrer Monatsübersicht, mit Umsatzsteuer.',
          image: '/images/verticals/clinic-aftercare.webp',
          imageAlt: 'Kundin bezahlt nach einer Behandlung an der Theke einer Kosmetikpraxis',
          note: { label: 'Umsatzsteuer', value: '19 % auf die Leistung erfasst' },
        },
        {
          title: 'Die Steuerberatung bekommt, was sie braucht',
          body: 'Ihre Steuerberatung arbeitet mit DATEV, und genau dafür ist der Export aus Zenno gedacht. Statt eines Stapels einzelner Belege bekommt sie Umsätze und Umsatzsteuer für den Monat oder das Quartal an einer Stelle. Fragen Sie einmal nach, in welcher Form sie die Daten am liebsten hätte, und schicken Sie den Export dann immer zum selben Termin. Die Voranmeldung und die Steuererklärung macht weiterhin sie.',
          image: '/images/features/tax-advisor.webp',
          imageAlt: 'Steuerberaterin prüft am Schreibtisch einen ausgedruckten Monatsbericht',
          note: { label: 'Übersicht', value: '3. Quartal: Umsatz und Steuer' },
        },
      ],
    },
    og: { line1: 'Bereit für Ihre', line2: 'Steuerberatung.', sub: 'Umsatzsteuer & DATEV-Export für Studios' },
  },
  en: {
    meta: {
      title: 'VAT & DATEV export for studios and salons in Germany | Zenno',
      description:
        'Booking software with tax features for studios in Germany: the right VAT per service, the Kleinunternehmer rule (§19 UStG), a monthly or quarterly overview and an export for DATEV or your tax advisor.',
    },
    label: 'VAT & DATEV export',
    hero: {
      kicker: 'Tax & invoices · Germany',
      title: ['Ready for your', 'tax advisor.'],
      lead: 'The right VAT on every service, including the Kleinunternehmer rule. A tax overview per month or quarter, and an export your advisor can load into DATEV.',
      ctaPrimary: 'Start free',
      ctaSecondary: 'How it works',
    },
    embed: 'tax',
    points: {
      kicker: 'What Zenno handles',
      title: ['Less receipt sorting.', 'More time for clients.'],
      items: [
        {
          title: 'VAT per service',
          body: 'Every service carries the right tax rate, so revenue and included VAT add up.',
        },
        {
          title: 'Kleinunternehmer rule',
          body: 'If you use §19 UStG, Zenno works without showing VAT.',
        },
        {
          title: 'Monthly or quarterly overview',
          body: 'Revenue and tax at a glance, matching your VAT return period.',
        },
        {
          title: 'Export for DATEV',
          body: 'An export your tax advisor can load straight into DATEV or their own system.',
        },
      ],
    },
    steps: {
      kicker: 'How it works',
      title: ['Set up, book,', 'export.'],
      items: [
        { title: 'Set your tax status', body: 'VAT-registered, or Kleinunternehmer under §19 UStG.' },
        { title: 'Bookings run', body: 'Every booking and payment is recorded with the right tax rate.' },
        { title: 'Export for your advisor', body: 'At month or quarter end, export and hand it over for DATEV.' },
      ],
    },
    faq: {
      kicker: 'Tax questions',
      title: ['VAT and DATEV,', 'in brief.'],
      items: [
        {
          q: 'Does Zenno replace my tax advisor?',
          a: 'No. Zenno prepares revenue and VAT and exports it for DATEV or your tax advisor. Your advisor still files the returns.',
        },
        {
          q: 'Does it work under the Kleinunternehmer rule?',
          a: 'Yes. Zenno supports the small-business rule under §19 UStG.',
        },
        {
          q: 'Which periods can I review?',
          a: 'Zenno shows a tax overview per month or per quarter.',
        },
        {
          q: 'Can my tax advisor work with the export?',
          a: 'The export is made for DATEV and tax advisors. Ask your advisor which format they prefer to receive.',
        },
        {
          q: 'Which VAT rate applies to my services?',
          a: 'That depends on the service and on your situation, and Zenno can’t decide it for you. Agree the rates once with your tax advisor, then set them per service in Zenno.',
        },
        {
          q: 'Do I need my own DATEV licence?',
          a: 'No. In most cases it is your tax advisor who works in DATEV. You export the data from Zenno and pass the file on.',
        },
        {
          q: 'Where do I see vouchers I’ve sold?',
          a: 'Voucher sales appear in the cash book and in the DATEV export. How vouchers are treated for tax is best checked with your tax advisor.',
        },
      ],
    },
    story: {
      kicker: 'Sunday evening, kitchen table',
      title: ['The numbers are already there.', 'The tea stays warm.'],
      paragraphs: [
        'For a long time, month end meant a shoebox on the kitchen table, bank statements next to it, and typing up sales until late. With Zenno you open your laptop, look at the month’s overview and send the export to your tax advisor.',
        'A studio collects a lot of small amounts: treatments, packages, vouchers, some with a deposit, some paid on the spot. Not every service carries the same VAT rate, and under the Kleinunternehmer rule you show no VAT at all. If all of that only gets sorted at the end of the quarter, whole evenings disappear. And your tax advisor’s questions arrive just when there are clients in the studio.',
        'Zenno records every booking and payment with the VAT rate you set for that service. If you use §19 UStG, Zenno invoices without VAT. The overview shows revenue and tax per month or quarter, matching your filing period, and your tax advisor takes the export straight into DATEV. Agree once with them which rate applies to which service. After that, there is nothing to catch up on at month end.',
      ],
      image: '/images/features/tax-kitchen.webp',
      imageAlt: 'A studio owner relaxing at her kitchen table in the evening with a laptop, receipts and a cup of tea',
      note: { label: 'DATEV export', value: 'October ready for your advisor' },
    },
    scenes: {
      kicker: 'From the counter to your advisor',
      title: ['Every payment ends up', 'in the right place.'],
      items: [
        {
          title: 'Paid at the counter',
          body: 'After her treatment the client pays at the counter, or she already paid a deposit online when she booked. Either way, Zenno records the amount with the VAT rate for that service. You don’t type anything up later or add receipts to a pile that gets sorted weeks from now. By the evening, the day’s sales are already in your monthly overview, VAT included.',
          image: '/images/verticals/clinic-aftercare.webp',
          imageAlt: 'A client paying at the counter of a beauty clinic after her treatment',
          note: { label: 'VAT', value: '19% recorded on the service' },
        },
        {
          title: 'Your advisor gets what they need',
          body: 'Your tax advisor works in DATEV, and that is exactly what the Zenno export is made for. Instead of a pile of single receipts, they get revenue and VAT for the month or quarter in one place. Ask them once which format they prefer, then send the export on the same date each time. They still handle the VAT returns and the annual tax return.',
          image: '/images/features/tax-advisor.webp',
          imageAlt: 'A tax advisor at her desk reviewing a printed monthly report',
          note: { label: 'Overview', value: 'Q3: revenue and tax' },
        },
      ],
    },
    og: { line1: 'Ready for your', line2: 'tax advisor.', sub: 'VAT & DATEV export for studios' },
  },
  th: {
    meta: {
      title: 'VAT และส่งออก DATEV สำหรับสตูดิโอและซาลอนในเยอรมนี | Zenno',
      description:
        'ระบบจองคิวพร้อมฟีเจอร์ภาษีสำหรับสตูดิโอในเยอรมนี: ภาษีมูลค่าเพิ่มที่ถูกต้องในแต่ละบริการ กฎผู้ประกอบการรายย่อย (§19 UStG) ภาพรวมรายเดือนหรือรายไตรมาส และการส่งออกข้อมูลสำหรับ DATEV หรือนักบัญชีของคุณ',
    },
    label: 'VAT และส่งออก DATEV',
    hero: {
      kicker: 'ภาษีและใบแจ้งหนี้ · เยอรมนี',
      title: ['พร้อมส่งให้', 'นักบัญชีของคุณ'],
      lead: 'ภาษีมูลค่าเพิ่มที่ถูกต้องในทุกบริการ รวมถึงกฎผู้ประกอบการรายย่อย (§19 UStG) ภาพรวมภาษีรายเดือนหรือรายไตรมาส และไฟล์ส่งออกที่นักบัญชีของคุณนำเข้า DATEV ได้',
      ctaPrimary: 'เริ่มใช้ฟรี',
      ctaSecondary: 'ดูวิธีการทำงาน',
    },
    embed: 'tax',
    points: {
      kicker: 'สิ่งที่ Zenno จัดการให้',
      title: ['คัดแยกใบเสร็จน้อยลง', 'มีเวลาให้ลูกค้ามากขึ้น'],
      items: [
        {
          title: 'ภาษีมูลค่าเพิ่มตามแต่ละบริการ',
          body: 'ทุกบริการมีอัตราภาษีที่ถูกต้อง รายได้และภาษีมูลค่าเพิ่มที่รวมอยู่จึงตรงกัน',
        },
        {
          title: 'กฎผู้ประกอบการรายย่อย',
          body: 'ถ้าคุณใช้ §19 UStG Zenno ทำงานได้โดยไม่แสดงภาษีมูลค่าเพิ่ม',
        },
        {
          title: 'ภาพรวมรายเดือนหรือรายไตรมาส',
          body: 'ดูรายได้และภาษีได้ในพริบตา ตรงกับรอบการยื่นภาษีมูลค่าเพิ่มของคุณ',
        },
        {
          title: 'ส่งออกสำหรับ DATEV',
          body: 'ไฟล์ส่งออกที่นักบัญชีของคุณนำเข้า DATEV หรือระบบของตัวเองได้ทันที',
        },
      ],
    },
    steps: {
      kicker: 'วิธีการทำงาน',
      title: ['ตั้งค่า รับจอง', 'ส่งออก'],
      items: [
        { title: 'ตั้งสถานะภาษีของคุณ', body: 'จดทะเบียนภาษีมูลค่าเพิ่ม หรือเป็นผู้ประกอบการรายย่อยตาม §19 UStG' },
        { title: 'รับจองตามปกติ', body: 'ทุกการจองและการชำระเงินถูกบันทึกพร้อมอัตราภาษีที่ถูกต้อง' },
        { title: 'ส่งออกให้นักบัญชี', body: 'เมื่อสิ้นเดือนหรือสิ้นไตรมาส ส่งออกไฟล์แล้วส่งต่อให้นักบัญชีเพื่อใช้กับ DATEV' },
      ],
    },
    faq: {
      kicker: 'คำถามเรื่องภาษี',
      title: ['VAT และ DATEV', 'แบบสั้นๆ'],
      items: [
        {
          q: 'Zenno ใช้แทนนักบัญชีของฉันได้ไหม',
          a: 'ไม่ได้ Zenno เตรียมข้อมูลรายได้และภาษีมูลค่าเพิ่ม แล้วส่งออกสำหรับ DATEV หรือนักบัญชีของคุณ นักบัญชีของคุณยังเป็นผู้ยื่นแบบภาษีเหมือนเดิม',
        },
        {
          q: 'ใช้กับกฎผู้ประกอบการรายย่อยได้ไหม',
          a: 'ได้ Zenno รองรับกฎผู้ประกอบการรายย่อยตาม §19 UStG',
        },
        {
          q: 'ดูข้อมูลย้อนหลังเป็นช่วงเวลาแบบไหนได้บ้าง',
          a: 'Zenno แสดงภาพรวมภาษีรายเดือนหรือรายไตรมาส',
        },
        {
          q: 'นักบัญชีของฉันใช้ไฟล์ส่งออกได้ไหม',
          a: 'ไฟล์ส่งออกทำมาสำหรับ DATEV และนักบัญชี ลองถามนักบัญชีของคุณว่าต้องการรับไฟล์ในรูปแบบไหน',
        },
        {
          q: 'บริการของฉันต้องใช้อัตรา VAT เท่าไร',
          a: 'ขึ้นอยู่กับประเภทบริการและสถานการณ์ของคุณ ซึ่ง Zenno ตัดสินใจแทนคุณไม่ได้ ตกลงอัตราภาษีกับนักบัญชีของคุณครั้งเดียว แล้วตั้งค่าไว้ในแต่ละบริการใน Zenno',
        },
        {
          q: 'ฉันต้องมีไลเซนส์ DATEV เองไหม',
          a: 'ไม่ต้อง โดยทั่วไปนักบัญชีของคุณเป็นคนใช้ DATEV คุณแค่ส่งออกข้อมูลจาก Zenno แล้วส่งไฟล์ต่อให้',
        },
        {
          q: 'ดูบัตรของขวัญที่ขายไปแล้วได้ที่ไหน',
          a: 'ยอดขายบัตรของขวัญอยู่ในสมุดเงินสด (Kassenbuch) และในไฟล์ส่งออก DATEV ส่วนบัตรของขวัญต้องคิดภาษีอย่างไร ควรสอบถามนักบัญชีของคุณ',
        },
      ],
    },
    story: {
      kicker: 'คืนวันอาทิตย์ ที่โต๊ะในครัว',
      title: ['ตัวเลขพร้อมอยู่แล้ว', 'ชายังไม่ทันเย็น'],
      paragraphs: [
        'เมื่อก่อนสิ้นเดือนหมายถึงกล่องรองเท้าเต็มใบเสร็จวางบนโต๊ะในครัว มีสเตทเมนต์ธนาคารวางข้างๆ และนั่งพิมพ์ยอดขายจนดึก กับ Zenno คุณแค่เปิดแล็ปท็อป ดูภาพรวมของเดือน แล้วส่งไฟล์ส่งออกให้นักบัญชี',
        'ในร้านหนึ่งร้านมียอดเงินเล็กๆ เข้ามามากมาย ทั้งค่าทรีตเมนต์ แพ็กเกจ บัตรของขวัญ บางรายการจ่ายมัดจำ บางรายการจ่ายที่ร้าน แต่ละบริการอาจมีอัตรา VAT ไม่เท่ากัน และถ้าใช้กฎผู้ประกอบการรายย่อย ก็ไม่ต้องแสดง VAT เลย ถ้ารอจัดการทั้งหมดตอนสิ้นไตรมาส ก็หมดไปหลายคืน และคำถามจากนักบัญชีมักมาตอนที่มีลูกค้านั่งอยู่ในร้านพอดี',
        'Zenno บันทึกทุกการจองและทุกการชำระเงินพร้อมอัตรา VAT ที่คุณตั้งไว้ให้บริการนั้น ถ้าคุณใช้ §19 UStG Zenno จะออกบิลโดยไม่แสดง VAT ภาพรวมแสดงรายได้และภาษีรายเดือนหรือรายไตรมาส ตรงกับรอบยื่นภาษีของคุณ และนักบัญชีนำไฟล์ส่งออกเข้า DATEV ได้เลย ตกลงกับนักบัญชีครั้งเดียวว่าบริการไหนใช้อัตราไหน หลังจากนั้นสิ้นเดือนก็ไม่ต้องตามเก็บอะไรอีก',
      ],
      image: '/images/features/tax-kitchen.webp',
      imageAlt: 'เจ้าของร้านนั่งสบายๆ ที่โต๊ะในครัวตอนค่ำ มีแล็ปท็อป ใบเสร็จ และชาหนึ่งแก้ว',
      note: { label: 'ไฟล์ส่งออก DATEV', value: 'เดือนตุลาคม พร้อมส่งนักบัญชี' },
    },
    scenes: {
      kicker: 'จากเคาน์เตอร์ถึงนักบัญชี',
      title: ['ทุกการชำระเงิน', 'ไปอยู่ถูกที่'],
      items: [
        {
          title: 'จ่ายเงินที่เคาน์เตอร์',
          body: 'หลังทำทรีตเมนต์ ลูกค้าจ่ายเงินที่เคาน์เตอร์ หรือจ่ายมัดจำออนไลน์ไว้แล้วตอนจอง ไม่ว่าแบบไหน Zenno ก็บันทึกยอดพร้อมอัตรา VAT ของบริการนั้น คุณไม่ต้องมาพิมพ์ทีหลัง และไม่ต้องกองใบเสร็จไว้รอจัดการอีกหลายสัปดาห์ พอถึงตอนเย็น ยอดขายของวันนั้นก็อยู่ในภาพรวมรายเดือนแล้ว พร้อม VAT',
          image: '/images/verticals/clinic-aftercare.webp',
          imageAlt: 'ลูกค้ากำลังจ่ายเงินที่เคาน์เตอร์ของคลินิกความงามหลังทำทรีตเมนต์',
          note: { label: 'VAT', value: 'บันทึก 19% ตามบริการ' },
        },
        {
          title: 'นักบัญชีได้ข้อมูลที่ต้องใช้',
          body: 'นักบัญชีของคุณทำงานกับ DATEV และไฟล์ส่งออกจาก Zenno ก็ทำมาเพื่อสิ่งนี้ แทนที่จะได้ใบเสร็จเป็นกอง นักบัญชีจะได้รายได้และ VAT ของเดือนหรือไตรมาสรวมอยู่ในที่เดียว ถามนักบัญชีครั้งเดียวว่าอยากได้ไฟล์แบบไหน แล้วส่งไฟล์ให้ตรงวันเดิมทุกครั้ง การยื่นแบบ VAT และภาษีประจำปียังเป็นหน้าที่ของนักบัญชีเหมือนเดิม',
          image: '/images/features/tax-advisor.webp',
          imageAlt: 'นักบัญชีนั่งที่โต๊ะทำงาน กำลังตรวจรายงานประจำเดือนที่พิมพ์ออกมา',
          note: { label: 'ภาพรวม', value: 'ไตรมาส 3: รายได้และภาษี' },
        },
      ],
    },
    og: { line1: 'พร้อมส่งให้', line2: 'นักบัญชีของคุณ', sub: 'VAT และส่งออก DATEV สำหรับสตูดิโอ' },
  },
}
