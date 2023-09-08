/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html*"],
  theme: {
    font: {
      Samp: 'SoDoSans, "Helvetica Neue", Helvetica, Arial, sans-serif'
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1400px",
      xxl: "1536px",
     },
    extend: {
      fontFamily: {
        sodo: ['SoDoSans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        'custom': 'calc(1em * (calc(600 / 13)))',
      },
      fontSize: {
        '28': '28px', 
        '24': '24px',
      },
      colors: {
        darkBlack: "hsla(0, 0%, 0%, 1)",
        lightGray: "hsla(0, 0%, 50%, 1)",
        lightSupGray: 'rgba(0,0,0,0.87)',
        lightGreen: "hsla(162, 100%, 20%, 1)",
        lightPink: "hsla(340, 78%, 70%, 1)",
        lightShadeAuqua: "hsla(167, 41%, 84%, 1)",
        lavender: 'hsla(243, 56%, 75%, 1)',
        lightYellow: 'hsla(68, 100%, 75%, 1)',
        lightSupgrey: 'hsla(0, 0%, 0%, 0.58)',
        whiteGray: 'rgb(249,249,249)',
        SupGreen: 'hsl(164,31%,17%)',
        veryLightGreen: '#d4e9e2',
        lightYellow: 'hsl(39, 67%, 51%)',
      },
    },
  },
  plugins: [],
}

