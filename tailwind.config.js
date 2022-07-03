/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      "work-sans": ['"Work Sans"', "sans-serif"],
    },
    fontWeight: {
      "really-light": 100,
      "extra-light": 200,
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
      "extra-bold": 800,
    },
    extend: {
      backgroundImage: {
        background: "url('/public/assets/bg.jpg')",
        backgroundAlt: "url('/public/assets/bg-alt.png')",
        logo: "url('/public/assets/logo.jpg')",
        backgroundTrans: "url('/public/assets/bg-trans.png')",
      },
    },
  },
  plugins: [],
};
