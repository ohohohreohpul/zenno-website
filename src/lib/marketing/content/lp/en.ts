import type { LpCopy } from './types'

export const lpEn: LpCopy = {
  meta: {
    title: 'Your studio is losing bookings. Zenno wins them back. | Zenno',
    description:
      'Zenno answers enquiries around the clock, sells gift cards online, reminds your clients and takes bookings with no commission. Start free.',
  },
  cta: 'Start free',
  ctaNote: 'Free plan stays €0 · Try Zenno free',
  hero: {
    title: 'Your studio loses bookings every month. Zenno wins them back.',
    lede: 'Zenno answers enquiries, sells gift cards and reminds your clients. Around the clock, even while you’re with a client.',
    mediaLabel: 'How Zenno works',
  },
  doesWork: {
    title: 'Most booking tools give you a calendar.',
    titleMark: 'Zenno does the work.',
    paragraphs: [
      'Another calendar you have to keep up to date? Another app that pings you about messages at 11 pm? We know.',
      'That’s why we built Zenno.',
    ],
    closing: 'Zenno runs your front desk for you.',
    cards: [
      { title: 'Answers every enquiry', text: 'On WhatsApp, by email and on your website, even at 23:47.' },
      { title: 'Sells gift cards online', text: 'A gift card shop that’s open day and night. Redeemed by QR code.' },
      { title: 'Reminds your clients', text: 'Automatic reminders before every appointment, so fewer are missed.' },
      { title: 'Books with no commission', text: 'Every booking lands on your own page. 0 % commission, on every appointment.' },
    ],
    more: '…plus *checkout, calendar and DATEV export*',
  },
  stat: {
    quote: '“About 46 % of appointments are booked while the studio is closed.”',
    source: 'Phorest, analysis of 5,000+ salons',
  },
  check: {
    pill: '60-second studio check',
    title: 'See what your studio is losing today.',
    lede: 'A few questions about your studio, then Zenno works out in euros what commission, no-shows and missed enquiries cost you.',
    exampleLabel: 'Example',
    cardTitle: '4 things I’d take over in your studio',
    cardLede: 'For a massage studio with 3 people and about 40 appointments a week.',
    actions: [
      'I answer the *12 enquiries* that come in after 8 pm and put the appointments straight in.',
      'I remind *every client the day before* their appointment, automatically.',
      'I sell gift cards in your online shop, *even at 02:14*, with a QR code to redeem.',
      'I take new bookings on *your own page*, with *0 % commission*.',
    ],
    cta: 'Start the studio check',
    ctaNote: 'No email · result straight away',
  },
  reception: {
    title: 'Your own AI receptionist',
    subtitle: 'Always there. Always friendly. Always in the calendar.',
    blocks: [
      { title: 'Replies whenever clients write', text: 'Questions about prices, opening hours and free slots get an answer straight away, at night and at weekends too.' },
      { title: 'Every channel in one inbox', text: 'WhatsApp, email and your website land in one place. You see everything, Zenno handles most of it.' },
      { title: 'Books straight into your calendar', text: 'Zenno offers free times and puts the appointment in. No call-backs, no double bookings.' },
    ],
  },
  studios: {
    pill: 'One Zenno. Every studio.',
    title: 'Built for studios that live on appointments.',
    lede: 'Massage, spa, beauty, nails, hair, yoga or a practice: Zenno fits your treatments.',
    cards: [
      { studio: 'Massage studio', service: 'Thai massage · 60 min', meta: 'Sat 10:00 · €65' },
      { studio: 'Beauty', service: 'Facial', meta: 'Thu 17:30 · €89' },
      { studio: 'Day spa', service: 'Hot stone · 90 min', meta: 'Fri 19:00 · €110' },
      { studio: 'Hair', service: 'Cut & blow-dry', meta: 'Wed 09:15 · €58' },
      { studio: 'Yoga studio', service: 'Vinyasa flow', meta: 'Tue 18:30 · €18' },
      { studio: 'Practice', service: 'Physiotherapy', meta: 'Mon 08:00 · €45' },
    ],
  },
  examples: {
    pill: 'Example calculations',
    title: 'How Zenno adds up in a real studio week.',
    lede: 'Three typical cases, worked out with cautious assumptions.',
    before: 'Before',
    zenno: 'Zenno',
    after: 'After',
    cases: [
      { tag: 'Massage studio · marketplace', before: '10 new bookings a month through a marketplace, €60 each at 25 % commission', zenno: 'Bookings run through the studio’s own booking page', after: '€150 less commission a month' },
      { tag: 'Beauty · no-shows', before: '4 appointments a week missed without notice, €80 each', zenno: 'Automatic reminders before every appointment', after: 'With 25–40 % fewer no-shows: €340–550 more a month' },
      { tag: 'Day spa · gift cards', before: 'Gift cards on paper only, at the counter', zenno: 'Online gift card shop, open day and night', after: 'Sales in the evening and at weekends too, redeemed by QR code' },
    ],
    note: 'Example calculations, not client data. The studio check works out your numbers.',
    cta: 'Calculate with my numbers',
  },
  pricing: {
    title: 'Your front desk. Without a receptionist.',
    lede: 'The work of a front desk, for less than an hour of part-time help a week.',
    perMonth: '/ month',
  },
  final: {
    title: 'Stop chasing enquiries. Let Zenno do it.',
    lede: 'Your calendar, your prices, your studio. The Free plan stays free.',
  },
}
