const querystring = require('querystring')
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')


const serverHandle = (req, res) => {
  // 设置返回格式为 JSON
  res.setHeader('Content-type', 'application/json')

  // Get path
  const url = req.url
  req.path = url.split('?')[0]

  // resolve query para
  req.query = querystring.parse(url.split('?')[0])
  
  // Dealing blog router
  const blogData = handleBlogRouter(req, res)
  if (blogData) {
    res.end(
      JSON.stringify(blogData)
    )
    return
  }

  // Dealing user router
  const userData = handleUserRouter(req, res)
  if (userData) {
    res.end(
      JSON.stringify(userData)
    )
    return
  }

  // Missing, return 404
  res.writeHead(404, {"Content-type": "text/plain"})
  res.write("404 Not Found\n")
  res.end()
}

module.exports = serverHandle
