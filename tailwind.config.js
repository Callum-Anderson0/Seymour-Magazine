/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}",
            "./index.html"],
  theme: {
    extend: {
      colors: {
        brandOrange: '#ee5d00', // or use hex: '#ee5d00'
      },
    },
  },
  plugins: [],
}

