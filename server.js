'use strict';

var mongoose = require('mongoose');

// INITIAL SETUP
// =============================================================================
var config = require('./app/config/config');
var db = mongoose.connect(config.db);

var app = require('./app/config/bootstrap')();

// START THE SERVER
// =============================================================================
app.listen(config.port);
console.log('Server started on port ' + config.port);
