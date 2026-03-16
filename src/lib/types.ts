// lib/types.ts

export interface NavLink {
  label: string
  href: string
}

export interface Step {
  number: string
  icon: string
  title: string
  description: string
  tags: string[]
}

export interface PersonaCard {
  role: string
  tagVariant: 'accent' | 'info' | 'success'
  title: string
  fear: string
  description: string
  bullets: string[]
}

export interface ComparisonItem {
  label: string
  description: string
}
    
export interface StatCard {
  label: string
  value: string
  variant: 'error' | 'warning' | 'accent'
  description: string
}

export interface FooterLink {
  label: string
  href: string
}

export interface ProofItem {
  number: string
  label: string
}

export interface FeedItem {
  prefix: string
  number: number
  type: string
  status: 'passed' | 'warning' | 'failed'
  time: string
}

export interface Exception {
  type: string
  id: string
  message: string
}
