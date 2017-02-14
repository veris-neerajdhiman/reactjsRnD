"use strict".js;

var gulp = require('gulp');
var connect = require('gulp-connect'); // Runs a local dev server
var open = require('gulp-open'); // open a url in web browser

var config = {
    port:9000,
    devBaseUrl:'http://localhost',
    paths: {
        html: './src/*.html',
        dist: './dist'
    }
}


// start a local dev server
gulp.task('connect', function () {
    connect.server({
        root: ['dist'],
        port: config.port,
        base:config.devBaseUrl,
        livereload: true
    });
});

// open dev server url
gulp.task('open', ['connect'], function(){
   gulp.src('dist/index.html')
       .pipe(open({url: config.devBaseUrl + ':' + config.port + '/'}));
});

// path to html file and where they will land after build
gulp.task('html', function () {
   gulp.src(config.paths.html)
       .pipe(gulp.dest(config.paths.dist))
       .pipe(connect.reload());
});

// watch any changes made in files
gulp.task('watch', function(){
    gulp.watch(config.paths.html, ['html']);
});

// deafult task to be run when we type gulp in command line
gulp.task('default', ['html', 'open', 'watch']);