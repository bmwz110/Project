<template>
  <div>
    <div id="app">
      <Photo class="photo"/>
      <Article class="article"/>
    </div>
    <div id="footer">
      <hr>
      <p>Written and coded by <a href="https://github.com/bmwz110">bmwz110</a>.</p>
    </div>
  </div>
</template>

<script>
import Photo from './components/photo/Photo'
import Article from './components/article/Article'

export default {
  name: 'app',
  components: {
    Photo,
    Article
  }
}

function fontResize () {
  var hW = document.body.offsetWidth
  if (hW < 880) {
    document.getElementsByClassName('article')[0].style.width = '90%'
  } else {
    document.getElementsByClassName('article')[0].style.width = '60%'
  }
}

window.onresize = function () {
  fontResize()
}
</script>
<style lang="stylus">
  #app
    max-width: 1000px
    width: 80%
    margin: auto
    margin-top: 50px
    border-radius: 10px
    background-color: rgb(238, 238, 238)
    .photo
      width: 100%
    .article
      width: 60%
      margin: auto
  #footer
    width: 80%
    margin: auto
    text-align: center
</style>
