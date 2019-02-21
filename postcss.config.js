/* eslint-disable import/no-extraneous-dependencies */
module.exports = {
  plugins: [
    require('postcss-easy-import')({
      path: ['./src/'],
      extensions: ['.css', '.sass'],
    }),
    require('postcss-apply')(),
    require('postcss-preset-env')({
      stage: 0,
      features: {
        'custom-properties': { preserve: false },
      },
    }),
    require('postcss-inline-svg')({
      path: './src/',
    }),
    require('cssnano')({
      preset: [
        'default',
        {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    }),
  ],
}
