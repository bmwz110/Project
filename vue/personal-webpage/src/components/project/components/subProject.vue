<template>
  <div class="container">
    <img src="../../../assets/image/background201904161.jpeg">
    <div class="intro">
      <p class="title">subProject</p>
      <p class="describe">describe</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'subProject'
}
</script>

<style lang="stylus" scoped>
.container
  width: 200px
  max-height: 200px
  .intro
    text-align: center
    .title
      font-size: 1.2rem
    .describe
      color: #777
  img
    width: 100%
    height: 100%
    border-radius: 20px
</style>
