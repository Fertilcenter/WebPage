import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import HydrationFix from '@/components/HydrationFix'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.fertilcenter.com.mx'),
  title: {
    default: 'Fertilcenter - Latidos',
    template: '%s | Fertilcenter'
  },
  description: 'Fertilcenter Aguascalientes es una clínica especializada en tratamientos de fertilidad, especialmente fertilización in vitro, inseminación artificial y congelación de óvulos. Contamos con los más avanzados tratamientos de reproducción asistida en Aguascalientes para ayudarte a cumplir tu sueño de ser padre o madre. Nuestro objetivo máximo es que tengas a tu bebé en casa muy pronto.',
  keywords: [
    'Fertilidad en Aguascalientes', 'Clínica de Reproducción Asistida', 'Tratamientos de fertilidad', 'Fertilización in vitro (FIV)', 'Inseminación artificial', 'Congelación de óvulos', 'Congelación de esperma', 'Diagnóstico de fertilidad', 'Clínica de fertilidad en Aguascalientes', 'Tratamientos para la infertilidad', 'Reproducción asistida en Aguascalientes', 'Preservación de la fertilidad', 'Donación de óvulos', 'Donación de esperma', 'Fecundación in vitro', 'Fecundación asistida', 'Fertilidad femenina', 'Fertilidad masculina', 'Tratamiento de fertilidad en pareja', 'Infertilidad masculina', 'Infertilidad femenina', 'Ovulación inducida', 'Tratamiento de fertilidad natural', 'Clínica de fertilidad avanzada', 'Medicina reproductiva', 'Diagnóstico de infertilidad', 'Técnicas de reproducción asistida', 'Problemas de fertilidad', 'Evaluación de la fertilidad', 'Apoyo psicológico en fertilidad', 'Pruebas de fertilidad', 'Tratamientos hormonales para fertilidad', 'Terapia de fertilidad', 'Asesoramiento en fertilidad', 'Procedimientos de fertilidad', 'Embarazo asistido', 'Transferencia de embriones', 'Estudio de fertilidad', 'Reproducción asistida en México', 'Banco de óvulos', 'Banco de esperma', 'Criopreservación', 'Fertilidad post-cáncer', 'Tratamiento de infertilidad por edad', 'Clínica de fecundación asistida', 'Reserva ovárica', 'Ciclo de fertilidad', 'Fallo ovárico prematuro', 'Estimulación ovárica', 'Clínica de fecundidad', 'Laboratorio de fertilidad', 'Laboratorio propio de reproducción asistida', 'Clínica con laboratorio in situ', 'Tratamientos de fertilidad en un solo lugar', 'Instalaciones de reproducción asistida', 'Quirófanos especializados en fertilidad', 'Equipo médico de fertilidad', 'Especialistas en biología de la reproducción', 'Procedimientos quirúrgicos de fertilidad', 'Quirófano para fertilización in vitro', 'Laboratorio de alta tecnología', 'Biología de la reproducción asistida', 'Análisis en laboratorio propio', 'Laboratorio de embriología', 'Fertilidad y laboratorio clínico', 'Monitoreo embrionario en laboratorio', 'Laboratorio para inseminación artificial', 'Evaluación de calidad de óvulos y esperma', 'Control de calidad en laboratorio de fertilidad', 'Fertilidad con equipo médico avanzado', 'Procedimientos quirúrgicos en clínica de fertilidad', 'Clínica con quirófanos para reproducción asistida', 'Laboratorio y quirófano en una sola clínica', 'Tecnología avanzada en reproducción asistida', 'Laboratorio especializado en reproducción', 'Técnica ROPA', 'Recepción de ovocitos de la pareja', 'Fertilidad para parejas lesbianas', 'Embarazo en pareja femenina', 'Reproducción asistida para parejas de mujeres', 'Método ROPA en Aguascalientes', 'Tratamiento ROPA', 'Maternidad compartida', 'Fertilidad en parejas del mismo sexo', 'Participación de ambas madres en el embarazo'
  ],
  alternates: {
    canonical: 'https://www.fertilcenter.com.mx/webpage/'
  },
  openGraph: {
    title: 'Fertilcenter® - Latidos de Vida',
    description: 'Sabemos cómo te sientes. En Fertilcenter hacemos realidad tu sueño de ser mamá con ciencia avanzada, empatía humana y resultados reales.',
    url: 'https://www.fertilcenter.com.mx/webpage/',
    siteName: 'Fertilcenter',
    images: [
      {
        url: '/images/fertilcenter-og.png',
        width: 1200,
        height: 630,
        alt: 'Fertilcenter - Latidos de Vida'
      }
    ],
    locale: 'es_MX',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fertilcenter® - Latidos de Vida',
    description: 'Sabemos cómo te sientes. En Fertilcenter hacemos realidad tu sueño de ser mamá con ciencia avanzada, empatía humana y resultados reales.',
    images: ['/images/fertilcenter-og.png']
  },
  icons: {
    icon: '/images/logo-chico.png',
    apple: '/images/logo-chico.png'
  }
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
        {/* Extra SEO (si necesitas más keywords dinámicas puedes agregarlas aquí) */}
        <meta name="author" content="Fertilcenter" />
        <meta name="robots" content="index,follow" />
        {/* Google Tag (gtag.js) - GA4 */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <Script
            id="ga-script"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          />
        )}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <Script id="ga-inline" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}</Script>
        )}
        {/* Google Tag Manager (opcional si usas GTM en vez de gtag directo) */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <Script id="gtm-script" strategy="afterInteractive">{`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
          `}</Script>
        )}
        {/* Meta Pixel Code */}
        {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
          <Script id="meta-pixel" strategy="afterInteractive">{`
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)}; if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}</Script>
        )}
        {/* Metabase embed token helper (solo si necesitas firmar dashboards en cliente - normalmente no) */}
        {process.env.NEXT_PUBLIC_METABASE_SITE_URL && process.env.NEXT_PUBLIC_METABASE_DASHBOARD_ID && (
          <Script id="metabase-embed-doc" strategy="lazyOnload">{`
            // Ejemplo: insertar un dashboard de Metabase cuando exista un contenedor con id 'metabase-dashboard'
            (function(){
              const el = document.getElementById('metabase-dashboard');
              if(!el) return; // crear iframe solo si existe
              if(el.dataset.loaded) return;
              el.dataset.loaded = 'true';
              const iframe = document.createElement('iframe');
              iframe.src = '${process.env.NEXT_PUBLIC_METABASE_SITE_URL}/embed/dashboard/${process.env.NEXT_PUBLIC_METABASE_DASHBOARD_ID}#theme=night&bordered=true&titled=true';
              iframe.style.width='100%';
              iframe.style.height='600px';
              iframe.style.border='0';
              el.appendChild(iframe);
            })();
          `}</Script>
        )}
      </head>
      <body className={inter.className + ' bg-[#f6f2fa] text-[#2e204c]'} suppressHydrationWarning={true}>
        {/* Google Tag Manager (noscript) */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <noscript><iframe src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`} height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
        )}
        {/* Meta Pixel noscript */}
        {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
          <noscript>
            <img height="1" width="1" style={{display:'none'}} alt=""
              src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_META_PIXEL_ID}&ev=PageView&noscript=1`} />
          </noscript>
        )}
        <HydrationFix />
        {children}
      </body>
    </html>
  )
}