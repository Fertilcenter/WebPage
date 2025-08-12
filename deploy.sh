#!/bin/bash

# Script de deployment para FertilCenter WebPage
# Uso: ./deploy.sh [production|staging]

set -e

ENVIRONMENT=${1:-production}
PROJECT_NAME="fertilcenter-webapp"
DOMAIN="fertilcenter.com.mx"

echo "🚀 Iniciando deployment para $ENVIRONMENT..."

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Función para logging
log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}"
}

warn() {
    echo -e "${YELLOW}[$(date +'%Y-%m-%d %H:%M:%S')] WARNING: $1${NC}"
}

error() {
    echo -e "${RED}[$(date +'%Y-%m-%d %H:%M:%S')] ERROR: $1${NC}"
    exit 1
}

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    error "No se encontró package.json. Ejecuta este script desde la raíz del proyecto."
fi

# Verificar que Docker está instalado
if ! command -v docker &> /dev/null; then
    error "Docker no está instalado. Por favor instala Docker primero."
fi

# Verificar que docker-compose está instalado
if ! command -v docker-compose &> /dev/null; then
    error "docker-compose no está instalado. Por favor instala docker-compose primero."
fi

# Crear directorio de logs si no existe
mkdir -p logs
mkdir -p ssl

# Backup de la aplicación actual (si existe)
if [ "$ENVIRONMENT" = "production" ]; then
    log "Creando backup de la aplicación actual..."
    BACKUP_DIR="/var/backups/fertilcenter-$(date +%Y%m%d_%H%M%S)"
    sudo mkdir -p "$BACKUP_DIR"
    
    if [ -d "/var/www/fertilcenter.com.mx" ]; then
        sudo cp -r /var/www/fertilcenter.com.mx "$BACKUP_DIR/old-website"
        log "Backup creado en: $BACKUP_DIR"
    fi
fi

# Detener contenedores existentes si existen
log "Deteniendo contenedores existentes..."
docker-compose down || true

# Construir nuevas imágenes
log "Construyendo nuevas imágenes Docker..."
docker-compose build --no-cache

# Verificar archivo de variables de entorno
if [ ! -f ".env.production" ] && [ "$ENVIRONMENT" = "production" ]; then
    warn "No se encontró .env.production. Creando template..."
    cat > .env.production << EOF
# Configuración de Email SMTP
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu-email@gmail.com
SMTP_PASSWORD=tu-password-de-aplicacion

# Configuración de Next.js
NEXT_TELEMETRY_DISABLED=1
NODE_ENV=production
EOF
    warn "Por favor edita .env.production con tus credenciales reales antes de continuar."
    read -p "Presiona Enter cuando hayas configurado las variables de entorno..."
fi

# Iniciar servicios
log "Iniciando servicios..."
docker-compose up -d

# Esperar a que la aplicación esté lista
log "Esperando a que la aplicación esté lista..."
sleep 10

# Verificar que la aplicación está funcionando
log "Verificando estado de la aplicación..."
if curl -f http://localhost:3000 >/dev/null 2>&1; then
    log "✅ Aplicación iniciada correctamente en puerto 3000"
else
    error "❌ La aplicación no responde en puerto 3000"
fi

# Verificar nginx
if curl -f http://localhost >/dev/null 2>&1; then
    log "✅ Nginx funcionando correctamente"
else
    warn "⚠️  Nginx puede no estar funcionando correctamente"
fi

# Mostrar estado de contenedores
log "Estado de contenedores:"
docker-compose ps

# Configurar certificado SSL (si es necesario)
if [ "$ENVIRONMENT" = "production" ] && [ ! -f "ssl/fertilcenter.com.mx.crt" ]; then
    warn "No se encontraron certificados SSL en ssl/"
    echo "Para configurar SSL:"
    echo "1. Copia tus certificados a la carpeta ssl/"
    echo "2. Reinicia nginx: docker-compose restart nginx"
    echo ""
    echo "O usa Let's Encrypt:"
    echo "sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN"
fi

log "🎉 Deployment completado!"
echo ""
echo "📊 Información del deployment:"
echo "  🌐 URL: https://$DOMAIN"
echo "  📱 Aplicación: http://localhost:3000"
echo "  🔧 Logs: docker-compose logs -f"
echo "  📋 Estado: docker-compose ps"
echo ""
echo "📝 Comandos útiles:"
echo "  Ver logs: docker-compose logs -f fertilcenter-web"
echo "  Reiniciar: docker-compose restart"
echo "  Detener: docker-compose down"
echo "  Actualizar: git pull && ./deploy.sh $ENVIRONMENT"
