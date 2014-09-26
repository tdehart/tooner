'use strict';

var express = require('express'),
    bodyParser = require('body-parser'),
    swig = require('swig'),
    config = require('./config'),
    path = require('path');

module.exports = function(app) {
  // configure app to use bodyParser()
  // this will let us get the data from a POST
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  // set up static resources to be accessed at /public
  app.use(express.static(path.resolve('./public')));
  app.use('/public/lib',  express.static(config.root + '/bower_components'));

  // configure swig templating
  app.engine('html', swig.renderFile);
  app.set('view engine', 'html');
  app.set('views', config.root + '/app/views');

  // Bootstrap routes
  config.getGlobbedFiles('./app/routes/**/*.js').forEach(function(routePath) {
    require(path.resolve(routePath))(app);
  });
}
