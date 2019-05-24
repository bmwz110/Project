const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/mock'
        }
      }
    }
  },

  chainWebpack (config) {
    config.resolve.alias
      // .set('components', resolve('src/components'))
      // .set('common', resolve('src/common'))
      // .set('api', resolve('src/api'))
      .set('styles', resolve('src/assets/styles'))
      .set('common', resolve('src/common'))
      .set('pages', resolve('src/pages'))
  },

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
