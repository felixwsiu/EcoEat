const express = require('express');
const app = express();
const path = require('path');
const router = app.Router();
const port = 3000

app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/index.html')))
app.get('*', function(req, res) {  res.render('error');});

app.use('/',router);
app.use('js', express.static(_dirname +'/js'));
app.listen(port, () => console.log(`Listening on port ${port}!`))