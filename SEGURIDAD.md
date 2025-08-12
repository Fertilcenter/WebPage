# 🛡️ Sistema de Seguridad y Protección Anti-Spam - Fertilcenter

## ✅ **Protecciones Implementadas**

### **1. Rate Limiting por IP**
- **Límite**: 3 emails por IP cada 15 minutos
- **Protege contra**: Ataques de fuerza bruta, spam masivo
- **Implementación**: En memoria (desarrollo) / Redis (producción)

### **2. Protección por Email**
- **Límite**: 1 email cada 5 minutos por dirección
- **Máximo**: 3 intentos por hora por email
- **Protege contra**: Spam desde el mismo email, abuse de un solo usuario

### **3. Sistema de Tokens Anti-CSRF**
- **Duración**: 30 minutos
- **Uso único**: Cada token solo puede usarse una vez
- **Protege contra**: Ataques Cross-Site Request Forgery

### **4. Honeypot**
- **Campo oculto**: "website" invisible para humanos
- **Protege contra**: Bots automatizados que llenan todos los campos

### **5. Detección de Patrones Sospechosos**
- **Emails temporales**: Detecta servicios como 10minutemail, guerrillamail
- **Números falsos**: Detecta patrones como 111111111, 000000000
- **Emails automatizados**: Detecta test@, admin@, noreply@

## 🔧 **Configuración**

### **Límites Actuales**
```typescript
// Rate limiting por IP
maxRequests: 3,
windowMs: 15 * 60 * 1000 // 15 minutos

// Protección por email
cooldownMs: 5 * 60 * 1000, // 5 minutos entre emails
maxAttemptsPerHour: 3

// Tokens
TOKEN_LIFETIME: 30 * 60 * 1000 // 30 minutos
```

### **Para Ajustar Límites**
Edita `/src/lib/rate-limit.ts`:
```typescript
// Más restrictivo
maxRequests: 2,
windowMs: 30 * 60 * 1000 // 30 minutos

// Más permisivo
maxRequests: 5,
windowMs: 10 * 60 * 1000 // 10 minutos
```

## 📊 **Monitoreo**

### **Estadísticas en Tiempo Real**
Visita: `http://localhost:3000/api/admin/stats`

### **Logs de Seguridad**
Revisa la consola del servidor para:
- IPs bloqueadas por rate limiting
- Emails bloqueados por spam protection
- Bots detectados por honeypot
- Patrones sospechosos

## 🚨 **Respuesta a Incidentes**

### **Si Detectas un Ataque**

1. **Revisar logs** para identificar la fuente
2. **Reducir límites temporalmente**:
   ```typescript
   maxRequests: 1,
   windowMs: 60 * 60 * 1000 // 1 hora
   ```
3. **Bloquear IPs específicas** (implementar lista negra)
4. **Notificar al equipo**

### **Falsos Positivos**

Si usuarios legítimos reportan problemas:
1. Verificar en logs si están siendo bloqueados
2. Aumentar límites temporalmente
3. Whitelist de IPs confiables si es necesario

## 🔄 **Mejoras Futuras**

### **Para Producción**
- [ ] Implementar Redis para rate limiting distribuido
- [ ] Base de datos para logs de seguridad
- [ ] Sistema de whitelist/blacklist de IPs
- [ ] Integración con Cloudflare o similar
- [ ] Captcha para casos sospechosos

### **Métricas Avanzadas**
- [ ] Dashboard de seguridad
- [ ] Alertas automáticas por email/Slack
- [ ] Análisis de patrones de ataque
- [ ] Geolocalización de IPs sospechosas

## ⚠️ **Importante**

- **No bloquear permanentemente**: Los límites se resetean automáticamente
- **Monitorear regularmente**: Revisar logs para ajustar límites
- **Backup de configuración**: Guardar configuraciones que funcionen bien
- **Testing**: Probar cambios en desarrollo antes de producción

## 🧪 **Testing de Seguridad**

### **Probar Rate Limiting**
```bash
# Enviar múltiples requests rápidamente
for i in {1..5}; do
  curl -X POST http://localhost:3000/api/send-email \
    -H "Content-Type: application/json" \
    -d '{"email":"test@example.com","whatsapp":"1234567890"}'
done
```

### **Probar Honeypot**
```bash
# Simular bot (debe ser bloqueado silenciosamente)
curl -X POST http://localhost:3000/api/send-email \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","whatsapp":"1234567890","honeypot":"bot-filled-this"}'
```

### **Probar Token Validation**
```bash
# Sin token (debe fallar)
curl -X POST http://localhost:3000/api/send-email \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","whatsapp":"1234567890","formToken":"invalid"}'
```
