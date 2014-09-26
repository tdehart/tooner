'use strict';

var fs = require('fs'),
    express = require('express'),
    path = require('path'),
    config = require('./config');

module.exports = function(passport, db) {
  var app = express();

  app.locals.title = config.app.title;
  app.locals.jsFiles = config.getJavaScriptAssets();
  app.locals.cssFiles = config.getCSSAssets();

  // Bootstrap models
  config.getGlobbedFiles('./app/models/**/*.js').forEach(function(modelPath) {
    require(path.resolve(modelPath));
  });

  // Express settings  
  require(path.resolve('./app/config/express'))(app);

  return app;
}
