// sections/Platform/Platform.tsx
'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FADE_UP, PERSONA_CARDS } from '@/lib/constants'
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader'
import Dashboard from '@/components/dashboard/Dashboard'
import styles from './Platform.module.css'

const Platform: React.FC = () => {
  return (
    <section id="platform" className={styles.platform}>
      <div className={styles.container}>
        <SectionHeader 
          eyebrow="THE DASHBOARD"
          title="Full Visibility. Complete Control."
          subtitle="AuDRI provides tailored perspectives for every level of the organization."
        />

        <motion.div 
          className={styles.dbContainer}
          variants={FADE_UP}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Dashboard />
          <div className={styles.disclaimer}>
            <span className="material-icons">info</span>
            Conceptual interface shown. Audit results and extracted rules are deterministic based on provided documentation.
          </div>
        </motion.div>

        <div className={styles.personas}>
          {PERSONA_CARDS.map((persona, i) => (
            <motion.div 
              key={i}
              className={styles.personaCard}
              variants={FADE_UP}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              custom={i * 0.12}
            >
              <div className={`${styles.personaTag} ${styles[persona.tagVariant]}`}>
                {persona.role}
              </div>
              <div className={styles.personaContent}>
                <h3 className={styles.personaTitle}>{persona.title}</h3>
                <div className={styles.painPoint}>
                  <span className="material-icons">warning</span>
                  {persona.fear}
                </div>
                <p className={styles.personaDesc}>{persona.description}</p>
              </div>
              <ul className={styles.personaList}>
                {persona.bullets.map((bullet, j) => (
                  <li key={j}>{bullet}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Platform
