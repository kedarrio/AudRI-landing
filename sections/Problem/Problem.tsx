// sections/Problem/Problem.tsx
'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FADE_UP } from '@/lib/constants'
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader'
import styles from './Problem.module.css'

const PROBLEM_CARDS = [
  {
    label: 'COVERAGE RISK',
    value: '3–5%',
    desc: 'QA teams manually review only 3–5% of claims. The other 95% are never examined before a regulator opens them.',
    variant: 'error',
    illustration: (
      <svg viewBox="0 0 100 100" fill="none" className={styles.visual}>
        <rect x="10" y="10" width="80" height="80" rx="4" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.2" />
        <rect x="25" y="25" width="20" height="20" rx="2" fill="currentColor" fillOpacity="0.1" stroke="currentColor" />
        <circle cx="65" cy="55" r="15" stroke="currentColor" strokeWidth="2" />
        <line x1="75" y1="65" x2="85" y2="75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="20" y1="20" x2="80" y2="20" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <line x1="20" y1="40" x2="50" y2="40" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <line x1="20" y1="60" x2="40" y2="60" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      </svg>
    )
  },
  {
    label: 'REGULATORY EXPOSURE',
    value: '$400K+',
    desc: 'In potential fines from a single 40% finding rate on 200 sampled files at $5,000 per violation.',
    variant: 'warning',
    illustration: (
      <svg viewBox="0 0 100 100" fill="none" className={styles.visual}>
        <path d="M50 15L15 30V55C15 75 50 85 50 85C50 85 85 75 85 55V30L50 15Z" stroke="currentColor" strokeWidth="2" />
        <path d="M35 45L45 55L65 35" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="30" y="70" width="40" height="4" rx="2" fill="currentColor" opacity="0.2" />
      </svg>
    )
  },
  {
    label: 'TERMINATION RISK',
    value: '$1M–$10M',
    desc: 'Annual revenue lost when one carrier contract is terminated after a failed audit due to inconsistent handling.',
    variant: 'accent',
    illustration: (
      <svg viewBox="0 0 100 100" fill="none" className={styles.visual}>
        <path d="M10 80L30 60L50 70L90 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="10" cy="80" r="3" fill="currentColor" />
        <circle cx="30" cy="60" r="3" fill="currentColor" />
        <circle cx="50" cy="70" r="3" fill="currentColor" />
        <circle cx="90" cy="20" r="4" stroke="currentColor" strokeWidth="2" />
        <line x1="70" y1="10" x2="70" y2="90" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.3" />
        <path d="M85 35L90 20L75 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
]

const Problem: React.FC = () => {
  return (
    <section id="problem" className={styles.problem}>
      <div className={styles.container}>
        <SectionHeader 
          eyebrow="THE PROBLEM"
          title="95% of claims files are never audited before a regulator sees them."
          subtitle="Insurance carriers and TPAs are required to prove that every claim was handled correctly. The industry's current approach is fundamentally broken."
          align="center"
        />
        
        <div className={styles.grid}>
          {PROBLEM_CARDS.map((card, i) => (
            <motion.div
              key={i}
              className={styles.pCard}
              variants={FADE_UP}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={i * 0.1}
              style={{ transform: 'translateZ(0)' }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.illustrationWrap}>
                  {card.illustration}
                </div>
                <div className={styles.label}>{card.label}</div>
              </div>
              
              <div className={`${styles.value} ${styles[card.variant]}`}>
                {card.value}
              </div>
              
              <p className={styles.description}>
                {card.desc}
              </p>
              
              <div className={styles.cardFooter}>
                <div className={styles.indicator} />
                <span>Critical Risk Factor</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Problem
