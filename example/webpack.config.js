const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const swcOptions = require('@taoyage/configs/swc-ts');

const rootPath = path.resolve(__dirname, './');

module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.ts?x$/,
        use: {
          // loader: 'swc-loader',
          // options: swcOptions(rootPath, { isDev: false, override: {} }),
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.css'],
    modules: ['node_modules'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve('tsconfig.json'),
      }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
  ],
};
