<template>
  <div class="footer">
    <div class="banner border-bottom">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icontanhao"></use>
      </svg>
      <p>
        <span class="highlight-word">票面价</span>是指通过景区指定窗口售卖的纸质门票上标注的价格
      </p>
    </div>
    <div class="tickets border-bottom">
      <div class="ticketItem">
        <i class="iconfont">&#xe672;</i>
        <p>机票</p>
      </div>
      <div class="ticketItem">
        <i class="iconfont">&#xe630;</i>
        <p>酒店</p>
      </div>
      <div class="ticketItem">
        <i class="iconfont">&#xe692;</i>
        <p>公寓</p>
      </div>
      <div class="yLine"></div>
      <div class="moreLink">
        <i class="iconfont">&#xe60e;</i>
        <p>更多</p>
      </div>
    </div>
    <div class="record">
      Qunar 京ICP备05021087意见反馈
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeFooter'
}

</script>

<style lang='stylus' scoped>
  .footer
    border-style: solid
    border-width: .1rem 0 0 0
    border-color: #f5f5f5
    .banner
      height: .5rem
      margin-top: .2rem
      .icon
        float: left
        padding-left: .1rem
      p
        padding-top: .04rem
        padding-left: .5rem
        font-size: .2rem
      .highlight-word
        font-weight: bold
    .tickets
      margin-top: .4rem
      color: #acacac
      padding-left: .5rem
      height: .7rem
      i
        float: left
        margin-top: -.04rem
        margin-right: .03rem
      p
        float: left
      .ticketItem
        float: left
        padding-left: .4rem
      .yLine
        float: left
        height: .3rem
        width: 1px
        background: #acacac
        margin: 0 .3rem 0 .5rem
      .moreLink
        i
          padding: .04rem .1rem 0 0
          font-size: .1rem
    .record
      text-align: center
      height: .7rem
      line-height: .7rem
      color: #ccc
      font-size: .1rem
</style>
