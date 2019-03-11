import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import mutations from './mutations.js'

Vue.use(Vuex)

// try catch代码防止浏览器为隐身浏览或禁止临时储存情况下抛出错误

export default new Vuex.Store({
  state,
  mutations
})
