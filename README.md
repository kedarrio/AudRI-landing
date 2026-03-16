# AuDRI Landing Page

AuDRI (Audit Realtime Intelligence) is a B2B enterprise SaaS platform designed to automate insurance compliance. This landing page features a high-end industrial aesthetic (inspired by Braun and Linear) and a dynamic, responsive scroll-story design.

## Features

- **Industrial Design System**: Custom-built with a focus on depth, elevated platforms, and refined typography.
- **Dynamic Backgrounds**: Canvas-based particle system with proximity-based connections and floating keywords.
- **Responsive Layout**: Optimized for all devices with a 16/8/4 grid system and a minimum width of 340px.
- **Interactive Visuals**: Animated "Mapping Engine" (Semantic Parser) and tailored perspectives (Executive, Manager, Analyst).
- **Audit Readiness**: Built-in logic for NAIC-standard report simulations.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: Vanilla CSS Modules
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: Material Design Icons

## Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Build & Deploy

```bash
# Create a production build
npm run build

# Start the production server
npm run start
```

## Project Structure

- `/app`: Next.js App Router and global styles.
- `/components`: Shared UI components (Buttons, SectionHeaders, etc.).
- `/sections`: Main landing page sections (Hero, Problem, Platform, etc.).
- `/lib`: Constants, types, and animation variants.
- `/public`: Static assets (fonts, icons).

## Documentation

For detailed implementation notes, including the "Elevated Platforms" design system and flicker-stability fixes, refer to the internal artifacts in the `.gemini/antigravity/brain` directory.
