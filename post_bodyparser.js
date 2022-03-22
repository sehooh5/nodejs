var http = require('http'), express = require('express'), path = require('path')
var static = require('serve-static'), body = require('body-parser')
var app = express()

app.use(body.urlencoded({extended: false}))
app.use(body.json())
app.use('/', static(path.join(__dirname, 'public')))

http.createServer(app).listen(3000, function(){
    console.log('port 3000...')
})

app.use('/', function(req, res){
    var id = req.body.id
    var pw = req.body.pw
    console.log(id+" "+pw)
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf8'})
    res.write("ID = "+id)
    res.write("PW = "+pw)
    res.end("입니다.")
})