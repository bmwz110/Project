<template>
  <div @click="showDetail">
    <div v-if="noticeShow" class="notice">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#iconlaba3"></use>
      </svg>
      {{notice}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Notice',
  props: {
    notice: String
  },
  computed: {
    noticeShow () {
      if (this.notice === "") {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    showDetail () {
      this.noticeDetailComp = this.noticeDetailComp || this.$createNoticeDetail ({
        $props: {
          notice: 'notice'
        }
      })
      this.noticeDetailComp.show()
    }
  }
}

</script>

<style lang='stylus' scoped>
  @import '~styles/func.styl'
  .notice
    height: .8rem
    line-height: .8rem
    background: rgb(253, 245, 231)
    color: rgb(239, 137, 37)
    font-size: .3rem
    padding-left: .1rem
    ellipsis()
</style>
