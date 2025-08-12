#!/bin/bash

# Script para preparar EC2 para deployment híbrido
# Ejecutar como: bash prepare-ec2.sh

echo "🚀 Preparando servidor EC2 para FertilCenter Next.js..."

# Colores
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

log() {
    echo -e "${GREEN}[$(date +'%H:%M:%S')] $1${NC}"
}

warn() {
    echo -e "${YELLOW}[$(date +'%H:%M:%S')] $1${NC}"
}

error() {
    echo -e "${RED}[$(date +'%H:%M:%S')] ERROR: $1${NC}"
    exit 1
}

# Verificar que estamos en Ubuntu
if [ ! -f /etc/lsb-release ]; then
    error "Este script está diseñado para Ubuntu"
fi

log "Actualizando sistema..."
sudo apt update && sudo apt upgrade -y

log "Instalando dependencias básicas..."
sudo apt install -y curl wget git unzip

# Verificar si Docker ya está instalado
if command -v docker &> /dev/null; then
    log "Docker ya está instalado: $(docker --version)"
else
    log "Instalando Docker..."
    curl -fsSL https://get.docker.com -o get-docker.sh
    sudo sh get-docker.sh
    sudo usermod -aG docker ubuntu
    rm get-docker.sh
    log "Docker instalado exitosamente"
fi

# Verificar si docker-compose ya está instalado
if command -v docker-compose &> /dev/null; then
    log "docker-compose ya está instalado: $(docker-compose --version)"
else
    log "Instalando docker-compose..."
    sudo curl -L "https://github.com/docker/compose/releases/download/v2.21.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
    log "docker-compose instalado exitosamente"
fi

# Crear backup del sitio actual
log "Creando backup del sitio actual..."
if [ -d "/var/www/fertilcenter.com.mx" ]; then
    BACKUP_DIR="/var/backups/fertilcenter-backup-$(date +%Y%m%d_%H%M%S)"
    sudo mkdir -p "$BACKUP_DIR"
    sudo cp -r /var/www/fertilcenter.com.mx "$BACKUP_DIR/"
    log "✅ Backup creado en: $BACKUP_DIR"
else
    warn "No se encontró /var/www/fertilcenter.com.mx - continuando sin backup"
fi

# Crear directorio para el nuevo proyecto
log "Preparando directorio para el proyecto Next.js..."
cd /var/www

# Verificar si ya existe el directorio
if [ -d "fertilcenter-nextjs" ]; then
    warn "El directorio fertilcenter-nextjs ya existe. ¿Deseas continuar? (y/n)"
    read -r response
    if [[ "$response" != "y" && "$response" != "Y" ]]; then
        log "Operación cancelada por el usuario"
        exit 0
    fi
    sudo rm -rf fertilcenter-nextjs
fi

log "Clonando proyecto desde GitHub..."
sudo git clone https://github.com/Fertilcenter/WebPage.git fertilcenter-nextjs

# Verificar que el clone fue exitoso
if [ ! -d "fertilcenter-nextjs" ]; then
    error "No se pudo clonar el repositorio"
fi

# Cambiar propietario
sudo chown -R ubuntu:ubuntu fertilcenter-nextjs

log "Entrando al directorio del proyecto..."
cd fertilcenter-nextjs

# Verificar archivos necesarios
if [ ! -f "docker-compose.yml" ]; then
    error "No se encontró docker-compose.yml en el proyecto"
fi

if [ ! -f "Dockerfile" ]; then
    error "No se encontró Dockerfile en el proyecto"
fi

log "✅ Preparación completada!"
echo ""
echo "📋 Resumen de la preparación:"
echo "  🐳 Docker: $(docker --version)"
echo "  🔧 docker-compose: $(docker-compose --version)"
echo "  📁 Proyecto clonado en: /var/www/fertilcenter-nextjs"
echo "  💾 Backup en: $BACKUP_DIR"
echo ""
echo "🎯 Próximos pasos:"
echo "  1. cd /var/www/fertilcenter-nextjs"
echo "  2. cp .env.production.example .env.production"
echo "  3. nano .env.production  # Configurar credenciales SMTP"
echo "  4. ./deploy.sh production"
echo ""
warn "IMPORTANTE: Reinicia la sesión SSH para que los cambios de Docker tengan efecto:"
warn "  exit"
warn "  ssh ubuntu@tu-servidor"
