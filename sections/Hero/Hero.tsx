// sections/Hero/Hero.tsx
'use client'
import React from 'react'
import { motion } from 'framer-motion'
import EyebrowBadge from '@/components/ui/EyebrowBadge/EyebrowBadge'
import Button from '@/components/ui/Button/Button'
import { FADE_UP } from '@/lib/constants'
import BackgroundVisual from './BackgroundVisual'
import styles from './Hero.module.css'

const Hero: React.FC = () => {
  return (
    <header id="hero" className={styles.hero}>
      <BackgroundVisual />
      <div className={styles.orb1}></div>
      <div className={styles.orb2}></div>
      <div className={styles.heroGlow}></div>
      
      <div className={styles.heroContent}>

        <motion.h1 
          className={styles.heroTitle}
          variants={FADE_UP}
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          <span>When the regulator opens your file,</span>
          <span className={styles.italicText}>it's already been audited.</span>
        </motion.h1>

        <motion.p 
          className={styles.heroSub}
          variants={FADE_UP}
          initial="hidden"
          animate="visible"
          custom={0.38}
        >
          AuDRI turns your SOPs, regulatory manuals, and carrier guidelines into a live rules engine — validating every claim file, in real time, before a regulator ever asks.
        </motion.p>

        <motion.div 
          className={styles.ctaRow}
          variants={FADE_UP}
          initial="hidden"
          animate="visible"
          custom={0.52}
        >
          <Button variant="primary" href="#demo">Book a Demo</Button>
          <Button variant="ghost" href="#how-it-works">See How It Works</Button>
        </motion.div>

      </div>

      <div className={styles.scrollHint}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </header>
  )
}

export default Hero
