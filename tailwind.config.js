/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-main-theme': '#191919',
        'crimson' : '#cf112b'
      }
    },
  },
  plugins: [],
}
