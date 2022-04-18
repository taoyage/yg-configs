module.exports = {
  extends: [
    require.resolve('stylelint-config-standard'),
    require.resolve('stylelint-config-prettier'),
    require.resolve('stylelint-config-standard-scss'),
    require.resolve('stylelint-config-prettier-scss'),
    require.resolve('stylelint-config-rational-order'),
  ],
  plugins: ['stylelint-order', 'stylelint-declaration-block-no-ignored-properties'],
  rules: {
    'max-nesting-depth': null,
    'no-descending-specificity': null,
    'selector-max-compound-selectors': null,
    'selector-no-qualifying-type': null,
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-alphabetical-order': true,
  },
};
