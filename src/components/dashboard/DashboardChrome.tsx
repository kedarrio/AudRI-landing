// components/dashboard/DashboardChrome.tsx
'use client'
import React from 'react'
import styles from './DashboardChrome.module.css'

interface DashboardChromeProps {
  children: React.ReactNode
}

const DashboardChrome: React.FC<DashboardChromeProps> = ({ children }) => {
  return (
    <div className={styles.dbWrap}>
      {/* Browser chrome */}
      <div className={styles.dbChrome}>
        <div className={styles.dbChromeDots}>
          <div className={styles.dbChromeDot} style={{ background: '#f87171' }}></div>
          <div className={styles.dbChromeDot} style={{ background: '#fbbf24' }}></div>
          <div className={styles.dbChromeDot} style={{ background: '#4ade80' }}></div>
        </div>
        <div className={styles.dbChromeUrl}></div>
      </div>
      {children}
    </div>
  )
}

export default DashboardChrome
