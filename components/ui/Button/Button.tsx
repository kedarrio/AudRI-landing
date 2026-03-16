// components/ui/Button/Button.tsx
import React from 'react'
import styles from './Button.module.css'

interface ButtonProps {
  variant: 'primary' | 'ghost' | 'cta' | 'submit'
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ 
  variant, 
  href, 
  onClick, 
  children, 
  className = '', 
  type = 'button',
  disabled = false
}) => {
  const combinedClassName = `${styles.button} ${styles[variant]} ${disabled ? styles.disabled : ''} ${className}`

  if (href && !disabled) {
    return (
      <a href={href} className={combinedClassName} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={combinedClassName} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
