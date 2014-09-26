'use strict';

var mongoose = require('mongoose');

// INITIAL SETUP
// =============================================================================
var config = require('./app/config/config');

// Bootstrap db connection
var db = mongoose.connect(config.db, function(err) {
  if (err) {
    console.error('\x1b[31m', 'Could not connect to MongoDB!');
    console.log(err);
  }
});

var app = require('./app/config/bootstrap')();

// START THE SERVER
// =============================================================================
app.listen(config.port);
console.log('Server started on port ' + config.port);

// Expose app
exports = module.exports = app;
