/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        menuColor: '#767676',
        catagoryColor: '#F5F5F3',
        guarantyColor: '#F0F0F0',
        guarantyP: '#6D6D6D',
        textColor: '#262626',
        hoverColor: '#FFFFFF',
        footerColor: '#F5F5F3',
      },
      backgroundImage: {
        Banner: "url('/src/assets/Group 10.png')",
      }
    },
  },
  plugins: [],
}