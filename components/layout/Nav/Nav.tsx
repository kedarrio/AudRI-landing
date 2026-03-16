// components/layout/Nav/Nav.tsx
'use client'
import React, { useState } from 'react'
import { useNavScroll } from '@/hooks/useNavScroll'
import Button from '@/components/ui/Button/Button'
import { NAV_LINKS } from '@/lib/constants'
import styles from './Nav.module.css'
import MobileMenu from '../MobileMenu/MobileMenu'

const Nav: React.FC = () => {
  const isScrolled = useNavScroll()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }

  return (
    <>
      <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
        <a href="#" className={styles.logoBrand}>
          <div className={styles.logoMark}>
            <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
              <rect x="10.5" y="2" width="3" height="20" rx="1.5" />
              <rect x="10.5" y="2" width="3" height="20" rx="1.5" transform="rotate(45 12 12)" />
              <rect x="10.5" y="2" width="3" height="20" rx="1.5" transform="rotate(90 12 12)" />
              <rect x="10.5" y="2" width="3" height="20" rx="1.5" transform="rotate(135 12 12)" />
            </svg>
          </div>
          <div className={styles.wordmark}>
            <span className={styles.audri}>AudRI</span>
            <span className={styles.tagline}>Audit Realtime Intelligence</span>
          </div>
        </a>

        <ul className={styles.navLinks}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className={styles.navActions}>
          <Button variant="cta" href="#demo" className={styles.ctaButton}>
            <span className={styles.desktopOnly}>Book a </span>Demo
          </Button>
          <button
            className={styles.menuToggle}
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <i className="material-icons">{isMenuOpen ? 'close' : 'menu'}</i>
          </button>
        </div>
      </nav>

      <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </>
  )
}

export default Nav
