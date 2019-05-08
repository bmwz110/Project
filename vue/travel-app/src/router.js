import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    // 异步加载组件（页面）- 按需加载
    // 但要注意这会导致产生额外的http请求
    // 当app.js体积不大(<1MB)时，这种额外请求浪费的时间要大于加载单个app.js的时间
    component: () => import('./pages/home/Home.vue')
  }, {
    path: '/city',
    name: 'City',
    component: () => import('./pages/city/City.vue')
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('./pages/detail/Detail.vue')
  }],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
