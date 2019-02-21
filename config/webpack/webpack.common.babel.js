import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import Dotenv from 'dotenv-webpack'

import alias from './alias'
import paths from './paths'
import rules from './rules'

module.exports = {
  context: __dirname,
  target: 'web',
  entry: paths.entry,
  module: {
    rules,
  },
  resolve: {
    modules: ['node_modules', paths.src],
    extensions: ['.js', '.json', '.jsx', '.sss'],
    alias,
  },
  // performance: {
  //   hints: 'warning',
  //   maxEntrypointSize: 400000,
  //   assetFilter: assetFilename =>
  //     assetFilename.endsWith('.css') || assetFilename.endsWith('.js'),
  // },
  plugins: [
    new Dotenv(),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.template,
      minify: {
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        preserveLineBreaks: true,
        minifyURLs: true,
        removeComments: true,
        removeAttributeQuotes: true,
      },
    }),
  ],
}
