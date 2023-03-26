/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black':'#000000',
        'white':'#ffffff',
        'buttonBlue': '#2382D9',
      },
    },
  },
  plugins: [],
}