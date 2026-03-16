// sections/Hero/BackgroundVisual.tsx
'use client'
import React, { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

const BackgroundVisual: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    const particleCount = 120 // Increased density
    const connectionDistance = 120
    const mouse = { x: -1000, y: -1000 }
    const keywords = [
      'AuDRI', 'AUDIT', 'COMPLIANCE', 'LOGIC', 'DETERMINISTIC', 
      'LEDGER', 'PARSER', 'RULES', 'REAL-TIME', 'OVERSIGHT', 
      'REGULATORY', 'EVIDENCE', 'READINESS'
    ]

    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      isWord: boolean
      word: string

      constructor(w: number, h: number) {
        this.x = Math.random() * w
        this.y = Math.random() * h
        this.vx = (Math.random() - 0.5) * 0.4
        this.vy = (Math.random() - 0.5) * 0.4
        this.isWord = Math.random() > 0.92 // Roughly 8% of particles are words
        this.word = keywords[Math.floor(Math.random() * keywords.length)]
        this.size = this.isWord ? 0 : Math.random() * 2 + 1
      }

      update(w: number, h: number) {
        this.x += this.vx
        this.y += this.vy

        if (this.x < 0 || this.x > w) this.vx *= -1
        if (this.y < 0 || this.y > h) this.vy *= -1
      }

      draw(context: CanvasRenderingContext2D) {
        if (this.isWord) {
          context.font = '700 9px "JetBrains Mono", monospace'
          context.fillStyle = 'rgba(252, 154, 101, 0.4)'
          context.fillText(this.word, this.x, this.y)
        } else {
          context.beginPath()
          context.arc(this.x, this.y, this.size, 0, Math.PI * 2)
          context.fillStyle = 'rgba(252, 154, 101, 0.4)'
          context.fill()
        }
      }
    }

    const init = () => {
      const w = canvas.width = window.innerWidth
      const h = canvas.height = window.innerHeight
      particles = []
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(w, h))
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach((p, i) => {
        p.update(canvas.width, canvas.height)
        p.draw(ctx)

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < connectionDistance) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(252, 154, 101, ${0.12 * (1 - dist / connectionDistance)})`
            ctx.lineWidth = 0.6
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      init()
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    
    init()
    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className={styles.visualContainer}>
      <canvas ref={canvasRef} className={styles.visualCanvas} />
      <div className={styles.gridOverlay}></div>
    </div>
  )
}

export default BackgroundVisual
