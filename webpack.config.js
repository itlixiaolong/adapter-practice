const path = require('path')
const HtmlWebapckPlugin = require('html-webpack-plugin')
// const DashboardPlugin = require('webpack-dashboard')
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'boundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },

  devtool: 'source-map',
  plugins: [
    new HtmlWebapckPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin([path.join(__dirname, 'dist')])
    // new DashboardPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // 服务器根目录
    open: true,
    hot: true,
    host: 'localhost',
    port: 9000,
    compress: true
  }
}
