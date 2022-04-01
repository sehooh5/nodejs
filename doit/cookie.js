var http = require('http'), express = require('express'), static = require('serve-static'),
    bodyParser = require('body-parser'), path = require('path');
var cookieParser = require('cookie-parser');

var app = express();
var router = express.Router();
app.set('port', 3000);
app.use('/', static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use('/', router);
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

router.route('/process/setCookie').get(function(req,res){
    console.log('setCookie 요청됨')
    res.cookie('user',{
        id: 'seho',
        name: '세호랜드',
        authorized:true
    });
    res.redirect('/process/getCookie');
});

router.route('/process/getCookie').get(function(req,res){
    res.send(req.cookies);
});

http.createServer(app).listen(app.get('port'), function(){
    console.log('port 3000 연결')
})