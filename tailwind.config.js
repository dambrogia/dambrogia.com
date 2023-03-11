/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        screens: {
          "2xl": "1200px",
          "xl:": "1200px"
        }
      }
    },
  },
  daisyui: {
    themes: ["business", "night", "forest", "dark", "black", "luxury"],
  },
  plugins: [require("daisyui")],
}
