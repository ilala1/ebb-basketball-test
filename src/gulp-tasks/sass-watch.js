var gulp = require('gulp');
var sass = require('gulp-sass');

module.exports = function (gulp, plugins) {
    return function () {
        gulp.watch('public/html/css/**/*.scss', ['sass-watch']);
        gulp.src('public/html/css/**/*.scss')
            .pipe(plugins.sass())
            .pipe(gulp.dest('../dist'));
    };
};
