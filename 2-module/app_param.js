var http = require('http');
var express = require('express');

// 서버를 생성
var app = express();

// request 이벤트 리스너를 설정
app.use(function (request, response, next){
    // 변수 선언
    var name = request.param('name');
    var region = request.param('region');

    // 응답
    response.send('<h1>' + name + '-' + region + '</h1>')
});

http.createServer(app).listen(52273, function(){
    console.log('Server Running at http://127.0.0.1:52273')
});