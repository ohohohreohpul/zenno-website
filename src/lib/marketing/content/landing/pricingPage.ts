import type { Lang } from '../../lang'
import type { FaqItem } from '../faq'
import type { Headline, TitledItem } from './types'

export interface PricingPageContent {
  meta: { title: string; description: string }
  label: string
  hero: { kicker: string; title: Headline; lead: string }
  billing: { kicker: string; title: Headline; items: TitledItem[] }
  faq: { kicker: string; title: Headline; items: FaqItem[] }
  og: { line1: string; line2: string; sub: string }
}

/** Target searches (DE): Buchungssoftware Preise, Terminbuchung kostenlos, Online-Buchung Salon Kosten. */
export const PRICING_PAGE: Record<Lang, PricingPageContent> = {
  de: {
    meta: {
      title: 'Preise: Buchungssoftware für Studios ab 0 € | Zenno',
      description:
        'Zenno Preise: Free 0 €, Standard 29 € und Pro 45 € pro Monat. Feste Monatstarife, keine Provision auf KI-Buchungen, keine Kreditkarte zum Start. Die KI-Rezeption ist Teil derselben App.',
    },
    label: 'Preise',
    hero: {
      kicker: 'Preise',
      title: ['Feste Monatstarife.', 'Keine Provision auf KI-Buchungen.'],
      lead: 'Kostenlos starten, upgraden wenn der Kalender voll ist. Keine Kreditkarte nötig.',
    },
    billing: {
      kicker: 'So wird abgerechnet',
      title: ['Ein Preis pro Monat,', 'nicht pro Buchung.'],
      items: [
        { title: 'Fester Monatstarif', body: 'Free, Standard oder Pro. Sie wissen vorher, was der Monat kostet.' },
        { title: 'Keine Provision auf KI-Buchungen', body: 'Bucht ein KI-Assistent Sie direkt, landet die Buchung ohne Provision in Ihrem Kalender.' },
        { title: 'Zahlungsgebühren von Stripe', body: 'Nehmen Sie Zahlungen online an, berechnet Stripe dafür seine üblichen Gebühren.' },
        { title: 'Jederzeit wechseln', body: 'Starten Sie kostenlos und wechseln Sie den Tarif, wenn Sie mehr Fachkräfte oder Leistungen brauchen.' },
      ],
    },
    faq: {
      kicker: 'Fragen zu Preisen',
      title: ['Klare Antworten', 'zur Rechnung.'],
      items: [
        {
          q: 'Gibt es einen kostenlosen Tarif?',
          a: 'Ja. Free kostet 0 € mit 50 Buchungen pro Monat, 1 Fachkraft und bis zu 3 Leistungen. Eine Kreditkarte brauchen Sie zum Start nicht.',
        },
        {
          q: 'Zahle ich Provision pro Buchung?',
          a: 'Zenno kostet einen festen Monatsbetrag. Auf Buchungen über KI-Assistenten fällt keine Provision an. Für Online-Zahlungen berechnet Stripe seine üblichen Gebühren.',
        },
        {
          q: 'Was ist der Unterschied zwischen Standard und Pro?',
          a: 'Standard (29 €) hat unbegrenzte Buchungen, 3 Fachkräfte, bis zu 10 Leistungen, Gutscheine, Treueprogramm und Kundenportal. Pro (45 €) hat unbegrenzte Leistungen und Fachkräfte, volles Branding ohne „Powered by“, eigene Domain und priorisierten Support.',
        },
        {
          q: 'Ist der KI-Empfang im Preis enthalten?',
          a: 'Die KI-Rezeption ist Teil derselben App. Die KI-Nutzung ist derzeit unbegrenzt.',
        },
      ],
    },
    og: { line1: 'Ab 0 € im Monat.', line2: 'Keine Provision auf KI-Buchungen.', sub: 'Zenno Preise' },
  },
  en: {
    meta: {
      title: 'Pricing: booking software for studios from €0 | Zenno',
      description:
        'Zenno pricing: Free €0, Standard €29 and Pro €45 a month. Flat monthly plans, no commission on AI bookings, no credit card to start. The AI receptionist is part of the same app.',
    },
    label: 'Pricing',
    hero: {
      kicker: 'Pricing',
      title: ['Flat monthly plans.', 'No commission on AI bookings.'],
      lead: 'Start free and upgrade when the calendar is full. No credit card required.',
    },
    billing: {
      kicker: 'How billing works',
      title: ['One price a month,', 'not per booking.'],
      items: [
        { title: 'Flat monthly plan', body: 'Free, Standard or Pro. You know what the month costs up front.' },
        { title: 'No commission on AI bookings', body: 'When an AI assistant books you directly, the booking lands in your calendar with no commission.' },
        { title: 'Stripe payment fees', body: 'If you take payments online, Stripe charges its usual fees for them.' },
        { title: 'Switch any time', body: 'Start free and change plan when you need more specialists or services.' },
      ],
    },
    faq: {
      kicker: 'Pricing questions',
      title: ['Straight answers', 'about the bill.'],
      items: [
        {
          q: 'Is there a free plan?',
          a: 'Yes. Free costs €0 with 50 bookings a month, 1 specialist and up to 3 services. You don’t need a credit card to start.',
        },
        {
          q: 'Do I pay commission per booking?',
          a: 'Zenno costs a flat monthly amount. There is no commission on bookings made through AI assistants. For online payments, Stripe charges its usual fees.',
        },
        {
          q: 'What’s the difference between Standard and Pro?',
          a: 'Standard (€29) has unlimited bookings, 3 specialists, up to 10 services, gift cards, loyalty and the client portal. Pro (€45) has unlimited services and specialists, full branding without “Powered by”, a custom domain and priority support.',
        },
        {
          q: 'Is the AI receptionist included?',
          a: 'The AI receptionist is part of the same app. AI usage is unlimited for now.',
        },
      ],
    },
    og: { line1: 'From €0 a month.', line2: 'No commission on AI bookings.', sub: 'Zenno pricing' },
  },
  th: {
    meta: {
      title: 'ราคา: ระบบจองคิวสำหรับสตูดิโอ เริ่มต้น €0 | Zenno',
      description:
        'ราคา Zenno: Free €0, Standard €29 และ Pro €45 ต่อเดือน แพ็กเกจรายเดือนราคาคงที่ ไม่มีค่าคอมมิชชั่นสำหรับการจองผ่าน AI ไม่ต้องใช้บัตรเครดิตเพื่อเริ่มต้น พนักงานต้อนรับ AI อยู่ในแอปเดียวกัน',
    },
    label: 'ราคา',
    hero: {
      kicker: 'ราคา',
      title: ['แพ็กเกจรายเดือนราคาคงที่', 'ไม่มีค่าคอมมิชชั่นสำหรับการจองผ่าน AI'],
      lead: 'เริ่มใช้ฟรี แล้วอัปเกรดเมื่อปฏิทินเต็ม ไม่ต้องใช้บัตรเครดิต',
    },
    billing: {
      kicker: 'วิธีการเรียกเก็บเงิน',
      title: ['ราคาเดียวต่อเดือน', 'ไม่ใช่ต่อการจอง'],
      items: [
        { title: 'แพ็กเกจรายเดือนราคาคงที่', body: 'Free, Standard หรือ Pro คุณรู้ล่วงหน้าว่าแต่ละเดือนจ่ายเท่าไร' },
        { title: 'ไม่มีค่าคอมมิชชั่นสำหรับการจองผ่าน AI', body: 'เมื่อผู้ช่วย AI จองกับคุณโดยตรง การจองจะเข้าปฏิทินของคุณโดยไม่มีค่าคอมมิชชั่น' },
        { title: 'ค่าธรรมเนียมการชำระเงินของ Stripe', body: 'ถ้าคุณรับชำระเงินออนไลน์ Stripe จะเรียกเก็บค่าธรรมเนียมตามปกติสำหรับการชำระเงินนั้น' },
        { title: 'เปลี่ยนได้ทุกเมื่อ', body: 'เริ่มใช้ฟรี แล้วเปลี่ยนแพ็กเกจเมื่อคุณต้องการผู้ให้บริการหรือบริการเพิ่ม' },
      ],
    },
    faq: {
      kicker: 'คำถามเรื่องราคา',
      title: ['คำตอบตรงๆ', 'เรื่องค่าใช้จ่าย'],
      items: [
        {
          q: 'มีแพ็กเกจฟรีไหม',
          a: 'มี Free ราคา €0 พร้อม 50 การจองต่อเดือน ผู้ให้บริการ 1 คน และบริการได้สูงสุด 3 รายการ ไม่ต้องใช้บัตรเครดิตเพื่อเริ่มต้น',
        },
        {
          q: 'ต้องจ่ายค่าคอมมิชชั่นต่อการจองไหม',
          a: 'Zenno มีค่าใช้จ่ายรายเดือนคงที่ ไม่มีค่าคอมมิชชั่นสำหรับการจองที่ทำผ่านผู้ช่วย AI สำหรับการชำระเงินออนไลน์ Stripe เรียกเก็บค่าธรรมเนียมตามปกติของ Stripe',
        },
        {
          q: 'Standard กับ Pro ต่างกันอย่างไร',
          a: 'Standard (€29) จองได้ไม่จำกัด มีผู้ให้บริการ 3 คน บริการได้สูงสุด 10 รายการ บัตรของขวัญ ระบบสะสมแต้ม และพอร์ทัลลูกค้า Pro (€45) มีบริการและผู้ให้บริการไม่จำกัด แบรนด์ของคุณเต็มรูปแบบโดยไม่มี “Powered by” โดเมนของคุณเอง และการซัพพอร์ตแบบเร่งด่วน',
        },
        {
          q: 'พนักงานต้อนรับ AI รวมอยู่ในราคาไหม',
          a: 'พนักงานต้อนรับ AI อยู่ในแอปเดียวกัน ตอนนี้ใช้งาน AI ได้ไม่จำกัด',
        },
      ],
    },
    og: { line1: 'เริ่มต้น €0 ต่อเดือน', line2: 'ไม่มีค่าคอมมิชชั่นสำหรับการจองผ่าน AI', sub: 'ราคา Zenno' },
  },
}
