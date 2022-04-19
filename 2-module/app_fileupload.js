// file upload 서버

var http = require('http'), fs = require('fs'), express = require('express'),
    cookieParser = require('cookie-parser'), bodyParser = require('body-parser'),
    multipart = require('connect-multiparty');

var app = express();

app.use(cookieParser());
// bodyparser 에서 바디의 용량 제한 limit
app.use(bodyParser.json({
    limit: '10mb'
}));
app.use(multipart({
    uploadDir: './multipart'
}));


app.get('/', function(request, response){
    fs.readFile('HTMLPage.html', function(error,data){
        response.send(data.toString());
    });
});
app.post('/', function(request, response){
    console.log(request.body);
    console.log(request.files);

    response.redirect('/');
});

http.createServer(app).listen(52273, function(){
    console.log('Server Running at http://127.0.0.1:52273');
});