import express from	'express';
import app from	'./app';

const app = express();
const router = express.Router();

app.listen(3000, () => {
	console.log("Express success");
});

app.router({
	method: 'GET',
	path: './public/'
})