'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Contenido premium para clínica de fertilidad de clase mundial
  const slides = [
    {
      src: "/images/bebe1.jpeg",
      alt: "Nuevo bebé",
      category: "ÉXITO",
      title: "Familias creadas",
      subtitle: "Nuestros resultados hablan por sí solos",
      stats: "",
      cta: "Ver testimonios"
    },
    {
      src: "/images/mujer_3.png", 
      alt: "Tecnología avanzada",
      category: "INNOVACIÓN",
      title: "Tecnología de vanguardia mundial",
      subtitle: "Equipos de última generación para mejores resultados",
      stats: "10+ años de experiencia",
      cta: "Conocer tecnología"
    },
    {
      src: "/images/familia.png",
      alt: "Equipo médico",
      category: "EXCELENCIA",
      title: "Especialistas reconocidos internacionalmente",
      subtitle: "El mejor equipo médico de fertilidad",
      stats: "Especialistas certificados",
      cta: "Conocer equipo"
    },
    {
      src: "/images/mama_red.webp",
      alt: "Investigación",
      category: "CIENCIA",
      title: "Investigación e innovación constante",
      subtitle: "Liderando el futuro de la medicina reproductiva",
      stats: "",
      cta: "Ver investigación"
    }
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-scroll elegante cada 6 segundos
  useEffect(() => {
    if (!mounted) return;
    
    const interval = setInterval(() => {
      handleSlideChange((currentIndex + 1) % slides.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [mounted, currentIndex, slides.length]);

  // Función para cambiar slide con transición suave
  const handleSlideChange = (newIndex: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(newIndex);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  // Navegación
  const nextSlide = () => handleSlideChange((currentIndex + 1) % slides.length);
  const prevSlide = () => handleSlideChange((currentIndex - 1 + slides.length) % slides.length);

  // Touch events para móvil
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  if (!mounted) return null;

  const currentSlide = slides[currentIndex];

  return (
    <section id="carousel" className="relative bg-white py-0 md:py-5 md:py-32 overflow-hidden">
      {/* Background premium con patrón médico sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#8B5A96]/10 to-transparent" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-l from-[#724496]/10 to-transparent" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        {/* Header de la sección */}
        <div className="text-center mb-8">
            <div className="mt-8 bg-purple/20 backdrop-blur-xl rounded-2xl md:max-w-[300px] mx-auto px-4 py-2 shadow-md transition-all duration-300 tracking-wide uppercase mb-4 w-full">
            <span className="text-[#8B5A96] font-bold text-lg">
            15  AÑOS CREANDO LATIDOS               
            </span>
          </div>
          <h2 className="mt-8 font-montserrat-heavy text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Líderes en <br />
            <span className="text-[#8B5A96]"> Medicina Reproductiva</span>
          </h2>
          <p className="font-futura text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Combinamos experiencia, tecnología de vanguardia y un enfoque humano para hacer realidad tu sueño de formar una familia
          </p>
        </div>

        {/* Carrusel principal */}
        <div className="relative">
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-16 items-center min-h-[600px]">
              {/* Contenido del slide */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center px-3 py-1 bg-[#FFE082]/20 rounded-full">
                    <span className="text-[#8B5A96] text-sm font-semibold tracking-wide uppercase">
                      {currentSlide.category}
                    </span>
                  </div>
                  
                  <h3 className="font-montserrat-heavy text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    {currentSlide.title}
                  </h3>
                  
                  <p className="font-futura text-xl text-gray-600 leading-relaxed">
                    {currentSlide.subtitle}
                  </p>
                </div>

                {/* Estadística destacada */}
                <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-[#8B5A96]/5 to-[#724496]/5 rounded-2xl border border-[#8B5A96]/10">
                  <div className="w-12 h-12 bg-[#8B5A96] rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-montserrat-heavy text-2xl font-bold text-[#8B5A96]">
                      {currentSlide.stats}
                    </div>
                    <div className="font-futura text-sm text-gray-500">
                      Resultados comprobados
                    </div>
                  </div>
                </div>

              </div>

              {/* Imagen del slide */}
              <div className="relative">
                <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={currentSlide.src}
                    alt={currentSlide.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-all duration-800"
                    loading={currentIndex === 0 ? "eager" : "lazy"}
                    priority={currentIndex === 0}
                  />
                  {/* Overlay sutil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
                
                {/* Elementos decorativos */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#FFE082]/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#8B5A96]/20 rounded-full blur-2xl" />
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden">
            <div 
              className="relative"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Imagen móvil */}
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl mb-8">
                <Image
                  src={currentSlide.src}
                  alt={currentSlide.alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  loading={currentIndex === 0 ? "eager" : "lazy"}
                  priority={currentIndex === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Contenido superpuesto en móvil */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full mb-3">
                    <span className="text-xs font-semibold tracking-wide uppercase">
                      {currentSlide.category}
                    </span>
                  </div>
                  <h3 className="font-montserrat-heavy text-2xl font-bold mb-2 leading-tight">
                    {currentSlide.title}
                  </h3>
                  <p className="font-futura text-sm opacity-90 mb-3">
                    {currentSlide.subtitle}
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-[#FFE082] rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <span className="font-semibold text-[#FFE082]">{currentSlide.stats}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Controles de navegación */}
          <div className="flex items-center justify-between mt-12">
            {/* Botón anterior */}
        

            {/* Indicadores de progreso premium */}
            <div className="flex items-center space-x-5 mx-auto">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideChange(index)}
                  disabled={isTransitioning}
                  className={`relative transition-all duration-500 disabled:opacity-50 ${
                    index === currentIndex 
                      ? 'w-12 h-5 bg-[#F0C260] rounded-full' 
                      : 'w-6 h-5 bg-gray-300 rounded-full hover:bg-[#F0C260]/50'
                  }`}
                >
                  {index === currentIndex && (
                    <div className="absolute inset-0 bg-[#F0C260] rounded-full animate-pulse opacity-75" />
                  )}
                </button>
              ))}
            </div>

          </div>

        </div>

        {/* Trust indicators */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-5 font-montserrat-heavy">
          <div className="space-y-2">
            <div className="md:text-3xl text-xl  font-bold text-[#8B5A96]">15+</div>
            <div className="text-sm text-gray-600">Años de experiencia</div>
          </div>
          <div className="space-y-2">
            <div className="md:text-3xl text-xl  font-bold text-[#8B5A96]">Miles de</div>
            <div className="text-sm text-gray-600">Familias creadas</div>
          </div>
          <div className="space-y-2">
            <div className="md:text-3xl text-xl font-bold text-[#8B5A96]">Reconocidos</div>
            <div className="text-sm text-gray-600">A nivel mundial</div>
          </div>
          <div className="space-y-2">
            <div className="md:text-3xl text-xl  font-bold text-[#8B5A96]">Especialistas</div>
            <div className="text-sm text-gray-600">Certificados</div>
          </div>
        </div>
      </div>
    </section>
  );
}
