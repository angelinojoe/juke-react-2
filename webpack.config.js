'use strict';

var webpack = require('webpack');

module.exports = {
  entry: './browser/react/index.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  context: __dirname,
<<<<<<< HEAD
  devtool: 'source-map',
=======
  devtool: 'source-map',  
>>>>>>> 3991cf4a3d47445730f4ba0ef6a1efc73fa5ae20
  module: {
    loaders: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
<<<<<<< HEAD
        loader: 'babel-loader',
=======
        loader: 'babel',
>>>>>>> 3991cf4a3d47445730f4ba0ef6a1efc73fa5ae20
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
