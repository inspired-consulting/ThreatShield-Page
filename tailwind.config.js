/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,html}"],
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
        }
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
