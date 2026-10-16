import type { ReactNode } from 'react'
import { CalendarDays, Gift, Inbox, Settings, Users, type LucideIcon } from 'lucide-react'
import styles from './AppWindow.module.css'

export type AppNavKey = 'calendar' | 'inbox' | 'vouchers' | 'customers' | 'settings'

const NAV: { key: AppNavKey; icon: LucideIcon }[] = [
  { key: 'calendar', icon: CalendarDays },
  { key: 'inbox', icon: Inbox },
  { key: 'vouchers', icon: Gift },
  { key: 'customers', icon: Users },
  { key: 'settings', icon: Settings },
]

interface AppWindowProps {
  /** Page title in the app's header line. */
  title: string
  /** Right side of the header: a status pill or a button. */
  actions?: ReactNode
  /** Shows the dark sidebar with this item active. */
  nav?: AppNavKey
  navLabels?: Record<AppNavKey, string>
  children: ReactNode
  className?: string
}

/**
 * The app as a window: a quiet top bar, the night sidebar (the only dark
 * block on a page) and the work area on paper. Used as the frame for every
 * screen the site shows.
 */
export function AppWindow({ title, actions, nav, navLabels, children, className = '' }: AppWindowProps) {
  return (
    <div className={`zn ${styles.window} ${className}`}>
      <div className={styles.bar} aria-hidden>
        <i />
        <i />
        <i />
      </div>
      <div className={`${styles.frame} ${nav ? styles.withNav : ''}`}>
        {nav && (
          <aside className={styles.sidebar} aria-hidden>
            <img src="/logo/mark-cream.svg" alt="" width={22} height={22} className={styles.mark} />
            {NAV.map(({ key, icon: Icon }) => (
              <span key={key} className={`${styles.navItem} ${key === nav ? styles.navActive : ''}`} title={navLabels?.[key]}>
                <Icon size={18} strokeWidth={1.75} />
              </span>
            ))}
          </aside>
        )}
        <div className={styles.main}>
          <div className={styles.header}>
            <span className={styles.title}>{title}</span>
            {actions}
          </div>
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </div>
  )
}
