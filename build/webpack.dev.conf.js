const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')
const utils = require('./utils');

const config = {
  port: '8089'
}

const devWebpackConfig = merge(baseWebpackConfig, {
  devtool: 'cheap-module-eval-source-map',
  // react热更新
  entry: [
    'webpack/hot/dev-server',
    './src/index.js',
  ],
  // output: {
  //   filename: '[name].js',
  //   publicPath: '/'
  // },
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
    port: config.port,
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join('/', 'index.html') },
      ],
    },
    // historyApiFallback: true,
    // inline: true,
    hot: true,
    hotOnly: true,
    // open: true,
    // progress: true,
    overlay: { warnings: false, errors: true }
  },
});

// module.exports = new Promise((resolve, reject) => {
//   portfinder.basePort = process.env.PORT || config.port
//   portfinder.getPort((err, port) => {
//     if (err) {
//       reject(err)
//     } else {
//       // publish the new Port, necessary for e2e tests
//       process.env.PORT = port
//       // add port to devServer config
//       devWebpackConfig.devServer.port = port

//       // Add FriendlyErrorsPlugin
//       devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
//         compilationSuccessInfo: {
//           messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
//         },
//         onErrors: undefined
//       }))

//       resolve(devWebpackConfig)
//     }
//   })
// })


module.exports = devWebpackConfig;
