# Fertilcenter® Landing Page

Landing page inspirada en la campaña "Sabemos cómo te sientes" para Fertilcenter, creada desde cero con Next.js 15, TypeScript, TailwindCSS y Framer Motion.

---
## Proceso para dar de alta en EC2
  Tomando en cuenta de que actualmente está activo, debemos de eliminar el contenedor actual dentro de /var/www/fertilcenter.com.mx/webpage
  1. Entrar a la instancia por AWS EC2
  Entrar a la ruta del proyecto webpage
  2. /var/www/fertilcenter.com.mx/webpage
  Detener el contenedor actual
  3. docker-compose down
  Eliminar docker anterior
  4. docker rmi $(docker images -aq) --force
  Eliminar residuos
  5. docker system prune -f
  Hacer pull de los cambios en caso de que haya
  6. git pull origin main
  Construir el contenedor
  7. docker-compose build --no-cache fertilcenter-web
  Levantar el contenedor
  8. docker-compose up -d fertilcenter-web

  NOTAS: Archivos de configuración importantes
  - next.config.js (configuración de Next.js) - Este archivo es crucial para la configuración del proyecto Next.js.
  - nginx.conf (configuración de Nginx) - Este archivo es crucial para la configuración del servidor web.
  - docker-compose.yml (configuración de Docker Compose) - Este archivo es crucial para definir los servicios, volúmenes y redes.
  - /etc/apache2/sites-available/fertilcenter.com.mx.conf - Este archivo es importante para la configuración del dominio y el proxy inverso.

## 🚀 Tecnologías

- **Next.js 15 (App Router)**
- **TypeScript**
- **TailwindCSS**
- **Framer Motion**
- **SEO, responsive y accesibilidad**

---

## 📁 Estructura

```
fertilcenter-landing/
├── public/
│   └── images/           # Coloca aquí los logos, fotos, etc.
├── src/
│   ├── app/
│   │    ├── layout.tsx
│   │    ├── page.tsx
│   ├── components/
│   │    ├── [todos los componentes de cada sección]
│   └── lib/
│        └── utils.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🎨 Paleta de colores

- Morado: `#7d36aa`
- Morado oscuro: `#6d318d`
- Amarillo: `#ffdb58`
- Fondo claro: `#f6f2fa`

---

## 🧑‍💻 Instalación

1. **Instala dependencias**  
```bash
npm install
```

2. **Ejecuta en modo desarrollo**  
```bash
npm run dev
```

---

## 🖼️ Imágenes

Coloca todas las imágenes necesarias en `public/images/`


**Desarrollado por Fertilcenter**