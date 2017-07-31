var gulp = require('gulp'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer');

module.exports = function (gulp, plugins) {
    return function () {
        gulp.src('public/html/css/styles.scss')
            .pipe(plugins.sass())
            .pipe(gulp.dest('../dist'));
    };
};
