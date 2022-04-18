// cookieParser 미들웨어
// 요청 쿠키를 추출하는 미들웨어
// 이 미들웨어를 사용하면 request 객체에 cookies 속성이 부여됨

// 모듈 추출
var http = require('http'), express = require('express'), cookieParser = require('cookie-parser');

// 서버 생성
var app = express();

// 미들웨어 설정
app.use(cookieParser());

// 라우터 설정
app.get('/getCookie', function (request, response){
    response.send(request.cookies);
});

app.get('/setCookie', function (request, response){
    // 쿠키 생성
    response.cookie('string', 'cookie');
    response.cookie('json', {
        name: 'cookie',
        property: 'delicious'
    });

    // 응답
    response.redirect('/getCookie');
});

// 서버 실행
http.createServer(app).listen(52273, function(){
    console.log('Server Running at http://127.0.0.1:52273');
});
