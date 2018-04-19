import mysql from 'mysql';

//MYSQL CONNECTION
var connection = mysql.createConnection({
	host : 'localhost',
	port: 3306,
	user: 'root',
	password: '',
	database:'new_schema'
});

connection.connect(function(err){
	if(err){
		console.error('mysql connection error');

	}else{
		console.log("success");
	}
});