module.exports = {
  extends: "@mate-academy/stylelint-config",
  plugins: [
    "stylelint-scss"
  ],
  ignoreFiles: [
    "**/*.css",
    "**/*.css.map",
    "dist/**",
    "build/**"
  ],
  rules: {}
};
