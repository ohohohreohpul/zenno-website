import {
  Building2,
  CalendarDays,
  CalendarX2,
  CircleOff,
  Clock3,
  Coins,
  Ellipsis,
  Flower2,
  Globe,
  Hand,
  HelpCircle,
  MessageCircle,
  Percent,
  Phone,
  Scissors,
  Smartphone,
  Sparkles,
  Store,
  Ticket,
  User,
  Users,
  UsersRound,
  type LucideIcon,
} from 'lucide-react'
import type { ScreenKey } from '@/lib/marketing/content/check/types'
import type { StepKey } from './quizSteps'

export type VisualKey = ScreenKey

/** The photo beside each screen: real studio moments, the same library the feature pages use. */
export const STEP_IMAGE: Record<VisualKey, string> = {
  intro: '/images/spa-dusk.webp',
  studio: '/images/massage-call.webp',
  team: '/images/after-morning.webp',
  bookings: '/images/beauty-studio.webp',
  ticket: '/images/qr-hands.webp',
  channels: '/images/features/commission-tram.webp',
  marketplaceBookings: '/images/features/commission-owner.webp',
  commission: '/images/features/commission-owner.webp',
  noShows: '/images/features/noshow-empty.webp',
  giftCards: '/images/features/voucher-ribbon.webp',
  hours: '/images/features/noshow-sofa.webp',
  result: '/images/thai-shop.webp',
}

/**
 * One icon per answer, in option order. Questions about "how many / how much"
 * use a single icon plus a level meter, so the scale reads at a glance.
 */
export const OPTION_ICONS: Record<StepKey, readonly LucideIcon[]> = {
  studio: [Flower2, Sparkles, Hand, Scissors, Ellipsis],
  team: [User, Users, UsersRound, Building2],
  bookings: [CalendarDays],
  ticket: [Coins],
  channels: [Phone, MessageCircle, Store, Globe],
  marketplaceBookings: [Store],
  commission: [Percent, Percent, Percent, HelpCircle],
  noShows: [CalendarX2],
  giftCards: [CircleOff, Ticket, Smartphone],
  hours: [Clock3],
}

/** Ordinal questions get the level meter; the last option of `commission` ("not sure") does not. */
export const HAS_LEVELS: Partial<Record<StepKey, boolean>> = {
  bookings: true,
  ticket: true,
  marketplaceBookings: true,
  commission: true,
  noShows: true,
  hours: true,
}

export function optionIcon(step: StepKey, index: number): LucideIcon {
  const icons = OPTION_ICONS[step]
  return icons[index] ?? icons[0]
}
