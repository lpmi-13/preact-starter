var path = require('path')
var webpack = require('webpack')
var root = path.resolve(__dirname, '../')

module.exports = {
  devtool: "eval",
  entry: {
    app: [path.join(__dirname, '../src/main.js')]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.css', '.scss', '.vue', '.json'],
    alias: {
        src: path.join(__dirname, '../src'),
        components: path.join(__dirname, '../src/components')
    }
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ["style", "css"]
      },
      {
        test: /\.vue$/,
        loaders: ['vue']
      },
      {
        test: /\.scss$/,
        vue: 'scss',
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['babel', 'webpack-module-hot-accept']
      },
      {
        test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)$/,
        loader: "url",
        query: {
          limit: 10000,
          name: '[name]-[hash:7].[ext]'
        }
      }
    ]
  },
  vue: {
      loaders: {}
  },
  plugins: [],
  devServer: {
    proxy: {
      
    },
    headers: { "Access-Control-Allow-Origin": "*" }
  }
}
