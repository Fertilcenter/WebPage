'use client'
import Image from "next/image";

export default function Heartbeat() {
  return (
    <section className="font-montserrat-heavy relative  md:text-left md:bg-none md:px-4 md:bg-none md:px-4" >
      
      
      <div className="max-w-5xl md: mx-auto md:px-0">
        {/* Título principal con ícono */}
        <div className="text-center md:mt-8">
          {/* Versión móvil */}
          <div className="flex flex-col items-center md:hidden">
            {/* Texto arriba en móvil */}
            <h1 className="mt-12 font-montserrat-heavy text-4xl lg:text-6xl xl:text-7xl text-[#F0C260] mb-6 relative leading-tight px-4">
              BUSCAR UN BEBÉ<br />
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 lg:left-1/2 lg:translate-x-40">
                <Image
                src="/images/corazon_completo.png"
                alt=""
                width={400}
                height={400}
                className="select-none pointer-events-none opacity-30 animate-heartbeat w-[500px] h-[150px] lg:w-[300px] lg:h-[200px]"
                style={{ width: 'auto', height: 'auto' }}
                />
              </div>
            <span className="text-[#8B5A96] font-black">ES UN VIAJE DIFÍCIL</span>
          </h1>
          </div>


        </div>

        {/* Caja principal */}
        <div className="md:rounded-3xl relative overflow-hidden">
          
          {/* Versión Desktop */}
          <div className="hidden md:block bg-gradient-to-r from-[#8B5A96] to-[#7d4fa3]">
            <div className="absolute right-20 top-0 bottom-0">
              <Image
                src="/images/mujer_2.png"
                alt="Fondo"
                width={200}
                height={50}
                className="object-cover object-center -scale-x-100 h-full"
                loading="lazy"
                style={{ width: 'auto', height: 'auto' }}
              />
            </div>
            <div className="relative z-10 p-6 min-h-[200px]">
              <div className="w-full">
                <h4 className="text-xl font-bold mb-3 leading-">
                  <span className="font-montserrat-heavy text-white">CADA PRUEBA NEGATIVA</span><br />
                  <span className="text-white">DUELE Y AUMENTA</span><br />
                  <span className="font-montserrat-heavy text-white font-extrabold">LA INCERTIDUMBRE</span>
                </h4>
                
                <div className="font-montserrat-heavy text-sm text-white space-y-1">
                  <p><span className="text-[#FFE082] font-bold">• El reloj biológico avanza</span></p>
                  <p><span className="text-[#FFE082] font-bold">• La frustración crece ante tratamientos fríos</span></p>
                  <p><span className="text-[#FFE082] font-bold">• Tienes la sensación de estar sola</span></p>
                </div>
              </div>
              
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/30 shadow-xl animate-slide-up delay-300 transform hover:scale-105 transition-all duration-300 absolute bottom-2 right-3 bg-[#FFE082]/80 px-8 py-1">
                <span className="text-[#FFE082] font-montserrat-heavy font-bold ">
                  NO ESTÁS SOLA
                </span>
              </div>
            </div>
          </div>

          {/* Versión Móvil */}
          <div className="md:hidden relative overflow-hidden p-2">
            
            {/* Imagen decorativa de fondo - HASTA ABAJO */}
            <div className="absolute inset-0 flex items-center justify-center opacity-50">
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
                  <span className="text-[#F0C260] ">
                    CADA PRUEBA NEGATIVA
                  </span>
                </h2>
                <div className="text-3xl font-black text-[#8B5A96]">
                  DUELE
                </div>
              </div>
              
              {/* Cards con efectos glassmorphism */}
              <div className="font-montserrat-heavy space-y-3 p-4">
                <div className="bg-white/20 backdrop-blur-xs rounded-2xl p-4 shadow-xl animate-slide-up delay-100 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="text-3xl w-12 h-12 flex items-center justify-center drop-shadow-lg">⏰</div>
                    <div className="text-left flex-1">
                        <p className="text-[#8B5A96] font-bold text-md">El reloj biológico</p>
                      <p className="text-[#FFE082] text-md font-semibold drop-shadow-[0_0_5px_#8B5A96]">avanza inexorablemente</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/20 backdrop-blur-xs rounded-2xl p-4 shadow-xl animate-slide-up delay-100 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="text-3xl w-12 h-12 flex items-center justify-center drop-shadow-lg">😔</div>
                    <div className="text-left flex-1">
                      <p className="text-[#8B5A96] font-bold text-md">La frustración crece</p>
                      <p className="text-[#FFE082] text-md font-semibold drop-shadow-[0_0_5px_#8B5A96]">ante tratamientos fríos</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/20 backdrop-blur-xs rounded-2xl p-4 shadow-xl animate-slide-up delay-100 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="text-3xl w-12 h-12 flex items-center justify-center drop-shadow-lg">💔</div>
                    <div className="text-left flex-1">
                      <p className="text-[#8B5A96] font-bold text-md">Sensación de estar sola</p>
                      <p className="text-[#FFE082] text-md font-semibold drop-shadow-[0_0_5px_#8B5A96]">en este difícil camino</p>
                    </div>
                  </div>
                </div>

                <div className="bg-purple/20 backdrop-blur-xl  rounded-2xl px-6 py-4 shadow-xl transform transition-all duration-300 ">
                <span className="text-[#8B5A96] font-black text-lg drop-shadow-[0_0_5px_#8B5A96]">
                 NO ESTÁS SOLA <br /> EN ESTE VIAJE
                </span>
              </div>
              </div>
              

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}