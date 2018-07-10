const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: './src/javascripts/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'javascripts/application.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: { presets: ['es2015'] }
      }, {
        test: /\.css$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      }, {
        test: /\.scss$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'stylesheets/application.css',
    }), 
    new CopyWebpackPlugin([
      { from: 'src/*.html', flatten: true},
      { context: 'src/images', from: "**/*", to: 'images' } 
    ])
  ]
};
