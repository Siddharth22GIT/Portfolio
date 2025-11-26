/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f3f7ff',
          100: '#e4ecff',
          200: '#c7d7ff',
          300: '#a0bcff',
          400: '#6f93ff',
          500: '#4b6bff',
          600: '#3346e6',
          700: '#2836b4',
          800: '#222e8f',
          900: '#1f296f',
        },
      },
      boxShadow: {
        soft: '0 18px 45px rgba(15, 23, 42, 0.18)',
        'soft-lg': '0 24px 60px rgba(15, 23, 42, 0.22)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}


