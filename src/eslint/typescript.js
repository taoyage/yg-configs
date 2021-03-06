module.exports = {
  root: true,
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/typescript',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
  ],
  plugins: ['react', 'jsx-a11y', '@typescript-eslint'],
  rules: {
    ...require('./rules/base'),
    ...require('./rules/jsx'),
    ...require('./rules/react'),
    ...require('./rules/typescript'),
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    requireConfigFile: false,
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
          globalReturn: false,
          impliedStrict: true,
          jsx: true,
        },
        project: './tsconfig.json',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
          ['@', './pages'],
          ['@', './packages'],
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    },
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
    worker: true,
  },
};
