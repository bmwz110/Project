<template>
  <transition name="fade">
    <div v-show="visible" class="notice-detail">
      <div class="title">
        <svg class="icon noticeIcon" aria-hidden="true" @click="hide">
          <use xlink:href="#iconlaba3"></use>
        </svg>
        <p>景区公告</p>
      </div>
      <div class="desc">{{notice}}</div>
      <svg class="icon closeIcon" aria-hidden="true" @click="hide">
        <use xlink:href="#iconcuowu"></use>
      </svg>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'NoticeDetail',
  props: {
    notice: String
  },
  data () {
    return {
      visible: false
    }
  },
  methods: {
    show () {
      this.visible = true
    },
    hide () {
      this.visible = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"

  .notice-detail
    position: fixed
    z-index: 100
    top: 0
    left: 0
    width: 100%
    height: 100%
    overflow: auto
    backdrop-filter: blur(10px)
    opacity: 1
    color: $color-white
    background: $color-background-s
    &.fade-enter-active, &.fade-leave-active
      transition: all 0.5s
    &.fade-enter, &.fade-leave-active
      opacity: 0
      background: $color-background
    .title
      font-size: .4rem
      text-align: center
      margin-top: 25%
      .noticeIcon
        position: relative
        left: -1rem
        top: .35rem
      p
        margin-left: .3rem
    .desc
      margin: .3rem 1rem
      line-height: .5rem
    .closeIcon
      font-size: .4rem
      margin: 5rem 50% 0 50%
</style>
