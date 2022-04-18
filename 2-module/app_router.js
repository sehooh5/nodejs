// router 미들웨어
// 경로를 설정 : 클라이언트의 요청에 따라 적절한 페이지를 제공(get,post,put 등등)

// 모듈 추출
var http = require('http'), express = require('express'), morgan = require('morgan');

// 서버 생성
var app = express();

// 미들웨어 설정
app.use(morgan('dev'));
//app.use(app.router); // 현 버전에서는 따로 사용할 필요가 없다
app.use(express.static(__dirname + '/public'));

// 라우터 설정
app.get('/page/:id/:num', function(request, response){
    // 변수 선언
    var name = request.param('id');
    var num = request.param('num');

    //응답
    response.send('<h1>' + name + ' Page</h1>' + '<h2>' + num + ' article</h2>');
});

app.get('/a', function(request, response){
    response.send('<a href="/b">Go to B</a>');
});

app.get('/b', function(request, response){
    response.send('<a href="/a">Go to A</a>');
});

// 서버 실행
http.createServer(app).listen(52273, function(){
    console.log('Server Running at http://127.0.0.1:52273');
});
