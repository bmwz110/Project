<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<!-- stylus引用失败，原因https://blog.csdn.net/weixin_37219302/article/details/79740464 -->
<!-- scoped关键字表明样式只对该组件有效，不会影响其他 -->
<style lang="stylus" scoped>
  /* 样式里引用样式必须加@符号 */
  /* 通过在webpack.base.conf.js中对resolve下进行设置，可以使用~styles别名访问路径 */
  @import '~styles/variables.styl';
  .header
    display: flex
    line-height: .86rem
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
      margin: .12rem 0 .12rem .2rem
      padding-left: .2rem
      background: #fff
      border-redius: .1rem
      color: #ccc
    .header-right
      width: 1.24rem
      float: right
      text-align: center
      .arrow-icon
        font-size: .24rem
</style>
