import { NextRequest, NextResponse } from 'next/server';
import { formTokenManager } from '@/lib/security';
import { rateLimit } from '@/lib/rate-limit';

export async function GET(request: NextRequest) {
  try {
    // Rate limiting básico para generación de tokens
    const rateLimitResult = await rateLimit(request, {
      maxRequests: 20, // 20 tokens por ventana de tiempo
      windowMs: 15 * 60 * 1000 // 15 minutos
    });

    if (!rateLimitResult.success) {
      return NextResponse.json(
        { 
          error: 'Demasiadas solicitudes. Intenta de nuevo más tarde.',
          resetTime: rateLimitResult.resetTime
        },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': rateLimitResult.limit.toString(),
            'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
            'X-RateLimit-Reset': rateLimitResult.resetTime.toString()
          }
        }
      );
    }

    const token = formTokenManager.generateToken();
    
    return NextResponse.json({ 
      token,
      expiresIn: 30 * 60 // 30 minutos en segundos
    });

  } catch (error) {
    console.error('Error generando token:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
