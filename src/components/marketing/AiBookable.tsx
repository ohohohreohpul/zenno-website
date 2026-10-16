import type { Lang } from '@/lib/marketing/lang'
import { START_URL } from '@/lib/marketing/config'
import { AI_BOOKING, type ReadinessRow } from '@/lib/marketing/content/aiBooking'
import { SectionHeader } from './primitives/SectionHeader'
import styles from './AiBookable.module.css'

const ZENNO_COLUMN = 2
const MARK_LABEL: Record<Lang, { yes: string; no: string }> = {
  en: { yes: 'Yes', no: 'No' },
  de: { yes: 'Ja', no: 'Nein' },
  th: { yes: 'ใช่', no: 'ไม่' },
}

interface AiBookableProps {
  lang?: Lang
}

/** "Is your salon bookable by AI?" — readiness check, why now, and owner control. */
export function AiBookable({ lang = 'en' }: AiBookableProps) {
  const t = AI_BOOKING[lang]

  return (
    <section id="ai-booking" className="pad-y">
      <div className="wrap">
        <SectionHeader
          kicker={t.kicker}
          title={
            <>
              {t.title[0]} <span className="ghost-word">{t.title[1]}</span>
            </>
          }
          lead={t.lead}
        />

        <div className={`card ${styles.table}`} data-reveal role="table" aria-label={t.columnsTitle}>
          <div className={`${styles.row} ${styles.header}`} role="row">
            <span role="columnheader">{t.columnsTitle}</span>
            {t.columns.map((col, i) => (
              <span
                key={col}
                role="columnheader"
                className={i === ZENNO_COLUMN ? styles.zennoHead : undefined}
              >
                {col}
              </span>
            ))}
          </div>
          {t.rows.map((row) => (
            <ReadinessLine key={row.need} row={row} columns={t.columns} lang={lang} />
          ))}
        </div>

        <div className={styles.whyNow}>
          <span data-reveal className="kicker">
            {t.whyNowKicker}
          </span>
          <ol className={styles.facts}>
            {t.whyNow.map((fact) => (
              <li key={fact.source} data-reveal className={styles.fact}>
                <span className={styles.stat}>{fact.stat}</span>
                <p className={styles.factText}>{fact.text}</p>
                <a
                  href={fact.href}
                  className={styles.source}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {fact.source}
                </a>
              </li>
            ))}
          </ol>
          <p data-reveal className={styles.foot}>
            {t.whyNowFoot}
          </p>
        </div>

        <div className={styles.control}>
          <h3 data-reveal className={`sub ${styles.controlTitle}`}>
            {t.controlTitle}
          </h3>
          <ul className={styles.controlGrid}>
            {t.control.map((item) => (
              <li key={item.title} data-reveal className={styles.controlItem}>
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
          <div data-reveal>
            <a href={START_URL} className="btn">
              {t.cta} <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

interface ReadinessLineProps {
  row: ReadinessRow
  columns: [string, string, string]
  lang: Lang
}

function ReadinessLine({ row, columns, lang }: ReadinessLineProps) {
  const marks = MARK_LABEL[lang]
  return (
    <div className={styles.row} role="row">
      <span role="rowheader" className={styles.label}>
        {row.need}
      </span>
      {row.cells.map((ok, i) => (
        <span
          key={columns[i]}
          role="cell"
          className={`${styles.cell} ${i === ZENNO_COLUMN ? styles.zennoCell : ''}`}
        >
          <span className={styles.colName} aria-hidden>
            {columns[i]}
          </span>
          <span className={ok ? styles.yes : styles.no}>
            <span aria-hidden>{ok ? '✓' : '—'}</span>
            <span className={styles.srOnly}>{ok ? marks.yes : marks.no}</span>
          </span>
          {row.notes?.[i] && <span className={styles.note}>{row.notes[i]}</span>}
        </span>
      ))}
    </div>
  )
}
