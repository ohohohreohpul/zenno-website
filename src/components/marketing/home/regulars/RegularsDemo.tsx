import { Bell, CalendarCheck, Sparkles, type LucideIcon } from 'lucide-react'
import type { Lang } from '@/lib/marketing/lang'
import { navLabels } from '@/lib/marketing/content/home/demo'
import { AppWindow } from '../../app-ui/AppWindow'
import { REGULARS_DEMO } from './regularsCopy'
import styles from './Regulars.module.css'

const EVENT_ICONS: readonly LucideIcon[] = [Bell, CalendarCheck, Sparkles]
const POINT_DOTS = 10
const POINT_DOTS_ON = 8

interface RegularsDemoProps {
  lang: Lang
}

/** A regular's profile: visits, loyalty points and what Zenno did for her. */
export function RegularsDemo({ lang }: RegularsDemoProps) {
  const t = REGULARS_DEMO[lang]
  return (
    <AppWindow title={t.page} nav="customers" navLabels={navLabels(lang)}>
      <div className={styles.stage} role="img" aria-label={t.label}>
        <div className={styles.profile}>
          <span className={styles.avatar} aria-hidden>
            EH
          </span>
          <span>
            <b className={styles.name}>{t.name}</b>
            <span className="zn-caption tabular">{t.since}</span>
          </span>
        </div>

        <div className={styles.points}>
          <span className={styles.pointsHead}>
            <span className="zn-caption">{t.points}</span>
            <b className={`tabular ${styles.pointsValue}`}>{t.pointsValue}</b>
          </span>
          <span className={styles.dots} aria-hidden>
            {Array.from({ length: POINT_DOTS }, (_, i) => (
              <i key={i} className={i < POINT_DOTS_ON ? styles.dotOn : ''} />
            ))}
          </span>
          <span className="zn-caption">{t.pointsNote}</span>
        </div>

        <ol className={styles.events}>
          {t.events.map((event, i) => {
            const Icon = EVENT_ICONS[i]
            return (
              <li key={event.title} className={styles.event}>
                <span className={styles.eventIcon}>
                  <Icon size={15} aria-hidden />
                </span>
                <span className={styles.eventText}>
                  <b>{event.title}</b>
                  <span className="zn-caption">{event.line}</span>
                </span>
                <span className={`zn-caption tabular ${styles.when}`}>{event.when}</span>
              </li>
            )
          })}
        </ol>
      </div>
    </AppWindow>
  )
}
