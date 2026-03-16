// components/ui/ScrollLine/ScrollLine.tsx
'use client'
import React from 'react'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import styles from './ScrollLine.module.css'

const ScrollLine: React.FC = () => {
  const progress = useScrollProgress()

  return (
    <div
      id="scroll-line"
      className={styles.scrollLine}
      style={{ height: `${progress}%` }}
    />
  )
}

export default ScrollLine
