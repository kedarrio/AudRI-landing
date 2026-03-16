// sections/Regulatory/Regulatory.tsx
'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FADE_UP, PROOF_ITEMS } from '@/lib/constants'
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader'
import styles from './Regulatory.module.css'

import Card from '@/components/ui/Card/Card'

const Regulatory: React.FC = () => {
  return (
    <section id="regulatory" className={styles.regulatory}>
      <div className={styles.container}>
        <SectionHeader 
          eyebrow="REGULATORY INTELLIGENCE"
          title="Stop scrambling. Start reconciling."
          subtitle="Don't wait for the audit notice. AuDRI provides continuous, pre-packaged proof of performance."
        />

        <div className={styles.grid}>
          <Card 
            variant="standard"
            bg="bg1"
            variants={FADE_UP}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={styles.mainCardInner}
          >
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>One-Click Audit Package</h3>
              <p className={styles.cardSub}>Generate the NAIC-standard evidence file on demand.</p>
            </div>
            
            <div className={styles.infog}>
              <div className={styles.infoCol}>
                <div className={styles.infoLabel}>Raw SOPs</div>
                <div className={styles.infoBox}>Policies & Manuals</div>
              </div>
              <div className={styles.infoArrow}>→</div>
              <div className={styles.infoCol}>
                <div className={styles.infoLabel}>Audit AI</div>
                <div className={styles.infoBox} style={{ borderColor: 'var(--accent)' }}>AuDRI Engine</div>
              </div>
              <div className={styles.infoArrow}>→</div>
              <div className={styles.infoCol}>
                <div className={styles.infoLabel}>The Output</div>
                <div className={styles.infoBox} style={{ background: 'var(--accent)', color: '#000', fontWeight: 700 }}>Market Conduct Report</div>
              </div>
            </div>

            <div className={styles.featureGrid}>
              <div className={styles.feat}>
                <span className="material-icons">description</span>
                <div>
                  <div className={styles.featTitle}>NAIC Mapping</div>
                  <div className={styles.featDesc}>Aligns every rule with specific NAIC Market Conduct Handbook standards.</div>
                </div>
              </div>
              <div className={styles.feat}>
                <span className="material-icons">security</span>
                <div>
                  <div className={styles.featTitle}>Immutable Logging</div>
                  <div className={styles.featDesc}>Cryptographically signed evidence of every validation performed.</div>
                </div>
              </div>
              <div className={styles.feat}>
                <span className="material-icons">history_edu</span>
                <div>
                  <div className={styles.featTitle}>Variance Analysis</div>
                  <div className={styles.featDesc}>Quantify the distance between actual performance and stated guidelines.</div>
                </div>
              </div>
            </div>
          </Card>

          <div className={styles.proofStrip}>
            {PROOF_ITEMS.map((item, i) => (
              <motion.div 
                key={i}
                className={styles.proofItem}
                variants={FADE_UP}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                custom={i * 0.15}
                style={{ transform: 'translateZ(0)' }}
              >
                <div className={styles.proofNum}>{item.number}</div>
                <div className={styles.proofLabel}>{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Regulatory
