import type { NextConfig } from 'next'
const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  // Change '/AudRI-landing' to your repository name if different
  basePath: '/AudRI-landing',
  images: {
    unoptimized: true,
  },
}
export default nextConfig
