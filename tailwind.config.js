/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7d36aa', // Morado principal
          dark: '#6d318d',
          light: '#f6f2fa',
        },
        accent: {
          yellow: '#ffdb58',
          light: '#fffbe8',
        },
        purple: '#a68ec9',
        'fertil-purple': '#7d36aa',
        'fertil-yellow': '#ffdb58',
        'fertil-bg': '#f6f2fa',
      },
      fontFamily: {
        'futura': ['Futura', 'sans-serif'],
        'montserrat-heavy': ['Montserrat Heavy', 'Futura', 'sans-serif'],
        sans: ['Futura', 'sans-serif'],
      },
      fontSize: {
        'hero-title': ['3rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'hero-title-lg': ['5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-title-xl': ['5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-subtitle': ['1.4rem', { lineHeight: '1.5' }],
        'hero-subtitle-lg': ['1.5rem', { lineHeight: '1.5' }],
      },
      minHeight: {
        'screen': '20vh',
      },
    },
  },
  plugins: [],
}