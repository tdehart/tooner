'use strict';

var gulp = require('gulp'),
  mocha = require('gulp-mocha'),
  karma = require('gulp-karma'),
  protractor = require('gulp-protractor').protractor,
  webdriver_update = require('gulp-protractor').webdriver_update,
  nodemon = require('gulp-nodemon'),
  livereload = require('gulp-livereload');

var scripts = [
  'bower_components/angular/angular.js',
  'bower_components/angular-resource/angular-resource.js',
  'bower_components/angular-animate/angular-animate.js',
  'bower_components/angular-ui-router/release/angular-ui-router.js',
  'bower_components/angular-mocks/angular-mocks.js',
  'public/js/app.js',
  'public/js/system/system.js',
  'public/js/system/controllers/index.js',
  'public/js/toons/toons.js',
  'public/js/toons/controllers/toons.js',
  'public/js/toons/routes/toons.js',
  'public/js/toons/services/toons.js',
  'public/js/toons/tests/units/*.js'
]

// Runs mocha server-side tests
gulp.task('mocha', function() {
  return gulp.src('app/tests/toons_spec.js', {
      read: false
    })
    .pipe(mocha({
      reporter: 'spec'
    }))
    .on('error', function(err) {
      throw err;
    })
    .once('end', function () {
      process.exit();
    });
});

// Runs karma client-side tests
gulp.task('karma', function() {
  return gulp.src(scripts)
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      throw err;
    });
});

// Downloads the selenium webdriver
gulp.task('webdriver_update', webdriver_update);

// Runs protractor end-to-end tests
gulp.task('protractor', function() {
  gulp.src(['./src/tests/*.js'])
    .pipe(protractor({
      configFile: 'protractor.conf.js'
    }))
    .on('error', function(e) {
      throw e
    })
});

// Monitors html/js file changes, restarts server, and updates livereload
gulp.task('nodemon', function() {
  nodemon({
    script: 'server.js',
    ext: 'html js'
  })
    .on('start', function() {
      livereload.listen();
    })
    .on('restart', function() {
      // 1 second delay is required or browser will refresh before server is up
      setTimeout(function() {
        livereload.changed();
      }, 1000);
    })
});

gulp.task('default', ['nodemon']);