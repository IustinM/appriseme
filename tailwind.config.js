/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins':['Poppins','sans-serif']
    },
    extend: {
      colors: {
        'black':'#000000',
        'white':'#ffffff',
        'buttonBlue': '#2382D9',
        'buttonPink': '#B1128E',
        'blackText':'#232323',
        'blueText':'#1248B1',
        'pinkText':'#B1128E',
        'textInputGrey':'#00000078'

      },
    },
  
  screens: {
    "2xl": {'max': '1535px'},
    // -› @media (max-width: 1535px) { ... }
    'minxl': {'max': '1000px'},
    'xl': {'max': '1396.5px'},
    'lg': {'max': '1023px'},
    'md': {'max': '767px'},
    'sm': {'max': '539px'},
    'tall': { 'raw': '(max-height: 900px)' },
    },
  plugins: [],
}
}