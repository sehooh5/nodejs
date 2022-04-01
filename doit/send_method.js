var express = require('express'), http = require('http')
var app = express()

http.createServer(app).listen(3000,function(){
    console.log("create server port 3000")
})

app.use('/', function(req,res,next){
    res.send({socckerTeam: 'Chelsea', rank: 1})
})