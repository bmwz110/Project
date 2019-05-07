import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
// 当有异步操作或批量操作时，使用actions改变mutations，mutations改变共享数据
// 当没有异步操作或批量操作时（例如本次），组件可以直接调用mutations，而无需使用actions作转发
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  // 共享数据部分
  state,
  mutations
})
