module.exports = {
  plugins: {
    autoprefixer: {
      browsers: ['Android >= 2.3', 'iOS >= 7'],
      cascade: true,  // 不美化输出 css
      remove: false //是否去掉不必要的前缀 默认：true
    }
  }
}
