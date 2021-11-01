const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./Layout/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        mono: [
          '"JetBrains Mono"',
          '"Fira Code"',
          ...defaultTheme.fontFamily.mono,
        ],
      },
      colors: {
        background: "#DDDEDE",
        primary: "#A20A01",
        shades: {
          primary: "#BE402C",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
