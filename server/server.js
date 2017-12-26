var express = require('express');
var app = express();
var port = 5000;
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true})); ///Need to remember

//Serve up static files
app.use(express.static('server/public'));

//Records POST route
app.post('/records', function(req, res) {
    console.log(req.body);
    res.sendStatus(201);
});

// Start up server
app.listen(port, function() {
    console.log('listening on port: ', port);
});