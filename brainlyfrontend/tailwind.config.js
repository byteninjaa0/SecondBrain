/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        purple:{
          300:"#c4eaeb",
          600:"#0a69a1",
        }
      }
    },
  },
  plugins: [],
}