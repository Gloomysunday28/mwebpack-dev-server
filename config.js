const path = require('path')
const HTMLWebpackPlugin = require('./plugins/HTMLWebpackPlugin')

module.exports = {
  entry: './src/other.js',
  resolveLoaders: './webpack/loaders',
  output: {
    path: path.resolve(__dirname, './dist'),
    fileName: '[name].[hash].js'
  },
  plugins: [
    new HTMLWebpackPlugin()
  ]
}
