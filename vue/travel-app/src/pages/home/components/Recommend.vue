<template>
  <div>
    <div class="top-margin"></div>
    <div class="recommend-title">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#iconxin"></use>
      </svg>
      猜你喜欢
    </div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <div class="item-comment">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconxingxing"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconxingxing"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconxingxing"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconxingxing"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconxingxing"></use>
            </svg>
            <div class="comment-numbers">{{item.commentNum}}</div>
          </div>
          <div class="price-content">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconqian"></use>
            </svg>
            <p class="price">{{item.price}}</p>
            <p class="word">起</p>
          </div>
          <div class="position">{{item.position}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        title: '西溪国家湿地公园',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1904/a2/a23ae48aac0c0ab2a3.water.jpg_200x200_38cef490.jpg',
        commentNum: '20条评论',
        price: '70',
        position: '杭州'
      }, {
        id: '0002',
        title: '西溪国家湿地公园',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1904/a2/a23ae48aac0c0ab2a3.water.jpg_200x200_38cef490.jpg',
        commentNum: '20条评论',
        price: '70',
        position: '杭州'
      }, {
        id: '0003',
        title: '西溪国家湿地公园',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1904/a2/a23ae48aac0c0ab2a3.water.jpg_200x200_38cef490.jpg',
        commentNum: '20条评论',
        price: '70',
        position: '杭州'
      }]
    }
  }
}

</script>

<style lang='stylus' scoped>
  @import '~styles/variables.styl'
  .top-margin
    margin-top: .2rem
    height: .2rem
    line-height: .4rem
    background: #eee
  .recommend-title
    margin: .3rem 0 .15rem .1rem
    .icon
      font-size: .3rem
  .item
    display: flex
    overflow: hidden
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      .item-title
        line-height: .54rem
        font-size: .3rem
      .item-comment
        margin-top: .05rem
        .icon
          font-size: .3rem
        .comment-numbers
          float: right
          margin-right: 2.8rem
          padding-top: .04rem
          font-size: .1rem
          color: #a3a3a3
      .price-content
        margin-top: .4rem
        .icon
          float: left
          font-size: .3rem
          fill: red
        p
          float: left
          color: orange
          font-size: .2rem
        .price
          font-size: .4rem
          margin: -.08rem .02rem 0 .05rem
        .word
          position: relative
          top: .04rem
      .position
        float: right
        margin-right: .1rem
        color: #7c7c7c
        font-size: .2rem
</style>
