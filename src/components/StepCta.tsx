'use client'
import Image from "next/image";

export default function StepCta() {
  const openWhatsApp = () => {
    window.open(
      'https://api.whatsapp.com/send?phone=524499993412&text=Hola%20quisiera%20agendar%20una%20cita,%20me%20puede%20dar%20informes%20por%20favor!.',
      '_blank'
    )
  };

  return (
    <section className="bg-[#f6f2fa] md:py-10 md:px-4">
      <div className="max-w-6xl md:w-[90%] mx-auto md:px-0">
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
                src="/images/mujer_3.png"
                alt="Fondo"
                width={700}
                height={700}
                className="absolute bottom-0 right-0 translate-x-20
               object-contain pointer-events-none select-none 
               drop-shadow-[0_0_25px_rgba(0,0,0,0.45)] z-20"
                loading="lazy"
              />
              
              {/* Contenido texto */}
              <div className="relative z-10 px-6 py-12 mr-[35%]">
                <h2 className="font-montserrat-heavy text-4xl leading-tight tracking-tight text-white mb-8">
                  <span className="block">
                    <span className="bg-gradient-to-r from-[#FFE082] via-[#F0C260] to-[#FFE082] bg-clip-text text-transparent drop-shadow-[0_0_5px_#8B5A96]">
                      ¿LISTOS PARA DAR
                    </span>
                    <br />
                    <span className="text-[#FFE082]">
                      EL PRIMER PASO?
                    </span>
                  </span>
                </h2>
                
                <ul className="space-y-4">
                  <li className="flex text-left text-justify">
                    <p className="text-2xl text-white font-montserrat-heavy leading-snug">
                      Tu primera consulta incluye:
                    </p>
                  </li>
                </ul>
                
                <ul className="space-y-1 mt-5 text-xl text-white font-montserrat-heavy leading-snug">
                  <li className="flex text-left text-justify">
                    <p>
                      • Prediagnóstico claro y completo<br />
                    </p>
                  </li>
                  <li className="flex text-left text-justify">
                    <p>
                      • Plan Personalizado de potenciación<br />
                    </p>
                  </li>
                  <li className="flex text-left text-justify">
                    <p>
                      • Apoyo emocional desde el primer momento
                    </p>
                  </li>
                </ul>

                {/* Botón CTA */}
                <div className="mt-8">
                  <button
                    onClick={openWhatsApp}
                    className="group inline-flex items-center justify-center px-6 py-3 bg-[#FFE082] hover:bg-[#FFD700] text-[#8B5A96] font-bold text-2xl rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:border-[#8B5A96]/40"
                  >
                    <span className="mr-4">TU MILAGRO AQUÍ</span>
                    <Image
                      src="/images/whatsapp.png"
                      alt="WhatsApp"
                      width={30}
                      height={30}
                      className=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Versión Móvil - Sin cambios */}
        <div className="md:hidden relative p-6 overflow-hidden min-h-screen">
          
          {/* Imagen decorativa de fondo que abarca todo el contenedor */}
          <div className="absolute inset-0 flex items-center justify-center opacity-40 z-0">
            <Image
              src="/images/mujer_3.png"
              alt="Decorativo"
              fill
              sizes="100vw"
              className="object-cover object-center"
              loading="lazy"
            />
          </div>
          
          {/* Contenido principal */}
          <div className="font-montserrat-heavy relative z-10 text-center">

            {/* Título con efecto de brillo */}
            <div className="mb-6">
              <h2 className="text-2xl animate-fade-in mb-2 drop-shadow-lg">

                <span className="text-[#F0C260]">
                  ¿LISTOS PARA DAR
                </span>
              </h2>
              <div className="text-3xl font-black text-[#8B5A96]">
                EL PRIMER PASO?
              </div>
            </div>
            
            {/* Cards con efectos glassmorphism */}
            <div className="font-montserrat-heavy space-y-3">
              <div className="bg-white/20 backdrop-blur-xs rounded-2xl p-4 shadow-xl animate-slide-up delay-100 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center space-x-3">
                  <div className="text-3xl w-12 h-12 flex items-center justify-center drop-shadow-lg">🔍</div>
                  <div className="text-left flex-1">
                    <p className="text-[#8B5A96] font-bold text-md ">Prediagnóstico completo</p>
                    <p className="text-[#FFE082] text-md font-semibold drop-shadow-[0_0_5px_#8B5A96]">Evaluación profesional</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/20 backdrop-blur-xs rounded-2xl p-4 shadow-xl animate-slide-up delay-200 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center space-x-3">
                  <div className="text-3xl w-12 h-12 flex items-center justify-center drop-shadow-lg">📋</div>
                  <div className="text-left flex-1">
                    <p className="text-[#8B5A96] font-bold text-md ">Plan Personalizado</p>
                    <p className="text-[#FFE082] text-md font-semibold drop-shadow-[0_0_5px_#8B5A96]">Potenciación de factores</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/20 backdrop-blur-xs rounded-2xl p-4 shadow-xl animate-slide-up delay-300 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center space-x-3">
                  <div className="text-3xl w-12 h-12 flex items-center justify-center drop-shadow-lg">💝</div>
                  <div className="text-left flex-1">
                    <p className="text-[#8B5A96] font-bold text-md ">Apoyo emocional</p>
                    <p className="text-[#FFE082] text-md font-semibold drop-shadow-[0_0_5px_#8B5A96]">Desde el primer momento</p>
                  </div>
                </div>
              </div>
              {/* Botón CTA */}
              <button 
                onClick={openWhatsApp}
                className="group inline-flex items-center justify-center px-10 py-3 bg-[#FFE082] hover:bg-[#FFD700] text-[#8B5A96] font-bold text-2xl rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:border-[#8B5A96]/40"
              >
                <span className="text-[#8B5A96] mt-1">
                  TU MILAGRO AQUÍ              
                </span>
                                <Image
                  src="/images/whatsapp.png"
                  alt="WhatsApp"
                  width={30}
                  height={30}
                  className="ml-5"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}