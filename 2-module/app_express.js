var http = require('http');
var express = require('express');

// 서버를 생성
var app = express();

// request 이벤트 리스너를 설정
app.use(function (request, response, next){
    // User-Agent 속성 추출
    var agent = request.header('User-Agent');
    var cookie = request.header('cookie');

    if (agent.toLowerCase().match(/chrome/)){
        response.send('<h1>Hello Chrome .. !</h1>');
    } else {
        response.send('<h1>Hello express .. !</h1>');
    }

    console.log(request.header('accept-language'))
});

http.createServer(app).listen(52273, function(){
    console.log('Server Running at http://127.0.0.1:52273')
});