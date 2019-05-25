<template>
  <div>
    <div class="recommend-banner border-bottom">
      <div class="recommend-title">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconpraise2"></use>
        </svg>
        去哪儿推荐
      </div>
    </div>
    <div class="content border-bottom" v-for="item of recommend" :key="item.id">
      <div class="content-title">{{item.recommendTitle}}</div>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icontanhao"></use>
      </svg>
      <div class="content-desc">{{item.recommendDesc}}</div>
      <div class="content-flag">
        <div class="flag"
            v-for="(flag, index) of item.recommendFlag"
            :key="index"
        >
          <img v-if="showBrand(flag)" class="brand" src="https://img1.qunarzz.com/piao/fusion/1804/b0/c3cf2897c74ecc02.png"/>
          {{flag}}
        </div>
      </div>
      <div class="price-order">
        <div class="price-area">
          <span class="money-icon">¥</span>
          <span class="price">{{item.recommendPrice}}</span>
        </div>
        <el-button class="order" :plain="true" @click="open">预定</el-button>
      </div>
    </div>
    <div class="grey-margin"></div>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: {
    recommend: Array
  },
  methods: {
    open () {
      this.$message({
        showClose: true,
        message: '此功能正在开发中...',
        type: 'warning'
      })
    },
    showBrand (flag) {
      if (flag === "自营") {
        return true
      }
    }
  }
  // computed: {
  //   showBrand (flag) {
  //     console.log(flag)
  //     if (this.flag === "自营") {
  //       return true
  //     }
  //   }
  // }
}

</script>

<style lang='stylus' scoped>
  @import '~common/stylus/variable'
  .recommend-banner
    height: .6rem
    .recommend-title
      margin: .3rem 0 .15rem .1rem
    .icon
      font-size: .3rem
  .content
    margin-left: .3rem
    .content-title
      margin: .2rem .1rem .15rem 0
      width: 70%
      line-height: .4rem
      font-size: .3rem
      color: $textColor
    .content-desc
      position: relative
      top: -.25rem
      left: .3rem
      font-size: .25rem
    .content-flag
      height: .5rem
      .flag
        position: relative
        top: -.1rem
        float: left
        font-size: .1rem
        border: solid 1px
        border-radius: .05rem
        padding: .03rem
        margin-right: .06rem
        color: $bgColor
        .brand
          height: .2rem
          position: relative
          top: -.02rem
    .price-order
      position: relative
      top: -1.5rem
      float: right
      height: 1rem
      width: 1.6rem
      .price-area
        text-align: center
        .money-icon
          font-size: .3rem
          color: $priceColor
        .price
          font-size: .4rem
          color: $priceColor
      .order
        font-size: .3rem
        color: #eee
        width: 1rem
        margin: 0 0 0 .3rem
        background: linear-gradient(130deg,#ffab1e 37%,#ff8c12 100%);
        border-radius: .1rem
        text-align: center
        margin-top: .08rem
        padding: .12rem .2rem
  .grey-margin
    height: .2rem
    background: #eee
</style>
