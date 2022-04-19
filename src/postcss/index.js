module.exports = {
  plugins: [
    require.resolve('postcss-image-set-polyfill'),
    require.resolve('postcss-flexbugs-fixes'),
    [
      require.resolve('postcss-preset-env'),
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        browsers: 'last 2 versions',
        stage: 3,
      },
    ],
    // Adds PostCSS Normalize as the reset css with default options,
    // so that it honors browserslist config in package.json
    // which in turn let's users customize the target behavior as per their needs.
    require.resolve('postcss-normalize'),
  ],
};
