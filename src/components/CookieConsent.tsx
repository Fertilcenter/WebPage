// Extiende el tipo Window para permitir acceso dinámico a ga-disable
declare global {
  interface Window {
    [key: string]: any;
  }
}

'use client'
import { useState, useEffect } from "react";

const LEGAL_TEXT = `Resumen de privacidad\nEste sitio web utiliza cookies para mejorar tu experiencia mientras navegas por el sitio. Las cookies necesarias se almacenan en tu navegador ya que son esenciales para el funcionamiento básico del sitio.\n\nNecesarias\nSiempre habilitadas\nLas cookies necesarias son absolutamente esenciales para que el sitio funcione correctamente. Esta categoría solo incluye cookies que garantizan funcionalidades básicas y características de seguridad del sitio. Estas cookies no almacenan información personal.\n\nOpcionales\nLas cookies opcionales pueden no ser estrictamente necesarias para el funcionamiento del sitio y se utilizan específicamente para recopilar datos personales del usuario a través de analíticas, anuncios y otros contenidos incrustados. Es obligatorio obtener el consentimiento del usuario antes de activar estas cookies.`;

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [optionalEnabled, setOptionalEnabled] = useState(true); // Inicialmente activado

  useEffect(() => {
    const accepted = localStorage.getItem("cookieAccepted");
    const savedOptional = localStorage.getItem("cookieOptional");
    
    if (!accepted) {
      setVisible(true);
      // Si no hay preferencia guardada, usar valor inicial (true)
      if (savedOptional !== null) {
        setOptionalEnabled(savedOptional === "true");
      }
    }
    
    // Controlar analíticas según estado actual
    if (!optionalEnabled && process.env.NEXT_PUBLIC_GA_ID) {
      window['ga-disable-' + process.env.NEXT_PUBLIC_GA_ID as string] = true;
    }
  }, [optionalEnabled]);

  const handleAccept = () => {
    localStorage.setItem("cookieAccepted", "true");
    localStorage.setItem("cookieOptional", optionalEnabled ? "true" : "false");
    setVisible(false);
    // Permitir analíticas si acepta opcionales
    if (optionalEnabled && process.env.NEXT_PUBLIC_GA_ID) {
      window['ga-disable-' + process.env.NEXT_PUBLIC_GA_ID as string] = false;
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm shadow-2xl border-t border-gray-200 p-4 pb-safe font-sans text-sm md:text-base">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between md:mr-20">
          <div className="flex-1 text-[#2e204c] mb-4 md:mb-0 md:mr-4">
            <span>
              Este sitio utiliza cookies para mejorar tu experiencia. {" "}
              <button
                className="underline text-[#8B5A96] font-semibold hover:text-[#F0C260] transition-colors"
                onClick={() => setShowDetails((v) => !v)}
              >
                {showDetails ? 'Ocultar detalles' : 'Ver detalles'}
              </button>
            </span>
            {showDetails && (
              <div className="mt-4 p-4 bg-[#f6f2fa] rounded-lg text-xs md:text-sm border border-[#F0C260] shadow-inner">
                <div className="whitespace-pre-line mb-4">
                  {LEGAL_TEXT}
                </div>
                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <label className="font-bold text-[#8B5A96] text-sm md:text-base block mb-1">
                        Cookies opcionales
                      </label>
                      <span className="text-xs text-gray-600">
                        Permitir cookies de analítica y marketing para mejorar nuestros servicios
                      </span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer ml-4">
                      <input
                        type="checkbox"
                        checked={optionalEnabled}
                        onChange={e => setOptionalEnabled(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#8B5A96]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#8B5A96]"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
          <button
            className="w-full md:w-auto px-6 py-3 bg-[#8B5A96] text-white rounded-lg font-bold hover:bg-[#F0C260] hover:text-[#2e204c] transition-all duration-200 shadow-md"
            onClick={handleAccept}
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}
