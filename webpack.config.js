var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js)$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.scss$/, exclude: /node_modules/, use: [ 'style-loader', 'css-loader', 'sass-loader', 'postcss-loader' ]},
      { test: /\.(jpe?g|png|gif|svg|webm|mp4)$/i, use: 'file-loader?name=images/[name].[ext]' },
      { test: /\.(otf|eot|ttf|woff|woff2)$/, exclude: /node_modules/, use: 'file-loader?name=fonts/[name].[ext]' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};