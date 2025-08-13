'use client'
import Image from "next/image";

export default function StepCta() {
  const openWhatsApp = () => {
    window.open('https://api.whatsapp.com/send?phone=524499993412&text=Hola%20quisiera%20saber%20m%C3%A1s%20informaci%C3%B3n%20de%20sus%20servicios,%20as%C3%AD%20como%20donde%20puedo%20agendar%20cita.', '_blank');
  };

  return (
    <section className="bg-[#f6f2fa] md:py-10 md:px-4">
      <div className="max-w-5xl mx-auto md:px-0">
        {/* Caja principal con fondo */}
        <div className="md:rounded-3xl relative overflow-hidden">
          
          {/* Versión Desktop */}
          <div className="hidden md:block bg-gradient-to-r from-[#8B5A96] to-[#7d4fa3]">
            <div className="absolute right-20 top-0 bottom-0">
              <Image
              src="/images/mujer_3.png"
                alt="Fondo"
                width={400}
                height={500}
                className="object-cover object-center"
                loading="lazy"             
                />
            </div>
            <div className="relative z-10 p-6 min-h-[200px]">
              <div className="w-full">
                <h4 className="text-xl font-bold mb-3 leading-tight">
                  <span className="font-montserrat-heavy text-white">¿LISTOS PARA DAR</span><br />
                  <span className="text-[#FFE082]">EL PRIMER PASO?</span>
                </h4>
                
                <div className="font-montserrat-heavy text-sm text-white space-y-1">
                  <p className="text-white mb-1">Tu primera consulta incluye:</p>
                  <p><span className="text-[#FFE082] font-bold">• Prediagnóstico claro y completo</span></p>
                  <p><span className="text-[#FFE082] font-bold">• Plan Personalizado de potenciación</span></p>
                  <p><span className="text-[#FFE082] font-bold">• Apoyo emocional desde el primer momento</span></p>
                </div>
                              
              <div className="absolute bottom-4 right-4 z-20">
                <button
                  onClick={openWhatsApp}
                  className="group inline-flex items-center justify-center px-6 py-3 bg-[#FFE082] hover:bg-[#FFD700] text-[#8B5A96] font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300  hover:border-[#8B5A96]/40"
                >
                  <span className="mr-2">TU MILAGRO AQUÍ</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
              </div>

            </div>
          </div>

          {/* Versión Móvil */}
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
                    className="mt-6 bg-yellow-200/20 backdrop-blur-xl rounded-2xl px-6 py-4 shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                <span className="text-[#FFE5B4] font-black text-xl drop-shadow-md">
                TU MILAGRO AQUÍ              
                </span>
              </button>
              </div>
              

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}