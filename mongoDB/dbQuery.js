var Client = require('mongodb').MongoClient;

Client.connect('mongodb://localhost:27017/school', function(error, db){
    if(error) {
        console.log(error);
    } else {
        // 1. 읽어올 document 필드값 정의
        var query = {gender:'F'};
        // 2. find( ) 함수에 query 입력
        var myDB = db.db('student');
        var cursor = myDB.collection('student').find(query);
        cursor.forEach(function(err,doc){
            if(err){
                console.log(err);
            }else{
                if(doc != null){
                    console.log(doc);
                }
            }
        });
    }
});