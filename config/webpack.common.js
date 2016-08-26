var path = require("path");

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');


module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    // 'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },

  module: {
    loaders: [

      {
        test: /^(?!.*\.min\.css$).*\.css$/,
        // loader: ExtractTextPlugin.extract('style', 'css?sourceMap'),
        // test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw'
      },
      // {
      //   test: /\.less$/,
      //   // loader: "style!css!less"
      //   loader: "raw!less"
      // },
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader"},
      {test: /\.html$/, loader: "raw"},
      {
        test: /\.ts$/,
        loaders: ['ts-loader', 'angular2-template-loader'],
        exclude: [/test/]
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app'
        // , 'vendor'
        , 'polyfills'
      ]
    }),

    new HtmlWebpackPlugin({
      // hash: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
        collapseBooleanAttributes: false,
        removeCommentsFromCDATA: true
      },
      template: 'src/index.html'
    })
  ]
};
