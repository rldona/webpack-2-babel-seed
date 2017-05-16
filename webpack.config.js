const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '../build/'
  },
  module: {
    // Babel config
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /(node_modules)/
      },
      // Sass config
      {
        test: /\.scss$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      // Image & url config
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 40000
            }
          },
          'image-webpack-loader'
        ]
      }
    ]
  },
  // Create independient css file from all js files
  plugins: [
    new ExtractTextWebpackPlugin('style.css')
  ]
};

module.exports = config;