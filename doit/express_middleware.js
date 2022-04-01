var http = require('http'),
    express = require('express');

var app = express()
app.set('port', process.env.port || 3000)

http.createServer(app).listen(app.get('port'), function(){
    console.log('connect with port 3000...')
})

app.use('/', function(req,res,next){
    req.name = "seho";
    next();
})

app.use('/', function(req,res,next){
    res.writeHead('200', {'Content-Type': 'text/html;utf-8'})
    console.log(req.name)
    res.write('<h1>'+req.name+' hi hello 안녕</h1>')
    res.end()
})