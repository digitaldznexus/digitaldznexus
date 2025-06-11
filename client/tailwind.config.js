/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-1': ['4.5rem', { lineHeight: '1.2', letterSpacing: '-0.5px' }],
        'display-2': ['4rem', { lineHeight: '1.2', letterSpacing: '-0.5px' }],
        'display-3': ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.5px' }],
        'heading-1': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.5px' }],
        'heading-2': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.5px' }],
        'heading-3': ['1.75rem', { lineHeight: '1.2', letterSpacing: '-0.5px' }],
      },
      colors: {
        'noir': '#111111',
        'gris-clair': '#F5F7FA',
        'bleu': '#2563EB',
        'orange': '#F97316',
        'gris-texte': '#4B5563',
      },
    },
  },
  plugins: [],
} 