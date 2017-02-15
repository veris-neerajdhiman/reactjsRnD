"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); // Runs a local dev server
var open = require('gulp-open'); // open a url in web browser
var browserify = require('browserify'); // Bundle js
var reactify = require('reactify'); // transforms react jsx to js
var source = require('vinyl-source-stream'); // use conventional text streams with Gulp
var concat = require('gulp-concat'); // concatenates files
var lint = require('gulp-eslint'); // lint js files, including JSX

var config = {
    port:9000,
    devBaseUrl:'http://localhost',
    paths: {
        html: './src/*.html',
        js:'./src/**/*.js',
        css:[
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.css',
            'node_modules/toastr/toastr.css'
        ],
        dist: './dist',
        mainJs: './src/main.js'
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

// path to js file and where they will land after build
gulp.task('js', function () {
    browserify(config.paths.mainJs)
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/scripts'))
        .pipe(connect.reload());
});

// path to css file and where they will land after build
gulp.task('css', function () {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'));
});

// lint task
gulp.task('lint', function () {
    return gulp.src(config.paths.js)
        .pipe(lint({configFile: 'eslint.config.json'}))
        .pipe(lint.format());
});

// watch any changes made in files
gulp.task('watch', function(){
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js', 'lint']);
});

// deafult task to be run when we type gulp in command line
gulp.task('default', ['html', 'js', 'css', 'lint', 'open', 'watch']);