var http = require('http'),  express = require('express'),
    static = require('serve-static'), bodyParser = require('body-parser'), cookieParser = require('cookie-parser'),
    expressErrorHandler = require('express-error-handler'),
    path = require('path') // express-error-handler 불러옴

var app = express();
var router = express.Router();
app.use(cookieParser());
app.use('/', static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

http.createServer(app).listen(3000,function(){
    console.log('3000포트에 연결되었습니다')
})

var errorHandler = expressErrorHandler({
    static:{
        '404': './public/404.html'
    } //404 이외에도 이렇게 등록하면 된다
})

app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);
app.use('/', router);
