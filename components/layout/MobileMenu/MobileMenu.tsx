// components/layout/MobileMenu/MobileMenu.tsx
'use client'
import React from 'react'
import { NAV_LINKS } from '@/lib/constants'
import styles from './MobileMenu.module.css'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`${styles.wrapper} ${isOpen ? styles.active : ''}`}>
      <div className={styles.backdrop} onClick={onClose} />
      <div className={styles.mobileOverlay}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close Menu">
          <span className="material-icons">close</span>
        </button>
        
        <ul className={styles.mobileLinks}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={onClose}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#demo" onClick={onClose}>
              Book Demo
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MobileMenu
