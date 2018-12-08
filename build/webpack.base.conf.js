/**
 * 参考：
 * 注：vue项目官方的配置简称“vue”
 * css、less、postcss、autoprefixer：参考vue
 * babel：https://segmentfault.com/a/1190000014309163以及vue、http://imweb.io/topic/5b8699a96a0f1b02454de3c0
 */
const path = require('path');

const isProd = process.env.NODE_ENV === 'production';

const resolve = (dir) => path.resolve(__dirname, '..', dir);

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].[hash:8].js',
    path: resolve('dist'),
    publicPath: '/'
  },
  // resolve: {
  //   alias: {
  //     '@': resolve('src/components'),
  //     'assets': resolve('src/assets')
  //   }
  // },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [{
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              // 改动
              modules: true, // 新增对css modules的支持
              localIdentName: '[name]-[local]-[hash:base64:5]'
            },
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.postcss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              // 改动
              modules: true, // 新增对css modules的支持
              localIdentName: '[name]-[local]-[hash:base64:5]'
            },
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              // 改动
              modules: true, // 新增对css modules的支持
              localIdentName: '[name]-[local]-[hash:base64:5]'
            },
          },
          // 'css-loader?module&localIdentName=[name]_[local]-[hash:base64:5]',
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [resolve('src')]
      },
      {
        test: /\.(png|svg|jpe?g|gif)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          // name: path.posix.join('static', 'img/[name].[hash:7].[ext]')
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
