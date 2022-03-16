var express = require('express')
, http = require('http')

var app = express()

http.createServer(app).listen('3000', function(){
    console.log('connect with port 3000...')
})

app.use('/', function(req,res,next){
    res.sendStatus(404)
})