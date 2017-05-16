var webpack           = require('webpack');
var path              = require('path');
var ExtractText       = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var VENDOR_LIBS = [
  'react'
];

var config = {
  entry: {
    bundle: './src/client/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist/client'),
    // bundle.js && vendor.js output name + hash
    filename: '[name].[chunkhash].js'
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
        use: ExtractText.extract({
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
            options: { limit: 40000 }
          },
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [
    // Create style file from the JS files what import fragments of SCSS or CSS
    new ExtractText('style.css'),
    // Load from cache vendor file
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest']
    }),
    // Generate index.html with bundle & vendor files
    new HtmlWebpackPlugin({
      template: 'src/client/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
  ]
};

module.exports = config;