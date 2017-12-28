var express = require('express');
var app = express();
var port = 5000;
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true})); ///Need to remember

var recordCollection = [];


//Serve up static files
app.use(express.static('server/public'));

//Records POST route
app.post('/records', function(req, res) {
    console.log(req.body); //req.body will be our recordForSale sent from client
    var recordForSale = req.body;
    recordCollection.push(recordForSale);
    console.log(recordCollection);
    res.sendStatus(201);
});

// Records GET route
app.get('/records', function(req, res) {
    res.send(recordCollection);
});

// Start up server
app.listen(port, function() {
    console.log('listening on port: ', port);
});