var http = require('http');
var fs = require('fs');
var jade = require('jade');

http.createServer(function(request, response){
    //jadePage.jade 파일을 읽습니다
    fs.readFile('jadePage.jade', 'utf8', function(error, data){
        var fn = jade.compile(data);

        response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        response.end(fn({
            name: 'seho',
            description: 'im your energy!'
        }));
    });
}).listen(52273, function(){
    console.log('Server Running at http://127.0.0.1:52273')
});