// *** dependencies *** //

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var connect = require('gulp-connect');


// *** tasks *** ///

gulp.task('connect', function () {
  connect.server({
    root: './src/',
    port: 8888,
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./src/*.html')
    .pipe(connect.reload());
});

gulp.task('css', function () {
  gulp.src('./src/css/*.css')
    .pipe(connect.reload());
});

gulp.task('jshint', function() {
  return gulp.src('./src/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function() {
  gulp.watch('./src/js/*.js', ['jshint']);
  gulp.watch(['./src/*.html'], ['html']);
  gulp.watch(['./src/css/*.css'], ['css']);
});

// *** default *** //
gulp.task('default', ['watch', 'connect']);