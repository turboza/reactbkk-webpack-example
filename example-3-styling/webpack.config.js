var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: path.resolve(__dirname, 'src/entry.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  devtool: 'eval-cheap-module-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel?cacheDirectory'],
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css?module&localIdentName=[local]___[hash:base64:5]', 'postcss'],
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css?module&localIdentName=[local]___[hash:base64:5]', 'postcss', 'sass'],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loaders: ['url?limit=100000'],
      },
    ]
  },
  postcss: function () {
    return [autoprefixer];
    // return [autoprefixer({ browsers: ['last 2 versions'] })]; // <-- In case we want to limit to only new browsers
  },
  resolve: {
    modulesDirectories: ['src', 'node_modules'],
    extensions: ['', '.json', '.js', '.jsx']
  },
  devServer: {
    inline: true,
    host: '0.0.0.0',
    port: 9999,
    historyApiFallback: true,
  },
};
