'use client'
import { useEffect } from 'react'

export default function HydrationFix() {
  useEffect(() => {
    // Suprimir errores de hidratación específicos de extensiones del navegador
    const originalError = console.error
    console.error = (...args) => {
      if (
        typeof args[0] === 'string' && 
        (args[0].includes('Hydration failed') || 
         args[0].includes('hydrated but some attributes') ||
         args[0].includes('cz-shortcut-listen'))
      ) {
        return
      }
      originalError.call(console, ...args)
    }

    return () => {
      console.error = originalError
    }
  }, [])

  return null
}
