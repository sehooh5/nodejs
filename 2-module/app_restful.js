var http = require('http'), express = require('express'), cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'), session = require('express-session'), fs = require('fs');

// 더미 데이터베이스를 구현
var DummyDB = (function () {
    var DummyDB = {};
    var storage = [];
    var count = 1;

    // 메서드 구현
    DummyDB.get = function (id){
        if(id){
            // 변수 가공
            id = (typeof id == 'string') ? Number(id) : id;

            // 데이터 선택
            for(var i in storage) if (storage[i].id == id){
            return storage[i];
            }
        } else {
            return storage;
        }
    };

    DummyDB.insert = function(data){
        data.id = count++;
        storage.push(data);
        return data;
    };

    DummyDB.remove = function(id){
        // 변수를 가공
        id = (typeof id == 'string') ? Number(id) : id;

        // 삭제
        for (var i in storage) if (storage[i].id == id){
            // 데이터 삭제
            storage.splice(i,1);
            // 데이터 삭제 성공
            return true;
        }
        // 데이터 삭제 실패
        return false;
    };

    return DummyDB;
})();

var app = express();
app.use(bodyParser());

// 라우터 설정
app.get('/user', function(request, response){

});
app.get('/user/:id', function(request, response){

});
app.post('/user', function(request, response){

});
app.put('/user/:id', function(request, response){

});
app.del('/user/:id', function(request, response){

});

http.createServer(app).listen(52273, function(){
    console.log('Server Running at http://127.0.0.1:52273')
});