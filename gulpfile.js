'use strict';

var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    livereload = require('gulp-livereload');

var paths = {
  scripts: ['public/js/**/*.js']
}

gulp.task('nodemon', function () {
  nodemon({ script: 'server.js', ext: 'html js' })
    .on('start', function() {
      livereload.listen();
    })
    .on('restart', function () {
      // 1 second delay is required or browser will refresh before server is up
      setTimeout(function () { livereload.changed(); }, 1000);
    })
})

gulp.task('default', ['nodemon']);