// 2. remove listener
var onUncaughtException = function(error){
    console.log('exception !!!');

    // remove event
    process.removeListener('uncaughtException', onUncaughtException);
};

// connect event
process.on('uncaughtException', onUncaughtException);

// 2초마다 함수 실행
setInterval(function(){
    error.error.error('^-^');
},2000);
