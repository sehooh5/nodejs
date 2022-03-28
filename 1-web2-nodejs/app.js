// 모듈 추출
var http = require('http');
var fs = require('fs');
var url = require('url');

// 서버를 생성 및 실행합니다
http.createServer(function(req, res){
    // 변수를 선언합니다.
    var pathname = url.parse(req.url).pathname;

    // 페이지를 구분합니다
    if(pathname == '/'){
        // index.html 파일을 읽습니다
        fs.readFile('index.html', function (error, data){
            // 응답합니다
            res.writeHead(200, { 'Content-Type': 'text/html'});
            res.end(data);
        });
    } else if (pathname == '/OtherPage'){
        // OtherPage.html 파일을 읽습니다
        fs.readFile('OtherPage.html', function (error, data){
            // 응답합니다
            res.writeHead(200, { 'Content-Type': 'text/html'});
            res.end(data);
        });
    }
}).listen(51515, function(){
    console.log('Server Running at http://127.0.0.1:51515');
});