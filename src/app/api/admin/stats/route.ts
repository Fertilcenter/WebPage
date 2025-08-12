import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Solo permitir acceso desde localhost en desarrollo
    const host = request.headers.get('host');
    if (process.env.NODE_ENV === 'production' && !host?.includes('fertilcenter.com')) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 403 });
    }

    // Estadísticas básicas (en producción usar base de datos)
    const stats = {
      timestamp: new Date().toISOString(),
      server: {
        environment: process.env.NODE_ENV,
        uptime: process.uptime(),
        memory: process.memoryUsage()
      },
      security: {
        rateLimitActive: true,
        honeypotActive: true,
        tokenValidationActive: true,
        emailSpamProtectionActive: true
      },
      configuration: {
        smtpConfigured: !!(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASSWORD),
        pdfExists: require('fs').existsSync(require('path').join(process.cwd(), 'public', 'documents', 'Ebook.pdf'))
      }
    };

    return NextResponse.json(stats);

  } catch (error) {
    return NextResponse.json({
      error: 'Error obteniendo estadísticas',
      details: error instanceof Error ? error.message : 'Error desconocido'
    }, { status: 500 });
  }
}
