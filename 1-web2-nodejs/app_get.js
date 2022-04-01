var http = require('http');
var url = require('url');

http.createServer(function(req,res){
    // 요청 매개변수를 추출
    var query = url.parse(req.url, true).query;

    // GET 요청 매개변수 출력
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>'+JSON.stringify(query)+'</h1>')
}).listen(52273,function(){
    console.log('Server Running at http://127.0.0.1:52273');
});