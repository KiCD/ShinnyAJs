var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');


module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.ts', '.scss']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use:[
          "awesome-typescript-loader",
          "angular2-template-loader"
        ]
      },
      {
        test: /\.html$/,
        use:[{
        loader: "html-loader"
        }]
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        use:[{
          loader: "file-loader",
          options: {
            name:"assets/[name].[ext]"
          }
        }]

      },
      {
        test: /\.scss$/,
        exclude: helpers.root('src', 'app'),
        //loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
        use: ExtractTextPlugin.extract({
         fallback: "style-loader",
         use: [
            "css-loader",
            "sass-loader"
        ]
       })
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        use: [
          "to-string-loader",
          "css-loader"
      ]
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
    ]
};
