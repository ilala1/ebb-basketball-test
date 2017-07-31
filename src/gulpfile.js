//'use strict';
//var gulp = require('gulp'),
//    clean = require('gulp-clean'),      //cleans folder
//    plugins = require('gulp-load-plugins')();
//require('events').EventEmitter.prototype._maxListeners = 100;
//
//gulp.task('sass', require('./gulp-tasks/sass')(gulp, plugins));
//gulp.task('sass-watch', require('./gulp-tasks/sass-watch')(gulp, plugins));
//gulp.task('js', require('./gulp-tasks/scripts')(gulp, plugins));
//gulp.task('img', require('./gulp-tasks/img')(gulp, plugins));
//gulp.task('dust', require('./gulp-tasks/dust')(gulp, plugins));
//gulp.task('dust-watch', require('./gulp-tasks/dust-watch')(gulp, plugins));
//
////dist clean
//gulp.task('clean', function () {
//    var del = require('del');
//    return del(['../dist/**/*'], { force: true });
//});
//
//gulp.task('build', ['sass', 'img', 'dust', 'js']);
//gulp.task('develop', ['sass-watch', 'img', 'dust-watch', 'js']);

/*jshint node: true */
'use strict';

var gulp = require('gulp');

require('enigma-static-build')(gulp, __dirname, true);

