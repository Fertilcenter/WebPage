'use client'
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Cerrar menú después de navegar
  };

  const openWhatsApp = () => {
    window.open('https://api.whatsapp.com/send?phone=524499993412&text=Hola%20quisiera%20saber%20m%C3%A1s%20informaci%C3%B3n%20de%20sus%20servicios,%20as%C3%AD%20como%20donde%20puedo%20agendar%20cita.', '_blank');
    setIsMenuOpen(false); // Cerrar menú después de navegar
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-xs border border-white/15 shadow-xl rounded-full md:rounded-2xl z-50 px-4 md:px-6 py-2 md:py-3 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/5 before:via-white/10 before:to-transparent before:rounded-full md:before:rounded-2xl before:pointer-events-none">
        <div className="flex items-center justify-between gap-4 md:gap-8 relative z-10">
        {/* Logo */}
        <div className="hover:scale-105 transition-all duration-300 hover:drop-shadow-lg">
          <Image
            src="/images/logotipo.png"
            alt="Fertilcenter"
            width={100}
            height={90}
            className="lg:hidden drop-shadow-sm"
            priority
          />
          <Image
            src="/images/logofertil.png"
            alt="Fertilcenter"
            width={140}
            height={92}
            className="hidden lg:block drop-shadow-md"
            priority
          />
        </div>

        {/* Navegación mejorada */}
        <nav className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => scrollToSection('inicio')}
            className="text-gray-700 hover:text-[#8B5A96] px-4 py-2 rounded-xl font-montserrat-heavy text-sm transition-all duration-300 hover:bg-white/20 hover:backdrop-blur-sm border border-transparent hover:border-[#8B5A96]/20 relative group drop-shadow-[0_0_5px_#FFFFFF]"
          >
            <span className="relative">Inicio</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFE082]/10 to-[#8B5A96]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          </button>

          <button 
            onClick={() => scrollToSection('carousel')}
            className="text-gray-700 hover:text-[#8B5A96] px-4 py-2 rounded-xl font-montserrat-heavy text-sm transition-all duration-300 hover:bg-white/20 hover:backdrop-blur-sm border border-transparent hover:border-[#8B5A96]/20 relative group drop-shadow-[0_0_5px_#FFFFFF]"
          >
            <span className="relative z-10">Nosotros</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFE082]/10 to-[#8B5A96]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          </button>

          <button 
            onClick={() => scrollToSection('ebook')}
            className="text-gray-700 hover:text-[#8B5A96] px-4 py-2 rounded-xl font-montserrat-heavy text-sm transition-all duration-300 hover:bg-white/20 hover:backdrop-blur-sm border border-transparent hover:border-[#8B5A96]/20 relative group drop-shadow-[0_0_5px_#FFFFFF]"
          >
            <span className="relative z-10">Ebook</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFE082]/10 to-[#8B5A96]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          </button>
          
          <button 
            onClick={() => scrollToSection('contacto')}
            className="text-gray-700 hover:text-[#8B5A96] px-4 py-2 rounded-xl font-montserrat-heavy text-sm transition-all duration-300 hover:bg-white/20 hover:backdrop-blur-sm border border-transparent hover:border-[#8B5A96]/20 relative group drop-shadow-[0_0_5px_#FFFFFF]"
          >
            <span className="relative z-10">Sucursales</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFE082]/10 to-[#8B5A96]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          </button>
          {/* Botón CTA destacado */}
          <button 
            onClick={openWhatsApp}
            className=" text-white px-3 py-1 rounded-xl hover:from-[#B683C4] hover:via-[#9C6BA9] hover:to-[#8B5A96] transition-all duration-300 font-montserrat-heavy text-xs shadow-lg hover:shadow-xl backdrop-blur-xs  hover:scale-105 "
          >
            <span className="relative flex items-center mx-auto">
              Consulta
            </span>

          </button>
        </nav>

          {/* Botón hamburguesa para móvil */}
          <div className="md:hidden">
            {/* Botón hamburguesa */}
            <button 
              onClick={toggleMenu}
              className="bg-white/5 backdrop-blur-xs border border-white/15 p-2.5 rounded-full shadow-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="w-4 h-4 flex flex-col justify-center items-center relative">
                <span className={`bg-[#8B5A96] block transition-all duration-200 ease-out h-0.5 w-4 rounded-full absolute ${isMenuOpen ? 'rotate-45' : 'translate-y-[-3px]'}`}></span>
                <span className={`bg-[#8B5A96] block transition-all duration-150 ease-out h-0.5 w-4 rounded-full absolute ${isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}></span>
                <span className={`bg-[#8B5A96] block transition-all duration-200 ease-out h-0.5 w-4 rounded-full absolute ${isMenuOpen ? '-rotate-45' : 'translate-y-[3px]'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Menú móvil desplegable */}
      <div className={`fixed inset-0 z-[9998] md:hidden transition-all duration-250 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        {/* Overlay de fondo */}
        <div 
          className={`absolute inset-0 bg-black/30 transition-all duration-200 ${isMenuOpen ? 'opacity-100 backdrop-blur-xs' : 'opacity-0 backdrop-blur-none'}`}
          onClick={() => setIsMenuOpen(false)}
        ></div>
        
        {/* Menú */}
        <div className={`absolute top-16 left-1/2 transform -translate-x-1/2 w-[85%] max-w-xs bg-white/15 backdrop-blur-sm border border-white/20 shadow-2xl rounded-3xl p-4 transition-all duration-250 ease-out before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:via-white/5 before:to-transparent before:rounded-3xl before:pointer-events-none ${isMenuOpen ? 'translate-y-0 scale-100 opacity-100 mt-3' : '-translate-y-2 scale-95 opacity-0'}`}>
          <nav className="relative z-10 space-y-2">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="w-full text-center text-[#FFE082] px-4 py-3 rounded-2xl font-medium transition-all duration-300 hover:drop-shadow-lg border border-transparent hover:border-white/20 font-futura text-base"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('carousel')}
              className="w-full text-center text-[#FFE082] px-4 py-3 rounded-2xl font-medium transition-all duration-300 hover:drop-shadow-lg border border-transparent hover:border-white/20 font-futura text-base"
            >
              Nosotros
            </button>
            <button 
              onClick={() => scrollToSection('ebook')}
              className="w-full text-center text-[#FFE082] px-4 py-3 rounded-2xl font-medium transition-all duration-300 hover:drop-shadow-lg border border-transparent hover:border-white/20 font-futura text-base"
            >
              Ebook
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="w-full text-center text-[#FFE082] px-4 py-3 rounded-2xl font-medium transition-all duration-300 hover:drop-shadow-lg border border-transparent hover:border-white/20 font-futura text-base"
            >
              Sucursales
            </button>
            <div className="pt-2">
              <button 
                onClick={openWhatsApp}
                className="w-full bg-gradient-to-r from-[#8B5A96] to-[#B683C4] text-white px-4 py-3 rounded-2xl hover:from-[#B683C4] hover:to-[#8B5A96] transition-all duration-300 font-medium shadow-lg hover:shadow-xl backdrop-blur-sm border border-white/15 font-montserrat-heavy text-base hover:scale-105"
              >
                Consulta
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}