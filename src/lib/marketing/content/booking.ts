import { localePath, type Lang } from '../lang'
import type { FaqItem } from './faq'

/**
 * Copy + data for the Zenno Booking page (previously onbuuk.com).
 * Tiers mirror onbuuk.com's published pricing at the time of the acquisition —
 * Update here and the page, pricing cards, and JSON-LD all follow.
 */

export interface BookingTier {
  name: string
  price: string
  line: string
  cta: string
  popular?: boolean
  features: string[]
}

export const BOOKING_TIERS: Record<Lang, BookingTier[]> = {
  en: [
    {
      name: 'Free',
      price: '€0',
      line: '50 bookings / mo · 1 specialist',
      cta: 'Start free',
      features: ['Basic booking system', 'Up to 3 services', 'Customer management', 'Email notifications', 'Owner-only admin'],
    },
    {
      name: 'Standard',
      price: '€29',
      line: 'Unlimited bookings · 3 specialists',
      cta: 'Choose Standard',
      popular: true,
      features: [
        'Up to 10 services',
        'Gift cards & basic loyalty',
        'Customer portal & calendar view',
        'Custom logo & booking form',
        'Up to 3 admin users',
      ],
    },
    {
      name: 'Pro',
      price: '€45',
      line: 'Unlimited everything',
      cta: 'Choose Pro',
      features: [
        'Unlimited services & specialists',
        'Advanced gift cards & loyalty',
        'Full branding, no “Powered by” badge',
        'Custom domain & advanced permissions',
        'Priority support',
      ],
    },
  ],
  de: [
    {
      name: 'Free',
      price: '€0',
      line: '50 Buchungen / Monat · 1 Fachkraft',
      cta: 'Kostenlos starten',
      features: [
        'Einfaches Buchungssystem',
        'Bis zu 3 Leistungen',
        'Kundenverwaltung',
        'E-Mail-Benachrichtigungen',
        'Nur Inhaber:in als Admin',
      ],
    },
    {
      name: 'Standard',
      price: '€29',
      line: 'Unbegrenzte Buchungen · 3 Fachkräfte',
      cta: 'Standard wählen',
      popular: true,
      features: [
        'Bis zu 10 Leistungen',
        'Gutscheine & Basis-Treueprogramm',
        'Kundenportal & Kalenderansicht',
        'Eigenes Logo & Buchungsformular',
        'Bis zu 3 Admin-Nutzer',
      ],
    },
    {
      name: 'Pro',
      price: '€45',
      line: 'Alles unbegrenzt',
      cta: 'Pro wählen',
      features: [
        'Unbegrenzte Leistungen & Fachkräfte',
        'Erweiterte Gutscheine & Treueprogramm',
        'Volles Branding, ohne „Powered by“-Badge',
        'Eigene Domain & erweiterte Rechte',
        'Priorisierter Support',
      ],
    },
  ],
  th: [
    {
      name: 'Free',
      price: '€0',
      line: '50 การจอง / เดือน · ผู้ให้บริการ 1 คน',
      cta: 'เริ่มใช้ฟรี',
      features: ['ระบบจองพื้นฐาน', 'สูงสุด 3 บริการ', 'จัดการข้อมูลลูกค้า', 'แจ้งเตือนทางอีเมล', 'แอดมินเฉพาะเจ้าของร้าน'],
    },
    {
      name: 'Standard',
      price: '€29',
      line: 'จองได้ไม่จำกัด · ผู้ให้บริการ 3 คน',
      cta: 'เลือก Standard',
      popular: true,
      features: [
        'สูงสุด 10 บริการ',
        'บัตรของขวัญและระบบสะสมแต้มพื้นฐาน',
        'พอร์ทัลลูกค้าและมุมมองปฏิทิน',
        'โลโก้และแบบฟอร์มจองของคุณเอง',
        'ผู้ดูแลระบบสูงสุด 3 คน',
      ],
    },
    {
      name: 'Pro',
      price: '€45',
      line: 'ไม่จำกัดทุกอย่าง',
      cta: 'เลือก Pro',
      features: [
        'บริการและผู้ให้บริการไม่จำกัด',
        'บัตรของขวัญและระบบสะสมแต้มขั้นสูง',
        'แบรนด์ของคุณเต็มรูปแบบ ไม่มีป้าย “Powered by”',
        'โดเมนของคุณเองและสิทธิ์การใช้งานขั้นสูง',
        'ซัพพอร์ตแบบเร่งด่วน',
      ],
    },
  ],
}

/** Straight from onbuuk.com's pricing footnote. */
export const BOOKING_PRICING_NOTE: Record<Lang, string> = {
  en: 'Start for free · No credit card required · Upgrade anytime',
  de: 'Kostenlos starten · Keine Kreditkarte nötig · Jederzeit upgraden',
  th: 'เริ่มใช้ฟรี · ไม่ต้องใช้บัตรเครดิต · อัปเกรดได้ทุกเมื่อ',
}

export interface BookingFeature {
  area: 'page' | 'pay' | 'remind' | 'loyalty' | 'portal' | 'dash'
  title: string
  body: string
}

export const BOOKING_FEATURES: Record<Lang, BookingFeature[]> = {
  en: [
    {
      area: 'page',
      title: 'A booking page that looks like yours',
      body: 'Your logo, your colours, your services. Clients pick a treatment, a specialist and a time — in three taps, any hour.',
    },
    {
      area: 'pay',
      title: 'Payments at the moment of booking',
      body: 'Stripe is built in, so clients pay when they book — fewer no-shows, less chasing.',
    },
    {
      area: 'remind',
      title: 'Reminders that go out on their own',
      body: 'Automatic SMS and email confirmations and reminders, so appointments actually happen.',
    },
    {
      area: 'loyalty',
      title: 'Gift cards & loyalty',
      body: 'Sell gift cards online and reward regulars with points — built in, no plugin.',
    },
    {
      area: 'portal',
      title: 'A client portal',
      body: 'Clients see their history, reschedule and rebook themselves, without calling you.',
    },
    { area: 'dash', title: 'One dashboard', body: 'Bookings, revenue, staff and top services at a glance.' },
  ],
  de: [
    {
      area: 'page',
      title: 'Eine Buchungsseite, die nach Ihnen aussieht',
      body: 'Ihr Logo, Ihre Farben, Ihre Leistungen. Kund:innen wählen Behandlung, Fachkraft und Uhrzeit — mit drei Klicks, rund um die Uhr.',
    },
    {
      area: 'pay',
      title: 'Bezahlung direkt bei der Buchung',
      body: 'Stripe ist integriert: Kund:innen zahlen beim Buchen — weniger No-Shows, weniger Hinterherlaufen.',
    },
    {
      area: 'remind',
      title: 'Erinnerungen, die von selbst rausgehen',
      body: 'Automatische Bestätigungen und Erinnerungen per SMS und E-Mail, damit Termine auch stattfinden.',
    },
    {
      area: 'loyalty',
      title: 'Gutscheine & Treueprogramm',
      body: 'Gutscheine online verkaufen und Stammkund:innen mit Punkten belohnen — eingebaut, ohne Plugin.',
    },
    {
      area: 'portal',
      title: 'Ein Kundenportal',
      body: 'Kund:innen sehen ihre Historie, verschieben und buchen selbst neu — ohne anzurufen.',
    },
    { area: 'dash', title: 'Ein Dashboard', body: 'Buchungen, Umsatz, Team und Top-Leistungen auf einen Blick.' },
  ],
  th: [
    {
      area: 'page',
      title: 'หน้าจองที่เป็นสไตล์ของคุณ',
      body: 'โลโก้ สี และบริการของคุณ ลูกค้าเลือกบริการ ผู้ให้บริการ และเวลาได้ในสามคลิก ตลอด 24 ชั่วโมง',
    },
    {
      area: 'pay',
      title: 'รับชำระเงินตอนจอง',
      body: 'เชื่อมต่อ Stripe ในตัว ลูกค้าจ่ายตอนจอง ลดการไม่มาตามนัด ไม่ต้องตามเก็บเงิน',
    },
    {
      area: 'remind',
      title: 'แจ้งเตือนที่ส่งออกไปเอง',
      body: 'ส่งข้อความยืนยันและแจ้งเตือนทาง SMS และอีเมลอัตโนมัติ เพื่อให้นัดหมายเกิดขึ้นจริง',
    },
    {
      area: 'loyalty',
      title: 'บัตรของขวัญและระบบสะสมแต้ม',
      body: 'ขายบัตรของขวัญออนไลน์ และให้แต้มกับลูกค้าประจำ มีมาให้ในตัว ไม่ต้องติดตั้งปลั๊กอิน',
    },
    {
      area: 'portal',
      title: 'พอร์ทัลลูกค้า',
      body: 'ลูกค้าดูประวัติ เลื่อนนัด และจองใหม่ได้เอง โดยไม่ต้องโทรหาคุณ',
    },
    { area: 'dash', title: 'แดชบอร์ดเดียว', body: 'การจอง รายได้ ทีมงาน และบริการยอดนิยม ดูได้ในที่เดียว' },
  ],
}

export const BOOKING_FAQ: Record<Lang, FaqItem[]> = {
  en: [
    {
      q: 'What happened to onbuuk?',
      a: 'onbuuk is now Zenno. Since October 2026 the booking platform and the Zenno AI receptionist are one app: calendar, booking page, payments, vouchers and the receptionist, in one login.',
    },
    {
      q: 'I’m an existing onbuuk customer. Do I need to do anything?',
      a: 'No. Your account, services, booking link and client data carry over. You will see the new name and the new features in the same app.',
    },
    {
      q: 'Did my plan change?',
      a: 'Free, Standard (€29/mo) and Pro (€45/mo) stay as they are. The AI receptionist is in the same app, and AI usage is unlimited for now.',
    },
    {
      q: 'Where do I get help?',
      a: 'Step-by-step guides in German, English and Thai are at docs.zennohq.com, and you can write to support@zennohq.com.',
    },
  ],
  de: [
    {
      q: 'Was ist mit onbuuk passiert?',
      a: 'onbuuk ist jetzt Zenno. Seit Oktober 2026 sind die Buchungsplattform und die Zenno KI-Rezeption eine App: Kalender, Buchungsseite, Zahlungen, Gutscheine und Rezeption, mit einem Login.',
    },
    {
      q: 'Ich bin bereits onbuuk-Kundin oder -Kunde. Muss ich etwas tun?',
      a: 'Nein. Ihr Konto, Ihre Leistungen, Ihr Buchungslink und Ihre Kundendaten bleiben erhalten. Sie sehen den neuen Namen und die neuen Funktionen in derselben App.',
    },
    {
      q: 'Hat sich mein Tarif geändert?',
      a: 'Free, Standard (29 €/Monat) und Pro (45 €/Monat) bleiben, wie sie sind. Die KI-Rezeption ist in derselben App, und die KI-Nutzung ist derzeit unbegrenzt.',
    },
    {
      q: 'Wo bekomme ich Hilfe?',
      a: 'Schritt-für-Schritt-Anleitungen auf Deutsch, Englisch und Thai finden Sie auf docs.zennohq.com, und Sie erreichen uns unter support@zennohq.com.',
    },
  ],
  th: [
    {
      q: 'onbuuk เป็นอะไรไป',
      a: 'ตอนนี้ onbuuk คือ Zenno ตั้งแต่ตุลาคม 2026 แพลตฟอร์มจองและพนักงานต้อนรับ AI ของ Zenno รวมเป็นแอปเดียว ทั้งปฏิทิน หน้าจอง การชำระเงิน บัตรของขวัญ และพนักงานต้อนรับ ในบัญชีเดียว',
    },
    {
      q: 'ฉันเป็นลูกค้า onbuuk อยู่แล้ว ต้องทำอะไรไหม',
      a: 'ไม่ต้อง บัญชี บริการ ลิงก์จอง และข้อมูลลูกค้าของคุณย้ายมาครบ คุณจะเห็นชื่อใหม่และฟีเจอร์ใหม่ในแอปเดียวกัน',
    },
    {
      q: 'แพ็กเกจของฉันเปลี่ยนไหม',
      a: 'Free, Standard (€29/เดือน) และ Pro (€45/เดือน) ยังเหมือนเดิม พนักงานต้อนรับ AI อยู่ในแอปเดียวกัน และตอนนี้ใช้งาน AI ได้ไม่จำกัด',
    },
    {
      q: 'ขอความช่วยเหลือได้ที่ไหน',
      a: 'คู่มือทีละขั้นตอนภาษาเยอรมัน อังกฤษ และไทยอยู่ที่ docs.zennohq.com และติดต่อเราได้ที่ support@zennohq.com',
    },
  ],
}

/** Locale-aware path to the booking page. */
export function bookingPath(lang: Lang): string {
  return localePath(lang, '/booking')
}
