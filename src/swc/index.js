const { access } = require('fs/promises');
const fs = require('fs');
const path = require('path');

function swcOptions(rootPath, { isDev = false, overrides = {} }) {
  const tsConfig = getTsConfig(rootPath);
  const swcBaseOptions = getSwcOptions(tsConfig, isDev, overrides);
  return swcBaseOptions;
}

const getTsConfig = async (rootPath) => {
  const filename = 'tsconfig.json';
  const filePath = path.resolve(__dirname, rootPath, filename);
  try {
    await access(filePath, fs.constants.F_OK);
    const json = fs.readFileSync(filePath);
    const tsConfig = JSON.parse(json);
    return tsConfig;
  } catch {
    throw 'create tsconfig.json to root path';
  }
};

const getSwcOptions = (tsConfig, isDev, overrides) => {
  const parserConfig = getParserOptions(tsConfig);
  const path = tsConfig?.compilerOptions?.paths;
  const { parser = {}, experimental = {} } = overrides;
  // enable decorators
  const enableDecorators = Boolean(tsConfig?.compilerOptions?.experimentalDecorators);
  // suport reflect metadata
  const emitDecoratorMetadata = Boolean(tsConfig?.compilerOptions?.emitDecoratorMetadata);
  // compiler class fields to Object.defineProperty
  const useDefineForClassFields = Boolean(tsConfig?.compilerOptions?.useDefineForClassFields);

  return {
    jsc: {
      parser: { ...parserConfig, ...parser },
      experimental: {
        keepImportAssertions: true,
        ...experimental,
      },
      transform: {
        legacyDecorator: enableDecorators, // stag1
        decoratorMetadata: emitDecoratorMetadata, // reflect metadata
        useDefineForClassFields: useDefineForClassFields, // transform class feilds to Object.defineProperty
        react: {
          importSource: 'react',
          runtime: 'automatic',
          pragma: 'React.createElement', // transform tsx
          pragmaFrag: 'React.Fragment',
          throwIfNamespace: true,
          development: isDev, // is development
          useBuiltins: true,
          refresh: true, // refresh react
        },
        optimizer: {
          simplify: false,
          globals: {
            envs: {
              NODE_ENV: isDev ? '"development"' : '"production"',
            },
            typeofs: {
              window: 'object', // typeof window = 'object'
            },
          },
        },
      },
    },
    minify: !isDev,
  };
};

const getParserOptions = (tsConfig) => {
  const enableDecorators = Boolean(tsConfig?.compilerOptions?.experimentalDecorators);

  return {
    syntax: 'typescript',
    dynamicImport: true,
    decorators: enableDecorators,
    importAssertions: true,
  };
};

module.exports = swcOptions;
