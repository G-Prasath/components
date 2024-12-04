/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      clipPath: {
        'custom-polygon': 'polygon(0 0, 100% 0, 90% 100%, 0 100%)',
      },
      keyframes: {
        moveIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        moveIn: 'moveIn 0.3s ease-out',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.clip-custom-polygon': {
          clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0 100%)',
        },
      });
    },
  ],
}