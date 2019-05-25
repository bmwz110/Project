<template>
  <div>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :bannerImgs="gallaryImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <detail-notice :notice="notice"></detail-notice>
    <div class="grey-margin"></div>
    <detail-recommend :recommend="recommend"></detail-recommend>
    <!-- <div class="recommend border-bottom">
      <div class="recommend-title">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconpraise2"></use>
        </svg>
        去哪儿推荐
      </div>
    </div> -->
    <div></div>
    <!-- 递归门票组件 -->
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
import DetailNotice from './components/Notice'
import DetailRecommend from './components/Recommend'

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
    DetailNotice,
    DetailRecommend
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      notice: '',
      list: [],
      recommend: []
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
        const detailId = this.$route.params.id/1 - 1;
        const data = res.data[detailId]
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.notice = data.notice
        this.list = data.categoryList
        this.recommend = data.recommend
      }
    }
  },
  mounted () {
    this.getDetailInfo ()
  }
}

</script>

<style lang='stylus' scoped>
  .grey-margin
    height: .2rem
    background: #eee
</style>
