<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  /* >>>样式穿透：当wrapper的子组件出现swiper-pagination-bullet-active，则进行渲染 */
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff !important
  .wrapper
  /* 设置图片宽高比方法：overflow:hidden,width:100%,因为height是相对于父元素的，所以这里需要设为0,然后通过padding-bottom设置高度相对于宽度的尺寸。 */
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 30%
    background: #eee
    .swiper-img
      width: 100%
</style>
