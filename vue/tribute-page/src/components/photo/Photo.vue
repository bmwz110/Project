<template>
  <div class="container">
    <div class="header text-center">
      <h1 class="res">Dr. Norman Borlaug</h1>
      <h3>The man who saved a billion lives</h3>
    </div>
    <div class="img-container">
      <img class="img-responsive" src="./img.jpg">
      <p>Dr. Norman Borlaug, third from left, trains biologists in Mexico on how to increase wheat yields - part of his life-long war on hunger.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Photo'
}

function fontResize () {
  var hW = document.body.offsetWidth
  if (hW < 880) {
    document.getElementsByClassName('res')[0].style.fontSize = '3rem'
  } else {
    document.getElementsByClassName('res')[0].style.fontSize = '7rem'
  }
}

window.onresize = function () {
  fontResize()
}
</script>

<style lang="stylus" scoped>
  .container
    margin: auto
    .header
      margin-top: 50px
      h1
        font-size: 7rem
      h3
        font-style:italic
        font-size: 3rem
    .img-container
      background-color: white
      margin: 10px 20px
      padding: 0 5px 0 5px
      text-align: center
      p
        margin-top: 6px
</style>
