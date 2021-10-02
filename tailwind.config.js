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
        light: "#E8E8E8",
      },
    },
    fontFamily: {
      'roboto' : [],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
