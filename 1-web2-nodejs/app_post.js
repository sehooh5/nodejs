var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    if(req.method == 'GET'){
        console.log('GET 요청입니다!')
        fs.readFile('post.html', function(error, data){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    } else if (req.method == 'POST'){
        console.log('POST 요청입니다!')
        req.on('data', function(data){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end('<h1>'+data+'</h1>');
        });
    }
}).listen(52273, function(){
    console.log('Server Running at http://127.0.0.1:52273');
});