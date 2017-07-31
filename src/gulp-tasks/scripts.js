'use strict';
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');


module.exports = function (gulp, plugins) {
    return function () {
    var b = browserify({
    entries: 'public/html/js/script.js',
    debug: true
  });

  return b.bundle()
    .pipe(source('script.js'))
    .pipe(buffer())
//    .pipe(sourcemaps.init({loadMaps: false}))
        // Add transformation tasks to the pipeline here.
    .pipe(uglify())
    .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('../dist'));
    };
};
