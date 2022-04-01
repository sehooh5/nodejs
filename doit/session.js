var http = require('http'), express = require('express'), path = require('path'),
    static = require('serve-static'), cookieParser = require('cookie-parser'),
    expressSession = require('express-session'), bodyParser = require('body-parser')
var app = express();
var router = express.Router();

app.use('/', static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(expressSession({
    secret: 'my key',
    resave: 'true',
    saveUninitialized:true
})) // 미들웨어 세션등록
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/', router);
router.route('/login/Session').post(function(req,res){
    var paramId = req.query.id || req.body.id;
    var parampassword = req.body.pw;

    if(req.session.user){//이미 로그인이 되어있다면
        console.log('이미 로그인 되어있음!')
        res.redirect('/ProductPage.html');
    }else{
        req.session.user = {
            id:paramId,
            password:parampassword
        }//처음 로그인 했을 때 세션 등록
        console.log('처음 로그인!!');
        res.writeHead('200', {'Content-Type': 'text/html;charset=utf8'});
        res.write('<h1>로그인 완료!!</h1>');
        res.write('상품페이지로 이동');
        res.write('<a href="/ProductPage.html">상품페이지</a>');
        res.end();
    }
});

router.route('/Product').get(function(req,res){
    if(req.session.user){
        res.redirect('/ProductPage.html');
    }else{
        res.redirect('/hi.html');
    }
});

router.route('/session/Logout').get(function(req,res){
    if(req.session.user){
        req.session.destroy(function(err){
            if(err){
                throw err;
            }
            res.redirect('/hi.html');
        })
    }else{
        console.log('로그인 되어있지 않습니다!');
        res.redirect('/hi.html');
    }
});

http.createServer(app).listen(3000, function(){
    console.log('3000 포트로 연결합니다')
})