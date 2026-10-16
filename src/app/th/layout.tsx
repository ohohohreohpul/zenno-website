import type { Metadata } from 'next'
import { RootDocument } from '@/components/marketing/RootDocument'
import { SITE_URL } from '@/lib/marketing/config'

export const metadata: Metadata = { metadataBase: new URL(SITE_URL) }

/** Root layout for the "th" locale — sets <html lang="th"> in the static HTML. */
export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootDocument lang="th">{children}</RootDocument>
}
