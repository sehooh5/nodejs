var http = require('http');
var fs =require('fs');

http.createServer(function (request,response){
    fs.readFile('ejsPage.ejs', 'utf8', function(error,data){

    });
}).listen(52273, function(){
    console.log('Server Running at http://127.0.0.1:52273')
});