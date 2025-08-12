# 🔧 Configuración de Gmail para Fertilcenter

## ❌ Problema Actual
Estás recibiendo el error: **"Error de configuración del servidor de correo"**

## 🎯 Solución: Configurar Contraseña de Aplicación de Gmail

### Paso 1: Habilitar Verificación en 2 Pasos
1. Ve a [myaccount.google.com](https://myaccount.google.com)
2. Selecciona **Seguridad** en el panel izquierdo
3. En "Iniciar sesión en Google", haz clic en **Verificación en 2 pasos**
4. Sigue las instrucciones para habilitarla

### Paso 2: Generar Contraseña de Aplicación
1. Una vez habilitada la verificación en 2 pasos
2. Ve a **Contraseñas de aplicaciones**
3. Selecciona la aplicación: **Correo**
4. Selecciona el dispositivo: **Otro (nombre personalizado)**
5. Escribe: **Fertilcenter Website**
6. Haz clic en **Generar**
7. Gmail te dará una contraseña de 16 caracteres como: `abcd efgh ijkl mnop`

### Paso 3: Actualizar .env.local
Reemplaza tu contraseña actual con la nueva contraseña de aplicación:

```bash
SMTP_PASSWORD=abcd efgh ijkl mnop
```

## 🚀 Alternativas Más Fáciles

### Opción 1: SendGrid (Recomendado)
1. Registrate en [sendgrid.com](https://sendgrid.com)
2. Obtén tu API Key
3. Actualiza tu `.env.local`:

```bash
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=SG.XXXXXXXXXXXXXXXXXX.XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

### Opción 2: Mailtrap (Solo para testing)
1. Registrate en [mailtrap.io](https://mailtrap.io)
2. Crea un inbox
3. Usa las credenciales que te proporcionen:

```bash
SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=2525
SMTP_USER=tu_usuario_mailtrap
SMTP_PASSWORD=tu_password_mailtrap
```

## 🧪 Para Probar
1. Actualiza las credenciales
2. Reinicia el servidor: `npm run dev`
3. Prueba el formulario nuevamente

## 📞 Si Sigues Teniendo Problemas
- Verifica que no haya espacios extra en las credenciales
- Asegúrate de que la cuenta `sistemas@fertilcenter.com.mx` tenga permisos
- Considera usar SendGrid para mayor confiabilidad
