var http = require('http');

http.createServer(function(request, response){
   var cookie = request. headers.cookie;
   console.log(cookie.split(';'))
   cookie = cookie.split(';').map(function(element){
        var element = element.split('=');

        return {
            key: element[0],
            value: element[1]
        };
   });

   response.writeHead(200,{
    'Content-Type': 'text/html',
    'Set-Cookie': ['name=SEHO', 'region = KOREA']
   }) ;

   response.end('<h1>'+JSON.stringify(cookie)+'</h1>');
}).listen(52273, function(){
    console.log('Server Running at http://127.0.0.1:52273');
});