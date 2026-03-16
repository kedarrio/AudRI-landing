// components/dashboard/tabs/ManagerPanel.tsx
'use client'
import React from 'react'
import { useLiveFeed } from '@/hooks/useLiveFeed'
import { DB_EXCEPTIONS } from '@/lib/constants'
import styles from './ManagerPanel.module.css'

interface ManagerPanelProps {
  active: boolean
}

const ManagerPanel: React.FC<ManagerPanelProps> = ({ active }) => {
  const feed = useLiveFeed(active)

  return (
    <div className={`${styles.managerPanel} ${active ? styles.active : ''}`}>
      <div className={styles.pills}>
        <div className={`${styles.pill} ${styles.ok}`}>
          <div className={styles.pillDot}></div>Active: 14
        </div>
        <div className={`${styles.pill} ${styles.warn}`}>
          <div className={styles.pillDot}></div>Alerts: 3
        </div>
        <div className={`${styles.pill} ${styles.err}`}>
          <div className={styles.pillDot}></div>Exceptions: 9
        </div>
      </div>

      <div className={styles.feedHeader}>
        <div className={styles.feedTitle}>Live Activity</div>
        <div className={styles.liveBadge}>
          <div className={styles.liveDot}></div>Live
        </div>
      </div>

      <div className={styles.managerGrid}>
        <div>
          <div className={styles.feedList}>
            {feed.map((item) => (
              <div key={item.id} className={`${styles.feedItem} ${styles[item.status]} ${styles.newEntry}`}>
                <span>[{item.time}]</span>
                <span style={{ opacity: 0.6 }}>
                  {item.status === 'passed' ? '→' : item.status === 'warning' ? '⚠' : '✗'}
                </span>
                <span>
                  {item.prefix}-{item.number}
                </span>
                <span style={{ opacity: 0.4 }}>{item.type}</span>
                <span className={styles.feedItemTime}>now</span>
              </div>
            ))}
            <div className={styles.feedOverlay}></div>
          </div>

          <div className={styles.exceptions} style={{ marginTop: 12 }}>
            <div className={styles.exceptionsTitle}>Exceptions</div>
            {DB_EXCEPTIONS.map((ex, i) => (
              <div key={i} className={styles.exceptionItem}>
                <div className={styles.exceptionHead}>
                  <span className={styles.exceptionType}>{ex.type}</span>
                  <span className={styles.exceptionId}>{ex.id}</span>
                </div>
                <div className={styles.exceptionMsg}>{ex.message}</div>
                <a href="#" className={styles.exceptionLink}>
                  Review →
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.unitPanel}>
          <div className={styles.unitTitle}>Unit Perf.</div>
          <div className={styles.unitRow}>
            <div className={styles.unitName}>Northeast</div>
            <div className={styles.unitScore}>98%</div>
          </div>
          <div className={styles.unitRow}>
            <div className={styles.unitName}>Southeast</div>
            <div className={styles.unitScore}>92%</div>
          </div>
          <div className={styles.unitRow}>
            <div className={styles.unitName}>Western</div>
            <div className={styles.unitScore}>97%</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManagerPanel
