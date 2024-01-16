const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
require('dotenv').config();

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './App/index.tsx'),
  output: {
    path: path.resolve(__dirname, "dist"),
    chunkFilename: 'scripts/[name].[chunkhash].bundle.js',
    filename: 'scripts/[name].[chunkhash].bundle.js', // the file name would be my entry's name with a ".bundle.js" suffix
    publicPath: "/"
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname)
    ],
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  module: {
    rules: [
      { test: /\.(ts|tsx)$/, loader: "ts-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'App/index.html'
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 17000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        shared: {
          name: 'common',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
        defaultVendors: false,
        reactPackage: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom)[\\/]/,
          name: 'react',
          chunks: "all",
          priority: 10,
        }
      },
    },
  },
  devServer: {
    hot: true,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    historyApiFallback: {
      rewrites: [
        { from: /\/dist/, to: `/dist` }
      ]
    },
    compress: true,
    port: 5000
  }
}