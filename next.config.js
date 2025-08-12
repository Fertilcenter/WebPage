/** @type {import('next').NextConfig} */
const nextConfig = {
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
}

module.exports = nextConfig
