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
        DEFAULT: "##f8f8ff",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
