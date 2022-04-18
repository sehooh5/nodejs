var http = require('http'), fs = require('fs'), express = require('express'),
    cookieParser = require('cookie-parser'), bodyParser = require('body-parser');

var app = express();

app.use(cookieParser());
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));

app.get('/', function(request,response){
    if (request.cookies.auth){
        response.send('<h1>Login Succes</h1>');
    }else{
        response.redirect('/login');
    }
});
app.get('/login', function(request,response){
    fs.readFile('login.html', function(error,data){
        response.send(data.toString());
    });
});
app.post('/login', function(request,response){
    var id = request.param('id');
    var pwd = request.param('password');

    console.log(id, pwd);
    console.log(request.body);

    if(id == 'seho' && pwd == '1234'){
        response.cookie('auth', true);
        response.redirect('/');
    }else{
        console.log('Login Failed!!')
        response.redirect('/login')
    }
});

http.createServer(app).listen(52273, function(){
    console.log('Server Running at http://127.0.0.1:52273');
});