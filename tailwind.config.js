/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    container: {
      center: 'true',
    },
    colors: {
      white: '#fff',
      paleBlue: 'hsl(225, 100%, 94%)',
      brgihtBlue: 'hsl(245, 75%, 52%)',
      veryPaleBlue: 'hsl(225, 100%, 98%)',
      DesBlue: 'hsl(224, 23%, 55%)',
      darkBlue: 'hsl(223, 47%, 23%)',
    },
    fontFamily: {
      fontRedhat: 'Red Hat Display',
    },
    extend: {},
  },
  plugins: [],
}
