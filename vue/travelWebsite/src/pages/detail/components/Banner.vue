<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" />
      <div class="banner-info">
        <div class="banner-title">
          大连圣亚海洋世界(AAAA景区)
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe67b;</span>
          39
        </div>
      </div>
    </div>
    <common-gallary
      :imgs="imgs"
      v-show="showGallary"
      @close="handleGallaryClose"
    ></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1505/15/15749385a5e52a5b.water.jpg_r_800x800_2cabef54.jpg', 'http://img1.qunarzz.com/sight/p0/201403/10/3ec52bc6bef5a3749e2fa85de8411bb0.jpg_r_800x800_ec568c4a.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang="stylus" scoped>
.banner
  position: relative
  overflow: hidden
  height: 0
  padding-bottom: 55%
  .banner-img
    width: 100%
  .banner-info
    display: flex
    position: absolute
    left: 0
    right: 0
    bottom: 0
    line-height: .6rem
    color: #fff
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    .banner-title
      flex: 1
      font-size: .32rem
      padding: 0 .2rem
    .banner-number
      line-height: .4rem
      height: .4rem
      border-radius: .32rem
      background: rgba(0, 0, 0, .8)
      font-size: .24rem
      margin-top: .14rem
      padding: 0 .4rem
      .banner-icon
        font-size: .24rem
</style>
