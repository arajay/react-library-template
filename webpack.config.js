/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      type: 'commonjs'
    }
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            // disable type checker
            transpileOnly: true
          }
        }
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    // faster type checker
    new ForkTsCheckerWebpackPlugin(),
    // linting
    new ESLintPlugin({
      extensions: ['.ts', '.tsx', '.js', '.mdx'],
      fix: true,
    })
  ]
};