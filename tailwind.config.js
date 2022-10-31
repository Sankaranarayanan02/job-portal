/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,html,tsx}",
    './components/*.{js,jsx,ts,html,tsx}'
    
  ],

  theme: {
    darkMode:'class',
    extend: {
      colors: {
        one:'#F8F1FF',
        two:'#E0F9EA',
        three:'#FAFAFA',
        four:'#624DE3'

      }
    
    
    },
    fontFamily: {
      sans: ['Arbeit','Helvetica Neue','arial','Noto Sans','sans-serif','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji']
    }
  },
  plugins: [],
}
