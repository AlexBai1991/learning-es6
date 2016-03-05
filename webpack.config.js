'use strict';

var webpack = require('webpack');

module.exports = {
  watch: true,
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: './dist',
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [

  ],
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  }
};