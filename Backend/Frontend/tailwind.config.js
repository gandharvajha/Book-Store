/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

    darkMode: 'class',
   
  theme: {
    extend: {},
    backgroundImage: {
      'Contact-banner': "url('./src/assets/book.png')"
    }
  },
  plugins: [
    require('daisyui'), 
  ],
}