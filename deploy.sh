#!/bin/bash

# deploy.sh - Script de deployment para EC2

echo "🚀 Iniciando deployment..."

# Variables
SERVER_IP="tu-ip-ec2"
SERVER_USER="ubuntu"
PROJECT_PATH="/var/www/wepage"

echo "📦 Sincronizando archivos..."
rsync -avz --exclude 'node_modules' --exclude '.next' --exclude '.git' \
  ./ ${SERVER_USER}@${SERVER_IP}:${PROJECT_PATH}/

echo "🔧 Instalando dependencias y construyendo..."
ssh ${SERVER_USER}@${SERVER_IP} "
  cd ${PROJECT_PATH} && \
  npm ci && \
  npm run build && \
  pm2 restart fertilcenter-web
"

echo "✅ Deployment completado!"
