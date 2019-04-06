var postsData = require('../../data/posts-data.js')

Page({
  data: {
  },
  
  onLoad: function(options) {
    this.setData({
      posts_key: postsData.postList
    })
  },

  onPostTap: function(event) {
    var postId = event.currentTarget.dataset.postid;
    
    wx.navigateTo({
      url: 'post-detail/post-detail?id=' + postId
    })
  }
})