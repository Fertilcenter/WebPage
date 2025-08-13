'use client'
import Image from "next/image";

export default function Credibility() {
  return (
    <section className="bg-[#f6f2fa] md:mt-0 mt-5 md:py-5 md:px-4">
 
      <div className="max-w-5xl mx-auto  md:px-0">
        {/* Título principal con ícono */}
        <div className="text-center mb-8">
          {/* Versión móvil */}
          <div className="flex flex-col items-center gap-6 md:hidden">
            {/* Texto arriba en móvil */}
            <p className="font-montserrat-heavy font-extrabold text-[#F0C260] text-2xl leading-tight">
              EN FERTILCENTER<br />
              <span className="text-[#8B5A96]">ENTENDEMOS CADA</span>
              <br />LATIDO DE TU SUEÑO
            </p>
            {/* Corazón abajo en móvil */}
            <div className="font-montserrat-heavy flex flex-col flex flex-col items-center">
              <div className=" absolute rounded-full flex items-center justify-center">
                <Image
                  src="/images/corazon_obscuro.png"
                  alt="Ícono corazón"
                  width={170}
                  height={170}
                  className="animate-heartbeat relative"
                
                />
              </div>
              <p className="mt-20 text-lg font-bold text-[#8B5A96] text-center">
                + DE 2 MIL LATIDOS<br />NOS RESPALDAN
              </p>
            </div>
          </div>

          {/* Versión desktop */}
          <div className="font-montserrat-heavy hidden md:flex items-start justify-center gap-10 md:mt-5">
            {/* Corazón morado más grande y texto debajo */}
            <div className="flex flex-col flex flex-col items-center">
              <div className="md:mb-5 absolute rounded-full flex items-center justify-center">
                <Image
                  src="/images/corazon_obscuro.png"
                  alt="Ícono corazón"
                  width={120}
                  height={120}
                  className="animate-heartbeat"
                  style={{ width: 'auto', height: 'auto' }}
                />
              </div>
              <p className="mt-12 text-lg font-bold text-[#8B5A96] text-center">
                + DE 2 MIL LATIDOS<br />NOS RESPALDAN
              </p>
            </div>

            <p className="font-montserrat-heavy font-extrabold text-[#F0C260] text-2xl leading-tight text-left md:text-3xl md:h-1/2">
              EN FERTILCENTER<br />
              <span className="text-[#8B5A96]">ENTENDEMOS CADA</span>
              <br />LATIDO DE TU SUEÑO
            </p>
          </div>
        </div>

        {/* Caja púrpura principal */}
        <div className="md:rounded-3xl relative overflow-hidden">
          
          {/* Versión Desktop */}
          <div className="hidden md:block bg-gradient-to-r from-[#8B5A96] to-[#7d4fa3]">
            <div className="absolute right-20 top-0 bottom-0">
              <Image
                src="/images/xmama.webp"
                alt="Fondo"
                width={200}
                height={50}

                className="object-cover object-center -scale-x-100 h-full"
                loading="lazy"
              />
            </div>
            <div className="relative z-10 p-6 min-h-[200px]">
              <div className="w-full">
                <h4 className="text-xl font-bold mb-3 leading-tight">
                  <span className="font-montserrat-heavy text-white">CIENCIA AVANZADA</span><br />
                  <span className="text-[#FFE082]">+ EMPATÍA HUMANA</span><br />
                  <span className="font-montserrat-heavy text-white">= RESULTADOS REALES</span>
                </h4>
                
                <div className="font-montserrat-heavy text-sm text-white space-y-1">
                  <p><span className="text-[#FFE082] font-bold ">• Método único</span>.</p>
                  <p><span className="text-[#FFE082] font-bold">• Medicina Reproductiva</span></p>
                  <p><span className="text-[#FFE082] font-bold">• Acompañamiento emocional</span></p>
                  <p><span className="text-[#FFE082] font-bold">• Potenciamos resultados</span></p>
                </div>
              </div>
              
              <div className="bg-white/20 backdrop-blur-xs rounded-2xl p-4 border border-white/30 shadow-xl animate-slide-up delay-300 transform hover:scale-105 transition-all duration-300 absolute bottom-2 right-3 bg-[#FFE082]/80 px-5 py-1">
                <span className="text-[#FFE082] font-montserrat-heavy font-bold drop-shadow-[0_0_5px_#8B5A96]">
                  ¡15 AÑOS<br />CREANDO LATIDOS!
                </span>
              </div>
            </div>
          </div>

          {/* Versión Móvil - Diseño llamativo con imagen decorativa */}
          <div className="md:hidden relative  p-2 overflow-hidden bg-gradient-to-b from-[#F6F2FA] to-[#926CB2] ">

            {/* Imagen decorativa de fondo - ENORME */}
            <div className="absolute inset-0 flex items-center justify-center opacity-60 z-0 md:mt-0 mt-60">
              <Image
                src="/images/xmama.webp"
                alt="Decorativo"
                fill
                className="object-contain"
              />
            </div>
            
            {/* Contenido principal */}
            <div className="font-montserrat-heavy relative z-10 text-center ">

              {/* Título con efecto de brillo */}
              <div className="mb-6 ">
                <h4 className="text-xl font-bold animate-fade-in mb-2">
                  <span className="text-[#F0C260] ">
                    CIENCIA + EMPATÍA
                  </span>
                </h4>
                <div className="text-2xl font-bold text-[#724496] drop-shadow-lg">
                  = RESULTADOS
                </div>
              </div>
              
              {/* Cards con efectos glassmorphism mejorados */}
              <div className="font-montserrat-heavy space-y-3 p-4 ">
                <div className="bg-white/20 backdrop-blur-xs rounded-2xl p-4 shadow-xl animate-slide-up delay-100 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="text-3xl w-12 h-12 flex items-center justify-center drop-shadow-lg">🔬</div>
                    <div className="text-left flex-1">
                      <p className="text-[#8B5A96] font-bold text-md">Método único</p>
                      <p className="text-[#FFE082] text-md font-semibold drop-shadow-[0_0_5px_#8B5A96]">Innovación personalizada</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/20 backdrop-blur-xs rounded-2xl p-4 shadow-xl animate-slide-up delay-200 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="text-3xl w-12 h-12 flex items-center justify-center drop-shadow-lg">⚕️</div>
                    <div className="text-left flex-1">
                      <p className="text-[#8B5A96] font-bold text-md">Medicina Reproductiva</p>
                      <p className="text-[#FFE082] text-md font-semibold drop-shadow-[0_0_5px_#8B5A96]">Tecnología avanzada</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/20 backdrop-blur-xs rounded-2xl p-4  shadow-xl animate-slide-up delay-300 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="text-3xl w-12 h-12 flex items-center justify-center drop-shadow-lg">💝</div>
                    <div className="text-left flex-1">
                      <p className="text-[#8B5A96] font-bold text-md">Acompañamiento emocional</p>
                      <p className="text-[#FFE082] text-md font-semibold drop-shadow-[0_0_5px_#8B5A96]">Apoyo integral</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/20 backdrop-blur-xs rounded-2xl p-4 shadow-xl animate-slide-up delay-400 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="text-3xl w-12 h-12 flex items-center justify-center drop-shadow-lg">✨</div>
                    <div className="text-left flex-1">
                      <p className="text-[#8B5A96] font-bold text-md">Potenciamos resultados</p>
                      <p className="text-[#FFE082] text-md font-semibold drop-shadow-[0_0_5px_#8B5A96]">Máximo éxito</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-yellow-200/20 backdrop-blur-xl rounded-2xl px-6 py-4 shadow-xl transform  transition-all duration-300">
                <span className="text-[#FFE5B4] font-black text-lg drop-shadow-md">
                15 AÑOS CREANDO LATIDOS               
                </span>
              </div>
              </div>
              
              {/* Badge de experiencia - SIN apariencia de botón */}
              {/* Badge de esperanza - MÁS PROMINENTE */}

            </div>
          </div>
          

        </div>
      </div>
    </section>
  );
}