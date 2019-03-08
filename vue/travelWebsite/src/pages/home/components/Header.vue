<template>
  <div class="header">
    <div class="header-left"></div>
    <div class="header-input"></div>
    <div class="header-right"></div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<!-- scoped关键字表明样式只对该组件有效，不会影响其他 -->
<style lang="stylus" scoped>
  .header
    height: 0.5rem
</style>
