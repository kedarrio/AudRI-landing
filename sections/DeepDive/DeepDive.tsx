// sections/DeepDive/DeepDive.tsx
'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FADE_UP } from '@/lib/constants'
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader'
import styles from './DeepDive.module.css'

const PARSERS = [
  { text: "Notification within 24h of injury", code: "if (injury.time - report.time < 24h) return PASS" },
  { text: "Estimate exceeds $5,000 threshold", code: "if (estimate.total > 5000) trigger(MGR_REVIEW)" },
  { text: "Claimant statement missing in file", code: "if (!file.contains(STATEMENT)) flag(MISSING_DOC)" }
]

const DeepDive: React.FC = () => {
  const [parserIndex, setParserIndex] = useState(0)
  const [ledgerBlocks, setLedgerBlocks] = useState<{ id: number; active: boolean; time: string }[]>(
    Array.from({ length: 8 }, (_, i) => ({ id: i, active: false, time: '00:00:00' }))
  )

  useEffect(() => {
    // Parser interval
    const pInterval = setInterval(() => {
      setParserIndex(prev => (prev + 1) % PARSERS.length)
    }, 4000)

    // Ledger activity
    const lInterval = setInterval(() => {
      setLedgerBlocks(prev => prev.map(block => {
        if (Math.random() > 0.8) {
          return { 
            ...block, 
            active: true, 
            time: new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }) 
          }
        }
        if (block.active) return { ...block, active: false }
        return block
      }))
    }, 1500)

    return () => {
      clearInterval(pInterval)
      clearInterval(lInterval)
    }
  }, [])

  return (
    <section id="deep-dive" className={styles.deepDive}>
      <div className={styles.glow} />
      <div className={styles.container}>
        <SectionHeader 
          eyebrow="CORE TECHNOLOGY"
          title="Built for throughput. Engineered for precision."
          subtitle="The infrastructure that powers AuDRI handles millions of claim files without breaking a sweat, ensuring every validation is deterministic and absolute."
        />

        <div className={styles.grid}>
          {/* Card 1: Semantic Parser */}
          <motion.div 
            className={styles.card}
            variants={FADE_UP}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            <div className={styles.cardHeader}>
              <span className={styles.cardTag}>TRANSLATION ENGINE</span>
              <h3>Semantic Parser</h3>
              <p className={styles.cardDesc}>Converting complex SOPs and regulatory text into executable machine logic in real-time.</p>
            </div>
            
            <div className={styles.visualStage}>
              <div className={styles.parserWrapper}>
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={parserIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={styles.parserText}
                    style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
                  >
                    {PARSERS[parserIndex].text}
                  </motion.div>
                </AnimatePresence>

                <div className={styles.parserConnect}>
                  <motion.span 
                    animate={{ y: [0, 5, 0], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="material-icons"
                  >
                    south
                  </motion.span>
                </div>

                <div className={styles.parserCode}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={parserIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
                    >
                      <span className={styles.codeKeyword}>match</span> (rule) {'{'} <br/>
                      &nbsp;&nbsp;<span className={styles.codeFunc}>{PARSERS[parserIndex].code}</span><br/>
                      {'}'}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Continuous Auditor */}
          <motion.div 
            className={styles.card}
            variants={FADE_UP}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: 0.1 }}
          >
            <div className={styles.cardHeader}>
              <span className={styles.cardTag}>REAL-TIME VALIDATION</span>
              <h3>Continuous Auditor</h3>
              <p className={styles.cardDesc}>Every claim file is scanned against every rule as soon as it changes. No sampling, total coverage.</p>
            </div>

            <div className={styles.visualStage}>
              <div className={styles.auditorViewport}>
                <motion.div 
                  className={styles.docCarousel}
                  animate={{ x: [-100, -500] }}
                  transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                >
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className={styles.docItem}>
                      <div className={styles.docLine} style={{ width: '40%' }} />
                      <div className={styles.docLine} />
                      <div className={styles.docLine} />
                      <div className={styles.docLine} style={{ width: '60%' }} />
                    </div>
                  ))}
                </motion.div>
                <div className={styles.scanBeam} />
              </div>
            </div>
          </motion.div>

          {/* Card 3: Evidence Ledger */}
          <motion.div 
            className={styles.card}
            variants={FADE_UP}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: 0.2 }}
          >
            <div className={styles.cardHeader}>
              <span className={styles.cardTag}>AUDIT DEFENSE</span>
              <h3>Evidence Ledger</h3>
              <p className={styles.cardDesc}>Immutable, timestamped proof of every validation, ready for the regulator at a moment's notice.</p>
            </div>

            <div className={styles.visualStage}>
              <div className={styles.ledgerGrid}>
                {ledgerBlocks.map((block) => (
                  <div key={block.id} className={styles.ledgerBlock}>
                    <span className="material-icons">verified</span>
                    <motion.div 
                      className={styles.blockPulse}
                      animate={block.active ? { scale: [1, 1.2, 1], opacity: [1, 0] } : {}}
                      transition={{ duration: 0.6 }}
                    />
                    {block.active && (
                      <motion.div 
                        className={styles.ledgerTimestamp}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        {block.time}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default DeepDive
