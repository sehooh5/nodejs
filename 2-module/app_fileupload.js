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
    // 파일의 이름 변경
    var comment = request.param('comment');
    var imageFile = request.files.image;

    if(imageFile){
        var name = imageFile.name;
        var path = imageFile.path;
        var type = imageFile.type;


        // 이미지 파일 확인
        if(type.indexOf('image') != -1){
            // 이미지 파일의 경우 : 파일 이름을 변경
            var outputPath = __dirname + '/multipart/' + Date.now() + '_' + name;

            fs.rename(path, outputPath, function(error){
                response.redirect('/');
            });
        } else {
            // 이미지 파일이 아닐 경우 : 파일 이름을 제거
            fs.unlink(path, function(error){
                response.send(400);
            });
        }
    } else {
        // 파일이 없는 경우
        response.send(404);
    }


});

http.createServer(app).listen(52273, function(){
    console.log('Server Running at http://127.0.0.1:52273');
});