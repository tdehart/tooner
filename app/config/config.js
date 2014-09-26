'use strict';

// Utilize Lo-Dash utility library
var _ = require('lodash'),
    fs = require('fs'),
    glob = require('glob');

// Load configurations
// Set the node environment variable if not set before
process.env.NODE_ENV = ~fs.readdirSync('./app/config/env').map(function(file) {
  return file.slice(0, -3);
}).indexOf(process.env.NODE_ENV) ? process.env.NODE_ENV : 'development';

// Extend the base configuration in all.js with environment
// specific configuration
module.exports = _.extend(
  require('./env/all'),
  require('./env/' + process.env.NODE_ENV) || {}
);

// Get files by glob patterns
// Credit to mean.js project for the following code
module.exports.getGlobbedFiles = function(globPatterns, removeRoot) {
  // For context switching
  var _this = this;

  // URL paths regex
  var urlRegex = new RegExp('^(?:[a-z]+:)?\/\/', 'i');

  // The output array
  var output = [];

  // If glob pattern is array so we use each pattern in a recursive way, otherwise we use glob 
  if (_.isArray(globPatterns)) {
    globPatterns.forEach(function(globPattern) {
      output = _.union(output, _this.getGlobbedFiles(globPattern, removeRoot));
    });
  } else if (_.isString(globPatterns)) {
    if (urlRegex.test(globPatterns)) {
      output.push(globPatterns);
    } else {
      glob(globPatterns, {
        sync: true
      }, function(err, files) {
        if (removeRoot) {
          files = files.map(function(file) {
            return file.replace(removeRoot, '');
          });
        }

        output = _.union(output, files);
      });
    }
  }

  return output;
};

// Get the modules JavaScript files
module.exports.getJavaScriptAssets = function(includeTests) {
  var output = this.getGlobbedFiles(this.assets.lib.js.concat(this.assets.js), 'public/');

  // To include tests
  if (includeTests) {
    output = _.union(output, this.getGlobbedFiles(this.assets.tests));
  }

  return output;
};

 // Get the modules CSS files
module.exports.getCSSAssets = function() {
  var output = this.getGlobbedFiles(this.assets.lib.css.concat(this.assets.css), 'public/');
  return output;
};
