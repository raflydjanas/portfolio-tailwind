/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode : 'class',
  theme: {
    container : {
      center : true,
      padding : '16px',
    },
    extend: {
      colors : {
        primary : '#0d9488',
        dark : '#0f172a',
        font : '#64748b'
      },
      screens : {
        '2xl' : '1230px',
      }
    },
  },
  plugins: [],
}

