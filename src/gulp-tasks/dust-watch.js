
var gulp = require('gulp'),
    dust = require('dustjs-linkedin'),
    dusthelper = require('dustjs-helpers'),
    dusthtml = require('gulp-dust-html');

module.exports = function (gulp, plugins) {
    return function () {
    gulp.watch('public/html/**/**/*.dust', ['dust']);
    gulp.src('public/html/**/*.dust')
        .pipe(dusthtml({
            basePath: 'public/html',
            data: "#", //loadDataForDust
            whitespace: true
        }))
        .pipe(gulp.dest('../dist'));
    };
};
