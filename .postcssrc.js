// https://github.com/michael-ciniawsky/postcss-load-config
let plugins = {
  "postcss-mpvue-wxss": {},
  "postcss-import": {},
  "autoprefixer": {}
}
// 兼容打包样式
if(process.env.B_TYPE === 'h5') {
  delete plugins['postcss-mpvue-wxss']
}
module.exports = {
  "plugins": plugins
}
