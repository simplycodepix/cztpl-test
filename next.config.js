/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  images: {
    domains: ['baasbv.eu', 'images.baasbv.eu'],
  },
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  sassOptions: {
    includePaths: ['styles/scss/theme.scss'],
  },
  async rewrites() {
    return [
      {
        source: '/product/:id-(.*)',
        destination: '/product/:id'
      },
      {
        source: '/productgroup/:id-(.*)',
        destination: '/productgroup/:id'
      },
    ]
  },
}

module.exports = nextConfig
