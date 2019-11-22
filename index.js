const express = require('express');
const app = express();
const path = require('path');
//const router = app.Router();
const port = 2080;
var util = require('util');
http.createServer(function (req,res){
	if (req.method == 'POST'){
		console.log("POST");
	}
});
var imagefile;
app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/index.html')))
app.get('/retrieved', (req, res) => res.sendFile(path.join(__dirname+'/retrieved.js')))
app.get('/require', (req, res) => res.sendFile(path.join(__dirname+'/require.js')))

app.get('*', function(req, res) {  res.render('error');});
	


app.listen(port, () => console.log(`Listening on port ${port}!`))