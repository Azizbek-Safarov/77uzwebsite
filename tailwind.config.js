/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',              
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
      },
      boxShadow: {
        'icon': '0 4px 20px #00000033', 
        'customdiv' : '0 4px 16px #00000008',
      },
    },
  },
  plugins: [],
};