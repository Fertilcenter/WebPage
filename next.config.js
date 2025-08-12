/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración de salida para Docker
  output: 'standalone',
  
  images: {
    domains: [],
    // Optimización de imágenes
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Configuración para mejorar la hidratación
  experimental: {
    optimizePackageImports: ['@/components'],
  },
  
  // Configuración para desarrollo
  reactStrictMode: false, // Temporalmente deshabilitado para reducir warnings de hidratación
  
  // Compresión y optimización
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  
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
        ],
      },
    ];
  },
}

module.exports = nextConfig
