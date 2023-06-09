const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.send("Hello from Express")
})

app.get('/user', (req,res) => {
    res.send("User page from Express")
})

app.listen(3000, () => console.log('Express server start...3000'))

//------------------------------------------

const http = require('http')
const server = http.createServer()

server.on('require', (req,res) => {
    if (req.url === "/")
        res.end('Hello from Http-Nodejs')
    if (req.url === "/user")
        res.end('This is user page')
})
server.listen(8080, ()=>console.log('HTTP server start...8080'))