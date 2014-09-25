'use strict';

var express = require('express'),
    bodyParser = require('body-parser'),
    swig = require('swig'),
    config = require('./config'),
    appPath = process.cwd();

module.exports = function(app) {
  // configure app to use bodyParser()
  // this will let us get the data from a POST
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  // set up static resources to be accessed at /public
  app.use(express.static(config.root + '/public'));
  app.use('/public',  express.static(config.root + '/bower_components'));

  // configure swig templating
  app.engine('html', swig.renderFile);
  app.set('view engine', 'html');
  app.set('views', config.root + '/app/views');

  // home route (angular app does the remaining presentation routing) 
  var index = require(appPath + '/app/controllers/index');
  app.get('/', index.render);

  // toon REST API routes
  require(appPath + '/app/routes/toons')(app);
}
