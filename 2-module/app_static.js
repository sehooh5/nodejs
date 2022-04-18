// static 미들웨어
// 서버에 손쉽게 파일을 제공하는 미들웨어
// 여기서는 public 폴더 경로를 제공하여 파일을 사용하게 한다

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