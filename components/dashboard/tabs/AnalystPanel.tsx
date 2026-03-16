// components/dashboard/tabs/AnalystPanel.tsx
'use client'
import React, { useState, useEffect } from 'react'
import styles from './AnalystPanel.module.css'

interface AnalystPanelProps {
  active: boolean
  resetTrigger?: number
}

type Stage = 'upload' | 'auditing' | 'results'

const AnalystPanel: React.FC<AnalystPanelProps> = ({ active, resetTrigger }) => {
  const [stage, setStage] = useState<Stage>('upload')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (resetTrigger !== undefined) {
      resetAudit()
    }
  }, [resetTrigger])

  const startAudit = () => {
    setStage('auditing')
    setProgress(0)
    let p = 0
    const interval = setInterval(() => {
      p += Math.floor(Math.random() * 8) + 2
      if (p >= 100) {
        clearInterval(interval)
        setProgress(100)
        setTimeout(() => setStage('results'), 700)
      } else {
        setProgress(p)
      }
    }, 400) // ~8 seconds total
  }

  const resetAudit = () => {
    setStage('upload')
    setProgress(0)
  }

  if (!active) return null

  return (
    <div className={styles.analystPanel}>
      <div className={styles.progressWrap}>
        <div className={styles.progressLine}></div>
        <div 
          className={styles.progressFill} 
          style={{ '--p-fill': stage === 'upload' ? 0 : stage === 'auditing' ? 0.5 : 1 } as React.CSSProperties}
        ></div>
        
        <div className={`${styles.step} ${stage === 'upload' ? styles.active : styles.complete}`}>
          <div className={styles.stepCircle}>{stage === 'upload' || stage === 'auditing' ? '1' : '✓'}</div>
          <div className={styles.stepLabel}>Upload</div>
        </div>
        <div className={`${styles.step} ${stage === 'auditing' ? styles.active : stage === 'results' ? styles.complete : ''}`}>
          <div className={styles.stepCircle}>{stage === 'results' ? '✓' : '2'}</div>
          <div className={styles.stepLabel}>Audit</div>
        </div>
        <div className={`${styles.step} ${stage === 'results' ? styles.active : ''}`}>
          <div className={styles.stepCircle}>3</div>
          <div className={styles.stepLabel}>Results</div>
        </div>
      </div>

      {stage === 'upload' && (
        <div className={styles.uploadStage}>
          <div className={styles.uploadZone} onClick={startAudit}>
            <span className="material-icons" style={{ fontSize: 32, color: 'var(--accent)', marginBottom: 12 }}>upload_file</span>
            <div className={styles.uploadTitle}>Drop files to analyze</div>
            <div className={styles.uploadSub}>PDF · DOCX · XLSX · Scanned Images</div>
          </div>
          <button className={styles.startBtn} onClick={startAudit}>Start Audit</button>
        </div>
      )}

      {stage === 'auditing' && (
        <div className={styles.auditStage}>
          <div className={styles.auditProgress}>
            <span className={`material-icons ${styles.auditIcon}`}>settings</span>
            <div className={styles.auditTitle}>Extracting Rules…</div>
            <div className={styles.auditSub}>Processing 512 claims</div>
            <div className={styles.barTrack}>
              <div className={styles.barFill} style={{ width: `${progress}%` }}></div>
            </div>
            <div className={styles.pctText}>{progress}% complete</div>
          </div>
        </div>
      )}

      {stage === 'results' && (
        <div className={styles.resultsStage}>
          <div className={styles.resultsGrid}>
            <div className={styles.resultCard}>
              <div className={`${styles.resultNumber} ${styles.s}`}>512</div>
              <div className={styles.resultLabel}>Files Audited</div>
            </div>
            <div className={styles.resultCard}>
              <div className={`${styles.resultNumber} ${styles.a}`}>7</div>
              <div className={styles.resultLabel}>Flags Found</div>
            </div>
            <div className={styles.resultCard}>
              <div className={`${styles.resultNumber} ${styles.i}`}>98.6%</div>
              <div className={styles.resultLabel}>Pass Rate</div>
            </div>
          </div>
          <div className={styles.findings}>
            <div className={styles.findingsTitle}>Key Findings</div>
            <div className={styles.findingRow}>✓ Auto Liability compliance improved to 99%</div>
            <div className={styles.findingRow}>⚠ 7 cases require manual review</div>
            <div className={styles.findingRow}>→ Reserve accuracy trending +2.1%</div>
          </div>
          <button className={styles.resetBtn} onClick={resetAudit}>Reset Demo</button>
        </div>
      )}
    </div>
  )
}

export default AnalystPanel
