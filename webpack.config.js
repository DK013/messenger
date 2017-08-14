// var webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public/js/app');
var CLIENT_DIR = path.resolve(__dirname, 'client');
var SRC_DIR = path.resolve(__dirname, 'src');
var DIST_DIR = path.resolve(__dirname, 'public');
var TEMPLATE_DIR = path.resolve(__dirname, 'src/template');
//var STYLE_DIR = path.resolve(__dirname, 'src/stylesheet');

var config = {
  entry: CLIENT_DIR + '/app.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'app.js'
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: TEMPLATE_DIR,
      to: DIST_DIR
    }])
  ],
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : CLIENT_DIR,
        loader : 'babel-loader'
      },
//      {
//        test : /\.less$/,
//        include : STYLE_DIR,
//        use: [{
//          loader: 'style-loader'
//        }, {
//          loader: 'css-loader',
//          options: { url: false }
//        }, {
//          loader: 'less-loader'
//        }]
//      }
    ]
  }
};

module.exports = config;
