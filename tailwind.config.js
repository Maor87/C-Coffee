/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chocolate: '#cb863f',
        brown: {
          50: '#954535',
          100: '#7B3F00',
          200: '#6F4E37',
          300: '#5C4033',
          400: '#f3cac5',
          500: '#f0bcb8',
          600: '#eeadb1',
          700: '#e59fa4',
          800: '#df9197',
          900: '#d9848a',
        }
      }
    },
  },
  plugins: [],
}

