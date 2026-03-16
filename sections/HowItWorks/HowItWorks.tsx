// sections/HowItWorks/HowItWorks.tsx
'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FADE_UP, STEPS } from '@/lib/constants'
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader'
import styles from './HowItWorks.module.css'

import Card from '@/components/ui/Card/Card'

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className={styles.howItWorks}>
      <div className={styles.container}>
        <SectionHeader 
          eyebrow="SYSTEM OVERVIEW" 
          title="The Lifecycle of an Ironclad Audit"
          subtitle="AuDRI transforms complex regulatory environments into a deterministic rules engine."
        />

        <div className={styles.stepsGrid}>
          {STEPS.map((step, i) => (
            <Card 
              key={i}
              variant="standard"
              bg="bg1"
              variants={FADE_UP}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              custom={i * 0.1}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconBox}>
                  <span className="material-icons">{step.icon}</span>
                  <div className={styles.pulse} />
                </div>
                <div className={styles.stepNum}>{step.number}</div>
              </div>
              
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.description}</p>
              
              <div className={styles.tags}>
                {step.tags.slice(0, 2).map((tag, j) => (
                  <span key={j} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
