module.exports = {
  extends: [
    "airbnb-vue",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es6: true
  },
  plugins: ["gridsome"],
  rules: {
    "gridsome/format-query-block": "error",
    "no-param-reassign": "error",
    "no-console": "off",
    "no-alert": "off",
  },
};
