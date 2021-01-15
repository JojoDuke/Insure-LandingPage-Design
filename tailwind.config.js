module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        karla: ["Karla"],
        dmSerif: ["DM Serif Display"]
      },
      colors: {
        violet: {
          dark: 'hsl(256, 26%, 20%)',
          veryDark: 'hsl(270, 9%, 17%)',
          grayDark: 'hsl(273, 4%, 51%)'
        },
        grayBlue: 'hsl(216, 30%, 68%)',
        grayLight: 'hsl(0, 0%, 98%)'
      },
      spacing: {
        pic: '490px',
        her0: '615px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
