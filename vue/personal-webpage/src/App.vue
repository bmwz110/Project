<template>
  <div id="app">
    <Home />
    <Project />
  </div>
</template>

<script>
import Home from './components/home/Home'
import Project from './components/project/Project'

export default {
  name: 'app',
  components: {
    Home,
    Project
  }
}
</script>
<style lang="stylus">

</style>
