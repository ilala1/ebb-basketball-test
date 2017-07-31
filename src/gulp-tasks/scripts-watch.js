'use strict';
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

module.exports = function (gulp, plugins) {
    return function () {
// process JS files and return the stream.
    gulp.watch('public/html/js/*.js', ['scripts']);
    gulp.src('public/html/js/script.js')
        .pipe(browserify())
        .pipe(uglify())
        .pipe(gulp.dest('../dist'));


// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('js-watch', ['js'], function (done) {
    browserSync.reload();
    done();
});

// use default task to launch Browsersync and watch JS files
gulp.task('default', ['js'], function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch("html/js/*.js", ['js-watch']);
});
};
};
