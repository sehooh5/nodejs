// 몽고 DB 연동하기

// mongoose 모듈 가져오기
var mongoose = require('mongoose');
// test DB 세팅
mongoose.connect('mongodb://localhost:27017/testDB');
// 연결된 test DB 사용
var db = mongoose.connection;
// 연결 실패
db.on('error', function(){
    console.log('DB Connection Failed!');
});
// 연결 성공
db.once('open', function(){
    console.log('DB Connected :)');
});

// Schema 생성
var student = mongoose.Schema({
    name: 'string',
    address: 'string',
    age: 'number'
});
// 정의된 스키마를 객체처럼 사용할 수 있도록 model() 함수로 컴파일
var Student = mongoose.model('Schema', student);
// Student 객체를 new 로 생성해서 값을 입력
var newStudent = new Student({name:'admin', address:'주소불명', age:00});

// [ 기능 ]
newStudent.save(function(error, data){
    if(error){
        console.log(error);
    }else{
        console.log('student data saved!');
    }
});
// Student 레퍼런스 전체 데이터 가져오기
Student.find(function(error, students){
    console.log('---- All Students ----');
});
// 특정 아이디값 가져오기
Student.findOne({_id:'6267ade2997963b388881e7a'}, function(error, student){
    console.log('---- Read One of Student ----')
    if(error){
        console.log(error);
    }else{
        console.log(student);
    }
});
// 특정 아이디 수정하기
Student.findById({_id:'6267ade2997963b388881e7a'}, function(error, student){
    console.log('---- Update(PUT) ----')
    if(error){
        console.log(error);
    }else{
        student.name = '--modified2--';
        student.save(function(error,modified_student){
            if(error){
                console.log(error);
            }else{
                console.log(modified_student);
            }
        });
    }
});
Student.remove({_id:'585b7c4371110029b0f584a2'}, function(error,output){
    console.log('--- Delete ---');
    if(error){
        console.log(error);
    }

    /* ( SINCE DELETE OPERATION IS IDEMPOTENT, NO NEED TO SPECIFY )
        어떤 과정을 반복적으로 수행 하여도 결과가 동일하다. 삭제한 데이터를 다시 삭제하더라도, 존재하지 않는 데이터를 제거요청 하더라도 오류가 아니기 때문에
        이부분에 대한 처리는 필요없다. 그냥 삭제 된것으로 처리
        */
    console.log('--- deleted ---');
});