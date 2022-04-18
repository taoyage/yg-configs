module.exports = {
  plugins: [
    require.resolve('postcss-image-set-polyfill'),
    [
      require.resolve('postcss-preset-env'),
      {
        autoprefixer: {},
        browsers: 'last 2 versions',
        stage: 3,
      },
    ],
  ],
};
