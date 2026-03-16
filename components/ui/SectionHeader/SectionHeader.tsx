// components/ui/SectionHeader/SectionHeader.tsx
import React from 'react'
import styles from './SectionHeader.module.css'

interface SectionHeaderProps {
  eyebrow: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ eyebrow, title, subtitle, align = 'center' }) => {
  return (
    <div className={`${styles.header} ${styles[align]}`}>
      <div className={styles.eyebrow}>
        <span>{eyebrow}</span>
      </div>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  )
}

export default SectionHeader
