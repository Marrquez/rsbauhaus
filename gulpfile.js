var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var connect = require('gulp-connect-php');
var sass = require('gulp-sass');

gulp.task('watch', done => {
  gulp.watch('./js/**/*.js').on('change', browserSync.reload);
  gulp.watch('./css/**/*.css').on('change', browserSync.reload);
  gulp.watch('./templates/**/*.html.twig').on('change', browserSync.reload);
  connect.server({}, function(){
    browserSync.init({
      proxy: 'http://rsbauhaus.dd:8083/'
    });
  });
  done();
});
