'use client'
import Head from 'next/head'

export default function OptimizedHead() {
  return (
    <Head>
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
      
      {/* DNS prefetch for external domains if any */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      
      {/* Preconnect to same origin */}
      <link rel="preconnect" href="/" crossOrigin="anonymous" />
      
      {/* Resource hints */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Performance hints */}
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
    </Head>
  )
}
