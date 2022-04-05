var http = require('http');
var express = require('express');

// 서버를 생성
var app = express();


// request 이벤트 리스너를 설정
// middleware 1
app.use(function (request, response, next){
    console.log('1st Middleware');
    next();
});

// middleware 2
app.use(function (request, response, next){
    console.log('2nd Middleware');
    next();
});

// middleware 3
app.use(function (request, response, next){
    console.log('3rd Middleware');

    // 응답
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
    response.end('<h1>express Basic</h1>');
});

http.createServer(app).listen(52273, function(){
    console.log('Server Running at http://127.0.0.1:52273')
});