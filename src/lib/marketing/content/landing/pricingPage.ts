import type { Lang } from '../../lang'
import type { FaqItem } from '../faq'
import { CREDITS_LINE, PLAN_LINE } from '../plans'
import type { Headline, TitledItem } from './types'

export interface PricingPageContent {
  meta: { title: string; description: string }
  label: string
  hero: { kicker: string; title: Headline; lead: string }
  billing: { kicker: string; title: Headline; items: TitledItem[] }
  faq: { kicker: string; title: Headline; items: FaqItem[] }
  og: { line1: string; line2: string; sub: string }
}

/** Target searches (DE): Buchungssoftware Preise, Terminbuchung kostenlos, KI-Rezeption Kosten. */
export const PRICING_PAGE: Record<Lang, PricingPageContent> = {
  de: {
    meta: {
      title: 'Preise: Buchungssoftware ab 0 €, mit KI-Rezeption 49 € | Zenno',
      description:
        'Zenno Preise: Free 0 € für 1 Therapeutin und 5 Behandlungen, Zenno 49 € im Monat mit allem und 1.000 KI-Antworten, Custom zum Preis für Ihren Betrieb. KI-Credits zum Aufladen ab 10 €.',
    },
    label: 'Preise',
    hero: {
      kicker: 'Preise',
      title: ['Ein Preis für den Empfang.', 'Kostenlos starten.'],
      lead: 'Free zum Ausprobieren, Zenno für alles, Custom für größere Betriebe. Keine Kreditkarte zum Start.',
    },
    billing: {
      kicker: 'So wird abgerechnet',
      title: ['Ein Monatspreis,', 'KI-Antworten inklusive.'],
      items: [
        { title: 'Fester Monatstarif', body: 'Free oder Zenno. Sie wissen vorher, was der Monat kostet.' },
        { title: '1.000 KI-Antworten inklusive', body: 'Im Zenno-Tarif beantwortet die KI-Rezeption bis zu 1.000 Nachrichten im Monat.' },
        { title: 'KI-Credits aufladen', body: '500, 2.000 oder 10.000 Antworten für 10 €, 29 € oder 99 €, bezahlt über Stripe.' },
        { title: 'Nichts geht verloren', body: 'Sind die Credits aufgebraucht, pausiert die KI und neue Nachrichten warten in Ihrem Posteingang.' },
      ],
    },
    faq: {
      kicker: 'Fragen zu Preisen',
      title: ['Klare Antworten', 'zur Rechnung.'],
      items: [
        { q: 'Welche Tarife gibt es?', a: PLAN_LINE.de },
        {
          q: 'Was kostet eine Buchungssoftware mit Kasse für ein kleines Studio im Monat?',
          a: 'Mit Zenno 0 € im kostenlosen Tarif für 1 Therapeutin und 5 Behandlungen, oder 49 € im Monat mit allem: Kassenkalender, Zahlungen am Empfang und online, Kassenbuch, No-Show-Gebühren, DATEV-Export und KI-Rezeption mit 1.000 Antworten im Monat. Auf Buchungen fällt keine Provision an. Ob Sie für Barzahlungen zusätzlich eine zertifizierte Kasse mit TSE brauchen, klären Sie mit Ihrer Steuerberatung.',
        },
        {
          q: 'Kann ich Zenno kostenlos testen, bevor ich mich festlege?',
          a: 'Ja, ohne Kreditkarte und ohne Laufzeit. Der Free-Tarif ist keine befristete Testphase: Sie richten Ihre Behandlungen ein, teilen Ihren Buchungslink und nehmen echte Buchungen an. Wenn Sie mehr Therapeutinnen oder die KI-Rezeption brauchen, wechseln Sie zu Zenno für 49 € im Monat.',
        },
        {
          q: 'Was kann der kostenlose Tarif?',
          a: 'Free hat Kassenkalender und Online-Buchungsseite für 1 Therapeutin und 5 Behandlungen. Die KI-Rezeption ist nicht dabei, und auf Ihrer Buchungsseite steht „Powered by Zenno“. Eine Kreditkarte brauchen Sie zum Start nicht.',
        },
        { q: 'Was passiert, wenn die KI-Antworten aufgebraucht sind?', a: CREDITS_LINE.de },
        {
          q: 'Wie funktioniert Custom?',
          a: 'Custom hat dieselben Funktionen wie Zenno, mit einem Preis und KI-Antworten passend zu Ihrem Betrieb. Schreiben Sie uns an support@zennohq.com.',
        },
        {
          q: 'Zahle ich Provision pro Buchung?',
          a: 'Nein. Auf Buchungen fällt keine Provision an. Für Online-Zahlungen berechnet Stripe seine üblichen Gebühren.',
        },
      ],
    },
    og: { line1: 'Ab 0 € im Monat.', line2: 'Mit KI-Rezeption 49 €.', sub: 'Zenno Preise' },
  },
  en: {
    meta: {
      title: 'Pricing: booking software from €0, with AI receptionist €49 | Zenno',
      description:
        'Zenno pricing: Free €0 for 1 therapist and 5 treatments, Zenno €49 a month with everything and 1,000 AI replies, Custom priced for your business. AI credit top-ups from €10.',
    },
    label: 'Pricing',
    hero: {
      kicker: 'Pricing',
      title: ['One price for the front desk.', 'Start free.'],
      lead: 'Free to try it, Zenno for everything, Custom for bigger businesses. No credit card to start.',
    },
    billing: {
      kicker: 'How billing works',
      title: ['One monthly price,', 'AI replies included.'],
      items: [
        { title: 'Flat monthly plan', body: 'Free or Zenno. You know what the month costs up front.' },
        { title: '1,000 AI replies included', body: 'On the Zenno plan, the AI receptionist answers up to 1,000 messages a month.' },
        { title: 'Top up AI credits', body: '500, 2,000 or 10,000 replies for €10, €29 or €99, paid through Stripe.' },
        { title: 'Nothing is lost', body: 'If credits run out, the AI pauses and new messages wait in your inbox.' },
      ],
    },
    faq: {
      kicker: 'Pricing questions',
      title: ['Straight answers', 'about the bill.'],
      items: [
        { q: 'Which plans are there?', a: PLAN_LINE.en },
        {
          q: 'What does booking software with a till cost a small studio per month?',
          a: 'With Zenno, €0 on the free plan for 1 therapist and 5 treatments, or €49 a month for everything: POS calendar, payments at the desk and online, cash book, no-show fees, DATEV export and the AI receptionist with 1,000 replies a month. There is no commission on bookings. Whether you also need a certified till with a TSE for cash payments is a question for your tax advisor.',
        },
        {
          q: 'Can I try Zenno for free before committing?',
          a: 'Yes, with no credit card and no contract term. The free plan isn’t a time-limited trial: you set up your treatments, share your booking link and take real bookings. When you need more therapists or the AI receptionist, move to Zenno for €49 a month.',
        },
        {
          q: 'What does the free plan include?',
          a: 'Free has the POS calendar and online booking page for 1 therapist and 5 treatments. It has no AI receptionist, and your booking page shows “Powered by Zenno”. You don’t need a credit card to start.',
        },
        { q: 'What happens when the AI replies run out?', a: CREDITS_LINE.en },
        {
          q: 'How does Custom work?',
          a: 'Custom has the same features as Zenno, with a price and AI replies set for your business. Write to support@zennohq.com.',
        },
        {
          q: 'Do I pay commission per booking?',
          a: 'No. There is no commission on bookings. For online payments, Stripe charges its usual fees.',
        },
      ],
    },
    og: { line1: 'From €0 a month.', line2: 'With AI receptionist €49.', sub: 'Zenno pricing' },
  },
  th: {
    meta: {
      title: 'ราคา: ระบบจองคิวเริ่มต้น €0 พร้อมพนักงานต้อนรับ AI €49 | Zenno',
      description:
        'ราคา Zenno: Free €0 สำหรับพนักงาน 1 คนและบริการ 5 รายการ, Zenno €49 ต่อเดือน ได้ทุกอย่างพร้อมการตอบด้วย AI 1,000 ข้อความ, Custom ราคาตามธุรกิจของคุณ เติมเครดิต AI เริ่มต้น €10',
    },
    label: 'ราคา',
    hero: {
      kicker: 'ราคา',
      title: ['ราคาเดียวสำหรับงานหน้าเคาน์เตอร์', 'เริ่มใช้ฟรี'],
      lead: 'Free สำหรับลองใช้ Zenno สำหรับทุกอย่าง และ Custom สำหรับธุรกิจที่ใหญ่ขึ้น ไม่ต้องใช้บัตรเครดิตเพื่อเริ่มต้น',
    },
    billing: {
      kicker: 'วิธีคิดค่าบริการ',
      title: ['ราคารายเดือนเดียว', 'รวมการตอบด้วย AI'],
      items: [
        { title: 'แพ็กเกจรายเดือนราคาคงที่', body: 'Free หรือ Zenno คุณรู้ล่วงหน้าว่าแต่ละเดือนจ่ายเท่าไร' },
        { title: 'รวมการตอบด้วย AI 1,000 ข้อความ', body: 'ในแพ็กเกจ Zenno พนักงานต้อนรับ AI ตอบได้สูงสุด 1,000 ข้อความต่อเดือน' },
        { title: 'เติมเครดิต AI', body: '500, 2,000 หรือ 10,000 ข้อความ ในราคา €10, €29 หรือ €99 ชำระผ่าน Stripe' },
        { title: 'ไม่มีข้อความหาย', body: 'ถ้าเครดิตหมด AI จะหยุดตอบชั่วคราว และข้อความใหม่จะรออยู่ในกล่องข้อความ' },
      ],
    },
    faq: {
      kicker: 'คำถามเรื่องราคา',
      title: ['ตอบตรงๆ', 'เรื่องค่าใช้จ่าย'],
      items: [
        { q: 'มีแพ็กเกจอะไรบ้าง', a: PLAN_LINE.th },
        {
          q: 'ระบบจองคิวที่มีระบบเก็บเงินสำหรับร้านเล็กราคาเดือนละเท่าไร',
          a: 'กับ Zenno ราคา €0 ในแพ็กเกจฟรีสำหรับพนักงาน 1 คนและบริการ 5 รายการ หรือ €49 ต่อเดือนได้ทุกอย่าง ทั้งปฏิทินหน้าร้าน รับชำระที่ร้านและออนไลน์ สมุดเงินสด ค่าปรับไม่มาตามนัด ไฟล์ส่งออก DATEV และพนักงานต้อนรับ AI 1,000 ข้อความต่อเดือน ไม่มีค่าคอมมิชชั่นจากการจอง ส่วนเรื่องว่าต้องใช้เครื่องเก็บเงินที่มี TSE สำหรับเงินสดหรือไม่ ให้ปรึกษาที่ปรึกษาภาษี',
        },
        {
          q: 'ลองใช้ Zenno ฟรีก่อนตัดสินใจได้ไหม',
          a: 'ได้ ไม่ต้องใช้บัตรเครดิตและไม่มีสัญญาผูกมัด แพ็กเกจฟรีไม่ใช่ช่วงทดลองที่มีวันหมดอายุ คุณตั้งค่าบริการ แชร์ลิงก์จอง และรับการจองจริงได้เลย เมื่อต้องการพนักงานเพิ่มหรือพนักงานต้อนรับ AI ก็เปลี่ยนเป็น Zenno ราคา €49 ต่อเดือน',
        },
        {
          q: 'แพ็กเกจฟรีมีอะไรบ้าง',
          a: 'Free มีปฏิทินหน้าร้านและหน้าจองออนไลน์ สำหรับพนักงาน 1 คนและบริการ 5 รายการ ไม่มีพนักงานต้อนรับ AI และหน้าจองจะมีป้าย “Powered by Zenno” ไม่ต้องใช้บัตรเครดิตเพื่อเริ่มต้น',
        },
        { q: 'ถ้าการตอบด้วย AI หมดจะเป็นอย่างไร', a: CREDITS_LINE.th },
        {
          q: 'Custom ทำงานอย่างไร',
          a: 'Custom มีฟีเจอร์เหมือน Zenno แต่ราคาและจำนวนการตอบด้วย AI ตั้งให้เหมาะกับธุรกิจของคุณ ติดต่อเราได้ที่ support@zennohq.com',
        },
        {
          q: 'มีค่าคอมมิชชั่นต่อการจองไหม',
          a: 'ไม่มี ไม่มีค่าคอมมิชชั่นสำหรับการจอง สำหรับการชำระเงินออนไลน์ Stripe เรียกเก็บค่าธรรมเนียมตามปกติ',
        },
      ],
    },
    og: { line1: 'เริ่มต้น €0 ต่อเดือน', line2: 'พร้อม AI €49', sub: 'ราคา Zenno' },
  },
}
