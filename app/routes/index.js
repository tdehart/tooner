'use strict';

module.exports = function(app) {
  // home route (angular app does the remaining presentation routing) 
  var index = require('../../app/controllers/index');
  app.get('/', index.render);
};
