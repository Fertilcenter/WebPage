"use client";
import Image from "next/image";

export default function Heartbeat() {
  return (
    <section className="font-montserrat-heavy relative md:text-left md:bg-none md:px-4 md:mt-20 touch-pan-y no-scroll-anchor">
      <div className="max-w-6xl md:w-[90%] mx-auto md:px-0">
        {/* Título principal con ícono */}
        <div className="text-center md:mt-8">
          {/* Versión móvil */}
          <div className="flex flex-col items-center md:hidden relative">
            {/* Imagen de fondo */}
            <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30 animate-heartbeat pointer-events-none select-none z-0">
              <Image
                src="/images/corazon_completo.png"
                alt="Corazón decorativo"
                width={400}
                height={400}
                className="w-[250px] h-[250px] lg:w-[300px] lg:h-[300px]"
              />
            </div>

            {/* Texto arriba en móvil */}
            <h1 className="mt-12 font-montserrat-heavy text-4xl lg:text-6xl xl:text-7xl text-[#FFE082] mb-6 relative leading-tight px-4 z-10 ">
              BUSCAR UN BEBÉ
              <br />
              <span className="text-[#8B5A96] font-black block">
                ES UN VIAJE DIFÍCIL
              </span>
            </h1>
          </div>
        </div>

        {/* Caja principal (desktop) - SIN CAMBIOS */}
        <div className="hidden md:block relative group">
          <div className="rounded-3xl bg-gradient-to-r from-[#8B5A96] via-[#7d4fa3] to-[#6a3d8e] p-[1px]">
            <div className="min-h-[400px] w-full rounded-[calc(1.5rem-1px)] bg-gradient-to-br from-[#7d4fa3]/80 via-[#6f4498]/75 to-[#5a307e]/80 backdrop-blur-sm relative">
              {/* Overlays decorativos */}
              <div className="pointer-events-none absolute -top-10 -right-10 w-56 h-56 rounded-full bg-[#FFE082]/10 blur-2xl mix-blend-screen" />
              <div className="pointer-events-none absolute bottom-[-60px] left-[-40px] w-72 h-72 rounded-full bg-[#8B5A96]/40 blur-3xl opacity-70" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(255,224,130,0.12),transparent_60%)]" />

              {/* Imagen mujer pegada al fondo */}
              <Image
                src="/images/mujer_2x.webp"
                alt="Mujer"
                width={500}
                height={700}
                className="absolute bottom-0 left-0 -translate-x-20
             object-contain pointer-events-none select-none 
             drop-shadow-[0_0_25px_rgba(0,0,0,0.45)] z-20"
                priority={false}
              />

              {/* Contenido texto */}
              <div className="relative z-10 px-6 py-12 ml-[35%]">
                <h2 className="font-montserrat-heavy text-5xl leading-tight tracking-tight text-white mb-8">
                  <span className="block">
                    <span className="bg-gradient-to-r from-[#FFE082] via-[#F0C260] to-[#FFE082] bg-clip-text text-transparent drop-shadow-[0_0_5px_#8B5A96]">
                      EL LATIDO
                    </span>{" "}
                    QUE HACE REALIDAD
                    <span className="bg-gradient-to-r from-[#FFE082] via-[#F0C260] to-[#FFE082] bg-clip-text text-transparent drop-shadow-[0_0_5px_#8B5A96]">
                      {" "}
                      TU SUEÑO
                    </span>
                  </span>
                </h2>
                <ul className="space-y-4">
                  <li className="flex text-left text-justify">
                    <p className="text-2xl text-white/95 font-futura leading-snug">
                      Buscar un bebé es un viaje difícil y agotador, 
                      cada prueba negativa duele y aumenta la incertidumbre.
                    </p>
                  </li>
                </ul>
                <ul className="space-y-1 mt-5 text-xl text-[#FFE082] font-montserrat-heavy leading-snug">
                  <li className="flex text-left text-justify">
                    <p className="">
                      El reloj biológico avanza. <br />

                    </p>
                  </li>
                   <li className="flex text-left text-justify">
                    <p>
                      La frustración crece ante tratamientos fríos. <br />
                    </p>
                  </li>
                   <li className="flex text-left text-justify">
                    <p>
                      Tienes la sensación de estar sola.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Versión Móvil - NUEVA IMPLEMENTACIÓN */}
  <div className="md:hidden relative overflow-hidden p-2">
          
          {/* Imagen decorativa de fondo */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-50">
            <Image
              src="/images/mujer_2x.webp"
              alt="Decorativo"
              width={500}
              height={500}
              className="object-contain mt-40"
            />
          </div>
          
          {/* Contenido principal */}
          <div className="font-montserrat-heavy relative z-10 text-center">

            {/* Título con efecto de brillo */}
            <div className="mb-6">
              <h2 className="text-2xl animate-fade-in mb-2">
                <span className="text-[#F0C260]">
                  CADA PRUEBA NEGATIVA
                </span>
              </h2>
              <div className="text-3xl font-black text-[#8B5A96]">
                DUELE
              </div>
            </div>
            
            {/* Cards con efectos glassmorphism */}
            <div className="font-montserrat-heavy space-y-3 p-4">
              <div className="bg-white/20 backdrop-blur-xs rounded-2xl p-4 shadow-xl animate-slide-up delay-100 transform md:hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center space-x-3">
                  <div className="text-3xl w-12 h-12 flex items-center justify-center drop-shadow-lg">⏰</div>
                  <div className="text-left flex-1">
                      <p className="text-[#8B5A96] font-bold text-md">El reloj biológico</p>
                    <p className="text-[#FFE082] text-md font-semibold drop-shadow-[0_0_5px_#8B5A96]">avanza inexorablemente</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/20 backdrop-blur-xs rounded-2xl p-4 shadow-xl animate-slide-up delay-100 transform md:hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center space-x-3">
                  <div className="text-3xl w-12 h-12 flex items-center justify-center drop-shadow-lg">😔</div>
                  <div className="text-left flex-1">
                    <p className="text-[#8B5A96] font-bold text-md">La frustración crece</p>
                    <p className="text-[#FFE082] text-md font-semibold drop-shadow-[0_0_5px_#8B5A96]">ante tratamientos fríos</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/20 backdrop-blur-xs rounded-2xl p-4 shadow-xl animate-slide-up delay-100 transform md:hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center space-x-3">
                  <div className="text-3xl w-12 h-12 flex items-center justify-center drop-shadow-lg">💔</div>
                  <div className="text-left flex-1">
                    <p className="text-[#8B5A96] font-bold text-md">Sensación de estar sola</p>
                    <p className="text-[#FFE082] text-md font-semibold drop-shadow-[0_0_5px_#8B5A96]">en este difícil camino</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple/20 backdrop-blur-xl rounded-2xl px-6 py-4 shadow-xl transform transition-all duration-300">
                <span className="text-[#8B5A96] font-black text-lg drop-shadow-[0_0_5px_#8B5A96]">
                 NO ESTÁS SOLA <br /> EN ESTE VIAJE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}