/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development'

const nextConfig = {
  // Configuración de basePath consistente
  basePath: '/webpage',
  assetPrefix: '/webpage',
  trailingSlash: true,
  
  // Configuración de salida para Docker
  output: 'standalone',
  
  images: {
    domains: ['www.fertilcenter.com.mx', 'fertilcenter.com.mx'],
    // Path consistente con basePath
    path: '/webpage/_next/image',
    unoptimized: false, // Cambiar a false para mejor optimización
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Configuración experimental
  experimental: {
    optimizePackageImports: ['@/components'],
  },
  
  // Configuración para producción
  reactStrictMode: true, // Habilitarlo para mejor debugging
  swcMinify: true, // Usar SWC para mejor minificación
  
  // Compresión y optimización
  compress: true,
  poweredByHeader: false,
  generateEtags: true, // Habilitarlo para mejor caching
  
  // Configuración de headers de seguridad
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
      // Headers específicos para archivos estáticos
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
  
  // Configuración de rewrites para mejor SEO
  async rewrites() {
    return [
      // Manejar rutas que no terminen en /
      {
        source: '/webpage/:path*',
        destination: '/webpage/:path*/',
      },
    ];
  },
}

module.exports = nextConfig