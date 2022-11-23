/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
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
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#10FFCB",
          secondary: "#a5b4fc",
          accent: "#7dd3fc",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
          info: "#FCE4D8",
          success: "#86efac",
          warning: "#FBD87F",
          error: "#fb7185",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
