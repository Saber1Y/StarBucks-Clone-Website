/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html*"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1400px",
      xxl: "1536px",
     },
    extend: {
      colors: {
        darkBlack: "hsla(0, 0%, 0%, 1)",
        lightGray: "hsla(0, 0%, 50%, 1)",
        lightGreen: "hsla(162, 100%, 20%, 1)",
        lightPink: "hsla(340, 78%, 70%, 1)",
        lightShadeAuqua: "hsla(167, 41%, 84%, 1)",
        lavender: 'hsla(243, 56%, 75%, 1)',
        lightYellow: 'hsla(68, 100%, 75%, 1)',
        lightSupgrey: 'hsla(0, 0%, 0%, 0.58)',
      }
    },
  },
  plugins: [],
}

