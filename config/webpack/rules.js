import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const env = process.env.NODE_ENV
const isDevMode = env !== 'production'

module.exports = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
  },
  {
    test: /\.(ttf|eot|woff|woff2)$/,
    use: {
      loader: 'url-loader',
      options: {
        limit: 50000, // 50kb
        name: '[name].[ext]',
      },
    },
  },
  {
    test: /\.sass$/,
    use: [
      {
        loader: isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
        options: {},
      },
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          url: false,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          sourceMap: true,
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
        },
      },
    ],
  },
]
