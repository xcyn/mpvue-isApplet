// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './AppH5'
import router from './router'
import store from './store'
import Mixin from './mixin'
import { Button, Tabbar,
  NoticeBar,
  TabbarItem, Icon, Search,
  Swipe, SwipeItem, Lazyload,
  Card, GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn,
  AddressEdit,
  Cell, CellGroup
} from 'vant'

Vue.use(Tabbar).use(TabbarItem)
Vue.use(Swipe).use(SwipeItem)
Vue.use(Button)
Vue.use(Icon)
Vue.use(Search)
Vue.use(Lazyload)
Vue.use(NoticeBar)
Vue.use(Card)
Vue.use(GoodsAction)
Vue.use(GoodsActionBigBtn)
Vue.use(GoodsActionMiniBtn)
Vue.use(AddressEdit)
Vue.use(Cell).use(CellGroup)

console.log('H5')
Vue.config.productionTip = false
Vue.use(Vuex)
// 兼容小程序方法的mixin
Vue.mixin(Mixin)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
