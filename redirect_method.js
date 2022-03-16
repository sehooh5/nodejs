var express = require('express')
, http = require('http')
var app = express()

app.use('/', function(req,res,next){
    res.redirect('https://www.google.co.kr/')
})
http.createServer(app).listen('3000')