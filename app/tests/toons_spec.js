'use strict';

var should = require('should'),
    mongoose = require('mongoose'),
    Toon = require('../models/toon');

var toon;

mongoose.connect('mongodb://localhost/tooner-test');

describe('Toon Model Unit Tests:', function() {
  beforeEach(function(done) {
    toon = new Toon({
      buildTitle: 'Toon Title',
    });

    done();
  });

  describe('Method Save', function() {
    it('should be able to save without problems', function(done) {
      return toon.save(function(err) {
        should.not.exist(err);
        done();
      });
    });

    it('should be able to show an error when try to save without buildTitle', function(done) {
      toon.buildTitle = '';

      return toon.save(function(err) {
        should.exist(err);
        done();
      });
    });
  });

  afterEach(function(done) {
    Toon.remove().exec();
    done();
  });
});