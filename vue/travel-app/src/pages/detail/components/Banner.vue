<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1904/bc/bca6206e16e6b242a3.water.jpg_r_800x800_33273c38.jpg" />
      <div class="banner-info">
        <div class="banner-title">西溪国家湿地洪园</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe632;</span>
          59
        </div>
      </div>
    </div>
    <common-gallary
      :imgs="imgs"
      v-show="showGallary"
      @close="handleGallaryClose"
      >
    </common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1904/3c/3c82bd77bd95a561a3.water.jpg_r_800x800_97fa9d2c.jpg',
      'http://img1.qunarzz.com/sight/p0/1904/37/379f3477cded8069a3.water.jpg_350x240_3dbc1a8f.jpg',
      'http://img1.qunarzz.com/sight/p0/1904/ea/ea9807b1e4f9f175a3.water.jpg_350x240_def3cdc9.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}

</script>

<style lang='stylus' scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 65.5%
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
        line-height: .32rem
        height: .32rem
        padding: 0 .4rem
        margin: .14rem .1rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .5)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>
