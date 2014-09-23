'use strict';

var fs = require('fs'),
    express = require('express'),
    appPath = process.cwd();

module.exports = function(passport, db) {
  var app = express();

  // Express settings  
  require(appPath + '/app/config/express')(app);

  return app;
}
