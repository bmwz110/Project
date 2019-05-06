<template>
  <ul class="list">
    <li
      class="item"
      v-for="(item, key) of cities"
      :key="key"
    >
      {{key}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  }
}

</script>

<style lang='stylus' scoped>
  @import '~styles/variables.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    right: 0
    top: 1.58rem
    bottom: 0
    width: .4rem
    .item
      line-height: .44rem
      text-align: center
      color: $bgColor
</style>
