var http = require('http')
var server = http.createServer()

var port = 3000

server.listen(port,function(){
    console.log("connect with port 3000!!")
})

server.on('request', function(req, res){
    res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"})
    res.write("<h2>node.js server</h2>")
    res.end()
})