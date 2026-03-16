// app/layout.tsx
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Nav from '@/components/layout/Nav/Nav'
import Footer from '@/components/layout/Footer/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AudRI | Audit Realtime Intelligence',
  description: 'Gen 3 document technology. Validating every claim file, in real time, before a regulator ever asks.',
  keywords: ['Audit Realtime Intelligence', 'Insurance Claims', 'Compliance', 'SaaS', 'Real-time Validation', 'Document Technology'],
  authors: [{ name: 'AudRI Team' }],
  metadataBase: new URL('https://kedarrio.github.io/AudRI-landing/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'AudRI | Audit Realtime Intelligence',
    description: 'Validating every claim file, in real time, before a regulator ever asks.',
    url: 'https://kedarrio.github.io/AudRI-landing/',
    siteName: 'AudRI',
    images: [
      {
        url: '/og-image.jpg', // Ensure this image exists in public folder
        width: 1200,
        height: 630,
        alt: 'AudRI - Audit Realtime Intelligence',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AudRI | Audit Realtime Intelligence',
    description: 'Gen 3 document technology for insurance compliance.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
