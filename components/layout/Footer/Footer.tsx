// components/layout/Footer/Footer.tsx
import React from 'react'
import styles from './Footer.module.css'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="#" className={styles.logoBrand}>
              <div className={styles.logoMark}>
                <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
                  <rect x="10.5" y="2" width="3" height="20" rx="1.5" />
                  <rect x="10.5" y="2" width="3" height="20" rx="1.5" transform="rotate(45 12 12)" />
                  <rect x="10.5" y="2" width="3" height="20" rx="1.5" transform="rotate(90 12 12)" />
                  <rect x="10.5" y="2" width="3" height="20" rx="1.5" transform="rotate(135 12 12)" />
                </svg>
              </div>
              <div className={styles.wordmark}>
                <span className={styles.audri}>AudRI</span>
              </div>
            </a>
            <p className={styles.tagline}>
              Gen 3 document technology. The moment compliance stops being a review and starts being a guarantee.
            </p>
            <div className={styles.contact}>getaudri.com · info@glifiq.com</div>
          </div>

          <div className={styles.linksRow}>
            <div className={styles.col}>
              <div className={styles.colLabel}>PRODUCT</div>
              <div className={styles.links}>
                <a href="#platform">Platform</a>
                <a href="#how-it-works">How It Works</a>
                <a href="#regulatory">Intelligence</a>
                <a href="#who">Who It&apos;s For</a>
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.colLabel}>COMPANY</div>
              <div className={styles.links}>
                <a href="#demo">Book a Demo</a>
                <a href="mailto:info@glifiq.com">Contact</a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.copy}>© 2026 Glifiq Inc. All rights reserved.</div>
          <div className={styles.designed}>Built for insurance. Designed for regulators.</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
