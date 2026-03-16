// sections/Who/Who.tsx
'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FADE_UP } from '@/lib/constants'
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader'
import styles from './Who.module.css'

const WHO_DATA = [
  {
    title: 'TPA Leadership',
    benefit: 'Retain Large Carriers',
    desc: 'Prove your compliance framework is superior. Stop losing contracts to QA "finding rates" that were preventable.',
    illustration: <span className="material-icons">trending_up</span>
  },
  {
    title: 'Carrier Claims Ops',
    benefit: 'Eliminate Leakage',
    desc: 'Ensure every adjuster follows the same rules, regardless of tenure. Minimize payout variance across the board.',
    illustration: <span className="material-icons">security</span>
  },
  {
    title: 'Compliance Teams',
    benefit: 'Deterministic Audits',
    desc: 'Automate the tedious mapping of regulatory updates to workflows. Respond to audits with zero preparation time.',
    illustration: <span className="material-icons">fact_check</span>
  }
]

import Card from '@/components/ui/Card/Card'

const Who: React.FC = () => {
  return (
    <section id="who" className={styles.who}>
      <div className={styles.container}>
        <SectionHeader 
          eyebrow="WHO IT'S FOR"
          title="Built for the high-stakes claims ecosystem."
          subtitle="AuDRI is designed for organizations where compliance isn't a check-box — it's the core business."
          align="center"
        />

        <div className={styles.grid}>
          {WHO_DATA.map((item, i) => (
            <Card 
              key={i}
              variant="perspective"
              bg="base"
              className={styles.card}
              variants={FADE_UP}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={i * 0.15}
            >
              <div className={styles.cardHeader}>
                <div className={styles.illustrationBox}>
                  {item.illustration}
                </div>
                <div className={styles.badge}>{item.benefit}</div>
              </div>
              
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Who
