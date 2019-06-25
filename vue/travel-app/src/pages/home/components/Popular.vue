<template>
  <div class="list">
    <div class="top-margin"></div>
    <div class="banner">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#iconremen"></use>
      </svg>
      本周热门榜单
    </div>
    <div class=scrollDiv>
      <div class="scrollList">
        <router-link
            class="listItem"
            v-for="item of popularList"
            :key="item.id"
            :to="'/detail/' + item.id"
        >
          <img :src="item.imgUrl" />
          <p class="title">{{item.title}}</p>
          <div class="price-content">
            <span class="icon">
              ¥
            </span>
            <p class="price">{{item.price}}</p>
            <p class="word">起</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePopular',
  props: {
    popularList: Array
  }
}

</script>

<style lang='stylus' scoped>
  @import '~styles/func.styl'
  .list
    height: 0
    padding-bottom: 4rem
    margin: .3rem 0
    .top-margin
      height: .2rem
      background: #eee
    .banner
      height: .44rem
      line-height: .44rem
      padding: .24rem 0 .2rem .1rem
      font-size: .3rem
    .scrollDiv
      overflow-x: scroll
      margin: 0 .2rem
      .scrollList
        width: 1200rem
        .listItem
          float: left
          height: 2.8rem
          width: 2rem
          padding: .1rem .05rem
          img
            height: 2rem
            width: 2rem
          .title
            margin: .1rem .2rem
            text-align: center
            font-size: .25rem
            color: #000
            ellipsis()
          .price-content
            margin-left: .45rem
            .icon
              float: left
              font-size: .2rem
              position: relative
              top: .05rem
              left: .15rem
              color: orange
            p
              float: left
              color: orange
              font-size: .1rem
            .price
              font-size: .3rem
              margin: 0rem .02rem 0 .08rem
            .word
              position: relative
              top: .04rem
              color: black
</style>
