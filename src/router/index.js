import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index/index.vue'
import Detail from '../pages/detail/index.vue'
import Share from '../pages/share/index.vue'
import WebView from '../pages/web-view/index.vue'
import Me from '../pages/me/index.vue'
import Address from '../pages/address/index.vue'
import Calendar from '../pages/calendar/index.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: Index,
    alias: '/pages/index/main'
  }, {
    path: '/detail',
    name: 'detail',
    component: Detail,
    alias: '/pages/detail/main'
  }, {
    path: '/share',
    name: 'share',
    component: Share,
    alias: '/pages/share/main'
  }, {
    path: '/WebView',
    name: 'WebView',
    component: WebView,
    alias: '/pages/web-view/main'
  }, {
    path: '/Me',
    name: 'Me',
    component: Me,
    alias: '/pages/me/main'
  }, {
    path: '/Address',
    name: 'Address',
    component: Address,
    alias: '/pages/address/main'
  }, {
    path: '/calendar',
    name: 'calendar',
    component: Calendar,
    alias: '/pages/calendar/main'
  }]
})
