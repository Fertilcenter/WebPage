import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import HydrationFix from '@/components/HydrationFix'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://fertilcenter.com'),
  title: 'Fertilcenter® - Latidos de Vida',
  description: 'Sabemos cómo te sientes. En Fertilcenter hacemos realidad tu sueño de ser mamá con ciencia avanzada, empatía humana y resultados reales.',
  openGraph: {
    title: 'Fertilcenter® - Latidos de Vida',
    description: 'Sabemos cómo te sientes. En Fertilcenter hacemos realidad tu sueño de ser mamá con ciencia avanzada, empatía humana y resultados reales.',
    url: 'https://fertilcenter.com',
    siteName: 'Fertilcenter',
    images: [
      {
        url: '/images/fertilcenter-og.png',
        width: 1200,
        height: 630,
        alt: 'Fertilcenter - Latidos de Vida',
      }
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fertilcenter® - Latidos de Vida',
    description: 'Sabemos cómo te sientes. En Fertilcenter hacemos realidad tu sueño de ser mamá con ciencia avanzada, empatía humana y resultados reales.',
    images: ['/images/fertilcenter-og.png'],
  },
  icons: {
    icon: '/images/logo-chico.png',
    apple: '/images/logo-chico.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/FUTURA-BOOK-FONT.TTF"
          as="font"
          type="font/truetype"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/MONT-HEAVY.TTF"
          as="font"
          type="font/truetype"
          crossOrigin="anonymous"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={inter.className + " bg-[#f6f2fa] text-[#2e204c]"} suppressHydrationWarning={true}>
        <HydrationFix />
        {children}
      </body>
    </html>
  )
}