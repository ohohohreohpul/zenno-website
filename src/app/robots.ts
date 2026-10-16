import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/marketing/config'

export const dynamic = 'force-static'

/**
 * AI search and assistant crawlers are welcomed by name: being read by them is
 * the product's whole pitch ("bookable by AI"), so the marketing site should
 * be too. Training-only crawlers are allowed as well; change here to opt out.
 */
const AI_CRAWLERS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'Bingbot',
]

const PRIVATE_PATHS = ['/dashboard', '/login', '/api']

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: PRIVATE_PATHS },
      { userAgent: AI_CRAWLERS, allow: '/', disallow: PRIVATE_PATHS },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
