module.exports = {
 extends: '@mate-academy/stylelint-config',
 plugins: ['stylelint-scss'],
 rules: {
  'at-rule-empty-line-before': null,
  'rule-empty-line-before': null,
  'declaration-block-no-duplicate-properties': [
   true,
   {
    ignore: ['consecutive-duplicates-with-different-values'],
   },
  ],
 },
};
