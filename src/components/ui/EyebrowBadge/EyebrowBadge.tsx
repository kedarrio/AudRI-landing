// components/ui/EyebrowBadge/EyebrowBadge.tsx
import React from 'react'
import styles from './EyebrowBadge.module.css'

interface EyebrowBadgeProps {
  children: React.ReactNode
  showDot?: boolean
}

const EyebrowBadge: React.FC<EyebrowBadgeProps> = ({ children, showDot = true }) => {
  return (
    <div className={styles.eyebrowBadge}>
      {showDot && <span className={styles.eyebrowDot}></span>}
      <span className={styles.eyebrowText}>{children}</span>
    </div>
  )
}

export default EyebrowBadge
