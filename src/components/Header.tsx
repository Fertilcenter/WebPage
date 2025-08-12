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
            style={{ width: 'auto', height: 'auto' }}
            priority
          />
          <Image
            src="/images/logofertil.png"
            alt="Fertilcenter"
            width={140}
            height={92}
            className="hidden lg:block drop-shadow-md"
            style={{ width: 'auto', height: 'auto' }}
            priority
          />
        </div>

        {/* Navegación */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-futura">
          <button 
            onClick={() => scrollToSection('inicio')}
            className="text-[#FFE082] hover:text-white px-5 py-2 rounded-xl font-medium transition-all duration-300 hover:drop-shadow-lg border border-transparent hover:border-white/20"
          >
            Inicio
          </button>
          <button 
            onClick={() => scrollToSection('diferencia')}
            className="text-[#FFE082] hover:text-white px-3 py-2 rounded-xl font-medium transition-all duration-300 hover:drop-shadow-lg border border-transparent hover:border-white/20"
          >
            Diferencia
          </button>
          <button 
            onClick={() => scrollToSection('metodo')}
            className="text-[#FFE082] hover:text-white px-3 py-2 rounded-xl font-medium transition-all duration-300 hover:drop-shadow-lg border border-transparent hover:border-white/20"
          >
            Método
          </button>
          <button 
            onClick={() => scrollToSection('contacto')}
            className="bg-gradient-to-r from-[#8B5A96] to-[#B683C4] text-[#FFE082] px-4 py-2 rounded-xl hover:from-[#B683C4] hover:to-[#8B5A96] transition-all duration-300 font-medium shadow-lg hover:shadow-xl backdrop-blur-xs border border-white/15 hover:scale-105"
          >
            Contacto
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
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-250 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
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
              className="w-full text-center text-[#FFE082] px-4 py-3 rounded-2xl font-medium transition-all duration-300 hover:drop-shadow-lg border border-transparent hover:border-white/20 font-futura text-sm"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('diferencia')}
              className="w-full text-center text-[#FFE082] px-4 py-3 rounded-2xl font-medium transition-all duration-300 hover:drop-shadow-lg border border-transparent hover:border-white/20 font-futura text-sm"
            >
              Diferencia
            </button>
            <button 
              onClick={() => scrollToSection('metodo')}
              className="w-full text-center text-[#FFE082] px-4 py-3 rounded-2xl font-medium transition-all duration-300 hover:drop-shadow-lg border border-transparent hover:border-white/20 font-futura text-sm"
            >
              Método
            </button>
            <div className="pt-2">
              <button 
                onClick={() => scrollToSection('contacto')}
                className="w-full bg-gradient-to-r from-[#8B5A96] to-[#B683C4] text-white px-4 py-3 rounded-2xl hover:from-[#B683C4] hover:to-[#8B5A96] transition-all duration-300 font-medium shadow-lg hover:shadow-xl backdrop-blur-sm border border-white/15 font-futura text-sm hover:scale-105"
              >
                Contacto
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}