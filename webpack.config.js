var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname,

  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    modulesDirectories: [
      'src',
      'node_modules',
      'tests',
    ]
  },

  entry: {
    app: ['./src/app.js'],
    common: [
      'lodash'
    ]
  },

  output: {
    path: path.resolve(__dirname, './build'),
    pathinfo: true,
    filename: '[name].js'
  },

  module: {
    loaders: [
      { 
        test: /\.json$/, 
        loader: "json-loader" 
      },
      {
        test: /\.js$/,
        exclude: /\/node_modules/,
        loader: 'babel'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ["react", "es2015"],
          plugins: ["add-module-exports"],
        }
      }
    ],
  },

  devServer: {
    historyApiFallback: true
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.ProvidePlugin({
      _: 'lodash'
    })
  ]
};