const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {},
    fontFamily: {
      main: ['Lato', 'sans-serif']
    },
    colors: {
      main: {
        golden: '#eccc68' 
      },
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink
    }
  },
  plugins: [],
}
