<template>
  <div>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :bannerImgs="gallaryImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <div class="top-margin"></div>
    <notice :notice="notice"></notice>
    <div class="top-margin"></div>
    <div class="recommend border-bottom">
      <div class="recommend-title">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconpraise2"></use>
        </svg>
        去哪儿推荐
      </div>
    </div>
    <!-- <div class="content">
      <detail-list :list="list"></detail-list>
    </div> -->
  </div>
</template>

<script>
import axios from 'axios'
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import Notice from './components/Notice'

export default {
  // 组件name的用途：
  //   1. 组件化使用
  //   2. 作递归
  //   3. keep-alive取消缓存页面组件
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList,
    Notice
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      notice: '',
      list: []
    }
  },
  methods: {
    getDetailInfo () {
      // id在router.js里已被保存，此处使用this.$route.params获取
      axios.get('/api/detail.json?', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.notice = data.notice
        this.list = data.categoryList
      }
    }
  },
  mounted () {
    this.getDetailInfo ()
  }
}

</script>

<style lang='stylus' scoped>
  @import '~styles/func.styl'
  .top-margin
    height: .2rem
    background: #eee
  .recommend
    height: .6rem
    .recommend-title
      margin: .3rem 0 .15rem .1rem
    .icon
      font-size: .3rem
</style>
