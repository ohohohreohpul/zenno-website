import type { Lang } from '../lang'
import type { FaqItem } from './faq'

/**
 * Copy + data for the Zenno Booking page (previously onbuuk.com).
 * Tiers mirror onbuuk.com's published pricing at the time of the acquisition —
 * Zenno Booking keeps its own plans and billing, separate from Zenno's.
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
}

/** Straight from onbuuk.com's pricing footnote. */
export const BOOKING_PRICING_NOTE: Record<Lang, string> = {
  en: 'Start for free · No credit card required · Upgrade anytime',
  de: 'Kostenlos starten · Keine Kreditkarte nötig · Jederzeit upgraden',
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
}

export interface TogetherMoment {
  tag: string
  title: string
  body: string
  chat: { me: string; bot: string }
}

/** Things neither product could do on its own — the reason the two belong together. */
export const TOGETHER_MOMENTS: Record<Lang, TogetherMoment[]> = {
  en: [
    {
      tag: 'Deposit in the chat',
      title: 'The agent books it — and secures it.',
      body: 'When a service needs a deposit, Zenno sends the Zenno Booking payment link right in the WhatsApp thread. Paid, confirmed, done.',
      chat: { me: 'Balayage on Saturday?', bot: 'Sat 11:00 with Ines is yours — tap here to pay the €20 deposit and lock it in.' },
    },
    {
      tag: 'Gift cards over WhatsApp',
      title: 'Sell a gift card without a website visit.',
      body: '“Can I buy a voucher for my mum?” turns into a paid gift card, sent straight to the chat.',
      chat: {
        me: 'Can I get a €50 voucher for my mum?',
        bot: 'Of course! Here’s your gift card link — it arrives by email the moment it’s paid.',
      },
    },
    {
      tag: 'Loyalty, remembered',
      title: 'The receptionist knows your regulars.',
      body: 'Zenno reads points and visit history from Zenno Booking, so it can say the one thing that makes a client feel known.',
      chat: { me: 'Book my usual please', bot: 'Cut & colour with Mia, Thu 17:00 — and this one’s your 10th visit, so it’s 15% off.' },
    },
  ],
  de: [
    {
      tag: 'Anzahlung im Chat',
      title: 'Der Agent bucht — und sichert den Termin.',
      body: 'Braucht eine Leistung eine Anzahlung, schickt Zenno den Zahlungslink von Zenno Booking direkt in den WhatsApp-Chat. Bezahlt, bestätigt, fertig.',
      chat: {
        me: 'Balayage am Samstag?',
        bot: 'Sa. 11:00 mit Ines gehört Ihnen — hier die 20 € Anzahlung zahlen, dann ist er fix.',
      },
    },
    {
      tag: 'Gutscheine per WhatsApp',
      title: 'Gutscheine verkaufen, ganz ohne Website-Besuch.',
      body: '„Kann ich einen Gutschein für meine Mama kaufen?“ wird zum bezahlten Gutschein — direkt im Chat.',
      chat: {
        me: 'Kann ich einen 50-€-Gutschein für meine Mama bekommen?',
        bot: 'Sehr gern! Hier ist der Gutschein-Link — er kommt per E-Mail, sobald er bezahlt ist.',
      },
    },
    {
      tag: 'Treue, die man spürt',
      title: 'Der Empfang kennt Ihre Stammkund:innen.',
      body: 'Zenno liest Punkte und Besuchshistorie aus Zenno Booking — und sagt genau den Satz, bei dem sich Kund:innen erkannt fühlen.',
      chat: {
        me: 'Bitte wie immer buchen',
        bot: 'Schnitt & Farbe mit Mia, Do. 17:00 — und das ist Ihr 10. Besuch, also 15 % Rabatt.',
      },
    },
  ],
}

export const BOOKING_FAQ: Record<Lang, FaqItem[]> = {
  en: [
    {
      q: 'What happened to onbuuk?',
      a: 'onbuuk is now part of Zenno and has been renamed Zenno Booking. It’s the same booking platform — booking page, payments, reminders, gift cards and loyalty — now working together with Zenno’s AI receptionist.',
    },
    {
      q: 'I’m an existing onbuuk customer. Do I need to do anything?',
      a: 'No. Your account, services, booking link and client data carry over. You’ll see the new name, and you get the option to switch on the AI receptionist whenever you like.',
    },
    {
      q: 'How is Zenno Booking billed?',
      a: 'Separately from Zenno. Zenno Booking has its own plans — Free, Standard (€29/mo) and Pro (€45/mo) — and its own account. The AI receptionist is a Zenno plan you can add on top whenever you want it.',
    },
    {
      q: 'Do I need the AI receptionist to use Zenno Booking?',
      a: 'No. Zenno Booking works on its own, starting on the free plan. Add the AI receptionist when you want chats on WhatsApp, Telegram, LINE or your website answered and booked for you.',
    },
    {
      q: 'What’s the difference between Zenno and Zenno Booking?',
      a: 'Zenno Booking is where clients click to book: your booking page, calendar, payments and reminders. Zenno is the AI receptionist that answers messages and books through conversation. Both write to the same calendar, so a slot is never offered twice.',
    },
    {
      q: 'Can clients pay online?',
      a: 'Yes. Zenno Booking has Stripe payments built in, so clients can pay when they book.',
    },
  ],
  de: [
    {
      q: 'Was ist mit onbuuk passiert?',
      a: 'onbuuk gehört jetzt zu Zenno und heißt Zenno Booking. Es ist dieselbe Buchungsplattform — Buchungsseite, Zahlungen, Erinnerungen, Gutscheine und Treueprogramm — die jetzt mit dem KI-Empfang von Zenno zusammenarbeitet.',
    },
    {
      q: 'Ich bin bereits onbuuk-Kund:in. Muss ich etwas tun?',
      a: 'Nein. Ihr Konto, Ihre Leistungen, Ihr Buchungslink und Ihre Kundendaten bleiben erhalten. Sie sehen den neuen Namen und können den KI-Empfang zuschalten, wann immer Sie möchten.',
    },
    {
      q: 'Wie wird Zenno Booking abgerechnet?',
      a: 'Getrennt von Zenno. Zenno Booking hat eigene Tarife — Free, Standard (29 €/Monat) und Pro (45 €/Monat) — und ein eigenes Konto. Der KI-Empfang ist ein Zenno-Tarif, den Sie jederzeit dazubuchen können.',
    },
    {
      q: 'Brauche ich den KI-Empfang, um Zenno Booking zu nutzen?',
      a: 'Nein. Zenno Booking funktioniert eigenständig, schon im kostenlosen Tarif. Buchen Sie den KI-Empfang dazu, wenn Chats auf WhatsApp, Telegram, LINE oder Ihrer Website für Sie beantwortet und gebucht werden sollen.',
    },
    {
      q: 'Was ist der Unterschied zwischen Zenno und Zenno Booking?',
      a: 'Zenno Booking ist der Ort, an dem Kund:innen per Klick buchen: Buchungsseite, Kalender, Zahlungen und Erinnerungen. Zenno ist der KI-Empfang, der Nachrichten beantwortet und im Gespräch bucht. Beide schreiben in denselben Kalender — kein Termin wird doppelt vergeben.',
    },
    {
      q: 'Können Kund:innen online bezahlen?',
      a: 'Ja. Zenno Booking hat Stripe-Zahlungen integriert, sodass Kund:innen direkt bei der Buchung bezahlen können.',
    },
  ],
}

/** Locale-aware path to the booking page. */
export function bookingPath(lang: Lang): string {
  return lang === 'de' ? '/de/booking' : '/booking'
}
