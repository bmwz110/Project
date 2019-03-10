<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li
      class="item border-bottom"
      v-for="item of recommendList"
      :key="item.id"
      >
        <img class="item-img" :src='item.imgUrl' />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
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
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_200x200_4ab5da75.jpg',
        title: '大连圣亚海洋世界',
        desc: '浪漫大连首站，浪漫的海洋主题乐园'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1903/89/8965f21723d9da86a3.water.jpg_200x200_90a1a827.jpg',
        title: '大连森林动物园',
        desc: '浪漫大连首站，浪漫的森林主题乐园'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1807/7d/7d64de6b134d10eaa3.img.jpg_200x200_56997205.jpg',
        title: '大连香洲旅游度假区',
        desc: '浪漫大连首站，浪漫的香洲主题乐园'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl';
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      /* 在flex布局，设置flex:1后，再设置min-width:0，是为了保证内容不超出外层容器 */
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .4rem
        font-size: .3rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>
