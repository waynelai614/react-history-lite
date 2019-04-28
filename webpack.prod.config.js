const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const environment = 'production'

module.exports = {
  mode: environment,
  entry: [
    './example/index.js'
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: [/node_modules/],
        options: {
          emitError: true,
          emitWarning: true,
          failOnError: false
        }
      },
      {
        test: /\.jsx?$/,
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.scss$/,
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: ['file-loader']
      }
    ]
  },
  resolve: {
    modules: ['src', 'node_modules']
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendor",
          priority: 10,
          enforce: true
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/public/index.html`,
      filename: 'index.html',
      inject: 'body',
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true
      }
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(environment)
    })
  ]
}
