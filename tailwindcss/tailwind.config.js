/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
            './public/*.{html,js}',
            './project/*.{html,js}',
            './Javascript/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")]
}
