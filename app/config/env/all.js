'use strict';

var path = require('path');
var rootPath = path.normalize(__dirname + '/../../..');

module.exports = {
  root: rootPath,
  port: process.env.PORT || 8080,
  assets: {
    lib: {
      css: [
        'public/lib/bootstrap/dist/css/bootstrap.css',
        'public/lib/bootstrap/dist/css/bootstrap-theme.css',
      ],
      js: [
        'public/lib/angular/angular.js',
        'public/lib/angular-resource/angular-resource.js',
        'public/lib/angular-animate/angular-animate.js',
        'public/lib/angular-ui-router/release/angular-ui-router.js',
        'public/lib/shadowbane-db/*.json'
      ]
    },
    css: [
      'public/modules/**/assets/*.css'
    ],
    js: [
      'public/app.js',
      'public/modules/*/*.js',
      'public/modules/*/*[!tests]*/*.js'
    ],
    tests: [
      'public/lib/angular-mocks/angular-mocks.js',
      'public/modules/*/tests/*.js'
    ]
  }
};
