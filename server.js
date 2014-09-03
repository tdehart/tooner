'use strict';

// INITIAL SETUP
// =============================================================================
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tooner-dev');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// bootstrap models
// TODO: use bootstrap code from mean to bring in all models via directory traversal
var Toon = require('./app/models/toon');

// bootstrap routes
require('./app/routes/toons')(app);

// START THE SERVER
// =============================================================================
var port = process.env.PORT || 8080;    // set our port
app.listen(port);
console.log('Server started on port ' + port);