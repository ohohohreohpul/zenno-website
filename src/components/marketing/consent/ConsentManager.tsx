'use client'

import { useEffect, useState, useSyncExternalStore } from 'react'
import { localePath, type Lang } from '@/lib/marketing/lang'
import { START_URL } from '@/lib/marketing/config'
import { META_PIXEL_ID } from '@/lib/marketing/legal/company'
import { CONSENT_OPEN_EVENT, readConsent, subscribeConsent, writeConsent, type Consent } from './consent'
import { loadMetaPixel, trackStartFreeClicks } from './metaPixel'
import styles from './ConsentManager.module.css'

interface ConsentStrings {
  title: string
  body: string
  privacy: string
  accept: string
  decline: string
}

const STRINGS: Record<Lang, ConsentStrings> = {
  de: {
    title: 'Cookies für unsere Werbung',
    body: 'Mit Ihrer Zustimmung laden wir das Meta-Pixel, um unsere Anzeigen auf Facebook und Instagram zu messen. Ohne Zustimmung setzen wir keine Cookies.',
    privacy: 'Datenschutz',
    accept: 'Akzeptieren',
    decline: 'Ablehnen',
  },
  en: {
    title: 'Cookies for our ads',
    body: 'With your consent we load the Meta pixel to measure our ads on Facebook and Instagram. Without it, we set no cookies.',
    privacy: 'Privacy',
    accept: 'Accept',
    decline: 'Decline',
  },
  th: {
    title: 'คุกกี้สำหรับโฆษณาของเรา',
    body: 'หากคุณยินยอม เราจะโหลด Meta Pixel เพื่อวัดผลโฆษณาบน Facebook และ Instagram หากไม่ยินยอม เราจะไม่ตั้งค่าคุกกี้ใด ๆ',
    privacy: 'ความเป็นส่วนตัว',
    accept: 'ยอมรับ',
    decline: 'ปฏิเสธ',
  },
}

interface ConsentManagerProps {
  lang: Lang
}

/**
 * Cookie banner and the Meta pixel behind it. Renders nothing while no pixel
 * ID is configured, so the site stays cookie-free by default. Accept and
 * Decline carry equal weight, as German consent rules require.
 */
export function ConsentManager({ lang }: ConsentManagerProps) {
  // 'pending' on the server and before hydration, so the banner never flashes into static HTML.
  const consent = useSyncExternalStore(subscribeConsent, readConsent, () => 'pending' as const)
  const [isReopened, setIsReopened] = useState(false)

  useEffect(() => {
    const reopen = () => setIsReopened(true)
    window.addEventListener(CONSENT_OPEN_EVENT, reopen)
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, reopen)
  }, [])

  useEffect(() => {
    if (!META_PIXEL_ID || consent !== 'granted') return
    loadMetaPixel(META_PIXEL_ID)
    trackStartFreeClicks(START_URL)
  }, [consent])

  const isOpen = isReopened || consent === null
  if (!META_PIXEL_ID || !isOpen) return null

  const choose = (choice: Consent) => {
    setIsReopened(false)
    // A pixel that already ran on this page can only be stopped by reloading without it.
    if (choice === 'denied' && consent === 'granted') {
      writeConsent(choice)
      window.location.reload()
      return
    }
    writeConsent(choice)
  }

  const t = STRINGS[lang]
  return (
    <div className={styles.banner} role="dialog" aria-modal="false" aria-labelledby="consent-title" lang={lang}>
      <div className={styles.text}>
        <p id="consent-title" className={styles.title}>
          {t.title}
        </p>
        <p className={styles.body}>
          {t.body}{' '}
          <a href={localePath(lang, '/privacy')} className={styles.link}>
            {t.privacy}
          </a>
        </p>
      </div>
      <div className={styles.actions}>
        <button type="button" className={styles.btn} onClick={() => choose('denied')}>
          {t.decline}
        </button>
        <button type="button" className={styles.btn} onClick={() => choose('granted')}>
          {t.accept}
        </button>
      </div>
    </div>
  )
}
