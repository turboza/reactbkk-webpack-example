var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

var devServer = {
  host: '0.0.0.0',
  port: 9999
};

module.exports = {
  entry: [
    'webpack-dev-server/client?http://' + devServer.host + ':' + devServer.port, // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    path.resolve(__dirname, 'src/entry.js') // Your appʼs entry point
  ],
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
        loaders: ['react-hot', 'babel?cacheDirectory'], // react-hot need to be first loaders
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css?module&&localIdentName=[local]___[hash:base64:5]', 'postcss'],
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css?module&&localIdentName=[local]___[hash:base64:5]', 'postcss', 'sass'],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loaders: ['url?limit=100000'],
      },
    ]
  },
  postcss: function () {
    return [autoprefixer];
    // return [autoprefixer({ browsers: ['last 2 versions'] })];
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    modulesDirectories: ['src', 'node_modules'],
    extensions: ['', '.json', '.js', '.jsx']
  },
  devServer: {
    // inline: true, // No more inline:true which is live reload for hot mode
    hot: true,
    host: devServer.host,
    port: devServer.port,
    historyApiFallback: true,
  },
};
