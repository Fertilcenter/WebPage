# Guía de Deployment para FertilCenter WebPage

## 🚀 Opciones de Deployment

### Opción 1: Docker (Recomendada) ⭐⭐⭐⭐⭐

**Ventajas:**
- Aislamiento completo
- Consistencia entre entornos
- Fácil rollback
- Gestión de dependencias automática
- SSL/TLS integrado con nginx

**Desventajas:**
- Requiere aprender Docker básico
- Uso de memoria adicional

### Opción 2: Directo con PM2 ⭐⭐⭐⭐

**Ventajas:**
- Setup más simple
- Menor uso de recursos
- Control directo del proceso

**Desventajas:**
- Gestión manual de dependencias
- Posibles conflictos con sistema

## 📋 Preparación del servidor EC2

### 1. Actualizar sistema
```bash
sudo apt update && sudo apt upgrade -y
```

### 2. Instalar Docker (Opción Docker)
```bash
# Instalar Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker ubuntu

# Instalar docker-compose
sudo curl -L "https://github.com/docker/compose/releases/download/v2.21.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

### 3. Instalar Node.js (Opción Directa)
```bash
# Instalar Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Instalar PM2
sudo npm install -g pm2
```

## 🐳 Deployment con Docker

### 1. Clonar proyecto en servidor (SIN tocar la estructura actual)
```bash
cd /var/www
sudo git clone https://github.com/Fertilcenter/WebPage.git fertilcenter-nextjs
sudo chown -R ubuntu:ubuntu fertilcenter-nextjs
cd fertilcenter-nextjs
```

**NOTA IMPORTANTE**: Tu estructura actual se mantiene intacta:
- `/var/www/fertilcenter.com.mx/index.html` (tu redirect actual)
- `/var/www/fertilcenter-nextjs/` (nuevo proyecto Next.js)

### 2. Configurar variables de entorno
```bash
cp .env.production.example .env.production
nano .env.production
# Editar con tus credenciales reales
```

### 3. Configurar SSL
```bash
# Opción A: Certificados existentes
sudo cp /ruta/a/tus/certificados/* ./ssl/

# Opción B: Let's Encrypt (recomendado)
sudo apt install certbot python3-certbot-nginx
sudo certbot certonly --standalone -d fertilcenter.com.mx -d www.fertilcenter.com.mx
sudo cp /etc/letsencrypt/live/fertilcenter.com.mx/* ./ssl/
```

### 4. Hacer backup del sitio actual
```bash
sudo mkdir -p /var/backups
sudo cp -r /var/www/fertilcenter.com.mx /var/backups/fertilcenter-backup-$(date +%Y%m%d)
```

### 5. Ejecutar deployment
```bash
chmod +x deploy.sh
./deploy.sh production
```

## 📦 Deployment Directo (Alternativa)

### 1. Preparar proyecto
```bash
cd /var/www/fertilcenter.com.mx
npm ci
npm run build
```

### 2. Configurar PM2
```bash
# Crear ecosystem file
cat > ecosystem.config.js << EOF
module.exports = {
  apps: [{
    name: 'fertilcenter-web',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/fertilcenter.com.mx',
    instances: 1,
    exec_mode: 'fork',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    log_file: '/var/log/fertilcenter-web.log',
    error_file: '/var/log/fertilcenter-web-error.log',
    out_file: '/var/log/fertilcenter-web-out.log'
  }]
}
EOF

# Iniciar aplicación
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

### 3. Configurar nginx
```bash
sudo nano /etc/nginx/sites-available/fertilcenter.com.mx
```

```nginx
server {
    listen 80;
    server_name fertilcenter.com.mx www.fertilcenter.com.mx;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name fertilcenter.com.mx www.fertilcenter.com.mx;

    ssl_certificate /etc/letsencrypt/live/fertilcenter.com.mx/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/fertilcenter.com.mx/privkey.pem;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/fertilcenter.com.mx /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## 🔧 Monitoreo y Mantenimiento

### Comandos útiles Docker:
```bash
# Ver logs
docker-compose logs -f fertilcenter-web

# Reiniciar aplicación
docker-compose restart fertilcenter-web

# Actualizar aplicación
git pull && ./deploy.sh production

# Ver estado
docker-compose ps
```

### Comandos útiles PM2:
```bash
# Ver estado
pm2 status

# Ver logs
pm2 logs fertilcenter-web

# Reiniciar
pm2 restart fertilcenter-web

# Monitoreo
pm2 monit
```

## 🚨 Troubleshooting

### Problema: Puerto 3000 en uso
```bash
sudo lsof -i :3000
sudo kill -9 <PID>
```

### Problema: Certificados SSL
```bash
# Renovar Let's Encrypt
sudo certbot renew
docker-compose restart nginx  # si usas Docker
sudo systemctl reload nginx   # si usas nginx directo
```

### Problema: Aplicación no inicia
```bash
# Verificar logs
docker-compose logs fertilcenter-web  # Docker
pm2 logs fertilcenter-web             # PM2

# Verificar variables de entorno
cat .env.production
```

## 📊 Recomendación Final

**Para fertilcenter.com.mx recomiendo Docker** porque:

1. ✅ Tu sitio actual queda intacto como backup
2. ✅ Aislamiento total (no afecta sistema)
3. ✅ SSL automático con nginx
4. ✅ Fácil rollback si algo falla
5. ✅ Escalabilidad futura
6. ✅ Gestión profesional de logs

**Pasos siguiente:**
1. Hacer backup completo del sitio actual
2. Instalar Docker en EC2
3. Clonar proyecto y configurar variables
4. Ejecutar `./deploy.sh production`
5. Configurar DNS si es necesario
