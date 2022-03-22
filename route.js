var http = require('http'), express = require('express'), path = require('path');
var static = require('serve-static'), bodyParser = require('body-parser');
var app = express(), router = express.Router()

app.use('/', static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended:false}))
app.use('/', router)
http.createServer(app).listen(3000, function(){
    console.log('connect with port 3000...')
})

router.route('/login/:name').post(function(req,res){
    console.log("Log in!")
    var paramId = req.body.id || req.query.id;
    var paramPw = req.body.pw || req.query.pw;
    var name = req.params.name;
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>express.Router 사용</h1>')
    res.write('name: '+ name + ' ')
    res.write('ID: '+ paramId + ' ')
    res.write('PW: '+ paramPw + ' ')
    res.end()
})