import type { ReactNode } from "react";
import styles from "./IPhone.module.css";

interface IPhoneProps {
  children: ReactNode;
  /** Status bar time, e.g. "23:04". */
  time?: string;
  /** Status bar colour: dark text on a light screen, or light text on a dark one. */
  statusTone?: "dark" | "light";
  className?: string;
}

/** A modern iPhone: thin titanium frame, side buttons, Dynamic Island, status bar, a soft glare. */
export function IPhone({
  children,
  time = "9:41",
  statusTone = "dark",
  className = "",
}: IPhoneProps) {
  return (
    <div className={`zn ${styles.phone} ${className}`}>
      <div className={`${styles.frame} ${styles.titanium}`}>
        <span className={`${styles.button} ${styles.action}`} aria-hidden />
        <span className={`${styles.button} ${styles.volUp}`} aria-hidden />
        <span className={`${styles.button} ${styles.volDown}`} aria-hidden />
        <span className={`${styles.button} ${styles.power}`} aria-hidden />
        <div className={styles.screen}>
          <div
            className={`${styles.status} ${statusTone === "light" ? styles.statusLight : ""}`}
            aria-hidden
          >
            <span className={`tabular ${styles.time}`}>{time}</span>
            <span className={styles.island} />
            <span className={styles.icons}>
              <svg viewBox="0 0 18 12" width="17" height="11">
                <rect
                  x="0"
                  y="8"
                  width="3"
                  height="4"
                  rx="1"
                  fill="currentColor"
                />
                <rect
                  x="5"
                  y="5.5"
                  width="3"
                  height="6.5"
                  rx="1"
                  fill="currentColor"
                />
                <rect
                  x="10"
                  y="3"
                  width="3"
                  height="9"
                  rx="1"
                  fill="currentColor"
                />
                <rect
                  x="15"
                  y="0"
                  width="3"
                  height="12"
                  rx="1"
                  fill="currentColor"
                />
              </svg>
              <svg viewBox="0 0 16 12" width="15" height="11">
                <path
                  d="M8 2.6c2.2 0 4.2.9 5.7 2.3l1.1-1.1A9.6 9.6 0 0 0 8 1 9.6 9.6 0 0 0 1.2 3.8l1.1 1.1A8 8 0 0 1 8 2.6Zm0 3.2c1.3 0 2.5.5 3.4 1.3l1.1-1.1A6.4 6.4 0 0 0 8 4.2c-1.7 0-3.3.7-4.5 1.8l1.1 1.1c.9-.8 2.1-1.3 3.4-1.3Zm0 3.2c.5 0 .9.2 1.2.5L8 10.7 6.8 9.5c.3-.3.7-.5 1.2-.5Z"
                  fill="currentColor"
                />
              </svg>
              <span className={styles.battery}>
                <i />
              </span>
            </span>
          </div>
          <div className={styles.content}>{children}</div>
          <span className={styles.homeBar} aria-hidden />
        </div>
      </div>
    </div>
  );
}
