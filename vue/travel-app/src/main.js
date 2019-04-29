import Vue from 'vue'
import App from './App.vue'
import router from './router'
// fastclick需要npm install fastclick --save安装，解决部分设备点击延迟300ms问题
import fastClick from 'fastclick'
// reset.css解决不同设备默认样式不统一的问题
import './assets/styles/reset.css'
// border.css解决多倍屏1像素边框问题
import './assets/styles/border.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// router   实例化路由，表示会使用
// ---
// 手动挂载 $mount 和 el 在效果上没有区别，都是为了把实例化的vue挂在到dom上
// $mount可以实现延迟挂载
// 在vue实例化中使用el，则实例化vue时会将此vue直接渲染到dom上
// 没有在vue实例化中使用el，则该vue处于一个未挂载状态，可以使用$mount进行挂载
