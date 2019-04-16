<template>
  <div id="app">
    <!-- keep-alive路由内容被加载后就存到内存中，防止反复加载 -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
