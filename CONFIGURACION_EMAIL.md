# 📧 Configuración del Sistema de Envío de Correos - Fertilcenter

## 🚀 Funcionalidad Implementada

Se ha implementado un sistema completo de envío de correos electrónicos que:

- ✅ Valida email y número de WhatsApp
- ✅ Envía un correo profesional con el eBook en PDF
- ✅ Incluye estados de carga y mensajes de éxito/error
- ✅ Diseño responsivo para móvil y desktop
- ✅ Manejo de errores robusto

## 📋 Requisitos Previos

1. **PDF del eBook**: Coloca tu archivo PDF en `/public/documents/ebook-fertilcenter.pdf`
2. **Credenciales SMTP**: Configura un proveedor de correo electrónico

## ⚙️ Configuración

### 1. Variables de Entorno

Edita el archivo `.env.local` con tus credenciales reales:

```env
# Para Gmail
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=no-reply@fertilcenter.com.mx
SMTP_PASSWORD=tu_password_de_aplicacion

# Para SendGrid
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=tu_sendgrid_api_key

# Para Mailgun
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=postmaster@mg.fertilcenter.com.mx
SMTP_PASSWORD=tu_mailgun_password
```

### 2. Configuración con Gmail

Si usas Gmail:

1. Ve a tu cuenta de Google
2. Habilita "Verificación en 2 pasos"
3. Genera una "Contraseña de aplicación"
4. Usa esa contraseña en `SMTP_PASSWORD`

### 3. Subir el PDF

Coloca tu archivo PDF en: `/public/documents/ebook-fertilcenter.pdf`

## 🧪 Para Desarrollo/Testing

Puedes usar **Mailtrap** para pruebas sin enviar correos reales:

```env
SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=2525
SMTP_USER=tu_usuario_mailtrap
SMTP_PASSWORD=tu_password_mailtrap
```

## 🚀 Deployment

### Vercel
1. Sube las variables de entorno en el dashboard de Vercel
2. Asegúrate de que el PDF esté en `/public/documents/`
3. Deploy

### Otras plataformas
- Configura las variables de entorno según tu plataforma
- Verifica que nodemailer sea compatible

## 🎨 Características del Email

El correo enviado incluye:

- ✨ Diseño profesional en HTML
- 💜 Colores de la marca Fertilcenter
- 📎 PDF adjunto del eBook
- 📞 Información de contacto de ambas sucursales
- 🎯 Call-to-action claro

## 🔧 Personalización

Para modificar el template del correo, edita:
`/src/app/api/send-email/route.ts` en la sección `mailOptions.html`

## 🐛 Troubleshooting

### Error "PDF no encontrado"
- Verifica que el archivo esté en `/public/documents/ebook-fertilcenter.pdf`
- Revisa los permisos del archivo

### Error de autenticación SMTP
- Verifica las credenciales en `.env.local`
- Si usas Gmail, asegúrate de usar contraseña de aplicación

### Correos no llegan
- Revisa la bandeja de spam
- Verifica la configuración DNS de tu dominio
- Usa un servicio como SendGrid para mayor deliverabilidad

## 📊 Próximos Pasos

Considera implementar:

- 📊 Base de datos para guardar registros
- 📈 Analytics de conversión
- 🔄 Email de seguimiento automatizado
- 📱 Integración con WhatsApp Business API
