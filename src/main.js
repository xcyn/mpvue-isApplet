import Vue from 'vue'
import App from './App'
import Mixin from './mixin'
import WXP from '@/utils/wxp'
import store from '@/store/index'
Vue.prototype.WXP = WXP
Vue.prototype.$store = store
Vue.config.productionTip = false
App.mpType = 'app'

// 小程序云 （必须要初始化才能使用云开发，traceUser决定是否在将用户访问记录到用户管理中，在控制台中可见。）
// wx.cloud.init({
//   traceUser: true
// })
// Vue.prototype.db = wx.cloud.database({
//   // 开发云id
//   env: 'xcy-df39db'
// })

// 兼容小程序方法的mixin
Vue.mixin(Mixin)

const app = new Vue(App)
app.$mount()

// "tabBar": {
//   "list": [
//     {
//       "pagePath": "pages/index/main",
//       "iconPath": "static/image/cat.png",
//       "selectedIconPath": "static/image/cat.png",
//       "text": "商品"
//     },
//     {
//       "pagePath": "pages/me/main",
//       "iconPath": "static/image/home.png",
//       "selectedIconPath": "static/image/home.png",
//       "text": "我的"
//     }
//   ],
//   "selectedColor": "#f59aaa",
//   "borderStyle":"white"
// }
