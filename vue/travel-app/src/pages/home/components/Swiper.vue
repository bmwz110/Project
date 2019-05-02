<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  // 子组件中的data必须为函数返回值形式
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000
      }
    }
  },
  // showSwiper()让传递过来的swiperList存在值时才显示。
  // 避免了空数组创建导致的首图显示为最后一张图
  // 也可直接在swiper标签中加入v-if="swiperList"的判断，但不推荐
  // 应避免在模版里出现逻辑代码，尽量用方法替代
  computed: {
    showSwiper () {
      return this.swiperList.length
    }
  }
}

</script>

<style lang='stylus' scoped>
  // 样式穿透，英语于wrapper下所有的子样式，而不受scoped限制
  .wrapper >>> .swiper-pagination-bullet-active
    background-color: #fff
  .wrapper
    width: 100%
    height: 0
    padding-bottom: 27%
    overflow: hidden
    .swiper-img
      width: 100%
</style>
