// url, querystring module
var url = require('url');

var querystring = require('querystring');

var pareseObject = url.parse('http://hab.co.kr/book/look.html?isbn=978-89-7914-874-9&seho=1991');

console.log(pareseObject.query);
console.log(querystring.parse(pareseObject.query));


// util module
var util = require('util');

var data = util.format('%d + %d = %d', 123,4567,123+4567);
console.log(data);


// crypto module
var crypto = require('crypto');

var shasum = crypto.createHash('sha1');
//console.log(shasum)
shasum.update('crypto_hash');
//console.log(shasum.update('crypto_hash'));
var output = shasum.digest('hex');

console.log('crypto_hash: ', output);


// cypro module 을 사용한 암호화
var crypto = require('crypto');

// 변수 선언
var key = 'my pwd';
var input = 'PASSWORD';

// 암호화
var cipher = crypto.createCipher('aes192', key);
cipher.update(input, 'utf8', 'base64');
var cipheredOutput = cipher.final('base64');

// 암호화 해제
var decipher = crypto.createDecipher('aes192', key);
decipher.update(cipheredOutput, 'base64', 'utf8');
var decipheredOutput = decipher.final('utf8');

// print
console.log('origin : ', input);
console.log('ciphered : ', cipheredOutput);
console.log('deciphered : ', decipheredOutput);
