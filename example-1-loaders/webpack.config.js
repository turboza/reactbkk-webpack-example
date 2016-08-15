var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/entry.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel?cacheDirectory'],
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loaders: ['url?limit=100000'],
      },
    ]
  }
};
