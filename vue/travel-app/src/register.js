// 利用 cube-ui 将 NoticeDetail 剥离为单独组件，以 API 形式调用，便于使其在 body 上挂载
// 避免嵌套在别的 div 中导致的 fix 布局问题。
import Vue from 'vue'
import { createAPI } from 'cube-ui'
import NoticeDetail from 'pages/detail/components/NoticeDetail'

createAPI(Vue, NoticeDetail)
