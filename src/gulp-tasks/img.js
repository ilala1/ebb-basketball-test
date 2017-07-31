var gulp = require('gulp');

module.exports = function (gulp, plugins) {
    return function () {
    gulp.src('public/html/images/*')
        .pipe(gulp.dest('../dist/images'));
    };
};

