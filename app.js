import express from	'express';
import bodyParser from 'body-parser';
import mysql from 'mysql';
var path = require('path');

//SET
const app = express();
const router = express.Router();
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));


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


//GET-read/retrieve
app.get('/users', function(req, res){
	res.send('<a href="/b"> Go to B</a>');
});

//POST-create
app.post('/users', function(req, res){
	res.send('<a href="/a"> Go to A</a>');
});

//PUT-update
app.put('/users:id', function(req, res){
	res.send('<a href="/a"> Go to A</a>');
});

//DELETE-delete
app.delete('/users:id', function(req, res){
	res.send('<a href="/a"> Go to A</a>');
});


app.listen(3000, function(){
	console.log('Express server');
});