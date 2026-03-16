# AudRI SEO Strategy & Implementation

This document outlines the SEO optimizations performed on the AudRI landing page to maximize search visibility and ensure high-quality social sharing.

## 1. Technical SEO

### Meta Tags & Open Graph
We've implemented a robust set of metadata in `app/layout.tsx`, including:
- **Semantic Title & Description**: Targeting keywords like "Audit Realtime Intelligence", "Insurance Claim Audit", and "B2B SaaS".
- **Open Graph (OG) Tags**: Custom titles, descriptions, and images for professional sharing on LinkedIn, Slack, etc.
- **Twitter Cards**: Optimized for visibility on X (formerly Twitter).
- **Canonical URLs**: To prevent duplicate content issues.

### Search Engine Discovery
- **sitemap.xml**: Static sitemap in `public/sitemap.xml` for efficient indexing.
- **robots.txt**: Static instructions in `public/robots.txt` for crawlers.

## 2. On-Page SEO

### Semantic HTML
- **Heading Hierarchy**: Strictly followed H1 -> H2 -> H3 structure across all sections to help crawlers understand content priority.
- **Sectioning**: Used HTML5 semantic tags (`<section>`, `<article>`, `<header>`, `<footer>`).

### Accessibility & Indexability
- **SVG Labels**: All custom vector illustrations include `<title>` and `aria-label` tags so they are indexable and accessible to screen readers.
- **Alt Text**: Descriptive alt tags for all visual elements.

## 3. Keywords Targeted
- Audit Realtime Intelligence
- B2B Enterprise SaaS
- Insurance Claims Auditing
- Real-time compliance
- Automated document validation
- Gen 3 document technology
