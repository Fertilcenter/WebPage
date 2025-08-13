/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development'

const nextConfig = {
  // CRÍTICO: Configuración de rutas
  basePath: '/webpage',
  assetPrefix: '/webpage',
  trailingSlash: true,
  
  output: 'standalone',
  
  // Configuración de rutas públicas
  publicRuntimeConfig: {
    basePath: '/webpage',
  },
  
  images: {
    unoptimized: true,
    domains: ['www.fertilcenter.com.mx', 'fertilcenter.com.mx'],
    // IMPORTANTE: path para imágenes con basePath
    path: '/webpage/_next/image',
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Rewrite para APIs
  async rewrites() {
    return [
      {
        source: '/webpage/api/:path*',
        destination: '/api/:path*',
      },
    ];
  },
  
  experimental: {
    optimizePackageImports: ['@/components'],
  },
  
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig