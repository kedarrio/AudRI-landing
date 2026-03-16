// components/ui/Card/Card.tsx
'use client'
import React from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import styles from './Card.module.css'

interface CardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode
  variant?: 'perspective' | 'standard'
  bg?: 'base' | 'bg1' | 'bg2' | 'bg3' | 'glass'
  className?: string
  containerClassName?: string
}

const Card: React.FC<CardProps> = ({ 
  children, 
  variant = 'standard', 
  bg = 'bg1',
  className = '',
  containerClassName = '',
  ...props
}) => {
  const isPerspective = variant === 'perspective'
  
  const content = (
    <div className={`${styles.card} ${styles[bg]} ${className}`}>
      {children}
    </div>
  )

  if (isPerspective) {
    return (
      <motion.div 
        className={`${styles.perspectiveWrap} ${containerClassName}`}
        {...props}
      >
        <div className={styles.perspective}>
          {content}
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div 
      className={containerClassName}
      {...props}
    >
      {content}
    </motion.div>
  )
}

export default Card
