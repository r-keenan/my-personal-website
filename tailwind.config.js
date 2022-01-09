const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: {
        light: "#00b9fb",
        dark: "#011439",
      },
      white: {
        DEFAULT: "#F1F1F1",
      },
      gray: {
        lighter: "#F9FAFB",
        light: "#E8E8E8",
        medium: "#6b7280",
        dark: "#1F2937",
      },
      red: {
        warning: "#dc143c",
      },
    },
    fontFamily: {
      ...fontFamily,
      sans: ["Roboto", "ui-sans-serif", "system-ui"],
    },
  },
  plugins: [require("@tailwindcss/forms", "@tailwindcss/typography")],
};
