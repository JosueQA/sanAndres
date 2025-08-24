/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sanAndresBg': '#215FAA',
        'links': '#0645ad',
      },
      fontFamily: {
        tittle : 'Blanquotey',
        montserrat: 'Montserrat',
        dosis: 'Dosis'
      }
    },
  },
  plugins: [],
}