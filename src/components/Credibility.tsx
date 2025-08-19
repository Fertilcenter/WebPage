'use client'
import Image from "next/image";

export default function Credibility() {
  return (
    <section className="bg-[#f6f2fa] md:mt-0 mt-5 md:py-5 md:px-4">
 
      <div className="max-w-6xl md:w-[90%] xl:w-[90%] mx-auto md:px-0">
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
          <div className="font-montserrat-heavy hidden md:flex items-start justify-center gap-10 md:mt-8">
            {/* Corazón morado más grande y texto debajo */}
            <div className="flex flex-col flex flex-col items-center">
              <div className="md:mb-5 absolute rounded-full flex items-center justify-center">
                <Image
                  src="/images/corazon_obscuro.png"
                  alt="Ícono corazón"
                  width={120}
                  height={120}
                  className="animate-heartbeat"
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

        {/* Caja principal (desktop) - Rediseñada con estilo de Heartbeat */}
        <div className="hidden md:block relative group">
          <div className="rounded-3xl bg-gradient-to-r from-[#8B5A96] via-[#7d4fa3] to-[#6a3d8e] p-[1px]">
            <div className="min-h-[400px] w-full rounded-[calc(1.5rem-1px)] bg-gradient-to-br from-[#7d4fa3]/80 via-[#6f4498]/75 to-[#5a307e]/80 backdrop-blur-sm relative">
              {/* Overlays decorativos */}
              <div className="pointer-events-none absolute -top-10 -right-10 w-56 h-56 rounded-full bg-[#FFE082]/10 blur-2xl mix-blend-screen" />
              <div className="pointer-events-none absolute bottom-[-60px] left-[-40px] w-72 h-72 rounded-full bg-[#8B5A96]/40 blur-3xl opacity-70" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(255,224,130,0.12),transparent_60%)]" />

              {/* Imagen pegada al fondo */}
              <Image
                src="/images/xmama.webp"
                alt="Fondo"
                width={500}
                height={700}
                className="absolute bottom-0 right-0 translate-x-20
               object-contain pointer-events-none select-none 
               drop-shadow-[0_0_25px_rgba(0,0,0,0.45)] z-20 -scale-x-100 h-full"
                loading="lazy"
              />
              
              {/* Contenido texto */}
              <div className="relative z-10 px-20 py-12 mr-[35%]">
                <h2 className="font-montserrat-heavy text-4xl leading-tight tracking-tight text-white mb-8">
                  <span className="block">
                    <span className="bg-gradient-to-r from-[#FFE082] via-[#F0C260] to-[#FFE082] bg-clip-text text-transparent drop-shadow-[0_0_5px_#8B5A96]">
                      CIENCIA AVANZADA
                    </span>
                    <br />
                    <span className="text-[#FFE082]">
                      + EMPATÍA HUMANA
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-[#FFE082] via-[#F0C260] to-[#FFE082] bg-clip-text text-transparent drop-shadow-[0_0_5px_#8B5A96]">
                      = RESULTADOS REALES
                    </span>
                  </span>
                </h2>
                

                
                <ul className="space-y-1 mt-5 text-2xl text-white font-montserrat-heavy leading-snug">
                  <li className="flex text-left">
                    <p>
                      - Método único<br />
                    </p>
                  </li>
                  <li className="flex text-left">
                    <p>
                      - Medicina Reproductiva<br />
                    </p>
                  </li>
                  <li className="flex text-left">
                    <p>
                      - Acompañamiento emocional<br />
                    </p>
                  </li>
                  <li className="flex text-left">
                    <p>
                      - Potenciamos resultados
                    </p>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>

        {/* Versión Móvil - Sin cambios */}
        <div className="md:hidden relative p-2 overflow-hidden bg-gradient-to-b from-[#F6F2FA] to-[#926CB2] ">
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
          </div>
        </div>
      </div>
    </section>
  );
}