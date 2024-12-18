module.exports = {
  extends: ["next/core-web-vitals", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "@next/next/no-page-custom-font": "off",
  },
};
