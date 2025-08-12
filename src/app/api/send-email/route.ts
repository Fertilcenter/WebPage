import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import path from 'path';
import fs from 'fs';
import { rateLimit, emailSpamProtection } from '@/lib/rate-limit';
import { formTokenManager, detectSuspiciousPatterns, validateHoneypot } from '@/lib/security';

interface EmailRequest {
  email: string;
  whatsapp: string;
  formToken?: string;
  honeypot?: string;
}

export async function POST(request: NextRequest) {
  try {
    const { email, whatsapp, formToken, honeypot }: EmailRequest = await request.json();

    // 1. Verificar honeypot (detectar bots)
    if (!validateHoneypot(honeypot)) {
      console.log('Bot detectado por honeypot');
      // No dar información al bot, responder como si fuera exitoso
      return NextResponse.json({ 
        message: 'Email enviado exitosamente',
        success: true 
      });
    }

    // 2. Rate limiting por IP
    const rateLimitResult = await rateLimit(request, {
      maxRequests: 3, // Solo 3 emails por IP cada 15 minutos
      windowMs: 15 * 60 * 1000
    });

    if (!rateLimitResult.success) {
      return NextResponse.json(
        { 
          error: `Ya hemos enviado tu eBook!. Podrás intentar de nuevo en ${Math.ceil(rateLimitResult.resetTime / 60)} minutos. (Revisa tu Spam o correo no deseado)`,
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

    // 3. Validar token del formulario (anti-CSRF)
    if (formToken && !formTokenManager.validateToken(formToken)) {
      return NextResponse.json(
        { error: 'Token de formulario inválido o expirado. Recarga la página e intenta de nuevo.' },
        { status: 400 }
      );
    }

    // 4. Validación básica
    if (!email || !whatsapp) {
      return NextResponse.json(
        { error: 'Email y WhatsApp son requeridos' },
        { status: 400 }
      );
    }

    // 5. Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // 6. Protección contra spam por email
    const emailSpamCheck = emailSpamProtection.checkEmail(email);
    if (!emailSpamCheck.allowed) {
      return NextResponse.json(
        { 
          error: `Este email ya solicitó el eBook recientemente. Intenta de nuevo en ${emailSpamCheck.waitTime} minutos.`,
          waitTime: emailSpamCheck.waitTime
        },
        { status: 429 }
      );
    }

    // 7. Detectar patrones sospechosos
    const suspiciousPatterns = detectSuspiciousPatterns({ email, whatsapp });
    if (suspiciousPatterns.length > 0) {
      console.log(`Patrones sospechosos detectados para ${email}:`, suspiciousPatterns);
      // En casos muy sospechosos, podrías bloquear la solicitud
      // Por ahora solo loggeamos para monitoreo
    }

    // Validación de variables de entorno
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error('Variables de entorno SMTP no configuradas correctamente');
      return NextResponse.json(
        { error: 'Configuración del servidor de correo incompleta' },
        { status: 500 }
      );
    }

    // Configuración del transporter de nodemailer
    // console.log('Configurando transporter con:', {
    //   host: process.env.SMTP_HOST,
    //   port: process.env.SMTP_PORT,
    //   user: process.env.SMTP_USER ? 'configurado' : 'no configurado',
    //   pass: process.env.SMTP_PASSWORD ? 'configurado' : 'no configurado'
    // });

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465', // true para 465, false para otros puertos
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      // Configuraciones adicionales para Gmail
      tls: {
        rejectUnauthorized: false // Para desarrollo, en producción considera remover esto
      },
      // Desactivar logging verboso de nodemailer
      debug: false,
      logger: false
    });

    // Ruta al PDF
    const pdfPath = path.join(process.cwd(), 'public', 'documents', 'Ebook.pdf');
    
    // console.log('Buscando PDF en:', pdfPath);
    
    // Verificar si el PDF existe
    if (!fs.existsSync(pdfPath)) {
      console.error('PDF no encontrado en:', pdfPath);
      // Listar archivos disponibles para debugging
      const documentsDir = path.join(process.cwd(), 'public', 'documents');
      if (fs.existsSync(documentsDir)) {
        const files = fs.readdirSync(documentsDir);
        console.log('Archivos disponibles en documents:', files);
      }
      return NextResponse.json(
        { error: 'Documento no disponible temporalmente. Por favor contacta al administrador.' },
        { status: 500 }
      );
    }

    // Verificar conexión SMTP
    // console.log('Verificando conexión SMTP...');
    try {
      await transporter.verify();
      // console.log('Conexión SMTP exitosa');
    } catch (smtpError) {
      console.error('Error de conexión SMTP:', smtpError);
      
      const errorMessage = smtpError instanceof Error ? smtpError.message : 'Error desconocido';
      
      // Mensaje específico para Gmail
      if (errorMessage.includes('Invalid login') || errorMessage.includes('Username and Password not accepted')) {
        return NextResponse.json(
          { 
            error: 'Error de autenticación de Gmail. Necesitas configurar una "Contraseña de aplicación". Consulta CONFIGURACION_GMAIL.md',
            details: 'Gmail requiere verificación en 2 pasos y contraseña de aplicación'
          },
          { status: 500 }
        );
      }
      
      return NextResponse.json(
        { error: 'Error de configuración del servidor de correo' },
        { status: 500 }
      );
    }

    // Configuración del email
    const mailOptions = {
      from: {
        name: 'Fertilcenter',
        address: 'no-reply@fertilcenter.com.mx'
      },
      to: email,
      subject: 'Tu eBook "Latido 1" está aquí - Fertilcenter 🎁',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f9f9f9; }
            .container { max-width: 600px; margin: 0 auto; background-color: white; }
            .header { background: linear-gradient(135deg, #8B5A96, #B683C4); padding: 30px; text-align: center; }
            .logo { color: white; font-size: 24px; font-weight: bold; }
            .content { padding: 30px; }
            .highlight { color: #8B5A96; font-weight: bold; }
            .footer { background-color: #f5f5f5; padding: 20px; text-align: center; font-size: 12px; color: #666; }
            .button { display: inline-block; background: linear-gradient(135deg, #FFE082, #FFB347); color: #8B5A96; padding: 12px 24px; text-decoration: none; border-radius: 25px; font-weight: bold; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">💜 FERTILCENTER</div>
              <h1 style="color: white; margin: 10px 0;">¡Tu eBook está listo!</h1>
            </div>
            
            <div class="content">
              <h2>HOLA 👋</h2>
              
              <p>Gracias por confiar en <span class="highlight">Fertilcenter</span>. Como prometimos, aquí tienes tu regalo especial:</p>
              
              <h3 style="color: #8B5A96;">📖 eBook "Latido 1 📖"</h3>
              
              <p>En este documento encontrarás:</p>
              <ul>
                <li>✨ Historias reales que transformarán tu visión</li>
                <li>🎯 Consejos claros, prácticos y fáciles de seguir</li>
                <li>💪 Inspiración y esperanza renovada para avanzar</li>
              </ul>
                            
              <p style="text-align: center;">
                <em>"Entendemos tu Historia, creamos tu Sueño."</em>
              </p>
              
              <hr style="margin: 30px 0; border: none; height: 1px; background-color: #eee;">
              
              <h3 style="color: #8B5A96;">📞 ¿Necesitas más información?</h3>
              <p>No estás sola en este viaje. Nuestro equipo está aquí para acompañarte:</p>
              
              <div style="background-color: #f8f4ff; padding: 20px; border-radius: 10px; margin: 20px 0;">
                <p><strong>📍 Benjamin de La Mora</strong><br>
                Benjamin de La Mora 527, Col del Carmen<br>
                📞 (449) 999 3412</p>
                
                <p><strong>📍 Lomas del Campestre</strong><br>
                Monte Carlo 113, Lomas del Campestre II<br>
                📞 (449) 162 8818</p>
              </div>
              
              <p>Con cariño,<br>
              <strong>Fertilcenter</strong></p>
            </div>
            
            <div class="footer">
              <p>Este correo fue enviado a ${email}</p>
              <p>WhatsApp registrado: ${whatsapp}</p>
              <p>© 2025 Fertilcenter. Todos los derechos reservados.</p>
            </div>
          </div>
        </body>
        </html>
      `,
      attachments: [
        {
          filename: 'Ebook.pdf',
          path: pdfPath,
          contentType: 'application/pdf'
        }
      ]
    };

    // Enviar el email
    await transporter.sendMail(mailOptions);

    // Aquí podrías guardar los datos en una base de datos si es necesario
    console.log(`✅ Email enviado exitosamente a: ${email}`);

    return NextResponse.json(
      { 
        message: 'Email enviado exitosamente',
        success: true 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error detallado enviando email:', error);
    
    // Log más específico del error
    if (error instanceof Error) {
      console.error('Mensaje de error:', error.message);
      console.error('Stack trace:', error.stack);
    }
    
    // Verificar si es un error de autenticación SMTP
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    
    let userFriendlyMessage = 'Error interno del servidor al enviar el email';
    
    if (errorMessage.includes('Authentication failed') || errorMessage.includes('Invalid login')) {
      userFriendlyMessage = 'Error de configuración del servidor de correo';
    } else if (errorMessage.includes('ENOTFOUND') || errorMessage.includes('getaddrinfo')) {
      userFriendlyMessage = 'Error de conexión con el servidor de correo';
    } else if (errorMessage.includes('PDF no encontrado') || errorMessage.includes('ENOENT')) {
      userFriendlyMessage = 'Documento no disponible temporalmente';
    }

    return NextResponse.json(
      { 
        error: userFriendlyMessage,
        success: false,
        // En desarrollo, incluir más detalles
        ...(process.env.NODE_ENV === 'development' && { 
          details: errorMessage,
          type: error instanceof Error ? error.constructor.name : 'Unknown'
        })
      },
      { status: 500 }
    );
  }
}
