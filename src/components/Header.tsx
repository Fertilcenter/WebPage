'use client'
import Image from 'next/image'
import { useState, useEffect, useCallback, useRef } from 'react'

type NavItem = { id: string; label: string }

const NAV_ITEMS: NavItem[] = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'carousel', label: 'Nosotros' },
  { id: 'ebook', label: 'Ebook' },
  { id: 'contacto', label: 'Sucursales' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string>('')
  const ticking = useRef(false)

  const handleScroll = useCallback(() => {
    const y = window.scrollY
    setScrolled(y > 12)
    // Active section detection
    if (!ticking.current) {
      ticking.current = true
      requestAnimationFrame(() => {
        let current = ''
        for (const item of NAV_ITEMS) {
          const el = document.getElementById(item.id)
          if (!el) continue
            // Adjust trigger point ~30% viewport height
          const rect = el.getBoundingClientRect()
          if (rect.top <= window.innerHeight * 0.3 && rect.bottom >= window.innerHeight * 0.25) {
            current = item.id
            break
          }
        }
        setActive(current || 'inicio')
        ticking.current = false
      })
    }
  }, [])

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMenuOpen(false)
  }

  const openWhatsApp = () => {
    window.open(
      'https://api.whatsapp.com/send?phone=524499993412&text=Hola%20quisiera%20agendar%20una%20cita,%20me%20puede%20dar%20informes%20por%20favor!.',
      '_blank'
    )
    setIsMenuOpen(false)
  }

  const baseHeaderClasses = 'fixed top-3 left-1/2 -translate-x-1/2 z-50 transition-all duration-300'
  const shellClasses = [
    'relative flex items-center justify-between gap-3 md:gap-8 rounded-2xl  backdrop-blur-md bg-white/15 shadow-[0_4px_18px_-4px_rgba(139,90,150,0.35)] px-4 md:px-6',
    scrolled ? 'py-1.5 md:py-2' : 'py-2.5 md:py-3'
  ].join(' ')

  // Removed decorative gradient ring per request (plain subtle border now)
  const gradientRing = ''

  const NavButton = ({ item, mobile }: { item: NavItem; mobile?: boolean }) => {
    const isActive = active === item.id
    return (
      <button
        onClick={() => scrollToSection(item.id)}
        aria-current={isActive ? 'page' : undefined}
        className={[
          'relative group font-montserrat-heavy tracking-wide transition-all duration-300 rounded-xl border border-transparent',
          mobile
            ? 'w-full text-center text-[#FFE082] px-4 py-3 font-medium hover:drop-shadow-lg hover:border-white/20 font-futura text-base'
            : 'px-4 py-2 text-sm',
          isActive
            ? 'text-white shadow-[0_0_0_1px_rgba(255,255,255,0.25)] bg-white/10'
            : 'text-[#FFE082] hover:text-white',
          'hover:bg-white/10'
        ].join(' ')}
      >
  <span className="relative z-10 drop-shadow-[0_0_5px_#8B5A96]">{item.label}</span>
        <span
          className={[
            'pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300',
            'bg-gradient-to-r from-[#FFE082]/10 via-[#8B5A96]/10 to-[#B683C4]/10',
            isActive ? 'opacity-100' : ''
          ].join(' ')}
        />
        <span
          className={[
            'absolute left-1/2 -bottom-[3px] h-[2px] w-0 rounded-full bg-gradient-to-r from-[#FFE082] via-[#8B5A96] to-[#B683C4] transition-all duration-500 ease-out',
            isActive ? 'w-8 -translate-x-1/2' : 'group-hover:w-8 -translate-x-1/2'
          ].join(' ')}
        />
      </button>
    )
  }

  return (
    <>
      <header className={`${baseHeaderClasses}`} role="banner">
        <div className={`${shellClasses} ${gradientRing} overflow-hidden`}>        
          {/* Subtle overlay (no gradient) */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-white/5" />
          {/* Logo: mobile (logofertil) / desktop (logo-chico fixed 30px) */}
          <div className="relative flex items-center">
            {/* Mobile full logo */}
            <Image
              src="/images/logotipo.png"
              alt="Fertilcenter"
              width={100}
              height={40}
              priority
              className="block md:hidden object-contain select-none"
            />
            {/* Desktop compact icon */}
            <Image
              src="/images/logo-chico.png"
              alt="Fertilcenter"
              width={30}
              height={30}
              priority
              className="hidden md:block w-[30px] h-[30px] min-w-[30px] min-h-[30px] object-contain select-none"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
            {NAV_ITEMS.map(item => (
              <NavButton key={item.id} item={item} />
            ))}
            <button
              onClick={openWhatsApp}
              className="relative ml-1 rounded-xl px-4 py-2 text-sm font-montserrat-heavy text-[#FFE082] backdrop-blur-sm bg-gradient-to-r from-[#8B5A96] via-[#9C6BA9] to-[#B683C4] shadow-lg hover:shadow-[#8B5A96]/40 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FFE082]/40"
            >
              <span className="relative z-10 drop-shadow-[0_0_5px_#8B5A96]">Consulta</span>
              <span className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#B683C4] via-[#8B5A96] to-[#FFE082]/70 mix-blend-overlay"/>
            </button>
          </nav>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(o => !o)}
              aria-label="Abrir menú"
              aria-expanded={isMenuOpen}
              className="relative grid place-content-center rounded-full p-1.5 bg-white/10 shadow-md hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FFE082]/40"
            >
              <div className="w-5 h-5 relative">
                <span className={`absolute left-0 top-[4px] h-0.5 w-5 rounded bg-[#FFE082] transition-all ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`}></span>
                <span className={`absolute left-0 top-[10px] h-0.5 w-5 rounded bg-[#FFE082] transition-all ${isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}></span>
                <span className={`absolute left-0 top-[16px] h-0.5 w-5 rounded bg-[#FFE082] transition-all ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Layer */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-all duration-300 ${
          isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />
        <div
          className={`absolute left-1/2 top-20 w-[88%] max-w-sm -translate-x-1/2 transform transition-all duration-300 ${
            isMenuOpen ? 'translate-y-0 scale-100 opacity-100' : '-translate-y-3 scale-95 opacity-0'
          }`}
        >
          <div className="relative rounded-3xl  bg-white/15 backdrop-blur-md shadow-2xl p-5 overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:via-transparent before:to-white/5 before:pointer-events-none">
            <nav aria-label="Menú móvil" className="space-y-2">
              {NAV_ITEMS.map(item => (
                <NavButton key={item.id} item={item} mobile />
              ))}
              <div className="pt-2">
                <button
                  onClick={openWhatsApp}
                  className="w-full relative rounded-2xl px-5 py-3 font-montserrat-heavy text-base text-[#FFE082] bg-gradient-to-r from-[#8B5A96] via-[#9C6BA9] to-[#B683C4] shadow-lg hover:shadow-[#8B5A96]/40 transition-all duration-300 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-[#FFE082]/40"
                >
                  Consulta
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}