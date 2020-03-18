// nodemon 热更新
// cross-env 设置环境
const serverHandle = (req, res) => {
  res.setHeader('Content-type', 'application/json')

  const resData = {
    name: 'bmwz110',
    site: 'bmez110.com',
    env: process.env.NODE_ENV
  }

  res.end(
    JSON.stringify(resData)
  )
}

module.exports = serverHandle
