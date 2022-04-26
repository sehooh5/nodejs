var http = require('http'), express = require('express'), cookieParser = require('cookie-parser')
    bodyParser = require('body-parser'), session = require('express-session');

var app = express();

// 미들웨어 설정
app.use(cookieParser());
app.use(session({
    secret: 'secret key',
    key: 'seho',
    cookie:{
        maxAge: 60*100
    }
}));
app.use(bodyParser());
app.use(function (request, response){
    var output = {};
    output.cookies = request.cookies;
    output.session = request.session;

    //세션 저장
    request.session.now = (new Date()).toUTCString();

    //응답
    response.send(output);

});

http.createServer(app).listen(52273, function(){
    console.log('Server Running at http:127.0.0.1:52273');
});