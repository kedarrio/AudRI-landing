// sections/Problem/Problem.tsx
'use client'
import React from 'react'
import { FADE_UP } from '@/lib/constants'
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader'
import styles from './Problem.module.css'

const PROBLEM_CARDS = [
  {
    label: 'COVERAGE RISK',
    value: '3–5%',
    desc: 'QA teams manually review only 3–5% of claims. The other 95% are never examined before a regulator opens them.',
    variant: 'error',
    illustration: <span className="material-icons">visibility_off</span>
  },
  {
    label: 'REGULATORY EXPOSURE',
    value: '$400K+',
    desc: 'In potential fines from a single 40% finding rate on 200 sampled files at $5,000 per violation.',
    variant: 'warning',
    illustration: <span className="material-icons">gavel</span>
  },
  {
    label: 'TERMINATION RISK',
    value: '$1M–$10M',
    desc: 'Annual revenue lost when one carrier contract is terminated after a failed audit due to inconsistent handling.',
    variant: 'accent',
    illustration: <span className="material-icons">warning</span>
  }
]

import Card from '@/components/ui/Card/Card'

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
            <Card 
              key={i}
              variant="perspective"
              bg="bg1"
              variants={FADE_UP}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={i * 0.1}
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Problem
