/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        'primary-100': '#850A0A'
      },
    
      fontFamily: {
        'staubach': ['staubach'],
        'akkordeonSlab': ['akkordeonSlab'],
      }
    },
  },
  plugins: [],
}

