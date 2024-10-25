const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
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
      green: {
        success: "#4BB543",
      },
    },
    fontFamily: {
      ...fontFamily,
      sans: ["Roboto", "ui-sans-serif", "system-ui"],
    },
  },
  plugins: [require("@tailwindcss/forms", "@tailwindcss/typography")],
};
