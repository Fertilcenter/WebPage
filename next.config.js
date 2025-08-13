/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development'

const nextConfig = {
  // CRÍTICO: Configuración diferente para dev y prod
  basePath: isDev ? '' : '/webpage',
  assetPrefix: isDev ? '' : '/webpage',
  trailingSlash: true,
  
  output: 'standalone',
  
  // Configuración de rutas públicas
  publicRuntimeConfig: {
    basePath: isDev ? '' : '/webpage',
  },
  
  images: {
    unoptimized: true,
    domains: ['www.fertilcenter.com.mx', 'fertilcenter.com.mx', 'localhost'],
    path: isDev ? '/_next/image' : '/webpage/_next/image',
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // CRÍTICO: Rewrite para que las imágenes funcionen
  async rewrites() {
    const rewrites = [];
    
    if (!isDev) {
      // En producción, reescribir las rutas de API
      rewrites.push({
        source: '/webpage/api/:path*',
        destination: '/api/:path*',
      });
    }
    
    return rewrites;
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
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig