/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      "work-sans": ['"Work Sans"', "sans-serif"],
    },
    fontWeight: {
      "extra-light": 200,
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
      "extra-bold": 800,
    },
    extend: {},
  },
  plugins: [],
};
