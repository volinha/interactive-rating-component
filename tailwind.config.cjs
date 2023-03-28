/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(25, 97%, 53%)",
        verydarkblue: "hsl(216, 12%, 8%)",
        lightgrey: "hsl(217, 12%, 63%)",
        mediumgrey: "hsl(216, 12%, 54%)",
        darkblue: "hsl(213, 19%, 18%)",
      },
      fontFamily: {
        sans: ["Overpass", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
