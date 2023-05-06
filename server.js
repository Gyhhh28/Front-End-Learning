
//node.js 搭建web服务器
const http = require('http')
const fs = require('fs')
const ws = require('socket.io')

const server = http.createServer((req,res) => {
    const html = fs.readFileSync('./server.html')//读取文件
    res.end(html);//把文件内容发给用户并结束请求
})

server.listen('3000')

const io = ws(server)//生成服务器端的接口集合 包括多个用户接口

//服务端监听到客户端链接事件
io.on('connection',socket => {
    socket.on('message',msg => {   
        io.emit('message',msg)//主动发消息给接口集合中的所有用户    
    }) //监听消息到来的事件
})