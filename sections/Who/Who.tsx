// sections/Who/Who.tsx
'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FADE_UP } from '@/lib/constants'
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader'
import styles from './Who.module.css'

const Who: React.FC = () => {
  const categories = [
    {
      title: 'TPA Leadership',
      benefit: 'Retain Large Carriers',
      desc: 'Prove your compliance framework is superior to your competitors. Stop losing contracts to QA "finding rates" that were preventable.'
    },
    {
      title: 'Carrier Claims Ops',
      benefit: 'Eliminate Leakage',
      desc: 'Ensure every adjuster in every state is following the same business rules, regardless of their tenure or training.'
    },
    {
      title: 'Compliance Teams',
      benefit: 'Deterministic Audits',
      desc: 'Automate the tedious mapping of regulatory updates to operational workflows. Respond to audits with zero preparation time.'
    }
  ]

  return (
    <section id="who" className={styles.who}>
      <div className={styles.container}>
        <SectionHeader 
          eyebrow="TARGET AUDIENCE"
          title="Built for the high-stakes claims ecosystem."
          subtitle="AuDRI is designed for organizations where compliance isn't a check-box — it's the core business."
        />

        <div className={styles.grid}>
          {categories.map((cat, i) => (
            <motion.div 
              key={i}
              className={styles.card}
              variants={FADE_UP}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              custom={i * 0.1}
              style={{ transform: 'translateZ(0)' }}
            >
              <div className={styles.cardLabel}>{cat.benefit}</div>
              <h3 className={styles.cardTitle}>{cat.title}</h3>
              <p className={styles.cardDesc}>{cat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Who
