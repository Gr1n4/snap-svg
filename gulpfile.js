'use strict';

const gulp = require('gulp'),
      connect = require('gulp-connect');

gulp.task('connect', () => {
  connect.server({
    port: 1337,
    livereload: true,
    fallback: 'index.html',
    root: './'
  });
});

gulp.task('reload', () => {
  connect.reload();
});

gulp.task('watch', () => {
  gulp.watch(['main.js', 'index.html', 'style.css'], ['reload']);
});

gulp.task('build', ['connect', 'watch']);

gulp.task('default', ['build']);