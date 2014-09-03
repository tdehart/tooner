'use strict';

// INITIAL SETUP
// =============================================================================
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tooner-dev');

// TODO: use bootstrap code from mean to bring in all models via directory traversal
var Toon = require('./app/models/toon');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;    // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();        // get an instance of the express Router

// on routes that end in /toons
router.route('/toons')
  // create a toon (accessed at POST http://localhost:8080/api/toons)
  .post(function(req, res) {
    
    var toon = new Toon();    // create a new instance of the toon model
    toon.buildTitle = req.body.buildTitle;  // set the toons buildTitle (comes from the request)

    // save the toon and check for errors
    toon.save(function(err) {
      if (err)
        res.send(err);

      res.json({ message: 'Toon created!' });
    });
    
  })

  .get(function(req, res) {
    Toon.find(function(err, toons) {
      if (err)
        res.send(err);

      res.json(toons);
    });
  });

// on routes that end in /toons/:id
router.route('/toons/:id')
  // get the toon with this id (accessed at GET http://localhost:8080/api/toons/:id)
  .get(function(req, res) {
    Toon.findById(req.params.id, function(err, toon) {
      if (err)
        res.send(err);
      res.json(toon);
    });
  })

  // update the toon with this id (accessed at PUT http://localhost:8080/api/toons/:id)
  .put(function(req, res) {
    // use our toon model to find the toon we want
    Toon.findById(req.params.id, function(err, toon) {
      if (err)
        res.send(err);

      toon.buildTitle = req.body.buildTitle;  // update the toons info

      // save the toon
      toon.save(function(err) {
        if (err)
          res.send(err);

        res.json({ message: 'Toon updated!' });
      });

    });
  })

  // delete the toon with this id (accessed at DELETE http://localhost:8080/api/toons/:id)
  .delete(function(req, res) {
    Toon.remove({
      _id: req.params.id
    }, function(err, toon) {
      if (err)
        res.send(err);

      res.json({ message: 'Successfully deleted' });
    });
  });

// REGISTER OUR ROUTES -------------------------------
app.use('/', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Server started on port ' + port);