'use client'
import Image from "next/image";

export default function Method() {
  return (
    <>
      {/* Sección LA DIFERENCIA */}
      <section id="diferencia" className=" py-5 md:py-0 md:mb-5 px-8">
        <div className="font-montserrat-heavy max-w-6xl mx-auto text-center">
          <div>
            <h4 className="font-montserrat-heavy text-3xl md:text-4xl font-bold text-[#8B5A96] mb-6">
              LA DIFERENCIA
            </h4>
            <p className=" mb-6 max-w-4xl mx-auto ">
              Entendemos que cada tratamiento debe ser personalizado, tan único como tú, y a través de la tecnología más innovadora con apoyo psicológico integral que asegura la mejor atención.
            </p>
            <p className="font-bold text-[#8B5A96] text-2xl">
              MÁXIMO POTENCIAL PARA<br />
              <span className="text-[#F0C260]">ALCANZAR EL LATIDO DE TUS SUEÑOS.</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}