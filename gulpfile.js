var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var connect = require('gulp-connect-php');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', done => {
  gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle : 'compressed'}))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
  done();
});

// end config sass


gulp.task('watch', done => {
  gulp.watch('./scss/**/*.scss').on('change', gulp.series('sass'));
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
