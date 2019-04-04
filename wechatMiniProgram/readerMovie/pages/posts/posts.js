var postsData = require('../../data/posts-data.js')

Page({
  data: {
  },
  
  onLoad: function(options) {
    this.setData({
      posts_key: postsData.postList
    })
  }
})