var http = require('http');
//모듈호출(http는 공통모듈임)-> 커스터마이즈로도 만들 수 있음 
http.createServer(function(req, res){
	//모듈이 가지고 있는 함수-///익명함수
	//익명함수-> 함수가 대기상태로 $.ready와 동일 
	res.writeHead(200, {'Content-Type': 'text/html'})
	res.end('<h1>Hello server</h1>');
	//원래는 라우터를 통해서 보
}).listen(3000, function(){
	//체인함수->listen이 creatserver체이닝
	console.log('Server running at http://127.0.0.1:3000');
	//폴링상태
});
//아파치처럼 써보려고 연습