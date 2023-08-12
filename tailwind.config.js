/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html*"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1400px",
      "2xl": "1536px",
     },
    extend: {
      colors: {
        darkBlack: "hsla(0, 0%, 0%, 1)",
        lightGray: "hsla(0, 0%, 50%, 1)",
        lightGreen: "hsla(162, 100%, 20%, 1)",
        lightPink: "hsla(340, 78%, 70%, 1)",
        lightShadeAuqua: "hsla(167, 41%, 84%, 1)",
      }
    },
  },
  plugins: [],
}

