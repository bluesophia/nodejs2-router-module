import express from	'express';
import bodyParser from 'body-parser';
import db from './db';
/*The body-parser module is just a middleware we use 
to parse our data sent through HTTP requests.*/

var path = require('path');



//SET
const app = express();
const router = express.Router();
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));





// //GET-read/retrieve
// app.get('/users', function(req, res){
// 	res.send('<a href="/b"> Go to B</a>');
// });

// //POST-create
// app.post('/users', function(req, res){
// 	res.send('<a href="/a"> Go to A</a>');
// });

// //PUT-update
// app.put('/users:id', function(req, res){
// 	res.send('<a href="/a"> Go to A</a>');
// });

// //DELETE-delete
// app.delete('/users:id', function(req, res){
// 	res.send('<a href="/a"> Go to A</a>');
// });

app.listen(3000, () => {
	console.log("Express success");
});

