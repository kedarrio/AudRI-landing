const isGithubActions = process.env.GITHUB_PAGES === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // Only apply basePath when deploying to GitHub Pages
  basePath: isGithubActions ? '/AudRI-landing' : '',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
