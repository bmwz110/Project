<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li
      class="item border-bottom"
      v-for="item of list"
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
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl';
  .title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 37.2%
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
