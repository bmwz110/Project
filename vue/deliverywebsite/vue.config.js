const appData = require('./data.json')
cosnt seller = appData.seller
cosnt goods = appData.goods
cosnt rating= appData.rating

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}
devServer: {

}
