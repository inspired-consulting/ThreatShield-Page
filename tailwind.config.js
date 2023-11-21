/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,html}"],
  theme: {
    extend: {
      colors: {
        legendary: {
          50: "#eff2fe",
          100: "#e2e6fd",
          200: "#cbd1fa",
          300: "#acb3f5",
          400: "#8788ee",
          500: "#756ee6",
          600: "#6553d8",
          700: "#5744be",
          800: "#47399a",
          900: "#3d357a",
          950: "#241f47",
        },
        sophie: {
          100: "#fff000",
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
