'use strict';

var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssmin = require('gulp-cssmin');
var autoprefixer = require('gulp-autoprefixer');
var salad = require('postcss-salad')(require('./salad.config.json'));
var fontSpider = require('gulp-font-spider');

gulp.task('compile', function() {
  return gulp.src('./src/*.css')
    .pipe(postcss([salad]))
    .pipe(autoprefixer({
      browsers: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(gulp.dest('./lib'));
});

gulp.task('copyfont', function() {
  return gulp.src('./src/fonts/**')
    .pipe(cssmin())
    .pipe(gulp.dest('./lib/fonts'));
});
gulp.task('testfont',function () {
  gulp.src('./src/fonts/*')
  .pipe(fontSpider())
  .pipe(gulp.dest('./lib/fonts'))
});
//默认的任务数组，运行gulp的时候 与运行 gulp default是同样效果, 'copyfont'
gulp.task('default', [ 'compile', 'cssmin', 'testfont'], function() {});

gulp.task('build', ['compile', 'testfont']);
gulp.task('watch', function () {
  gulp.watch('./src/*.css', ['compile']);
});