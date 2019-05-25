<template>
  <div class="header">
    <div class="header-left" @click="back">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市景点/游玩主题
    </div>
    <router-link to='/city'>
      <div class="header-right">
        <!-- 通过vuex来使用公用数据 -->
        <!-- 不使用mapState时，应为{{this.$store.state.city}} -->
        {{this.city}}
        <span class="iconfont">&#xe605;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    // mapState能够将 $store.state.city 映射到 this.city
    ...mapState(['city'])
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}

</script>

<style lang='stylus' scoped>
  // 将常用变量保存在styl文件中,增加可维护性
  // 在某个css中引入其他文件时，相对路径标识前需要加上～
  // vue-cli3.0配置alias在node-modules/@vue/cli-service/lib/config/base.js中
  @import '~common/stylus/variable.styl'
  .header
    display: flex
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      background: #fff
      border-radius: .1rem
      color: #ccc
    .header-right
      min-width: 1.04rem
      padding: 0 .1rem
      float: right
      text-align: center
      color: #fff
</style>
