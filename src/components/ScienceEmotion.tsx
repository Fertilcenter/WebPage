'use client'
import Image from "next/image";

export default function ScienceEmotion() {
  return (
    <section className="bg-gradient-to-t from-[#F6F2FA] to-[#926CB2] md:py-0">
      {/* Versión Desktop */}
      <div className="hidden md:block px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Contenido de texto */}
          <div className="text-left">
            <div className="mb-6">
              <Image
                src="/images/logotipo_blanco.png"
                alt="Fertilcenter logo"
                width={160}
                height={45}
                style={{ width: 'auto', height: 'auto' }}
              />
            </div>
            
            <h3 className="text-4xl font-montserrat-heavy font-bold text-white mb-6 leading-tight">
              NO ES SOLO CIENCIA<br />
              NO ES SOLO EMOCIÓN<br />
              <span className="text-[#FFE082]">ES LA FUSIÓN DE AMBAS</span>
            </h3>
            
            <div className="space-y-4">
              <p className="text-base font-futura text-white/90 leading-relaxed max-w-md">
                Cada día sin actuar es un día menos para abrazar la familia que mereces.
              </p>
              
              <p className="text-lg font-montserrat-heavy font-bold text-white">
                DONDE TUS SUEÑOS APRENDEN A LATIR.
              </p>
            </div>
          </div>

          {/* Imagen de la familia */}
          <div className="flex justify-center">
            <div className="relative">
              <Image
                src="/images/familia.png"
                alt="Familia feliz"
                width={900}
                height={900}
                className="object-contain drop-shadow-2xl"
                loading="lazy"
                style={{ width: 'auto', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Versión Móvil - Estilo similar a Credibility */}
           <div className="md:hidden relative p-2 overflow-hidden ">
        {/* Imagen decorativa de fondo - ENORME */}
            <div className="absolute inset-0 flex items-center justify-center opacity-50 z-0">
          <Image
            src="/images/familia.png"
            alt="Decorativo"
            width={600}
            height={600}
            className="object-contain"
          />
        </div>
        
        {/* Contenido principal */}
        <div className="font-montserrat-heavy relative z-10 text-center p-4">
          <div className="mb-6 mx-auto mt-3">
                <Image
                  src="/images/logotipo_blanco.png"
                  alt="Fertilcenter logo"
                  width={200}
                  height={50}
                  className="drop-shadow-lg mx-auto"
                  style={{ width: 'auto', height: 'auto' }}
                />
              </div>
              
              <h3 className="text-2xl lg:text-2xl font-montserrat-heavy font-bold mb-6 leading-tight">
                <span className="text-white">NO ES SOLO CIENCIA</span><br />
                <span className="text-white">NO ES SOLO EMOCIÓN</span><br />
                <span className="text-[#FFE082]">ES LA FUSIÓN DE AMBAS</span>
              </h3>
          
          {/* Contenido de texto */}
          <div className="space-y-3">
            <div className="p-4 mb-5">
              <p className="text-2xl font-futura font-bold  drop-shadow-[0_0_20px_#8B5A96] text-white">
                Actúa hoy <br /> <span className="text-3xl text-[#FFE082]">Abraza más fuerte mañana</span>
              </p>
            </div>
            
              {/* Badge de esperanza - MÁS PROMINENTE */}
                <div className="transform hover:scale-105 transition-all duration-500">
                <div className="bg-purple/20 backdrop-blur-xl  rounded-2xl px-6 py-4 shadow-xl transform transition-all duration-300 ">

              {/* Animación de partículas */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-4 left-6 w-2 h-2 bg-[#FFE5B4] rounded-2xl animate-pulse"></div>
                <div className="absolute top-12 right-8 w-1 h-1 bg-white rounded-2xl animate-ping"></div>
                <div className="absolute bottom-6 left-12 w-1.5 h-1.5 bg-[#FFE082] rounded-2xl animate-bounce"></div>
              </div>
              
              <div className="text-center relative z-10">
                <span className="text-[#8B5A96] font-black text-xl leading-tight tracking-wide">
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