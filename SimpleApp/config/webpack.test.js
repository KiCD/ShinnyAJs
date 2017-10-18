var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  devtool: 'inline-source-map',

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        use:[{ loader:'html'}]

      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        use:[{ loader:'null'}]
      },
      {
        test: /\.scss$/,
        exclude: helpers.root('src', 'app'),
        use:[{loader: ExtractTextPlugin.extract('style', 'css!sass')}]
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: [{loader: 'raw'}]
      }
    ]
  }
}
