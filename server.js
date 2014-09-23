'use strict';

// INITIAL SETUP
// =============================================================================
// Initializing system variables
var config = require('./app/config/config');
var app = require('./app/config/bootstrap')();

// bootstrap models
var Toon = require('./app/models/toon');

// bootstrap routes
require('./app/routes/toons')(app);

var index = require('./app/controllers/index');
app.get('/', index.render);

// START THE SERVER
// =============================================================================
var port = process.env.PORT || 8080;    // set our port
app.listen(port);
console.log('Server started on port ' + port);
