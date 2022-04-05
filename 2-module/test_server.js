var http = require('http');

http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
    response.end('<h1>Test File 2</h1>출력문자열을 변경했습니다!');
}).listen(52273, function(){
    console.log('Server Running at http://127.0.0.1:52273')
});