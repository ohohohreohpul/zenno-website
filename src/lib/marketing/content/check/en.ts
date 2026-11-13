import type { CheckCopy } from './types'
import { SOURCES } from './sources'

export const checkEn: CheckCopy = {
  meta: {
    title: 'Studio check: what is Zenno worth to your studio? | Zenno',
    description:
      'Work out in 60 seconds how much commission, no-shows and time your studio saves with online booking, gift cards and an AI receptionist. With your own numbers.',
  },
  intro: {
    kicker: 'Studio check',
    title: 'What is Zenno worth to your studio?',
    lede: 'A few quick questions, then you see in euros what commission, no-shows and missed bookings cost you today. Calculated with your own numbers.',
    start: 'Start the check',
    promise: 'Takes 60 seconds · no email needed',
  },
  stepOf: 'Question {n} of {total}',
  back: 'Back',
  next: 'Next',
  questions: {
    studio: {
      q: 'What kind of studio do you run?',
      options: [
        { value: 'massage_spa', label: 'Massage or spa' },
        { value: 'beauty', label: 'Beauty' },
        { value: 'nails', label: 'Nails' },
        { value: 'hair', label: 'Hair' },
        { value: 'other', label: 'Something else' },
      ],
    },
    team: {
      q: 'How many people treat clients?',
      options: [
        { value: 'solo', label: 'Just me' },
        { value: '2-3', label: '2–3' },
        { value: '4-9', label: '4–9' },
        { value: '10+', label: '10 or more' },
      ],
    },
    bookings: {
      q: 'How many appointments do you have a week?',
      hint: 'A rough number is fine.',
      options: [
        { value: 12, label: 'Under 20' },
        { value: 35, label: '20–50' },
        { value: 75, label: '50–100' },
        { value: 120, label: 'Over 100' },
      ],
    },
    ticket: {
      q: 'What does a client pay per appointment, on average?',
      options: [
        { value: 40, label: 'About €40' },
        { value: 60, label: 'About €60' },
        { value: 80, label: 'About €80' },
        { value: 120, label: '€120 or more' },
      ],
    },
    channels: {
      q: 'How do clients book with you today?',
      hint: 'Pick all that apply.',
      options: [
        { value: 'phone', label: 'Phone or WhatsApp' },
        { value: 'dm', label: 'Instagram or Facebook message' },
        { value: 'marketplace', label: 'Through a marketplace or app' },
        { value: 'own_tool', label: 'My own online booking tool' },
      ],
    },
    marketplaceBookings: {
      q: 'How many new bookings a month come through the marketplace?',
      options: [
        { value: 3, label: 'Up to 5' },
        { value: 10, label: '5–15' },
        { value: 22, label: '15–30' },
        { value: 40, label: 'Over 30' },
      ],
    },
    commission: {
      q: 'What commission do you pay there per booking?',
      options: [
        { value: 0.15, label: 'About 15 %' },
        { value: 0.25, label: 'About 25 %' },
        { value: 0.35, label: 'About 35 %' },
        { value: null, label: 'Not sure' },
      ],
    },
    noShows: {
      q: 'How many appointments a week are missed without notice?',
      options: [
        { value: 0, label: 'None' },
        { value: 1.5, label: '1–2' },
        { value: 4, label: '3–5' },
        { value: 7, label: 'More than 5' },
      ],
    },
    giftCards: {
      q: 'Do you sell gift cards?',
      options: [
        { value: 'none', label: 'No' },
        { value: 'paper', label: 'Yes, on paper in the studio' },
        { value: 'online', label: 'Yes, already online' },
      ],
    },
    hours: {
      q: 'How many hours a week go on messages and phone calls?',
      options: [
        { value: 1, label: 'Under 2' },
        { value: 3.5, label: '2–5' },
        { value: 7.5, label: '5–10' },
        { value: 12, label: 'Over 10' },
      ],
    },
  },
  result: {
    kicker: 'Your result',
    total: 'about {low}–{high} more a month',
    hours: 'and {low}–{high} fewer hours on your phone',
    nothing: 'Your studio is already well set up. Zenno mostly saves you time.',
    lines: {
      commission: {
        label: 'Commission saved',
        how: 'Your marketplace bookings × your average price × your commission. If you’re not sure, we use 20 %.',
      },
      afterHours: {
        label: 'Bookings while you’re closed',
        how: 'Studies show about 46 % of appointments are booked while studios are closed. Studios that only book by phone or message lose some of them. We cautiously assume 5–10 %.',
      },
      noShows: {
        label: 'Fewer no-shows',
        how: 'Your weekly no-shows × average price. Automatic reminders prevent part of them; we assume 25–40 %.',
      },
      giftCards: {
        label: 'Gift cards sold online',
        how: 'If 2–4 % of your clients buy a €50 gift card each month. In November and December we assume twice as many.',
      },
    },
    seasonNote: 'Gift cards include the Christmas effect.',
    cappedNote: 'We never show more than 40 % of your monthly revenue, even when the lines add up to more.',
    costLabel: 'What we recommend',
    plans: {
      free: { name: 'Free · €0', line: 'Online booking and a booking link for one person.', cta: 'Start free' },
      zenno: { name: 'Zenno · €49 a month', line: 'Everything, including the AI receptionist and reminders.', cta: 'Try Zenno free' },
    },
    payback: 'That’s about {times}× what Zenno costs.',
    howTitle: 'How we calculate',
    howIntro: 'Every figure is an estimate from your answers and the assumptions above. Sources:',
    sources: SOURCES,
    disclaimer: 'An estimate, not a guarantee. Your real numbers may differ.',
    restart: 'Calculate again',
  },
}
