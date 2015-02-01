/* jshint node:true */
'use strict';
var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

// general js code quality task that detects errors 
// and potential problems

var serverJS = [
    'routes/**/*.js',
    'routes/**/*.js',
    'gulpfile.js',
    'app.js',
    'models/**/*.js'
];

gulp.task('jshint', function() {
  // server-side js
  return gulp.src(serverJS).pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.jshint.reporter('fail'));
});

// watch for changes
gulp.task('watch', function() {
  gulp.watch(serverJS).on('change', $.livereload.changed);
});
// does this work?
