/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f2e5ff',
          100: '#e5ccff',
          200: '#ca99ff',
          300: '#b066ff',
          400: '#9633ff',
          500: '#7b00ff',
          600: '#7a00cc',
          700: '#4a0099',
          800: '#310066',
          900: '#190033',
          950: '#110024',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}
