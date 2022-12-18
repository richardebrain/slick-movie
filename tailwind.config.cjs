/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "headersGrey":"#292929"
      },
      fontFamily: {
        "DmSans": ["DM Sans", "sans-serif"],
      },
      screens: {
        'xs': '321px',
        'sm': '834px',
        'lg': '1440px',
      }
    },
  },
  plugins: [],
}
