// event

// process 객체에 exit 이벤트 연결
process.on('exit', function(){
    console.log('BYE!!!!!-----');
});

// process 객체에 uncauchtException 이벤트 연결
process.on('uncaughtException', function(error){
    console.log('EXCEPTION !!!!!!@@@@!!!!@@@@');
});

// 2초 간격으로 3번 예외를 발생
var count = 0;
var id = setInterval(function(){
    count++;

    if(count == 3){
        clearInterval(id);
    }

    // excetpion 강제 발생
    error.error.error();
},2000);