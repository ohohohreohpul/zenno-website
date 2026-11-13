import type { Source } from './types'

/** Where the estimate's assumptions come from; shown under "How we calculate" in every locale. */
export const SOURCES: readonly Source[] = [
  { label: 'Phorest: 46 % of salon bookings made outside opening hours (Professional Beauty)', url: 'https://professionalbeauty.co.uk/site/newsdetails/40percentage-of-online-bookings-made-while-salons-are-shut' },
  { label: 'Booksalon: 53 % of appointments booked outside opening hours (HJI)', url: 'https://hji.co.uk/data-shows-majority-of-british-salon-appointments-are-booked-outside-opening-hours' },
  { label: 'SimplyBook: what no-shows cost by industry', url: 'https://simplybook.me/en/blog/cost-of-no-shows' },
  { label: 'Zenoti: gift cards after the holidays (6 in 10 recipients spend more)', url: 'https://zenoti.com/thecheckin/how-gift-cards-can-fuel-post-holiday-growth-for-salons-spas-medspas-barbershops-and-fitness-studios' },
]
