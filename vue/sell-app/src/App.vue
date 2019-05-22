<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
  </div>
</template>

<script>
import VHeader from 'components/v-header/v-header'
import { getSeller } from 'api'

export default {
  name: 'app',
  data () {
    return {
      seller: {}
    }
  },
  created () {
    this._getSeller()
  },
  methods: {
    _getSeller () {
      // 由于将判断封装在了src/api中，所以在此不必再作判断，then的话一定能拿到数据
      getSeller().then((seller) => {
        this.seller = seller
      })
    }
  },
  components: {
    VHeader
  }
}
</script>
<style lang="stylus">

</style>
