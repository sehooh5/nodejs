// file system module
var fs = require('fs');

// 1. 파일 읽기
// 동기 readFileSync()
var text = fs.readFileSync('textfile.txt', 'utf8');
console.log(text);


// 비동기 readFile()
fs.readFile('textfile.txt', 'utf8', function(error, data){
    console.log(data);
});


// 2. 파일 쓰기
var data = 'Hello World . . !';

// 비동기
fs.writeFile('TextFileOtherWrite.txt', data, 'utf8', function (error){
    console.log('WRITE FILE ASYNC COMPLETE!!');
});

//동기
fs.writeFileSync('TextFileOtherWriteSync.txt', data, 'utf8', function (error){
    console.log('WRITE FILE SYNC COMPLETE!!');
});


// 3. 예외 처리
// 동기
console.log('-----예외처리-----')
try{
    var data = fs.readFileSync('textfile.txt', 'utf8');
    console.log(data);
} catch(e) {
    console.log(e);
}

try{
    fs.writeFileSync('textfile.txt', 'Hello World .. !', 'utf8');
    console.log('File Write Complete !!');
}catch(e){
    console.log(e);
}

// 비동기
fs.readFile('textfile.txt', 'utf8', function(error,data){
    if(error){
        console.log(error);
    }else{
        console.log(data);
    }
});

fs.writeFile('textfile.txt', 'Hello world !!',  'utf8', function(error){
    if(error){
        console.log(error);
    }else{
        console.log('File Write Complete !!');
    }
});
