var webpack = require( 'webpack' );

module.exports = {
  context: __dirname + '/src',
  entry: './js/app.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist/js',
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loaders: ['babel-loader'],
      }
    ],
  },
};