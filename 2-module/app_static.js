// 모듈 추출
var http = require('http');
var express = require('express');
var morgan = require('morgan');

// 서버 생성
var app = express();

//미들웨어 설정
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(function (request, response){
    // 응답
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<img src="/Penguins.jpg" width="100%" />');
});

// 서버 실행
http.createServer(app).listen(52273, function(){
    console.log('Server running at http://127.0.0.1:52273');
});