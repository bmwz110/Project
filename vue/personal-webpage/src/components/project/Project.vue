<template>
  <div class="container">
    <div class="header">
      <p>Below you'll find some of my recent work.</p>
      <div class="line">
        <hr>
      </div>
    </div>
    <div class="projectList">
      <sub-project class="content"/>
      <sub-project class="content"/>
      <sub-project class="content"/>
      <sub-project class="content"/>
    </div>
  </div>
</template>

<script>
import subProject from './components/subProject'
export default {
  name: 'Project',
  components: {
    subProject
  }
}

</script>

<style lang="stylus" scoped>
.container
  height: 1000px
  .header
    height: 100px
    text-align: center
    min-width: 1000px
    p
      font-size: 2rem
      padding-top: 50px
  .line
    margin: 0 30px
  .projectList
    display: flex
    flex-wrap: nowrap
    justify-content: space-between
    min-width: 1040px
    margin-top: 80px
  .content
    height: 200px
    width: 200px
    margin: 0 30px
</style>
