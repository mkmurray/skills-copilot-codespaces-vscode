// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

// Create a router
var router = express.Router();

// Middleware to use for all requests
router.use(function(req, res, next) {
    console.log('Something is happening.');
    next();
});

// Test route to make sure everything is working
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});