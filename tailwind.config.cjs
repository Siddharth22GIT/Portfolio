/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#0a0a0a',
        paper: '#ffffff',
        ash: '#f4f4f4',
        muted: '#737373',
      },
    },
  },
  plugins: [],
}
