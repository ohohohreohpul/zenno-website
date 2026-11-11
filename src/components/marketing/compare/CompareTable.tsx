import type { CompareRow, Source } from '@/lib/marketing/content/compare/types'
import styles from './Compare.module.css'

interface CompareTableProps {
  rows: CompareRow[]
  sources: Source[]
  topicLabel: string
  themName: string
}

/** Side-by-side table: topic, Zenno, competitor (with a numbered source mark). */
export function CompareTable({ rows, sources, topicLabel, themName }: CompareTableProps) {
  return (
    <div className={`card ${styles.table}`} data-reveal role="table" aria-label={`Zenno vs ${themName}`}>
      <div className={`${styles.row} ${styles.header}`} role="row">
        <span role="columnheader">{topicLabel}</span>
        <span role="columnheader" className={styles.zennoHead}>
          Zenno
        </span>
        <span role="columnheader">{themName}</span>
      </div>
      {rows.map((row) => (
        <div key={row.topic} className={styles.row} role="row">
          <span role="rowheader" className={styles.topic}>
            {row.topic}
          </span>
          <span role="cell" className={`${styles.cell} ${styles.zennoCell}`}>
            <span className={styles.colName} aria-hidden>
              Zenno
            </span>
            {row.zenno}
          </span>
          <span role="cell" className={styles.cell}>
            <span className={styles.colName} aria-hidden>
              {themName}
            </span>
            {row.them}
            {row.source !== undefined && sources[row.source] && (
              <a href={`#source-${row.source + 1}`} className={styles.sourceMark}>
                [{row.source + 1}]
              </a>
            )}
          </span>
        </div>
      ))}
    </div>
  )
}
