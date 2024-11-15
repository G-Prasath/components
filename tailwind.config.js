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