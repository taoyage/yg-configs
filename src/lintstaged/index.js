module.exports = {
  '*.+(js|jsx|json|yml|yaml|css|less|scss|ts|tsx|md)': 'prettier --write',
  '*.{ts,tsx,js,jsx}': 'eslint --fix',
};
