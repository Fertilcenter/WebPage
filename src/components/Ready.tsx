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
              <div className="relative z-10">
                <a
                  href="#milagro"
                  className="inline-block mt-8 bg-gradient-to-r from-yellow-200/60 via-yellow-300/70 to-yellow-200/60 backdrop-blur-lg border-2 border-yellow-300/40 rounded-2xl px-8 py-4 shadow-2xl transform transition-all duration-500 hover:scale-110 hover:shadow-yellow-200/50 hover:backdrop-blur-xl"
                >
                  <span className="text-[#8B5A96] font-black text-lg drop-shadow-md">INICIA TU LATIDO</span>
                </a>
              </div>

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
              className="bg-gradient-to-r from-yellow-200/60 via-yellow-300/70 to-yellow-200/60 backdrop-blur-lg border-2 border-yellow-300/40 text-[#8B5A96] px-8 py-4 rounded-2xl font-black text-lg shadow-2xl transition-all duration-500 hover:scale-110 hover:shadow-yellow-200/50 hover:backdrop-blur-xl"
            >
              AGENDA TU CONSULTA GRATIS
            </button>
          </div>
          </div>
        </div>

      </div>
    </section>
  );
}