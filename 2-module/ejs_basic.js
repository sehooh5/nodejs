var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

http.createServer(function (request,response){
    // ejsPage.ejs 파일을 읽습니다
    fs.readFile('ejsPage.ejs', 'utf8', function(error,data){
        response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        response.end(ejs.render(data, {
            name: 'Seho Oh',
            description: '안녕 Hello ejs with Node.js .. !!!'
        }));
    });
}).listen(52273, function(){
    console.log('Server Running at http://127.0.0.1:52273')
});