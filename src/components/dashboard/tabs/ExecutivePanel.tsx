// components/dashboard/tabs/ExecutivePanel.tsx
'use client'
import React from 'react'
import { motion } from 'framer-motion'
import styles from './ExecutivePanel.module.css'

const ExecutivePanel: React.FC = () => {
  const kpis = [
    { label: 'Financial Leakage', value: '$2.14M', change: '↓ 14.2%', trend: 'dn' },
    { label: 'Compliance Rate', value: '99.2%', change: '↑ 1.4%', trend: 'up' },
    { label: 'Reserve Accuracy', value: '96.8%', change: '↑ 2.1%', trend: 'up' },
    { label: 'Manual Effort', value: '−82%', change: '↓ 4.0%', trend: 'up' },
  ]

  const bars = [
    { label: 'Q1', h: '38%' },
    { label: 'Q2', h: '55%' },
    { label: 'Q3', h: '72%' },
    { label: 'Now', h: '90%' },
  ]

  return (
    <div className={styles.executivePanel}>
      <div className={styles.kpiGrid}>
        {kpis.map((kpi, i) => (
          <div key={i} className={styles.kpi}>
            <div className={styles.kpiLabel}>{kpi.label}</div>
            <div className={styles.kpiNumber}>{kpi.value}</div>
            <div className={`${styles.kpiChange} ${styles[kpi.trend]}`}>{kpi.change}</div>
          </div>
        ))}
      </div>
      <div className={styles.chart}>
        {bars.map((bar, i) => (
          <div key={i} className={styles.barWrap}>
            <motion.div
              className={styles.bar}
              initial={{ height: 0 }}
              whileInView={{ height: bar.h }}
              transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1], delay: i * 0.1 }}
              viewport={{ once: true }}
            />
            <div className={styles.barLabel}>{bar.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExecutivePanel
