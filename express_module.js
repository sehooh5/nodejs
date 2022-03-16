var http = require('http'),
    express = require('express');

var app = express()

app.set('port', process.env.port||3000);
http.createServer(app).listen(app.get('port'), function(){
    console.log('start express server...'+app.get('port'))
})