# 🔄 Estrategias de Migración para FertilCenter

## 📋 **Situación Actual**
- `/var/www/fertilcenter.com.mx/index.html` → Redirect a `fertilcenter.com.mx/web`
- Queremos implementar Next.js **sin romper** la estructura actual

## 🎯 **3 Estrategias Posibles**

### **Estrategia 1: Deployment Híbrido (RECOMENDADA) 🌟**

**¿Cómo funciona?**
- Tu sitio actual se mantiene **intacto**
- Next.js funciona en una ruta específica: `fertilcenter.com.mx/nueva-web`
- Migración gradual y segura

**Ventajas:**
- ✅ Zero downtime
- ✅ Tu redirect actual sigue funcionando
- ✅ Puedes probar Next.js sin riesgos
- ✅ Migración gradual cuando estés listo

**Estructura final:**
```
fertilcenter.com.mx/            → Tu sitio actual (index.html con redirect)
fertilcenter.com.mx/web/        → Tu sitio web actual
fertilcenter.com.mx/nueva-web/  → Nueva aplicación Next.js
```

**Implementación:**
1. Proyecto Next.js en `/var/www/fertilcenter-nextjs/`
2. nginx configurado para servir ambos
3. Cuando estés listo, cambias el redirect

---

### **Estrategia 2: Migración Completa** 

**¿Cómo funciona?**
- Reemplaza completamente el sitio actual
- Next.js toma control del dominio principal

**Ventajas:**
- ✅ Configuración más simple
- ✅ SEO optimizado
- ✅ Rendimiento máximo

**Desventajas:**
- ⚠️ Requiere backup completo
- ⚠️ Mayor riesgo inicial

---

### **Estrategia 3: Subdominio**

**¿Cómo funciona?**
- Next.js en subdominio: `nueva.fertilcenter.com.mx`
- Tu sitio actual queda igual

**Ventajas:**
- ✅ Aislamiento total
- ✅ Fácil de implementar

**Desventajas:**
- ⚠️ Requiere configuración DNS
- ⚠️ SEO dividido

## 🚀 **Plan de Implementación Recomendado**

### **Fase 1: Setup Híbrido (Inmediato)**
```bash
# En tu servidor EC2
cd /var/www
sudo git clone https://github.com/Fertilcenter/WebPage.git fertilcenter-nextjs
cd fertilcenter-nextjs

# Usar configuración híbrida
cp nginx-hybrid.conf nginx.conf

# Deploy
./deploy.sh production
```

**Resultado:**
- `fertilcenter.com.mx/` → Tu sitio actual
- `fertilcenter.com.mx/nueva-web/` → Next.js funcionando

### **Fase 2: Pruebas y Ajustes**
- Probar Next.js en `/nueva-web/`
- Verificar formularios de contacto
- Optimizar rendimiento
- Ajustar SEO

### **Fase 3: Migración Gradual**
Cuando estés listo, solo cambias el redirect:

```html
<!-- En /var/www/fertilcenter.com.mx/index.html -->
<script type="text/javascript">
    window.location.href = 'https://fertilcenter.com.mx/nueva-web';
</script>
```

### **Fase 4: Migración Completa (Opcional)**
Eventualmente, cambiar nginx para servir Next.js directamente en `/`

## 📁 **Estructura de Archivos Final**

```
/var/www/
├── fertilcenter.com.mx/          # Tu sitio actual
│   ├── index.html               # Tu redirect actual
│   └── web/                     # Tu sitio web actual
│
└── fertilcenter-nextjs/         # Nuevo proyecto Next.js
    ├── Dockerfile
    ├── docker-compose.yml
    ├── nginx-hybrid.conf        # Configuración híbrida
    └── ... resto del proyecto
```

## 🔧 **Configuración nginx Híbrida**

He creado `nginx-hybrid.conf` que:

1. **Mantiene tu sitio actual** en `/`
2. **Sirve Next.js** en `/nueva-web/`
3. **Maneja APIs** correctamente
4. **Incluye comentarios** para migración futura

## ✅ **Pasos Específicos para Ti**

```bash
# 1. NO tocar tu estructura actual
# Tu /var/www/fertilcenter.com.mx/ queda intacto

# 2. Clonar en carpeta separada
cd /var/www
sudo git clone https://github.com/Fertilcenter/WebPage.git fertilcenter-nextjs
sudo chown -R ubuntu:ubuntu fertilcenter-nextjs
cd fertilcenter-nextjs

# 3. Usar configuración híbrida
cp nginx-hybrid.conf nginx.conf

# 4. Configurar variables
cp .env.production.example .env.production
nano .env.production

# 5. Deploy
./deploy.sh production
```

## 🎯 **URLs Finales**

- `fertilcenter.com.mx/` → Tu redirect actual
- `fertilcenter.com.mx/web/` → Tu sitio actual  
- `fertilcenter.com.mx/nueva-web/` → Next.js nuevo
- `fertilcenter.com.mx/nueva-web/api/send-email` → API de Next.js

## 🔄 **Migración cuando estés listo**

Simplemente cambias el redirect:
```html
<!-- De esto: -->
window.location.href = 'https://fertilcenter.com.mx/web';

<!-- A esto: -->
window.location.href = 'https://fertilcenter.com.mx/nueva-web';
```

**¿Te parece bien esta estrategia híbrida?** Es la más segura y te permite migrar gradualmente sin riesgos.
