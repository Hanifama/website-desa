/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        openFromCenter: 'openFromCenter 1s ease-out forwards', // Animasi card
        fadeInText: 'fadeInText 1s ease-out forwards 1s', // Animasi teks dengan delay
        fadeInImages: 'fadeInImages 1s ease-out forwards 2s', // Animasi gambar dengan delay setelah teks
        fadeIn: 'fadeIn 1s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        openFromCenter: {
          '0%': {
            transform: 'scaleX(0)',
            opacity: '0',
            transformOrigin: 'center',
          },
          '100%': {
            transform: 'scaleX(1)',
            opacity: '1',
            transformOrigin: 'center',
          },
        },
        fadeInText: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        fadeInImages: {
          '0%': {
            opacity: '0',
            transform: 'translateX(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),  
  ],
}

