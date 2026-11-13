import { Fragment } from 'react'
import styles from './Lp.module.css'

/** Renders copy where *starred* parts get the highlighter mark. */
export function Marked({ text }: { text: string }) {
  return (
    <>
      {text.split(/\*(.+?)\*/g).map((part, i) =>
        i % 2 === 1 ? (
          <mark key={i} className={styles.mark}>
            {part}
          </mark>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  )
}
