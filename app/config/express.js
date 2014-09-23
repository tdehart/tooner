'use strict';

var express = require('express'),
    bodyParser = require('body-parser'),
    swig = require('swig'),
    mongoose = require('mongoose'),
    config = require('./config');

module.exports = function(app) {
  mongoose.connect('mongodb://localhost/tooner-dev');

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
}
