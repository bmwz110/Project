import Vue from 'vue'
// cube-ui 主要用它的 star 组件
import Cube from 'cube-ui'
// element-ui 主要是弹窗比较好看
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store/index'
// fastclick需要npm install fastclick --save安装，解决部分设备点击延迟300ms问题
import fastClick from 'fastclick'
// 引入轮播插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// reset.css解决不同设备默认样式不统一的问题
import 'styles/reset.css'
// border.css解决多倍屏1像素边框问题
import 'styles/border.css'
import 'styles/iconfont.css'
import 'styles/iconfont.js'
import 'swiper/dist/css/swiper.css'
// 解决部分android机型city页面白屏问题
import 'babel-polyfill'
import './register'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.use(Cube)
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// router   实例化路由，表示会使用
// ---
// 手动挂载 $mount 和 el 在效果上没有区别，都是为了把实例化的vue挂在到dom上
// $mount可以实现延迟挂载
// 在vue实例化中使用el，则实例化vue时会将此vue直接渲染到dom上
// 没有在vue实例化中使用el，则该vue处于一个未挂载状态，可以使用$mount进行挂载
