<template>
  <div id="app">
    <!-- router-view显示当前路由地址所对应的内容 -->
    <!-- 每当路由发生切换时，Ajax都会被重新发送，造成性能降低 -->
    <!-- 使用keep-alive持久连接，仅HTTP1.1及以上支持 -->
    <!-- exclude="组件名"，属性会使所选的组件不进行缓存 -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<style lang="stylus">
  .icon
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
</style>
