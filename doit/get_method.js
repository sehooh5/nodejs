var http = require('http')

var options = {
    host: 'www.google.com',
    port: '80',
    path: '/'
};

var req = http.get(options, function(res){
    var resData = ''
    res.on('data', function (ch){
        resData += ch;
    });

    res.on('end', function(){
        console.log(resData)
    });
});

req.on('error', function(error){
    console.log("오류발생 : " + error.message)
});

