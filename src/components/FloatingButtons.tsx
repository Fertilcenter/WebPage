'use client'
import Image from "next/image";
import { useState, useEffect } from "react";

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = () => {
    window.open('https://api.whatsapp.com/send?phone=524499993412&text=Hola%20quisiera%20saber%20m%C3%A1s%20informaci%C3%B3n%20de%20sus%20servicios,%20as%C3%AD%20como%20donde%20puedo%20agendar%20cita.', '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3">
      {/* Botón Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-7 h-7 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center backdrop-blur-sm bg-white/20 backdrop-blur-xs"
          aria-label="Ir al inicio"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="#8B5A96" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
        </button>
      )}

      {/* Botón WhatsApp */}
      <button
        onClick={openWhatsApp}
        className="w-7 h-7 bg-[#25D366] hover:bg-[#20c55b] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center backdrop-blur-sm"
        aria-label="Contactar por WhatsApp"
      >
        <Image
          src="/images/whatsapp.png"
          alt="WhatsApp"
          width={32}
          height={32}
          className="drop-shadow-sm"
        />
      </button>
    </div>
  );
}
