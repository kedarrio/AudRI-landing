// sections/Comparison/Comparison.tsx
'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FADE_UP } from '@/lib/constants'
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader'
import styles from './Comparison.module.css'

const Comparison: React.FC = () => {
  const comparisonItems = [
    { label: 'File Coverage', old: '3–5%', audri: '100% (Continuous)' },
    { label: 'Detection Speed', old: '90 Days Post-Close', audri: 'Real-time (Active)' },
    { label: 'Rule Accuracy', old: 'Varies by Human', audri: 'Deterministic Logic' },
    { label: 'Audit Prep', old: '2–4 Weeks Scrambling', audri: 'Instant (SOP-to-Report)' }
  ]

  return (
    <section id="comparison" className={styles.comparison}>
      <div className={styles.container}>
        <SectionHeader 
          eyebrow="THE DIFFERENCE"
          title="Manual sampling vs. Continuous oversight."
          subtitle="Stop guessing and start knowing. AuDRI replaces reactive spot-checks with proactive guarantees."
        />

        <motion.div 
          className={styles.tableWrap}
          variants={FADE_UP}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className={styles.table}>
            <div className={styles.thead}>
              <div className={styles.th}>REQUIREMENT</div>
              <div className={styles.th}>LEGACY QA</div>
              <div className={styles.th}>AUDRI PLATFORM</div>
            </div>
            {comparisonItems.map((item, i) => (
              <div key={i} className={styles.trow}>
                <div className={styles.tdLabel}>{item.label}</div>
                <div className={styles.tdOld}>{item.old}</div>
                <div className={styles.tdAudri}>{item.audri}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Comparison
