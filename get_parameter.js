var http = require('http'), express = require('express')
var app = express()

http.createServer(app).listen(3000, function(){
    console.log('port 3000..')
})

app.use('/', function(req, res){
    var userAgent = req.header('User-Agent')
    var paramName = req.query.name
    var paramAge = req.query.age
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    res.write('<h1>express 가 응답한 것입니다</h1>')
    res.write('userAgent: '+userAgent+'')
    res.write('paramName: '+paramName+'')
    res.write('paramAge: '+paramAge+'')
    res.end()
})