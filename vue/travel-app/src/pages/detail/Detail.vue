<template>
  <div>
    <div class="warning" v-if="!showDetail">
      <div class="warning-content">
        <svg class="icon icon-building" aria-hidden="true">
          <use xlink:href="#iconshigongzhong"></use>
        </svg>
        正在开发此模块 . . .
      </div>
      <svg class="icon icon-back" aria-hidden="true" @click="back">
        <use xlink:href="#iconcuowu"></use>
      </svg>
    </div>
    <div v-if="showDetail">
      <detail-banner
        :sightName="sightName"
        :bannerImg="bannerImg"
        :bannerImgs="gallaryImgs"
      ></detail-banner>
      <detail-header></detail-header>
      <detail-notice :notice="notice"></detail-notice>
      <div class="grey-margin"></div>
      <detail-recommend :recommend="recommend"></detail-recommend>
      <!-- 递归门票组件 -->
      <!-- <div class="content">
        <detail-list :list="list"></detail-list>
      </div> -->
    </div>
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
      recommend: [],
      alert: '',
      showDetail: true
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
        let data = {}
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i]["id"] === this.$route.params.id) {
            data = res.data[i]
          }
        }
        if (data.alert == null) {
          this.sightName = data.sightName
          this.bannerImg = data.bannerImg
          this.gallaryImgs = data.gallaryImgs
          this.notice = data.notice
          this.list = data.categoryList
          this.recommend = data.recommend
        } else {
          this.alert = data.alert
          this.showDetail = false
        }
      }
    },
    back () {
      this.$router.go(-1)
    }
  },
  mounted () {
    this.getDetailInfo ()
  }
}

</script>

<style lang='stylus' scoped>
    .warning-content
      font-size: .4rem
      position: fixed
      top: 35%
      left: 20%
      border: solid 1px
      border-radius: .1rem
      padding: .1rem
      line-height: .6rem
      .icon-building
        font-size: .6rem
        position: relative
        top: .06rem
    .icon-back
      font-size: .5rem
      position: fixed
      top: 50%
      left: 48%
    .grey-margin
      height: .2rem
      background: #eee
</style>
