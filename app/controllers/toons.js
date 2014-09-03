'use strict';

var mongoose = require('mongoose'),
    Toon = mongoose.model('Toon'),
    _ = require('lodash');


// Find toon by id
// This initializes the toon model for POST/PUT/DELETE requests
exports.toon = function(req, res, next, id) {
  Toon.load(id, function(err, toon) {
    if (err) return next(err);
    if (!toon) return next(new Error('Failed to load toon ' + id));
    req.toon = toon;
    next();
  });
};

// Create a toon
exports.create = function(req, res) {
  var toon = new Toon(req.body);

  toon.save(function(err) {
    if (err) {
      res.send(err);
    } else {
      res.json(toon);
    }
  });
};

// Update a toon
exports.update = function(req, res) {
  var toon = req.toon;

  toon = _.extend(toon, req.body);

  toon.save(function(err) {
    if (err) {
      res.send(err);
    } else {
      res.json(toon);
    }
  });
};

// Delete a toon
exports.destroy = function(req, res) {
  var toon = req.toon;

  toon.remove(function(err) {
    if (err) {
      res.send(err);
    } else {
      res.json(toon);
    }
  });
};

// Show a toon
exports.show = function(req, res) {
  res.json(req.toon);
};

// List of toons
exports.all = function(req, res) {
  Toon.find(function(err, toons) {
    if (err) {
      res.send(err);
    } else {
      res.json(toons);
    }
  });
};
