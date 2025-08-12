import { NextRequest } from 'next/server';

// Almacenamiento en memoria para rate limiting (para desarrollo)
// En producción, usar Redis para aplicaciones distribuidas
class MemoryStore {
  private store: Map<string, { count: number; resetTime: number }> = new Map();

  async increment(key: string): Promise<{ totalHits: number; resetTime: Date }> {
    const now = Date.now();
    const windowMs = 15 * 60 * 1000; // 15 minutos
    const maxRequests = 5; // máximo 5 solicitudes por ventana

    const current = this.store.get(key);
    
    if (!current || now > current.resetTime) {
      // Nueva ventana de tiempo
      const resetTime = now + windowMs;
      this.store.set(key, { count: 1, resetTime });
      return { totalHits: 1, resetTime: new Date(resetTime) };
    }

    // Incrementar contador existente
    current.count++;
    this.store.set(key, current);
    
    return { totalHits: current.count, resetTime: new Date(current.resetTime) };
  }

  async get(key: string): Promise<{ totalHits: number; resetTime: Date } | null> {
    const current = this.store.get(key);
    if (!current || Date.now() > current.resetTime) {
      return null;
    }
    return { totalHits: current.count, resetTime: new Date(current.resetTime) };
  }

  // Limpiar entradas expiradas cada 30 minutos
  cleanup() {
    const now = Date.now();
    for (const [key, value] of this.store.entries()) {
      if (now > value.resetTime) {
        this.store.delete(key);
      }
    }
  }
}

const rateLimitStore = new MemoryStore();

// Limpiar cada 30 minutos
setInterval(() => rateLimitStore.cleanup(), 30 * 60 * 1000);

interface RateLimitOptions {
  maxRequests?: number;
  windowMs?: number;
  skipSuccessfulRequests?: boolean;
}

export async function rateLimit(
  request: NextRequest,
  options: RateLimitOptions = {}
) {
  const {
    maxRequests = 5,
    windowMs = 15 * 60 * 1000, // 15 minutos
    skipSuccessfulRequests = false
  } = options;

  // Obtener IP del cliente
  const ip = getClientIP(request);
  const key = `rate_limit:${ip}`;

  const result = await rateLimitStore.increment(key);
  
  const isRateLimited = result.totalHits > maxRequests;
  const remaining = Math.max(0, maxRequests - result.totalHits);
  const resetTime = Math.ceil((result.resetTime.getTime() - Date.now()) / 1000);

  return {
    success: !isRateLimited,
    limit: maxRequests,
    remaining,
    resetTime,
    totalHits: result.totalHits,
    ip
  };
}

function getClientIP(request: NextRequest): string {
  // Intentar obtener la IP real del cliente considerando proxies
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const cfConnectingIp = request.headers.get('cf-connecting-ip'); // Cloudflare
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  if (realIp) {
    return realIp;
  }
  
  if (cfConnectingIp) {
    return cfConnectingIp;
  }
  
  // Fallback - en desarrollo será 127.0.0.1
  return '127.0.0.1';
}

// Protección adicional contra emails duplicados
class EmailSpamProtection {
  private emailAttempts: Map<string, { count: number; lastAttempt: number }> = new Map();
  
  checkEmail(email: string): { allowed: boolean; waitTime?: number } {
    const now = Date.now();
    const cooldownMs = 5 * 60 * 1000; // 5 minutos entre emails del mismo email
    const maxAttemptsPerHour = 3;
    const hourMs = 60 * 60 * 1000;
    
    const attempt = this.emailAttempts.get(email);
    
    if (!attempt) {
      this.emailAttempts.set(email, { count: 1, lastAttempt: now });
      return { allowed: true };
    }
    
    // Verificar cooldown
    const timeSinceLastAttempt = now - attempt.lastAttempt;
    if (timeSinceLastAttempt < cooldownMs) {
      const waitTime = Math.ceil((cooldownMs - timeSinceLastAttempt) / 1000 / 60); // en minutos
      return { allowed: false, waitTime };
    }
    
    // Resetear contador si ha pasado más de una hora
    if (timeSinceLastAttempt > hourMs) {
      this.emailAttempts.set(email, { count: 1, lastAttempt: now });
      return { allowed: true };
    }
    
    // Verificar límite por hora
    if (attempt.count >= maxAttemptsPerHour) {
      const waitTime = Math.ceil((hourMs - timeSinceLastAttempt) / 1000 / 60); // en minutos
      return { allowed: false, waitTime };
    }
    
    // Incrementar contador
    attempt.count++;
    attempt.lastAttempt = now;
    this.emailAttempts.set(email, attempt);
    
    return { allowed: true };
  }
  
  cleanup() {
    const now = Date.now();
    const hourMs = 60 * 60 * 1000;
    
    for (const [email, attempt] of this.emailAttempts.entries()) {
      if (now - attempt.lastAttempt > hourMs) {
        this.emailAttempts.delete(email);
      }
    }
  }
}

export const emailSpamProtection = new EmailSpamProtection();

// Limpiar cada hora
setInterval(() => emailSpamProtection.cleanup(), 60 * 60 * 1000);
