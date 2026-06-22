/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0A2643',
        'navy-700': '#123356',
        gold: '#D4B86A',
        'gold-deep': '#A87C4F',
        cream: '#FDF8F0',
        ink: '#1B2733',
        muted: '#5B6B7B',
        success: '#16A34A',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 22px 80px rgba(10,38,67,.12)',
        gold: '0 18px 44px rgba(168,124,79,.28)',
      },
    },
  },
  plugins: [],
};
