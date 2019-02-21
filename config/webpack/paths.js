const path = require('path')

const root = path.resolve(__dirname, '../../')

module.exports = {
  root,
  src: path.resolve(root, 'src'),
  entry: path.resolve(root, 'src/index.js'),
  template: path.resolve(root, 'src/index.html'),
  output: path.resolve(root, 'public'),
}
