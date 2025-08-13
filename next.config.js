/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development'

const nextConfig = {
  // QUITAR basePath y assetPrefix porque Apache ya maneja la ruta
  // basePath: '/webpage',  // ← COMENTAR ESTA LÍNEA
  // assetPrefix: '/webpage', // ← COMENTAR ESTA LÍNEA
  trailingSlash: true,
  
  // Configuración de salida para Docker
  output: 'standalone',
  
  images: {
    domains: ['www.fertilcenter.com.mx', 'fertilcenter.com.mx'],
    // path: '/webpage/_next/image', // ← COMENTAR ESTA LÍNEA
    unoptimized: false,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // resto de configuración igual...
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