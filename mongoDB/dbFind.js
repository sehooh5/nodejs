var Client = require('mongodb').MongoClient;

Client.connect('mongodb://localhost:27017/school', function(error, db){
    if(error){
        console.log(error)
    } else {
        var myDB = db.db('student');
        var cursor = myDB.collection('student').find();
        cursor.forEach(function(err,doc){
            if(err){
                console.log(err);
            } else {
                if(doc != null){
                    console.log(doc);
                }
            }
        });
    }
});