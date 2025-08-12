'use client'
import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="relative bg-gradient-to-r from-[#8B5A96] to-[#7d4fa3] min-h-[75vh] flex items-center overflow-hidden pt-20">
      {/* Corazón de fondo con animación */}


      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8 relative z-10 min-h-[60vh]">
        {/* Contenido de texto */}
        <div className="flex-1 text-center max-w-2xl lg:self-center">
          
          <div className="mt-3 mr-5 hidden md:block lg:block">
            <Image
              src="/images/logofertil.png"
              alt="Fertilcenter logo"
              width={280}
              height={65}
              className="mx-auto drop-shadow-lg"
              priority
            />
          </div>

          <h1 className="mt-8 font-montserrat-heavy text-4xl lg:text-6xl xl:text-7xl font-black text-white mb-6 relative z-10 leading-tight">
            SABEMOS CÓMO<br />
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 lg:left-1/2 lg:translate-x-40">
                <Image
                src="/images/corazon_completo.png"
                alt=""
                width={500}
                height={500}
                className="select-none pointer-events-none opacity-30 animate-heartbeat w-[500px] h-[150px] lg:w-[300px] lg:h-[200px]"
                />
              </div>
            <span className="text-[#FFE082]">TE SIENTES</span>
          </h1>
          

          <p className="font-futura text-hero-subtitle lg:text-hero-subtitle-lg font-medium text-white/90 leading-relaxed max-w-lg mx-auto relative z-20 mb-8">
            Entendemos tu Historia,<br />
            <span className="font-bold text-[#FFE082]">creamos tu Sueño.</span>
          </p>
        </div>

        {/* Imagen de la mujer - posicionada hacia abajo y pegada a la base */}
        <div className="flex-1 flex justify-center lg:justify-end items-end lg:pr-8 relative">
          {/* Círculo decorativo con animación sutil - centrado detrás de la mujer */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border-4 border-white/20 border-dashed opacity-50 animate-spin-slow"></div>
          
          <div className="relative">
            <Image
              src="/images/mujer.png"
              alt="Mujer reflexionando sobre su sueño de ser madre"
              width={450}
              height={600}
              className="object-contain object-bottom select-none hover:scale-105 transition-transform duration-300 w-[350px] h-[350px] lg:w-[450px] lg:h-[600px]"
              priority
              style={{
                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))',
                objectPosition: 'bottom'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}