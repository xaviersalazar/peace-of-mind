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
        background: "url('../public/bg.png')",
        backgroundTwo: "url('../public/bg-2.png')",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#10FFCB",
          secondary: "#B5F8FE",
          accent: "#7dd3fc",
          neutral: "#10FFCB",
          "base-100": "#FFFFFF",
          info: "#FCE4D8",
          success: "#86efac",
          warning: "#FBD87F",
          error: "#F75590",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
