/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,html,hbs}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#F8F6FB",
          200: "#E1D6F6",
          300: "#A583E5",
          400: "#8759DD",
          500: "#6930D4",
          600: "#5426AA",
          700: "#3F1D7F",
          800: "#2A1355",
          900: "#150A2A",
        },
        secondary: {
          50: "#f1fcfb",
          100: "#f1fcfb",
          200: "#9df2eb",
          300: "#64e4e0",
          400: "#34cdcc",
          500: "#1bb0b1",
          600: "#138a8e",
          700: "#146d71",
          800: "#14575b",
          900: "#16484b",
          950: "#06292d",
        },
        gray: {
          100: "#FEFEFF",
          200: "#D7D8DF",
          300: "#C2C5D0",
          400: "#AEB1C0",
          500: "#9396A7",
          600: "#7E8291",
          700: "#626571",
          800: "#393B42",
          900: "#1A1B1F",
        },
      },
    },
  },
  plugins: [],
  fontFamily: {
    sans: [
      "system-ui",
      "ui-sans-serif",
      "Roboto",
      "Helvetica Neue",
      "sans-serif",
    ],
    serif: ["ui-serif", "Georgia"],
    mono: ["ui-monospace", "SFMono-Regular"],
  },
  container: {
    padding: {
      DEFAULT: "1rem",
      sm: "2rem",
      md: "2rem",
      lg: "6rem",
      xl: "8rem",
      "2xl": "12rem",
    },
  },
};
