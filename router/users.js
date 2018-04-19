import mysql from 'mysql';
import app from './app';


app.use(function(req,res,next){
    req.getConnection(function(err,conn){
        if (err) return next("Cannot Connect");
        var query = conn.query('SELECT * FROM users',function(err,rows){
            if(err){
                throw err;
                return next("Mysql error, check your query");
								/*미들웨어 함수에 대한 콜백 인수(일반적으로 "next"라 불림).*/
								/*현재의 미들웨어 함수가 요청-응답 주기를 종료하지 않는 경우에는 next()를 호출하여 그 다음 미들웨어 함수에 제어를 전달해야 한다. 그렇지 않으면 해당 요청은 정지된 채로 방치됨*/
            }
            res.render('index',{title:"Todo List",data:rows});
         });
    });
});


export default userschema;