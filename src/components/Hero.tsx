'use client'
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative bg-gradient-to-r from-[#8B5A96] to-[#7d4fa3] min-h-[75vh] lg:min-h-[85vh] flex items-center overflow-hidden pt-20 touch-pan-y no-scroll-anchor"
    >
      {/* CONTENIDO (texto + imagen móvil) */}
      <div className="relative z-20 w-full max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Texto */}
        <div className="flex-1 text-center max-w-2xl">
          <div className=" mr-5 hidden md:block">
            <Image
              src="/images/logofertil.png"
              alt="Fertilcenter logo"
              width={350}
              height={75}
              className="mx-auto drop-shadow-lg"
              priority
            />
          </div>

          <h1 className="mt-8 font-montserrat-heavy text-4xl lg:text-6xl xl:text-7xl font-black text-white mb-6 relative z-10 leading-tight">
            SABEMOS CÓMO
            <br />
            {/* Corazón decorativo centrado detrás del título */}
            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
              <Image
                src="/images/corazon_completo.png"
                alt=""
                width={500}
                height={500}
                className="select-none pointer-events-none opacity-30 animate-heartbeat w-[300px] h-auto lg:w-[300px] lg:h-auto"
                priority
              />
            </div>
            <span className="text-[#FFE082]">TE SIENTES</span>
          </h1>

          <p className="font-futura text-hero-subtitle lg:text-hero-subtitle-lg font-medium text-white/90 leading-relaxed max-w-lg mx-auto relative z-20 mb-8">
            Entendemos tu Historia,
            <br />
            <span className="font-bold text-[#FFE082]">creamos tu Sueño.</span>
          </p>
        </div>

        {/* Imagen para móviles/tablets (en el flujo) */}
        <div className="flex-1 flex justify-center items-end relative lg:hidden">
          <div className="relative w-[320px] sm:w-[360px]">
            <Image
              src="/images/mujer.webp"
              alt="Mujer reflexionando sobre su sueño de ser madre"
              width={450}
              height={600}
              className="pointer-events-none object-contain object-bottom select-none transition-transform duration-300 w-full h-auto lg:hover:scale-105"
              priority
              style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))' }}
            />
          </div>
        </div>
      </div>

      {/* IMAGEN FIJA AL FONDO DEL CONTENEDOR PRINCIPAL (solo desktop) */}
      <div className="hidden lg:block absolute bottom-0 right-0 pr-20 z-10">
        <div className="relative w-[450px]">
          {/* Círculo decorativo detrás */}
          <div
            className="absolute -top-10 -left-5 w-[300px] h-[300px] rounded-full border-4 border-white/20 border-dashed opacity-50 animate-spin-slow"
            aria-hidden
          />
          <Image
            src="/images/mujer.webp"
            alt="Mujer reflexionando sobre su sueño de ser madre"
            width={450}
            height={600}
            className="object-contain object-bottom w-full h-auto"
            priority
            style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))' }}
          />
        </div>
      </div>
    </section>
  );
}
