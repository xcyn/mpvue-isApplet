import Vue from 'vue'
import App from './App'
import Mixin from './mixin'
import WXP from '@/utils/wxp'
import store from '@/store/index'
Vue.prototype.WXP = WXP
Vue.prototype.$store = store

Vue.config.productionTip = false
App.mpType = 'app'
console.log('小程序')
// 兼容小程序方法的mixin
Vue.mixin(Mixin)
const app = new Vue(App)
app.$mount()
