/* jshint node:true */
'use strict';
var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

// general js code quality task that detects errors 
// and potential problems
gulp.task('jshint', function() {
  // server-side js
  return gulp.src([
    'routes/**/*.js',
    'routes/**/*.js',
    'gulpfile.js',
    'app.js'
  ]).pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.jshint.reporter('fail'));
});
