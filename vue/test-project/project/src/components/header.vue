<template>
  <div>
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#2c3e50"
      text-color="#bfcbd9"
      active-text-color="bfcbd9">
      <el-submenu index="1">
        <template slot="title">打卡任务</template>
        <router-link to="/writing"><el-menu-item index="1-1">今日回译</el-menu-item></router-link>
        <router-link to="/about"><el-menu-item index="1-2">昨日总结</el-menu-item></router-link>
      </el-submenu>
      <el-menu-item index="2">我的作业</el-menu-item>
      <el-menu-item index="3">排行榜</el-menu-item>
    </el-menu>
    <h2>今日回译</h2>
  </div>
</template>

<script>
  export default {
    name:'WritingHeader',
    data() {
      return {
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>