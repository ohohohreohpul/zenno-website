import { START_URL } from '@/lib/marketing/config'
import type { Headline } from '@/lib/marketing/content/landing/types'
import { ChatAutoplay, type ChatScript } from './ChatAutoplay'
import styles from './UseCaseHero.module.css'

interface UseCaseHeroProps {
  image: string
  kicker: string
  title: Headline
  lead: string
  ctaPrimary: string
  ctaSecondary: string
  /** In-page anchor for the secondary button. */
  secondaryHref: string
  chat?: ChatScript
}

/**
 * Photo hero for the industry landing pages — same treatment as the homepage
 * hero, shorter, and without the GSAP timeline.
 */
export function UseCaseHero({ image, kicker, title, lead, ctaPrimary, ctaSecondary, secondaryHref, chat }: UseCaseHeroProps) {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.media}>
        <img src={image} alt="" className={styles.img} fetchPriority="high" decoding="async" />
      </div>
      <div className={styles.scrim} aria-hidden />
      <div className={styles.scrimBottom} aria-hidden />
      <div className={styles.fadeToPage} aria-hidden />

      <div className={`wrap-wide ${styles.content}`}>
        <div className={styles.copy} data-reveal>
          <span className={styles.eyebrow}>
            <span className="dot" /> {kicker}
          </span>
          <h1 className={styles.headline}>
            {title[0]} <span className={styles.ghost}>{title[1]}</span>
          </h1>
          <p className={styles.lead}>{lead}</p>
          <div className={styles.ctas}>
            <a href={START_URL} className="btn on-dark">
              {ctaPrimary} <span className="arrow">→</span>
            </a>
            <a href={secondaryHref} className={`btn ${styles.ghostOnPhoto}`}>
              {ctaSecondary}
            </a>
          </div>
        </div>

        {chat && (
          <div className={styles.chatCol} data-reveal>
            <ChatAutoplay script={chat} />
          </div>
        )}
      </div>
    </section>
  )
}
