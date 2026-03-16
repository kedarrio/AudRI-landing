// sections/Demo/Demo.tsx
'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FADE_UP } from '@/lib/constants'
import Button from '@/components/ui/Button/Button'
import styles from './Demo.module.css'

const Demo: React.FC = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simple validation
    if (!email || !email.includes('@')) {
      setStatus('error')
      setErrorMessage('Please enter a valid work email.')
      return
    }

    setStatus('loading')

    // Simulate API call
    setTimeout(() => {
      setStatus('success')
    }, 1500)
  }

  return (
    <section id="demo" className={styles.demo}>
      <div className={styles.container}>
        <motion.div 
          className={styles.card}
          variants={FADE_UP}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ transform: 'translateZ(0)' }}
        >
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={styles.successContent}
              >
                <div className={styles.successIcon}>
                  <span className="material-icons">check_circle</span>
                </div>
                <h2 className={styles.title}>You&apos;re on the list.</h2>
                <p className={styles.sub}>
                  We&apos;ve received your request for early access. Our team will reach out to your work email shortly to schedule a tailored walkthrough.
                </p>
                <Button variant="ghost" onClick={() => { setStatus('idle'); setEmail(''); }}>
                  Back
                </Button>
              </motion.div>
            ) : (
              <motion.div 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={styles.content}
              >
                <div className={styles.eyebrow}>GET STARTED</div>
                <h2 className={styles.title}>Your Market Conduct readiness starts here.</h2>
                <p className={styles.sub}>
                  See how AuDRI can transform your organization&apos;s compliance framework into a live, deterministic oversight engine.
                </p>
                
                <form className={styles.form} onSubmit={handleSubmit} noValidate>
                  <div className={styles.inputWrapper}>
                    <input 
                      type="email" 
                      placeholder="Enter your work email" 
                      className={`${styles.input} ${status === 'error' ? styles.inputError : ''}`}
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        if (status === 'error') setStatus('idle')
                      }}
                      disabled={status === 'loading'}
                    />
                    <AnimatePresence>
                      {status === 'error' && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className={styles.errorContainer}
                        >
                          <span className="material-icons" style={{ fontSize: '14px' }}>error_outline</span>
                          {errorMessage}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <Button 
                    variant="cta" 
                    type="submit"
                    className={styles.submitBtn}
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'Processing...' : 'Join the wishlist'}
                  </Button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Demo
