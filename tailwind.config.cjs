/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#119955',
      },
      fontFamily: {
        syne: ['Syne'],
      }
    }
  },
  plugins: [],
  darkMode: 'class',
}
