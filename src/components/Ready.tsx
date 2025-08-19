'use client'
import Image from "next/image";

export default function Credibility() {
  const openWhatsApp = () => {
    window.open(
      'https://api.whatsapp.com/send?phone=524499993412&text=Hola%20quisiera%20agendar%20una%20cita,%20me%20puede%20dar%20informes%20por%20favor!.',
      '_blank'
    )
  };

  return (
    <section className="bg-[#f6f2fa] md:px-4 md:py-0 py-5">
 
      <div className="max-w-5xl mx-auto  md:px-0">
        {/* Título principal con ícono */}
        <div className="text-center mb-8">
          {/* Versión móvil */}
          <div className=" flex flex-col items-center gap-3 md:hidden">

                        {/* Corazón abajo en móvil */}
            <div className="relative z-10 font-montserrat-heavy flex flex-col flex flex-col items-center">
              <div className=" absolute rounded-full flex items-center justify-center">
                <Image
                  src="/images/corazon_obscuro.png"
                  alt="Ícono corazón"
                  width={200}
                  height={200}
                  className="animate-heartbeat px-12"
                />
              </div>
              <p className="mt-5 text-2xl font-extrabold text-[#F0C260] text-center">
                ¿ESTÁS LISTA PARA DECIRLE <br />
              <span className="text-[#8B5A96]">SÍ A TU SUEÑO?</span>

              </p>
            </div>
            {/* Texto aAB en móvil */}
            <div className="relative z-10 text-left">
              <h3 className="mt-10 text-2xl md:text-3xl font-bold text-[#8B5A96] leading-tight text-center drop-shadow-sm p-2">
                  Imagina el día en que escuches por primera vez a tu bebé. <br /> Esa emoción existe y está más cerca de lo que crees.
              </h3>
            </div>
              <button 
                onClick={openWhatsApp}
                className="group inline-flex items-center justify-center px-10 py-3 bg-[#FFE082] hover:bg-[#FFD700] text-[#8B5A96] font-bold text-2xl rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:border-[#8B5A96]/40"
              >
                <span className="text-[#8B5A96] mt-1">
                  INICIA TU LATIDO            
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

          {/* Versión desktop */}
          <div className="font-montserrat-heavy hidden md:flex items-start justify-center gap-8">
            {/* Corazón morado más grande y texto debajo */}
            <div className="flex flex-col flex flex-col items-center">
              <div className=" absolute rounded-full flex items-center justify-center">
                <Image
                  src="/images/corazon_obscuro.png"
                  alt="Ícono corazón"
                  width={120}
                  height={120}
                  className="animate-heartbeat"
                />
              </div>
              <p className="mt-16 text-lg font-bold text-[#8B5A96] text-center">
                ¿ESTÁS LISTA PARA DECIRLE <br />SÍ A TU SUEÑO?
              </p>
            </div>

            {/* Texto a la derecha del corazón */}
            <div className="text-left">
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#8B5A96] leading-tight">
                  Imagina el día en que escuches por primera vez a tu bebé. <br /> Esa emoción existe y está más cerca de lo que crees.
              </h3>
            </div>
                      <div className="relative z-20">
              <button 
                onClick={openWhatsApp}
                className="group inline-flex items-center justify-center px-10 py-3 bg-[#FFE082] hover:bg-[#FFD700] text-[#8B5A96] font-bold text-2xl rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:border-[#8B5A96]/40"
              >
                <span className="text-[#8B5A96] mt-1">
                  AGENDA TU CONSULTA GRATIS           
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