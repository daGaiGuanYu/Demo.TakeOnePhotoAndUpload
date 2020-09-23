const Path = require('path')
const { HandleRequest, Constant, Server } = require('kuaizi')
const writeStaticFile = require('kuaizi-dev-static')
const fs = require('fs')

const position = Path.join(__dirname, './')

HandleRequest.get('/static', ctx => {
  ctx.res.setHeader('Content-Type','text/html;charset=utf-8')
  writeStaticFile(ctx.req, ctx.res, position)
  return Constant.Nothing
})

HandleRequest.post('/upload', ctx => {
  const write = fs.createWriteStream('2.jpg')
  ctx.req.pipe(write)
  return 'haha'
})

Server.start()