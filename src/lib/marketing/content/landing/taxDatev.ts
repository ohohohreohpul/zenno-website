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
      ],
    },
    og: { line1: 'พร้อมส่งให้', line2: 'นักบัญชีของคุณ', sub: 'VAT และส่งออก DATEV สำหรับสตูดิโอ' },
  },
}
