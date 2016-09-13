/**
 * Created by deepwest83 on 9/3/2016.
 */
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    jsmin = require('gulp-jsmin'),
    rename = require('gulp-rename'),
    angularProtractor = require('gulp-angular-protractor');

var source = {
    css:[
        'app/**/scss/*.scss'
    ],
    js:[
        'main.js',
        'app/components/routes.app.js',
        'app/**/**/js/*.js'
    ]
};

gulp.task('protractor', function () {
    gulp.src(['/tests/*.js'])
        .pipe(angularProtractor({
            'configFile': 'protractor.config.js',
            'autoStartStopServer': true,
            'debug': false
        }))
        .on('error', function (e) {
            throw e;
        })
});

gulp.task('source-concat', function () {
    return gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/angular/angular.min.js',
        'node_modules/angular-animate/angular-animate.min.js',
        'node_modules/angular-aria/angular-aria.min.js',
        'node_modules/angular-ui-router/release/angular-ui-router.min.js',
        'node_modules/moment/moment.js',
        'node_modules/moment/locale/de.js',
        'node_modules/angular-moment/angular-moment.min.js',
        'node_modules/material-design-lite/material.min.js',
        'assets/js/lodash.min.js',
        'assets/js/lodash.core.min.js'
    ])
        .pipe(concat('lib.js'))
        .pipe(jsmin())
        .pipe(gulp.dest('assets/js/'));
});

gulp.task('make-js', function () {
    gulp.src(source.js)
        .pipe(concat('app.js'))
        .pipe(jsmin())
        .pipe(gulp.dest('assets/js/'));
});

gulp.task('make-sourcecss', function () {
    gulp.src([
        'node_modules/material-design-lite/material.min.css'
    ])
        .pipe(sass().on('error', sass.logError))
        .pipe(cssmin())
        .pipe(concat('source.css'))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('make-css', function () {
    gulp.src(source.css)
        .pipe(sass().on('error', sass.logError))
        .pipe(cssmin())
        .pipe(concat('app.css'))
        .pipe(gulp.dest('assets/css'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(source.css, ['make-css']);
    gulp.watch(source.js, ['make-js']);
});
