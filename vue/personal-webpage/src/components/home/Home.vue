<template>
  <div class="container">
    <div class="personal">
      <img src="../../assets/image/portrait.png">
      <p>BMWZ110</p>
      <div class="icon">
        <a class="iconfont">&#xe8a0;</a>
        <a class="iconfont">&#xe639;</a>
        <a class="iconfont">&#xe689;</a>
        <a class="iconfont">&#xe632;</a>
        <a class="iconfont">&#xe959;</a>
      </div>
      <div class="welcome" @click="welcome">
        <p>welcome to my page 👋</p>
      </div>
      <p class="intro">"The ideal of life is to live idealy.  <span>🛁</span>"</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    welcome () {
      alert('You have the spirit of exploration 🛰️')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container
    min-width: 1000px
    width: 100%
    height: 1000px
    background: url(../../assets/image/background201904164.jpeg)
    background-size: cover
    display: flex
    justify-content: center
    .personal
      width: 400px
      text-align: center
      margin-left: 500px
      padding-top: 200px
      img
        width: 100px
        height: 100px
        border-radius: 50%
        border: 1px solid #fff
      p
        font-size: 2.2rem
        font-family: Helvetica,Arial,sans-serif;
        color: #000
        font-weight: lighter
        padding: 16px
      .icon
        padding: 10px 0
        .iconfont
          padding: 0px 8px
      .welcome
        background-color: pink
        position: relative
        left: 65px
        top: 20px
        height: 50px
        text-align: center
        width: 260px
        border: solid 1px
        border-radius: 10px
        p
          font-size: 1.2rem
          color: #000
          padding: 10px 5px 5px 5px
      .intro
        padding-top: 100px
        font-size: 1rem
        font-style: oblique
        span
          font-style: normal
</style>
