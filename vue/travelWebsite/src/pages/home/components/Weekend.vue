<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li
      class="item border-bottom"
      v-for="item of recommendList"
      :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src='item.imgUrl' />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
      </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1812/b4/e9d7f043c4fadf.jpg_r_640x214_713df0cf.jpg',
        title: '大连泡汤圣地',
        desc: '享受生活，放松自己，来一段轻松的旅程'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/7f/fa4eb0ca72409d.jpg_r_640x214_2f2a860e.jpg',
        title: '大连必打卡',
        desc: '爱上北方的碧海蓝天'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/89/267342d404cbd7.jpg_r_640x214_8d8d1162.jpg',
        title: '亲子游乐',
        desc: '来生机勃勃的森林野生动物园留下你们珍贵的足迹吧，来吧来吧来吧'
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
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 33.9%
  .item-img
    width: 100%
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
</style>
