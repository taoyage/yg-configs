const path = require('path');
const browsersList = require('../browserslist');

const validateBoolOption = (name, value, defaultValue) => {
  if (typeof value === 'undefined') {
    value = defaultValue;
  }
  if (typeof value !== 'boolean') {
    throw new Error(`Preset @taoyage/configs/babel: '${name}' option must be a boolean.`);
  }
  return value;
};
module.exports = function (api, opts = {}) {
  api.assertVersion(7);
  const env = api.env();
  const isEnvDevelopment = env === 'development';
  const isEnvProduction = env === 'production';
  const isEnvTest = env === 'test';
  const isTypeScriptEnabled = validateBoolOption('typescript', opts.typescript, true);
  const useESModules = validateBoolOption('useESModules', opts.useESModules, isEnvDevelopment || isEnvProduction);
  const areHelpersEnabled = validateBoolOption('helpers', opts.helpers, true);

  const runtimePath = path.dirname(require.resolve('@babel/runtime/package.json'));
  const runtimeVersion = require('@babel/runtime/package.json').version;

  const { useBuiltIns = 'usage', pol } = options;

  if (!isEnvDevelopment && !isEnvProduction && !isEnvTest) {
    throw new Error(
      'Using `@taoyage/configs/babel` requires that you specify `NODE_ENV` or ' +
        '`BABEL_ENV` environment variables. Valid values are "development", ' +
        '"test", and "production". Instead, received: ' +
        JSON.stringify(env) +
        '.'
    );
  }
  return {
    presets: [
      isEnvTest && [
        require('@babel/preset-env').default,
        {
          targets: {
            node: 'current',
          },
        },
      ],
      (isEnvProduction || isEnvDevelopment) && [
        require('@babel/preset-env').default,
        {
          useBuiltIns: useBuiltIns,
          corejs: 3,
          exclude: ['transform-typeof-symbol'],
          bugfixes: true,
        },
      ],
      [
        require('@babel/preset-react').default,
        {
          development: isEnvDevelopment || isEnvTest,
          ...(opts.runtime !== 'automatic' ? { useBuiltIns: true } : {}),
          runtime: opts.runtime || 'classic',
        },
      ],
      isTypeScriptEnabled && [require('@babel/preset-typescript').default],
    ].filter(Boolean),
    plugins: [
      isTypeScriptEnabled && [require('@babel/plugin-proposal-decorators').default, { legacy: true }],
      [
        require('@babel/plugin-proposal-class-properties').default,
        {
          loose: true,
        },
      ],
      [
        require('@babel/plugin-proposal-private-methods').default,
        {
          loose: true,
        },
      ],
      [
        require('@babel/plugin-proposal-private-property-in-object').default,
        {
          loose: true,
        },
      ],
      [
        require('@babel/plugin-transform-runtime').default,
        {
          corejs: false,
          helpers: areHelpersEnabled,
          version: runtimeVersion,
          regenerator: useBuiltIns !== 'usage',
          useESModules,
          absoluteRuntime: runtimePath,
        },
      ],
      isEnvProduction && [
        require('babel-plugin-transform-react-remove-prop-types').default,
        {
          removeImport: true,
        },
      ],
      require('@babel/plugin-proposal-optional-chaining').default,
      require('@babel/plugin-proposal-nullish-coalescing-operator').default,
    ].filter(Boolean),
  };
};
