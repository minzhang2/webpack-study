/**
 * 参考：
 * webpack深入浅出：http://webpack.wuhaolin.cn
 * webpack从入门到放弃：https://segmentfault.com/a/1190000010871559
 * 注：vue项目官方的配置简称“vue”
 * css、less、postcss、autoprefixer：参考vue
 * babel：https://segmentfault.com/a/1190000014309163以及vue、http://imweb.io/topic/5b8699a96a0f1b02454de3c0
 */
const path = require('path');

const resolve = (dir) => path.join(__dirname, '..', dir);

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: resolve('dist'),
    publicPath: process.env.NODE_ENV === 'production' ? '' : '/'
  },
  // resolve: {
  //   alias: {
  //     '@': resolve('src/components'),
  //     'assets': resolve('src/assets')
  //   }
  // },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: resolve('src')
      },
      {
        test: /\.(png|svg|jpe?g|gif)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/font/[name].[hash:7].[ext]'
        }
      }
    ]
  }
}
