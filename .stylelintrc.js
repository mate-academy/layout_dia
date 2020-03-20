module.exports = {
  extends: [
    "stylelint-config-recommended-scss",
    "@mate-academy/stylelint-config"
  ],
  plugins: [
    "stylelint-scss"
  ],
  rules: {
    "max-line-length":[120, {
			"ignorePattern": ["/\\/\\*.*?\\*\\//"]
		}]
  }
};
