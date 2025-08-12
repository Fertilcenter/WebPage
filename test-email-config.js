#!/usr/bin/env node

// Script para probar la configuración SMTP de Fertilcenter
const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

async function testEmailConfig() {
  console.log('🧪 Probando configuración de email para Fertilcenter...\n');
  
  // Verificar variables de entorno
  console.log('📋 Variables de entorno:');
  console.log(`SMTP_HOST: ${process.env.SMTP_HOST || '❌ No configurado'}`);
  console.log(`SMTP_PORT: ${process.env.SMTP_PORT || '❌ No configurado'}`);
  console.log(`SMTP_USER: ${process.env.SMTP_USER || '❌ No configurado'}`);
  console.log(`SMTP_PASSWORD: ${process.env.SMTP_PASSWORD ? '✅ Configurado' : '❌ No configurado'}\n`);
  
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
    console.log('❌ Faltan variables de entorno. Revisa tu archivo .env.local');
    return;
  }
  
  // Crear transporter
  const transporter = nodemailer.createTransporter({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_PORT === '465',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  
  // Verificar conexión
  console.log('🔍 Verificando conexión SMTP...');
  try {
    await transporter.verify();
    console.log('✅ Conexión SMTP exitosa!\n');
    
    // Enviar email de prueba
    console.log('📧 Enviando email de prueba...');
    const testEmail = {
      from: {
        name: 'Fertilcenter Test',
        address: process.env.SMTP_USER
      },
      to: process.env.SMTP_USER, // Enviarse a sí mismo
      subject: '🧪 Prueba de configuración - Fertilcenter',
      html: `
        <h2>¡Configuración exitosa! 🎉</h2>
        <p>Este es un email de prueba desde el sistema de Fertilcenter.</p>
        <p><strong>Fecha:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>Configuración:</strong> ${process.env.SMTP_HOST}:${process.env.SMTP_PORT}</p>
      `
    };
    
    await transporter.sendMail(testEmail);
    console.log('✅ Email de prueba enviado exitosamente!');
    console.log(`📬 Revisa la bandeja de ${process.env.SMTP_USER}`);
    
  } catch (error) {
    console.error('❌ Error de conexión SMTP:', error.message);
    
    if (error.message.includes('Invalid login') || error.message.includes('Username and Password not accepted')) {
      console.log('\n💡 Solución para Gmail:');
      console.log('1. Habilita verificación en 2 pasos');
      console.log('2. Genera una "Contraseña de aplicación"');
      console.log('3. Usa esa contraseña en SMTP_PASSWORD');
      console.log('4. Lee CONFIGURACION_GMAIL.md para más detalles');
    }
  }
}

testEmailConfig().catch(console.error);
