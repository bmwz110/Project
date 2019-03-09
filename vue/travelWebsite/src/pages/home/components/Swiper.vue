<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide>
        <img class="swiper-img" src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20192/e1abd1a9cfc4330d4d8794285350b4dd.jpg_750x200_a18c9dff.jpg" />
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20192/9f73976e40c4ef845cabe0efc0269ebb.jpg_750x200_aab92b7a.jpg" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
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
    padding-bottom: 27%
    background: #eee
    .swiper-img
      width: 100%
</style>
