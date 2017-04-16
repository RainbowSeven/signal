const webpack = require( 'webpack' );
const path = require('path');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './index.js'
  ],
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '..', '/dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'react-hot!babel',},
      { test: /\.css$/, exclude: /node_modules/, loader: 'style-loader!css-loader'},
      { test: /\.json$/, loader: 'json-loader'},
    ],
  },
  devServer: {
    contentBase: '..',
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    },
  },
  resolve: {
    modules: ['node_modules'],
    root: path.resolve(__dirname, '..', 'src'),
    extensions: [
      '',
      '.js',
    ],
    packageMains: [
      'jsnext:main',
      'main',
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  node: {
    fs: "empty"
  } 
};