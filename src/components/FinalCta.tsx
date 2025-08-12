'use client'
import Image from "next/image";
import { useState, useEffect } from "react";

export default function FinalCta() {
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [formToken, setFormToken] = useState('');
  const [honeypot, setHoneypot] = useState(''); // Campo honeypot para detectar bots
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null); // Estado para manejar la ubicación seleccionada

  // Obtener token de seguridad al cargar el componente
  useEffect(() => {
    const getFormToken = async () => {
      try {
        const response = await fetch('/api/get-form-token');
        if (response.ok) {
          const data = await response.json();
          setFormToken(data.token);
        }
      } catch (error) {
        console.error('Error obteniendo token:', error);
      }
    };

    getFormToken();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email, 
          whatsapp, 
          formToken,
          honeypot // Campo honeypot
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSuccess(true);
        setMessage('¡Perfecto! Revisa tu correo, tu eBook está en camino 📧💜');
        setEmail('');
        setWhatsapp('');
        
        // Obtener nuevo token para futuras solicitudes
        const tokenResponse = await fetch('/api/get-form-token');
        if (tokenResponse.ok) {
          const tokenData = await tokenResponse.json();
          setFormToken(tokenData.token);
        }
        
        setTimeout(() => {
          setMessage('');
          setIsSuccess(false);
        }, 8000);
      } else {
        setIsSuccess(false);
        if (response.status === 429) {
          setMessage(data.error || 'Demasiadas solicitudes. Por favor espera un momento e intenta de nuevo.');
        } else {
          setMessage(data.error || 'Hubo un error al enviar el correo. Inténtalo de nuevo.');
        }
      }
    } catch (error) {
      setIsSuccess(false);
      setMessage('Error de conexión. Por favor verifica tu internet e inténtalo de nuevo.');
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Función para manejar la selección de ubicación
  const handleLocationSelect = (location: string) => {
    setSelectedLocation(selectedLocation === location ? null : location);
  };

  return (
    <>
      {/* CTA Principal */}
      <section className="md:py-16 py-7 px-4 bg-gradient-to-br from-[#E8D5F0] via-[#F0E6F7] to-[#E8D5F0] relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          
          {/* Versión Desktop */}
          <div className="hidden md:block">
            <div className="flex items-center justify-between gap-12">
              {/* Contenido izquierdo */}
              <div className="flex-1 text-left">
                <h3 className="text-4xl lg:text-5xl font-bold mb-6">
                  <span className="text-[#8B5A96]">REGÍSTRATE HOY</span><br />
                  <span className="text-[#FFB347]">Y RECIBE UN REGALO</span><br />
                  <span className="text-[#8B5A96]">ESPECIAL PARA TI</span>
                </h3>
                
                <p className="text-[#666] mb-8 text-lg leading-relaxed max-w-md">
                  Historias reales que transformarán tu visión.<br />
                  Consejos claros, prácticos y fáciles de seguir.<br />
                  Inspiración y esperanza renovada para avanzar.
                </p>

                {/* Formulario */}
                <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
                  {/* Campo honeypot - OCULTO para humanos, visible para bots */}
                  <input
                    type="text"
                    name="website"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                  
                  {/* Mensaje de estado */}
                  {message && (
                    <div className={`p-4 rounded-lg text-center font-bold ${
                      isSuccess 
                        ? 'bg-green-100 text-green-800 border border-green-300' 
                        : 'bg-red-100 text-red-800 border border-red-300'
                    }`}>
                      {message}
                    </div>
                  )}
                  
                  <div>
                    <input
                      type="email"
                      placeholder="CORREO"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#8B5A96] text-white placeholder-white/80 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#B683C4]"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="WHATSAPP"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="w-full bg-[#8B5A96] text-white placeholder-white/80 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#B683C4]"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className={`w-full transition-all duration-500 px-8 py-4 rounded-2xl font-black text-lg shadow-2xl ${
                      isLoading 
                        ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-yellow-200/60 via-yellow-300/70 to-yellow-200/60 backdrop-blur-lg border-2 border-yellow-300/40 text-[#8B5A96] hover:scale-110 hover:shadow-yellow-200/50 hover:backdrop-blur-xl'
                    }`}
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        ENVIANDO...
                      </span>
                    ) : (
                      'SOLICITA TU EBOOK TOTALMENTE GRATIS'
                    )}
                  </button>
                </form>
              </div>

              {/* Imagen del libro */}
              <div className="flex-1 flex justify-center items-center">
                  <div className="absolute z-10">
                    <Image
                      src="/images/corazon_obscuro.png"
                      alt=""
                      width={500}
                      height={700}
                      className="select-none pointer-events-none animate-heartbeat"
                    />
                  </div>
                <div className="relative">
                  {/* Libro en primer plano */}
                  <div className="relative z-10">
                    <Image
                      src="/images/libro.png"
                      alt="Ebook Latido 1 - Fertilcenter"
                      width={300}
                      height={500}
                      className="transform hover:rotate-3 transition-transform duration-300 drop-shadow-2xl"
                    />
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Versión Móvil */}
          <div className="md:hidden text-center">
            <h3 className="text-2xl font-bold mb-6">
              <span className="text-[#8B5A96]">REGÍSTRATE HOY</span><br />
              <span className="text-[#FFE5B4] drop-shadow-[0_0_5px_#8B5A96]">Y RECIBE UN REGALO</span><br />
              <span className="text-[#8B5A96]">ESPECIAL PARA TI</span>
            </h3>
            
            <p className="text-[#8B5A96] mb-8 text-md leading-relaxed  drop-shadow-[0_0_5px_#FFE5B4]">
              Historias reales que transformarán tu visión.<br />
              Consejos claros, prácticos y fáciles de seguir.<br />
              Inspiración y esperanza renovada para avanzar.
            </p>

            {/* Imagen del libro móvil */}
            <div className="mb-8 flex justify-center">
              <div className="absolute z-10">
                <Image
                  src="/images/corazon_obscuro.png"
                  alt=""
                  width={350}
                  height={250}
                  className="select-none pointer-events-none opacity-20 animate-heartbeat"
                />
              </div>
              <div className="relative">
                {/* Libro en primer plano */}
                <div className="relative z-10">
                  <Image
                    src="/images/libro.png"
                    alt="Ebook Latido 1 - Fertilcenter"
                    width={200}
                    height={300}
                    className="drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
            {/* Formulario móvil */}
            <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto">
              {/* Campo honeypot - OCULTO */}
              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />
              
              {/* Mensaje de estado móvil */}
              {message && (
                <div className={`p-3 rounded-2xl text-center font-bold text-sm ${
                  isSuccess 
                    ? 'bg-green-100 text-green-800 border border-green-300' 
                    : 'bg-red-100 text-red-800 border border-red-300'
                }`}>
                  {message}
                </div>
              )}
              
              <div className="mt-5 py-5 p-5 rounded-2xl bg-gradient-to-br from-[#B683C4] via-[#9D6BA8] to-[#8B5A96] ">
              <div>
                <input
                  type="email"
                  placeholder="CORREO"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/40 backdrop-blur-xs rounded-2xl p-4 shadow-xl transform hover:scale-105 transition-all duration-300 text-[#8B5A96] font-bold placeholder-[#8B5A96] placeholder:font-bold"
                  required
                  disabled={isLoading}
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="WHATSAPP"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="w-full mt-4 bg-white/40 backdrop-blur-xs rounded-2xl p-4 shadow-xl transform hover:scale-105 transition-all duration-300 text-[#8B5A96] font-bold placeholder-[#8B5A96] placeholder:font-bold"
                  required
                  disabled={isLoading}
                />
              </div>
              </div>
          <div className="relativez-20 animate-heartbeat">  
            <button 
              type="submit" 
              disabled={isLoading}
              className={`transition-all duration-500 px-8 py-4 rounded-2xl font-black text-lg shadow-2xl ${
                isLoading 
                  ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-yellow-200/60 via-yellow-300/70 to-yellow-200/60 backdrop-blur-lg border-2 border-yellow-300/40 text-[#8B5A96] hover:scale-110 hover:shadow-yellow-200/50 hover:backdrop-blur-xl'
              }`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  ENVIANDO...
                </span>
              ) : (
                <>SOLICITA TU EBOOK TOTALMENTE <span className="text-[#8B5A96]">GRATIS</span></>
              )}
            </button>
          </div>
            </form>
          </div>
        </div>
      </section>

      {/* Información de contacto y ubicación */}
      <section id="contacto" className="bg-gradient-to-br from-[#8B5A96] via-[#9D6BA8] to-[#B683C4] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Versión Desktop */}
          <div className="hidden md:block">
            <div className="text-center mb-12">
              <Image
                src="/images/logotipo_blanco.png"
                alt="Fertilcenter logo"
                width={240}
                height={55}
                className="mx-auto mb-8"
              />
              <h4 className="font-montserrat-heavy text-2xl md:text-3xl font-bold text-white mb-8">
                SELECCIONA PARA VER EL MAPA
              </h4>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-[#8B5A96] shadow-xl">
                <h5 className="font-bold text-xl mb-4 text-center">Benjamin de La Mora</h5>
                <p className="mb-3">📍 Benjamin de La Mora 527</p>
                <p className="mb-3">Col del Carmen, 20050 Aguascalientes, Ags.</p>
                <p className="font-bold text-lg mb-4">📞 (449) 999 3412</p>
                <button 
                  onClick={() => handleLocationSelect('benjamin')}
                  className={`w-full font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                    selectedLocation === 'benjamin' 
                      ? 'bg-[#FFE082] text-[#8B5A96] border-2 border-[#8B5A96]' 
                      : 'bg-[#8B5A96] hover:bg-[#7a4f85] text-white'
                  }`}
                >
                  {selectedLocation === 'benjamin' ? 'Ocultar mapa' : 'Ver en mapa'}
                </button>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-[#8B5A96] shadow-xl">
                <h5 className="font-bold text-xl mb-4 text-center">Lomas del Campestre</h5>
                <p className="mb-3">📍 Monte Carlo 113, Lomas del Campestre II</p>
                <p className="mb-3">20119 Aguascalientes, Ags.</p>
                <p className="font-bold text-lg mb-4">📞 (449) 162 8818</p>
                <button 
                  onClick={() => handleLocationSelect('campestre')}
                  className={`w-full font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                    selectedLocation === 'campestre' 
                      ? 'bg-[#FFE082] text-[#8B5A96] border-2 border-[#8B5A96]' 
                      : 'bg-[#8B5A96] hover:bg-[#7a4f85] text-white'
                  }`}
                >
                  {selectedLocation === 'campestre' ? 'Ocultar mapa' : 'Ver en mapa'}
                </button>
              </div>
            </div>

            {/* Mapa seleccionado */}
            {selectedLocation && (
              <div className="mt-8 max-w-4xl mx-auto">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border-2 border-[#FFE082]/50">
                  <h6 className="text-[#8B5A96] font-bold text-lg mb-4 text-center">
                    {selectedLocation === 'benjamin' ? 'Sucursal Benjamin de La Mora' : 'Sucursal Lomas del Campestre'}
                  </h6>
                  <div className="overflow-hidden rounded-xl shadow-lg">
                    {selectedLocation === 'benjamin' ? (
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4304.764618282172!2d-102.3060816!3d21.8886047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429ee8b8b3bea25%3A0xe5be6032ed57954b!2sBenjam%C3%ADn%20de%20La%20Mora%20527%2C%20Col%20del%20Carmen%2C%2020050%20Aguascalientes%2C%20Ags.!5e1!3m2!1ses-419!2smx!4v1754947536236!5m2!1ses-419!2smx"
                        width="100%" 
                        height="400" 
                        style={{border: 0}} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full"
                      />
                    ) : (
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4303.666054809503!2d-102.31841268865283!3d21.924969556310664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429ef7b08109c03%3A0xb8731ab94f5714f4!2sFertil%20Center%20Norte%20Cl%C3%ADnica%20de%20Reproducci%C3%B3n%20en%20Aguascalientes!5e1!3m2!1ses-419!2smx!4v1754947559585!5m2!1ses-419!2smx"
                        width="100%" 
                        height="400" 
                        style={{border: 0}} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full"
                      />
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Versión Móvil */}
          <div className="md:hidden relative overflow-hidden">
            
            {/* Imagen decorativa de fondo */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10 z-0">
              <Image
                src="/images/corazon_completo.png"
                alt="Decorativo"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
            
            {/* Contenido principal */}
            <div className="relative z-10 text-center">
              <Image
                src="/images/logotipo_blanco.png"
                alt="Fertilcenter logo"
                width={200}
                height={45}
                className="mx-auto mb-6"
              />
              
              <h4 className="font-montserrat-heavy text-2xl font-bold text-white mb-8">
                SELECCIONA PARA VER EL MAPA
              </h4>
              
              {/* Cards con efectos glassmorphism */}
              <div className="space-y-4 max-w-sm mx-auto">
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/30 shadow-xl transform transition-all duration-300">
                  <h5 className="text-white font-bold text-lg mb-3">Benjamin de La Mora</h5>
                  <div className="text-left space-y-2 text-white/90">
                    <p className="text-sm">📍 Benjamin de La Mora 527</p>
                    <p className="text-sm">Col del Carmen, 20050 Aguascalientes</p>
                    <p className="font-bold">📞 (449) 999 3412</p>
                  </div>
                  <button 
                    onClick={() => handleLocationSelect('benjamin')}
                    className={`w-full mt-4 font-bold py-2 px-4 rounded-xl transition-all duration-300 ${
                      selectedLocation === 'benjamin' 
                        ? 'bg-white text-[#8B5A96] border-2 border-[#FFE082]' 
                        : 'bg-[#FFE082] hover:bg-[#FFD700] text-[#8B5A96]'
                    }`}
                  >
                    {selectedLocation === 'benjamin' ? 'Ocultar mapa' : 'Ver en mapa'}
                  </button>
                </div>
                
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/30 shadow-xl transform transition-all duration-300">
                  <h5 className="text-white font-bold text-lg mb-3">Lomas del Campestre</h5>
                  <div className="text-left space-y-2 text-white/90">
                    <p className="text-sm">📍 Monte Carlo 113, Lomas del Campestre II</p>
                    <p className="text-sm">20119 Aguascalientes, Ags.</p>
                    <p className="font-bold">📞 (449) 162 8818</p>
                  </div>
                  <button 
                    onClick={() => handleLocationSelect('campestre')}
                    className={`w-full mt-4 font-bold py-2 px-4 rounded-xl transition-all duration-300 ${
                      selectedLocation === 'campestre' 
                        ? 'bg-white text-[#8B5A96] border-2 border-[#FFE082]' 
                        : 'bg-[#FFE082] hover:bg-[#FFD700] text-[#8B5A96]'
                    }`}
                  >
                    {selectedLocation === 'campestre' ? 'Ocultar mapa' : 'Ver en mapa'}
                  </button>
                </div>
                  {/* Mapa seleccionado móvil */}
              {selectedLocation && (
                <div className="mt-6 mx-auto">
                  <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/30 shadow-xl transform hover:scale-20 transition-all duration-300">
                    <h6 className="text-white font-bold text-center mb-4">
                      {selectedLocation === 'benjamin' ? 'Sucursal Benjamin de La Mora' : 'Sucursal Lomas del Campestre'}
                    </h6>
                    <div className="overflow-hidden rounded-xl shadow-lg">
                      {selectedLocation === 'benjamin' ? (
                        <iframe 
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4304.764618282172!2d-102.3060816!3d21.8886047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429ee8b8b3bea25%3A0xe5be6032ed57954b!2sBenjam%C3%ADn%20de%20La%20Mora%20527%2C%20Col%20del%20Carmen%2C%2020050%20Aguascalientes%2C%20Ags.!5e1!3m2!1ses-419!2smx!4v1754947536236!5m2!1ses-419!2smx"
                          width="100%" 
                          height="250" 
                          style={{border: 0}} 
                          allowFullScreen 
                          loading="lazy" 
                          referrerPolicy="no-referrer-when-downgrade"
                          className="w-full"
                        />
                      ) : (
                        <iframe 
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4303.666054809503!2d-102.31841268865283!3d21.924969556310664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429ef7b08109c03%3A0xb8731ab94f5714f4!2sFertil%20Center%20Norte%20Cl%C3%ADnica%20de%20Reproducci%C3%B3n%20en%20Aguascalientes!5e1!3m2!1ses-419!2smx!4v1754947559585!5m2!1ses-419!2smx"
                          width="100%" 
                          height="250" 
                          style={{border: 0}} 
                          allowFullScreen 
                          loading="lazy" 
                          referrerPolicy="no-referrer-when-downgrade"
                          className="w-full"
                        />
                      )}
                    </div>
                  </div>
                </div>
              )}
              </div>

            
            </div>
          </div>
        </div>
      </section>
    </>
  );
}