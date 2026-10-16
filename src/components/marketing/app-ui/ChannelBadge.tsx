import { Globe, Mail, MessageCircle } from 'lucide-react'

export type Channel = 'whatsapp' | 'email' | 'web'

const CHANNEL_COLOR: Record<Channel, string> = {
  whatsapp: 'var(--success-fill)',
  email: 'var(--info)',
  web: 'var(--ink-soft)',
}

export const CHANNEL_LABEL: Record<Channel, string> = {
  whatsapp: 'WhatsApp',
  email: 'E-Mail',
  web: 'Website',
}

const ICON = { whatsapp: MessageCircle, email: Mail, web: Globe }

interface ChannelBadgeProps {
  channel: Channel
}

/** Small filled circle with a white glyph, pinned to an avatar's corner. */
export function ChannelBadge({ channel }: ChannelBadgeProps) {
  const Icon = ICON[channel]
  return (
    <span className="zn-avatar__channel" style={{ background: CHANNEL_COLOR[channel] }} title={CHANNEL_LABEL[channel]}>
      <Icon size={10} strokeWidth={2.5} aria-hidden />
    </span>
  )
}
