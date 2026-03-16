// lib/constants.ts
import type {
  NavLink,
  Step,
  PersonaCard,
  StatCard,
  ProofItem,
  Exception,
} from './types'

export const NAV_LINKS: NavLink[] = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Platform', href: '#platform' },
  { label: 'Deep Dive', href: '#deep-dive' },
  { label: 'Intelligence', href: '#regulatory' },
  { label: "Who It's For", href: '#who' },
]

export const STEPS: Step[] = [
  {
    number: '01',
    icon: 'hub',
    title: 'Connect',
    description:
      'AuDRI integrates with your existing document storage and claims systems. No migration required. Flat file exports or API — either works.',
    tags: ['AWS S3', 'SharePoint', 'Azure', 'On-Premise', 'API'],
  },
  {
    number: '02',
    icon: 'text_snippet',
    title: 'Extract',
    description:
      'Upload SOPs, regulatory manuals, carrier guidelines. AuDRI automatically extracts embedded business rules — compliance criteria, timeliness requirements, documentation standards — and converts them into executable logic.',
    tags: ['SOPs', 'Regulatory Manuals', 'Underwriting Guidelines'],
  },
  {
    number: '03',
    icon: 'verified',
    title: 'Validate',
    description:
      'The rules engine runs against every claim file, continuously. Every file is checked against every applicable rule, for the specific state where the claim was filed. Failures flagged instantly with clear explanations.',
    tags: ["Workers' Comp", 'General Liability', 'Commercial Auto'],
  },
  {
    number: '04',
    icon: 'dashboard',
    title: 'Monitor',
    description:
      'The Audit Oversight Dashboard shows live compliance status. Drill down from executive KPIs to individual claim files. Filter by carrier client, line of business, state, adjuster, or time period.',
    tags: ['Real-Time', 'Multi-Carrier', 'Multi-State'],
  },
  {
    number: '05',
    icon: 'assignment_turned_in',
    title: 'Defend',
    description:
      "Generate a Market Conduct Readiness Report at any time — the pre-packaged evidence package that proves your process before a regulator asks. When the audit lands, you're reconciling outputs, not scrambling.",
    tags: ['NAIC Standards', 'One-Click Report', 'Audit-Ready'],
  },
]

export const PERSONA_CARDS: PersonaCard[] = [
  {
    role: 'EXECUTIVE VIEW',
    tagVariant: 'accent',
    title: 'Proof of performance, at scale.',
    fear: 'One bad audit = one lost carrier contract = $1M–$10M gone.',
    description:
      'For leadership who needs to guarantee compliance to carrier clients and regulators without increasing headcount. You need high-level KPIs that prove your operation is audit-ready every single day.',
    bullets: [
      'Financial Leakage & Compliance KPIs',
      'Carrier-specific readiness reports on demand',
      'Audit-readiness score for stewardship meetings',
    ],
  },
  {
    role: 'MANAGER VIEW',
    tagVariant: 'info',
    title: 'Real-time oversight. Zero surprises.',
    fear: "Quarterly QA reports are already outdated by the time they're read.",
    description:
      'For team leads who need to know exactly how their unit is performing right now. Instead of reactive sampling, you monitor a live feed of every validation happening across your desk.',
    bullets: [
      'Live activity feed of all claim validations',
      'Instant alerts for compliance exceptions',
      'Regional and unit-based performance metrics',
    ],
  },
  {
    role: 'ANALYST VIEW',
    tagVariant: 'success',
    title: 'Deterministic audits. Absolute confidence.',
    fear: 'Interpretations of "correct" should not depend on which human reviewed the file.',
    description:
      'For the technical compliance team who needs to map complex regulations to executable logic. AuDRI ensures that every file is tested against the same ironclad rules, with total consistency.',
    bullets: [
      'Automated validation against state-specific rules',
      'Natural language mapping to executable code',
      'Ironclad evidence trails for every claim file',
    ],
  },
]

export const STAT_CARDS: StatCard[] = [
  {
    label: 'TYPICAL QA COVERAGE',
    value: '3–5%',
    variant: 'error',
    description: 'of claim files reviewed before a market conduct audit',
  },
  {
    label: 'POTENTIAL FINE EXPOSURE',
    value: '$400K+',
    variant: 'warning',
    description:
      'in fines from a single 40% finding rate on 200 sampled files at $5,000 per violation',
  },
  {
    label: 'AT-RISK CARRIER REVENUE',
    value: '$1M–$10M',
    variant: 'accent',
    description: 'annual revenue lost when one carrier contract is terminated after a failed audit',
  },
]

export const PROOF_ITEMS: ProofItem[] = [
  { number: '100%', label: 'File Coverage' },
  { number: '$50B', label: 'Market We Address' },
  { number: '70–80%', label: 'Time Saved Per Audit' },
]

export const DB_CLAIMS = [
  { prefix: 'CLM', type: 'Commercial Auto' },
  { prefix: 'WC', type: "Workers' Comp" },
  { prefix: 'GL', type: 'General Liability' },
  { prefix: 'CP', type: 'Commercial Property' },
]

export const DB_EXCEPTIONS: Exception[] = [
  { type: 'FLAG', id: 'CLM-2847-X', message: 'Reserve set at $15k, suggests $11k' },
  { type: 'ISSUE', id: 'CLM-1922-A', message: 'Missing claimant statement' },
  { type: 'ALERT', id: 'CLM-0581-K', message: 'Potential total loss missed' },
]

export const FADE_UP = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transform: "translateZ(0)",
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1], delay },
  }),
}

export const SCALE_IN = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}
