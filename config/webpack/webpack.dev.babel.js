import webpack from 'webpack'

import paths from './paths'

module.exports = {
  mode: 'development',
  output: {
    path: paths.output,
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  devServer: {
    contentBase: paths.output,
    compress: true,
    historyApiFallback: true,
    hot: true,
    https: false,
    noInfo: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
}
