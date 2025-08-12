import { NextRequest } from 'next/server';
import crypto from 'crypto';

// Sistema simple de tokens anti-CSRF para formularios
class FormTokenManager {
  private tokens: Map<string, { timestamp: number; used: boolean }> = new Map();
  private readonly TOKEN_LIFETIME = 30 * 60 * 1000; // 30 minutos

  generateToken(): string {
    const token = crypto.randomBytes(32).toString('hex');
    this.tokens.set(token, { 
      timestamp: Date.now(), 
      used: false 
    });
    
    // Limpiar tokens expirados
    this.cleanup();
    
    return token;
  }

  validateToken(token: string): boolean {
    if (!token) return false;
    
    const tokenData = this.tokens.get(token);
    if (!tokenData) return false;
    
    // Verificar expiración
    if (Date.now() - tokenData.timestamp > this.TOKEN_LIFETIME) {
      this.tokens.delete(token);
      return false;
    }
    
    // Verificar si ya fue usado (prevenir replay attacks)
    if (tokenData.used) {
      return false;
    }
    
    // Marcar como usado
    tokenData.used = true;
    this.tokens.set(token, tokenData);
    
    return true;
  }

  private cleanup() {
    const now = Date.now();
    for (const [token, data] of this.tokens.entries()) {
      if (now - data.timestamp > this.TOKEN_LIFETIME) {
        this.tokens.delete(token);
      }
    }
  }
}

export const formTokenManager = new FormTokenManager();

// Limpiar tokens cada 15 minutos
setInterval(() => {
  // @ts-ignore - accediendo método privado para limpieza
  formTokenManager['cleanup']();
}, 15 * 60 * 1000);

// Detector de patrones sospechosos
export function detectSuspiciousPatterns(data: any): string[] {
  const warnings: string[] = [];
  
  // Detectar emails sospechosos
  if (data.email) {
    const email = data.email.toLowerCase();
    
    // Emails temporales/desechables comunes
    const suspiciousDomains = [
      '10minutemail.com', 'guerrillamail.com', 'mailinator.com', 
      'yopmail.com', 'throwaway.email', 'temp-mail.org'
    ];
    
    if (suspiciousDomains.some(domain => email.includes(domain))) {
      warnings.push('Email temporal detectado');
    }
    
    // Patrones de emails automatizados
    if (/test\d+@|admin@|noreply@|no-reply@/i.test(email)) {
      warnings.push('Patrón de email automatizado');
    }
  }
  
  // Detectar patrones en WhatsApp
  if (data.whatsapp) {
    const whatsapp = data.whatsapp.replace(/\D/g, ''); // Solo números
    
    // Números obviamente falsos
    if (/^(0+|1+|2+|3+|4+|5+|6+|7+|8+|9+)$/.test(whatsapp)) {
      warnings.push('Número de WhatsApp sospechoso');
    }
    
    // Muy corto o muy largo
    if (whatsapp.length < 7 || whatsapp.length > 15) {
      warnings.push('Número de WhatsApp con longitud inválida');
    }
  }
  
  return warnings;
}

// Honeypot - campo oculto para detectar bots
export function validateHoneypot(honeypotValue: any): boolean {
  // Si el honeypot tiene valor, es probablemente un bot
  return !honeypotValue || honeypotValue === '';
}
