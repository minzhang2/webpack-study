const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const utils = require('./utils');

const devWebpackConfig = merge(baseWebpackConfig, {
  // react热更新：https://blog.csdn.net/huangpb123/article/details/78556652
  entry: [
    'webpack/hot/dev-server',
    './src/index.js',
  ],
  module: {
    rules: utils.styleLoaders({ sourceMap: false, usePostCSS: true })
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
  ],
  devServer: {
    compress: true,
    port: '8089',
    historyApiFallback: true,
    inline: true,
    hot: true,
    hotOnly: true,
    open: true,
    overlay: { warnings: false, errors: true }
  },
});

module.exports = devWebpackConfig;
